import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/components/LanguageProvider';
import { content } from '@/data/content';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export default function Chatbot() {
  const { t } = useLanguage();
  const titleRef = useScrollAnimation();
  const subtitleRef = useScrollAnimation();
  const chatbotRef = useScrollAnimation();

  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="pt-20 pb-16 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 
              ref={titleRef}
              className="text-3xl lg:text-4xl font-bold text-github-dark mb-4 animate-on-scroll"
            >
              {t(content.chatbot.title)}
            </h1>
            <p 
              ref={subtitleRef}
              className="text-xl text-github-text animate-on-scroll max-w-3xl mx-auto"
            >
              {t(content.chatbot.subtitle)}
            </p>
          </div>
          
          <div 
            ref={chatbotRef}
            className="bg-white rounded-2xl shadow-xl overflow-hidden animate-on-scroll"
          >
            <iframe
              src="https://www.chatbase.co/chatbot-iframe/dgxbknfkAGEsLEN5xY6M9"
              width="100%"
              style={{ height: '100%', minHeight: '700px' }}
              frameBorder="0"
              title="AI Assistant Chatbot"
              className="w-full"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}