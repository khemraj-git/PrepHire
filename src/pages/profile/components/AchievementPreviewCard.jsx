import {
  FiCode,
  FiMic,
  FiTrendingUp,
  FiAward,
} from "react-icons/fi";

import Card from "../../../components/common/Card";

const iconMap = {
  "100 Questions Solved": {
    icon: <FiCode className="text-3xl text-blue-600" />,
    bg: "bg-blue-100",
  },

  "25 Mock Interviews": {
    icon: <FiMic className="text-3xl text-green-600" />,
    bg: "bg-green-100",
  },

  "18 Day Streak": {
    icon: <FiTrendingUp className="text-3xl text-orange-500" />,
    bg: "bg-orange-100",
  },

  "ATS Score 90+": {
    icon: <FiAward className="text-3xl text-purple-600" />,
    bg: "bg-purple-100",
  },
};

const AchievementPreviewCard = ({ achievement }) => {
  const current = iconMap[achievement.title];

  return (
    <Card className="group p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div
        className={`mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl ${current.bg}`}
      >
        {current.icon}
      </div>

      <h3 className="text-lg font-semibold text-slate-900">
        {achievement.title}
      </h3>
    </Card>
  );
};

export default AchievementPreviewCard;