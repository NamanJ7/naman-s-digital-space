const mindsets = [
  "Grit",
  "Done > Perfect",
  "Take Action",
  "Execute",
  "Prioritize",
  "Figure It Out",
  "Compounding",
  "Be Uncomfortable",
  "Iterate",
  "Nth-order Thinking",
  "Knowledge",
  "Unicorn",
  "Think Different",
  "First Principles",
  "Seek Understanding",
  "Big-time Plays",
];

const MindsetMarquee = () => {
  // Double the content for seamless loop
  const content = [...mindsets, ...mindsets];

  return (
    <div className="w-full overflow-hidden py-8 border-t border-border">
      <div className="animate-marquee flex whitespace-nowrap">
        {content.map((mindset, index) => (
          <span
            key={index}
            className="mx-8 text-2xl md:text-3xl font-bold text-primary"
          >
            {mindset}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MindsetMarquee;
