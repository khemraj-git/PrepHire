import CategoryCard from "../components/CategoryCard";
import { categories } from "../../../data/questionBank";

function PopularCategories({
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">
          Browse Categories
        </h2>

        <p className="mt-2 text-slate-500">
          Choose a topic and start preparing for your interviews.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            active={selectedCategory === category.title}
            onClick={() => setSelectedCategory(category.title)}
          />
        ))}
      </div>
    </section>
  );
}

export default PopularCategories;