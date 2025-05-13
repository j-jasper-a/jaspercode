import { ProjectCard } from "./project-card";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
      {projects.reverse().map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
