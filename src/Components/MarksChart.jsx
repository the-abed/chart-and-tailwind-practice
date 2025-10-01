import React, { use } from "react"; // 
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"; // Import Recharts components for the bar chart

// MarksChart component receives a promise (markPromise) that resolves to student marks data
const MarksChart = ({ markPromise }) => {
  // use() suspends rendering until the promise resolves (React 18+ Suspense feature)
  const markDataRes = use(markPromise);
  const marksData = markDataRes.data; // Extract the actual data from the resolved result
  // console.log(marksData); // Optional: check raw data from the API or promise

  // Process the marks data to shape it for the chart
  const marksChartData = marksData.map((studentData) => {
    // Create a new student object with needed fields
    const student = {
      id: studentData.id,
      name: studentData.name,
      html: studentData.html,
      css: studentData.css,
      js: studentData.javascript,
    };
    // Calculate average marks and add as a new field
    const avg = (student.html + student.css + student.js) / 3;
    student.avg = avg;

    return student; // Return processed student object
  });

  console.log(marksChartData); // Optional: check data formatted for the chart

  return (
    <div className="mb-5" style={{ width: "100%", height: 300 }}>
      {/* BarChart component from Recharts */}
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={700} height={300} data={marksChartData}>
        {/* X-axis represents student names */}
        <XAxis dataKey="name"></XAxis>
        {/* Y-axis represents marks */}
        <YAxis></YAxis>
        {/* Tooltip shows details when hovering over bars */}
        <Tooltip></Tooltip>
        {/* Legend displays which color represents which subject */}
        <Legend></Legend>
        {/* Each Bar represents a subject or average */}
        <Bar dataKey="html" fill="red"></Bar>
        <Bar dataKey="css" fill="skyblue"></Bar>
        <Bar dataKey="js" fill="#f5cb42"></Bar>
        <Bar dataKey="avg" fill="#2bc454"></Bar>
      </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MarksChart;
