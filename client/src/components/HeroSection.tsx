import { Download, ExternalLink } from 'lucide-react';
import { useLanguage } from './LanguageProvider';
import { content } from '@/data/content';
import { Button } from '@/components/ui/button';
import profileImagePath from '@assets/证件照（长发）_1752817158476.jpg';

export function HeroSection() {
  const { t } = useLanguage();

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const downloadCV = () => {
    // Create a link to download the PDF resume
    const link = document.createElement('a');
    link.href = '/ManYao_Li_Resume.pdf'; // You would need to add this to public folder
    link.download = 'ManYao_Li_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold text-github-dark mb-6 leading-tight">
              {t(content.hero.title).split(' ').map((word, index) => (
                <span key={index}>
                  {word === 'NLP' ? (
                    <span className="text-github-blue">{word}</span>
                  ) : (
                    word
                  )}
                  {index < t(content.hero.title).split(' ').length - 1 ? ' ' : ''}
                </span>
              ))}
            </h1>
            <p className="text-xl text-github-text mb-8 leading-relaxed">
              {t(content.hero.subtitle)}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToProjects}
                className="bg-github-blue hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium"
              >
                {t(content.hero.viewWork)}
              </Button>
              <Button
                onClick={downloadCV}
                variant="outline"
                className="border border-github-border hover:border-github-blue text-github-dark px-6 py-3 rounded-lg font-medium flex items-center"
              >
                <Download className="w-4 h-4 mr-2" />
                {t(content.hero.downloadCV)}
              </Button>
            </div>
          </div>
          <div className="animate-fade-in lg:animate-slide-in-right">
            <img 
              src={profileImagePath}
              alt="ManYao Li - Professional Photo" 
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
