import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import BARS_DATA from "../../constants/barsData.ts";
import React from "react";

type BarsChartsProps = {
  title: string;
  icon: React.ReactNode;
  subtitle?: string;
  bgColor: string;
  textColor: string;
};

const BarsCharts = ({ title, icon, subtitle, bgColor, textColor }: BarsChartsProps) => {
  return (
    <div className={`card ${bgColor}`} >
      <div className="card-header">
      <div className="card-icon">
          {icon}
        </div>
        <div className="card-text">
          <h2 className="card-title">{title}</h2>
          <p className="card-paragraph">{subtitle}</p>
        </div>
      </div>

      <ResponsiveContainer width="100%" height="100%" className="text-teal-300 transition-all cursor-pointer">
        <BarChart width={500} height={300} data={BARS_DATA} barSize={10} className="cursor-pointer">
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 20, right: 20 }}
            className="text-sm"
            stroke={textColor}
          />
          <YAxis className="text-sm" stroke={textColor}/>
          <Tooltip />
          <CartesianGrid strokeDasharray="2 2" stroke="#a3a3a3" />
          <Bar
            dataKey="sales"
            className="fill-zinc-500 hover:fill-teal-300 cursor-pointer transition-all"
            radius={50}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarsCharts;
