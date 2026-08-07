import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Como Funciona",
	description:
		"Entenda como o Kratikos funciona. Baixe o app, crie sua conta e participe de discussões geolocalizadas em minutos.",
	alternates: {
		canonical: "/como-funciona",
	},
	openGraph: {
		title: "Como Funciona | Kratikos",
		description:
			"Entenda como o Kratikos funciona. Baixe o app e participe de discussões.",
		url: "/como-funciona",
		siteName: "Kratikos",
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
		title: "Como Funciona - Kratikos",
		description:
			"Aprenda como utilizar a plataforma Kratikos e fazer sua voz ser ouvida.",
		images: ["/twitter-image"],
	},
};

export default function ComoFuncionaLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
