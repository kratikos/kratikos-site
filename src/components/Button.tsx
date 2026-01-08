import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  icon,
  iconPosition = 'right',
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 gap-2';
  
  const variants = {
    primary: 'bg-white text-black hover:bg-gray-100',
    secondary: 'bg-white/10 text-white hover:bg-white/20 border border-white/10',
    outline: 'border border-white/20 text-white hover:bg-white/5 hover:border-white/30',
    ghost: 'text-white hover:bg-white/5',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const Component = href ? 'a' : 'button';
  const props = href ? { href } : { onClick };

  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Component
        {...props}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      >
        {icon && iconPosition === 'left' && icon}
        {children}
        {icon && iconPosition === 'right' && icon}
      </Component>
    </motion.div>
  );
}
