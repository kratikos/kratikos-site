import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Início', path: '/' },
  { name: 'Recursos', path: '/recursos' },
  { name: 'Como Funciona', path: '/como-funciona' },
  { name: 'Sobre', path: '/sobre' },
  { name: 'Contato', path: '/contato' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="w-10 h-10 rounded-xl bg-white flex items-center justify-center"
            >
              <span className="text-black font-bold text-xl">K</span>
            </motion.div>
            <span className="text-xl font-bold text-white group-hover:opacity-80 transition-opacity">
              Kratikos
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'text-white bg-white/10'
                    : 'text-gray-500 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <motion.a
              href="#download"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-5 py-2.5 bg-white text-black rounded-xl font-semibold text-sm hover:bg-gray-100 transition-colors"
            >
              Baixar App
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass mt-2 mx-4 rounded-2xl overflow-hidden"
          >
            <nav className="p-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    location.pathname === link.path
                      ? 'text-white bg-white/10'
                      : 'text-gray-500 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="#download"
                className="mt-2 px-4 py-3 bg-white text-black rounded-xl font-semibold text-center"
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
