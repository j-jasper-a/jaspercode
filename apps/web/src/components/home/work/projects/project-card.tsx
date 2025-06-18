import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Project } from "@/data/projects";
import { ExternalLinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  project: Project;
};

function getTypeName(type: string): string {
  switch (type) {
    case "ecommerce":
      return "E-commerce";
    case "saas":
      return "SaaS";
    case "marketing":
      return "Marketing";
    default:
      return "Project";
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card>
      <div className="group flex h-full flex-col justify-between gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-xs text-muted-foreground uppercase">
            {getTypeName(project.type)}
          </p>
          <p>{project.title}</p>
          <p className="text-sm text-muted-foreground">{project.summary}</p>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Badge variant="secondary" key={tech}>
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-2 gap-2">
            {project.images.map((src, index) => (
              <div
                key={index}
                className="aspect-video overflow-hidden rounded-md bg-foreground/50 transition-all duration-300 ease-in-out group-hover:bg-foreground/75"
              >
                <Image
                  src={src}
                  alt={project.title}
                  width={1000}
                  height={800}
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between gap-2">
            <Button asChild variant="secondary" size="sm">
              <Link
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>View code</span>
                <ExternalLinkIcon className="text-muted-foreground" />
              </Link>
            </Button>
            <Button asChild variant="default" size="sm">
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Live demo</span>
                <ExternalLinkIcon className="text-muted-foreground" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
