"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";
import { Button as ShadcnButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ButtonProps {
	children: ReactNode;
	variant?: "primary" | "secondary" | "outline" | "ghost";
	size?: "sm" | "md" | "lg";
	href?: string;
	onClick?: (e: React.MouseEvent) => void;
	className?: string;
	icon?: ReactNode;
	iconPosition?: "left" | "right";
	type?: "button" | "submit" | "reset";
	disabled?: boolean;
}

export default function Button({
	children,
	variant = "primary",
	size = "md",
	href,
	onClick,
	className = "",
	icon,
	iconPosition = "right",
	type = "button",
	disabled = false,
}: ButtonProps) {
	// Map our custom variants to Shadcn variants
	const variantMap: Record<
		string,
		"default" | "secondary" | "outline" | "ghost"
	> = {
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
			{icon && iconPosition === "left" && (
				<span className="mr-2 inline-flex items-center">{icon}</span>
			)}
			{children}
			{icon && iconPosition === "right" && (
				<span className="ml-2 inline-flex items-center">{icon}</span>
			)}
		</>
	);

	const motionProps = {
		whileHover: disabled ? undefined : { scale: 1.02 },
		whileTap: disabled ? undefined : { scale: 0.98 },
	};

	if (href && !disabled) {
		return (
			<motion.div {...motionProps} className="inline-block" tabIndex={-1}>
				<ShadcnButton
					asChild
					variant={shadcnVariant}
					size={shadcnSize}
					className={cn(
						"rounded-xl font-semibold gap-2 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black",
						className,
					)}
				>
					<Link href={href} onClick={onClick}>
						{buttonContent}
					</Link>
				</ShadcnButton>
			</motion.div>
		);
	}

	return (
		<motion.div {...motionProps} className="inline-block" tabIndex={-1}>
			<ShadcnButton
				variant={shadcnVariant}
				size={shadcnSize}
				disabled={disabled}
				className={cn(
					"rounded-xl font-semibold gap-2 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black",
					className,
				)}
				onClick={onClick}
				type={type}
			>
				{buttonContent}
			</ShadcnButton>
		</motion.div>
	);
}
