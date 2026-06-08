import type { FeatureSlug } from "@/app/lib/feature-pages-i18n";

export const featureVisuals: Record<
  FeatureSlug,
  { emoji: string; cardClass: string; iconBg: string }
> = {
  pet: {
    emoji: "🐾",
    cardClass: "feature-card-pet",
    iconBg: "bg-amber-100 text-amber-700",
  },
  translation: {
    emoji: "🌍",
    cardClass: "feature-card-translation",
    iconBg: "bg-sky-100 text-sky-700",
  },
  toolbox: {
    emoji: "🧰",
    cardClass: "feature-card-toolbox",
    iconBg: "bg-violet-100 text-violet-700",
  },
  pomodoro: {
    emoji: "🍅",
    cardClass: "feature-card-pomodoro",
    iconBg: "bg-rose-100 text-rose-700",
  },
};
