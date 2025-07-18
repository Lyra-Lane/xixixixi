import { Code, ExternalLink, Mail } from 'lucide-react';
import { useLanguage } from './LanguageProvider';
import { content } from '@/data/content';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export function ProjectsSection() {
  const { t } = useLanguage();
  const titleRef = useScrollAnimation();
  const subtitleRef = useScrollAnimation();
  const projectRefs = [
    useScrollAnimation(),
    useScrollAnimation(),
    useScrollAnimation(),
    useScrollAnimation()
  ];

  const projectCategories = [
    { type: "NLP Research", color: "bg-github-blue/10 text-github-blue", skillColor: "blue" },
    { type: "Statistical Modeling", color: "bg-github-green/10 text-github-green", skillColor: "green" },
    { type: "Data Analysis", color: "bg-purple-100 text-purple-600", skillColor: "purple" },
    { type: "Education", color: "bg-orange-100 text-orange-600", skillColor: "orange" }
  ];

  const projects = [
    {
      category: projectCategories[0],
      title: content.projects.ironyDetection.title,
      description: content.projects.ironyDetection.description,
      timeline: content.projects.ironyDetection.timeline,
      skills: ["LLaMA-2", "RoBERTa", "LSTM", "Python"]
    },
    {
      category: projectCategories[1],
      title: content.projects.carbonNeutral.title,
      description: content.projects.carbonNeutral.description,
      timeline: content.projects.carbonNeutral.timeline,
      skills: ["Time Series", "Spatial Analysis", "R", "Optimization"]
    },
    {
      category: projectCategories[2],
      title: content.projects.marketResearch.title,
      description: content.projects.marketResearch.description,
      timeline: content.projects.marketResearch.timeline,
      skills: ["Conjoint Analysis", "R", "Excel", "Leadership"]
    },
    {
      category: projectCategories[3],
      title: content.projects.teaching.title,
      description: content.projects.teaching.description,
      timeline: content.projects.teaching.timeline,
      skills: ["Teaching", "Mentorship", "Curriculum Design"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-3xl lg:text-4xl font-bold text-github-dark mb-4 animate-on-scroll"
          >
            {t(content.projects.title)}
          </h2>
          <p 
            ref={subtitleRef}
            className="text-xl text-github-text animate-on-scroll"
          >
            {t(content.projects.subtitle)}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              ref={projectRefs[index]}
              className="bg-white rounded-xl shadow-lg overflow-hidden project-card animate-on-scroll"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${project.category.color}`}>
                    {project.category.type}
                  </span>
                  <div className="flex space-x-2">
                    <button className="text-github-text hover:text-github-blue transition-colors">
                      <Code className="w-5 h-5" />
                    </button>
                    <button className="text-github-text hover:text-github-blue transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-github-dark mb-3">
                  {t(project.title)}
                </h3>
                <p className="text-github-text mb-4">
                  {t(project.description)}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className={`px-2 py-1 rounded text-xs ${
                        project.category.skillColor === 'blue' ? 'bg-blue-100 text-blue-600' :
                        project.category.skillColor === 'green' ? 'bg-green-100 text-green-600' :
                        project.category.skillColor === 'purple' ? 'bg-purple-100 text-purple-600' :
                        'bg-orange-100 text-orange-600'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="text-sm text-github-text">
                  {t(project.timeline)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
