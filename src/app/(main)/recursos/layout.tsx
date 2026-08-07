import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Recursos",
	description:
		"Descubra os recursos do Kratikos: sistema de votação transparente, posts geolocalizados, rankings em tempo real e moderação inteligente.",
	alternates: {
		canonical: "/recursos",
	},
	openGraph: {
		title: "Recursos | Kratikos",
		description:
			"Descubra os recursos do Kratikos: votação transparente, geolocalização e mais.",
		url: "/recursos",
		siteName: "Kratikos",
		images: [
			{
				url: "/opengraph-image",
				width: 1200,
				height: 630,
				alt: "Recursos do Kratikos",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Recursos e Funcionalidades do Kratikos",
		description:
			"Ferramentas pensadas para potencializar o engajamento cívico.",
		images: ["/twitter-image"],
	},
};

export default function RecursosLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
