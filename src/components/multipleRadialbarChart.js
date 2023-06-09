import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
const DynamicApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const MultipleRadialbarChart = () => {
  const mood = useSelector((state) => state.mood.mood);
  const chartData = useSelector(
    (state) => state.chartsData.multipleRadialbarChartData
  );
  const options = {
    chart: {
      type: "radialBar",
      height: 250,
    },
    plotOptions: {
      radialBar: {
        inverseOrder: false,
        hollow: {
          margin: 5,
          size: "48%",
          background: "transparent",
        },
        track: {
          show: true,
          background: "#40475D",
          strokeWidth: "10%",
          opacity: 1,
          margin: 3, // margin is in pixels
        },
      },
    },
    series: [71, 63],
    labels: ["Device 1", "Device 2"],
    legend: {
      show: true,
      labels: {
        colors: mood === "dark" ? "white" : "black", // Change the font color of all legend labels here
      },

      formatter: function (val, opts) {
        return val + " - " + opts.w.globals.series[opts.seriesIndex] + "%";
      },
    },
    fill: {
      gradient: {
        shade: "dark",
        type: "horizontal",
        shadeIntensity: 0.5,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    colors: ["#A68BEF", "#47D9E3", "#F847F1"],
  };
  return (
    <div
      className="area"
      style={{
        //backgroundColor: mood === "light" ? "white" : "#40375C",
        backgroundColor: mood === "light" ? "white" : "#352D49",
        width: "100%",
      }}
    >
      {typeof window !== "undefined" && (
        <DynamicApexChart
          options={options}
          series={chartData}
          type="radialBar"
          width="325"
          height="200"
        />
      )}
    </div>
  );
};
export default MultipleRadialbarChart;
