const TextSkeleton = ({
  lines = 3,
  className = "",
  lastLineWidth = "w-3/4",
}) => {
  return (
    <div className={`animate-pulse space-y-3 ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className={`h-4 rounded-full bg-slate-200 ${
            index === lines - 1 ? lastLineWidth : "w-full"
          }`}
        />
      ))}
    </div>
  );
};

export default TextSkeleton;