import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { BiWalk } from "react-icons/bi"; 

type DataItem = {
  name: string;
  성장률: number;
  description: string;
};

interface Props {
  data: DataItem[];
  onHover?: (desc: string) => void;
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload?.length) {
    const { name, description } = payload[0].payload;

    return (
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg p-4 max-w-xs text-left">
        <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
          📌 {name}
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
    );
  }
  return null;
};



const CustomDot: React.FC<any> = (props) => {
  const { cx, cy, index, activeIndex } = props;
  if (cx === undefined || cy === undefined) return null;

  const isActive = index === activeIndex;
  const iconSize = isActive ? 30 : 20;

  return (
    <foreignObject
      x={cx - iconSize / 2}
      y={cy - iconSize / 2}
      width={iconSize}
      height={iconSize}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BiWalk size={iconSize} color={isActive ? "#3b82f6" : "#94a3b8"} />
      </div>
    </foreignObject>
  );
};

const SimpleLineChart: React.FC<Props> = ({ data, onHover }) => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{ top: 20, right: 30, bottom: 40, left: 50 }} 
        onMouseMove={(e) => {
          if (e.activeTooltipIndex !== undefined && e.activePayload) {
            setActiveIndex(e.activeTooltipIndex);
            onHover?.(e.activePayload[0].payload.description);
          }
        }}
        onMouseLeave={() => {
          onHover?.("");
          setActiveIndex(null);
        }}
      >
        <XAxis
        dataKey="name"
        axisLine={false}
        tickLine={false}
        tick={{ fontSize: 12 }}
        label={{
          value: "(년도)",
          position: "insideBottomRight",
          offset: -8,
          style: { fill: "#6B7280", fontSize: 12 },
        }}
      />

      <YAxis
        domain={[0, 100]}
        width={50}
        axisLine={false}
        tickLine={false}
        tick={{ fontSize: 12 }}
        label={{
          value: "성장률(%)",
          angle: 0, 
          position: "top",
          offset: 10, 
          style: { fill: "#6B7280", fontSize: 12 },
        }}
      />



        <Tooltip content={<CustomTooltip />} />
        <Line
          type="monotone"
          dataKey="성장률"
          stroke="#3b82f6"
          strokeWidth={3}
          dot={(props) => <CustomDot {...props} activeIndex={activeIndex} />}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SimpleLineChart;
