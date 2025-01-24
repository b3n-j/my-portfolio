import { Card } from "@/app/_components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/app/_components/ui/button";
import { Badge } from "@/app/_components/ui/badge";
import { Section } from "@/app/_components/layout/section";
import { createClient } from '@/app/_utils/supabase/client';

export async function FeaturedProjectsSection() {
  const supabase = await createClient();  
  const { data: projects } = await supabase.from("projects").select();

  return (
    <Section id="projects" className="py-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Projets récents</h2>
        <Button variant="outline" asChild>
          <Link href="/projects">Voir tous les projets</Link>
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects?.map((project) => (
          <Card key={project.title} className="overflow-hidden">
            <Link href={`/projects/${project.slug}`}>
              <div className="relative h-48">
                { 
                  project?.image ?
                    <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                :
                <div className="h-48 bg-gray-200 animate-pulse"></div>
                }
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.short_description}</p>
                <div className="flex gap-2">
                  {project && project.technologies && project.technologies?.map((tech: string) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Link>
          </Card>
        ))}
      </div>
    </Section>
  );
} 