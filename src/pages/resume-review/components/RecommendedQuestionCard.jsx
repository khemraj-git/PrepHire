import Card from "../../../components/common/Card";
import Button from "../../../components/common/Button";
import { FiCode } from "react-icons/fi";

const difficultyStyles = {
  Easy: "bg-green-100 text-green-700",
  Medium: "bg-yellow-100 text-yellow-700",
  Hard: "bg-red-100 text-red-700",
};

const RecommendedQuestionCard = ({ question }) => {
  return (
    <Card className="flex h-full flex-col justify-between p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div>
        <div className="mb-4 flex items-center justify-between">
          <div className="rounded-xl bg-blue-100 p-3">
            <FiCode className="text-xl text-blue-600" />
          </div>

          <span
            className={`rounded-full px-3 py-1 text-sm font-medium ${
              difficultyStyles[question.difficulty]
            }`}
          >
            {question.difficulty}
          </span>
        </div>

        <h3 className="text-lg font-semibold text-slate-900">
          {question.title}
        </h3>

        <p className="mt-3 text-sm text-slate-500">
          Strengthen this topic to improve your interview performance.
        </p>
      </div>

      <Button className="mt-6 w-full">
        Start Practice →
      </Button>
    </Card>
  );
};

export default RecommendedQuestionCard;