"use client";

import { Bell, ExternalLink, Flag, Globe, MapPin } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { getDeeplinkUrl, openDeepLink } from "@/lib/deeplink";
import { trackEvent } from "@/lib/gtm";
import { POLL_MOCKS } from "../lib/poll-mocks";
import type { Poll, PollScope } from "../types/poll";

const TABS: { id: PollScope; label: string; icon: typeof Globe }[] = [
	{ id: "internacional", label: "Internacional", icon: Globe },
	{ id: "nacional", label: "Nacional", icon: Flag },
	{ id: "regional", label: "Regional", icon: MapPin },
];

function PollCard({ poll }: { poll: Poll }) {
	const totalVotes = useMemo(
		() => poll.options.reduce((sum, opt) => sum + (opt.votesCount || 0), 0),
		[poll.options],
	);
	const visibleOptions = poll.options.slice(0, 2);

	return (
		<div className="bg-white/[0.03] rounded-xl p-3 border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all">
			<div>
				<p className="text-white text-xs sm:text-sm font-medium mb-3 line-clamp-2 leading-snug">
					{poll.question}
				</p>

				<div className="space-y-2 mb-3">
					{visibleOptions.map((option) => {
						const percentage =
							totalVotes > 0
								? Math.round((option.votesCount / totalVotes) * 100)
								: 0;
						return (
							<div key={option.id} className="space-y-1">
								<div className="flex items-center justify-between text-xs">
									<span className="text-white/90 truncate pr-2 text-[11px] sm:text-xs">
										{option.content}
									</span>
									<span className="text-gray-300 tabular-nums font-medium text-[11px] sm:text-xs">
										{percentage}%
									</span>
								</div>
								<div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
									<div
										className="h-full bg-white/90 rounded-full transition-all"
										style={{ width: `${percentage}%` }}
									/>
								</div>
							</div>
						);
					})}
				</div>
			</div>

			<button
				type="button"
				onClick={() => {
					const postId = poll.post?.id || poll.id;
					trackEvent("click_poll_ver_no_app", { poll_id: postId });
					openDeepLink({
						deepLink: `kratikos://post?data=${postId}`,
						fallbackUrl: getDeeplinkUrl(`/post?data=${postId}`),
					});
				}}
				className="w-full mt-2 py-2 px-3 bg-white text-black text-xs font-semibold rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-white"
			>
				Ver no app <ExternalLink size={12} />
			</button>
		</div>
	);
}

export default function PhonePollCarousel({
	prefetchedPolls,
}: {
	prefetchedPolls?: Partial<Record<PollScope, Poll[]>>;
} = {}) {
	const [activeScope, setActiveScope] = useState<PollScope>("internacional");

	const cachedPolls = useRef<Record<PollScope, Poll[]>>({
		internacional: prefetchedPolls?.internacional?.length
			? prefetchedPolls.internacional
			: POLL_MOCKS.internacional,
		nacional: prefetchedPolls?.nacional?.length
			? prefetchedPolls.nacional
			: POLL_MOCKS.nacional,
		regional: prefetchedPolls?.regional?.length
			? prefetchedPolls.regional
			: POLL_MOCKS.regional,
	});

	const [polls, setPolls] = useState<Poll[]>(cachedPolls.current.internacional);

	useEffect(() => {
		setPolls(cachedPolls.current[activeScope]);
	}, [activeScope]);

	const handleScopeChange = (scope: PollScope) => {
		setActiveScope(scope);
		trackEvent("select_poll_scope", { scope });
	};

	return (
		<div className="relative mx-auto w-[280px] sm:w-[320px] h-[580px] sm:h-[640px] bg-black rounded-[3rem] border-2 border-white/10 shadow-2xl overflow-hidden">
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-10" />

			<div className="absolute inset-2 rounded-[2.5rem] bg-[#1d1d1d] overflow-hidden border border-white/5 flex flex-col">
				<div className="p-4 pt-8 flex items-center justify-between">
					<div className="flex items-center">
						<Image
							src="/visual-identity/logo-horizontal-light.svg"
							alt="Kratikos App - Interface de Enquetes"
							width={100}
							height={20}
							priority
							loading="eager"
							fetchPriority="high"
							style={{ width: "auto", height: "auto" }}
							className="h-5 w-auto"
						/>
					</div>
					<Bell size={20} className="text-gray-400" />
				</div>

				<div
					className="flex border-b border-white/5"
					role="tablist"
					aria-label="Escopos de enquetes"
				>
					{TABS.map((tab) => {
						const Icon = tab.icon;
						const isActive = tab.id === activeScope;
						return (
							<button
								key={tab.id}
								type="button"
								role="tab"
								aria-selected={isActive}
								aria-controls={`panel-${tab.id}`}
								id={`tab-${tab.id}`}
								onClick={() => handleScopeChange(tab.id)}
								className={`min-h-[44px] flex-1 py-2 px-2 text-center text-xs sm:text-sm font-medium transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-white/50 ${
									isActive
										? "text-white border-b-2 border-white"
										: "text-gray-400 border-b-2 border-transparent hover:text-gray-200"
								}`}
							>
								<Icon size={16} className="inline mr-1" />
								<br /> {tab.label}
							</button>
						);
					})}
				</div>

				<div
					className="flex-1 p-3 overflow-hidden flex flex-col"
					role="tabpanel"
					id={`panel-${activeScope}`}
					aria-labelledby={`tab-${activeScope}`}
				>
					<div className="flex-1 overflow-y-auto space-y-3 pr-1 scrollbar-thin">
						{polls.map((poll) => (
							<PollCard key={poll.id} poll={poll} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
