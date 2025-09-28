import React, { use } from 'react';
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const MarksChart = ({markPromise}) => {
    const markDataRes = use(markPromise);
    const marksData = markDataRes.data;
    // console.log(marksData);

    // Data processing for the chart
    const marksChartData = marksData.map(studentData => { const student = {
        id: studentData.id,
        name: studentData.name,
        html: studentData.html,
        css: studentData.css,
        js: studentData.javascript
    }
    const avg = (student.html + student.css + student.js) / 3;
    student.avg = avg;
    return student;
    })
    console.log(marksChartData);

    return (
        <div className='mb-5'>
            <BarChart width={700} height={300} data={marksChartData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Legend></Legend>
                <Bar dataKey="html" fill='red'></Bar>
                <Bar dataKey="css" fill='skyblue'></Bar>
                <Bar dataKey="js" fill='#f5cb42'></Bar>
                <Bar dataKey="avg" fill='#2bc454'></Bar>
            </BarChart>
        </div>
    );
};

export default MarksChart;