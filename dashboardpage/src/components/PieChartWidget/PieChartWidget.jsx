// src/components/PieChartWidget.js

import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const PieChartWidget = ({ data }) => {
  if (!data) return <p style={{color:'black'}}>No data available</p>;

  // Convert the data into an array suitable for the pie chart
  const pieData = Object.keys(data).map((key, index) => ({
    name: key,
    value: data[key],
    color: COLORS[index % COLORS.length]
  }));

  return (
    
    <PieChart width={250} height={250}>
      <Pie
        data={pieData}
        cx={125}
        cy={110}
        labelLine={false}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {pieData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default PieChartWidget;
