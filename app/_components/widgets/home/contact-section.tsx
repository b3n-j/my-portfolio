import { Button } from "@/app/_components/ui/button";
import { Card } from "@/app/_components/ui/card";
import { Input } from "@/app/_components/ui/input";
import { Textarea } from "@/app/_components/ui/textarea";
import { Mail, Send } from "lucide-react";
import { Section } from "@/app/_components/layout/section";

export function ContactSection() {
  return (
    <Section id="contact" className="py-8">
      <h2 className="text-2xl font-bold mb-8">Contact</h2>
      <Card className="max-w-2xl mx-auto">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-8">
            <Mail className="h-5 w-5 text-muted-foreground" />
            <p className="text-muted-foreground">
              Envoyez-moi un message et je vous répondrai dès que possible.
            </p>
          </div>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Nom
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Votre nom"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="vous@exemple.com"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Votre message..."
                rows={6}
                required
              />
            </div>
            
            <Button type="submit" className="w-full md:w-auto">
              <Send className="h-4 w-4 mr-2" />
              Envoyer le message
            </Button>
          </form>
        </div>
      </Card>
    </Section>
  );
} 