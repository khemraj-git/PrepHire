import { FiBookOpen, FiCode, FiFileText, FiMessageSquare } from "react-icons/fi";
import Card from "../../../components/common/Card";

const activities = [
  {
    title: "Solved Two Sum",
    description: "Completed an easy array problem.",
    time: "2 hours ago",
    icon: FiCode,
  },
  {
    title: "Mock Interview",
    description: "Finished Java interview simulation.",
    time: "Yesterday",
    icon: FiMessageSquare,
  },
  {
    title: "Resume Updated",
    description: "Resume score improved to 82%.",
    time: "2 days ago",
    icon: FiFileText,
  },
  {
    title: "Question Bank",
    description: "Practiced 15 aptitude questions.",
    time: "3 days ago",
    icon: FiBookOpen,
  },
];

function RecentActivity() {
  return (
    <Card className="h-full p-5 sm:p-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
          Recent Activity
        </h2>

        <p className="mt-1 text-xs text-slate-500 sm:text-sm">
          Your latest interview preparation updates.
        </p>
      </div>

      <div className="space-y-4 sm:space-y-5">
        {activities.map((activity) => {
          const Icon = activity.icon;

          return (
            <div
              key={activity.title}
              className="flex items-start gap-3 sm:gap-4"
            >
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600 sm:h-10 sm:w-10">
                <Icon size={16} />
              </div>

              <div className="flex-1">
                <h3 className="text-sm font-medium text-slate-900 sm:text-base">
                  {activity.title}
                </h3>

                <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                  {activity.description}
                </p>

                <span className="mt-1 block text-xs text-slate-400">
                  {activity.time}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

export default RecentActivity;