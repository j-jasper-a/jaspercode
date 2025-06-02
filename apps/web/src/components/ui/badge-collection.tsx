import { Badge } from "@/components/ui/badge";

type BadgeCollectionProps = {
  collection: string[];
};

export function BadgeCollection({ collection }: BadgeCollectionProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {collection.map((item) => (
        <Badge variant="secondary" key={item}>
          {item}
        </Badge>
      ))}
    </div>
  );
}
