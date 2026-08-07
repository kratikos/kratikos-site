"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import Button from "./button";

export interface FaqItem {
	id: string;
	question: string;
	answer: string;
	categories: string[];
}

export const FAQ_CATEGORIES = [
	"Geral",
	"Conta e Cadastro",
	"Privacidade",
	"Exclusão de conta",
	"Moderação e Segurança",
	"Funcionamento",
] as const;

export type FaqCategory = (typeof FAQ_CATEGORIES)[number];

export const defaultFaqData: FaqItem[] = [
	// --- Geral & Funcionamento ---
	{
		id: "o-que-e-kratikos",
		question: "O que é o Kratikos?",
		answer:
			"Kratikos é uma rede social de opinião e enquetes, onde você vota, comenta e acompanha o que outras pessoas pensam sobre política, economia, esportes, entretenimento e outros assuntos do momento.",
		categories: ["Geral", "Funcionamento"],
	},
	{
		id: "como-funcionam-enquetes",
		question: "Como funcionam as enquetes no Kratikos?",
		answer:
			"Cada tema pode gerar uma enquete. Você vota a favor ou contra, comenta e acompanha em tempo real como pensam as pessoas.",
		categories: ["Geral", "Funcionamento"],
	},
	{
		id: "kratikos-e-gratuito",
		question: "O Kratikos é gratuito?",
		answer:
			"Sim. O uso do KRATIKOS é gratuito. Não há cobrança para criar conta, publicar conteúdo, votar em enquetes ou acessar notícias.",
		categories: ["Geral", "Funcionamento"],
	},
	{
		id: "como-funciona-moderacao",
		question: "Como funciona a moderação?",
		answer:
			"Combinamos moderação automática com uma equipe de moderadores humanos. Usuários também podem reportar conteúdos inadequados.",
		categories: ["Geral", "Moderação e Segurança"],
	},
	{
		id: "dados-protegidos-geral",
		question: "Meus dados são protegidos?",
		answer:
			"Absolutamente. Seguimos a LGPD e as melhores práticas de privacidade. Seus dados nunca são vendidos ou compartilhados.",
		categories: ["Geral", "Privacidade"],
	},
	{
		id: "uso-localizacao-geral",
		question: "Posso usar sem revelar minha localização?",
		answer:
			"Sim. A localização só é usada para posts regionais e você pode desativar a qualquer momento. Discussões internacionais e nacionais não requerem localização.",
		categories: ["Geral", "Privacidade"],
	},
	{
		id: "como-calculados-rankings",
		question: "Como são calculados os rankings?",
		answer:
			"Os rankings consideram votos, comentários, frequência de participação e qualidade das contribuições, sempre de forma transparente.",
		categories: ["Geral", "Funcionamento"],
	},
	{
		id: "kratikos-so-politica",
		question: "O Kratikos é só sobre política?",
		answer:
			"Não. Além de política e economia, o Kratikos reúne enquetes e discussões sobre esportes, entretenimento, notícias e assuntos locais.",
		categories: ["Geral", "Funcionamento"],
	},

	// --- Conta e Cadastro ---
	{
		id: "idade-minima",
		question: "Qual é a idade mínima para usar o KRATIKOS?",
		answer:
			"Você precisa ter 18 anos completos para criar uma conta no KRATIKOS. A plataforma envolve debates sobre temas cívicos e políticos, e por isso é direcionada exclusivamente ao público adulto. Ao se cadastrar, você declara ter a idade mínima exigida.",
		categories: ["Conta e Cadastro"],
	},
	{
		id: "fornecer-cpf",
		question: "Preciso fornecer meu CPF para usar o KRATIKOS?",
		answer:
			"Não. A verificação de identidade por CPF é totalmente opcional. Você pode usar todas as funcionalidades do aplicativo sem verificar sua conta. A verificação confere apenas um selo de autenticidade ao seu perfil, aumentando a confiança da comunidade em suas interações.",
		categories: ["Conta e Cadastro"],
	},
	{
		id: "cpf-após-verificacao",
		question: "O que acontece com meu CPF após a verificação?",
		answer:
			"Seu CPF é enviado de forma criptografada ao SERPRO exclusivamente para confirmar a validade do registro. Após a consulta, o KRATIKOS não armazena o número do seu CPF em texto puro. Mantemos apenas um código criptografado (hash) que indica que sua conta foi verificada com sucesso.",
		categories: ["Conta e Cadastro"],
	},
	{
		id: "login-sem-google-apple",
		question: "Posso usar o KRATIKOS sem fazer login com Google ou Apple?",
		answer:
			"No momento, o cadastro é realizado exclusivamente via Google Sign-In ou Sign in with Apple. Esses métodos garantem maior segurança na autenticação e dispensam a necessidade de criar e memorizar senhas adicionais.",
		categories: ["Conta e Cadastro"],
	},

	// --- Privacidade ---
	{
		id: "quais-dados-coletados",
		question: "Quais dados o KRATIKOS coleta sobre mim?",
		answer:
			"Coletamos apenas os dados necessários para o Funcionamento: nome, e-mail e foto de perfil (fornecidos pelo Google/Apple no login), sua localização em nível de cidade e estado (para o feed regional), suas interações na plataforma (posts, comentários, votos) e dados técnicos de segurança (endereço IP e logs de acesso). Detalhes completos estão na nossa Política de Privacidade.",
		categories: ["Privacidade"],
	},
	{
		id: "votos-publicos",
		question: "Meus votos em enquetes são públicos?",
		answer:
			"Não. Seus votos individuais são privados. Nenhum outro usuário pode ver em qual opção você votou. A plataforma exibe publicamente apenas os resultados agregados (percentuais totais) de cada enquete.",
		categories: ["Privacidade"],
	},
	{
		id: "rastreia-gps",
		question: "O KRATIKOS rastreia minha localização exata (GPS)?",
		answer:
			"Não. O KRATIKOS utiliza sua localização apenas em nível de cidade e estado para personalizar o feed de notícias regionais. Não rastreamos coordenadas exatas de GPS em segundo plano, nem compartilhamos sua localização com outros usuários.",
		categories: ["Privacidade"],
	},
	{
		id: "vende-dados",
		question: "O KRATIKOS vende meus dados para terceiros?",
		answer:
			"Não. O KRATIKOS nunca vende, comercializa ou compartilha seus dados pessoais com terceiros para fins de publicidade ou marketing. Compartilhamos informações apenas com fornecedores de infraestrutura tecnológica (servidores, inteligência artificial) estritamente necessários para o funcionamento do aplicativo, e sempre sob contratos rigorosos de confidencialidade.",
		categories: ["Privacidade"],
	},
	{
		id: "uso-ia-dados",
		question: "O KRATIKOS usa inteligência artificial com meus dados?",
		answer:
			"Sim, de forma limitada e transparente. Utilizamos IA para agrupar notícias por tema (similaridade semântica) e para detectar comportamentos fraudulentos (bots, manipulação de votos). Seus dados pessoais diretos (nome, e-mail) não são enviados para os sistemas de inteligência artificial. Apenas o conteúdo textual dos posts e notícias é processado para fins de organização do feed.",
		categories: ["Privacidade"],
	},
	{
		id: "direitos-lgpd",
		question: "Quais são meus direitos sobre meus dados (LGPD)?",
		answer:
			"A Lei Geral de Proteção de Dados garante a você os seguintes direitos:\n• Confirmar se tratamos seus dados e acessar uma cópia deles.\n• Corrigir dados incompletos ou desatualizados.\n• Solicitar a exclusão dos seus dados pessoais.\n• Revogar seu consentimento a qualquer momento.\n• Solicitar a revisão de decisões automatizadas que afetem sua conta.\n\nPara exercer qualquer desses direitos, entre em contato com nosso Encarregado de Dados (DPO) pelo e-mail dpo@kratikos.com.br.",
		categories: ["Privacidade"],
	},

	// --- Exclusão de Conta ---
	{
		id: "como-excluir-conta",
		question: "Como excluo minha conta?",
		answer:
			"Você pode excluir sua conta de duas formas: diretamente pelo aplicativo (Perfil > Configurações > Privacidade e Segurança > Excluir Minha Conta) ou pela nossa página web de exclusão. A exclusão é processada em até 15 dias úteis.",
		categories: ["Exclusão de conta"],
	},
	{
		id: "posts-comentarios-exclusao",
		question:
			"O que acontece com meus posts e comentários quando excluo minha conta?",
		answer:
			'Para preservar a integridade dos debates já realizados na plataforma, seus posts e comentários públicos serão anonimizados (aparecerão como "Usuário Excluído"). Se você deseja que seus posts sejam completamente apagados, recomendamos que os exclua manualmente dentro do aplicativo antes de solicitar a exclusão da conta.',
		categories: ["Exclusão de conta"],
	},
	{
		id: "exclusao-definitiva",
		question: "A exclusão é definitiva? Posso recuperar minha conta depois?",
		answer:
			"Sim, a exclusão é irreversível. Após o processamento, não será possível recuperar sua conta, seus dados, seus seguidores ou seu histórico de interações.",
		categories: ["Exclusão de conta"],
	},
	{
		id: "dados-retidos-exclusao",
		question: "O KRATIKOS retém algum dado após a exclusão?",
		answer:
			"Por obrigação legal (Art. 15 do Marco Civil da Internet), somos obrigados a manter exclusivamente os registros de acesso (endereço IP e data/hora de login) pelo prazo de 6 meses após a exclusão. Após esse período, esses logs também são destruídos. Nenhum outro dado pessoal é retido.",
		categories: ["Exclusão de conta"],
	},

	// --- Moderação e Segurança ---
	{
		id: "como-denunciar",
		question: "Como denuncio um conteúdo ou usuário?",
		answer:
			'Em qualquer post, comentário ou perfil de usuário, toque no ícone de três pontos (⋮) e selecione "Denunciar". Escolha o motivo da denúncia e envie. Nossa equipe de moderação analisará o caso dentro dos prazos estabelecidos (até 24 horas para conteúdos urgentes e até 72 horas para demais violações).',
		categories: ["Moderação e Segurança"],
	},
	{
		id: "como-bloquear",
		question: "Como bloqueio outro usuário?",
		answer:
			'Acesse o perfil do usuário que deseja bloquear, toque no ícone de três pontos (⋮) e selecione "Bloquear". O usuário bloqueado não poderá visualizar seus posts, comentar em suas publicações ou enviar interações para você.',
		categories: ["Moderação e Segurança"],
	},
	{
		id: "post-removido",
		question: "Meu post foi removido. O que posso fazer?",
		answer:
			"Se o seu conteúdo foi removido, você receberá uma notificação explicando qual regra das Diretrizes da Comunidade foi violada. Caso discorde da decisão, você tem o direito de contestar. Basta seguir o link na notificação ou enviar um e-mail para contato@kratikos.com.br. Sua contestação será analisada por um moderador humano.",
		categories: ["Moderação e Segurança"],
	},
	{
		id: "score-fator-risco",
		question: 'O que é o "score" ou "fator de risco" da minha conta?',
		answer:
			"O KRATIKOS utiliza um sistema automatizado de prevenção à fraude que atribui um indicador de confiança às contas. Esse sistema visa identificar bots e comportamentos inautênticos (como manipulação coordenada de votos). Se você é um usuário legítimo, esse sistema não afetará sua experiência. Caso sua conta seja restringida por engano, você pode solicitar a revisão humana da decisão.",
		categories: ["Moderação e Segurança"],
	},
	{
		id: "colaboracao-judicial",
		question: "O KRATIKOS colabora com a polícia ou o Judiciário?",
		answer:
			"Sim. Em cumprimento à legislação brasileira (Marco Civil da Internet), o KRATIKOS preserva evidências e fornece dados cadastrais e registros de conexão exclusivamente mediante ordem judicial. Não fornecemos dados a terceiros privados ou a autoridades sem determinação judicial válida.",
		categories: ["Moderação e Segurança"],
	},

	// --- Funcionamento (específica) ---
	{
		id: "exibe-publicidade",
		question: "O KRATIKOS exibe publicidade?",
		answer:
			"No momento do lançamento, o KRATIKOS não exibe publicidade de terceiros. Caso isso mude no futuro, esta política será atualizada e você será notificado com antecedência.",
		categories: ["Funcionamento"],
	},
];

