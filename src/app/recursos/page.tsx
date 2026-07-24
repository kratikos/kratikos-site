"use client";
import { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import {
  Vote,
  MapPin,
  TrendingUp,
  Shield,
  MessageSquare,
  Users,
  Bell,
  Bookmark,
  Share2,
  BarChart3,
  Lock,
  Zap,
  Globe,
  Flag,
  ThumbsUp,
  ThumbsDown,
  SkipForward,
} from 'lucide-react';
import { FeatureCard } from "@/components";

const mainFeatures = [
  {
    icon: <Vote size={32} />,
    title: 'Sistema de Votação Transparente',
    description:
      'Vote positivamente, negativamente ou pule posts. Cada voto conta e ajuda a definir a relevância do conteúdo. Sistema anti-fraude com device fingerprinting garante a integridade.',
    details: [
      { icon: <ThumbsUp size={16} />, text: 'Votos positivos para concordar' },
      { icon: <ThumbsDown size={16} />, text: 'Votos negativos para discordar' },
      { icon: <SkipForward size={16} />, text: 'Skip para pular conteúdo' },
    ],
  },
  {
    icon: <MapPin size={32} />,
    title: 'Posts Geolocalizados',
    description:
      'Discussões regionais usam a fórmula de Haversine para mostrar posts relevantes baseados na sua localização. Defina um raio de alcance e conecte-se com sua comunidade local.',
    details: [
      { icon: <Globe size={16} />, text: 'Alcance internacional' },
      { icon: <Flag size={16} />, text: 'Debates nacionais' },
      { icon: <MapPin size={16} />, text: 'Comunidade local' },
    ],
  },
  {
    icon: <TrendingUp size={32} />,
    title: 'Rankings em Tempo Real',
    description:
      'Acompanhe os temas mais discutidos, os posts mais votados e os usuários mais engajados. Métricas transparentes que refletem o pulso da comunidade.',
    details: [
      { icon: <BarChart3 size={16} />, text: 'Métricas detalhadas' },
      { icon: <TrendingUp size={16} />, text: 'Tendências em alta' },
      { icon: <Users size={16} />, text: 'Top contribuidores' },
    ],
  },
  {
    icon: <Shield size={32} />,
    title: 'Moderação Inteligente',
    description:
      'Combinamos moderação humana com sistemas automatizados para manter discussões saudáveis. Reporte conteúdos inadequados e ajude a manter a qualidade.',
    details: [
      { icon: <Shield size={16} />, text: 'Filtros automáticos' },
      { icon: <Users size={16} />, text: 'Moderadores da comunidade' },
      { icon: <Lock size={16} />, text: 'Políticas claras' },
    ],
  },
];

const additionalFeatures = [
  {
    icon: <MessageSquare size={24} />,
    title: 'Comentários Estruturados',
    description: 'Sistema de respostas em thread para discussões aprofundadas.',
  },
  {
    icon: <Users size={24} />,
    title: 'Seguir Usuários',
    description: 'Acompanhe contribuidores que você admira e amplie sua rede.',
  },
  {
    icon: <Bell size={24} />,
    title: 'Notificações',
    description: 'Receba alertas sobre respostas, votos e temas de interesse.',
  },
  {
    icon: <Bookmark size={24} />,
    title: 'Salvar Posts',
    description: 'Guarde discussões importantes para acessar depois.',
  },
  {
    icon: <Share2 size={24} />,
    title: 'Compartilhamento',
    description: 'Compartilhe discussões relevantes nas suas redes sociais.',
  },
  {
    icon: <Zap size={24} />,
    title: 'Performance',
    description: 'App leve e rápido, otimizado para todos os dispositivos.',
  },
];

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
      name: 'Recursos',
      item: 'https://kratikos.com.br/recursos',
    },
  ],
};

export default function Features() {
  return (
    <main className="pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Hero */}
      <section className="relative py-16 lg:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[80px] bg-glow-pattern-1" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[60px] bg-glow-pattern-2" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Recursos e Funcionalidades:
              <br />
              Empoderando Cidadãos na Democracia
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed">
              Cada funcionalidade do Kratikos foi pensada para maximizar o engajamento
              cívico e facilitar discussões produtivas sobre os temas que mais importam.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 bg-white text-black">
                    {feature.icon}
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                    {feature.title}
                  </h2>
                  <p className="text-gray-500 text-lg leading-relaxed mb-8">
                    {feature.description}
                  </p>
                  <div className="space-y-3">
                    {feature.details.map((detail, i) => (
                      <div key={i} className="flex items-center gap-3 text-gray-400">
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white">
                          {detail.icon}
                        </div>
                        {detail.text}
                      </div>
                    ))}
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative aspect-square rounded-3xl overflow-hidden bg-white/[0.02] border border-white/5">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-3xl flex items-center justify-center bg-white text-black">
                        {feature.icon}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-16 lg:py-24 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              E muito mais
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Recursos adicionais que complementam sua experiência.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
