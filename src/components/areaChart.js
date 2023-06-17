import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";

const DynamicApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const AreaChart = () => {
  const mood = useSelector((state) => state.mood.mood);
  const chartData = useSelector((state) => state.chartsData.areaChartData);

  const options = {
    chart: {
      animations: {
        easing: "easeInOutQuad",
      },
    },
    xaxis: {
      categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      labels: {
        style: {
          colors: mood === "dark" ? "white" : "black",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: mood === "dark" ? "white" : "black",
        },
      },
    },
    legend: {
      labels: {
        colors: mood === "dark" ? "white" : "black",
      },
    },
    colors: ["#A68BEF", "#47D9E3", "#F847F1"],
    dataLabels: {
      enabled: false,
    },
  };

  return (
    <div
      className="area"
      style={{
        backgroundColor: mood === "light" ? "white" : "#352D49",
        width: "65%",
        borderRadius: "7px",
        height: "93%",
      }}
    >
      {typeof window !== "undefined" && (
        <DynamicApexChart
          options={options}
          series={chartData}
          type="area"
          width="100%"
          height="200"
        />
      )}
    </div>
  );
};

export default AreaChart;
