import { GraduationCap, Briefcase, Zap } from 'lucide-react';
import { useLanguage } from './LanguageProvider';
import { content } from '@/data/content';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export function AboutSection() {
  const { t } = useLanguage();
  const titleRef = useScrollAnimation();
  const subtitleRef = useScrollAnimation();
  const cardRefs = [
    useScrollAnimation(),
    useScrollAnimation(),
    useScrollAnimation()
  ];
  const skillsRef = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-3xl lg:text-4xl font-bold text-github-dark mb-4 animate-on-scroll"
          >
            {t(content.about.title)}
          </h2>
          <p 
            ref={subtitleRef}
            className="text-xl text-github-text animate-on-scroll"
          >
            {t(content.about.subtitle)}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div ref={cardRefs[0]} className="bg-gray-50 rounded-xl p-8 project-card animate-on-scroll">
            <div className="bg-github-blue/10 rounded-lg p-3 w-fit mb-4">
              <GraduationCap className="w-6 h-6 text-github-blue" />
            </div>
            <h3 className="text-xl font-semibold text-github-dark mb-2">
              {t(content.about.education.title)}
            </h3>
            <p className="text-github-text mb-2">
              {t(content.about.education.school)}
            </p>
            <p className="text-sm text-github-text">
              {t(content.about.education.degree)}
            </p>
          </div>

          <div ref={cardRefs[1]} className="bg-gray-50 rounded-xl p-8 project-card animate-on-scroll">
            <div className="bg-github-green/10 rounded-lg p-3 w-fit mb-4">
              <Briefcase className="w-6 h-6 text-github-green" />
            </div>
            <h3 className="text-xl font-semibold text-github-dark mb-2">
              {t(content.about.research.title)}
            </h3>
            <p className="text-github-text mb-2">
              {t(content.about.research.area)}
            </p>
            <p className="text-sm text-github-text">
              {t(content.about.research.details)}
            </p>
          </div>

          <div ref={cardRefs[2]} className="bg-gray-50 rounded-xl p-8 project-card animate-on-scroll">
            <div className="bg-purple-100 rounded-lg p-3 w-fit mb-4">
              <Zap className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-github-dark mb-2">
              {t(content.about.role.title)}
            </h3>
            <p className="text-github-text mb-2">
              {t(content.about.role.position)}
            </p>
            <p className="text-sm text-github-text">
              {t(content.about.role.organization)}
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div ref={skillsRef} className="bg-gray-50 rounded-2xl p-8 animate-on-scroll">
          <h3 className="text-2xl font-semibold text-github-dark mb-8 text-center">
            {t(content.about.skills.title)}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h4 className="font-semibold text-github-dark mb-3">
                {t(content.about.skills.programming)}
              </h4>
              <div className="space-y-2">
                <span className="inline-block bg-github-blue/10 text-github-blue px-3 py-1 rounded-full text-sm">Python</span>
                <span className="inline-block bg-github-blue/10 text-github-blue px-3 py-1 rounded-full text-sm ml-2">R</span>
                <span className="inline-block bg-github-blue/10 text-github-blue px-3 py-1 rounded-full text-sm">SQL</span>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-github-dark mb-3">
                {t(content.about.skills.dataScience)}
              </h4>
              <div className="space-y-2">
                <span className="inline-block bg-github-green/10 text-github-green px-3 py-1 rounded-full text-sm">Pandas</span>
                <span className="inline-block bg-github-green/10 text-github-green px-3 py-1 rounded-full text-sm ml-2">NumPy</span>
                <span className="inline-block bg-github-green/10 text-github-green px-3 py-1 rounded-full text-sm">Matplotlib</span>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-github-dark mb-3">
                {t(content.about.skills.mlnlp)}
              </h4>
              <div className="space-y-2">
                <span className="inline-block bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">LLaMA-2</span>
                <span className="inline-block bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm ml-2">RoBERTa</span>
                <span className="inline-block bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">LSTM</span>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-github-dark mb-3">
                {t(content.about.skills.tools)}
              </h4>
              <div className="space-y-2">
                <span className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">Git</span>
                <span className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm ml-2">LaTeX</span>
                <span className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">SPSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
