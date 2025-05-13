import { ReactNode } from "react";

type HighlightProps = {
  children: ReactNode;
};

export function Highlight({ children }: HighlightProps) {
  return <span className="text-color-foreground-primary">{children}</span>;
}
