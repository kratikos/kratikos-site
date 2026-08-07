import type { Metadata } from "next";
import AboutClient from "./sobre-client";
export const revalidate = 600;

export const metadata: Metadata = {
	title: "Sobre Nós",
	description:
		"Conheça a história, missão e valores do Kratikos. Nossa missão é democratizar o acesso ao debate público e empoderar cada cidadão.",
	alternates: {
		canonical: "/sobre",
	},
	openGraph: {
		title: "Sobre o Kratikos - Engajamento Cívico e Democracia",
		description:
			"Democratizando o acesso ao debate público do bairro ao mundo.",
		url: "/sobre",
		siteName: "Kratikos",
		locale: "pt_BR",
		images: [
			{
				url: "/opengraph-image",
				width: 1200,
				height: 630,
				alt: "Sobre o Kratikos",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Sobre o Kratikos",
		description: "Conheça nossa missão e visão para o engajamento cívico.",
		images: ["/twitter-image"],
	},
};

export default function AboutPage() {
	return <AboutClient />;
}
