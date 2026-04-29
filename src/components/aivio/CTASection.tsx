import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="relative py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto max-w-5xl overflow-hidden rounded-[32px] border border-border bg-gradient-surface p-12 text-center md:p-20"
        >
          <div className="absolute inset-0 bg-grid opacity-[0.08]" />
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/30 blur-3xl" />

          <div className="relative">
            <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
              <span className="text-gradient">Операционная система</span>
              <br />
              <span className="text-gradient-primary">для вашего бизнеса</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
              14 дней бесплатно. Без карты. Настройка под ключ за 1 день.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                size="lg"
                className="group h-12 rounded-full bg-primary px-8 text-base font-medium text-primary-foreground shadow-elevated hover:bg-primary/90"
              >
                Начать управлять бизнесом через Aivio
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 rounded-full border-border bg-surface/60 px-8 text-base backdrop-blur"
              >
                Посмотреть систему в действии
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
              <span>✓ Бесплатно 14 дней</span>
              <span>✓ Поддержка на русском</span>
              <span>✓ Данные в России</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};