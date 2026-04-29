import { motion } from "framer-motion";
import { MessageCircle, Users, DollarSign, Bot, Workflow, BarChart3 } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const pillars = [
  { Icon: MessageCircle, label: "Входящие" },
  { Icon: Users, label: "Клиенты" },
  { Icon: Bot, label: "AI-сотрудники" },
  { Icon: DollarSign, label: "Финансовый радар" },
  { Icon: Workflow, label: "Автоматизации" },
  { Icon: BarChart3, label: "Центр управления" },
];

export const Solution = () => {
  return (
    <section id="solution" className="relative py-28">
      <div className="container">
        <SectionHeader
          eyebrow="Решение"
          title="Aivio собирает весь бизнес в одну операционную систему"
          description="Клиенты, сообщения, задачи, воронка и финансы работают в одном спокойном интерфейсе, где AI не помогает точечно, а двигает процессы вперёд."
        />

        <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group flex items-center gap-4 rounded-2xl border border-border bg-surface/60 p-5 backdrop-blur transition-all hover:border-primary/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                <p.Icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-display text-base font-semibold">{p.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
