import { motion } from "framer-motion";
import { Bot, HeadphonesIcon, LineChart } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const workers = [
  {
    Icon: Bot,
    name: "AI-квалификатор",
    desc: "Обрабатывает входящие лиды, задаёт уточняющие вопросы и доводит клиента до сделки.",
    metrics: [
      { k: "Лидов в день", v: "500+" },
      { k: "Конверсия", v: "+42%" },
    ],
  },
  {
    Icon: HeadphonesIcon,
    name: "AI-саппорт",
    desc: "Отвечает клиентам 24/7 на основе вашей базы знаний. Передаёт сложные кейсы человеку.",
    metrics: [
      { k: "Время ответа", v: "< 3 сек" },
      { k: "Без участия", v: "87%" },
    ],
  },
  {
    Icon: LineChart,
    name: "AI-аналитик",
    desc: "Показывает узкие места в продажах и точки, где вы теряете деньги. Каждый день.",
    metrics: [
      { k: "Отчётов", v: "Авто" },
      { k: "Инсайтов / нед", v: "12" },
    ],
  },
];

export const AIWorkers = () => {
  return (
    <section id="ai" className="relative py-28">
      <div className="container">
        <SectionHeader
          eyebrow="AI-сотрудники"
          title="AI, который работает за вас"
          description="Не ассистент. Не чатбот. Полноценные сотрудники, встроенные прямо в ваш бизнес."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {workers.map((w, i) => (
            <motion.div
              key={w.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-surface/60 p-7 backdrop-blur transition-all hover:border-primary/40 hover:shadow-elevated"
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary shadow-glow">
                <w.Icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold">{w.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
              <div className="mt-6 grid grid-cols-2 gap-3 border-t border-border pt-5">
                {w.metrics.map((m) => (
                  <div key={m.k}>
                    <div className="font-display text-lg font-bold text-foreground">{m.v}</div>
                    <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{m.k}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};