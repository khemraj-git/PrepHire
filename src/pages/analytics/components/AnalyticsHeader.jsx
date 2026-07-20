import { FiBarChart2 } from "react-icons/fi";

const AnalyticsHeader = () => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <div className="mb-4 flex items-center gap-4">
          <div className="rounded-2xl bg-blue-100 p-4">
            <FiBarChart2 className="text-3xl text-blue-600" />
          </div>

          <div>
            <h1 className="text-4xl font-bold text-slate-900">
              Analytics Dashboard
            </h1>

            <p className="mt-2 text-slate-500">
              Track your coding progress, interview performance, learning streak,
              and overall preparation with detailed insights.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsHeader;