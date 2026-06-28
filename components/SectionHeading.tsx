export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-2xl font-bold sm:text-3xl">{children}</h2>
      <div className="accent-rule mt-3" />
    </div>
  );
}
