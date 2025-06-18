import { BadgeCollection } from "@/components/ui/badge-collection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { skillSets } from "@/data/skill-sets";
import { socialLinks } from "@/data/social-links";
import { ExternalLinkIcon, DownloadIcon } from "lucide-react";
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
        <div className="mt-2 flex flex-col items-center justify-between gap-2 lg:flex-row">
          <Button asChild variant="default" size="sm">
            <Link
              href="/assets/jihan_jasper_al_rashid_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <span>Download résumé PDF</span>
              <DownloadIcon className="text-muted-foreground" />
            </Link>
          </Button>
          <Button asChild variant="secondary" size="sm">
            <Link
              href={socialLinks.GITHUB_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>GitHub</span>
              <ExternalLinkIcon className="text-muted-foreground" />
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
}
