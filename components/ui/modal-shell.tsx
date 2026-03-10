"use client";

import { type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

type ModalShellProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  children: ReactNode;
  className?: string;
};

export function ModalShell({
  open,
  onOpenChange,
  title,
  children,
  className,
}: ModalShellProps) {
  const reduceMotion = useReducedMotion();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal forceMount>
        <AnimatePresence>
          {open ? (
            <>
              <DialogOverlay asChild forceMount>
                <motion.div
                  aria-hidden
                  className="fixed inset-0 z-40 bg-[#020611]/72 backdrop-blur-md"
                  initial={reduceMotion ? undefined : { opacity: 0 }}
                  animate={reduceMotion ? undefined : { opacity: 1 }}
                  exit={reduceMotion ? undefined : { opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                />
              </DialogOverlay>

              <DialogContent
                forceMount
                className="left-0 top-0 z-50 h-full max-h-none w-full max-w-none translate-x-0 translate-y-0 overflow-y-auto border-0 bg-transparent p-4 shadow-none sm:p-6 lg:p-8"
              >
                <div className="flex min-h-full items-start justify-center">
                  <motion.div
                    className={cn(
                      "relative w-full max-w-[88rem] overflow-hidden rounded-[1.75rem] border border-border/80 bg-[#071221]/96 shadow-[0_32px_120px_rgba(0,0,0,0.45)]",
                      className,
                    )}
                    initial={reduceMotion ? undefined : { opacity: 0, y: 20, scale: 0.985 }}
                    animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
                    exit={reduceMotion ? undefined : { opacity: 0, y: 12, scale: 0.99 }}
                    transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <DialogTitle className="sr-only">{title}</DialogTitle>
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
                    <DialogClose asChild>
                      <Button
                        type="button"
                        variant="control"
                        size="icon"
                        className="absolute right-4 top-4 z-20"
                      >
                        <X className="size-4" />
                        <span className="sr-only">Close case study details</span>
                      </Button>
                    </DialogClose>

                    <div className="relative z-10 px-1.5 pb-1.5 sm:px-2 sm:pb-2">
                      {children}
                    </div>
                  </motion.div>
                </div>
              </DialogContent>
            </>
          ) : null}
        </AnimatePresence>
      </DialogPortal>
    </Dialog>
  );
}

