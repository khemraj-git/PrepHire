import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

import Card from "../../../components/common/Card";
import { topicDistribution } from "../../../data/analyticsData";

const COLORS = [
  "#2563eb",
  "#16a34a",
  "#f59e0b",
  "#9333ea",
];

const TopicDistribution = () => {
  return (
    <Card className="p-6">
      <h2 className="mb-6 text-xl font-semibold text-slate-900">
        Topic Distribution
      </h2>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={topicDistribution}
              dataKey="value"
              nameKey="name"
              outerRadius={90}
              label
            >
              {topicDistribution.map((entry, index) => (
                <Cell
                  key={entry.name}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />

            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default TopicDistribution;