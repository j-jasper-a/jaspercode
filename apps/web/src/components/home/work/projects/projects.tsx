import { featuredProjects } from "@/content/projects";
import { ProjectCard } from "./project-card";

export function Projects() {
  return (
    <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 lg:grid-cols-2">
      {featuredProjects.reverse().map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
