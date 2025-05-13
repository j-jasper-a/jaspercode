import Image from "next/image";

type CompanyLogoProps = {
  src: string;
  alt: string;
};

export function CompanyLogo({ src, alt }: CompanyLogoProps) {
  return (
    <div className="aspect-square w-8">
      <Image
        src={src}
        alt={alt}
        width={512}
        height={512}
        className="h-full w-full object-contain"
      />
    </div>
  );
}
