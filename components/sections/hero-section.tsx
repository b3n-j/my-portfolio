import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import Link from "next/link";

export function HeroSection() {
  return (
    <Section id="hero" className="flex flex-col gap-8 py-8 md:py-16">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          I build things for the web
        </h1>
        <p className="text-xl text-muted-foreground">
          Développeur web/mobile full stack passionné par la création d'applications performantes et innovantes.
        </p>
      </div>
      
      <div className="flex items-center gap-4">
        <Badge variant="secondary" className="px-4 py-1">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Disponible pour de nouveaux projets
          </span>
        </Badge>
      </div>

      <div className="flex gap-4">
        <Button asChild>
          <Link href="/contact">Me contacter</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/projects">Voir mes projets</Link>
        </Button>
      </div>
    </Section>
  );
} 