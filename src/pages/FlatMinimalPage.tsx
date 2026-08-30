import { categories } from "../data/categories";
import { styles } from "../data/styles";
import StylePreviewCard from "../components/preview/StylePreviewCard";

const category = categories.find((c) => c.id === "flat-minimal")!;
const flatMinimalStyles = styles.filter((s) => s.categoryId === "flat-minimal");

function FlatMinimalPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-slate-800">{category.label}</h1>
      <p className="mt-2 text-slate-500">{category.description}</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {flatMinimalStyles.map((style) =>
          style.demoKind === "generic" ? (
            <StylePreviewCard key={style.id} style={style} />
          ) : (
            <div
              key={style.id}
              className="rounded-[2rem] bg-white/50 shadow-clay-sm p-6 text-slate-400 text-sm dark:bg-slate-700/50"
            >
              {style.name} — custom demo coming soon
            </div>
          ),
        )}
      </div>
    </div>
  );
}

export default FlatMinimalPage;
