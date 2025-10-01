import React from "react";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const resultData = [
  { id: 1, name: "Alice", html: 85, css: 78, javascript: 92 },
  { id: 2, name: "Bob", html: 74, css: 81, javascript: 69 },
  { id: 3, name: "Charlie", html: 90, css: 88, javascript: 95 },
  { id: 4, name: "Diana", html: 67, css: 72, javascript: 80 },
  { id: 5, name: "Ethan", html: 88, css: 91, javascript: 85 },
  { id: 6, name: "Fiona", html: 70, css: 65, javascript: 60 },
  { id: 7, name: "George", html: 95, css: 89, javascript: 93 },
  { id: 8, name: "Hannah", html: 82, css: 77, javascript: 84 },
  { id: 9, name: "Ian", html: 60, css: 55, javascript: 65 },
  { id: 10, name: "Julia", html: 78, css: 85, javascript: 80 },
];

const Chart = () => {
  return (
    <div className="mb-5" style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={600} height={300} data={resultData}>
        <Line dataKey="html" stroke="red"></Line>
        <Line dataKey="css" stroke="blue"></Line>
        <Line dataKey="javascript" stroke="#f5cb42"></Line>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
      </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
