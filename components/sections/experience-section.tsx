import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Développeur Full Stack",
    company: "Nom de l'entreprise",
    period: "2022 - Présent",
    description: "Description des responsabilités et réalisations principales",
    technologies: ["React", "Node.js", "TypeScript", "AWS"],
    achievements: [
      "Développement et maintenance d'applications web performantes",
      "Mise en place d'une architecture microservices",
      "Amélioration des performances de 40%"
    ]
  },
];

export function ExperienceSection() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-8">Expérience Professionnelle</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index} className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold">{exp.title}</h3>
                <p className="text-muted-foreground">{exp.company}</p>
              </div>
              <Badge variant="outline">{exp.period}</Badge>
            </div>
            <p className="text-muted-foreground mb-4">{exp.description}</p>
            <ul className="list-disc list-inside mb-4 text-muted-foreground">
              {exp.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
} 