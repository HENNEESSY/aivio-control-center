import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#problem", label: "Проблема" },
  { href: "#solution", label: "Решение" },
  { href: "#how", label: "Как работает" },
  { href: "#ai", label: "AI-сотрудники" },
  { href: "#integrations", label: "Интеграции" },
];

export const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-4 z-50 mx-auto flex max-w-6xl items-center justify-between rounded-full border border-border bg-surface/70 px-5 py-2.5 backdrop-blur-xl"
    >
      <a href="#" className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary shadow-glow">
          <Sparkles className="h-4 w-4 text-primary-foreground" />
        </div>
        <span className="font-display text-lg font-bold tracking-tight">Aivio</span>
      </a>
      <nav className="hidden items-center gap-7 md:flex">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {l.label}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" className="hidden text-muted-foreground hover:text-foreground sm:inline-flex">
          Войти
        </Button>
        <Button size="sm" className="rounded-full bg-primary font-medium text-primary-foreground hover:bg-primary/90">
          Попробовать
        </Button>
      </div>
    </motion.header>
  );
};