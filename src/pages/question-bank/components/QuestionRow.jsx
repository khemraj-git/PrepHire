import DifficultyBadge from "./DifficultyBadge";
import CompanyChip from "./CompanyChip";

function QuestionRow({ question }) {
  return (
    <div className="flex items-center justify-between border-b border-slate-200 p-5 last:border-none">
      <div>
        <h3 className="font-semibold text-slate-900">
          {question.title}
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          {question.topic}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {question.company.map((company) => (
            <CompanyChip
              key={company}
              company={company}
            />
          ))}
        </div>
      </div>

      <DifficultyBadge difficulty={question.difficulty} />
    </div>
  );
}

export default QuestionRow;