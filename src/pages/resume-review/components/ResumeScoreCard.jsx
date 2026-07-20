import { FiAward } from "react-icons/fi";
import Card from "../../../components/common/Card";
import { resumeOverview } from "../../../data/resumeData";

const ResumeScoreCard = () => {
  const score = resumeOverview.overallScore;

  return (
    <Card className="p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">
            Overall Resume Score
          </p>

          <h2 className="mt-2 text-5xl font-bold text-slate-900">
            {score}
            <span className="text-2xl text-slate-400">/100</span>
          </h2>
        </div>

        <div className="rounded-2xl bg-green-100 p-4">
          <FiAward className="text-3xl text-green-600" />
        </div>
      </div>

      <div className="mt-6 h-3 w-full overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-green-500 transition-all duration-500"
          style={{ width: `${score}%` }}
        />
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm text-slate-500">
          Resume Quality
        </span>

        <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
          Excellent
        </span>
      </div>
    </Card>
  );
};

export default ResumeScoreCard;