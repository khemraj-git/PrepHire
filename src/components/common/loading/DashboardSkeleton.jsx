import CardSkeleton from "./CardSkeleton";

const DashboardSkeleton = () => {
  return (
    <div className="space-y-8 animate-pulse">
      {/* Header */}
      <div className="space-y-3">
        <div className="h-8 w-64 rounded-lg bg-slate-200" />
        <div className="h-4 w-96 rounded-lg bg-slate-200" />
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <CardSkeleton key={index} lines={2} />
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid gap-6 lg:grid-cols-3">
        <CardSkeleton
          className="lg:col-span-2 h-80"
          lines={6}
        />

        <CardSkeleton
          className="h-80"
          lines={6}
        />
      </div>

      {/* Bottom Cards */}
      <div className="grid gap-6 lg:grid-cols-2">
        <CardSkeleton lines={5} />

        <CardSkeleton lines={5} />
      </div>
    </div>
  );
};

export default DashboardSkeleton;