/**
 * Normaliza uma string removendo acentos, caracteres especiais e convertendo para minúsculas.
 */
function normalizeText(text: string): string {
	return text
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.toLowerCase()
		.replace(/[^a-z0-9\s]/g, " ");
}

/**
 * Converte um texto em tokens de busca significativos.
 */
function tokenize(text: string): string[] {
	return normalizeText(text)
		.split(/\s+/)
		.filter((token) => token.length > 1);
}

/**
 * Calcula a pontuação de relevância de um item em relação aos tokens de busca.
 */
function calculateRelevance(item: FaqItem, searchTokens: string[]): number {
	if (searchTokens.length === 0) return 0;

	const questionNormalized = normalizeText(item.question);
	const answerNormalized = normalizeText(item.answer);

	let score = 0;

	for (const token of searchTokens) {
		if (questionNormalized.includes(token)) {
			score += 3; // Maior peso para correspondência na pergunta
		}
		if (answerNormalized.includes(token)) {
			score += 1; // Peso para correspondência na resposta
		}
	}

	return score;
}

interface FaqProps {
	items?: FaqItem[];
	showTitle?: boolean;
	title?: string;
	subtitle?: string;
	className?: string;
	includeJsonLd?: boolean;
	showContactCta?: boolean;
}

export default function Faq({
	items = defaultFaqData,
	showTitle = true,
	title = "Perguntas Frequentes",
	subtitle = "Tire suas dúvidas sobre o Kratikos.",
	className = "",
	includeJsonLd = true,
	showContactCta = true,
}: FaqProps) {
	const [selectedCategory, setSelectedCategory] = useState<string>("Geral");
	const [searchQuery, setSearchQuery] = useState<string>("");

	// Processa a busca por tokens ou o filtro por categoria
	const { filteredItems, isSearching } = useMemo(() => {
		const searchTokens = tokenize(searchQuery);

		if (searchTokens.length > 0) {
			// Busca em TODAS as categorias por relevância de tokens
			const scoredItems = items
				.map((item) => ({
					item,
					score: calculateRelevance(item, searchTokens),
				}))
				.filter(({ score }) => score > 0)
				.sort((a, b) => b.score - a.score)
				.map(({ item }) => item);

			return {
				filteredItems: scoredItems,
				isSearching: true,
			};
		}

		// Filtra pela categoria selecionada
		const categoryFiltered = items.filter((item) =>
			item.categories ? item.categories.includes(selectedCategory) : true,
		);

		return {
			filteredItems: categoryFiltered,
			isSearching: false,
		};
	}, [items, selectedCategory, searchQuery]);

	const faqJsonLd = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: items.map((item) => ({
			"@type": "Question",
			name: item.question,
			acceptedAnswer: {
				"@type": "Answer",
				text: item.answer,
			},
		})),
	};

	return (
		<section className={`py-12 lg:py-16 ${className}`}>
			{includeJsonLd && (
				<script
					type="application/ld+json"
					// biome-ignore lint/security/noDangerouslySetInnerHtml: Static JSON-LD content
					dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
				/>
			)}
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				{showTitle && (
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-10"
					>
						<h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
							{title}
						</h2>
						{subtitle && (
							<p className="text-gray-400 text-lg max-w-xl mx-auto">
								{subtitle}
							</p>
						)}
					</motion.div>
				)}

				{/* Barra de Pesquisa */}
				<div className="mb-8 relative max-w-2xl mx-auto">
					<div className="relative flex items-center">
						<Search
							size={20}
							className="absolute left-4 text-gray-400 pointer-events-none"
						/>
						<input
							type="text"
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							placeholder="Buscar perguntas, dúvidas ou palavras-chave..."
							className="w-full pl-12 pr-12 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent transition-all shadow-inner"
						/>
						{searchQuery && (
							<button
								type="button"
								onClick={() => setSearchQuery("")}
								aria-label="Limpar busca"
								className="absolute right-4 p-1 text-gray-400 hover:text-white rounded-lg transition-colors"
							>
								<X size={18} />
							</button>
						)}
					</div>
				</div>

				{/* Botões Toggle de Categoria (Shadcn UI) */}
				{!isSearching && (
					<div className="mb-10 flex justify-center">
						<ToggleGroup
							type="single"
							value={selectedCategory}
							onValueChange={(val) => {
								if (val) setSelectedCategory(val);
							}}
							className="glass p-1.5 rounded-2xl flex flex-wrap justify-center gap-1.5"
						>
							{FAQ_CATEGORIES.map((cat) => (
								<ToggleGroupItem
									key={cat}
									value={cat}
									aria-label={`Filtrar por ${cat}`}
									className="px-4 py-2 text-sm font-medium rounded-xl transition-all"
								>
									{cat}
								</ToggleGroupItem>
							))}
						</ToggleGroup>
					</div>
				)}

				{/* Feedback de Busca */}
				{isSearching && (
					<div className="mb-6 text-center">
						<p className="text-sm text-gray-400">
							Mostrando {filteredItems.length} resultado
							{filteredItems.length !== 1 ? "s " : " "}para &ldquo;
							<span className="text-white font-medium">{searchQuery}</span>
							&rdquo;
						</p>
					</div>
				)}

				{/* Lista de Perguntas */}
				<div className="space-y-4">
					<AnimatePresence mode="wait">
						{filteredItems.length > 0 ? (
							filteredItems.map((item, index) => (
								<motion.details
									key={item.id || index}
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -10 }}
									transition={{ delay: Math.min(index * 0.05, 0.3) }}
									className="group glass rounded-2xl overflow-hidden transition-all hover:bg-white/[0.07]"
								>
									<summary className="flex items-center justify-between p-6 cursor-pointer list-none select-none">
										<span className="text-white font-semibold pr-4 text-left leading-snug">
											{item.question}
										</span>
										<ChevronRight
											size={20}
											className="text-gray-400 transition-transform duration-200 group-open:rotate-90 shrink-0 ml-2"
										/>
									</summary>
									<div className="px-6 pb-6 text-gray-300 leading-relaxed whitespace-pre-line text-sm sm:text-base border-t border-white/5 pt-4 mt-1">
										{item.answer}
									</div>
								</motion.details>
							))
						) : (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								className="text-center py-12 glass rounded-2xl"
							>
								<p className="text-gray-400 text-lg mb-2">
									Nenhuma pergunta encontrada.
								</p>
								<p className="text-gray-500 text-sm">
									Tente buscar por outros termos ou explore as categorias.
								</p>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>

			{/* Seção Não achou o que procurava (Template "Pronto para participar?") */}
			{showContactCta && (
				<section className="relative py-20 lg:py-28 mt-48 border-t border-white/5 overflow-hidden">
					<div className="absolute inset-0 overflow-hidden pointer-events-none">
						<div
							className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full blur-[80px]"
							style={{
								background:
									"radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(128,128,128,0.04) 40%, transparent 70%)",
							}}
						/>
					</div>

					<div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
						>
							<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
								Não achou o que procurava?
							</h2>
							<p className="text-gray-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
								Nossa equipe está pronta para responder suas dúvidas e ajudar no
								que for preciso.
							</p>

							<div className="flex items-center justify-center">
								<Button variant="primary" size="lg" href="/contato">
									Falar com a gente
								</Button>
							</div>
						</motion.div>
					</div>
				</section>
			)}
		</section>
	);
}
