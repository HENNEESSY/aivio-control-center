import { motion } from "framer-motion";
import { MessageCircle, DollarSign, Users, Target, ListChecks, TrendingUp } from "lucide-react";

/**
 * Cinematic hero animation:
 * Scattered chaos particles → flow into central AI core → structured outputs flow outward.
 */
const inputs = [
  { Icon: MessageCircle, label: "Telegram", x: -260, y: -140 },
  { Icon: MessageCircle, label: "WhatsApp", x: 240, y: -180 },
  { Icon: Users, label: "Лид", x: -300, y: 60 },
  { Icon: DollarSign, label: "Платёж", x: 280, y: 80 },
  { Icon: MessageCircle, label: "Instagram", x: -180, y: 180 },
  { Icon: Users, label: "Контакт", x: 180, y: 200 },
];

const outputs = [
  { Icon: Target, label: "Сделка", x: -240, y: -60 },
  { Icon: ListChecks, label: "Задача", x: 240, y: -60 },
  { Icon: TrendingUp, label: "Прогноз", x: 0, y: 220 },
];

export const HeroOrb = () => {
  return (
    <div className="relative mx-auto h-[520px] w-full max-w-[720px]">
      {/* glow */}
      <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />

      {/* orbit rings */}
      {[160, 220, 280].map((r, i) => (
        <motion.div
          key={r}
          className="absolute left-1/2 top-1/2 rounded-full border border-border/60"
          style={{ width: r * 2, height: r * 2, marginLeft: -r, marginTop: -r }}
          animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
          transition={{ duration: 40 + i * 10, repeat: Infinity, ease: "linear" }}
        />
      ))}

      {/* incoming chaos particles */}
      {inputs.map((p, i) => (
        <motion.div
          key={`in-${i}`}
          className="absolute left-1/2 top-1/2 flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur"
          initial={{ x: p.x, y: p.y, opacity: 0, scale: 0.6 }}
          animate={{
            x: [p.x, p.x, 0],
            y: [p.y, p.y, 0],
            opacity: [0, 1, 0],
            scale: [0.6, 1, 0.4],
          }}
          transition={{
            duration: 4,
            delay: i * 0.35,
            repeat: Infinity,
            repeatDelay: 2,
            times: [0, 0.45, 1],
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p.Icon className="h-3.5 w-3.5 text-primary" />
          <span>{p.label}</span>
        </motion.div>
      ))}

      {/* central AI core */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-gradient-primary shadow-glow">
          <div className="absolute inset-1 rounded-full bg-background/40 backdrop-blur-xl" />
          <div className="absolute inset-3 rounded-full border border-primary/40" />
          <span className="relative font-display text-2xl font-bold tracking-tight text-primary-foreground">
            AI
          </span>
          {/* pulsing ring */}
          <motion.div
            className="absolute inset-0 rounded-full border border-primary"
            animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
          />
        </div>
      </motion.div>

      {/* outgoing structured outputs */}
      {outputs.map((p, i) => (
        <motion.div
          key={`out-${i}`}
          className="absolute left-1/2 top-1/2 flex items-center gap-2 rounded-lg border border-primary/30 bg-surface/90 px-3 py-1.5 text-xs font-medium text-foreground shadow-card backdrop-blur"
          initial={{ x: 0, y: 0, opacity: 0, scale: 0.5 }}
          animate={{
            x: [0, p.x],
            y: [0, p.y],
            opacity: [0, 1, 1, 0],
            scale: [0.5, 1, 1, 0.9],
          }}
          transition={{
            duration: 4,
            delay: 1.5 + i * 0.5,
            repeat: Infinity,
            repeatDelay: 2,
            times: [0, 0.3, 0.8, 1],
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p.Icon className="h-3.5 w-3.5 text-primary" />
          <span>{p.label}</span>
        </motion.div>
      ))}
    </div>
  );
};