import Card from "../../../components/common/Card";
import { FiTrendingUp } from "react-icons/fi";
import { suggestions } from "../../../data/resumeData";

const SuggestionsCard = () => {
  return (
    <Card className="p-6">
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-xl bg-blue-100 p-3">
          <FiTrendingUp className="text-xl text-blue-600" />
        </div>

        <div>
          <h3 className="text-xl font-semibold text-slate-900">
            Improvement Suggestions
          </h3>

          <p className="text-sm text-slate-500">
            Recommendations to improve your resume.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {suggestions.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-3 rounded-xl bg-slate-50 p-4"
          >
            <div className="mt-1 h-2 w-2 rounded-full bg-blue-600" />

            <p className="text-slate-700">
              {item}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default SuggestionsCard;