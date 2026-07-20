import { Link } from "react-router-dom";
import { FiArrowRight, FiClock, FiCheckCircle } from "react-icons/fi";
import { recentInterviews } from "../../data/mockInterviews";

const InterviewHistory = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Interview History
        </h1>

        <p className="mt-2 text-gray-500">
          Review all your previous mock interviews and reports.
        </p>
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
                className="border-t border-gray-100 hover:bg-blue-50/40"
              >
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-blue-100 p-2">
                      <FiCheckCircle className="text-blue-600" />
                    </div>

                    <div>
                      <p className="font-semibold">{item.role}</p>
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
                  <div className="flex items-center gap-2">
                    <FiClock size={15} />
                    {item.duration}
                  </div>
                </td>

                <td className="px-6 py-5">
                  {item.date}
                </td>

                <td className="px-6 py-5">
                  <Link
                    to="/dashboard/mock-interview/feedback"
                    state={item}
                    className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
                  >
                    View Report
                    <FiArrowRight size={15} />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InterviewHistory;