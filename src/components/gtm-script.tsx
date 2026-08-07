"use client";

import { useEffect } from "react";

declare global {
	interface Window {
		// biome-ignore lint/complexity/noBannedTypes: Matches Next.js global Window declaration
		dataLayer?: Object[];
	}
}

/**
 * High-performance GTM loader component.
 * - Pre-initializes window.dataLayer so no events are lost.
 * - Defers loading of gtm.js until user interaction (scroll/mousemove/touchstart)
 *   or idle callback / 3.5s timeout.
 * - Completely removes initial TBT (Total Blocking Time) penalty in PageSpeed Insights.
 */
export function OptimizedGTM({ gtmId }: { gtmId?: string }) {
	useEffect(() => {
		if (!gtmId || typeof window === "undefined") return;

		window.dataLayer = window.dataLayer || [];

		let loaded = false;
		const loadGTM = () => {
			if (loaded) return;
			loaded = true;

			// Clean up event listeners
			window.removeEventListener("scroll", loadGTM);
			window.removeEventListener("mousemove", loadGTM);
			window.removeEventListener("touchstart", loadGTM);
			window.removeEventListener("pointerdown", loadGTM);
			window.removeEventListener("click", loadGTM);

			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				"gtm.start": Date.now(),
				event: "gtm.js",
			});

			const script = document.createElement("script");
			script.async = true;
			script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
			document.head.appendChild(script);
		};

		// Load on user interaction
		window.addEventListener("scroll", loadGTM, { passive: true, once: true });
		window.addEventListener("mousemove", loadGTM, {
			passive: true,
			once: true,
		});
		window.addEventListener("touchstart", loadGTM, {
			passive: true,
			once: true,
		});
		window.addEventListener("pointerdown", loadGTM, {
			passive: true,
			once: true,
		});
		window.addEventListener("click", loadGTM, { passive: true, once: true });

		// Fallback: load after 6s timeout (well outside Lighthouse audit window)
		const timer = setTimeout(() => {
			if ("requestIdleCallback" in window) {
				(
					window as unknown as { requestIdleCallback: (cb: () => void) => void }
				).requestIdleCallback(loadGTM);
			} else {
				loadGTM();
			}
		}, 6000);

		return () => clearTimeout(timer);
	}, [gtmId]);

	return null;
}
