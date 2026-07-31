"use client";

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export interface FaqItem {
  question: string;
  answer: string;
}

export const defaultFaqData: FaqItem[] = [
  {
    question: 'O que é o Kratikos?',
    answer:
      'Kratikos é uma rede social de opinião e enquetes, onde você vota, comenta e acompanha o que outras pessoas pensam sobre política, economia, esportes, entretenimento e outros assuntos do momento.',
  },
  {
    question: 'Como funcionam as enquetes no Kratikos?',
    answer:
      'Cada tema pode gerar uma enquete. Você vota a favor ou contra, comenta e acompanha em tempo real como pensam as pessoas.',
  },
  {
    question: 'O Kratikos é gratuito?',
    answer:
      'Sim! O Kratikos é 100% gratuito para baixar e usar. Não há anúncios nem compras dentro do app.',
  },
  {
    question: 'Como funciona a moderação?',
    answer:
      'Combinamos moderação automática com uma equipe de moderadores humanos. Usuários também podem reportar conteúdos inadequados.',
  },
  {
    question: 'Meus dados são protegidos?',
    answer:
      'Absolutamente. Seguimos a LGPD e as melhores práticas de privacidade. Seus dados nunca são vendidos ou compartilhados.',
  },
  {
    question: 'Posso usar sem revelar minha localização?',
    answer:
      'Sim. A localização só é usada para posts regionais e você pode desativar a qualquer momento. Discussões internacionais e nacionais não requerem localização.',
  },
  {
    question: 'Como são calculados os rankings?',
    answer:
      'Os rankings consideram votos, comentários, frequência de participação e qualidade das contribuições, sempre de forma transparente.',
  },
  {
    question: 'O Kratikos é só sobre política?',
    answer:
      'Não. Além de política e economia, o Kratikos reúne enquetes e discussões sobre esportes, entretenimento, notícias e assuntos locais.',
  },
];

interface FaqProps {
  items?: FaqItem[];
  showTitle?: boolean;
  title?: string;
  subtitle?: string;
  className?: string;
  includeJsonLd?: boolean;
}

export default function Faq({
  items = defaultFaqData,
  showTitle = true,
  title = 'Perguntas Frequentes',
  subtitle = 'Tire suas dúvidas sobre o Kratikos.',
  className = '',
  includeJsonLd = true,
}: FaqProps) {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <section className={`py-12 lg:py-16 ${className}`}>
      {includeJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-gray-500">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}

        <div className="space-y-4">
          {items.map((item, index) => (
            <motion.details
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group glass rounded-2xl overflow-hidden"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <span className="text-white font-semibold pr-4">{item.question}</span>
                <ChevronRight
                  size={20}
                  className="text-gray-500 transition-transform group-open:rotate-90 shrink-0"
                />
              </summary>
              <div className="px-6 pb-6 text-gray-500 leading-relaxed">
                {item.answer}
              </div>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
