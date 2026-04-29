import { motion } from "framer-motion";
import { ArrowUpRight, Search, Bell, Inbox, Filter, Plus, MessageCircle } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const kanban = [
  {
    title: "Новые лиды",
    color: "bg-primary",
    items: [
      { name: "ООО «Восток»", value: "₽ 240 000", tag: "Telegram" },
      { name: "Алексей К.", value: "₽ 85 000", tag: "WhatsApp" },
    ],
  },
  {
    title: "В работе",
    color: "bg-yellow-400",
    items: [
      { name: "Studio Nord", value: "₽ 1.2M", tag: "Instagram" },
      { name: "Мария Л.", value: "₽ 320 000", tag: "Telegram" },
      { name: "ИП Соколов", value: "₽ 95 000", tag: "Email" },
    ],
  },
  {
    title: "Закрыто",
    color: "bg-emerald-400",
    items: [
      { name: "Atlas Group", value: "₽ 2.4M", tag: "Telegram" },
      { name: "Игорь В.", value: "₽ 410 000", tag: "WhatsApp" },
    ],
  },
];

const inbox = [
  { name: "Анна — Telegram", msg: "Здравствуйте, интересует тариф Pro", time: "2 мин", unread: true },
  { name: "Sergey — WhatsApp", msg: "Можно счёт на оплату?", time: "12 мин", unread: true },
  { name: "Studio Nord — Instagram", msg: "AI-ответ отправлен ✓", time: "34 мин" },
  { name: "Алексей — Telegram", msg: "Спасибо, всё получил!", time: "1 ч" },
];

export const ProductDemo = () => {
  return (
    <section className="relative py-28">
      <div className="container">
        <SectionHeader
          eyebrow="Демонстрация"
          title="Вы видите весь бизнес в одном окне"
          description="Дашборд, CRM, входящие сообщения и финансы — без переключений между вкладками."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-16 max-w-6xl"
        >
          {/* glow */}
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
                app.aivio.ai / dashboard
              </div>
              <Bell className="h-4 w-4 text-muted-foreground" />
            </div>

            {/* dashboard top stats */}
            <div className="grid gap-px bg-border p-px md:grid-cols-4">
              {[
                { label: "Выручка / мес", value: "₽ 4.82M", trend: "+18%" },
                { label: "Активные сделки", value: "126", trend: "+12" },
                { label: "Конверсия", value: "34.6%", trend: "+4.2%" },
                { label: "AI обработал", value: "1 248", trend: "сообщений" },
              ].map((s) => (
                <div key={s.label} className="bg-surface/80 p-5">
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                  <div className="mt-2 flex items-baseline justify-between">
                    <div className="font-display text-2xl font-bold">{s.value}</div>
                    <div className="flex items-center gap-1 text-xs text-emerald-400">
                      <ArrowUpRight className="h-3 w-3" />
                      {s.trend}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* main grid: kanban + inbox */}
            <div className="grid gap-px bg-border lg:grid-cols-3">
              {/* kanban */}
              <div className="bg-surface/80 p-5 lg:col-span-2">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <h3 className="font-display text-sm font-semibold">CRM — Воронка продаж</h3>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Filter className="h-3 w-3" /> Фильтр
                    <Plus className="h-3 w-3" /> Сделка
                  </div>
                </div>
                <div className="grid gap-3 md:grid-cols-3">
                  {kanban.map((col) => (
                    <div key={col.title} className="rounded-xl border border-border bg-background/60 p-3">
                      <div className="mb-3 flex items-center gap-2">
                        <span className={`h-1.5 w-1.5 rounded-full ${col.color}`} />
                        <span className="text-xs font-medium text-muted-foreground">{col.title}</span>
                        <span className="ml-auto text-xs text-muted-foreground">{col.items.length}</span>
                      </div>
                      <div className="space-y-2">
                        {col.items.map((it) => (
                          <div key={it.name} className="rounded-lg border border-border bg-surface p-2.5">
                            <div className="text-xs font-medium">{it.name}</div>
                            <div className="mt-1 flex items-center justify-between">
                              <span className="text-[11px] text-primary">{it.value}</span>
                              <span className="rounded-full bg-background px-1.5 py-0.5 text-[10px] text-muted-foreground">
                                {it.tag}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* inbox */}
              <div className="bg-surface/80 p-5">
                <div className="mb-4 flex items-center gap-2">
                  <Inbox className="h-3.5 w-3.5 text-primary" />
                  <h3 className="font-display text-sm font-semibold">Входящие</h3>
                  <span className="ml-auto rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-medium text-primary">
                    2 новых
                  </span>
                </div>
                <div className="space-y-2">
                  {inbox.map((m) => (
                    <div
                      key={m.name}
                      className="rounded-lg border border-border bg-background/60 p-3"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <MessageCircle className="h-3 w-3 text-primary" />
                          <span className="text-xs font-medium">{m.name}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          {m.unread && <span className="h-1.5 w-1.5 rounded-full bg-primary" />}
                          <span className="text-[10px] text-muted-foreground">{m.time}</span>
                        </div>
                      </div>
                      <div className="mt-1.5 truncate text-[11px] text-muted-foreground">{m.msg}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};