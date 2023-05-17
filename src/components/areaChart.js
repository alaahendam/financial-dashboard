import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
const DynamicApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const AreaChart = () => {
  const mood = useSelector((state) => state.mood.mood);
  const options = {
    xaxis: {
      categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      labels: {
        style: {
          colors: mood === "dark" ? "white" : "black", // Change the font color of the x-axis labels here
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: mood === "dark" ? "white" : "black", // Change the font color of the x-axis labels here
        },
      },
    },
    legend: {
      labels: {
        colors: mood === "dark" ? "white" : "black", // Change the font color of all legend labels here
      },
    },
    colors: ["#A68BEF", "#47D9E3", "#F847F1"],
    dataLabels: {
      enabled: false,
    },
  };
  const series = [
    {
      name: "series-1",
      data: [30, 40, 25, 50, 49, 21, 70, 51],
    },
    {
      name: "series-2",
      data: [23, 12, 54, 61, 32, 56, 81, 19],
    },
    {
      name: "series-3",
      data: [10, 2, 54, 40, 22, 30, 50, 7],
    },
  ];
  return (
    <div
      className="area"
      style={{ backgroundColor: mood === "light" ? "white" : "#40375C" }}
    >
      {typeof window !== "undefined" && (
        <DynamicApexChart
          options={options}
          series={series}
          type="area"
          width="450"
          height="200"
        />
      )}
    </div>
  );
};
export default AreaChart;
