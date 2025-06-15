import React from "react";
import {
  LineChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const UIChart = ({
  data = [],
  xKey = "name",
  lineDataKey = "line",
  barDataKey = "bar",
  dotDataKey = "dot",
  height = 350,
  showLine = true,
  showBar = true,
  showDot = true,
}) => {
  return (
    <div className="w-full h-full">
      <h3 className="text-ml font-bold text-gray-800 mb-4">Performance Overview</h3>

      <ResponsiveContainer width="100%" height={height}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="4 4" stroke="#e5e7eb" />
          <XAxis
            dataKey={xKey}
            tick={{ fill: "#6b7280", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: "#6b7280", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              border: "1px solid #e5e7eb",
              borderRadius: "0.5rem",
              fontSize: "14px",
              color: "#111827",
            }}
            cursor={{ strokeDasharray: "3 3" }}
          />
          <Legend wrapperStyle={{ fontSize: 14 }} />

          {showBar && barDataKey && (
            <Bar dataKey={barDataKey} fill="#6366f1" barSize={30} radius={[6, 6, 0, 0]} />
          )}

          {showLine && lineDataKey && (
            <Line
              type="monotone"
              dataKey={lineDataKey}
              stroke="#10b981"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 6 }}
            />
          )}

          {showDot && dotDataKey && (
            <Line
              type="monotone"
              dataKey={dotDataKey}
              stroke="#f59e0b"
              strokeWidth={0}
              dot={{ r: 5, fill: "#f59e0b" }}
              activeDot={{ r: 7, stroke: "#fbbf24", strokeWidth: 2 }}
              legendType="circle"
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UIChart;
