"use client";

import {
	ArrowRight,
	ExternalLink,
	Flag,
	Globe,
	MapPin,
	Smartphone,
	Tag,
} from "lucide-react";
import { useEffect, useState } from "react";
import {
	detectOS,
	MAIN_SITE_URL,
	navigateToMainSite,
	openDeepLink,
	tryOpenAppOnly,
} from "@/lib/deeplink";
import { trackEvent } from "@/lib/gtm";

interface DeepLinkLandingProps {
	deepLink: string;
	eyebrow?: string;
	categoryName?: string | null;
	scope?: string | null;
	title: string;
	description: string;
	content?: string | null;
	author?: string | null;
}

export default function DeepLinkLanding({
	deepLink,
	eyebrow = "Conteúdo compartilhado",
	categoryName,
	scope,
	title,
	description,
	content,
	author,
}: DeepLinkLandingProps) {
	const [userOS, setUserOS] = useState<"ios" | "android" | "other">("other");

	useEffect(() => {
		setUserOS(detectOS());
		// Tenta abrir o app silenciosamente ao carregar a página de deeplink.
		const timer = setTimeout(() => {
			tryOpenAppOnly(deepLink);
		}, 400);

		return () => clearTimeout(timer);
	}, [deepLink]);

	const handleOpenApp = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		trackEvent("click_deeplink_open_app", { deepLink, title });
		openDeepLink({ deepLink, openInNewTab: true });
	};

	return (
		<main className="relative isolate min-h-[72vh] overflow-hidden">
			<div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_15%,rgba(255,255,255,0.12),transparent_34%)]" />
			<div className="mx-auto flex max-w-4xl flex-col items-center px-6 py-20 text-center sm:py-28">
				<div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
					<Smartphone className="h-8 w-8 text-white" aria-hidden="true" />
				</div>
				<p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-zinc-400">
					{eyebrow}
				</p>

				{(categoryName || scope) && (
					<div className="mb-5 flex flex-wrap items-center justify-center gap-2">
						{categoryName && (
							<span className="inline-flex items-start rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-semibold text-white backdrop-blur-md shadow-sm">
								<Tag className="mr-1.5 h-3 w-3 text-white" />
								{categoryName}
							</span>
						)}
						{scope && (
							<span className="inline-flex items-start rounded-full border border-white/10 bg-zinc-800/80 px-3.5 py-1 text-xs font-medium capitalize text-zinc-300 backdrop-blur-md">
								{scope === "internacional" && (
									<Globe className="mr-1.5 h-3 w-3" />
								)}
								{scope === "nacional" && <Flag className="mr-1.5 h-3 w-3" />}
								{scope === "regional" && <MapPin className="mr-1.5 h-3 w-3" />}
								{scope}
							</span>
						)}
					</div>
				)}

				<h1 className="max-w-3xl text-balance text-4xl font-bold tracking-tight text-white sm:text-6xl">
					{title}
				</h1>
				{!content || description.trim() !== content.trim() ? (
					<p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
						{description}
					</p>
				) : null}

				{content ? (
					<article className="mt-10 w-full max-w-2xl rounded-3xl border border-white/10 bg-zinc-950/80 p-7 text-left shadow-2xl shadow-black/40">
						<p className="whitespace-pre-line text-lg leading-8 text-zinc-100">
							{content}
						</p>
						{author ? (
							<p className="mt-5 text-sm font-semibold text-zinc-500">
								Publicado por {author}
							</p>
						) : null}
					</article>
				) : null}

				<div className="mt-10 flex flex-col gap-3 sm:flex-row items-center justify-center">
					{userOS === "other" ? (
						<>
							<a
								href={deepLink}
								onClick={(e) => {
									e.preventDefault();
									trackEvent("click_deeplink_open_app", {
										deepLink,
										store: "appstore",
									});
									openDeepLink({
										deepLink,
										targetStore: "appstore",
										openInNewTab: true,
									});
								}}
								className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-black transition hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
							>
								App Store
								<ArrowRight className="h-5 w-5" aria-hidden="true" />
							</a>
							<a
								href={deepLink}
								onClick={(e) => {
									e.preventDefault();
									trackEvent("click_deeplink_open_app", {
										deepLink,
										store: "googleplay",
									});
									openDeepLink({
										deepLink,
										targetStore: "googleplay",
										openInNewTab: true,
									});
								}}
								className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-black transition hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
							>
								Google Play
								<ArrowRight className="h-5 w-5" aria-hidden="true" />
							</a>
						</>
					) : (
						<a
							href={deepLink}
							onClick={handleOpenApp}
							className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-black transition hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
						>
							Abrir no app
							<ArrowRight className="h-5 w-5" aria-hidden="true" />
						</a>
					)}
					<a
						href={MAIN_SITE_URL}
						onClick={(e) => {
							trackEvent("click_deeplink_explore_web", {
								location: "deeplink_landing",
							});
							navigateToMainSite(e, "/");
						}}
						className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3 font-semibold text-white transition hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
					>
						Conhecer o Kratikos
						<ExternalLink className="h-4 w-4" aria-hidden="true" />
					</a>
				</div>
				<p className="mt-5 text-sm text-zinc-600">
					Se o app estiver instalado, o conteúdo será aberto diretamente. Caso
					contrário, você será redirecionado para a loja de aplicativos.
				</p>
			</div>
		</main>
	);
}
