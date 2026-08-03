  
**Política de Privacidade**

A privacidade dos seus dados é uma prioridade para o KRATIKOS. Esta Política de Privacidade explica como a \_\_\_\_\_\_\_\_\_\_\_\_\_\_ ("Controladora"), inscrita no CNPJ \_\_\_\_\_\_\_\_\_, coleta, usa, compartilha e protege suas informações pessoais ao utilizar nosso aplicativo e site, em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD \- Lei nº 13.709/2018).

**1\. Dados que coletamos**

Coletamos dados para fornecer e melhorar nossos serviços:

1\. Dados de Cadastro: Nome, e-mail, foto de perfil (quando você se cadastra via Google Sign-In ou Sign in with Apple).  
2\. Dados de Uso e Interação: Conteúdos que você posta, comentários, curtidas, enquetes respondidas, contas que você segue e que seguem você.  
3\. Dados Sensíveis (Opinião Política): Ao participar de debates e votar em enquetes, você pode revelar suas opiniões políticas. Tratamos esses dados exclusivamente com base no seu consentimento explícito. Seus votos individuais são privados; apenas resultados agregados são exibidos publicamente.  
4\. Geolocalização: Coletamos sua localização em nível de cidade e estado para personalizar o feed de notícias (regional). Não rastreamos coordenadas exatas de GPS em segundo plano.  
5\. Verificação de Identidade (Opcional): Caso opte por verificar sua conta, solicitaremos seu CPF para consulta junto ao SERPRO. O CPF não é armazenado em texto puro após a verificação; mantemos apenas um identificador criptografado de status.  
6\. Dados Técnicos: Endereço IP, modelo do dispositivo, sistema operacional e logs de acesso (armazenados por 6 meses, conforme o Marco Civil da Internet).

**2\. Como Usamos Seus Dados (Finalidades, Bases Legais e Descarte)**

| Finalidade | Dados Utilizados | Base Legal de tratamento (LGPD) |
| :---- | :---- | :---- |
| Criar e gerenciar sua conta | Nome, E-mail, Foto | Execução de Contrato (Art. 7º, V) |
| Exibir feed regionalizado | Cidade/Estado | Execução de Contrato (Art. 7º, V) |
| Registrar votos e opiniões políticas | Votos em enquetes, comentários | Consentimento (Art. 11, I) |
| Verificar identidade e prevenir fraudes | CPF (opcional), IP, Score de risco | Legítimo Interesse / Prevenção à Fraude (Art. 11, II, 'g') |
| Cumprir obrigações legais (Marco Civil) | IP, Data e Hora de acesso | Obrigação Legal (Art. 7º, II) |

**Tabela de retenção e Descarte de Dados**

| Categoria de Dado | Prazo de Retenção (Conta Ativa) | Prazo de Retenção (Após Exclusão da Conta) | Ação de Descarte |
| ----- | ----- | ----- | ----- |
| Dados Cadastrais (Nome, E-mail, Tokens) | Enquanto a conta estiver ativa. | Até 15 dias após a solicitação de exclusão. | Exclusão definitiva dos bancos de dados (PostgreSQL). |
| Logs de Acesso (IP, Data/Hora de Login) | 6 meses rotativos. | 6 meses a partir da data de cada acesso. | Exclusão automatizada (Obrigação do Marco Civil). |
| Conteúdo Público (Posts, Comentários, Votos) | Enquanto a conta estiver ativa ou até o usuário apagar o post. | Prazo indeterminado (mantido na plataforma). | Anonimização irreversível. O conteúdo permanece, mas a autoria é substituída por "Usuário Excluído" no PostgreSQL e Qdrant. |
| Denúncias e Registros de Moderação | 5 anos. | 5 anos. | Mantidos para defesa em processos judiciais (Prescrição Civil). Acesso restrito à equipe jurídica. |
| Backups do Banco de Dados | 30 dias. | 30 dias (ciclo de sobrescrita). | Os dados excluídos em produção desaparecerão dos backups naturalmente após 30 dias. Restaurações de backup devem respeitar o status de contas excluídas. |
| Vetores de IA (Qdrant) | Enquanto o conteúdo existir. | Imediato (sincronizado com a exclusão/anonimização no PostgreSQL). | Exclusão do  |

**3\. Com Quem Compartilhamos Seus Dados**

O KRATIKOS não vende seus dados pessoais. Compartilhamos informações apenas com Operadores estritamente necessários para o funcionamento do app:

•Provedores de Nuvem e Banco de Dados: Para hospedar o aplicativo (ex.: Railway, PostgreSQL).  
•Serviços de Inteligência Artificial: Utilizamos APIs (como OpenAI e Qdrant) para agrupamento semântico de notícias. Seus dados pessoais diretos (nome, e-mail) não são enviados a essas IAs.  
•SERPRO: Exclusivamente no momento da verificação opcional de CPF.  
•Autoridades Públicas: Apenas mediante ordem judicial específica.

**4\. Uso de Inteligência Artificial e Perfilamento**

Utilizamos IA para calcular um "score de confiança" e "fator de risco" visando identificar bots e prevenir manipulações de votos. Você tem o direito de solicitar a revisão humana de qualquer decisão automatizada que afete sua conta.

**5\. Seus Direitos (Art. 18 da LGPD)**

Você tem o direito de:

•Confirmar a existência de tratamento e acessar seus dados.  
•Corrigir dados incompletos ou desatualizados.  
•Revogar seu consentimento a qualquer momento.  
•Solicitar a exclusão da sua conta e dos seus dados pessoais.

**6\. Exclusão de Conta e Retenção de Dados**

Você pode excluir sua conta no próprio aplicativo (Configurações \> Excluir Conta) ou via web.

Ao solicitar a exclusão:

•Seus dados de identificação (nome, e-mail, tokens de login) serão apagados em até 15 dias.  
•Anonimização de Conteúdo: Seus posts, comentários e votos públicos serão anonimizados (desvinculados de você) para preservar o contexto dos debates, a menos que você apague os posts manualmente antes de excluir a conta.  
•Reteremos apenas os logs de acesso (IP, data/hora) pelo prazo legal inegociável de 6 meses (Art. 15 do Marco Civil da Internet).

**7\. Segurança**

Adotamos medidas técnicas e administrativas rigorosas, incluindo criptografia em trânsito (HTTPS) e em repouso, para proteger seus dados contra acessos não autorizados.

**8\. Contato do Encarregado (DPO)**

Para exercer seus direitos ou tirar dúvidas sobre privacidade, entre em contato com nosso Encarregado pelo Tratamento de Dados Pessoais: Email: [dpo@kratikos.com.br](mailto:dpo@kratikos.com.br) 

