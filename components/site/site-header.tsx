"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useAnimationControls, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type NavItem = {
  label: string;
  href: string;
};

type SiteHeaderProps = {
  navItems: NavItem[];
};

export function SiteHeader({ navItems }: SiteHeaderProps) {
  const controls = useAnimationControls();
  const reduceMotion = useReducedMotion();
  const prevScrollRef = useRef(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (reduceMotion) {
      controls.set({ opacity: 1, y: 0 });
      return;
    }

    const playReveal = () => {
      controls.set({ opacity: 0, y: -24 });
      void controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
      });
    };

    const onScroll = () => {
      const currentY = window.scrollY;
      if (prevScrollRef.current > 120 && currentY <= 120) {
        playReveal();
      }
      prevScrollRef.current = currentY;
    };

    prevScrollRef.current = window.scrollY;
    playReveal();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [controls, reduceMotion]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <motion.header
      className="relative z-50 bg-transparent"
      initial={reduceMotion ? false : { opacity: 0, y: -24 }}
      animate={controls}
    >
      <div className="mx-auto flex h-20 w-full max-w-[1440px] items-center gap-3 px-4 sm:h-24 sm:gap-6 sm:px-6 lg:gap-10 lg:px-12">
        <a href="#home" className="flex items-center gap-5">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="relative size-11 overflow-hidden rounded-full shadow-[0_6px_18px_rgba(0,0,0,0.45)] sm:size-14">
              <Image src="/assets/logo.png" alt="Yuvabe logo" fill className="object-cover" priority />
            </div>
            <div className="flex flex-col justify-center">
              <p className="font-title text-[1.95rem] leading-[0.95] text-white sm:text-3xl">Yuvabe</p>
            </div>
          </div>
          <span className="hidden h-12 w-px bg-white/55 md:block" />
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
          <a href="#process">Start Your Build</a>
        </Button>
        <Button
          type="button"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          variant="nav"
          size="sm"
          className="ml-auto md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
        </Button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="absolute inset-x-0 top-full z-[60] mx-auto w-full max-w-[1440px] px-4 pt-2 sm:px-6 md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <div className="rounded-xl border border-white/14 bg-[#0b1628]/88 p-3 backdrop-blur">
              <nav className="grid gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="rounded-lg px-3 py-2 text-base font-medium text-white/90 transition-colors hover:bg-white/8 hover:text-white"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <Button asChild variant="secondary" size="sm" className="mt-3 w-full">
                <a href="#process" onClick={() => setMenuOpen(false)}>
                  Start Your Build
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}


