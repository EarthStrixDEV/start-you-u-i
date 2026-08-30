import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TOTAL_PAGES = 5;

/**
 * Pagination demo — real <button> elements, aria-current="page" on the
 * active number, Prev/Next disabled at the bounds.
 */
function PaginationDemo() {
  const [page, setPage] = useState(1);

  return (
    <nav aria-label="Pagination" className="flex items-center gap-1">
      <button
        type="button"
        onClick={() => setPage((p) => Math.max(1, p - 1))}
        disabled={page === 1}
        aria-label="Previous page"
        className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 disabled:pointer-events-none disabled:opacity-30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
      >
        <ChevronLeft className="h-4 w-4" aria-hidden="true" />
      </button>

      {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map((n) => {
        const current = n === page;
        return (
          <button
            key={n}
            type="button"
            onClick={() => setPage(n)}
            aria-current={current ? "page" : undefined}
            className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 ${
              current ? "bg-indigo-600 text-white" : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            {n}
          </button>
        );
      })}

      <button
        type="button"
        onClick={() => setPage((p) => Math.min(TOTAL_PAGES, p + 1))}
        disabled={page === TOTAL_PAGES}
        aria-label="Next page"
        className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 disabled:pointer-events-none disabled:opacity-30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
      >
        <ChevronRight className="h-4 w-4" aria-hidden="true" />
      </button>
    </nav>
  );
}

export default PaginationDemo;
