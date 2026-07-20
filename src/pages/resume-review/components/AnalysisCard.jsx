import Card from "../../../components/common/Card";
import { FiCheckCircle } from "react-icons/fi";

const statusStyles = {
  Good: "bg-green-100 text-green-700",
  Average: "bg-yellow-100 text-yellow-700",
  Poor: "bg-red-100 text-red-700",
};

const AnalysisCard = ({
  title,
  status,
  description,
}) => {
  return (
    <Card className="p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            {title}
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            {description}
          </p>
        </div>

        <div className="rounded-full bg-green-100 p-2">
          <FiCheckCircle className="text-green-600" />
        </div>
      </div>

      <div className="mt-6">
        <span
          className={`rounded-full px-3 py-1 text-sm font-medium ${
            statusStyles[status] || "bg-slate-100 text-slate-700"
          }`}
        >
          {status}
        </span>
      </div>
    </Card>
  );
};

export default AnalysisCard;