type TestimonialCardProps = {
  quote: string;
  name: string;
  result: string;
};

export function TestimonialCard({ quote, name, result }: TestimonialCardProps) {
  return (
    <div className="rounded-xl border border-border bg-surface-light p-6 md:p-8">
      <div className="mb-4 text-gold text-2xl">&ldquo;</div>
      <p className="text-foreground/90 leading-relaxed">{quote}</p>
      <div className="mt-5 flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold text-sm">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-sm">{name}</p>
          <p className="text-xs text-gold">{result}</p>
        </div>
      </div>
    </div>
  );
}
