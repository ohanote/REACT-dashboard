import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import BARS_DATA from "../../constants/barsData";
import React from "react";

const COLORS = [
  "#f87171",
  "#fb923c",
  "#fbbf24",
  "#a3e635",
  "#22c55e",
  "#14b8a6",
  "#8b5cf6",
];

type CustomPieChartsProps = {
  title: string;
  icon: React.ReactNode;
  subtitle?: string;
  bgColor: string;
  textColor: string;
};

const CustomPieCharts = ({
  title,
  icon,
  subtitle,
  bgColor,
  textColor,
}: CustomPieChartsProps) => {
  return (
    <div className={`card ${bgColor}`}>
      <div className="card-header">
        <div className="card-icon">
          {icon}
        </div>
        <div className="card-text">
          <h2 className="card-title">{title}</h2>
          <p className="card-paragraph">{subtitle}</p>
        </div>
      </div>
      <ResponsiveContainer
        width="100%"
        height="100%"
        className="responsiveContainer"
      >
        <PieChart width={300} height={300}>
          <Pie
            data={BARS_DATA}
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={50}
            fill={textColor}
            paddingAngle={5}
            dataKey="sales"
          >
            {BARS_DATA.map((e, index) => (
              <Cell
                key={`cell-${e.name}`}
                fill={COLORS[index % COLORS.length]}
                stroke="none"
                className="focus:outline-none"
              />
            ))}
          </Pie>
          <Tooltip /> 
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomPieCharts;
