import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";

const DynamicApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const PieChart = () => {
  const mood = useSelector((state) => state.mood.mood);
  const chartData = useSelector((state) => state.chartsData.pieChartData);
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
        colors: mood === "dark" ? "white" : "black",
      },
    },
  };

  return (
    <div
      className="area"
      style={{
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
          series={chartData}
          type="donut"
          height="300"
        />
      )}
    </div>
  );
};

export default PieChart;
