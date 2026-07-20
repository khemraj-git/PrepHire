const CodingSkeleton = () => {
  return (
    <div className="grid gap-6 lg:grid-cols-2 animate-pulse">
      {/* Left Section */}
      <div className="space-y-6">
        {/* Title */}
        <div className="space-y-3">
          <div className="h-8 w-3/4 rounded-lg bg-slate-200" />
          <div className="h-4 w-full rounded-lg bg-slate-200" />
          <div className="h-4 w-5/6 rounded-lg bg-slate-200" />
        </div>

        {/* Problem Description */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="space-y-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className={`h-4 rounded-full bg-slate-200 ${
                  index === 7 ? "w-2/3" : "w-full"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Test Cases */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 h-5 w-40 rounded-lg bg-slate-200" />

          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="rounded-xl bg-slate-100 p-4"
              >
                <div className="mb-3 h-4 w-24 rounded bg-slate-200" />
                <div className="h-12 rounded-lg bg-slate-200" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="space-y-6">
        {/* Toolbar */}
        <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="h-10 w-36 rounded-lg bg-slate-200" />

          <div className="flex gap-3">
            <div className="h-10 w-28 rounded-lg bg-slate-200" />
            <div className="h-10 w-28 rounded-lg bg-slate-200" />
          </div>
        </div>

        {/* Code Editor */}
        <div className="h-[520px] rounded-2xl border border-slate-200 bg-slate-200 shadow-sm" />

        {/* Output */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 h-5 w-32 rounded-lg bg-slate-200" />

          <div className="space-y-3">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="h-4 rounded-full bg-slate-200"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodingSkeleton;