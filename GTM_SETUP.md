# Guia de Configuração do Google Tag Manager (GTM) - Kratikos

Este documento contém a documentação completa da integração do **Google Tag Manager (GTM)** realizada na aplicação **Kratikos**, incluindo a lista de eventos disparados no `dataLayer`, seus parâmetros e o passo a passo para criar as Tags e Gatilhos (Triggers) no painel do GTM.

---

## 1. Visão Geral da Integração

* **ID do Container**: Disponível no env
* **Biblioteca Utilizada**: `@next/third-parties/google` (Oficial Next.js / Vercel)
* **Variável de Ambiente**: `NEXT_PUBLIC_GTM_ID` (configurada em `.env` e com fallback para a tag nao vigente no projeto)
* **Utilitário de Tracking**: `src/lib/gtm.ts` -> Função `trackEvent(eventName, payload)`

---

## 2. Mapeamento Completo de Eventos no `dataLayer`

Abaixo estão todos os eventos personalizados instrumentados no código da aplicação:

### A. Conversões de Download do Aplicativo

| Nome do Evento (`event`) | Descrição | Parâmetros Enviados (`dataLayer`) | Componente de Origem |
| :--- | :--- | :--- | :--- |
| `click_cta_download` | Clique no botão "Baixar App" | `{ location: 'header' \| 'mobile_menu' }` | `src/components/header.tsx` |
| `click_store_download` | Clique nos botões "App Store" ou "Google Play" | `{ store: 'app_store' \| 'google_play', location: 'hero' \| 'footer_banner' }` | `src/app/page-client.tsx` |

### B. Geração de Leads e Suporte

| Nome do Evento (`event`) | Descrição | Parâmetros Enviados (`dataLayer`) | Componente de Origem |
| :--- | :--- | :--- | :--- |
| `generate_lead` | Envio com sucesso do formulário de contato | `{ subject: 'duvida' \| 'sugestao' \| 'parceria' \| 'imprensa' \| 'outro' }` | `src/app/contato/page.tsx` |
| `click_contact_email` | Clique nos links de email (`mailto:`) | `{ email_type: 'email' \| 'suporte' }` | `src/app/contato/page.tsx` |

### C. Interatividade & Demonstração do Produto (Simulador de Enquetes)

| Nome do Evento (`event`) | Descrição | Parâmetros Enviados (`dataLayer`) | Componente de Origem |
| :--- | :--- | :--- | :--- |
| `select_poll_scope` | Alternância de aba no simulador | `{ scope: 'internacional' \| 'nacional' \| 'regional' }` | `src/components/phone-poll-carousel.tsx` |
| `interact_poll_preview` | Clique nos pontos (dots) de paginação | `{ scope: string, slide_index: number }` | `src/components/phone-poll-carousel.tsx` |

### D. Navegação e Redes Sociais

| Nome do Evento (`event`) | Descrição | Parâmetros Enviados (`dataLayer`) | Componente de Origem |
| :--- | :--- | :--- | :--- |
| `click_navigation` | Cliques em links do menu/rodapé | `{ destination: string, location: 'header' \| 'footer_produto' \| 'footer_empresa' \| ... }` | `header.tsx`, `footer.tsx` |
| `click_social_link` | Clique em ícones de redes sociais | `{ platform: 'Twitter (X)' \| 'Instagram' \| 'LinkedIn' \| 'GitHub', location: 'footer' \| 'contact' }` | `footer.tsx`, `contato/page.tsx` |
| `toggle_mobile_menu` | Abertura/Fechamento do menu mobile | `{ state: 'open' \| 'close' }` | `src/components/header.tsx` |

### E. Erros e Recuperação (Página 404)

| Nome do Evento (`event`) | Descrição | Parâmetros Enviados (`dataLayer`) | Componente de Origem |
| :--- | :--- | :--- | :--- |
| `view_404_error` | Exibição de página 404 | `{ path: string }` | `src/app/not-found-client.tsx` |
| `click_404_back_home` | Clique no botão "Voltar ao Início" na 404 | N/A | `src/app/not-found-client.tsx` |
| `click_404_suggestion` | Clique em rota sugerida na 404 | `{ destination: string }` | `src/app/not-found-client.tsx` |

---

## 3. Como Configurar no Painel do Google Tag Manager

Para enviar esses eventos ao **Google Analytics 4 (GA4)**, **Google Ads** ou **Meta Pixel**, siga os passos abaixo no painel [tagmanager.google.com](https://tagmanager.google.com):

### Passo 1: Criar Variáveis de Camada de Dados (Data Layer Variables)
1. No menu lateral, acesse **Variáveis** > **Novas (Definidas pelo usuário)**.
2. Tipo de variável: **Variável da Camada de Dados**.
3. Crie as seguintes variáveis (respeitando exatamente o nome):
   - `location` -> Nome da variável da camada de dados: `location`
   - `store` -> Nome da variável da camada de dados: `store`
   - `subject` -> Nome da variável da camada de dados: `subject`
   - `scope` -> Nome da variável da camada de dados: `scope`
   - `platform` -> Nome da variável da camada de dados: `platform`
   - `destination` -> Nome da variável da camada de dados: `destination`

### Passo 2: Criar Acionadores (Triggers)
1. No menu lateral, acesse **Acionadores** > **Novo**.
2. Tipo de acionador: **Evento Personalizado**.
3. Exemplos de acionadores recomendados:

| Nome do Acionador | Nome do Evento no GTM | Disparo |
| :--- | :--- | :--- |
| **Event - Download App** | `click_store_download` | Todos os eventos personalizados |
| **Event - CTA Download Header** | `click_cta_download` | Todos os eventos personalizados |
| **Event - Lead Formulário** | `generate_lead` | Todos os eventos personalizados |
| **Event - Escopo Enquetes** | `select_poll_scope` | Todos os eventos personalizados |
| **Event - Redes Sociais** | `click_social_link` | Todos os eventos personalizados |

### Passo 3: Criar Tags de Envio para GA4
1. Acesse **Tags** > **Nova**.
2. Tipo de Tag: **Google Analytics: Evento do GA4**.
3. **ID de medição**: Coloque seu ID do GA4 (ex: `G-XXXXXXXXXX`).
4. **Nome do Evento**: Coloque o nome do evento ou `{{Event}}`.
5. Em **Parâmetros do Evento**, mapeie as variáveis criadas no Passo 1 (ex: `location` -> `{{location}}`, `store` -> `{{store}}`).
6. Em **Acionadores**, selecione o acionador correspondente criado no Passo 2.

---

## 4. Como Testar e Validar

1. No painel do GTM, clique em **Visualizar (Preview)** e digite o endereço do site (`https://kratikos.com.br` ou `http://localhost:3000`).
2. O **Google Tag Assistant** abrirá conectado à página.
3. Navegue pelo site, clique nos botões de download, envie mensagens pelo formulário de contato e alterne os escopos de enquete.
4. Verifique no painel do Tag Assistant se os eventos aparecem na coluna esquerda e se a carga útil (`dataLayer`) contém as informações corretas.
5. Após validar, clique em **Enviar (Submit)** e **Publicar** as alterações na versão do container no GTM.

---
*Documento gerado automaticamente referente à implementação GTM e otimização de performance no projeto Kratikos.*
