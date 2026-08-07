"use client";
import { motion } from "framer-motion";
import { CheckCircle, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components";
import { Instagram, Linkedin, TikTok, Twitter } from "@/components/brand-icons";
import { trackEvent } from "@/lib/gtm";

const contactInfo = [
	{
		icon: <Mail size={24} />,
		title: "Email",
		value: "contato@kratikos.com.br",
		href: "mailto:contato@kratikos.com.br",
	},
	{
		icon: <MapPin size={24} />,
		title: "Localização",
		value: "São Paulo, Brasil",
		href: null,
	},
];

const socialLinks = [
	{
		icon: <Twitter size={20} />,
		href: "https://x.com/Kratikosoficial",
		label: "Twitter (X)",
	},
	{
		icon: <TikTok size={20} />,
		href: "https://www.tiktok.com/@kratikosoficial",
		label: "TikTok",
	},
	{
		icon: <Instagram size={20} />,
		href: "https://www.instagram.com/kratikosoficial",
		label: "Instagram",
	},
	{
		icon: <Linkedin size={20} />,
		href: "https://www.linkedin.com/company/kratikos/",
		label: "LinkedIn",
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
			name: "Contato",
			item: "https://kratikos.com.br/contato",
		},
	],
};

export default function ContactClient() {
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [errorMessage, setErrorMessage] = useState<string | null>(null);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setErrorMessage(null);

		trackEvent("generate_lead", {
			subject: formState.subject || "nao_especificado",
		});

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formState),
			});

			const data = await response.json();

			if (!response.ok) {
				throw new Error(
					data.error || "Ocorreu um erro ao enviar sua mensagem.",
				);
			}

			setIsSubmitted(true);
			setFormState({ name: "", email: "", subject: "", message: "" });

			setTimeout(() => setIsSubmitted(false), 8000);
		} catch (err: unknown) {
			const msg =
				err instanceof Error
					? err.message
					: "Falha ao enviar a mensagem. Tente novamente.";
			setErrorMessage(msg);
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>,
	) => {
		setFormState((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

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
					<div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[80px] bg-glow-pattern-1" />
					<div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[60px] bg-glow-pattern-2" />
				</div>

				<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						className="text-center max-w-3xl mx-auto mb-16"
					>
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
							Fale Conosco:
							<br />
							Contato com a Equipe Kratikos
						</h1>
						<p className="text-lg text-gray-400 leading-relaxed">
							Tem uma pergunta, sugestão ou quer saber mais sobre o Kratikos?
							Ficaremos felizes em ouvir você.
						</p>
					</motion.div>

					<div className="grid lg:grid-cols-3 gap-8">
						{/* Contact Info */}
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							className="lg:col-span-1 space-y-6"
						>
							{contactInfo.map((info) => (
								<div
									key={info.title}
									className="glass p-6 rounded-2xl flex items-start gap-4"
								>
									<div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-black shrink-0">
										{info.icon}
									</div>
									<div>
										<p className="text-sm text-gray-400 mb-1">{info.title}</p>
										{info.href ? (
											<a
												href={info.href}
												onClick={() =>
													trackEvent("click_contact_email", {
														email_type: info.title.toLowerCase(),
													})
												}
												className="text-white font-medium hover:opacity-80 transition-opacity"
											>
												{info.value}
											</a>
										) : (
											<p className="text-white font-medium">{info.value}</p>
										)}
									</div>
								</div>
							))}

							{/* Social Links */}
							<div className="glass p-6 rounded-2xl">
								<p className="text-sm text-gray-400 mb-4">Redes Sociais</p>
								<div className="flex items-center gap-3">
									{socialLinks.map((social) => (
										<a
											key={social.label}
											href={social.href}
											target="_blank"
											rel="noopener noreferrer"
											aria-label={social.label}
											onClick={() =>
												trackEvent("click_social_link", {
													platform: social.label,
													location: "contact",
												})
											}
											className="min-w-[44px] min-h-[44px] w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
										>
											{social.icon}
										</a>
									))}
								</div>
							</div>
						</motion.div>

						{/* Contact Form */}
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							className="lg:col-span-2"
						>
							<div className="glass p-8 rounded-3xl">
								{isSubmitted ? (
									<motion.div
										initial={{ opacity: 0, scale: 0.95 }}
										animate={{ opacity: 1, scale: 1 }}
										className="text-center py-12"
									>
										<div className="w-16 h-16 mx-auto rounded-full bg-white flex items-center justify-center text-black mb-6">
											<CheckCircle size={32} />
										</div>
										<h3 className="text-2xl font-bold text-white mb-2">
											Mensagem enviada!
										</h3>
										<p className="text-gray-400">
											Obrigado pelo contato. Responderemos em breve.
										</p>
									</motion.div>
								) : (
									<form onSubmit={handleSubmit} className="space-y-6">
										{errorMessage && (
											<div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
												{errorMessage}
											</div>
										)}
										<div className="grid sm:grid-cols-2 gap-6">
											<div>
												<label
													htmlFor="name"
													className="block text-sm font-medium text-gray-400 mb-2"
												>
													Nome{" "}
													<span className="text-red-400" aria-hidden="true">
														*
													</span>
												</label>
												<input
													type="text"
													id="name"
													name="name"
													value={formState.name}
													onChange={handleChange}
													required
													aria-required="true"
													disabled={isSubmitting}
													className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-colors disabled:opacity-50"
													placeholder="Seu nome"
												/>
											</div>
											<div>
												<label
													htmlFor="email"
													className="block text-sm font-medium text-gray-400 mb-2"
												>
													Email{" "}
													<span className="text-red-400" aria-hidden="true">
														*
													</span>
												</label>
												<input
													type="email"
													id="email"
													name="email"
													value={formState.email}
													onChange={handleChange}
													required
													aria-required="true"
													disabled={isSubmitting}
													className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-colors disabled:opacity-50"
													placeholder="seu@email.com"
												/>
											</div>
										</div>

										<div>
											<label
												htmlFor="subject"
												className="block text-sm font-medium text-gray-400 mb-2"
											>
												Assunto{" "}
												<span className="text-red-400" aria-hidden="true">
													*
												</span>
											</label>
											<select
												id="subject"
												name="subject"
												value={formState.subject}
												onChange={handleChange}
												required
												aria-required="true"
												disabled={isSubmitting}
												className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-colors disabled:opacity-50"
											>
												<option value="" className="bg-black text-gray-300">
													Selecione um assunto
												</option>
												<option value="duvida" className="bg-black text-white">
													Dúvida
												</option>
												<option
													value="sugestao"
													className="bg-black text-white"
												>
													Sugestão
												</option>
												<option
													value="parceria"
													className="bg-black text-white"
												>
													Parceria
												</option>
												<option
													value="imprensa"
													className="bg-black text-white"
												>
													Imprensa
												</option>
												<option value="outro" className="bg-black text-white">
													Outro
												</option>
											</select>
										</div>

										<div>
											<label
												htmlFor="message"
												className="block text-sm font-medium text-gray-400 mb-2"
											>
												Mensagem{" "}
												<span className="text-red-400" aria-hidden="true">
													*
												</span>
											</label>
											<textarea
												id="message"
												name="message"
												value={formState.message}
												onChange={handleChange}
												required
												aria-required="true"
												disabled={isSubmitting}
												rows={5}
												className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-colors resize-none disabled:opacity-50"
												placeholder="Escreva sua mensagem..."
											/>
										</div>

										<Button
											type="submit"
											variant="primary"
											size="lg"
											disabled={isSubmitting}
											className="w-full"
											icon={isSubmitting ? undefined : <Send size={18} />}
										>
											{isSubmitting ? "Enviando..." : "Enviar Mensagem"}
										</Button>
									</form>
								)}
							</div>
						</motion.div>
					</div>
				</div>
			</section>
		</main>
	);
}
