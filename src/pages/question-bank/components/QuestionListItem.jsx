import { Link } from "react-router-dom";
import CompanyChip from "./CompanyChip";
import DifficultyBadge from "./DifficultyBadge";

function QuestionListItem({ question }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-300 hover:shadow-md">
      <div className="flex items-start justify-between">
        <div className="space-y-3">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              {question.title}
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              {question.topic}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {question.company.map((company) => (
              <CompanyChip
                key={company}
                company={company}
              />
            ))}
          </div>

          <div className="text-sm text-slate-500">
            Estimated Time • {question.time}
          </div>
        </div>

        <div className="flex flex-col items-end gap-5">
          <DifficultyBadge
            difficulty={question.difficulty}
          />

          <Link
            to={`/dashboard/question-bank/${question.category
              .toLowerCase()
              .replace(/\s+/g, "-")}/${question.slug}`}
            className="font-semibold text-blue-600 transition hover:text-blue-700"
          >
            Read Details →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default QuestionListItem;