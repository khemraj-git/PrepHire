import {
  FiAward,
  FiCode,
  FiFileText,
  FiTrendingUp,
  FiMic,
} from "react-icons/fi";

import Card from "../../../components/common/Card";

const icons = {
  streak: <FiTrendingUp className="text-3xl text-orange-500" />,
  code: <FiCode className="text-3xl text-blue-600" />,
  interview: <FiMic className="text-3xl text-green-600" />,
  resume: <FiFileText className="text-3xl text-purple-600" />,
};

const AchievementCard = ({ achievement }) => {
  return (
    <Card className="p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 flex items-center justify-between">
        <div>{icons[achievement.icon]}</div>

        <FiAward className="text-xl text-yellow-500" />
      </div>

      <h3 className="text-lg font-semibold text-slate-900">
        {achievement.title}
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        {achievement.description}
      </p>
    </Card>
  );
};

export default AchievementCard;