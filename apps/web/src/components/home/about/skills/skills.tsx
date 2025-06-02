import { BadgeCollection } from "@/components/ui/badge-collection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { skillSets } from "@/data/skill-sets";
import { socialLinks } from "@/data/social-links";
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";

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
          <Button asChild variant="default" size="default">
            <Link href="/assets/jihan_jasper_al_rashid_resume.pdf">
              <span>View full résumé</span>
              <ExternalLinkIcon className="text-muted-foreground" />
            </Link>
          </Button>
          <Button asChild variant="secondary" size="default">
            <Link href={socialLinks.GITHUB_PROFILE_URL}>
              <span>GitHub</span>
              <ExternalLinkIcon className="text-muted-foreground" />
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
}
