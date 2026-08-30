/**
 * Masonry grid demo — Pinterest-style packed columns using CSS `columns-3`
 * with varied-height blocks and `break-inside-avoid` so items pack into
 * whichever column has room next, never splitting across columns. Unlike
 * BentoGridDemo (grid spans, uniform row tracks) or CardLayoutDemo (uniform
 * grid), heights here are intentionally uneven and there is no row alignment.
 */
function MasonryGridDemo() {
  const blocks = [
    { color: "bg-fuchsia-200", height: "h-20", label: "" },
    { color: "bg-teal-200", height: "h-32", label: "Tall" },
    { color: "bg-amber-200", height: "h-14", label: "" },
    { color: "bg-sky-200", height: "h-24", label: "" },
    { color: "bg-rose-200", height: "h-16", label: "" },
    { color: "bg-lime-200", height: "h-28", label: "Long" },
  ];

  return (
    <div className="w-full max-w-md mx-auto columns-3 gap-2.5">
      {blocks.map((block, i) => (
        <div
          key={i}
          className={`mb-2.5 rounded-lg p-2 flex items-end [break-inside:avoid] ${block.color} ${block.height}`}
        >
          {block.label && (
            <span className="text-[9px] font-medium text-slate-700">{block.label}</span>
          )}
        </div>
      ))}
    </div>
  );
}

export default MasonryGridDemo;
