import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import Card from "../../../components/common/Card";
import { weeklyActivity } from "../../../data/analyticsData";

const WeeklyActivity = () => {
  return (
    <Card className="p-6">
      <h2 className="mb-6 text-xl font-semibold text-slate-900">
        Weekly Study Hours
      </h2>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={weeklyActivity}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="day" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="hours"
              fill="#16a34a"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default WeeklyActivity;