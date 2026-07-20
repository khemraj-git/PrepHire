import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import Card from "../../../components/common/Card";
import { interviewPerformance } from "../../../data/analyticsData";

const InterviewPerformance = () => {
  return (
    <Card className="p-6">
      <h2 className="mb-6 text-xl font-semibold text-slate-900">
        Interview Performance
      </h2>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={interviewPerformance}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="interview" />

            <YAxis />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="score"
              stroke="#9333ea"
              fill="#c4b5fd"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default InterviewPerformance;