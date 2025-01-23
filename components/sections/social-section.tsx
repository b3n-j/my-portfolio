import { Button } from "../ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/votre-username",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/votre-profil",
    icon: Linkedin,
  },
  {
    name: "Email",
    url: "mailto:votre@email.com",
    icon: Mail,
  },
];

export function SocialSection() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-8">Me suivre</h2>
      <div className="flex gap-4">
        {socials.map((social) => (
          <Button
            key={social.name}
            variant="outline"
            size="lg"
            className="gap-2"
            asChild
          >
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <social.icon className="h-5 w-5" />
              <span>{social.name}</span>
            </a>
          </Button>
        ))}
      </div>
    </section>
  );
} 