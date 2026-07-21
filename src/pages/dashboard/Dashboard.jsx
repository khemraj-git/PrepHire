import StatsCards from "./sections/StatsCards";
import ProgressOverview from "./sections/ProgressOverview";
import RecentActivity from "./sections/RecentActivity";
import ContinueLearning from "./sections/ContinueLearning";
import DailyGoals from "./sections/DailyGoals";

function Dashboard() {
  return (
    <div className="space-y-6 p-4 sm:p-6 lg:space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Dashboard
        </h1>

        <p className="mt-2 max-w-3xl text-sm text-slate-600 sm:text-base">
          Track your interview preparation, monitor your progress, and continue improving your skills.
        </p>
      </div>

      <StatsCards />

      <DailyGoals />

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="lg:col-span-2">
          <ProgressOverview />
        </div>

        <div>
          <RecentActivity />
        </div>
      </div>

      <ContinueLearning />
    </div>
  );
}

export default Dashboard;