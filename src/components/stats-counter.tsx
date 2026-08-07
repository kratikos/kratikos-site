"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

interface StatsCounterProps {
	value: number;
	suffix?: string;
	label: string;
	delay?: number;
}

function AnimatedNumber({
	value,
	suffix = "",
}: {
	value: number;
	suffix?: string;
}) {
	const containerRef = useRef<HTMLSpanElement>(null);
	const desktopRef = useRef<HTMLSpanElement>(null);
	const mobileRef = useRef<HTMLSpanElement>(null);
	const isInView = useInView(containerRef, { once: true });

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
		const getMobileDisplay = (val: number) => {
			let formatted = "";
			if (val >= 1000000) {
				formatted = `${(val / 1000000).toLocaleString("pt-BR", {
					maximumFractionDigits: 1,
				})}M`;
			} else if (val >= 1000) {
				formatted = `${Math.floor(val / 1000)}k`;
			} else {
				formatted = val.toString();
			}

			if (suffix === "+") {
				return `+${formatted}`;
			}
			return `${formatted}${suffix}`;
		};

		return display.on("change", (latest) => {
			if (desktopRef.current) {
				desktopRef.current.textContent = `${latest.toLocaleString("pt-BR")}${suffix}`;
			}
			if (mobileRef.current) {
				mobileRef.current.textContent = getMobileDisplay(latest);
			}
		});
	}, [display, suffix]);

	return (
		<span ref={containerRef}>
			<span ref={desktopRef} className="hidden md:inline">
				0{suffix}
			</span>
			<span ref={mobileRef} className="md:hidden">
				0{suffix}
			</span>
		</span>
	);
}

export default function StatsCounter({
	value,
	suffix = "",
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
			<p className="text-gray-400 font-medium">{label}</p>
		</motion.div>
	);
}
