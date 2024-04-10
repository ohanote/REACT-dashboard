import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import BARS_DATA from "../../constants/barsData";

type LinesChartsProps = {
  title: string;
  icon: string;
  subtitle?: string;
  bgColor: string;
  textColor: string;
};

const LinesCharts = ({
  title,
  icon,
  subtitle,
  bgColor,
  textColor,
}: LinesChartsProps) => {
  return (
    <div className={`card ${bgColor}`}>
      <div className="card-header">
        <div className="card-icon">
          <img src={icon} alt={title} width={48} />
        </div>
        <div className="card-text">
          <h2 className="card-title">{title}</h2>
          <p className="card-paragraph">{subtitle}</p>
        </div>
      </div>
      <ResponsiveContainer
        width="100%"
        height="100%"
        className="text-teal-300 transition-all cursor-pointer"
      >
        <LineChart
          width={500}
          height={300}
          data={BARS_DATA}
          barSize={10}
          className="cursor-pointer"
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 20, right: 20 }}
            className="text-sm"
            stroke={textColor}
          />
          <YAxis className="text-sm" stroke={textColor} />
          <Tooltip />
          <CartesianGrid strokeDasharray="2 2" stroke="#a3a3a3" />
          <Line
            dataKey="sales"
            className="fill-zinc-500 hover:fill-teal-300 cursor-pointer transition-all"
            type="monotone"
            stroke={textColor}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LinesCharts;
