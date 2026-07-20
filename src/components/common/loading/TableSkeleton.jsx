const TableSkeleton = ({
  rows = 5,
  columns = 5,
  className = "",
}) => {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm ${className}`}
    >
      {/* Table Header */}
      <div className="grid border-b border-slate-200 bg-slate-50 p-4"
        style={{
          gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        }}
      >
        {Array.from({ length: columns }).map((_, index) => (
          <div
            key={index}
            className="h-4 w-3/4 animate-pulse rounded-full bg-slate-200"
          />
        ))}
      </div>

      {/* Table Rows */}
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div
          key={rowIndex}
          className="grid border-b border-slate-100 p-4 last:border-b-0"
          style={{
            gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
          }}
        >
          {Array.from({ length: columns }).map((_, colIndex) => (
            <div
              key={colIndex}
              className="h-4 w-4/5 animate-pulse rounded-full bg-slate-200"
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default TableSkeleton;