/**
 * Card-based layout mini demo — uniform bordered/shadowed containers with
 * identical padding and radius, repeated in a simple even grid. The point
 * is sameness: every card is the same "shape" of container.
 */
function CardLayoutDemo() {
  const cards = [
    { title: "Overview", lines: 2 },
    { title: "Activity", lines: 1 },
    { title: "Team", lines: 2 },
    { title: "Billing", lines: 1 },
  ];

  return (
    <div className="w-full max-w-md mx-auto grid grid-cols-2 gap-3">
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-xl border border-slate-200 shadow-sm p-4 bg-white flex flex-col gap-2"
        >
          <span className="text-xs font-semibold text-slate-700">{card.title}</span>
          {Array.from({ length: card.lines }).map((_, i) => (
            <span key={i} className="block h-1.5 w-full rounded-full bg-slate-100" />
          ))}
        </div>
      ))}
    </div>
  );
}

export default CardLayoutDemo;
