import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
const DynamicApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const radialbarChart = () => {
  const mood = useSelector((state) => state.mood.mood);
  const options = {
    chart: {
      height: 350,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "70%",
        },
        dataLabels: {
          name: {
            color: mood === "dark" ? "white" : "black", // Change the font color of the label inside the hollow center here
          },
          value: {
            color: mood === "dark" ? "white" : "black",
            show: true,
          },
        },
      },
    },
    labels: ["Cricket"],
    colors: ["#A68BEF"],
  };
  const series = [75];
  return (
    <div
      className="area"
      style={{
        width: "30%",
      }}
    >
      {typeof window !== "undefined" && (
        <DynamicApexChart
          options={options}
          series={series}
          type="radialBar"
          height="160"
        />
      )}
    </div>
  );
};
export default radialbarChart;
