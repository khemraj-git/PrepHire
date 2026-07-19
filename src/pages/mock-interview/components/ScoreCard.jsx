const ScoreCard = ({
  title,
  score,
  subtitle,
  color = "blue",
}) => {
  const colors = {
    blue: "bg-blue-50 text-blue-700 border-blue-100",
    green: "bg-green-50 text-green-700 border-green-100",
    purple: "bg-purple-50 text-purple-700 border-purple-100",
    orange: "bg-orange-50 text-orange-700 border-orange-100",
  };

  return (
    <div
      className={`rounded-2xl border p-6 shadow-sm ${colors[color]}`}
    >
      <p className="text-sm font-medium opacity-80">
        {title}
      </p>

      <h2 className="mt-3 text-4xl font-bold">
        {score}
      </h2>

      <p className="mt-2 text-sm opacity-80">
        {subtitle}
      </p>
    </div>
  );
};

export default ScoreCard;