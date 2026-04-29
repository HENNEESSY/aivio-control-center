import { motion } from "framer-motion";
import { MessageSquareOff, Layers, BellOff, WalletMinimal } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const problems = [
  {
    Icon: MessageSquareOff,
    title: "Лиды теряются в мессенджерах",
    desc: "Telegram, WhatsApp, Instagram — переписки разбросаны, заявки забываются.",
  },
  {
    Icon: Layers,
    title: "Нет единой системы",
    desc: "CRM, таблицы, чаты, документы — каждый отдел работает в своём мире.",
  },
  {
    Icon: BellOff,
    title: "Менеджеры забывают отвечать",
    desc: "Без напоминаний и автоматизации клиенты уходят к конкурентам.",
  },
  {
    Icon: WalletMinimal,
    title: "Финансы не под контролем",
    desc: "Вы узнаёте о кассовом разрыве, когда уже поздно что-то менять.",
  },
];

export const Problem = () => {
  return (
    <section id="problem" className="relative py-28">
      <div className="container">
        <SectionHeader
          eyebrow="Проблема"
          title="Почему бизнес теряет деньги каждый день"
          description="Хаос в коммуникациях стоит компаниям до 30% выручки. Каждое потерянное сообщение — это потерянная сделка."
        />

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface/60 p-6 backdrop-blur transition-all hover:border-primary/40 hover:bg-surface"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/5 blur-2xl transition-opacity group-hover:opacity-100 opacity-0" />
              <div className="relative flex items-start gap-4">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl border border-border bg-background">
                  <p.Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};