import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const crmItems = [
  "хранит клиентов",
  "требует ручного ввода",
  "не понимает сообщения",
  "не видит финансы",
];

const aivioItems = [
  "анализирует входящие заявки",
  "создаёт сделки автоматически",
  "предлагает ответы",
  "запускает задачи",
  "показывает финансовые риски",
];

export const NotCRM = () => {
  return (
    <section id="not-crm" className="relative py-28">
      <div className="container">
        <SectionHeader
          eyebrow="Позиционирование"
          title="Это не CRM. Это центр управления бизнесом."
          description="Обычная CRM фиксирует базу клиентов и сделки постфактум. Aivio видит входящий поток, запускает действия и помогает управлять всей операционной системой бизнеса."
        />

        <div className="mx-auto mt-16 grid max-w-5xl gap-5 md:grid-cols-2">
          {/* Обычная CRM */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-3xl border border-border bg-surface/40 p-8 backdrop-blur"
          >
            <div className="mb-6 flex items-center justify-between">
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Обычная CRM
              </span>
              <span className="rounded-full border border-border px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                Прошлое
              </span>
            </div>
            <h3 className="font-display text-2xl font-semibold text-muted-foreground">
              База данных для клиентов
            </h3>
            <ul className="mt-6 space-y-3">
              {crmItems.map((it) => (
                <li key={it} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-border">
                    <X className="h-3 w-3" />
                  </span>
                  {it}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Aivio */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-surface p-8 shadow-elevated"
          >
            <div className="absolute -top-20 right-0 h-48 w-48 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-wider text-primary">
                  Aivio
                </span>
                <span className="rounded-full bg-primary/15 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-primary">
                  Операционная система
                </span>
              </div>
              <h3 className="font-display text-2xl font-semibold text-gradient">
                Управляет всем бизнесом
              </h3>
              <ul className="mt-6 space-y-3">
                {aivioItems.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-sm text-foreground">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-primary shadow-glow">
                      <Check className="h-3 w-3 text-primary-foreground" />
                    </span>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
