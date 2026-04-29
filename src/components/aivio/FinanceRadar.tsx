import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, AlertTriangle, Wallet } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const points = [
  { Icon: Wallet, label: "Доходы и расходы", value: "Реальное время" },
  { Icon: TrendingUp, label: "Прибыль", value: "По проектам и каналам" },
  { Icon: AlertTriangle, label: "Прогноз кассовых разрывов", value: "За 30 дней до" },
];

export const FinanceRadar = () => {
  return (
    <section className="relative py-28">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Финансовый радар"
              title="Вы всегда знаете, что происходит с деньгами"
              description="Aivio отслеживает каждый рубль и предупреждает о рисках до того, как они станут проблемой."
            />
            <div className="mt-10 space-y-3">
              {points.map((p, i) => (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center gap-4 rounded-2xl border border-border bg-surface/60 p-4 backdrop-blur"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <p.Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">{p.label}</div>
                    <div className="text-xs text-muted-foreground">{p.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/15 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-surface p-6 shadow-elevated">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-muted-foreground">Прогноз на 30 дней</div>
                  <div className="font-display text-3xl font-bold text-gradient-primary">+ ₽ 2.4M</div>
                </div>
                <div className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs text-emerald-400">
                  <TrendingUp className="h-3 w-3" /> +24%
                </div>
              </div>

              {/* chart */}
              <div className="mt-8 flex h-44 items-end gap-2">
                {[40, 55, 48, 70, 62, 80, 75, 92, 85, 100, 95, 120].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
                    className="flex-1 rounded-t-md bg-gradient-to-t from-primary/40 to-primary"
                  />
                ))}
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3 border-t border-border pt-5 text-center">
                <div>
                  <div className="text-xs text-muted-foreground">Доход</div>
                  <div className="font-display font-bold text-emerald-400">₽ 5.8M</div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Расход</div>
                  <div className="font-display font-bold">₽ 3.4M</div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Риск</div>
                  <div className="flex items-center justify-center gap-1 font-display font-bold text-yellow-400">
                    <TrendingDown className="h-3.5 w-3.5" /> Низкий
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};