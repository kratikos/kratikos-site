"use client";

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { Button as ShadcnButton } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  type?: 'button' | 'submit' | 'reset';
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
  type = 'button',
}: ButtonProps) {
  // Map our custom variants to Shadcn variants
  const variantMap: Record<string, "default" | "secondary" | "outline" | "ghost"> = {
    primary: "default",
    secondary: "secondary",
    outline: "outline",
    ghost: "ghost",
  };

  const sizeMap: Record<string, "default" | "sm" | "lg"> = {
    sm: "sm",
    md: "default",
    lg: "lg",
  };

  const shadcnVariant = variantMap[variant] || "default";
  const shadcnSize = sizeMap[size] || "default";

  const buttonContent = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </>
  );

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
  };

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <ShadcnButton
          asChild
          variant={shadcnVariant}
          size={shadcnSize}
          className={cn("rounded-xl font-semibold gap-2", className)}
        >
          <Link href={href}>
            {buttonContent}
          </Link>
        </ShadcnButton>
      </motion.div>
    );
  }

  return (
    <motion.div {...motionProps} className="inline-block">
      <ShadcnButton
        variant={shadcnVariant}
        size={shadcnSize}
        className={cn("rounded-xl font-semibold gap-2", className)}
        onClick={onClick}
        type={type}
      >
        {buttonContent}
      </ShadcnButton>
    </motion.div>
  );
}
