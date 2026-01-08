import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ScopeCardProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
  description: string;
  delay?: number;
}

export default function ScopeCard({
  icon,
  title,
  subtitle,
  description,
  delay = 0,
}: ScopeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8 }}
      className="group cursor-pointer"
    >
      <div className="relative h-full p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/15 overflow-hidden transition-all duration-300">
        {/* Content */}
        <div className="relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-all duration-300 text-white">
            {icon}
          </div>
          <p className="text-sm font-medium text-gray-600 mb-1">{subtitle}</p>
          <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
          <p className="text-gray-500 leading-relaxed">{description}</p>
        </div>

        {/* Decorative element */}
        <div className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-white/[0.02] group-hover:bg-white/[0.05] group-hover:scale-150 transition-all duration-500" />
      </div>
    </motion.div>
  );
}
