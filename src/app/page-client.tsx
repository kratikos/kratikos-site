"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from 'framer-motion';
import {
  Globe,
  Flag,
  MapPin,
  Vote,
  Shield,
  TrendingUp,
  Users,
  MessageSquare,
  ChevronRight,
  Apple,
  Smartphone,
  ThumbsUp,
  BarChart3,
  Sparkles,
} from 'lucide-react';
import {
  Button,
  ScopeCard,
  FeatureCard,
  StatsCounter,
  PhonePollCarousel,
} from "@/components";
import type { Poll, PollScope } from "@/types/poll";
import { trackEvent } from "@/lib/gtm";
import { openDeepLink } from "@/lib/deeplink";


const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};


export default function HomeClient({ prefetchedPolls }: { prefetchedPolls?: Partial<Record<PollScope, Poll[]>> }) {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full blur-3xl opacity-40 bg-glow-pattern-1" />
          <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] rounded-full blur-3xl opacity-30 bg-glow-pattern-2" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="text-center"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
              <Sparkles size={16} className="text-white" />
              <span className="text-sm text-gray-400">Plataforma de Engajamento Democrático</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              Kratikos: Sua voz na
              <br />
              <span className="text-white">democracia e engajamento cívico</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Participe de discussões políticas e sociais que impactam seu bairro, 
              seu país e o mundo. Vote, comente e faça a diferença.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() => {
                  trackEvent('click_store_download', { store: 'app_store', location: 'hero' });
                  openDeepLink({ deepLink: 'kratikos://home', targetStore: 'appstore' });
                }}
                icon={
                  <Image
                    src="/stores/appstore-icon.svg"
                    alt="Baixar Kratikos na App Store"
                    width={20}
                    height={20}
                    priority
                    style={{ width: 'auto', height: 'auto' }}
                    className="h-5 w-auto"
                  />
                }
                iconPosition="left"
              >
                App Store
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  trackEvent('click_store_download', { store: 'google_play', location: 'hero' });
                  openDeepLink({ deepLink: 'kratikos://home', targetStore: 'googleplay' });
                }}
                icon={
                  <Image
                    src="/stores/gplay-icon.svg"
                    alt="Baixar Kratikos no Google Play"
                    width={20}
                    height={20}
                    priority
                    style={{ width: 'auto', height: 'auto' }}
                    className="h-5 w-auto"
                  />
                }
                iconPosition="left"
              >
                Google Play
              </Button>
            </motion.div>

            {/* App Preview */}
            <motion.div
              variants={fadeInUp}
              className="relative max-w-4xl mx-auto"
            >
              <div className="relative">
                <PhonePollCarousel prefetchedPolls={prefetchedPolls} />

                {/* Floating badges */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute left-0 top-1/4 -translate-x-8 hidden lg:flex items-center gap-3 glass px-4 py-3 rounded-2xl"
                >
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
                    <ThumbsUp size={20} className="text-black" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">+2.5M</p>
                    <p className="text-gray-400 text-sm font-medium">Votos hoje</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                  className="absolute right-0 top-1/3 translate-x-8 hidden lg:flex items-center gap-3 glass px-4 py-3 rounded-2xl"
                >
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
                    <Users size={20} className="text-black" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">150K+</p>
                    <p className="text-gray-400 text-sm font-medium">Usuários ativos</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="absolute right-8 bottom-8 hidden lg:flex items-center gap-3 glass px-4 py-3 rounded-2xl"
                >
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
                    <BarChart3 size={20} className="text-black" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">89%</p>
                    <p className="text-gray-400 text-sm font-medium">Engajamento</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Scope Section */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Discussões em três níveis
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Do global ao local. Participe de debates que impactam diferentes escalas geográficas.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <ScopeCard
              icon={<Globe size={32} />}
              subtitle="Debates globais"
              title="Internacional"
              description="Acompanhe e participe de discussões sobre temas mundiais: clima, economia global, geopolítica e direitos humanos."
              delay={0}
            />
            <ScopeCard
              icon={<Flag size={32} />}
              subtitle="Política nacional"
              title="Nacional"
              description="Debata sobre legislação, eleições, políticas públicas e temas que afetam todo o Brasil."
              delay={0.1}
            />
            <ScopeCard
              icon={<MapPin size={32} />}
              subtitle="Sua comunidade"
              title="Regional"
              description="Discussões geolocalizadas sobre sua cidade e região. Problemas locais, soluções coletivas."
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 lg:py-32 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <StatsCounter value={150000} suffix="+" label="Usuários Ativos" delay={0} />
            <StatsCounter value={2500000} suffix="+" label="Votos Registrados" delay={0.1} />
            <StatsCounter value={85000} suffix="+" label="Discussões Criadas" delay={0.2} />
            <StatsCounter value={500} suffix="+" label="Cidades Conectadas" delay={0.3} />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Recursos poderosos
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Ferramentas pensadas para potencializar o engajamento cívico.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Vote size={28} />}
              title="Sistema de Votação"
              description="Vote positiva ou negativamente em posts. Sua opinião ajuda a destacar os temas mais relevantes."
              delay={0}
            />
            <FeatureCard
              icon={<MapPin size={28} />}
              title="Geolocalização"
              description="Posts regionais são exibidos baseados na sua localização, conectando você à sua comunidade."
              delay={0.1}
            />
            <FeatureCard
              icon={<TrendingUp size={28} />}
              title="Rankings"
              description="Veja os temas mais discutidos, usuários mais engajados e tendências em tempo real."
              delay={0.2}
            />
            <FeatureCard
              icon={<Shield size={28} />}
              title="Moderação"
              description="Sistema de moderação robusto para manter as discussões saudáveis e produtivas."
              delay={0.3}
            />
            <FeatureCard
              icon={<MessageSquare size={28} />}
              title="Comentários"
              description="Aprofunde o debate com comentários estruturados e sistema de respostas."
              delay={0.4}
            />
            <FeatureCard
              icon={<Users size={28} />}
              title="Comunidade"
              description="Siga outros usuários, crie conexões e fortaleça sua rede de engajamento."
              delay={0.5}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="relative py-24 lg:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full blur-[80px]" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(128,128,128,0.04) 40%, transparent 70%)' }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Pronto para fazer
              <br />
              sua voz ser ouvida?
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
              Baixe o Kratikos gratuitamente e comece a participar das discussões que moldam o futuro.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => {
                  trackEvent('click_store_download', { store: 'app_store', location: 'footer_banner' });
                  openDeepLink({ deepLink: 'kratikos://home', targetStore: 'appstore' });
                }}
                icon={
                  <Image
                    src="/stores/appstore-icon.svg"
                    alt="Baixar Kratikos na App Store"
                    width={24}
                    height={24}
                    style={{ width: 'auto', height: 'auto' }}
                    className="h-6 w-auto"
                  />
                }
                iconPosition="left"
              >
                <div className="text-left">
                  <span className="block text-xs opacity-70">Baixar na</span>
                  <span className="block font-semibold">App Store</span>
                </div>
              </Button>
              <Button
                variant="primary"
                size="lg"
                onClick={() => {
                  trackEvent('click_store_download', { store: 'google_play', location: 'footer_banner' });
                  openDeepLink({ deepLink: 'kratikos://home', targetStore: 'googleplay' });
                }}
                icon={
                  <Image
                    src="/stores/gplay-icon.svg"
                    alt="Baixar Kratikos no Google Play"
                    width={24}
                    height={24}
                    style={{ width: 'auto', height: 'auto' }}
                    className="h-6 w-auto"
                  />
                }
                iconPosition="left"
              >
                <div className="text-left">
                  <span className="block text-xs opacity-70">Disponível no</span>
                  <span className="block font-semibold">Google Play</span>
                </div>
              </Button>
            </div>

            <motion.a
              href="/como-funciona"
              onClick={() => trackEvent('click_navigation', { destination: '/como-funciona', location: 'footer_banner_link' })}
              whileHover={{ x: 5 }}
              className="inline-flex items-center gap-2 mt-8 text-gray-400 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-lg px-2 py-1"
            >
              Saiba como funciona <ChevronRight size={16} />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
