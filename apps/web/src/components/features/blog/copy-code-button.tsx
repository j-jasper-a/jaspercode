"use client";

import { cn } from "@/lib/utils";
import { CopyIcon } from "lucide-react";
import { useState } from "react";

export function CopyCodeButton({ text }: { text: string }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={cn(
        "bg-accent group absolute right-3 top-3 flex cursor-pointer items-center rounded-md p-2 font-sans text-xs font-semibold opacity-50 transition-all duration-300 hover:opacity-100 active:opacity-100 lg:right-6 lg:top-6",
        isCopied ? "text-green-500" : "text-inherit",
      )}
    >
      <span className="mr-0 max-w-0 overflow-hidden whitespace-nowrap transition-all duration-300 group-hover:mr-2 group-hover:max-w-64">
        {isCopied ? "Copied" : "Copy to clipboard"}
      </span>
      <CopyIcon className="size-4" />
    </button>
  );
}
