"use client";

import { usePathname, useRouter } from "next/navigation";

export function BrandLogo() {
  const router = useRouter();
  const pathname = usePathname();

  function handleClick() {
    if (pathname !== "/") {
      router.push("/");
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <button
      onClick={handleClick}
      className="bg-foreground text-background hover:bg-accent-foreground flex h-full cursor-pointer rounded-sm px-2 py-1 transition-all duration-300 ease-in-out"
    >
      <svg
        className="h-full w-auto"
        width="132"
        height="100"
        viewBox="0 0 132 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.3429 35.8036L40.1821 51.6428L30.226 61.5989C29.5623 62.2626 29.2304 62.9565 29.2304 63.6806C29.2907 64.3444 29.7131 65.0684 30.4975 65.8529L31.4931 66.8485C32.2775 67.6329 33.0016 68.0553 33.6654 68.1156C34.3894 68.1156 35.0833 67.7837 35.7471 67.12L80.5494 22.3177L96.3886 38.1569L49.5046 85.0409C46.1255 88.4199 42.3845 90.1094 38.2814 90.1094C34.2386 90.1698 29.8036 87.7864 24.9764 82.9592L14.3868 72.3695C9.55962 67.5424 7.14602 63.0772 7.14602 58.9741C7.20636 54.9314 8.92605 51.2205 12.3051 47.8414L24.3429 35.8036Z"
          fill="currentColor"
        />
        <path
          d="M67.5057 75.3592L83.3449 59.52L93.301 69.4761C93.9647 70.1398 94.6586 70.4717 95.3827 70.4717C96.0464 70.4113 96.7705 69.989 97.5549 69.2045L98.5505 68.2089C99.3349 67.4245 99.7573 66.7004 99.8177 66.0367C99.8177 65.3126 99.4858 64.6187 98.822 63.955L54.0198 19.1527L69.859 3.3135L116.743 50.1975C120.122 53.5765 121.812 57.3176 121.812 61.4207C121.872 65.4635 119.488 69.8984 114.661 74.7256L104.072 85.3153C99.2444 90.1424 94.7793 92.556 90.6762 92.556C86.6334 92.4957 82.9225 90.776 79.5435 87.397L67.5057 75.3592Z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
}
