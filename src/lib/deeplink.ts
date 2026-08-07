import { trackEvent } from "./gtm";

export const APP_STORE_URL =
	process.env.NEXT_PUBLIC_APP_STORE_URL ||
	"https://apps.apple.com/us/app/kratikos/id6755405905";

export const PLAY_STORE_URL =
	process.env.NEXT_PUBLIC_PLAY_STORE_URL ||
	"https://play.google.com/store/apps/details?id=br.com.kratikos.kratikos&hl=pt_BR";

export const MAIN_SITE_URL = "https://kratikos.com.br";

export type StoreTarget = "appstore" | "googleplay" | "auto";

export interface OpenDeepLinkOptions {
	deepLink: string;
	targetStore?: StoreTarget;
	fallbackUrl?: string;
	openInNewTab?: boolean;
}

export interface SmartDownloadOptions {
	location?: string;
	router?: { push: (url: string) => void };
	pathname?: string;
}

export function detectOS(): "ios" | "android" | "other" {
	if (typeof window === "undefined") return "other";
	const ua =
		navigator.userAgent ||
		navigator.vendor ||
		(window as unknown as { opera?: string }).opera ||
		"";
	if (/iPhone|iPad|iPod/i.test(ua)) return "ios";
	if (/Android/i.test(ua)) return "android";
	return "other";
}

export function handleSmartDownloadClick(
	e: React.MouseEvent,
	options?: SmartDownloadOptions,
): void {
	if (options?.location) {
		trackEvent("click_cta_download", { location: options.location });
	}

	const os = detectOS();
	if (os === "ios") {
		e.preventDefault();
		window.location.href = APP_STORE_URL;
		return;
	}
	if (os === "android") {
		e.preventDefault();
		window.location.href = PLAY_STORE_URL;
		return;
	}

	const downloadEl =
		typeof document !== "undefined"
			? document.getElementById("download")
			: null;
	if (downloadEl) {
		e.preventDefault();
		downloadEl.scrollIntoView({ behavior: "smooth" });
		if (typeof window !== "undefined") {
			window.dispatchEvent(new CustomEvent("pulse-download-buttons"));
		}
	} else {
		if (options?.pathname && options.pathname !== "/") {
			e.preventDefault();
			if (options.router) {
				options.router.push("/#download");
			} else {
				window.location.href = "/#download";
			}
		}
	}
}

export function getStoreUrl(targetStore: StoreTarget = "auto"): string | null {
	const os = detectOS();
	if (targetStore === "appstore") return APP_STORE_URL;
	if (targetStore === "googleplay") return PLAY_STORE_URL;
	if (os === "ios") return APP_STORE_URL;
	if (os === "android") return PLAY_STORE_URL;
	return null;
}

/**
 * Resolves the full URL for a deeplink path.
 * If running locally on 'localhost:3000', returns 'http://deeplink.localhost:3000/path'.
 * In production or default, uses process.env.NEXT_PUBLIC_DEEPLINK_URL || 'https://deeplink.kratikos.com.br'.
 */
export function getDeeplinkUrl(path: string = "/"): string {
	const cleanPath = path.startsWith("/") ? path : `/${path}`;
	if (typeof window !== "undefined") {
		const host = window.location.host;
		const protocol = window.location.protocol;

		if (host.includes("localhost")) {
			if (host.startsWith("deeplink.")) {
				return `${protocol}//${host}${cleanPath}`;
			}
			return `${protocol}//deeplink.${host}${cleanPath}`;
		}
	}
	const deeplinkOrigin =
		process.env.NEXT_PUBLIC_DEEPLINK_URL || "https://deeplink.kratikos.com.br";
	return `${deeplinkOrigin}${cleanPath}`;
}

/**
 * Resolves the main site URL for a given path when on a deeplink subdomain.
 * If currently on 'deeplink.localhost:3000', returns 'http://localhost:3000/path'.
 * If currently on 'deeplink.kratikos.com.br', returns 'https://kratikos.com.br/path'.
 * Otherwise returns the original path.
 */
export function getMainSiteUrl(path: string = "/"): string {
	if (typeof window === "undefined") {
		return path;
	}
	const host = window.location.host;
	const protocol = window.location.protocol;

	if (host.startsWith("deeplink.")) {
		const mainHost = host.replace(/^deeplink\./, "");
		const cleanPath = path.startsWith("/") ? path : `/${path}`;
		return `${protocol}//${mainHost}${cleanPath}`;
	}
	return path;
}

/**
 * Handles navigation to main site pages. If on deeplink subdomain,
 * forces window.location.href to main domain so browser URL updates properly.
 */
export function navigateToMainSite(
	e: React.MouseEvent,
	path: string = "/",
): void {
	if (
		typeof window !== "undefined" &&
		window.location.host.startsWith("deeplink.")
	) {
		e.preventDefault();
		window.location.href = getMainSiteUrl(path);
	}
}

/**
 * Attempts to open the app via custom deepLink without automatically redirecting to the store.
 * Used on page mount to open app if installed, allowing users without the app to stay on the web page.
 */
export function tryOpenAppOnly(deepLink: string): void {
	if (typeof window === "undefined") return;
	window.location.href = deepLink;
}

/**
 * Attempts to open the app via custom deepLink (e.g. kratikos://...).
 * If the app is not installed (page remains in focus),
 * it automatically falls back to opening the store link in a new tab (_blank).
 */
export function openDeepLink({
	deepLink,
	targetStore = "auto",
	fallbackUrl,
	openInNewTab = true,
}: OpenDeepLinkOptions): void {
	if (typeof window === "undefined") return;

	let rawStoreUrl = fallbackUrl || getStoreUrl(targetStore);
	if (rawStoreUrl?.startsWith("/")) {
		rawStoreUrl = getDeeplinkUrl(rawStoreUrl);
	}
	const resolvedStoreUrl = rawStoreUrl;
	const startTime = Date.now();

	// Try custom scheme
	window.location.href = deepLink;

	// Set fallback timer
	const timer = setTimeout(() => {
		const elapsed = Date.now() - startTime;
		// If the browser was backgrounded, the app opened successfully
		if (document.hidden || elapsed > 2500) {
			return;
		}
		// App did not open; fallback to store link in new tab or same window if available
		if (resolvedStoreUrl) {
			if (openInNewTab) {
				const win = window.open(
					resolvedStoreUrl,
					"_blank",
					"noopener,noreferrer",
				);
				if (!win) {
					window.location.href = resolvedStoreUrl;
				}
			} else {
				window.location.href = resolvedStoreUrl;
			}
		}
	}, 1500);

	// Clear timer if page hides before timeout
	const handleVisibilityChange = () => {
		if (document.hidden) {
			clearTimeout(timer);
			document.removeEventListener("visibilitychange", handleVisibilityChange);
		}
	};
	document.addEventListener("visibilitychange", handleVisibilityChange);
}
