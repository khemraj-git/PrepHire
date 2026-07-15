import {
  FiAward,
  FiCheckCircle,
  FiClock,
  FiTrendingUp,
} from "react-icons/fi";

import { interviewStats } from "../../../data/mockInterviews";

const stats = [
  {
    title: "Completed",
    value: interviewStats.completed,
    subtitle: "Interviews Finished",
    icon: FiCheckCircle,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Average Score",
    value: `${interviewStats.averageScore}%`,
    subtitle: "Overall Performance",
    icon: FiAward,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    title: "Practice Time",
    value: `${interviewStats.totalTime} hrs`,
    subtitle: "Total Time Invested",
    icon: FiClock,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    title: "Current Streak",
    value: `${interviewStats.streak} Days`,
    subtitle: "Keep Going 🔥",
    icon: FiTrendingUp,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
];

const InterviewStats = () => {
  return (
    <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  {stat.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold text-gray-900">
                  {stat.value}
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  {stat.subtitle}
                </p>
              </div>

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${stat.iconBg}`}
              >
                <Icon
                  className={`text-2xl ${stat.iconColor} transition-transform duration-300 group-hover:scale-110`}
                />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default InterviewStats;