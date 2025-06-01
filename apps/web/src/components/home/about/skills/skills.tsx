import { BadgeCollection } from "@/components/ui/badge-collection";
import { Card } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/link-button";
import { skillSets } from "@/data/skill-sets";
import { socialLinks } from "@/data/social-links";

export function Skills() {
  return (
    <Card>
      <div className="flex flex-col gap-4">
        {skillSets.map(({ name, skills }) => (
          <div key={name} className="flex flex-col gap-2">
            <p>{name}</p>
            <BadgeCollection collection={skills} />
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
            href={socialLinks.GITHUB_PROFILE_URL}
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
