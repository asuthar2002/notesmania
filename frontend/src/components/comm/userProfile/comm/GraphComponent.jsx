import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
} from "recharts";

const data = [
  { month: "Jan", value: 2909 },
  { month: "Feb", value: 1259 },
  { month: "Mar", value: 950 },
  { month: "Apr", value: 1563 },
  { month: "May", value: 1825 },
  { month: "Jun", value: 2526 },
  { month: "Jul", value: 2010 },
  { month: "Aug", value: 3260 },
  { month: "Sep", value: 3005 },
  { month: "Oct", value: 3860 },
  { month: "Nov", value: 4039 },
  { month: "Dec", value: 3500 }, // Added December value, you can adjust it
];

const GraphComponent = () => {
  return (
    <div className="max-w-5xl mx-auto rounded-lg border mt-10 border-gray-200 p-6 bg-white">
      <div className="flex flex-wrap gap-x-20 gap-y-6 mb-6">
        <div>
          <div className="inline-block bg-gray-800 text-white text-xs font-semibold rounded px-2 py-1 mb-1 select-none">
            Current Month
          </div>
          <h2 className="text-2xl font-extrabold text-blue-700 mb-1">$35000</h2>
          <div className="flex items-center space-x-1 text-sm font-medium">
            <span className="text-green-500 font-semibold">
              0.20% <i className="fas fa-arrow-up" />
            </span>
            <span className="text-gray-600">vs last month</span>
          </div>
        </div>
        <div>
          <div className="inline-block bg-gray-800 text-white text-xs font-semibold rounded px-2 py-1 mb-1 select-none">
            Last Month
          </div>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-1">$28000</h2>
          <div className="flex items-center space-x-1 text-sm font-medium">
            <span className="text-red-500 font-semibold">
              0.10% <i className="fas fa-arrow-down" />
            </span>
            <span className="text-gray-600">Then last month</span>
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={240}>
        <LineChart data={data} margin={{ top: 20, right: 40, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#D1D5DB" opacity={0.3} />
          <XAxis
            dataKey="month"
            stroke="#9CA3AF"
            tickLine={false}
            axisLine={{ stroke: "#D1D5DB", opacity: 0.3 }}
            fontSize={12}
            fontWeight={500}
            tick={{ fill: "#9CA3AF", opacity: 0.7 }}
          />
          <YAxis
            stroke="#9CA3AF"
            tickLine={false}
            axisLine={{ stroke: "#D1D5DB", opacity: 0.3 }}
            fontSize={10}
            tickCount={6}
            tick={{ fill: "#9CA3AF", opacity: 0.3 }}
            domain={[0, 'dataMax + 500']}
          />
          <Tooltip
            contentStyle={{ backgroundColor: "#1D4ED8", borderRadius: "8px", border: "none" }}
            labelStyle={{ color: "#fff" }}
            itemStyle={{ color: "#fff" }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#1D4ED8"
            strokeWidth={3}
            dot={{ r: 6, strokeWidth: 3, fill: "#1D4ED8", stroke: "#1E40AF" }}
            activeDot={{ r: 8 }}
          >
            <LabelList
              dataKey="value"
              position="top"
              offset={10}
              style={{
                fill: "#fff",
                backgroundColor: "#1D4ED8",
                borderRadius: 4,
                padding: "2px 6px",
                fontWeight: 600,
                fontSize: 12,
              }}
              formatter={(val) => val.toLocaleString()}
            />
          </Line>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraphComponent;
