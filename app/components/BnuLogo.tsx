import Image from "next/image";

type BnuLogoProps = {
  className?: string;
  size?: "sm" | "md";
};

export default function BnuLogo({ className = "", size = "md" }: BnuLogoProps) {
  const dimensions = size === "sm" ? 32 : 44;

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <Image
        src="/bnu_logo-removebg-preview.png"
        alt="BNU"
        width={dimensions}
        height={dimensions}
        className="h-auto w-auto object-contain"
        priority
      />
    </div>
  );
}
