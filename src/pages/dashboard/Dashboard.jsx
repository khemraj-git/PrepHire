import StatsCards from "./sections/StatsCards";
import ProgressOverview from "./sections/ProgressOverview";
import RecentActivity from "./sections/RecentActivity";
import ContinueLearning from "./sections/ContinueLearning";

function Dashboard() {
  return (
    <div className="space-y-8 p-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Dashboard
        </h1>

        <p className="mt-2 text-slate-600">
          Track your interview preparation, monitor your progress, and continue improving your skills.
        </p>
      </div>

      <StatsCards />

      <div className="grid gap-6 lg:grid-cols-3">
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