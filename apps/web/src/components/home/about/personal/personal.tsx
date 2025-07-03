import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Highlight } from "./highlight";

export function Personal() {
  return (
    <Card>
      <div className="overflow-hidden rounded-2xl">
        <Image
          src="/assets/about/photo.webp"
          alt="Jihan Jasper Al Rashid"
          width={512}
          height={512}
          className="h-full w-full object-cover"
        />
      </div>
      <div>
        <p className="text-muted-foreground text-xl">
          Hey, there! I&apos;m a software engineer with more than{" "}
          <Highlight>4 years</Highlight> of <Highlight>full-stack</Highlight>{" "}
          industry experience. I specialize in crafting{" "}
          <Highlight>solid user interfaces</Highlight> and{" "}
          <Highlight>dependable APIs</Highlight>. If you like your products to
          stand out, stay fresh, and keep up with evolving trends, then{" "}
          <Highlight>I&apos;m your guy</Highlight>.
        </p>
      </div>
    </Card>
  );
}
