"use client";
import { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import {
  Target,
  Heart,
  Shield,
  Users,
  Lightbulb,
  Globe,
  Award,
  ArrowRight,
} from 'lucide-react';
import { Button } from "@/components";
import Link from "next/link";

const values = [
  {
    icon: <Target size={24} />,
    title: 'Transparência',
    description:
      'Todas as métricas e processos são públicos. Você sabe exatamente como tudo funciona.',
  },
  {
    icon: <Heart size={24} />,
    title: 'Democracia',
    description:
      'Acreditamos que cada voz importa. Nossa plataforma empodera cidadãos de todas as regiões.',
  },
  {
    icon: <Shield size={24} />,
    title: 'Privacidade',
    description:
      'Seus dados são seus. Seguimos rigorosamente a LGPD e as melhores práticas de segurança.',
  },
  {
    icon: <Users size={24} />,
    title: 'Comunidade',
    description:
      'Construímos juntos. O Kratikos é moldado pelo feedback e participação dos usuários.',
  },
  {
    icon: <Lightbulb size={24} />,
    title: 'Inovação',
    description:
      'Usamos tecnologia de ponta para criar a melhor experiência de engajamento cívico.',
  },
  {
    icon: <Globe size={24} />,
    title: 'Acessibilidade',
    description:
      'Gratuito e acessível para todos. Democracia não pode ter barreiras de entrada.',
  },
];

const milestones = [
  { year: '2024', title: 'Fundação', description: 'Início do projeto Kratikos' },
  { year: '2025', title: 'Lançamento Beta', description: 'Primeiros usuários testam a plataforma' },
  { year: '2025', title: 'Versão 1.0', description: 'Lançamento oficial nas lojas' },
  { year: '2026', title: 'Expansão', description: 'Novas funcionalidades e crescimento' },
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
      name: 'Sobre Nós',
      item: 'https://kratikos.com.br/sobre',
    },
  ],
};

export default function About() {
  return (
    <main className="pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Hero */}
      <section className="relative py-16 lg:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[80px] bg-glow-pattern-1" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[60px] bg-glow-pattern-2" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Construindo o futuro do
                <br />
                engajamento cívico
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                O Kratikos nasceu da crença de que a tecnologia pode fortalecer a democracia.
                Nossa missão é dar voz a cada cidadão, conectando pessoas a discussões que
                realmente importam — do bairro ao mundo.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" href="/contato">
                  Fale Conosco
                </Button>
                <Button variant="ghost" href="/como-funciona" icon={<ArrowRight size={18} />}>
                  Como Funciona
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-white/[0.02] border border-white/5 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="mx-auto mb-8 flex justify-center">
                    <img src="/visual-identity/logo-vertical-light.svg" alt="Kratikos Logo" className="h-32 w-auto" />
                  </div>
                  <p className="text-gray-400">
                    Do grego "κρατικός"
                    <br />
                    <span className="text-white">"do cidadão, cívico"</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 lg:py-24 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl"
            >
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-black mb-6">
                <Target size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Nossa Missão</h3>
              <p className="text-gray-400 leading-relaxed">
                Democratizar o acesso ao debate público, permitindo que cada cidadão
                participe ativamente das discussões que moldam seu futuro.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass p-8 rounded-3xl"
            >
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-black mb-6">
                <Lightbulb size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Nossa Visão</h3>
              <p className="text-gray-400 leading-relaxed">
                Um mundo onde a distância entre cidadãos e decisões políticas seja
                eliminada pela tecnologia e participação ativa.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass p-8 rounded-3xl"
            >
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-black mb-6">
                <Award size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Nosso Propósito</h3>
              <p className="text-gray-400 leading-relaxed">
                Criar pontes entre pessoas, comunidades e governos através de
                diálogos construtivos e engajamento genuíno.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Nossos Valores
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Princípios que guiam cada decisão e funcionalidade do Kratikos.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Nossa Jornada
            </h2>
            <p className="text-gray-400 text-lg">
              Os marcos importantes da história do Kratikos.
            </p>
          </motion.div>

          <div className="relative">
            {/* Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent -translate-x-1/2 hidden md:block" />

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year + milestone.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`relative grid md:grid-cols-2 gap-8 ${
                    index % 2 === 1 ? 'md:text-right' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                    <div
                      className={`glass p-6 rounded-2xl ${
                        index % 2 === 1 ? 'md:ml-8' : 'md:mr-8'
                      }`}
                    >
                      <span className="text-sm font-medium text-white">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-bold text-white mt-1 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-400">{milestone.description}</p>
                    </div>
                  </div>
                  <div
                    className={`hidden md:flex items-center ${
                      index % 2 === 1 ? 'md:order-1 justify-end' : 'justify-start'
                    }`}
                  >
                    <div className="w-4 h-4 rounded-full bg-white" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Quer fazer parte dessa história?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
              Baixe o Kratikos e comece a participar de discussões que moldam o futuro.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="lg" href="/#download">
                Baixar App
              </Button>
              <Link
                href="/contato"
                className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
              >
                Entre em contato <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
