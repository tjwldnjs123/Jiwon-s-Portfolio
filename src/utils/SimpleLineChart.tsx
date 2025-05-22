import React, { useEffect, useState } from "react";
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
  const { cx, cy, index, activeIndex, onClick } = props;
  if (cx === undefined || cy === undefined) return null;

  const isActive = index === activeIndex;
  const iconSize = isActive ? 30 : 20;

  return (
    <foreignObject
      x={cx - iconSize / 2}
      y={cy - iconSize / 2}
      width={iconSize}
      height={iconSize}
      onClick={onClick}
      style={{ cursor: "pointer" }}
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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };
    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const activeItem = activeIndex !== null ? data[activeIndex] : null;

  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 50, right: 30, bottom: 40, left: 35 }}
          onMouseMove={(e) => {
            if (!isMobile && e.activeTooltipIndex !== undefined && e.activePayload) {
              setActiveIndex(e.activeTooltipIndex);
              onHover?.(e.activePayload[0].payload.description);
            }
          }}
          onMouseLeave={() => {
            if (!isMobile) {
              setActiveIndex(null);
              onHover?.("");
            }
          }}
        >
          <XAxis
            dataKey="name"
            // axisLine={false}
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
            width={40}
            axisLine={true}
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


          {!isMobile && <Tooltip content={<CustomTooltip />} />}
          <Line
            type="monotone"
            dataKey="성장률"
            stroke="#3b82f6"
            strokeWidth={3}
            dot={(props) => (
              <CustomDot
                {...props}
                activeIndex={activeIndex}
                onClick={() => {
                  if (isMobile) {
                    setActiveIndex(props.index);
                    onHover?.(data[props.index].description);
                  }
                }}
              />
            )}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SimpleLineChart;
