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
        <textarea
          id={name}
          placeholder=""
          rows={5}
          ref={ref}
          {...props}
          onInput={handleInput}
          className="peer resize-none overflow-hidden rounded-3xl bg-color-foreground-primary/15 px-6 pt-6 pb-2 transition-all duration-300 ease-in-out outline-none placeholder-shown:py-2 focus:bg-color-accent/20"
        />
        <label
          htmlFor={name}
          className="absolute top-0 left-0 translate-x-6 translate-y-2 text-size-tertiary text-color-foreground-secondary transition-all duration-300 ease-in-out peer-placeholder-shown:text-size-primary"
        >
          {label}
        </label>
      </div>
    );
  },
);
