import { MessageCircle } from 'lucide-react';
import { useLanguage } from './LanguageProvider';
import { content } from '@/data/content';

export function ChatbotButton() {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="/chatbot"
        className="group relative bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-3"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="font-medium pr-2">
          {t(content.nav.chatbot)}
        </span>
        
        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse opacity-75 group-hover:opacity-0 transition-opacity duration-300"></div>
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          {t(content.chatbot.subtitle)}
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      </a>
    </div>
  );
}