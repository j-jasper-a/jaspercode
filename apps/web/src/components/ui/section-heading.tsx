type SectionHeadingProps = {
  title: string;
  description: string;
};

export function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <p className="text-6xl">{title}</p>
      <p className="text-2xl text-muted-foreground">{description}</p>
    </div>
  );
}
