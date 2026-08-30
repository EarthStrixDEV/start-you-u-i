/**
 * Timeline / vertical feed demo — a `border-l-2` spine running down the
 * left side with 3 node dots sitting centered on the line, each paired
 * with a timestamp + short label to its right. Distinct from
 * StickySidebarDemo (a nav column with no connector line or chronology).
 */
function TimelineFeedDemo() {
  const entries = [
    { time: "09:14", label: "Order placed" },
    { time: "11:40", label: "Shipped" },
    { time: "Today", label: "Out for delivery" },
  ];

  return (
    <div className="w-full max-w-sm mx-auto flex flex-col py-2">
      {entries.map((entry, i) => (
        <div key={entry.time} className="relative flex gap-3 pb-6 last:pb-0">
          <div className="relative flex flex-col items-center">
            <span className="-ml-px h-2.5 w-2.5 shrink-0 rounded-full border-2 border-indigo-500 bg-white" />
            {i < entries.length - 1 && (
              <span className="mt-1 w-0 flex-1 border-l-2 border-slate-300" />
            )}
          </div>
          <div className="-mt-1 flex flex-col gap-0.5">
            <span className="text-[10px] font-semibold uppercase tracking-wide text-indigo-500">
              {entry.time}
            </span>
            <span className="text-xs text-slate-600">{entry.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TimelineFeedDemo;
