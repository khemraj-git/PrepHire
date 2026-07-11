import Card from "../../../components/common/Card";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function CategoryCard({ category, active, onClick }) {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => {
        onClick?.();
        navigate(`/dashboard/question-bank/${category.slug}`);
      }}
      className={`group cursor-pointer p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
        active
          ? "border-blue-600 ring-2 ring-blue-100 shadow-md"
          : "border-slate-200 hover:border-blue-200"
      }`}
    >
      <div className="flex items-start justify-between">
        <span className="text-4xl">{category.icon}</span>

        <FiArrowRight
          className={`transition ${
            active
              ? "translate-x-1 text-blue-600"
              : "text-slate-400 group-hover:translate-x-1 group-hover:text-blue-600"
          }`}
        />
      </div>

      <h3 className="mt-5 text-xl font-bold text-slate-900">
        {category.title}
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        {category.questions}+ Questions
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {category.topics.map((topic) => (
          <span
            key={topic}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
          >
            {topic}
          </span>
        ))}
      </div>

      <button
        type="button"
        className="mt-6 text-sm font-semibold text-blue-600"
      >
        Explore →
      </button>
    </Card>
  );
}

export default CategoryCard;