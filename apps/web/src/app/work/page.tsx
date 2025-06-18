import { ProjectCard } from "@/components/home/work/projects/project-card";
import { projects } from "@/data/projects";

export default function WorkPage() {
  return (
    <main className="mx-auto flex max-w-[var(--breakpoint-2xl)] flex-col p-4">
      <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
        {projects.reverse().map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
}
