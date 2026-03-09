"use client";

import { useEffect, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ModalShellProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  children: ReactNode;
  className?: string;
};

export function ModalShell({ open, onOpenChange, title, children, className }: ModalShellProps) {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onOpenChange(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open, onOpenChange]);

  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.div
            aria-hidden
            className="fixed inset-0 z-40 bg-[#020611]/72 backdrop-blur-md"
            initial={reduceMotion ? undefined : { opacity: 0 }}
            animate={reduceMotion ? undefined : { opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={() => onOpenChange(false)}
          />

          <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 lg:p-8">
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={title}
              className={cn(
                "relative mx-auto w-full max-w-5xl overflow-hidden rounded-[1.75rem] border border-border/80 bg-[#071221]/96 shadow-[0_32px_120px_rgba(0,0,0,0.45)]",
                className,
              )}
              initial={reduceMotion ? undefined : { opacity: 0, y: 20, scale: 0.985 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: 12, scale: 0.99 }}
              transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-4 top-4 z-10 h-11 w-11 rounded-2xl border border-white/10 bg-white/6 p-0 text-white hover:bg-white/10"
                onClick={() => onOpenChange(false)}
              >
                <X className="size-4" />
                <span className="sr-only">Close case study details</span>
              </Button>
              {children}
            </motion.div>
          </div>
        </>
      ) : null}
    </AnimatePresence>
  );
}
