type SectionHeadingProps = {
  title: string;
  description?: string;
  emoji?: string;
  compact?: boolean;
};

export function SectionHeading({ title, description, emoji, compact }: SectionHeadingProps) {
  return (
    <div className={compact ? "space-y-1.5" : "space-y-2"}>
      <h2
        className={
          compact
            ? "pet-title text-xl font-semibold text-[var(--foreground)]"
            : "pet-title text-2xl font-semibold text-[var(--foreground)] md:text-[1.65rem]"
        }
      >
        {emoji ? (
          <span className="mr-1.5" aria-hidden>
            {emoji}
          </span>
        ) : null}
        {title}
      </h2>
      {description ? (
        <p
          className={
            compact
              ? "max-w-xl text-sm text-[var(--muted)]"
              : "max-w-xl text-sm text-[var(--muted)] md:text-[0.9375rem]"
          }
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
