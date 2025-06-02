import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ComponentPropsWithRef, forwardRef } from "react";

type AppInputProps = ComponentPropsWithRef<"input"> & {
  label: string;
};

export const AppInput = forwardRef<HTMLInputElement, AppInputProps>(
  function AppInput({ label, ...props }, ref) {
    const { name } = props;
    return (
      <div className="relative flex flex-col gap-2">
        <Label htmlFor={name}>{label}</Label>
        <Input type="text" id={name} placeholder="" ref={ref} {...props} />
      </div>
    );
  },
);
