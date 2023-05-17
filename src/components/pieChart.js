import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
const DynamicApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const pieChart = () => {
  const mood = useSelector((state) => state.mood.mood);
  const options = {
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    legend: {
      labels: {
        colors: mood === "dark" ? "white" : "black", // Change the font color of all legend labels here
      },
    },
  };
  const series = [44, 55, 41, 17, 15];
  return (
    <div
      className="area"
      style={{ backgroundColor: mood === "light" ? "white" : "#40375C" }}
    >
      {typeof window !== "undefined" && (
        <DynamicApexChart
          options={options}
          series={series}
          type="donut"
          width="400"
          height="200"
        />
      )}
    </div>
  );
};
export default pieChart;
