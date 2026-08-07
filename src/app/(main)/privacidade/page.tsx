import type { Metadata } from "next";
import PrivacidadeClient from "./privacidade-client";

export const revalidate = 600;

export const metadata: Metadata = {
	title: "Política de Privacidade e Proteção de Dados (LGPD)",
	description:
		"Política de privacidade, retenção de dados, cookies e exclusão de conta da plataforma Kratikos em conformidade com a LGPD.",
	alternates: {
		canonical: "/privacidade",
	},
	openGraph: {
		title: "Política de Privacidade - Kratikos",
		description:
			"Saiba como o Kratikos protege seus dados pessoais, respeita a LGPD e garante transparência total.",
		url: "/privacidade",
		siteName: "Kratikos",
		locale: "pt_BR",
		images: [
			{
				url: "/opengraph-image",
				width: 1200,
				height: 630,
				alt: "Política de Privacidade - Kratikos",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Política de Privacidade - Kratikos",
		description: "Saiba como o Kratikos protege seus dados e cumpre a LGPD.",
		images: ["/twitter-image"],
	},
};

export default function PrivacyPage() {
	return <PrivacidadeClient />;
}
