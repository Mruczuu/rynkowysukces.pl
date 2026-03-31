type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
};

export function Section({
  children,
  className = "",
  id,
  dark = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`px-5 py-20 md:py-28 ${dark ? "bg-surface" : ""} ${className}`}
    >
      <div className="mx-auto max-w-4xl">{children}</div>
    </section>
  );
}
