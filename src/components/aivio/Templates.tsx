import { motion } from "framer-motion";
import { BriefcaseBusiness, GraduationCap, Flower2, ShoppingBag, Sparkles, Store } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const templates = [
  {
    Icon: BriefcaseBusiness,
    title: "Услуги",
    desc: "Объединяет заявки, расчёты, выезды и оплату в один прозрачный поток.",
    metric: "Быстрый отклик на каждую заявку",
  },
  {
    Icon: Sparkles,
    title: "Консалтинг",
    desc: "Помогает держать в фокусе лиды, проекты, загрузку консультантов и платежи.",
    metric: "Контроль проектов и выручки в одном месте",
  },
  {
    Icon: Flower2,
    title: "Бьюти",
    desc: "Собирает переписки, записи, напоминания и продажи в спокойную систему для студии.",
    metric: "Меньше отмен и пропущенных клиентов",
  },
  {
    Icon: Store,
    title: "Ритейл",
    desc: "Показывает, как обращения, остатки и продажи влияют на ежедневную выручку.",
    metric: "Быстрее решения по каналам и ассортименту",
  },
  {
    Icon: GraduationCap,
    title: "Онлайн-образование",
    desc: "Ведёт путь ученика от первого сообщения до оплаты, онбординга и продления.",
    metric: "Лучше доходимость и повторные продажи",
  },
  {
    Icon: ShoppingBag,
    title: "Цветочный бизнес",
    desc: "Связывает мессенджеры, доставку, заказы и сезонную загрузку в одну операционку.",
    metric: "Меньше ручной координации в пиковые дни",
  },
];

export const Templates = () => {
  return (
    <section className="relative py-28">
      <div className="container">
        <SectionHeader
          eyebrow="Шаблоны"
          title="Шаблоны для отраслей, где нужен порядок в операционке"
          description="Aivio можно запустить не с пустого листа, а с отраслевой логики: готовых сценариев, ролей AI и бизнес-потоков."
        />

        <div className="mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {templates.map((template, index) => (
            <motion.div
              key={template.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group rounded-3xl border border-border bg-surface/60 p-7 backdrop-blur transition-all hover:border-primary/40 hover:shadow-elevated"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary shadow-glow">
                <template.Icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold">{template.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{template.desc}</p>
              <div className="mt-6 rounded-2xl border border-border bg-background/40 px-4 py-3 text-sm text-foreground">
                {template.metric}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
