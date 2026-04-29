import { Sparkles } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-display text-lg font-bold">Aivio</span>
            <span className="ml-3 text-xs text-muted-foreground">AI-операционная система</span>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground">Возможности</a>
            <a href="#" className="hover:text-foreground">Цены</a>
            <a href="#" className="hover:text-foreground">Документация</a>
            <a href="#" className="hover:text-foreground">Контакты</a>
            <a href="#" className="hover:text-foreground">Конфиденциальность</a>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Aivio. Все права защищены.
        </div>
      </div>
    </footer>
  );
};