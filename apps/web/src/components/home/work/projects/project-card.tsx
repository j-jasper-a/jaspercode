import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/link-button";
import { Project } from "@/types";
import Image from "next/image";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card>
      <div className="flex h-full flex-col justify-between gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-size-tertiary text-color-foreground-secondary uppercase">
            E-commerce
          </p>
          <p>{project.title}</p>
          <p className="text-size-secondary text-color-foreground-secondary">
            {project.summary}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-2 gap-2">
            {project.images.map((src, index) => (
              <div
                key={index}
                className="aspect-video overflow-hidden rounded-xl bg-color-foreground-primary/50 transition-all duration-300 ease-in-out group-hover:bg-color-foreground-primary/75"
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
            <LinkButton
              href={project.repoUrl}
              variant="secondary"
              size="medium"
            >
              View code
            </LinkButton>
            <LinkButton href={project.demoUrl} variant="primary" size="medium">
              Live demo
            </LinkButton>
          </div>
        </div>
      </div>
    </Card>
  );
}
