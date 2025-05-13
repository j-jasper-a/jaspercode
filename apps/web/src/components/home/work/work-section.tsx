import { Projects } from "./projects/projects";
import { SectionHeading } from "@/components/ui/section-heading";

export function WorkSection() {
  return (
    <section id="work" className="pt-20">
      <SectionHeading title="Work" description="Prototypes and products" />
      <Projects />
    </section>
  );
}
