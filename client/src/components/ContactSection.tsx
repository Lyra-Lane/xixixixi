import { Mail, Linkedin, Github, MessageCircle } from 'lucide-react';
import { useLanguage } from './LanguageProvider';
import { content } from '@/data/content';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export function ContactSection() {
  const { t } = useLanguage();
  const titleRef = useScrollAnimation();
  const subtitleRef = useScrollAnimation();
  const locationRef = useScrollAnimation();
  const contactRefs = [
    useScrollAnimation(),
    useScrollAnimation(),
    useScrollAnimation(),
    useScrollAnimation()
  ];

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: content.contact.email,
      href: `mailto:${content.contact.email}`,
      color: "text-github-green"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: content.contact.linkedin,
      href: "https://www.linkedin.com/in/manyao-li-9a4436375",
      color: "text-github-blue"
    },
    {
      icon: Github,
      label: "GitHub",
      value: content.contact.github,
      href: "https://github.com/Lyra-lane",
      color: "text-gray-300"
    },
    {
      icon: MessageCircle,
      label: "WeChat",
      value: content.contact.wechat,
      href: "#",
      color: "text-green-400"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-github-dark text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 
          ref={titleRef}
          className="text-3xl lg:text-4xl font-bold mb-4 animate-on-scroll"
        >
          {t(content.contact.title)}
        </h2>
        <p 
          ref={subtitleRef}
          className="text-xl text-gray-300 mb-12 animate-on-scroll"
        >
          {t(content.contact.subtitle)}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactLinks.map((contact, index) => (
            <a
              key={index}
              ref={contactRefs[index]}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="bg-white/10 hover:bg-white/20 rounded-xl p-6 transition-colors group animate-on-scroll"
            >
              <contact.icon className={`w-8 h-8 mx-auto mb-3 ${contact.color} group-hover:scale-110 transition-transform`} />
              <div className="text-white font-medium">{contact.label}</div>
              <div className="text-gray-300 text-sm truncate">{contact.value}</div>
            </a>
          ))}
        </div>

        <div 
          ref={locationRef}
          className="bg-white/5 rounded-xl p-8 animate-on-scroll"
        >
          <h3 className="text-xl font-semibold mb-4">
            {t(content.contact.location.title)}
          </h3>
          <p className="text-gray-300">
            {t(content.contact.location.place)}
          </p>
          <p className="text-gray-300 mt-2">
            {t(content.contact.location.status)}
          </p>
        </div>
      </div>
    </section>
  );
}
