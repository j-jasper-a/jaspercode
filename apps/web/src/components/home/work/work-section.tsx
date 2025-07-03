import { SectionHeading } from "@/components/ui/section-heading";
import { Projects } from "./projects/projects";

export function WorkSection() {
  return (
    <section id="work" className="pt-20">
      <SectionHeading title="Work" description="Prototypes and products" />
      <Projects />
    </section>
  );
}
