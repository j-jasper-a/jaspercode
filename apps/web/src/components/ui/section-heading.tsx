type SectionHeadingProps = {
  title: string;
  description: string;
};

export function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <div className="flex flex-col items-center gap-1 text-center leading-none tracking-tight">
      <p className="text-accent-foreground text-2xl font-black uppercase">
        {`${title}`}
      </p>
      <p className="text-muted-foreground opacity-50">{description}</p>
    </div>
  );
}
