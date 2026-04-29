import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

/* Inline SVG brand marks (monochrome, on-brand) */
const Telegram = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.146.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.022c.24-.213-.054-.334-.373-.121L8.48 13.342l-2.95-.924c-.642-.204-.654-.642.135-.953l11.514-4.448c.538-.196 1.006.128.832.953z"/></svg>
);
const WhatsApp = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.04 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.002-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zM20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.892c0 2.096.549 4.142 1.595 5.945L0 24l6.335-1.652a11.882 11.882 0 005.71 1.447h.005c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411z"/></svg>
);
const Instagram = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
);
const OneC = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7"><rect x="2" y="3" width="20" height="18" rx="3" fill="currentColor" opacity=".15"/><text x="12" y="16" fontSize="9" fontWeight="800" fill="currentColor" textAnchor="middle" fontFamily="Inter, sans-serif">1C</text></svg>
);
const VK = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7"><path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.07 14.27h-1.46c-.55 0-.72-.44-1.71-1.43-.86-.83-1.24-.94-1.45-.94-.3 0-.39.09-.39.5v1.31c0 .35-.11.56-1.04.56-1.54 0-3.24-.93-4.45-2.66-1.81-2.55-2.31-4.47-2.31-4.86 0-.21.09-.4.5-.4h1.46c.37 0 .51.17.65.57.72 2.07 1.92 3.88 2.42 3.88.19 0 .27-.09.27-.56V10.1c-.06-.99-.58-1.07-.58-1.42 0-.17.14-.34.36-.34h2.29c.31 0 .42.16.42.53v2.91c0 .31.13.42.22.42.19 0 .35-.11.69-.45 1.06-1.18 1.81-3.01 1.81-3.01.1-.21.27-.41.64-.41h1.46c.44 0 .53.22.44.53-.19.85-2 3.41-2 3.41-.16.26-.22.38 0 .67.16.21.69.66 1.04 1.07.65.73 1.13 1.34 1.27 1.77.11.42-.11.64-.55.64z"/></svg>
);
const GoogleCal = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7"><rect x="3" y="4" width="18" height="17" rx="3" fill="currentColor" opacity=".15"/><rect x="3" y="4" width="18" height="4" rx="2" fill="currentColor"/><text x="12" y="17.5" fontSize="7" fontWeight="800" fill="currentColor" textAnchor="middle" fontFamily="Inter, sans-serif">31</text></svg>
);
const GoogleSheets = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7"><rect x="4" y="2" width="16" height="20" rx="2" fill="currentColor" opacity=".15"/><path d="M7 10h10M7 14h10M7 18h10M11 8v12M15 8v12" stroke="currentColor" strokeWidth="1.4" fill="none"/></svg>
);
const Yandex = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7"><circle cx="12" cy="12" r="10" fill="currentColor" opacity=".15"/><text x="12" y="16.5" fontSize="13" fontWeight="800" fill="currentColor" textAnchor="middle" fontFamily="Inter, sans-serif">Я</text></svg>
);
const MoySklad = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7"><rect x="2" y="7" width="20" height="13" rx="2" fill="currentColor" opacity=".15"/><path d="M2 11h20M8 7V4h8v3" stroke="currentColor" strokeWidth="1.6" fill="none"/></svg>
);
const Bitrix = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7"><circle cx="12" cy="12" r="10" fill="currentColor" opacity=".15"/><text x="12" y="15.5" fontSize="6" fontWeight="800" fill="currentColor" textAnchor="middle" fontFamily="Inter, sans-serif">B24</text></svg>
);
const OpenRouter = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7"><circle cx="6" cy="12" r="2.5" fill="currentColor"/><circle cx="18" cy="6" r="2.5" fill="currentColor"/><circle cx="18" cy="18" r="2.5" fill="currentColor"/><path d="M8 11l8-4M8 13l8 4" stroke="currentColor" strokeWidth="1.6" fill="none"/></svg>
);
const N8n = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7"><circle cx="5" cy="12" r="2" fill="currentColor"/><circle cx="12" cy="6" r="2" fill="currentColor"/><circle cx="12" cy="18" r="2" fill="currentColor"/><circle cx="19" cy="12" r="2" fill="currentColor"/><path d="M7 12h3M14 12h3M12 8v8" stroke="currentColor" strokeWidth="1.6"/></svg>
);
const Make = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7"><path d="M5 3l4 18M11 3l-2 18M15 3l4 18M19 3l-2 18" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round"/></svg>
);

const items = [
  { Icon: Telegram, name: "Telegram" },
  { Icon: WhatsApp, name: "WhatsApp" },
  { Icon: Instagram, name: "Instagram" },
  { Icon: VK, name: "VK" },
  { Icon: GoogleCal, name: "Google Calendar" },
  { Icon: GoogleSheets, name: "Google Sheets" },
  { Icon: Yandex, name: "Yandex" },
  { Icon: OneC, name: "1C" },
  { Icon: MoySklad, name: "МойСклад" },
  { Icon: Bitrix, name: "Bitrix24" },
  { Icon: OpenRouter, name: "OpenRouter" },
  { Icon: N8n, name: "n8n" },
  { Icon: Make, name: "Make" },
];

export const Integrations = () => {
  return (
    <section id="integrations" className="relative py-28">
      <div className="container">
        <SectionHeader
          eyebrow="Интеграции"
          title="Подключается к вашему бизнесу за минуты"
          description="Мессенджеры, календарь, таблицы, учётные системы и автоматизации подключаются в один рабочий контур без тяжёлого внедрения."
        />

        <div className="mt-8 flex flex-wrap justify-center gap-2 text-xs text-muted-foreground">
          {["Коммуникации", "Учёт и ERP", "Календарь и таблицы", "AI и автоматизации"].map((group) => (
            <span
              key={group}
              className="rounded-full border border-border bg-surface/50 px-3 py-1 backdrop-blur"
            >
              {group}
            </span>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
          {items.map((it, i) => (
            <motion.div
              key={it.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              className="group flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-surface/60 backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/40 hover:bg-surface"
            >
              <div className="text-muted-foreground transition-colors group-hover:text-primary">
                <it.Icon />
              </div>
              <span className="text-[11px] text-muted-foreground">{it.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
