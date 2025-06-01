import { BadgeCollection } from "@/components/ui/badge-collection";
import { Card } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/link-button";
import { skills } from "@/config/skills";
import { socials } from "@/config/socials";

export function Skills() {
  return (
    <Card>
      <div className="flex flex-col gap-4">
        {skills.map((skill) => (
          <div key={skill.category} className="flex flex-col gap-2">
            <p>{skill.category}</p>
            <BadgeCollection collection={skill.items} />
          </div>
        ))}
        <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
          <LinkButton
            href="/assets/jihan_jasper_al_rashid_resume.pdf"
            variant="primary"
            size="medium"
          >
            View full résumé
          </LinkButton>
          <LinkButton
            href={socials.GITHUB_PROFILE_URL}
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
