import type { Metadata } from "next";
import { Faq } from "@/components";

export const metadata: Metadata = {
	title: "FAQ - Perguntas Frequentes",
	description: "Tire suas dúvidas sobre o Kratikos.",
	robots: {
		index: true,
		follow: true,
	},
};

export default function EmbedFaqPage() {
	return (
		<main className="py-8 min-h-screen bg-black text-white">
			<Faq className="py-0" showContactCta={false} />
		</main>
	);
}
