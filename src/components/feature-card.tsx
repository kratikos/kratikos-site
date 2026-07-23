"use client";

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export default function FeatureCard({
  icon,
  title,
  description,
  delay = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group h-full"
    >
      <Card className={cn(
        "h-full transition-all duration-300",
        "bg-white/[0.02] border-white/5 hover:border-white/10 hover:bg-white/[0.04]"
      )}>
        <CardContent className="p-6 lg:p-8 flex flex-col h-full">
          <div className="w-14 h-14 rounded-xl bg-white/5 text-white flex items-center justify-center mb-5 group-hover:bg-white group-hover:text-black transition-all duration-300">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
          <p className="text-gray-500 leading-relaxed">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
