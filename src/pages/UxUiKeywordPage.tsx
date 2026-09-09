import { categories } from "../data/categories";
import { glossaryTerms } from "../data/glossaryTerms";
import GlossaryTermCard from "../components/glossary/GlossaryTermCard";

const category = categories.find((c) => c.id === "ux-ui-keyword")!;
// Filtered for consistency with the category-page pattern, even though the
// whole array currently belongs to this one category.
const terms = glossaryTerms.filter((t) => t.categoryId === "ux-ui-keyword");

function UxUiKeywordPage() {
  return (
    <div>
      <h1 className="app-page-title text-2xl font-semibold">
        {category.label}
      </h1>
      <p className="app-page-description mt-2">{category.description}</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {terms.map((term) => (
          <GlossaryTermCard key={term.id} term={term} />
        ))}
      </div>
    </div>
  );
}

export default UxUiKeywordPage;
