import { HeroSection } from "@/app/_components/widgets/home/hero-section";
import { TechStackSection } from "@/app/_components/widgets/tech-stack-section";
import { FeaturedProjectsSection } from "@/app/_components/widgets/home/featured-projects-section";
import { ExperienceSection } from "@/app/_components/widgets/home/experience-section";
import { EducationSection } from "@/app/_components/widgets/home/education-section";
import { SocialSection } from "@/app/_components/widgets/home/social-section";
import { ContactSection } from "@/app/_components/widgets/home/contact-section";
import { SectionNav } from "@/app/_components/layout/section-nav";

export default function Home() {
  return (
    <main className="container mx-auto px-4 relative">
      <SectionNav />
      <HeroSection />
      <ExperienceSection />
      <FeaturedProjectsSection />
      <EducationSection />
      <TechStackSection />
      <ContactSection />
      <SocialSection />
    </main>
  );
}
