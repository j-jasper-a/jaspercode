import { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
};

export function Badge({ children }: BadgeProps) {
  return (
    <p className="w-fit rounded-xl bg-color-accent/15 px-3 py-1.5 text-size-tertiary text-color-accent">
      {children}
    </p>
  );
}
