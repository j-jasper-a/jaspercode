import { Jobs } from "./jobs/jobs";
import { Personal } from "./personal/personal";
import { Skills } from "./skills/skills";
import { SectionHeading } from "@/components/ui/section-heading";

export function AboutSection() {
  return (
    <section id="about" className="pt-20">
      <SectionHeading title="About" description="Get to know me" />
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="order-last md:order-first">
          <Personal />
          <Skills />
        </div>
        <Jobs />
      </div>
    </section>
  );
}
