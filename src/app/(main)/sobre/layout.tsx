import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Sobre Nós",
	description:
		"Conheça o Kratikos e nossa missão de democratizar o acesso ao debate público e empoderar cidadãos em todas as regiões.",
	alternates: {
		canonical: "/sobre",
	},
	openGraph: {
		title: "Sobre Nós | Kratikos",
		description:
			"Conheça o Kratikos e nossa missão de democratizar o acesso ao debate público.",
		url: "/sobre",
		siteName: "Kratikos",
		images: [
			{
				url: "/opengraph-image",
				width: 1200,
				height: 630,
				alt: "Sobre Nós - Kratikos",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Sobre Nós - Kratikos",
		description: "Conheça a história e os valores do Kratikos.",
		images: ["/twitter-image"],
	},
};

export default function SobreLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
