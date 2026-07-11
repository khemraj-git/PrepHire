import Card from "../../../components/common/Card";
import DifficultyBadge from "./DifficultyBadge";
import CompanyChip from "./CompanyChip";
import { FiClock, FiArrowRight } from "react-icons/fi";

function QuestionCard({ question }) {
  return (
    <Card className="group p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-semibold text-slate-900">
            {question.title}
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            {question.category}
          </p>
        </div>

        <DifficultyBadge difficulty={question.difficulty} />
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {question.company.map((company) => (
          <CompanyChip
            key={company}
            company={company}
          />
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <FiClock />
          {question.time}
        </div>

        <button className="flex items-center gap-2 font-semibold text-blue-600 transition hover:gap-3">
          {question.type === "Coding" ? "Solve" : "Read"}

          <FiArrowRight />
        </button>
      </div>
    </Card>
  );
}

export default QuestionCard;