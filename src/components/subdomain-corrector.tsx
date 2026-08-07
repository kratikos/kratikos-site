"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const DEEPLINK_ROUTES = ["/post", "/profile", "/home"];

export default function SubdomainCorrector() {
	const pathname = usePathname();

	useEffect(() => {
		if (typeof window === "undefined") return;

		const host = window.location.host;
		if (host.startsWith("deeplink.")) {
			const isDeeplinkRoute = DEEPLINK_ROUTES.some(
				(route) => pathname === route || pathname.startsWith(`${route}/`),
			);

			// Se a página atual NÃO for uma rota de deeplink (ex: /, /recursos, /sobre, etc.)
			if (!isDeeplinkRoute) {
				const mainHost = host.replace(/^deeplink\./, "");
				const targetUrl = `${window.location.protocol}//${mainHost}${window.location.pathname}${window.location.search}${window.location.hash}`;
				window.location.replace(targetUrl);
			}
		}
	}, [pathname]);

	return null;
}
