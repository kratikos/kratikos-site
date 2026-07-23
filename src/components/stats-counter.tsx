"use client";

import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface StatsCounterProps {
  value: number;
  suffix?: string;
  label: string;
  delay?: number;
}

function AnimatedNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  const spring = useSpring(0, {
    mass: 1,
    stiffness: 75,
    damping: 15,
  });

  const display = useTransform(spring, (current) => Math.round(current));

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  useEffect(() => {
    return display.on('change', (latest) => {
      setDisplayValue(latest);
    });
  }, [display]);

  return (
    <span ref={ref}>
      {displayValue.toLocaleString('pt-BR')}
      {suffix}
    </span>
  );
}

export default function StatsCounter({
  value,
  suffix = '',
  label,
  delay = 0,
}: StatsCounterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
        <AnimatedNumber value={value} suffix={suffix} />
      </div>
      <p className="text-gray-600">{label}</p>
    </motion.div>
  );
}
