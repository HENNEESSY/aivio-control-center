import { motion } from "framer-motion";
import { MessageCircle, Sparkles, Users, ListChecks, Wallet, ArrowRight, Search, Bell } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const flow = [
  {
    Icon: MessageCircle,
    label: "Сообщение",
    sub: "Telegram • WhatsApp",
    detail: "«Здравствуйте, интересует Pro»",
  },
  {
    Icon: Sparkles,
    label: "AI Core",
    sub: "Анализ + намерение",
    detail: "Намерение: покупка • Бюджет: ₽ 240k",
  },
  {
    Icon: Users,
    label: "CRM",
    sub: "Лид → Сделка",
    detail: "Воронка: «В работе»",
  },
  {
    Icon: ListChecks,
    label: "Задачи",
    sub: "Команда",
    detail: "Менеджер: позвонить за 15 мин",
  },
  {
    Icon: Wallet,
    label: "Финансы",
    sub: "Прогноз обновлён",
    detail: "+₽ 240 000 к выручке мес.",
  },
];

export const ProductDemo = () => {
  return (
    <section className="relative py-28">
      <div className="container">
        <SectionHeader
          eyebrow="Как это работает внутри"
          title="Один поток: от сообщения до денег"
          description="Aivio проводит каждое обращение через всю систему — без участия менеджера и без потерь."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-16 max-w-6xl"
        >
          <div className="absolute inset-x-10 -top-10 h-40 rounded-full bg-primary/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-surface shadow-elevated">
            {/* window chrome */}
            <div className="flex items-center justify-between border-b border-border bg-surface/80 px-5 py-3">
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
              </div>
              <div className="flex items-center gap-1.5 rounded-md border border-border bg-background/70 px-3 py-1 text-xs text-muted-foreground">
                <Search className="h-3 w-3" />
                app.aivio.ai / flow
              </div>
              <Bell className="h-4 w-4 text-muted-foreground" />
            </div>

            {/* Flow */}
            <div className="p-6 md:p-10">
              <div className="mb-8 flex items-center justify-between">
                <h3 className="font-display text-sm font-semibold">Поток обработки клиента</h3>
                <span className="flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-[11px] font-medium text-primary">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                  </span>
                  Live • 1 248 операций сегодня
                </span>
              </div>

              {/* desktop horizontal flow */}
              <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-stretch lg:gap-3">
                {flow.map((step, i) => (
                  <FlowNode key={step.label} step={step} index={i} arrow={i < flow.length - 1} />
                ))}
              </div>

              {/* mobile vertical flow */}
              <div className="space-y-3 lg:hidden">
                {flow.map((step, i) => (
                  <motion.div
                    key={step.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="rounded-2xl border border-border bg-surface/80 p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                        <step.Icon className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="font-display text-sm font-semibold">{step.label}</div>
                        <div className="text-[11px] text-muted-foreground">{step.sub}</div>
                      </div>
                    </div>
                    <div className="mt-3 rounded-lg border border-border bg-background/60 p-2.5 text-[11px] text-muted-foreground">
                      {step.detail}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* outcome bar */}
              <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
                {[
                  { label: "Время реакции", value: "< 5 сек" },
                  { label: "Действий менеджера", value: "0" },
                  { label: "Точность анализа", value: "96%" },
                  { label: "Прогноз обновлён", value: "Авто" },
                ].map((s) => (
                  <div key={s.label} className="bg-surface/80 p-5">
                    <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{s.label}</div>
                    <div className="mt-1.5 font-display text-xl font-bold text-gradient">{s.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface NodeProps {
  step: typeof import("./ProductDemo");
  index: number;
  arrow: boolean;
}

const FlowNode = ({ step, index, arrow }: { step: { Icon: any; label: string; sub: string; detail: string }; index: number; arrow: boolean }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
        className="group relative flex h-full flex-col rounded-2xl border border-border bg-surface/80 p-4 transition-all hover:border-primary/40 hover:shadow-elevated"
      >
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
            <step.Icon className="h-4 w-4 text-primary-foreground" />
          </div>
          <div>
            <div className="font-display text-sm font-semibold">{step.label}</div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{step.sub}</div>
          </div>
        </div>
        <div className="mt-3 rounded-lg border border-border bg-background/60 p-2.5 text-[11px] leading-relaxed text-muted-foreground">
          {step.detail}
        </div>
      </motion.div>
      {arrow && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.12 + 0.2 }}
          className="flex items-center justify-center"
        >
          <ArrowRight className="h-4 w-4 text-primary/70" />
        </motion.div>
      )}
    </>
  );
};
