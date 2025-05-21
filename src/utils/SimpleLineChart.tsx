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
    return (
      <div className="p-2 bg-white border rounded shadow text-sm">
        <strong>{payload[0].payload.name}</strong>
        <p>{payload[0].payload.description}</p>
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
        <XAxis dataKey="name" />
        <YAxis domain={[0, 100]} />

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
