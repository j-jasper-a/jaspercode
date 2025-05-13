"use client";

import animationData from "@/assets/animation/robot.json";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export function HeroAnimation() {
  return (
    <div className="mx-auto w-full max-w-[512px] overflow-hidden py-8">
      <Lottie
        animationData={animationData}
        loop={true}
        className="h-auto w-full scale-125 object-contain"
      />
    </div>
  );
}
