import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const DynamicApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const ColumnChart = () => {
  const mood = useSelector((state) => state.mood.mood);
  const chartData = useSelector((state) => state.chartsData.columnChartData);

  const options = {
    chart: {
      type: "bar",
      height: 350,
    },
    colors: ["#A68BEF", "#47D9E3", "#F847F1"],
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
      labels: {
        style: {
          colors: mood === "dark" ? "white" : "black", // Change the font color of the x-axis labels here
        },
      },
    },
    yaxis: {
      title: {
        text: "$ (thousands)",
      },
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
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        },
      },
    },
  };

  return (
    <div
      className="area"
      style={{
        backgroundColor: mood === "light" ? "white" : "#352D49",
        borderRadius: "7px",
        width: "100%",
        height: "100%",
      }}
    >
      {typeof window !== "undefined" && (
        <DynamicApexChart
          options={options}
          series={chartData}
          type="bar"
          height="270"
        />
      )}
    </div>
  );
};

export default ColumnChart;
