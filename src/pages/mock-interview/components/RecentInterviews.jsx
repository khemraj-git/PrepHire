import { FiArrowRight, FiCheckCircle, FiClock } from "react-icons/fi";
import { recentInterviews } from "../../../data/mockInterviews";

const RecentInterviews = () => {
  return (
    <section className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Recent Interviews
          </h2>

          <p className="mt-1 text-gray-500">
            Review your latest interview attempts.
          </p>
        </div>

        <button className="text-sm font-semibold text-blue-600 transition hover:text-blue-700">
          View All
        </button>
      </div>

      <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr className="text-left text-sm font-semibold text-gray-600">
              <th className="px-6 py-4">Interview</th>
              <th className="px-6 py-4">Score</th>
              <th className="px-6 py-4">Duration</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4"></th>
            </tr>
          </thead>

          <tbody>
            {recentInterviews.map((item) => (
              <tr
                key={item.id}
                className="border-t border-gray-100 transition hover:bg-blue-50/40"
              >
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-blue-100 p-2">
                      <FiCheckCircle className="text-blue-600" />
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900">
                        {item.role}
                      </p>

                      <p className="text-sm text-gray-500">
                        Mock Interview
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-5">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                    {item.score}%
                  </span>
                </td>

                <td className="px-6 py-5">
                  <div className="flex items-center gap-2 text-gray-600">
                    <FiClock size={15} />
                    {item.duration}
                  </div>
                </td>

                <td className="px-6 py-5 text-gray-500">
                  {item.date}
                </td>

                <td className="px-6 py-5">
                  <button className="flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700">
                    View Report
                    <FiArrowRight size={15} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default RecentInterviews;