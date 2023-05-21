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
      style={{
        //backgroundColor: mood === "light" ? "white" : "#40375C",
        backgroundColor: mood === "light" ? "white" : "#352D49",
        borderRadius: "7px",
        width: "33%",
        height: "93%",
        display: "flex",
        alignItems: "center",
      }}
    >
      {typeof window !== "undefined" && (
        <DynamicApexChart
          options={options}
          series={series}
          type="donut"
          height="300"
        />
      )}
    </div>
  );
};
export default pieChart;
