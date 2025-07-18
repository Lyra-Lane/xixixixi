import { useLanguage } from './LanguageProvider';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export function MendableChatbot() {
  const { t } = useLanguage();
  const chatbotRef = useScrollAnimation();

  const chatbotContent = {
    title: { en: "Have Questions? Ask My AI Assistant", zh: "有问题吗？问问我的AI助手" },
    subtitle: { 
      en: "Get instant answers about my research, projects, and background using the search bar below.",
      zh: "使用下面的搜索栏即时获取关于我的研究、项目和背景的答案。"
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-github-blue/5 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={chatbotRef}
          className="text-center animate-on-scroll"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-github-dark mb-4">
            {t(chatbotContent.title)}
          </h2>
          <p className="text-lg text-github-text mb-8">
            {t(chatbotContent.subtitle)}
          </p>
          
          {/* Search bar will be rendered here by Mendable */}
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
            <div id="mendable-search-bar" className="min-h-[60px] flex items-center justify-center">
              <div className="text-github-text">Loading search interface...</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}