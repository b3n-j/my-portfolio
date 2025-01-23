import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const technologies = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "Supabase"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Flutter"],
  },
  {
    category: "Outils",
    items: ["Git", "Docker", "VS Code", "Figma"],
  },
];

export function TechStackSection() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-8">Technologies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {technologies.map((tech) => (
          <Card key={tech.category} className="p-6">
            <h3 className="text-lg font-semibold mb-4">{tech.category}</h3>
            <div className="flex flex-wrap gap-2">
              {tech.items.map((item) => (
                <Badge key={item} variant="secondary">
                  {item}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
} 