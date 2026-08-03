"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Início',
      item: 'https://kratikos.com.br/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Termos de Uso',
      item: 'https://kratikos.com.br/termos',
    },
  ],
};

type TabType = 'moderacao' | 'autoria' | 'protecao-mulher';

export default function TermosClient() {
  const [activeTab, setActiveTab] = useState<TabType>('moderacao');

  const tabs = [
    {
      id: 'moderacao' as TabType,
      label: 'Política de Moderação',
    },
    {
      id: 'autoria' as TabType,
      label: 'Direitos Autorais',
    },
    {
      id: 'protecao-mulher' as TabType,
      label: 'Proteção à Mulher',
    },
  ];

  return (
    <main className="pt-28 min-h-screen pb-24 text-gray-100 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
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
            Termos de Uso e Políticas da Comunidade
          </h1>
        </motion.div>

        {/* Formal Text-Only Tabs */}
        <div className="mt-6 border-b border-white/15 flex flex-wrap gap-6">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-3 text-sm font-semibold transition-colors focus:outline-none border-b-2 -mb-px ${
                  isActive
                    ? 'border-white text-white'
                    : 'border-transparent text-gray-400 hover:text-gray-200'
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
          {activeTab === 'moderacao' && (
            <motion.div
              key="moderacao"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-8 text-gray-300 leading-relaxed"
            >
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Diretrizes da Comunidade e Política de Moderação</h2>
                <p className="mb-4">
                  O <strong>KRATIKOS</strong> é um espaço para o debate cívico, troca de ideias e participação democrática. Para garantir que este ambiente seja seguro, construtivo e livre de abusos, estabelecemos as presentes Diretrizes da Comunidade.
                </p>
                <p>
                  Ao utilizar o <strong>KRATIKOS</strong>, você concorda em respeitar estas regras. A violação destas diretrizes resultará em moderação do seu conteúdo e possíveis sanções à sua conta.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white">1. O Que Não é Permitido (Conteúdo Proibido)</h3>
                <p>É estritamente proibido publicar, compartilhar, incentivar ou apoiar:</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-bold text-white">1.1. Discurso de Ódio e Discriminação</h4>
                    <p className="pl-4">
                      • Conteúdo que promova violência, incite o ódio ou discrimine pessoas com base em raça, cor, etnia, origem nacional, religião, orientação sexual, identidade de gênero, idade ou deficiência.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">1.2. Violência, Ameaças e Terrorismo</h4>
                    <p className="pl-4">
                      • Ameaças físicas ou incitação à violência contra indivíduos ou grupos.<br />
                      • Promoção, apoio ou apologia a organizações criminosas, terrorismo ou atos antidemocráticos.<br />
                      • Conteúdo que encoraje automutilação ou suicídio.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">1.3. Assédio e Cyberbullying</h4>
                    <p className="pl-4">
                      • Perseguição, intimidação, insultos repetidos ou exposição de informações pessoais de terceiros sem consentimento (doxxing).
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">1.4. Exploração Sexual e Nudez</h4>
                    <p className="pl-4">
                      • Qualquer material que envolva abuso ou exploração sexual infantil (tolerância zero, com reporte imediato às autoridades).<br />
                      • Pornografia, atos sexuais explícitos ou nudez não consentida.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">1.5. Desinformação e Manipulação</h4>
                    <p className="pl-4">
                      • Disseminação intencional e coordenada de notícias falsas (fake news) que possam causar danos reais (ex.: saúde pública, integridade de processos eleitorais).<br />
                      • Uso de robôs (bots), contas falsas ou scripts automatizados para manipular votos, enquetes, trending topics ou inflar o engajamento artificialmente.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">1.6. Atividades Ilegais</h4>
                    <p className="pl-4">
                      • Venda ou promoção de drogas ilícitas, armas, produtos falsificados ou esquemas de fraude financeira.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white">2. Como Funciona a Moderação</h3>
                <p>
                  O KRATIKOS utiliza uma combinação de denúncias de usuários, filtros automatizados de Inteligência Artificial e revisão humana para moderar a plataforma.
                </p>
                <div className="space-y-2">
                  <h4 className="font-bold text-white">2.1. Denúncia e Bloqueio</h4>
                  <p className="pl-4">
                    • Denúncia: Qualquer usuário pode denunciar um post, comentário ou perfil que viole estas Diretrizes através do botão &quot;Denunciar&quot; disponível no aplicativo.<br />
                    • Bloqueio: Você pode bloquear qualquer usuário com quem não deseje interagir. O usuário bloqueado não poderá ver seus posts ou comentar neles.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-white">2.2. Prazos de Atendimento (SLA)</h4>
                  <p className="pl-4">
                    • Urgência Máxima (até 24 horas): Denúncias envolvendo ameaça à vida, exploração infantil, terrorismo ou exposição de dados sensíveis.<br />
                    • Urgência Padrão (até 72 horas): Demais violações das Diretrizes da Comunidade.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white">3. Sanções e Consequências</h3>
                <p>
                  Caso um conteúdo viole nossas regras, o KRATIKOS poderá aplicar as seguintes medidas, de forma progressiva ou imediata (dependendo da gravidade):
                </p>
                <ol className="space-y-1.5 list-decimal list-inside">
                  <li><strong>Remoção do Conteúdo:</strong> O post, comentário ou enquete será apagado da plataforma.</li>
                  <li><strong>Redução de Alcance (Shadowban):</strong> Contas identificadas pelo nosso sistema antifraude com alto &quot;fator de risco&quot; poderão ter a visibilidade de seus posts reduzida.</li>
                  <li><strong>Suspensão Temporária:</strong> A conta perderá o direito de postar, comentar e votar por um período determinado (ex.: 7, 15 ou 30 dias).</li>
                  <li><strong>Banimento Permanente:</strong> Contas reincidentes ou que cometam infrações graves (crimes) serão banidas definitivamente, caracterizando justa causa para a rescisão da prestação do serviço.</li>
                </ol>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white">4. Recurso e Contestação</h3>
                <p>
                  Se o seu conteúdo foi removido ou sua conta suspensa, você será notificado com o motivo da decisão (indicando qual regra foi violada).
                </p>
                <p>Você tem o direito de contestar a decisão:</p>
                <p className="pl-4">
                  • O recurso pode ser enviado diretamente pelo link fornecido na notificação ou através do e-mail{' '}
                  <a href="mailto:contato@kratikos.com.br" className="text-white underline">
                    contato@kratikos.com.br
                  </a><br />
                  • A contestação será analisada por um moderador humano, garantindo o seu direito de defesa contra decisões puramente automatizadas.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white">5. Colaboração com Autoridades</h3>
                <p>
                  O <strong>KRATIKOS</strong> preservará evidências e colaborará ativamente com ordens judiciais e investigações policiais em casos de crimes cometidos na plataforma, fornecendo os dados cadastrais e logs de conexão conforme a legislação brasileira (Marco Civil da Internet).
                </p>
              </div>
            </motion.div>
          )}

          {activeTab === 'autoria' && (
            <motion.div
              key="autoria"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-8 text-gray-300 leading-relaxed"
            >
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Política de Direitos Autorais</h2>
                <p>
                  O <strong>KRATIKOS</strong> respeita os direitos de propriedade intelectual de terceiros e espera que seus usuários façam o mesmo. Esta política descreve como lidamos com denúncias de violação de direitos autorais, marcas registradas e demais direitos de propriedade intelectual na plataforma, em conformidade com a Lei de Direitos Autorais (Lei nº 9.610/1998), o Marco Civil da Internet (Lei nº 12.965/2014) e a Lei de Propriedade Industrial (Lei nº 9.279/1996).
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white">1. Compromisso</h3>
                <p>
                  O KRATIKOS é uma plataforma de debate cívico que permite a publicação de conteúdo gerado pelos usuários (posts, comentários, enquetes e mídias). Não toleramos a utilização da plataforma para a violação sistemática de direitos autorais ou de propriedade intelectual de terceiros. Contas que reiteradamente violem direitos de terceiros serão permanentemente encerradas.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white">2. Responsabilidade do Usuário</h3>
                <p>Ao publicar qualquer conteúdo no KRATIKOS, o usuário declara e garante que:</p>
                <ul className="space-y-1.5 list-disc list-inside">
                  <li>É o autor original do conteúdo ou possui autorização expressa do titular dos direitos para publicá-lo.</li>
                  <li>O conteúdo não infringe direitos autorais, marcas registradas, patentes, segredos comerciais ou quaisquer outros direitos de propriedade intelectual de terceiros.</li>
                  <li>Compreende que a publicação de conteúdo de terceiros sem autorização poderá resultar na remoção do material e em sanções à sua conta, sem prejuízo da responsabilidade civil e criminal perante o titular dos direitos.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white">3. Notificação de Violação de Direitos Autorais</h3>
                <p>
                  Se você é titular de direitos autorais (ou representante autorizado) e acredita que algum conteúdo publicado no KRATIKOS viola seus direitos, envie uma notificação formal para o nosso canal de propriedade intelectual.
                </p>
                <div className="space-y-2">
                  <h4 className="font-bold text-white">3.1. Requisitos da Notificação</h4>
                  <p>Para que a notificação seja processada, ela deve conter obrigatoriamente:</p>
                  <ol className="space-y-1.5 list-decimal list-inside">
                    <li><strong>Identificação do titular:</strong> Nome completo (ou razão social), CPF/CNPJ e dados de contato (e-mail e telefone) do titular dos direitos ou de seu representante legal.</li>
                    <li><strong>Procuração (se aplicável):</strong> Caso a notificação seja enviada por representante, anexar instrumento de procuração ou documento que comprove a legitimidade para agir em nome do titular.</li>
                    <li><strong>Identificação da obra protegida:</strong> Descrição clara da obra cujos direitos foram violados (ex.: título, autor, link para a obra original, registro de direito autoral, se houver).</li>
                    <li><strong>Identificação do conteúdo infrator:</strong> URL específica ou identificador inequívoco do conteúdo publicado no KRATIKOS que supostamente viola os direitos autorais.</li>
                    <li><strong>Declaração de boa-fé:</strong> Declaração, sob as penas da lei, de que o notificante possui convicção de boa-fé de que o uso do material não foi autorizado pelo titular dos direitos, por seu agente ou pela lei.</li>
                    <li><strong>Assinatura:</strong> Assinatura física ou eletrônica do titular ou de seu representante legal.</li>
                  </ol>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-white">3.2. Canal para Envio</h4>
                  <p>As notificações devem ser enviadas exclusivamente para:</p>
                  <p>
                    E-mail:{' '}
                    <a href="mailto:contato@kratikos.com.br" className="text-white underline">
                      contato@kratikos.com.br
                    </a>
                  </p>
                  <p>Notificações incompletas ou que não atendam aos requisitos acima poderão ser devolvidas para complementação antes de serem processadas.</p>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white">4. Procedimento Após o Recebimento da Notificação</h3>
                <p>Ao receber uma notificação válida e completa, o KRATIKOS adotará o seguinte procedimento:</p>
                <ol className="space-y-1.5 list-decimal list-inside">
                  <li><strong>Confirmação de Recebimento:</strong> Enviaremos um e-mail confirmando o recebimento da notificação ao titular no prazo de até 48 horas.</li>
                  <li><strong>Análise Preliminar:</strong> Verificaremos se a notificação atende aos requisitos formais e se o conteúdo indicado está efetivamente disponível na plataforma.</li>
                  <li><strong>Remoção ou Restrição:</strong> Caso a notificação seja considerada procedente, o conteúdo será removido ou terá seu acesso restrito em prazo razoável, e o usuário que o publicou será notificado sobre a remoção e o motivo.</li>
                  <li><strong>Registro:</strong> Manteremos registro interno de todas as notificações recebidas, decisões tomadas e comunicações realizadas, pelo prazo de 5 anos.</li>
                </ol>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white">5. Contranotificação (Direito de Defesa do Usuário)</h3>
                <p>
                  O usuário cujo conteúdo foi removido em razão de notificação de violação de direitos autorais tem o direito de apresentar uma contranotificação, caso acredite que a remoção foi indevida (ex.: o conteúdo é de sua autoria, está em domínio público, ou configura uso legítimo como citação, crítica, paródia ou fins educacionais).
                </p>
                <div className="space-y-2">
                  <h4 className="font-bold text-white">5.1. Requisitos da Contranotificação</h4>
                  <ol className="space-y-1.5 list-decimal list-inside">
                    <li><strong>Identificação do usuário:</strong> Nome completo, CPF e dados de contato.</li>
                    <li><strong>Identificação do conteúdo removido:</strong> URL ou descrição do conteúdo que foi retirado.</li>
                    <li><strong>Fundamentação:</strong> Explicação detalhada dos motivos pelos quais o usuário acredita que a remoção foi indevida (ex.: autoria própria, licença válida, uso permitido por lei).</li>
                    <li><strong>Declaração de boa-fé:</strong> Declaração, sob as penas da lei, de que o conteúdo foi removido por engano ou erro de identificação.</li>
                    <li><strong>Assinatura:</strong> Assinatura física ou eletrônica do usuário.</li>
                  </ol>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-white">5.2. Procedimento</h4>
                  <p>Ao receber uma contranotificação válida, o KRATIKOS:</p>
                  <ul className="space-y-1.5 list-disc list-inside">
                    <li>Encaminhará a contranotificação ao titular que apresentou a denúncia original.</li>
                    <li>Aguardará o prazo de 10 dias úteis para que o titular informe se adotou medida judicial para manter a remoção.</li>
                    <li>Caso o titular não comprove a adoção de medida judicial dentro do prazo, o conteúdo poderá ser restabelecido na plataforma.</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white">6. Política de Reincidência (Repeat Infringer Policy)</h3>
                <p>O KRATIKOS adota uma política rigorosa contra violadores reincidentes:</p>
                <ul className="space-y-1.5 list-disc list-inside">
                  <li><strong>1ª violação confirmada:</strong> Remoção do conteúdo e notificação educativa ao usuário.</li>
                  <li><strong>2ª violação confirmada:</strong> Remoção do conteúdo e suspensão temporária da conta por 15 dias (impossibilidade de publicar novo conteúdo).</li>
                  <li><strong>3ª violação confirmada:</strong> Banimento permanente da conta, sem direito a recurso quanto à reincidência.</li>
                </ul>
                <p>
                  O KRATIKOS reserva-se o direito de banir imediatamente, sem aviso prévio, contas que demonstrem padrão deliberado e massivo de violação de direitos autorais (ex.: perfis dedicados exclusivamente à reprodução não autorizada de obras de terceiros).
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white">7. Marcas Registradas e Outros Direitos de Propriedade Intelectual</h3>
                <p>
                  Se você acredita que algum conteúdo no KRATIKOS viola sua marca registrada, nome empresarial, patente ou outro direito de propriedade industrial, utilize o mesmo canal de contato indicado na seção 3.2, descrevendo o direito violado e anexando a documentação comprobatória (ex.: certificado de registro de marca no INPI).
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white">8. Uso Legítimo e Exceções</h3>
                <p>O KRATIKOS reconhece que a legislação brasileira prevê hipóteses em que a reprodução parcial de obras protegidas é lícita, tais como:</p>
                <ul className="space-y-1.5 list-disc list-inside">
                  <li>Citação em livros, jornais, revistas ou qualquer outro meio de comunicação, para fins de estudo, crítica ou polêmica (art. 46, III, da Lei 9.610/1998).</li>
                  <li>Reprodução de pequenos trechos para uso privado do copista, sem intuito de lucro (art. 46, II).</li>
                  <li>Paráfrases e paródias que não sejam verdadeiras reproduções da obra originária (art. 47).</li>
                </ul>
                <p>Ao analisar denúncias, o KRATIKOS considerará essas exceções legais antes de determinar a remoção.</p>
              </div>

              <div className="space-y-2 pt-2">
                <h3 className="text-lg font-bold text-white">9. Contato</h3>
                <p>
                  Canal de Propriedade Intelectual:{' '}
                  <a href="mailto:contato@kratikos.com.br" className="text-white underline">
                    contato@kratikos.com.br
                  </a>
                </p>
              </div>
            </motion.div>
          )}

          {activeTab === 'protecao-mulher' && (
            <motion.div
              key="protecao-mulher"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-8 text-gray-300 leading-relaxed"
            >
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Política de Proteção à Mulher no Ambiente Digital</h2>
                <p>
                  O <strong>KRATIKOS</strong> tem tolerância zero com qualquer forma de violência digital contra mulheres. Esta política estabelece os procedimentos específicos e diferenciados que a plataforma adota para prevenir, identificar e combater condutas que configurem violência de gênero no ambiente digital, em conformidade com o Decreto nº 12.976/2026, a Lei Maria da Penha (Lei nº 11.340/2006), o Código Penal Brasileiro e o Marco Civil da Internet.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white">1. O Que Constitui Violência Digital Contra a Mulher</h3>
                <p>
                  Para os fins desta política, considera-se violência digital contra a mulher qualquer conduta praticada na plataforma KRATIKOS que cause dano emocional, moral, patrimonial, sexual ou físico a uma mulher, em razão da condição do sexo feminino, incluindo, mas não se limitando a:
                </p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-bold text-white">1.1. Divulgação Não Consentida de Conteúdo Íntimo (Revenge Porn)</h4>
                    <p>Publicação, compartilhamento ou ameaça de divulgação de imagens, vídeos ou áudios de nudez ou atos sexuais sem o consentimento da pessoa retratada (art. 218-C do Código Penal).</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">1.2. Perseguição Digital (Stalking)</h4>
                    <p>Atos reiterados de perseguição, monitoramento, vigilância ou contato indesejado que restrinjam a liberdade de locomoção ou perturbem a privacidade da vítima (art. 147-A do Código Penal).</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">1.3. Assédio e Intimidação</h4>
                    <p>Envio repetido de mensagens ofensivas, ameaçadoras, humilhantes ou sexualmente explícitas direcionadas a uma mulher, inclusive em comentários públicos.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">1.4. Discurso de Ódio Misógino</h4>
                    <p>Conteúdo que promova violência, inferiorização ou desumanização de mulheres em razão do gênero.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">1.5. Violência Política de Gênero</h4>
                    <p>Ataques coordenados, intimidação ou difamação dirigidos a mulheres em razão de sua participação no debate público, político ou cívico na plataforma.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">1.6. Conteúdo Íntimo Gerado ou Modificado por Inteligência Artificial (Deepfakes)</h4>
                    <p>Criação, alteração ou disseminação de imagens ou vídeos íntimos de uma mulher por meio de inteligência artificial ou qualquer recurso tecnológico que altere a imagem ou o som da vítima, sem seu consentimento.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white">2. Prazos de Remoção (Decreto nº 12.976/2026)</h3>
                <p>
                  O KRATIKOS adota prazos rigorosos e diferenciados para a indisponibilização de conteúdos que configurem violência digital contra mulheres, contados a partir do recebimento de denúncia válida:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm text-gray-300 border-collapse">
                    <thead>
                      <tr className="border-b border-white/20 text-white">
                        <th className="py-2 pr-4 font-semibold">Tipo de Conteúdo</th>
                        <th className="py-2 pl-4 font-semibold text-center">Prazo Máximo para Remoção</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      <tr>
                        <td className="py-2.5 pr-4">Conteúdo íntimo não autorizado (revenge porn, deepfakes íntimos)</td>
                        <td className="py-2.5 pl-4 text-center font-bold">2 horas</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 pr-4">Conteúdo manifestamente ilegal que configure crime contra a mulher (ameaça de morte, incitação à violência de gênero, stalking evidente)</td>
                        <td className="py-2.5 pl-4 text-center font-bold">6 horas</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 pr-4">Demais casos de violência digital de gênero (assédio, discurso de ódio misógino, violência política de gênero)</td>
                        <td className="py-2.5 pl-4 text-center font-bold">24 horas</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="font-bold text-white">
                  Esses prazos aplicam-se independentemente de ordem judicial, bastando a denúncia fundamentada da vítima ou de seu representante.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white">3. Como Denunciar</h3>
                <div className="space-y-2">
                  <h4 className="font-bold text-white">3.1. Dentro do Aplicativo (Recomendado)</h4>
                  <ul className="space-y-1 list-disc list-inside">
                    <li>No conteúdo ofensivo, toque no ícone de três pontos (⋮).</li>
                    <li>Selecione &quot;Denunciar&quot;.</li>
                    <li>Escolha a categoria &quot;Violência contra a mulher&quot;.</li>
                    <li>Descreva brevemente a situação e envie.</li>
                  </ul>
                  <p>A denúncia será automaticamente classificada como prioridade máxima e encaminhada para análise imediata.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-white">3.2. Por E-mail (Canal Prioritário)</h4>
                  <p>Caso a vítima não consiga acessar o aplicativo ou prefira um canal externo:</p>
                  <p>
                    E-mail prioritário:{' '}
                    <a href="mailto:contato@kratikos.com.br" className="text-white underline">
                      contato@kratikos.com.br
                    </a>
                  </p>
                  <p>Inclua no e-mail: a URL do conteúdo (se possível), uma descrição da situação e, se aplicável, evidências complementares (prints, links).</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-white">3.3. Ligue 180 (Central de Atendimento à Mulher)</h4>
                  <p>
                    A vítima também pode buscar apoio pela Central de Atendimento à Mulher (Ligue 180), serviço gratuito do Governo Federal, disponível 24 horas, que pode encaminhar a denúncia às autoridades competentes.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white">4. Procedimento Interno de Moderação</h3>
                <p>Ao receber uma denúncia classificada como violência digital contra a mulher, o KRATIKOS adotará o seguinte fluxo:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>
                    <strong>Triagem Imediata:</strong> A denúncia é classificada automaticamente como urgente e encaminhada à fila prioritária de moderação.
                  </li>
                  <li>
                    <strong>Análise e Decisão:</strong> Um moderador avalia o conteúdo denunciado dentro dos prazos estabelecidos na seção 2.
                  </li>
                  <li>
                    <strong>Remoção e Bloqueio de Reenvio:</strong> Caso confirmada a violação, o conteúdo é removido e recebe uma marcação digital (hash) que impede seu reenvio ou republicação na plataforma por qualquer usuário.
                  </li>
                  <li>
                    <strong>Notificação à Vítima:</strong> A vítima (denunciante) é informada sobre a decisão tomada.
                  </li>
                  <li>
                    <strong>Sanção ao Infrator:</strong> O usuário autor do conteúdo recebe sanção proporcional à gravidade:
                    <ul className="pl-6 pt-1 space-y-1 list-disc list-inside text-gray-400">
                      <li>Conteúdo íntimo não autorizado ou deepfake: Banimento imediato e permanente da conta, sem direito a recurso.</li>
                      <li>Ameaça de morte ou incitação à violência: Banimento imediato e permanente.</li>
                      <li>Assédio, stalking e demais violações: Suspensão temporária (mínimo 30 dias) na primeira ocorrência; banimento permanente na reincidência.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Preservação de Evidências:</strong> O conteúdo removido e os metadados associados (autor, data, IP) são preservados internamente pelo prazo de 5 anos para fins de eventual colaboração com autoridades policiais e judiciais.
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white">5. Colaboração com Autoridades</h3>
                <p>Nos casos que configurem crime (ex.: revenge porn, ameaça, stalking), o KRATIKOS:</p>
                <ul className="space-y-1.5 list-disc list-inside">
                  <li>Preservará todas as evidências (conteúdo, metadados, IP, timestamps) pelo prazo legal.</li>
                  <li>Fornecerá os dados às autoridades competentes mediante ordem judicial ou requisição administrativa de dados cadastrais, conforme o Marco Civil da Internet.</li>
                  <li>Em situações de risco iminente à vida ou à integridade física da vítima, poderá comunicar proativamente as autoridades policiais, independentemente de provocação, com fundamento na proteção da vida (art. 7º, VII, LGPD).</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white">6. Vedações Técnicas (Inteligência Artificial)</h3>
                <p>O KRATIKOS adota salvaguardas técnicas para impedir o uso indevido de funcionalidades de inteligência artificial na plataforma:</p>
                <ul className="space-y-1.5 list-disc list-inside">
                  <li>É vedada a publicação de qualquer conteúdo gerado por IA que represente nudez ou atos sexuais envolvendo pessoa real identificável, independentemente de consentimento.</li>
                  <li>Os sistemas de moderação automatizada do KRATIKOS são treinados para identificar e bloquear preventivamente conteúdos que apresentem características de <em>deepfakes</em> íntimos.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white">7. Direito de Recurso do Denunciado</h3>
                <p>
                  O usuário cuja conta foi sancionada tem direito a apresentar recurso, exceto nos casos de banimento imediato por conteúdo íntimo não autorizado ou ameaça à vida (onde a gravidade da conduta não admite reversão). Nos demais casos:
                </p>
                <ul className="space-y-1.5 list-disc list-inside">
                  <li>O recurso deve ser enviado em até 5 dias úteis após a notificação da sanção.</li>
                  <li>Será analisado por um moderador diferente daquele que tomou a decisão original.</li>
                  <li>A decisão do recurso será comunicada em até 10 dias úteis.</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white">8. Compromisso Contínuo</h3>
                <p>O KRATIKOS compromete-se a:</p>
                <ul className="space-y-1.5 list-disc list-inside">
                  <li>Revisar periodicamente esta política à luz de novas regulamentações e melhores práticas.</li>
                  <li>Capacitar sua equipe de moderação sobre violência de gênero digital.</li>
                  <li>Publicar, no Relatório de Transparência, estatísticas específicas sobre denúncias de violência contra a mulher, prazos de atendimento e sanções aplicadas.</li>
                </ul>
              </div>

              <div className="space-y-2 pt-2">
                <h3 className="text-lg font-bold text-white">9. Canais de Apoio à Vítima</h3>
                <ul className="space-y-1.5 list-disc list-inside">
                  <li>Ligue 180 – Central de Atendimento à Mulher (24h, gratuito).</li>
                  <li>Ligue 190 – Polícia Militar (emergências).</li>
                  <li>Delegacia da Mulher – Para registro de boletim de ocorrência.</li>
                  <li>
                    Canal KRATIKOS:{' '}
                    <a href="mailto:contato@kratikos.com.br" className="text-white underline">
                      contato@kratikos.com.br
                    </a>
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </main>
  );
}
