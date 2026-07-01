const mindsets = [
  "First-principles thinking",
  "Grit",
  "Bias toward action",
  "Nth-order thinking",
  "High agency",
  "Relentless resourcefulness",
  "Customer obsession",
  "Asymmetric upside",
  "Long-term orientation",
  "Compounding",
  "Ownership",
  "Antifragility",
];

function MindsetSequence({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="mindset-sequence" aria-hidden={hidden || undefined}>
      {mindsets.map((mindset) => (
        <span key={mindset} className="mindset-item">
          <span>{mindset}</span>
          <span className="mindset-dot">✦</span>
        </span>
      ))}
    </div>
  );
}

export function MindsetMarquee() {
  return (
    <footer className="mindset-marquee" aria-label={`Founder mindsets: ${mindsets.join(", ")}`}>
      <div className="mindset-track">
        <MindsetSequence />
        <MindsetSequence hidden />
      </div>
    </footer>
  );
}
