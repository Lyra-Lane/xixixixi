import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { BlogSection } from '@/components/BlogSection';
import { MendableChatbot } from '@/components/MendableChatbot';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <BlogSection />
      <MendableChatbot />
      <ContactSection />
      <Footer />
    </div>
  );
}
