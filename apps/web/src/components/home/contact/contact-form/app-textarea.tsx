import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ComponentPropsWithRef, forwardRef, useCallback } from "react";

type AppInputProps = ComponentPropsWithRef<"textarea"> & {
  label: string;
};

export const AppTextarea = forwardRef<HTMLTextAreaElement, AppInputProps>(
  function AppTextarea({ label, ...props }, ref) {
    const { name } = props;

    const handleInput = useCallback(
      (e: React.FormEvent<HTMLTextAreaElement>) => {
        const target = e.currentTarget;
        target.style.height = "auto";
        target.style.height = `${target.scrollHeight}px`;
        props.onInput?.(e);
      },
      [props],
    );

    return (
      <div className="relative flex flex-col gap-2">
        <Label htmlFor={name}>{label}</Label>
        <Textarea
          id={name}
          placeholder=""
          rows={5}
          ref={ref}
          {...props}
          onInput={handleInput}
        />
      </div>
    );
  },
);
