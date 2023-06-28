import React from "react";
import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import "./SavingSummaryChart.scss";
import BaseTitle from "@/components/shared/BaseTitle";

const data = [
  {
    name: "May 01",
    lastManth: 4000,
    thisManth: 6400,
    amt: 2400,
  },
  {
    name: "May 05",
    lastManth: 3000,
    thisManth: 4400,
    amt: 2400,
  },
  {
    name: "May 10",
    lastManth: 1000,
    thisManth: 5400,
    amt: 2400,
  },
  {
    name: "May 15",
    lastManth: 2000,
    thisManth: 3400,
    amt: 2400,
  },
  {
    name: "May 20",
    lastManth: 4400,
    thisManth: 4400,
    amt: 2400,
  },
  {
    name: "May 25",
    lastManth: 2060,
    thisManth: 5400,
    amt: 2400,
  },
  {
    name: "May 30",
    lastManth: 1000,
    thisManth: 3400,
    amt: 2400,
  },
];

const SavingSummaryChart = () => {
  const formatYAxisValue = value => {
    return `$${value}`;
  };

  return (
    <div className="savingSummaryChart">
      <BaseTitle
        text="Saving Summary"
        fontSize="16"
        classes="savingSummaryChart__title"
      />
      <AreaChart
        width={670}
        height={180}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid
          horizontal={false}
          strokeDasharray="3 3"
        />
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={{ display: "none" }}
          tick={{ fill: "#9F9F9F" }}
          tickMargin={10}
        />
        <YAxis
          axisLine={false}
          tick={{ fill: "#9F9F9F" }}
          tickLine={{ display: "none" }}
          tickFormatter={formatYAxisValue}
          tickMargin={5}
        />
        <Tooltip />
        <defs>
          <linearGradient
            id="colorUv"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop
              offset="20%"
              stopColor="rgba(41, 157, 145, 0.5)"
              stopOpacity={0.8}
            />
            <stop
              offset="80%"
              stopColor="rgba(217, 217, 217, 0)"
              stopOpacity={0}
            />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="thisManth"
          stroke="rgba(41, 157, 145, 0.5)"
          strokeWidth={2}
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        {true && (
          <Area
            type="monotone"
            dataKey="lastManth"
            stroke="rgba(209, 209, 209, 1)"
            strokeWidth={2}
            strokeDasharray="6 2"
            fillOpacity={1}
            fill="transparent"
          />
        )}
      </AreaChart>
    </div>
  );
};

export default SavingSummaryChart;
