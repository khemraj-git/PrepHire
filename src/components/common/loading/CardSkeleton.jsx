import TextSkeleton from "./TextSkeleton";

const CardSkeleton = ({
  showAvatar = false,
  showButton = false,
  lines = 3,
  className = "",
}) => {
  return (
    <div
      className={`animate-pulse rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ${className}`}
    >
      {showAvatar && (
        <div className="mb-5 flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-slate-200" />

          <div className="flex-1 space-y-3">
            <div className="h-4 w-40 rounded-full bg-slate-200" />
            <div className="h-3 w-28 rounded-full bg-slate-200" />
          </div>
        </div>
      )}

      <TextSkeleton lines={lines} />

      {showButton && (
        <div className="mt-6 h-10 w-32 rounded-xl bg-slate-200" />
      )}
    </div>
  );
};

export default CardSkeleton;