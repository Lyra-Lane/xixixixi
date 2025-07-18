import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from './LanguageProvider';
import { content } from '@/data/content';
import { Button } from '@/components/ui/button';

export function Navigation() {
  const { t, toggleLanguage, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-nav border-b border-github-border' : 'bg-white'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-semibold text-github-dark">ManYao Li</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-github-text hover:text-github-blue px-3 py-2 text-sm font-medium transition-colors"
              >
                {t(content.nav.home)}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-github-text hover:text-github-blue px-3 py-2 text-sm font-medium transition-colors"
              >
                {t(content.nav.about)}
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-github-text hover:text-github-blue px-3 py-2 text-sm font-medium transition-colors"
              >
                {t(content.nav.projects)}
              </button>
              <button
                onClick={() => scrollToSection('blog')}
                className="text-github-text hover:text-github-blue px-3 py-2 text-sm font-medium transition-colors"
              >
                {t(content.nav.blog)}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-github-text hover:text-github-blue px-3 py-2 text-sm font-medium transition-colors"
              >
                {t(content.nav.contact)}
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              onClick={toggleLanguage}
              variant="outline"
              size="sm"
              className="bg-github-border hover:bg-github-text/10 text-github-text border-github-border"
            >
              {language === 'en' ? content.nav.langToggle.en : content.nav.langToggle.zh}
            </Button>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-github-border">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-3 py-2 text-github-text hover:text-github-blue transition-colors"
              >
                {t(content.nav.home)}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-github-text hover:text-github-blue transition-colors"
              >
                {t(content.nav.about)}
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="block w-full text-left px-3 py-2 text-github-text hover:text-github-blue transition-colors"
              >
                {t(content.nav.projects)}
              </button>
              <button
                onClick={() => scrollToSection('blog')}
                className="block w-full text-left px-3 py-2 text-github-text hover:text-github-blue transition-colors"
              >
                {t(content.nav.blog)}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-github-text hover:text-github-blue transition-colors"
              >
                {t(content.nav.contact)}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
