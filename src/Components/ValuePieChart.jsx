import React from "react";
import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Direct", value: 400 },
  { name: "Social Media", value: 300 },
  { name: "Organic Search", value: 300 },
  { name: "Referral", value: 200 },
  { name: "Email Campaigns", value: 100 },
];

const ValuePieChart = () => {
  return (
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ValuePieChart;
