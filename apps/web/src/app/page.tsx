import { AboutSection } from "@/components/home/about/about-section";
import { BlogSection } from "@/components/home/blog/blog-section";
import { ContactSection } from "@/components/home/contact/contact-section";
import { HeroSection } from "@/components/home/hero/hero-section";
import { WorkSection } from "@/components/home/work/work-section";

export default function HomePage() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col p-4">
      <HeroSection />
      <BlogSection />
      <WorkSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
