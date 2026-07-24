# Kratikos Site — Engajamento Cívico e Democrático

Site oficial e landing page institucional da plataforma **Kratikos** (do grego *κρατικός*, "do cidadão, cívico").

## 🚀 Tecnologias

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS + Vanilla CSS
- **Animações:** Framer Motion
- **Ícones:** Lucide React & Radix UI

## 📦 Como Rodar Localmente

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Executar build de produção
npm run build
```

## 🛠 Arquitetura do Projeto

- `src/app`: Rotas e páginas do Next.js App Router (`/`, `/recursos`, `/como-funciona`, `/sobre`, `/contato`, `/termos`, `/privacidade`, etc.)
- `src/components`: Componentes visuais da interface (Header, Footer, PhonePollCarousel, Button, etc.)
- `src/lib`: Funções auxiliares e simulação de API de enquetes
- `public/`: Identidade visual oficial e assets estáticos
