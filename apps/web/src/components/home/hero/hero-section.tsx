import { Button } from "@/components/ui/button";
import { CodeSquare as CodeIcon, ArrowRight as GoIcon } from "lucide-react";
import Link from "next/link";
import { HeroAnimation } from "./hero-animation";

export function HeroSection() {
  return (
    <div className="flex min-h-[75vh] flex-col items-center justify-between gap-4 px-2">
      <div />
      <div className="flex flex-col items-center gap-4">
        <HeroAnimation />
        <h1 className="text-center text-6xl font-bold tracking-tighter lg:text-6xl">
          I write code for the future.
        </h1>
        <div className="text-center">
          <p className="text-accent-foreground text-2xl">
            Jihan Jasper Al Rashid
          </p>
          <p className="text-muted-foreground text-lg">
            <CodeIcon size={18} className="mb-1 mr-1 inline" />
            Software Engineer
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-2 lg:w-1/2 lg:flex-row">
        <Button asChild variant="default" size={"lg"}>
          <Link href="#contact">
            <span>Get in touch</span>
            <GoIcon className="text-muted-foreground" />
          </Link>
        </Button>
        <Button asChild variant="secondary" size={"lg"}>
          <Link href="#work">
            <span>See my work</span>
            <GoIcon className="text-muted-foreground" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
