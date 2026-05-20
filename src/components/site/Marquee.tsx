type Props = { items: string[]; className?: string };

export function Marquee({ items, className = "" }: Props) {
  const loop = [...items, ...items, ...items];
  return (
    <div className={`marquee ${className}`}>
      <div className="marquee-track">
        {loop.map((it, i) => (
          <span key={i} className="font-display text-[clamp(3rem,9vw,9rem)] whitespace-nowrap">
            {it} <span className="text-flame">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
