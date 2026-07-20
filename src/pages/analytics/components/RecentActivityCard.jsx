import {
  FiCode,
  FiFileText,
  FiMic,
} from "react-icons/fi";

import Card from "../../../components/common/Card";

const icons = {
  coding: <FiCode className="text-xl text-blue-600" />,
  interview: <FiMic className="text-xl text-green-600" />,
  resume: <FiFileText className="text-xl text-purple-600" />,
};

const RecentActivityCard = ({ activity }) => {
  return (
    <Card className="p-5 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center gap-4">
        <div className="rounded-xl bg-slate-100 p-3">
          {icons[activity.type]}
        </div>

        <div className="flex-1">
          <h3 className="font-semibold text-slate-900">
            {activity.title}
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            {activity.category} • {activity.time}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default RecentActivityCard;