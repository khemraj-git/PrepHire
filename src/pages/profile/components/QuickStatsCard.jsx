import {
  FiCode,
  FiBarChart2,
  FiTrendingUp,
  FiMic,
} from "react-icons/fi";

import Card from "../../../components/common/Card";

const iconMap = {
  "Questions Solved": (
    <FiCode className="text-3xl text-blue-600" />
  ),
  "Mock Interviews": (
    <FiMic className="text-3xl text-green-600" />
  ),
  "Resume Score": (
    <FiBarChart2 className="text-3xl text-purple-600" />
  ),
  "Current Streak": (
    <FiTrendingUp className="text-3xl text-orange-500" />
  ),
};

const QuickStatsCard = ({
  title,
  value,
}) => {
  return (
    <Card className="p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            {value}
          </h2>
        </div>

        <div className="rounded-2xl bg-slate-100 p-4">
          {iconMap[title]}
        </div>
      </div>
    </Card>
  );
};

export default QuickStatsCard;