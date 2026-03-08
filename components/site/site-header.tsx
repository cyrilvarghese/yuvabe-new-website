import { Button } from "@/components/ui/button";

type NavItem = {
  label: string;
  href: string;
};

type SiteHeaderProps = {
  navItems: NavItem[];
};

export function SiteHeader({ navItems }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-transparent">
      <div className="mx-auto flex h-24 w-full max-w-[1440px] items-center gap-10 px-8 lg:px-12">
        <a href="#home" className="flex items-center gap-5">
          <div className="flex items-center gap-4">
            <div className="relative size-14 rounded-full bg-black shadow-[0_6px_18px_rgba(0,0,0,0.45)]">
              <svg
                viewBox="0 0 64 64"
                className="absolute inset-[12px] z-10 text-white"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path d="M15 16L27 28" stroke="currentColor" strokeWidth="6.6" strokeLinecap="round" />
                <path d="M28 47L44 23" stroke="currentColor" strokeWidth="6.6" strokeLinecap="round" />
                <path
                  d="M42 54H29C26.4 54 24.9 51.1 26.6 49L43.8 26.2"
                  stroke="currentColor"
                  strokeWidth="6.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M43.6 45L50 51.2" stroke="currentColor" strokeWidth="6.6" strokeLinecap="round" />
              </svg>
            </div>
            <div className="flex flex-col justify-center">
              <p className="font-title text-3xl leading-[0.95] text-white">Yuvabe</p>
              <p className="text-[0.62rem] uppercase tracking-[0.26em] text-white/70">Studios</p>
            </div>
          </div>
          <span className="h-12 w-px bg-white/55" />
        </a>
        <nav className="hidden items-center justify-start gap-11 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-lg font-medium leading-none text-white/80 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <Button asChild variant="nav" size="sm" className="ml-auto hidden md:inline-flex">
          <a href="#work">See Case Studies</a>
        </Button>
        <Button asChild variant="nav" size="sm" className="md:hidden">
          <a href="#work">Work</a>
        </Button>
      </div>
    </header>
  );
}
