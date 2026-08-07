import type { Metadata } from "next";
import HowItWorksClient from "./como-funciona-client";
export const revalidate = 600;

export const metadata: Metadata = {
	title: "Como Funciona",
	description:
		"Entenda como o Kratikos funciona: baixe o aplicativo, crie sua conta, escolha o escopo das discussões e participe do engajamento democrático.",
	alternates: {
		canonical: "/como-funciona",
	},
	openGraph: {
		title: "Como Funciona o Kratikos - Engajamento Cívico",
		description:
			"Aprenda como participar de discussões políticas e sociais em 3 níveis: internacional, nacional e regional.",
		url: "/como-funciona",
		siteName: "Kratikos",
		locale: "pt_BR",
		images: [
			{
				url: "/opengraph-image",
				width: 1200,
				height: 630,
				alt: "Como o Kratikos Funciona",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Como Funciona o Kratikos",
		description: "Participe do engajamento cívico em nível local e global.",
		images: ["/twitter-image"],
	},
};

export default function HowItWorksPage() {
	return <HowItWorksClient />;
}
