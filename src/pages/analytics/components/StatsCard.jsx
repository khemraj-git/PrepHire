import Card from "../../../components/common/Card";

const colorClasses = {
  blue: {
    bg: "bg-blue-100",
    text: "text-blue-600",
  },
  green: {
    bg: "bg-green-100",
    text: "text-green-600",
  },
  orange: {
    bg: "bg-orange-100",
    text: "text-orange-600",
  },
  purple: {
    bg: "bg-purple-100",
    text: "text-purple-600",
  },
};

const StatsCard = ({
  title,
  value,
  color,
}) => {
  const styles = colorClasses[color];

  return (
    <Card className="p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h2 className={`mt-3 text-4xl font-bold ${styles.text}`}>
            {value}
          </h2>
        </div>

        <div className={`h-14 w-14 rounded-2xl ${styles.bg}`} />
      </div>
    </Card>
  );
};

export default StatsCard;