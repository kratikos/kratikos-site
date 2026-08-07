"use client";

import { motion } from "framer-motion";
import { Faq } from "@/components";

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
			name: "Ajuda",
			item: "https://kratikos.com.br/ajuda",
		},
	],
};

export default function AjudaClient() {
	return (
		<main className="pt-24 min-h-screen pb-16">
			<script
				type="application/ld+json"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: Static JSON-LD content
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
			/>

			{/* Hero */}
			<section className="relative py-12 lg:py-16">
				<div className="absolute inset-0 overflow-hidden">
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[90px] bg-glow-pattern-1 opacity-50" />
				</div>

				<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						className="max-w-3xl mx-auto"
					>
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
							Central de Ajuda
						</h1>
						<p className="text-lg text-gray-400 leading-relaxed">
							Encontre respostas para suas dúvidas sobre cadastro, privacidade,
							segurança e o funcionamento do Kratikos.
						</p>
					</motion.div>
				</div>
			</section>

			{/* Seção FAQ com Categorias e Busca */}
			<Faq showTitle={false} />
		</main>
	);
}
