import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";

const education = [
  {
    degree: "Master en Informatique",
    school: "Epitech",
    period: "2018 - 2023",
    description: "Expert en Technologies de l'Information",
    achievements: [
      "Spécialisation en développement web et mobile",
      "Projets pratiques en entreprise",
      "Mémoire sur les architectures modernes"
    ]
  },
  {
    degree: "Bachelor en Informatique",
    school: "Epitech",
    period: "2018 - 2021",
    description: "Formation initiale en développement logiciel",
    achievements: [
      "Fondamentaux de la programmation",
      "Méthodologies agiles",
      "Projets d'équipe"
    ]
  }
];

export function EducationSection() {
  return (
    <Section id="education" className="py-8">
      <h2 className="text-2xl font-bold mb-8">Formation</h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <Card key={index} className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold">{edu.degree}</h3>
                <p className="text-muted-foreground">{edu.school}</p>
              </div>
              <Badge variant="outline">{edu.period}</Badge>
            </div>
            <p className="text-muted-foreground mb-4">{edu.description}</p>
            <ul className="list-disc list-inside text-muted-foreground">
              {edu.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
} 