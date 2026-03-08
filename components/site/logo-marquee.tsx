import type { LucideIcon } from "lucide-react";

type Brand = {
  name: string;
  icon: LucideIcon;
};

type LogoMarqueeProps = {
  brands: Brand[];
};

export function LogoMarquee({ brands }: LogoMarqueeProps) {
  return (
    <div className="marquee-fade mt-20 w-[min(100%,76rem)] overflow-hidden py-3">
      <div className="marquee-track flex w-max items-center gap-10 px-12 md:px-16">
        {[...brands, ...brands].map((brand, index) => {
          const Icon = brand.icon;
          return (
            <div key={`${brand.name}-${index}`} className="flex items-center gap-3 whitespace-nowrap px-1 text-white/85">
              <Icon className="size-5" />
              <span className="text-xl font-semibold tracking-tight md:text-2xl">{brand.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
