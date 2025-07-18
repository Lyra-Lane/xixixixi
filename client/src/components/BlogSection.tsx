import { useLanguage } from './LanguageProvider';
import { content } from '@/data/content';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Button } from '@/components/ui/button';

export function BlogSection() {
  const { t } = useLanguage();
  const titleRef = useScrollAnimation();
  const subtitleRef = useScrollAnimation();
  const buttonRef = useScrollAnimation();
  const postRefs = [
    useScrollAnimation(),
    useScrollAnimation(),
    useScrollAnimation()
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-3xl lg:text-4xl font-bold text-github-dark mb-4 animate-on-scroll"
          >
            {t(content.blog.title)}
          </h2>
          <p 
            ref={subtitleRef}
            className="text-xl text-github-text animate-on-scroll"
          >
            {t(content.blog.subtitle)}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.blog.posts.map((post, index) => (
            <article 
              key={index}
              ref={postRefs[index]}
              className="bg-gray-50 rounded-xl overflow-hidden project-card animate-on-scroll cursor-pointer hover:bg-gray-100 transition-colors"
            >
              <div className="p-6">
                <div className="text-sm text-github-text mb-2">
                  {t(post.category)}
                </div>
                <h3 className="text-xl font-semibold text-github-dark mb-3 hover:text-github-blue transition-colors">
                  {t(post.title)}
                </h3>
                <p className="text-github-text mb-4">
                  {t(post.excerpt)}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-github-text">
                    {post.readTime} {t(content.blog.readTime)}
                  </span>
                  <span className="text-sm text-github-text">
                    {t(post.date)}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            ref={buttonRef}
            variant="outline"
            className="border border-github-border hover:border-github-blue text-github-dark px-6 py-3 rounded-lg font-medium animate-on-scroll"
          >
            {t(content.blog.viewAll)}
          </Button>
        </div>
      </div>
    </section>
  );
}
