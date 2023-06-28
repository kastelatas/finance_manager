import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import getRandomNumber from "@/helpers/getRandomNumber";
import BaseTitle from "@/components/shared/BaseTitle";
import "./VerticalBarChart.scss";
import { useLocation } from "react-router-dom";
import { RoutesEnum } from "@/constants/emun/routes";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    x: {
      barPercentage: 3,
      display: true,
      grid: {
        display: false,
      },
      position: "bottom",
      ticks: {
        color: "#9F9F9F",
        font: {
          size: 14,
          weight: "normal",
        },
      },
    },
    y: {
      display: true,
      position: "left",
      grid: {
        offset: true,
      },
      ticks: {
        color: "#9F9F9F",
        font: {
          size: 14,
          weight: "normal",
        },
        callback: function (value, index, values) {
          if (value >= 1000) {
            return "$" + value / 1000 + "k";
          }
          return "$" + value;
        },
      },
      gridLines: {
        display: false,
        color: "red",
      },
    },
  },
  plugins: {
    legend: {
      position: "top",
      align: "end",
      boxWidth: 5,
      labels: {
        font: {
          size: 12,
        },
        boxWidth: 16,
        boxHeight: 10,
      },
    },
  },
};

const labelsWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const labelsMonth = [
  "Jan",
  "Fab",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const getData = period => {
  const labels = period === "week" ? labelsWeek : labelsMonth;

  return {
    labels,
    datasets: [
      {
        label: "This week",
        data: labels.map(() => getRandomNumber(0, 250000)),
        backgroundColor: "#299D91",
        barThickness: 15,
        borderRadius: 5,
      },
      {
        label: "Last week",
        data: labels.map(() => getRandomNumber(0, 250000)),
        backgroundColor: "#E8E8E8",
        barThickness: 15,
        borderRadius: 5,
      },
    ],
  };
};

const VerticalBarChart = ({ period }) => {
  const { pathname } = useLocation();
  const isExpensesPage = pathname === RoutesEnum.Expenses;

  return (
    <div className="VerticalBarChart">
      {!isExpensesPage && (
        <BaseTitle
          text={"Statistics"}
          fontSize={"22"}
          classes={"title"}
        />
      )}
      <Bar
        options={options}
        data={getData(period)}
        className="BarChart"
      />
    </div>
  );
};

export default VerticalBarChart;
