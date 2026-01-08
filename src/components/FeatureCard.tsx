import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

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
      className="group"
    >
      <div className="h-full p-6 lg:p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300">
        <div className="w-14 h-14 rounded-xl bg-white/5 text-white flex items-center justify-center mb-5 group-hover:bg-white group-hover:text-black transition-all duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-500 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
