import { motion } from "framer-motion";

interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export const SectionHeader = ({ eyebrow, title, description, align = "center" }: Props) => {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`mx-auto flex max-w-3xl flex-col gap-4 ${alignment}`}
    >
      {eyebrow && (
        <span className="rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="text-balance font-display text-4xl font-bold tracking-tight text-gradient md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="text-balance text-lg text-muted-foreground">{description}</p>
      )}
    </motion.div>
  );
};