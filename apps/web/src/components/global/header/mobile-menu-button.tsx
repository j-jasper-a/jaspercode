"use client";

import { useAppDispatch } from "@/store/hooks";
import { menuToggle } from "@/store/slices/menu-slice";
import { Menu as MobileMenuIcon } from "lucide-react";

export function MobileMenuButton() {
  const dispatch = useAppDispatch();

  return (
    <button onClick={() => dispatch(menuToggle())}>
      <MobileMenuIcon />
    </button>
  );
}
