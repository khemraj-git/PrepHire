
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
    <Card className="p-5 sm:p-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
          Progress Overview
        </h2>

        <p className="mt-1 text-xs text-slate-500 sm:text-sm">
          Your weekly interview preparation progress.
        </p>
      </div>

      <div className="h-64 sm:h-72 lg:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis
              dataKey="day"
              tick={{ fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{ fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
                contentStyle={{
                  borderRadius: "12px",
                  border: "1px solid #E2E8F0",
                }}
              />

            <Line
              type="monotone"
              dataKey="progress"
              stroke="#2563EB"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

export default ProgressOverview;