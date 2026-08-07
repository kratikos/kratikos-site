"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

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
			name: "Política de Privacidade",
			item: "https://kratikos.com.br/privacidade",
		},
	],
};

type TabType = "privacidade" | "cookies" | "exclusao";

export default function PrivacidadeClient() {
	const [activeTab, setActiveTab] = useState<TabType>("privacidade");

	const tabs = [
		{
			id: "privacidade" as TabType,
			label: "Política de Privacidade",
		},
		{
			id: "cookies" as TabType,
			label: "Política de Cookies",
		},
		{
			id: "exclusao" as TabType,
			label: "Exclusão de Dados",
		},
	];

	return (
		<main className="pt-28 min-h-screen pb-24 text-gray-100 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
			<script
				type="application/ld+json"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: Static JSON-LD content
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
			/>

			{/* Header Section */}
			<section className="mb-8">
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3 }}
				>
					<h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
						Política de Privacidade e Proteção de Dados
					</h1>
				</motion.div>

				{/* Formal Text-Only Tabs */}
				<div className="mt-6 border-b border-white/15 flex flex-wrap gap-6">
					{tabs.map((tab) => {
						const isActive = activeTab === tab.id;
						return (
							<button
								type="button"
								key={tab.id}
								onClick={() => setActiveTab(tab.id)}
								className={`pb-3 text-sm font-semibold transition-colors focus:outline-none border-b-2 -mb-px ${
									isActive
										? "border-white text-white"
										: "border-transparent text-gray-400 hover:text-gray-200"
								}`}
							>
								{tab.label}
							</button>
						);
					})}
				</div>
			</section>

			{/* Main Tab Content */}
			<section>
				<AnimatePresence mode="wait">
					{activeTab === "privacidade" && (
						<motion.div
							key="privacidade"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.2 }}
							className="space-y-8 text-gray-300 leading-relaxed"
						>
							<div>
								<h2 className="text-2xl font-bold text-white mb-4">
									Política de Privacidade
								</h2>
								<p>
									A privacidade dos seus dados é uma prioridade para o KRATIKOS.
									Esta Política de Privacidade explica como a ______________
									(&quot;Controladora&quot;), inscrita no CNPJ _________,
									coleta, usa, compartilha e protege suas informações pessoais
									ao utilizar nosso aplicativo e site, em conformidade com a Lei
									Geral de Proteção de Dados Pessoais (LGPD - Lei nº
									13.709/2018).
								</p>
							</div>

							<div className="space-y-3">
								<h3 className="text-lg font-bold text-white">
									1. Dados que coletamos
								</h3>
								<p>Coletamos dados para fornecer e melhorar nossos serviços:</p>
								<ol className="space-y-2 list-decimal list-inside">
									<li>
										<strong>Dados de Cadastro:</strong> Nome, e-mail, foto de
										perfil (quando você se cadastra via Google Sign-In ou Sign
										in with Apple).
									</li>
									<li>
										<strong>Dados de Uso e Interação:</strong> Conteúdos que
										você posta, comentários, curtidas, enquetes respondidas,
										contas que você segue e que seguem você.
									</li>
									<li>
										<strong>Dados Sensíveis (Opinião Política):</strong> Ao
										participar de debates e votar em enquetes, você pode revelar
										suas opiniões políticas. Tratamos esses dados exclusivamente
										com base no seu consentimento explícito. Seus votos
										individuais são privados; apenas resultados agregados são
										exibidos publicamente.
									</li>
									<li>
										<strong>Geolocalização:</strong> Coletamos sua localização
										em nível de cidade e estado para personalizar o feed de
										notícias (regional). Não rastreamos coordenadas exatas de
										GPS em segundo plano.
									</li>
									<li>
										<strong>Verificação de Identidade (Opcional):</strong> Caso
										opte por verificar sua conta, solicitaremos seu CPF para
										consulta junto ao SERPRO. O CPF não é armazenado em texto
										puro após a verificação; mantemos apenas um identificador
										criptografado de status.
									</li>
									<li>
										<strong>Dados Técnicos:</strong> Endereço IP, modelo do
										dispositivo, sistema operacional e logs de acesso
										(armazenados por 6 meses, conforme o Marco Civil da
										Internet).
									</li>
								</ol>
							</div>

							<div className="space-y-4">
								<h3 className="text-lg font-bold text-white">
									2. Como Usamos Seus Dados (Finalidades, Bases Legais e
									Descarte)
								</h3>
								<div className="overflow-x-auto">
									<table className="w-full text-left text-gray-300 border-collapse">
										<thead>
											<tr className="border-b border-white/20 text-white">
												<th className="py-2 pr-4 font-semibold">Finalidade</th>
												<th className="py-2 px-4 font-semibold">
													Dados Utilizados
												</th>
												<th className="py-2 pl-4 font-semibold">
													Base Legal de tratamento (LGPD)
												</th>
											</tr>
										</thead>
										<tbody className="divide-y divide-white/10">
											<tr>
												<td className="py-2.5 pr-4">
													Criar e gerenciar sua conta
												</td>
												<td className="py-2.5 px-4 text-gray-400">
													Nome, E-mail, Foto
												</td>
												<td className="py-2.5 pl-4">
													Execução de Contrato (Art. 7º, V)
												</td>
											</tr>
											<tr>
												<td className="py-2.5 pr-4">
													Exibir feed regionalizado
												</td>
												<td className="py-2.5 px-4 text-gray-400">
													Cidade/Estado
												</td>
												<td className="py-2.5 pl-4">
													Execução de Contrato (Art. 7º, V)
												</td>
											</tr>
											<tr>
												<td className="py-2.5 pr-4">
													Registrar votos e opiniões políticas
												</td>
												<td className="py-2.5 px-4 text-gray-400">
													Votos em enquetes, comentários
												</td>
												<td className="py-2.5 pl-4">
													Consentimento (Art. 11, I)
												</td>
											</tr>
											<tr>
												<td className="py-2.5 pr-4">
													Verificar identidade e prevenir fraudes
												</td>
												<td className="py-2.5 px-4 text-gray-400">
													CPF (opcional), IP, Score de risco
												</td>
												<td className="py-2.5 pl-4">
													Legítimo Interesse / Prevenção à Fraude (Art. 11, II,
													&apos;g&apos;)
												</td>
											</tr>
											<tr>
												<td className="py-2.5 pr-4">
													Cumprir obrigações legais (Marco Civil)
												</td>
												<td className="py-2.5 px-4 text-gray-400">
													IP, Data e Hora de acesso
												</td>
												<td className="py-2.5 pl-4">
													Obrigação Legal (Art. 7º, II)
												</td>
											</tr>
										</tbody>
									</table>
								</div>

								<h4 className="text-base font-bold text-white pt-2">
									Tabela de retenção e Descarte de Dados
								</h4>
								<div className="overflow-x-auto">
									<table className="w-full text-left text-sm text-gray-300 border-collapse">
										<thead>
											<tr className="border-b border-white/20 text-white">
												<th className="py-2 pr-4 font-semibold">
													Categoria de Dado
												</th>
												<th className="py-2 px-4 font-semibold">
													Prazo de Retenção (Conta Ativa)
												</th>
												<th className="py-2 px-4 font-semibold">
													Prazo de Retenção (Após Exclusão da Conta)
												</th>
												<th className="py-2 pl-4 font-semibold">
													Ação de Descarte
												</th>
											</tr>
										</thead>
										<tbody className="divide-y divide-white/10">
											<tr>
												<td className="py-2.5 pr-4">
													Dados Cadastrais (Nome, E-mail, Tokens)
												</td>
												<td className="py-2.5 px-4 text-gray-400">
													Enquanto a conta estiver ativa.
												</td>
												<td className="py-2.5 px-4 text-gray-400">
													Até 15 dias após a solicitação de exclusão.
												</td>
												<td className="py-2.5 pl-4">
													Exclusão definitiva dos bancos de dados (PostgreSQL).
												</td>
											</tr>
											<tr>
												<td className="py-2.5 pr-4">
													Logs de Acesso (IP, Data/Hora de Login)
												</td>
												<td className="py-2.5 px-4 text-gray-400">
													6 meses rotativos.
												</td>
												<td className="py-2.5 px-4 text-gray-400">
													6 meses a partir da data de cada acesso.
												</td>
												<td className="py-2.5 pl-4">
													Exclusão automatizada (Obrigação do Marco Civil).
												</td>
											</tr>
											<tr>
												<td className="py-2.5 pr-4">
													Conteúdo Público (Posts, Comentários, Votos)
												</td>
												<td className="py-2.5 px-4 text-gray-400">
													Enquanto a conta estiver ativa ou até o usuário apagar
													o post.
												</td>
												<td className="py-2.5 px-4 text-gray-400">
													Prazo indeterminado (mantido na plataforma).
												</td>
												<td className="py-2.5 pl-4">
													Anonimização irreversível. O conteúdo permanece, mas a
													autoria é substituída por &quot;Usuário Excluído&quot;
													no PostgreSQL e Qdrant.
												</td>
											</tr>
											<tr>
												<td className="py-2.5 pr-4">
													Denúncias e Registros de Moderação
												</td>
												<td className="py-2.5 px-4 text-gray-400">5 anos.</td>
												<td className="py-2.5 px-4 text-gray-400">5 anos.</td>
												<td className="py-2.5 pl-4">
													Mantidos para defesa em processos judiciais
													(Prescrição Civil). Acesso restrito à equipe jurídica.
												</td>
											</tr>
											<tr>
												<td className="py-2.5 pr-4">
													Backups do Banco de Dados
												</td>
												<td className="py-2.5 px-4 text-gray-400">30 dias.</td>
												<td className="py-2.5 px-4 text-gray-400">
													30 dias (ciclo de sobrescrita).
												</td>
												<td className="py-2.5 pl-4">
													Os dados excluídos em produção desaparecerão dos
													backups naturalmente após 30 dias. Restaurações de
													backup devem respeitar o status de contas excluídas.
												</td>
											</tr>
											<tr>
												<td className="py-2.5 pr-4">Vetores de IA (Qdrant)</td>
												<td className="py-2.5 px-4 text-gray-400">
													Enquanto o conteúdo existir.
												</td>
												<td className="py-2.5 px-4 text-gray-400">
													Imediato (sincronizado com a exclusão/anonimização no
													PostgreSQL).
												</td>
												<td className="py-2.5 pl-4">
													Exclusão dos vetores de IA no Qdrant.
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>

							<div className="space-y-3">
								<h3 className="text-lg font-bold text-white">
									3. Com Quem Compartilhamos Seus Dados
								</h3>
								<p>
									O KRATIKOS não vende seus dados pessoais. Compartilhamos
									informações apenas com Operadores estritamente necessários
									para o funcionamento do app:
								</p>
								<ul className="space-y-1.5 list-disc list-inside">
									<li>
										Provedores de Nuvem e Banco de Dados: Para hospedar o
										aplicativo (ex.: Railway, PostgreSQL).
									</li>
									<li>
										Serviços de Inteligência Artificial: Utilizamos APIs (como
										OpenAI e Qdrant) para agrupamento semântico de notícias.
										Seus dados pessoais diretos (nome, e-mail) não são enviados
										a essas IAs.
									</li>
									<li>
										SERPRO: Exclusivamente no momento da verificação opcional de
										CPF.
									</li>
									<li>
										Autoridades Públicas: Apenas mediante ordem judicial
										específica.
									</li>
								</ul>
							</div>

							<div className="space-y-2">
								<h3 className="text-lg font-bold text-white">
									4. Uso de Inteligência Artificial e Perfilamento
								</h3>
								<p>
									Utilizamos IA para calcular um &quot;score de confiança&quot;
									e &quot;fator de risco&quot; visando identificar bots e
									prevenir manipulações de votos. Você tem o direito de
									solicitar a revisão humana de qualquer decisão automatizada
									que afete sua conta.
								</p>
							</div>

							<div className="space-y-2">
								<h3 className="text-lg font-bold text-white">
									5. Seus Direitos (Art. 18 da LGPD)
								</h3>
								<p>Você tem o direito de:</p>
								<ul className="space-y-1 list-disc list-inside">
									<li>
										Confirmar a existência de tratamento e acessar seus dados.
									</li>
									<li>Corrigir dados incompletos ou desatualizados.</li>
									<li>Revogar seu consentimento a qualquer momento.</li>
									<li>
										Solicitar a exclusão da sua conta e dos seus dados pessoais.
									</li>
								</ul>
							</div>

							<div className="space-y-2">
								<h3 className="text-lg font-bold text-white">
									6. Exclusão de Conta e Retenção de Dados
								</h3>
								<p>
									Você pode excluir sua conta no próprio aplicativo
									(Configurações &gt; Excluir Conta) ou via web.
								</p>
								<p>Ao solicitar a exclusão:</p>
								<ul className="space-y-1 list-disc list-inside">
									<li>
										Seus dados de identificação (nome, e-mail, tokens de login)
										serão apagados em até 15 dias.
									</li>
									<li>
										Anonimização de Conteúdo: Seus posts, comentários e votos
										públicos serão anonimizados (desvinculados de você) para
										preservar o contexto dos debates, a menos que você apague os
										posts manualmente antes de excluir a conta.
									</li>
									<li>
										Reteremos apenas os logs de acesso (IP, data/hora) pelo
										prazo legal inegociável de 6 meses (Art. 15 do Marco Civil
										da Internet).
									</li>
								</ul>
							</div>

							<div className="space-y-2">
								<h3 className="text-lg font-bold text-white">7. Segurança</h3>
								<p>
									Adotamos medidas técnicas e administrativas rigorosas,
									incluindo criptografia em trânsito (HTTPS) e em repouso, para
									proteger seus dados contra acessos não autorizados.
								</p>
							</div>

							<div className="space-y-2 pt-2">
								<h3 className="text-lg font-bold text-white">
									8. Contato do Encarregado (DPO)
								</h3>
								<p>
									Para exercer seus direitos ou tirar dúvidas sobre privacidade,
									entre em contato com nosso Encarregado pelo Tratamento de
									Dados Pessoais: Email:{" "}
									<a
										href="mailto:dpo@kratikos.com.br"
										className="text-white underline"
									>
										dpo@kratikos.com.br
									</a>
								</p>
							</div>
						</motion.div>
					)}

					{activeTab === "cookies" && (
						<motion.div
							key="cookies"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.2 }}
							className="space-y-8 text-gray-300 leading-relaxed"
						>
							<div>
								<h2 className="text-2xl font-bold text-white mb-4">
									Política de Cookies e Armazenamento Local
								</h2>
								<p>
									Esta política explica como o <strong>KRATIKOS</strong> utiliza{" "}
									<em>cookies</em>, <em>SharedPreferences</em>, banco de dados
									local (SQLite) e tecnologias semelhantes em nosso aplicativo
									móvel e site público.
								</p>
							</div>

							<div className="space-y-2">
								<h3 className="text-lg font-bold text-white">
									1. O que são essas tecnologias?
								</h3>
								<ul className="space-y-1.5 list-disc list-inside">
									<li>
										<strong>Cookies:</strong> Pequenos arquivos de texto
										armazenados no seu navegador quando você visita nosso site
										público.
									</li>
									<li>
										<strong>SharedPreferences / Keychain:</strong> Mecanismos de
										armazenamento seguro no seu dispositivo móvel, usados pelo
										nosso aplicativo para salvar preferências e tokens de
										sessão.
									</li>
									<li>
										<strong>SQLite (Banco de dados local):</strong> Um banco de
										dados no seu celular usado pelo aplicativo KRATIKOS para
										armazenar dados temporários e permitir que o app funcione
										mais rápido e offline.
									</li>
								</ul>
							</div>

							<div className="space-y-4">
								<h3 className="text-lg font-bold text-white">
									2. Como utilizamos essas tecnologias
								</h3>
								<p>
									No momento, o KRATIKOS utiliza essas tecnologias
									exclusivamente para o funcionamento essencial da plataforma.
									Não utilizamos cookies de publicidade ou rastreamento de
									terceiros sem o seu consentimento.
								</p>

								<h4 className="text-base font-bold text-white pt-2">
									2.1. Tecnologias Estritamente Necessárias (Não requerem
									consentimento)
								</h4>
								<p>
									Estas tecnologias são indispensáveis para que o aplicativo e o
									site funcionem de forma segura e correta. Sem elas, você não
									conseguiria fazer login ou usar a plataforma.
								</p>

								<div className="overflow-x-auto">
									<table className="w-full text-left text-gray-300 border-collapse">
										<thead>
											<tr className="border-b border-white/20 text-white">
												<th className="py-2 pr-4 font-semibold">
													Tecnologia / Local
												</th>
												<th className="py-2 px-4 font-semibold">Finalidade</th>
												<th className="py-2 pl-4 font-semibold">Duração</th>
											</tr>
										</thead>
										<tbody className="divide-y divide-white/10">
											<tr>
												<td className="py-2.5 pr-4 font-medium text-white">
													Token JWT (SharedPreferences)
												</td>
												<td className="py-2.5 px-4 text-gray-400">
													Manter você logado(a) no aplicativo com segurança,
													evitando que precise digitar a senha toda vez que
													abrir o app.
												</td>
												<td className="py-2.5 pl-4">
													Até o logout ou expiração do token
												</td>
											</tr>
											<tr>
												<td className="py-2.5 pr-4 font-medium text-white">
													SQLite (Tabela posts)
												</td>
												<td className="py-2.5 px-4 text-gray-400">
													Fazer o cache (armazenamento temporário) do feed de
													notícias e posts para que o aplicativo carregue mais
													rápido e economize seus dados móveis.
												</td>
												<td className="py-2.5 pl-4">
													Temporária (substituída a cada atualização do feed)
												</td>
											</tr>
											<tr>
												<td className="py-2.5 pr-4 font-medium text-white">
													Cookies de Sessão (Site Público)
												</td>
												<td className="py-2.5 px-4 text-gray-400">
													Garantir a segurança da navegação e o balanceamento de
													carga dos servidores web.
												</td>
												<td className="py-2.5 pl-4">
													Fim da sessão (fechamento do navegador)
												</td>
											</tr>
										</tbody>
									</table>
								</div>

								<h4 className="text-base font-bold text-white pt-2">
									2.2. Tecnologias de Desempenho e Analytics
								</h4>
								<p>
									Utilizamos ferramentas básicas para entender falhas (crashes)
									no aplicativo e medir o tráfego do site público, de forma
									anonimizada. Nenhuma informação que identifique você
									diretamente é usada para este fim.
								</p>
							</div>

							<div className="space-y-2">
								<h3 className="text-lg font-bold text-white">
									3. Banner de Consentimento
								</h3>
								<p>
									Como o site público do KRATIKOS atualmente não utiliza cookies
									de publicidade direcionada ou rastreamento de terceiros (como
									Facebook Pixel ou Google Ads), a exibição de um banner de
									consentimento para cookies opcionais não é obrigatória neste
									momento. Caso passemos a utilizar cookies opcionais no futuro,
									esta política será atualizada e um banner de consentimento
									será exibido.
								</p>
							</div>

							<div className="space-y-2">
								<h3 className="text-lg font-bold text-white">
									4. Como gerenciar o armazenamento
								</h3>
								<ul className="space-y-2 list-disc list-inside">
									<li>
										<strong>No Aplicativo:</strong> Você pode limpar o cache e o
										armazenamento local do aplicativo KRATIKOS a qualquer
										momento acessando as configurações do sistema operacional do
										seu celular (iOS ou Android) e selecionando &quot;Limpar
										Dados&quot; ou &quot;Limpar Cache&quot;. Isso fará com que
										você seja deslogado.
									</li>
									<li>
										<strong>No Navegador:</strong> Você pode configurar seu
										navegador para recusar cookies, mas isso poderá afetar o
										funcionamento do site público.
									</li>
								</ul>
							</div>

							<div className="pt-2">
								<p>
									Para dúvidas sobre esta política, entre em contato através do
									e-mail de nosso Encarregado de Dados:{" "}
									<a
										href="mailto:dpo@kratikos.com.br"
										className="text-white underline"
									>
										dpo@kratikos.com.br
									</a>
								</p>
							</div>
						</motion.div>
					)}

					{activeTab === "exclusao" && (
						<motion.div
							key="exclusao"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.2 }}
							className="space-y-8 text-gray-300 leading-relaxed"
						>
							<div>
								<h2 className="text-2xl font-bold text-white mb-4">
									Exclusão de Conta e Dados
								</h2>
								<p className="mb-4 font-semibold text-white">
									Lamentamos ver você partir.
								</p>
								<p>
									Nesta página, você pode solicitar a exclusão permanente da sua
									conta do <strong>KRATIKOS</strong> e dos dados associados a
									ela, conforme garantido pela Lei Geral de Proteção de Dados
									(LGPD).
								</p>
							</div>

							<div className="space-y-3">
								<h3 className="text-lg font-bold text-white">
									O que acontece quando você exclui sua conta?
								</h3>
								<p className="font-semibold text-white">
									A exclusão da conta é uma ação irreversível. Após a conclusão
									do processo:
								</p>
								<ol className="space-y-3 list-decimal list-inside">
									<li>
										<strong>Seu perfil será apagado:</strong> Seu nome, foto,
										e-mail e informações de biografia serão permanentemente
										removidos dos nossos servidores.
									</li>
									<li>
										<strong>Revogação de Acesso:</strong> Os tokens de login
										social (Google Sign-In ou Sign in with Apple) vinculados ao
										KRATIKOS serão imediatamente revogados.
									</li>
									<li>
										<strong>Seus posts, comentários e votos:</strong> Para
										preservar a integridade dos debates e enquetes já realizados
										na plataforma, seus conteúdos públicos serão mantidos, porém
										totalmente anonimizados. Isso significa que eles não estarão
										mais vinculados ao seu nome ou perfil (aparecerão como
										&quot;Usuário Excluído&quot;).
									</li>
								</ol>
								<p className="pl-4 font-semibold text-white">
									• Atenção: Se você deseja que seus posts sejam apagados, você
									deve excluí-los manualmente dentro do aplicativo antes de
									solicitar a exclusão da conta.
								</p>
								<ol start={4} className="space-y-3 list-decimal list-inside">
									<li>
										<strong>Prazo de Processamento:</strong> A exclusão dos
										dados nos nossos bancos principais e sistemas de
										inteligência artificial (como índices vetoriais) ocorrerá em
										até 15 dias úteis.
									</li>
									<li>
										<strong>Retenção Legal Obrigatória:</strong> Por força de
										lei (Art. 15 do Marco Civil da Internet), o KRATIKOS é
										obrigado a reter exclusivamente os seus registros de acesso
										(endereço IP, data e hora de login) pelo prazo inegociável
										de 6 meses. Após esse período, esses logs também serão
										destruídos.
									</li>
								</ol>
							</div>

							<div className="space-y-3">
								<h3 className="text-lg font-bold text-white">
									Como solicitar a exclusão
								</h3>
								<p>
									Para confirmar sua identidade e evitar exclusões acidentais ou
									maliciosas, por favor, siga os passos abaixo:
								</p>
								<ol className="space-y-1 list-decimal list-inside">
									<li>Abra o aplicativo KRATIKOS e faça login.</li>
									<li>
										Vá em Perfil &gt; Configurações &gt; Privacidade e
										Segurança.
									</li>
									<li>
										Toque em &quot;Excluir Minha Conta&quot; e siga as
										instruções na tela.
									</li>
								</ol>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</section>
		</main>
	);
}
