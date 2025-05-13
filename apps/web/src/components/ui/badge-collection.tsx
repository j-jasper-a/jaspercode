import { Badge } from "./badge";

type BadgeCollectionProps = {
  collection: string[];
};

export function BadgeCollection({ collection }: BadgeCollectionProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {collection.map((item) => (
        <Badge key={item}>{item}</Badge>
      ))}
    </div>
  );
}
