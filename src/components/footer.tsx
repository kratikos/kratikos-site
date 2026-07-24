import Link from 'next/link';
import Image from 'next/image';
import { Github, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';

const footerLinks = {
  produto: [
    { name: 'Recursos', path: '/recursos' },
    { name: 'Como Funciona', path: '/como-funciona' },
    { name: 'Download', path: '#download' },
  ],
  empresa: [
    { name: 'Sobre Nós', path: '/sobre' },
    { name: 'Contato', path: '/contato' },
  ],
  legal: [
    { name: 'Termos de Uso', path: '/termos' },
    { name: 'Privacidade', path: '/privacidade' },
    { name: 'Cookies', path: '/cookies' },
  ],
};

const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com/kratikos', label: 'Twitter (X)' },
  { icon: Instagram, href: 'https://instagram.com/kratikos.app', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com/company/kratikos', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/kratikos', label: 'GitHub' },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="inline-block mb-6 hover:opacity-80 transition-opacity">
              <Image
                src="/visual-identity/logo-horizontal-light.svg"
                alt="Kratikos - Logo Rodapé"
                width={150}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Plataforma de engajamento democrático. Conectando cidadãos para discussões que importam.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="min-w-[44px] min-h-[44px] w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-white font-semibold mb-4">Produto</p>
            <ul className="space-y-3">
              {footerLinks.produto.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-gray-400 hover:text-white text-sm transition-colors focus:outline-none focus:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-white font-semibold mb-4">Empresa</p>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-gray-400 hover:text-white text-sm transition-colors focus:outline-none focus:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-white font-semibold mb-4">Legal</p>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-gray-400 hover:text-white text-sm transition-colors focus:outline-none focus:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Kratikos. Todos os direitos reservados.
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-1">
            Feito com <Heart size={14} className="text-white" /> no Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}
