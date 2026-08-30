/**
 * Editorial / magazine grid demo — print-style layout: large serif headline,
 * a thin horizontal rule, a 2-column text block, and a pull-quote styled
 * block with a left border accent, all at preview scale.
 */
function EditorialMagazineDemo() {
  return (
    <div className="relative isolate overflow-hidden rounded-2xl min-h-[220px] w-full bg-white flex flex-col justify-center gap-3 p-6">
      <h2 className="font-serif text-2xl font-bold leading-tight text-slate-900">
        The Grid Returns
      </h2>
      <hr className="border-t border-slate-300" />
      <div className="columns-2 gap-4 text-[10px] leading-snug text-slate-600">
        <p>
          Print-inspired layouts favor structure over decoration — a column
          grid, a clear hierarchy, and generous rules between sections.
        </p>
        <p>
          Typography carries the weight: serif headlines, quiet body copy,
          and callouts reserved for what truly matters.
        </p>
      </div>
      <blockquote className="ml-2 border-l-2 border-slate-400 pl-3 text-xs italic text-slate-500">
        "Design is structure made legible."
      </blockquote>
    </div>
  );
}

export default EditorialMagazineDemo;
