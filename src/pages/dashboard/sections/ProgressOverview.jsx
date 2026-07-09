
import Card from "../../../components/common/Card";


import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { day: "Mon", progress: 20 },
  { day: "Tue", progress: 35 },
  { day: "Wed", progress: 42 },
  { day: "Thu", progress: 58 },
  { day: "Fri", progress: 70 },
  { day: "Sat", progress: 82 },
  { day: "Sun", progress: 90 },
];

function ProgressOverview() {
  return (
    <Card className="p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-slate-900">
          Progress Overview
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Your weekly interview preparation progress.
        </p>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="day" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="progress"
              stroke="#2563EB"
              strokeWidth={3}
              dot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

export default ProgressOverview;