"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Maximize2, type LucideIcon } from "lucide-react";
import { CursorDotField } from "@/components/site/cursor-dot-field";
import { ModalShell } from "@/components/ui/modal-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type CaseStudyCardProps = {
  title: string;
  summary: string;
  stack: string;
  icon: LucideIcon;
  visual?: "default" | "dots";
  className?: string;
};

const detailPoints = [
  "Placeholder checklist item for strategic outcome or product value",
  "Another slot for a proof point, business outcome, or user-facing benefit",
  "Reserved space for implementation detail once real content is ready",
  "Flexible layout block for conversion, launch, or workflow impact",
];

const supportingPoints = [
  {
    title: "Point one",
    description: "Use this area for a concise supporting statement tied to the featured visuals or the customer outcome.",
  },
  {
    title: "Point two",
    description: "This column can hold a short process note, insight, or metric once the actual case study is written.",
  },
  {
    title: "Point three",
    description: "Keep this block brief and useful so the modal reads like an editorial overview instead of a grid of cards.",
  },
];

export function CaseStudyCard({ title, summary, stack, icon: Icon, visual = "default", className }: CaseStudyCardProps) {
  const reduceMotion = useReducedMotion();
  const [mouse, setMouse] = useState({ x: 50, y: 50, active: false });
  const [open, setOpen] = useState(false);

  const onMove = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (reduceMotion) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const px = ((event.clientX - rect.left) / rect.width) * 100;
    const py = ((event.clientY - rect.top) / rect.height) * 100;

    setMouse({ x: px, y: py, active: true });
  };

  const onLeave = () => {
    setMouse({ x: 50, y: 50, active: false });
  };

  const onEnter = () => {
    if (reduceMotion) {
      return;
    }

    setMouse((prev) => ({ ...prev, active: true }));
  };

  return (
    <>
      <motion.button
        type="button"
        className={`block w-full cursor-pointer text-left ${className ?? ""}`}
        onMouseEnter={onEnter}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        onFocus={onEnter}
        onBlur={onLeave}
        onClick={() => setOpen(true)}
      >
        <div className="relative rounded-xl">
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-20 rounded-xl p-[1px]"
            style={{
              opacity: reduceMotion ? 0 : mouse.active ? 1 : 0,
              transition: "opacity 220ms ease-out",
              background: `radial-gradient(220px circle at ${mouse.x}% ${mouse.y}%, rgba(166,198,255,0.85), rgba(122,99,255,0.44) 36%, rgba(122,99,255,0) 66%)`,
              WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          />

          <motion.div
            animate={reduceMotion ? { scale: 1 } : { scale: mouse.active ? 1.012 : 1 }}
            transition={{ type: "tween", duration: 0.76, ease: [0.22, 1, 0.36, 1] }}
          >
            <Card className="relative flex h-full min-h-[31rem] flex-col overflow-hidden lg:min-h-[34rem]">
              {visual === "dots" && (
                <CursorDotField
                  x={mouse.x}
                  y={mouse.y}
                  active={mouse.active}
                  className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
                />
              )}
              <div
                className={`pointer-events-none absolute right-5 top-5 z-30 rounded-md border p-2 transition-all duration-200 ${mouse.active ? "border-white/70 bg-white/70 text-[#0b1320]" : "border-white/20 bg-white/8 text-white/85"}`}
              >
                <Maximize2 className="size-4" strokeWidth={1.9} />
              </div>
              <CardHeader className="relative z-10">
                <CardTitle>{title}</CardTitle>
                <CardDescription>{summary}</CardDescription>
              </CardHeader>
              <CardContent className="relative z-10 flex flex-1 flex-col justify-between gap-8">
                <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{stack}</p>
                <div className="relative flex min-h-48 items-center justify-center overflow-hidden rounded-xl border border-border/70 bg-gradient-to-br from-[#121f3a] via-[#16284b] to-[#0e1830]">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(132,169,238,0.28),rgba(132,169,238,0)_52%)]" />
                  <Icon className="relative z-10 size-28 text-white/82 lg:size-36" strokeWidth={1.45} />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.button>

      <ModalShell open={open} onOpenChange={setOpen} title={title}>
        <div className="px-5 pb-8 pt-16 sm:px-8 lg:px-10 lg:pb-10">
          <div className="border-b border-border/70 pb-8">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.8fr)] lg:items-start">
              <div>
                <h2 className="max-w-2xl font-title text-[clamp(2rem,4vw,3.4rem)] leading-[0.95] text-white">{title}</h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-[#b3c0d7] sm:text-lg">{summary}</p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button asChild variant="primary" size="lg">
                    <a href="#process">
                      Explore concept
                      <ArrowUpRight className="size-4" />
                    </a>
                  </Button>
                  <Button asChild variant="secondary" size="lg">
                    <a href="#work">View all work</a>
                  </Button>
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Checklist</p>
                <ul className="mt-3 space-y-3 text-sm leading-6 text-[#d8e4fa] sm:text-[0.95rem]">
                  {detailPoints.map((point) => (
                    <li key={point} className="flex gap-3">
                      <CheckCircle2 className="mt-1 size-4 shrink-0 text-[#8cb8ff]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="grid gap-4 border-b border-border/70 py-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(17rem,0.8fr)]">
            <div className="min-h-[18rem] overflow-hidden rounded-[1.5rem] bg-[linear-gradient(145deg,rgba(34,52,97,0.96),rgba(96,111,171,0.86))] p-6 sm:min-h-[24rem]">
              <div className="relative flex h-full items-end justify-center rounded-[1.25rem] bg-[radial-gradient(circle_at_30%_75%,rgba(129,103,255,0.28),rgba(129,103,255,0)_34%),linear-gradient(160deg,rgba(17,28,52,0.22),rgba(17,28,52,0.02))]">
                <div className="absolute left-[16%] top-[16%] h-[62%] w-[40%] rounded-[1.45rem] bg-[#f7f9ff] shadow-[0_28px_80px_rgba(11,15,31,0.22)]" />
                <div className="absolute left-[49%] top-[38%] h-[22%] w-[26%] rounded-[1rem] bg-[#f7f9ff]/96 shadow-[0_18px_50px_rgba(11,15,31,0.18)]" />
                <div className="absolute left-[50%] top-[58%] h-[22%] w-[30%] rounded-[1rem] bg-[#f7f9ff]/96 shadow-[0_18px_50px_rgba(11,15,31,0.18)]" />
              </div>
            </div>

            <div className="min-h-[18rem] overflow-hidden rounded-[1.5rem] bg-[linear-gradient(145deg,rgba(41,45,60,0.94),rgba(189,159,80,0.5))] p-6 sm:min-h-[24rem]">
              <div className="flex h-full items-center justify-center rounded-[1.25rem] bg-[radial-gradient(circle_at_50%_80%,rgba(255,220,120,0.22),rgba(255,220,120,0)_34%),linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.08))]">
                <div className="grid w-full max-w-[18rem] gap-3 rounded-[1.1rem] bg-[#f7f9ff]/96 p-4 text-[#1d2940] shadow-[0_22px_60px_rgba(10,15,28,0.18)]">
                  <div className="h-3 w-24 rounded-full bg-[#c9d2e6]" />
                  <div className="h-10 rounded-md border border-[#d9e1f0]" />
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-8 rounded-md bg-[#eef2fb]" />
                    <div className="h-8 rounded-md bg-[#eef2fb]" />
                    <div className="h-8 rounded-md bg-[#eef2fb]" />
                  </div>
                  <div className="h-9 rounded-md bg-[#edf2fb]" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-5 pt-8 md:grid-cols-3">
            {supportingPoints.map((point, index) => (
              <div key={point.title} className="border-t border-white/10 pt-4">
                <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">0{index + 1}</p>
                <p className="mt-3 text-lg font-semibold text-white">{point.title}</p>
                <p className="mt-3 max-w-sm text-sm leading-6 text-[#b3c0d7]">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </ModalShell>
    </>
  );
}

