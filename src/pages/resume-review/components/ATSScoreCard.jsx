import { FiTarget } from "react-icons/fi";
import Card from "../../../components/common/Card";
import { resumeOverview } from "../../../data/resumeData";

const ATSScoreCard = () => {
  const score = resumeOverview.atsScore;

  return (
    <Card className="p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">
            ATS Score
          </p>

          <h2 className="mt-2 text-5xl font-bold text-blue-600">
            {score}
            <span className="text-2xl text-slate-400">/100</span>
          </h2>
        </div>

        <div className="rounded-2xl bg-blue-100 p-4">
          <FiTarget className="text-3xl text-blue-600" />
        </div>
      </div>

      <div className="mt-6 h-3 w-full overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-blue-500 transition-all duration-500"
          style={{ width: `${score}%` }}
        />
      </div>

      <div className="mt-6 space-y-3">
        <div className="flex justify-between">
          <span className="text-slate-500">Formatting</span>
          <span className="font-semibold">
            {resumeOverview.formatting}%
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-500">Grammar</span>
          <span className="font-semibold">
            {resumeOverview.grammar}%
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-500">Keyword Match</span>
          <span className="font-semibold">
            {resumeOverview.keywordMatch}%
          </span>
        </div>
      </div>
    </Card>
  );
};

export default ATSScoreCard;