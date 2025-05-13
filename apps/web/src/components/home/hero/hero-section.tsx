import { HeroAnimation } from "./hero-animation";
import { LinkButton } from "@/components/ui/link-button";
import { CodeSquare as CodeIcon } from "lucide-react";

export function HeroSection() {
  return (
    <div className="flex h-[75vh] flex-col items-center justify-between gap-4">
      <div />
      <div className="flex flex-col items-center gap-4">
        <HeroAnimation />
        <h1 className="text-center text-6xl font-bold tracking-tighter md:text-6xl">
          I write code for the future.
        </h1>
        <div className="text-center">
          <p className="text-2xl text-color-accent">Jihan Jasper Al Rashid</p>
          <p className="text-lg text-color-foreground-secondary">
            <CodeIcon size={18} className="mr-1 mb-1 inline" />
            Software Engineer
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-2 md:w-1/2 md:flex-row">
        <LinkButton href="#contact" variant="primary" size="large">
          Get in touch
        </LinkButton>
        <LinkButton href="#work" variant="secondary" size="large">
          See my work
        </LinkButton>
      </div>
    </div>
  );
}
