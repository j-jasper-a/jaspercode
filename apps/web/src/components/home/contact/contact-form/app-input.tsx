import { ComponentPropsWithRef, forwardRef } from "react";

type AppInputProps = ComponentPropsWithRef<"input"> & {
  label: string;
};

export const AppInput = forwardRef<HTMLInputElement, AppInputProps>(
  function AppInput({ label, ...props }, ref) {
    const { name } = props;
    return (
      <div className="relative flex flex-col gap-2">
        <input
          type="text"
          id={name}
          placeholder=""
          ref={ref}
          {...props}
          className="peer rounded-full bg-color-foreground-primary/15 px-6 pt-6 pb-2 transition-all duration-300 ease-in-out outline-none placeholder-shown:py-2 focus:bg-color-accent/20"
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
