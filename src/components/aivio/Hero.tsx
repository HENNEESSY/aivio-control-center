import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroOrb } from "./HeroOrb";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-36 pb-24">
      {/* background layers */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-grid opacity-[0.15] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      <div className="container relative">
        <motion.div {...fade(0)} className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-border bg-surface/60 px-3.5 py-1.5 text-xs text-muted-foreground backdrop-blur">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
          Новое поколение AI-операционных систем
        </motion.div>

        <motion.h1
          {...fade(0.1)}
          className="mx-auto max-w-4xl text-balance text-center font-display text-5xl font-bold tracking-tight md:text-7xl"
        >
          <span className="text-gradient">Бизнес без хаоса.</span>
          <br />
          <span className="text-gradient-primary">Управляется интеллектом.</span>
        </motion.h1>

        <motion.p
          {...fade(0.2)}
          className="mx-auto mt-6 max-w-2xl text-balance text-center text-lg text-muted-foreground md:text-xl"
        >
          CRM, мессенджеры, AI-сотрудники и финансы — в одной системе, которая
          реально работает.
        </motion.p>

        <motion.div {...fade(0.3)} className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            size="lg"
            className="group h-12 rounded-full bg-primary px-6 text-base font-medium text-primary-foreground shadow-elevated hover:bg-primary/90"
          >
            Начать использовать Aivio
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-12 rounded-full border-border bg-surface/60 px-6 text-base font-medium backdrop-blur hover:bg-surface"
          >
            <Play className="mr-1 h-4 w-4" />
            Посмотреть как это работает
          </Button>
        </motion.div>

        <motion.div {...fade(0.5)} className="mt-16">
          <HeroOrb />
        </motion.div>
      </div>
    </section>
  );
};