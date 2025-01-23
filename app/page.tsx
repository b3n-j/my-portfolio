import { HeroSection } from "@/components/sections/hero-section";
import { TechStackSection } from "@/components/sections/tech-stack-section";
import { FeaturedProjectsSection } from "@/components/sections/featured-projects-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { EducationSection } from "@/components/sections/education-section";
import { SocialSection } from "@/components/sections/social-section";

export default function Home() {
  return (
    <main className="container mx-auto px-4">
      <HeroSection />
      <ExperienceSection />
      <FeaturedProjectsSection />
      <EducationSection />
      <TechStackSection />
      <SocialSection />
    </main>
  );
}
