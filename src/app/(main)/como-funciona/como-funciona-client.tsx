"use client";
import { motion } from "framer-motion";
import {
	CheckCircle2,
	Download,
	Globe,
	MessageSquare,
	ThumbsUp,
	TrendingUp,
	UserPlus,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components";
import { openDeepLink } from "@/lib/deeplink";
import { trackEvent } from "@/lib/gtm";

const steps = [
	{
		number: "01",
		icon: <Download size={28} />,
		title: "Baixe o App",
		description:
			"Disponível gratuitamente na App Store e Google Play. A instalação leva menos de 1 minuto.",
		details: ["iOS 12+ ou Android 8+", "Menos de 50MB", "Sem anúncios"],
	},
	{
		number: "02",
		icon: <UserPlus size={28} />,
		title: "Crie sua Conta",
		description:
			"Cadastro rápido com Google ou Apple. Seus dados são protegidos e nunca compartilhados.",
		details: [
			"Login social rápido",
			"Verificação de email",
			"Perfil personalizável",
		],
	},
	{
		number: "03",
		icon: <Globe size={28} />,
		title: "Escolha o Alcance",
		description:
			"Navegue entre discussões internacionais, nacionais ou regionais baseadas na sua localização.",
		details: [
			"3 níveis de discussão",
			"Filtros por tema",
			"Localização automática",
		],
	},
	{
		number: "04",
		icon: <ThumbsUp size={28} />,
		title: "Vote e Participe",
		description:
			"Dê sua opinião votando em posts e contribua para destacar os temas mais relevantes.",
		details: [
			"Votos positivos/negativos",
			"Sistema anti-fraude",
			"Histórico de votos",
		],
	},
	{
		number: "05",
		icon: <MessageSquare size={28} />,
		title: "Comente e Debata",
		description:
			"Aprofunde discussões com comentários estruturados. Responda e interaja com outros usuários.",
		details: [
			"Threads organizadas",
			"Menções de usuários",
			"Notificações em tempo real",
		],
	},
	{
		number: "06",
		icon: <TrendingUp size={28} />,
		title: "Acompanhe Tendências",
		description:
			"Veja os temas em alta, rankings de engajamento e métricas da comunidade.",
		details: [
			"Rankings em tempo real",
			"Métricas transparentes",
			"Recomendações personalizadas",
		],
	},
];

const breadcrumbJsonLd = {
	"@context": "https://schema.org",
	"@type": "BreadcrumbList",
	itemListElement: [
		{
			"@type": "ListItem",
			position: 1,
			name: "Início",
			item: "https://kratikos.com.br/",
		},
		{
			"@type": "ListItem",
			position: 2,
			name: "Como Funciona",
			item: "https://kratikos.com.br/como-funciona",
		},
	],
};

export default function HowItWorksClient() {
	return (
		<main className="pt-24">
			<script
				type="application/ld+json"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: Static JSON-LD content
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
			/>
			{/* Hero */}
			<section className="relative py-16 lg:py-24">
				<div className="absolute inset-0 overflow-hidden">
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[80px] bg-glow-pattern-1" />
				</div>

				<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						className="text-center max-w-3xl mx-auto"
					>
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
							Como o Kratikos Funciona: sua opinião em poucos passos
						</h1>
						<p className="text-lg text-gray-500 leading-relaxed">
							Em poucos minutos você estará participando de discussões que
							importam. Veja como é simples começar.
						</p>
					</motion.div>
				</div>
			</section>

			{/* Steps */}
			<section className="py-16 lg:py-24">
				<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="sr-only">Passo a passo para usar o Kratikos</h2>
					<div className="relative">
						{/* Vertical line */}
						<div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent hidden md:block" />

						<div className="space-y-12">
							{steps.map((step, index) => (
								<motion.div
									key={step.number}
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.1 }}
									className="relative grid md:grid-cols-[80px_1fr] gap-6 items-start"
								>
									{/* Number circle */}
									<div className="relative z-10 w-16 h-16 rounded-2xl bg-white text-black flex items-center justify-center font-bold text-xl">
										{step.number}
									</div>

									{/* Content */}
									<div className="glass p-6 lg:p-8 rounded-2xl">
										<div className="flex items-start gap-4 mb-4">
											<div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white shrink-0">
												{step.icon}
											</div>
											<div>
												<h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
													{step.title}
												</h3>
												<p className="text-gray-500 leading-relaxed">
													{step.description}
												</p>
											</div>
										</div>
										<div className="flex flex-wrap gap-3 mt-4 ml-16">
											{step.details.map((detail) => (
												<span
													key={detail}
													className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 text-sm text-gray-400"
												>
													<CheckCircle2 size={14} className="text-white" />
													{detail}
												</span>
											))}
										</div>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="py-16 lg:py-24 bg-white/[0.01] border-y border-white/5">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
					>
						<h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
							Pronto para começar?
						</h2>
						<p className="text-gray-500 text-lg mb-8 max-w-xl mx-auto">
							Junte-se a quem já está participando das discussões que movem a
							sociedade.
						</p>
						<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
							<Button
								variant="primary"
								size="lg"
								onClick={() => {
									trackEvent("click_store_download", {
										store: "app_store",
										location: "como_funciona",
									});
									openDeepLink({
										deepLink: "kratikos://home",
										targetStore: "appstore",
									});
								}}
								icon={
									<Image
										src="/stores/appstore-icon.svg"
										alt="Baixar Kratikos na App Store"
										width={24}
										height={24}
										className="h-6 w-6"
									/>
								}
								iconPosition="left"
							>
								App Store
							</Button>
							<Button
								variant="outline"
								size="lg"
								onClick={() => {
									trackEvent("click_store_download", {
										store: "google_play",
										location: "como_funciona",
									});
									openDeepLink({
										deepLink: "kratikos://home",
										targetStore: "googleplay",
									});
								}}
								icon={
									<Image
										src="/stores/gplay-icon.svg"
										alt="Baixar Kratikos no Google Play"
										width={24}
										height={24}
										className="h-6 w-6"
									/>
								}
								iconPosition="left"
							>
								Google Play
							</Button>
						</div>
					</motion.div>
				</div>
			</section>
		</main>
	);
}
