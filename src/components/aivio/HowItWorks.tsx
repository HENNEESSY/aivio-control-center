import { motion } from "framer-motion";
import { MessageCircle, Sparkles, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const steps = [
  {
    n: "01",
    Icon: MessageCircle,
    title: "Клиент пишет вам",
    desc: "Сообщения из Telegram, WhatsApp и Instagram автоматически попадают в Aivio.",
  },
  {
    n: "02",
    Icon: Sparkles,
    title: "AI анализирует и действует",
    desc: "Aivio распознаёт намерение клиента, создаёт сделку и предлагает идеальный ответ.",
  },
  {
    n: "03",
    Icon: CheckCircle2,
    title: "Вы закрываете сделку",
    desc: "Быстрее, без хаоса и без потерянных клиентов. Просто результат.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how" className="relative py-28">
      <div className="container">
        <SectionHeader eyebrow="Как это работает" title="Три шага от хаоса к управляемой системе" />

        <div className="relative mt-20 grid gap-6 md:grid-cols-3">
          {/* connector line */}
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block" />
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-border bg-surface backdrop-blur">
                <div className="absolute inset-2 rounded-full bg-gradient-primary opacity-20 blur-xl" />
                <s.Icon className="relative h-9 w-9 text-primary" />
              </div>
              <div className="text-center">
                <div className="mb-2 font-mono text-sm text-primary">{s.n}</div>
                <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};