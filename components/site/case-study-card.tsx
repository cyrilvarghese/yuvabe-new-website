"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Maximize2, type LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type CaseStudyCardProps = {
  title: string;
  summary: string;
  stack: string;
  icon: LucideIcon;
  className?: string;
};

export function CaseStudyCard({ title, summary, stack, icon: Icon, className }: CaseStudyCardProps) {
  const reduceMotion = useReducedMotion();
  const [mouse, setMouse] = useState({ x: 50, y: 50, active: false });

  const onMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (reduceMotion) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const px = ((event.clientX - rect.left) / rect.width) * 100;
    const py = ((event.clientY - rect.top) / rect.height) * 100;

    setMouse({
      x: px,
      y: py,
      active: true,
    });
  };

  const onLeave = () => {
    setMouse({ x: 50, y: 50, active: false });
  };

  return (
    <motion.article
      className={`cursor-pointer ${className ?? ""}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div className="relative rounded-xl">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-20 rounded-xl p-[1px]"
          style={{
            opacity: reduceMotion ? 0 : mouse.active ? 1 : 0,
            transition: "opacity 220ms ease-out",
            background: `radial-gradient(220px circle at ${mouse.x}% ${mouse.y}%, rgba(166,198,255,0.85), rgba(122,99,255,0.44) 36%, rgba(122,99,255,0) 66%)`,
            WebkitMask:
              "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />

        <motion.div
          animate={reduceMotion ? { scale: 1 } : { scale: mouse.active ? 1.012 : 1 }}
          transition={{ type: "tween", duration: 0.76, ease: [0.22, 1, 0.36, 1] }}
        >
          <Card className="flex h-full min-h-[31rem] flex-col overflow-hidden lg:min-h-[34rem]">
            <div
              className={`pointer-events-none absolute right-5 top-5 z-30 rounded-md border border-white/20 bg-white/8 p-2 text-white/85 transition-all duration-200 ${mouse.active ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"
                }`}
            >
              <Maximize2 className="size-4" strokeWidth={1.9} />
            </div>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{summary}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col justify-between gap-8">
              <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{stack}</p>
              <div className="relative flex min-h-48 items-center justify-center overflow-hidden rounded-xl border border-border/70 bg-gradient-to-br from-[#121f3a] via-[#16284b] to-[#0e1830]">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(132,169,238,0.28),rgba(132,169,238,0)_52%)]" />
                <Icon className="relative z-10 size-28 text-white/82 lg:size-36" strokeWidth={1.45} />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.article>
  );
}
