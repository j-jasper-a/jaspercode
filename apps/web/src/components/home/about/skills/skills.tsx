import { BadgeCollection } from "@/components/ui/badge-collection";
import { Card } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/link-button";

export function Skills() {
  const languages = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "PHP",
    "Node.js",
  ];

  const libraries = ["React", "Next.js", "Tailwind CSS", "Express", "NestJS"];

  const tools = ["Git", "GitHub", "Figma", "Vercel"];

  return (
    <Card>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <p>Languages & Runtimes</p>
          <BadgeCollection collection={languages} />
        </div>
        <div className="flex flex-col gap-2">
          <p>Libraries & Frameworks</p>
          <BadgeCollection collection={libraries} />
        </div>
        <div className="flex flex-col gap-2">
          <p>Tools & Apps</p>
          <BadgeCollection collection={tools} />
        </div>
        <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
          <LinkButton
            href="/assets/jihan_jasper_al_rashid_resume.pdf"
            variant="primary"
            size="medium"
          >
            View full résumé
          </LinkButton>
          <LinkButton
            href="https://github.com/jihanjasper"
            variant="secondary"
            size="medium"
          >
            GitHub
          </LinkButton>
        </div>
      </div>
    </Card>
  );
}
