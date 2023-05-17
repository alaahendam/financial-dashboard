import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
const DynamicApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const multipleRadialbarChart = () => {
  const mood = useSelector((state) => state.mood.mood);
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
          background: "transparent"
        },
        track: {
          show: true,
          background: "#40475D",
          strokeWidth: "10%",
          opacity: 1,
          margin: 3 // margin is in pixels
        }
      }
    },
    series: [71, 63],
    labels: ["Device 1", "Device 2"],
    legend: {
      show: true,
      labels: {
        colors: mood === "dark" ? "white" : "black" // Change the font color of all legend labels here
      },
      
      formatter: function (val, opts) {
        return val + " - " + opts.w.globals.series[opts.seriesIndex] + "%";
      }
    },
    fill: {
      
      gradient: {
        shade: "dark",
        type: "horizontal",
        shadeIntensity: 0.5,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100]
      }
    },
    colors: ["#A68BEF", "#47D9E3", "#F847F1"],
  };
  const series=[71, 63,88]
  return (
    <div className="area" style={{ backgroundColor: mood === "light" ? "white" : "#40375C"}}>
      {typeof window !== "undefined" && (
        <DynamicApexChart
          options={options}
          series={series}
          type="radialBar"
          width="700"
          height="200"
        />
      )}
    </div>
  );
};
export default multipleRadialbarChart;
