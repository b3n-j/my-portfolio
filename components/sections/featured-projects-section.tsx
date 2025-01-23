import { Card } from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const featuredProjects = [
  {
    title: "Projet 1",
    description: "Description courte du projet 1",
    image: "/projects/project1.png",
    technologies: ["React", "Next.js", "Tailwind"],
    slug: "projet-1",
  },
];

export function FeaturedProjectsSection() {
  return (
    <section className="py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Projets récents</h2>
        <Button variant="outline" asChild>
          <Link href="/projects">Voir tous les projets</Link>
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featuredProjects.map((project) => (
          <Card key={project.title} className="overflow-hidden">
            <Link href={`/projects/${project.slug}`}>
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex gap-2">
                  {project.technologies.map((tech) => (
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
    </section>
  );
} 