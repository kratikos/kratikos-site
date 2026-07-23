"use client";

import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Bell,
  Flag,
  Globe,
  MapPin,
  MessageSquare,
} from 'lucide-react';
import { getPopularPolls } from '../lib/api';
import { POLL_MOCKS } from '../lib/poll-mocks';
import type { Poll, PollScope } from '../types/poll';

const TABS: { id: PollScope; label: string; icon: typeof Globe }[] = [
  { id: 'internacional', label: 'Internacional', icon: Globe },
  { id: 'nacional', label: 'Nacional', icon: Flag },
  { id: 'regional', label: 'Regional', icon: MapPin },
];

const ROTATION_INTERVAL_MS = 5000;

function formatCount(value: number): string {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `${(value / 1_000).toFixed(1)}K`;
  return String(value);
}

function PollSlide({ poll }: { poll: Poll }) {
  const totalVotes = useMemo(
    () => poll.options.reduce((sum, opt) => sum + (opt.votesCount || 0), 0),
    [poll.options],
  );
  const visibleOptions = poll.options.slice(0, 2);

  return (
    <div className="bg-white/[0.02] rounded-xl p-3 border border-white/5">
      <p className="text-white text-sm font-medium mb-3 line-clamp-2">
        {poll.question}
      </p>

      <div className="space-y-2 mb-3">
        {visibleOptions.map((option) => {
          const percentage =
            totalVotes > 0 ? Math.round((option.votesCount / totalVotes) * 100) : 0;
          return (
            <div key={option.id} className="space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="text-white/90 truncate pr-2">{option.content}</span>
                <span className="text-gray-400 tabular-nums">{percentage}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                <div
                  className="h-full bg-white/80 rounded-full transition-all"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-3 text-xs text-gray-500">
        <span className="tabular-nums">{formatCount(totalVotes)} votos</span>
        <span className="flex items-center gap-1 ml-auto">
          <MessageSquare size={12} />
          {formatCount(poll.post?.commentsCount ?? 0)}
        </span>
      </div>
    </div>
  );
}

function SlideSkeleton() {
  return (
    <div className="bg-white/[0.02] rounded-xl p-3 border border-white/5 animate-pulse">
      <div className="h-3 w-3/4 rounded bg-white/10 mb-2" />
      <div className="h-3 w-2/3 rounded bg-white/10 mb-4" />
      <div className="space-y-2 mb-3">
        <div className="h-1.5 w-full rounded-full bg-white/10" />
        <div className="h-1.5 w-full rounded-full bg-white/10" />
      </div>
      <div className="flex justify-between">
        <div className="h-2.5 w-12 rounded bg-white/10" />
        <div className="h-2.5 w-8 rounded bg-white/10" />
      </div>
    </div>
  );
}

export default function PhonePollCarousel() {
  const [activeScope, setActiveScope] = useState<PollScope>('internacional');
  const [polls, setPolls] = useState<Poll[]>(() => POLL_MOCKS.internacional);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setActiveIndex(0);

    getPopularPolls(activeScope, 3, controller.signal)
      .then((result) => {
        if (controller.signal.aborted) return;
        setPolls(result.length > 0 ? result : POLL_MOCKS[activeScope]);
      })
      .catch((err) => {
        if (err?.name === 'AbortError') return;
        setPolls(POLL_MOCKS[activeScope]);
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      });

    return () => controller.abort();
  }, [activeScope]);

  const slideCount = polls.length;
  const shouldRotate = !loading && !isHovering && slideCount > 1;

  useEffect(() => {
    if (!shouldRotate) return;
    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slideCount);
    }, ROTATION_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [shouldRotate, slideCount]);

  const directionRef = useRef(1);
  const handleDotClick = (index: number) => {
    directionRef.current = index > activeIndex ? 1 : -1;
    setActiveIndex(index);
  };

  return (
    <div
      className="relative mx-auto w-[280px] sm:w-[320px] h-[580px] sm:h-[640px] bg-black rounded-[3rem] border-2 border-white/10 shadow-2xl overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-10" />

      <div className="absolute inset-2 rounded-[2.5rem] bg-black overflow-hidden border border-white/5 flex flex-col">
        <div className="bg-black/80 p-4 flex items-center justify-between border-b border-white/5">
          <div className="flex items-center">
            <img src="/visual-identity/logo-horizontal-light.svg" alt="Kratikos" className="h-5 w-auto" />
          </div>
          <Bell size={20} className="text-gray-500" />
        </div>

        <div className="flex border-b border-white/5">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = tab.id === activeScope;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveScope(tab.id)}
                className={`flex-1 py-3 text-center text-sm transition-colors ${
                  isActive
                    ? 'text-white border-b-2 border-white font-medium'
                    : 'text-gray-600 hover:text-gray-400'
                }`}
              >
                <Icon size={16} className="inline mr-1" /> {tab.label}
              </button>
            );
          })}
        </div>

        <div className="flex-1 p-3 flex flex-col">
          <div className="relative flex-1">
            {loading || slideCount === 0 ? (
              <SlideSkeleton />
            ) : (
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={polls[activeIndex]?.id ?? activeIndex}
                  initial={{ opacity: 0, x: 24 * directionRef.current }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 * directionRef.current }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                  <PollSlide poll={polls[activeIndex]} />
                </motion.div>
              </AnimatePresence>
            )}
          </div>

          {slideCount > 1 && !loading && (
            <div className="flex items-center justify-center gap-1.5 pt-3">
              {polls.map((poll, index) => (
                <button
                  key={poll.id}
                  type="button"
                  aria-label={`Ir para enquete ${index + 1}`}
                  onClick={() => handleDotClick(index)}
                  className={`h-1.5 rounded-full transition-all ${
                    index === activeIndex
                      ? 'w-5 bg-white'
                      : 'w-1.5 bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
