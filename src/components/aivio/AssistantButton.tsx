import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, Send } from "lucide-react";

export const AssistantButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mb-3 w-80 overflow-hidden rounded-2xl border border-border bg-surface/95 shadow-elevated backdrop-blur-xl"
          >
            <div className="flex items-center justify-between border-b border-border p-4">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
                  <Sparkles className="h-4 w-4 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-sm font-semibold">AI-ассистент Aivio</div>
                  <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Онлайн · отвечает за 3 сек
                  </div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="space-y-3 p-4 text-sm">
              <div className="rounded-xl rounded-tl-sm border border-border bg-background/60 p-3 text-foreground">
                Привет! Я помогу выбрать тариф и расскажу, как Aivio решит вашу
                задачу. О чём поговорим?
              </div>
              <div className="flex flex-wrap gap-2">
                {["Что такое Aivio?", "Цены", "Запросить демо"].map((q) => (
                  <button
                    key={q}
                    className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground hover:border-primary/50 hover:text-foreground"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2 border-t border-border p-3">
              <input
                placeholder="Напишите сообщение…"
                className="flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              />
              <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground hover:bg-primary/90">
                <Send className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-primary shadow-elevated"
      >
        <span className="absolute inset-0 animate-pulse-glow rounded-full" />
        {open ? (
          <X className="h-5 w-5 text-primary-foreground" />
        ) : (
          <Sparkles className="h-5 w-5 text-primary-foreground" />
        )}
      </motion.button>
    </div>
  );
};