"use client";
import { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import {
  Download,
  UserPlus,
  Globe,
  ThumbsUp,
  MessageSquare,
  TrendingUp,
  ChevronRight,
  Apple,
  Smartphone,
  CheckCircle2,
} from 'lucide-react';
import { Button } from "@/components";

const steps = [
  {
    number: '01',
    icon: <Download size={28} />,
    title: 'Baixe o App',
    description:
      'Disponível gratuitamente na App Store e Google Play. A instalação leva menos de 1 minuto.',
    details: ['iOS 12+ ou Android 8+', 'Menos de 50MB', 'Sem anúncios'],
  },
  {
    number: '02',
    icon: <UserPlus size={28} />,
    title: 'Crie sua Conta',
    description:
      'Cadastro rápido com Google ou Apple. Seus dados são protegidos e nunca compartilhados.',
    details: ['Login social rápido', 'Verificação de email', 'Perfil personalizável'],
  },
  {
    number: '03',
    icon: <Globe size={28} />,
    title: 'Escolha o Escopo',
    description:
      'Navegue entre discussões internacionais, nacionais ou regionais baseadas na sua localização.',
    details: ['3 níveis de discussão', 'Filtros por tema', 'Localização automática'],
  },
  {
    number: '04',
    icon: <ThumbsUp size={28} />,
    title: 'Vote e Participe',
    description:
      'Dê sua opinião votando em posts e contribua para destacar os temas mais relevantes.',
    details: ['Votos positivos/negativos', 'Sistema anti-fraude', 'Histórico de votos'],
  },
  {
    number: '05',
    icon: <MessageSquare size={28} />,
    title: 'Comente e Debata',
    description:
      'Aprofunde discussões com comentários estruturados. Responda e interaja com outros cidadãos.',
    details: ['Threads organizadas', 'Menções de usuários', 'Notificações em tempo real'],
  },
  {
    number: '06',
    icon: <TrendingUp size={28} />,
    title: 'Acompanhe Tendências',
    description:
      'Veja os temas em alta, rankings de engajamento e métricas da comunidade.',
    details: ['Rankings em tempo real', 'Métricas transparentes', 'Insights personalizados'],
  },
];

const faq = [
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
];

export default function HowItWorks() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <main className="pt-24" key={mounted ? "client" : "server"}>
      {/* Hero */}
      <section className="relative py-16 lg:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[80px]" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(128,128,128,0.03) 40%, transparent 70%)' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Como o Kratikos
              <br />
              funciona
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed">
              Em poucos minutos você estará participando de discussões que importam.
              Veja como é simples começar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
                        <p className="text-gray-500 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3 mt-4 ml-16">
                      {step.details.map((detail, i) => (
                        <span
                          key={i}
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
              Junte-se a milhares de cidadãos que já estão fazendo suas vozes serem ouvidas.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="primary"
                size="lg"
                href="#"
                icon={<Apple size={24} />}
                iconPosition="left"
              >
                App Store
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="#"
                icon={<Smartphone size={24} />}
                iconPosition="left"
              >
                Google Play
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-gray-500">
              Tire suas dúvidas sobre o Kratikos.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faq.map((item, index) => (
              <motion.details
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
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
    </main>
  );
}
