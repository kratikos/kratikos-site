"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useReducedMotion, motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { trackEvent } from '@/lib/gtm';
import { handleSmartDownloadClick } from '@/lib/deeplink';



const navLinks = [
  { name: 'Início', path: '/' },
  { name: 'Como Funciona', path: '/como-funciona' },
  { name: 'Recursos', path: '/recursos' },
  { name: 'Sobre', path: '/sobre' },
  { name: 'Ajuda', path: '/ajuda' },
  { name: 'Contato', path: '/contato' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const handleMobileMenuToggle = () => {
    const nextState = !isMobileMenuOpen;
    setIsMobileMenuOpen(nextState);
    trackEvent('toggle_mobile_menu', { state: nextState ? 'open' : 'close' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border pt-[max(0.75rem,env(safe-area-inset-top))] ${
        isScrolled ? 'glass py-3' : 'bg-transparent py-5 border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center group py-1"
            onClick={() => trackEvent('click_navigation', { destination: '/', location: 'header_logo' })}
          >
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src="/visual-identity/logo-horizontal-light.svg"
                alt="Kratikos - Logo Oficial da Plataforma de Engajamento Cívico"
                width={150}
                height={32}
                priority
                className="h-8 w-auto group-hover:opacity-80 transition-opacity"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => trackEvent('click_navigation', { destination: link.path, location: 'header' })}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                  pathname === link.path
                    ? 'text-white bg-white/10'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <motion.a
              href="/#download"
              onClick={(e) => {
                handleSmartDownloadClick(e, { location: 'header', pathname, router });
              }}
              whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              className="px-5 py-2.5 bg-white text-black rounded-xl font-semibold text-sm hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              Baixar App
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={handleMobileMenuToggle}
            aria-label={isMobileMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
            aria-expanded={isMobileMenuOpen}
            className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center p-2.5 text-white hover:bg-white/10 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, height: 'auto' }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.1 : 0.2 }}
            className="md:hidden glass mt-2 mx-4 rounded-2xl overflow-hidden"
          >
            <nav className="p-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => trackEvent('click_navigation', { destination: link.path, location: 'mobile_menu' })}
                  className={`min-h-[44px] flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    pathname === link.path
                      ? 'text-white bg-white/10'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="/#download"
                onClick={(e) => {
                  handleSmartDownloadClick(e, { location: 'mobile_menu', pathname, router });
                }}
                className="mt-2 min-h-[44px] flex items-center justify-center px-4 py-3 bg-white text-black rounded-xl font-semibold text-center hover:bg-gray-100 transition-colors"
              >
                Baixar App
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
