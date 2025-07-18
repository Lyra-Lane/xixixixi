import { useLanguage } from './LanguageProvider';
import { content } from '@/data/content';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-github-dark border-t border-white/10 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-gray-400">
          <p>{t(content.footer.copyright)}</p>
          <p className="mt-2 text-sm">
            {t(content.footer.lastUpdated)}
          </p>
        </div>
      </div>
    </footer>
  );
}
