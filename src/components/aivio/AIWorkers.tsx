import { motion } from "framer-motion";
import { Bot, HeadphonesIcon, LineChart, Wallet, Briefcase } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const workers = [
  {
    Icon: Bot,
    name: "AI-квалификатор",
    desc: "Забирает первичную квалификацию входящих заявок и поднимает конверсию ещё до первого звонка менеджера.",
    result: "Меньше потерь на первом касании и выше доля качественных лидов в работе.",
    metrics: [
      { k: "Конверсия лидов", v: "+42%" },
      { k: "Скорость ответа", v: "< 5 сек" },
    ],
  },
  {
    Icon: HeadphonesIcon,
    name: "AI-саппорт",
    desc: "Берёт на себя типовые обращения, возвращая команде часы работы и удерживая единый стандарт ответа.",
    result: "Сервис остаётся быстрым даже в пиковую нагрузку без расширения штата.",
    metrics: [
      { k: "Без участия", v: "87%" },
      { k: "Экономия ФОТ", v: "−2.4M ₽" },
    ],
  },
  {
    Icon: LineChart,
    name: "AI-аналитик",
    desc: "Сводит в одну картину воронку, каналы и операционные узкие места, а не просто рисует отчёты.",
    result: "Руководитель быстрее находит точки роста и принимает решения без ручной аналитики.",
    metrics: [
      { k: "Инсайтов / нед", v: "12" },
      { k: "Рост маржи", v: "+18%" },
    ],
  },
  {
    Icon: Wallet,
    name: "AI-финансист",
    desc: "Следит за кассовыми разрывами, выручкой и обязательствами, предупреждая о рисках заранее.",
    result: "Финансовые решения принимаются до кризиса, а не после него.",
    metrics: [
      { k: "Точность прогноза", v: "94%" },
      { k: "Раннее предупр.", v: "30 дн" },
    ],
  },
  {
    Icon: Briefcase,
    name: "AI-ассистент руководителя",
    desc: "Собирает картину по бизнесу, контролирует выполнение и подсказывает, где нужна реакция руководителя.",
    result: "Меньше ручного контроля, больше времени на стратегию и масштабирование.",
    metrics: [
      { k: "Часов в неделю", v: "−14" },
      { k: "Решений / день", v: "20+" },
    ],
  },
];

export const AIWorkers = () => {
  return (
    <section id="ai" className="relative py-28">
      <div className="container">
        <SectionHeader
          eyebrow="AI-сотрудники"
          title="AI-сотрудники, которые дают бизнес-результат"
          description="Каждый AI-модуль в Aivio отвечает не за функцию, а за понятный результат: скорость, выручку, контроль и предсказуемость."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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
              <div className="mt-4 rounded-2xl border border-border bg-background/40 p-4 text-sm leading-relaxed text-foreground">
                {w.result}
              </div>
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
