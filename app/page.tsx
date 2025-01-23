import { HeroSection } from "@/components/sections/hero-section";
import { TechStackSection } from "@/components/sections/tech-stack-section";
import { FeaturedProjectsSection } from "@/components/sections/featured-projects-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { EducationSection } from "@/components/sections/education-section";
import { SocialSection } from "@/components/sections/social-section";
import { ContactSection } from "@/components/sections/contact-section";
import { SectionNav } from "@/components/navigation/section-nav";
import { SectionDivider } from "@/components/ui/section-divider";

export default function Home() {
  return (
    <main className="container mx-auto px-4 relative">
      <SectionNav />
      <HeroSection />
      <SectionDivider />
      <ExperienceSection />
      <SectionDivider />
      <FeaturedProjectsSection />
      <SectionDivider />
      <EducationSection />
      <SectionDivider />
      <TechStackSection />
      <SectionDivider />
      <ContactSection />
      <SectionDivider />
      <SocialSection />
    </main>
  );
}
