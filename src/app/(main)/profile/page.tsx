import type { Metadata } from "next";
import DeepLinkLanding from "@/components/deep-link-landing";

export const metadata: Metadata = {
	title: "Abrir perfil",
	robots: { index: false, follow: false },
};

export default function DeepLinkProfilePage() {
	return (
		<DeepLinkLanding
			deepLink="kratikos://profile"
			eyebrow="Seu espaço"
			title="Abra seu perfil no Kratikos"
			description="Acesse seu perfil, suas publicações e suas métricas diretamente no app."
		/>
	);
}
