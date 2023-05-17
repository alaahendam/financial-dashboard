import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
const DynamicApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const columnChart = () => {
  const mood = useSelector((state) => state.mood.mood);
  const options = {
    chart: {
      type: 'bar',
      height: 350
    },
    colors: ["#A68BEF", "#47D9E3", "#F847F1"],
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      labels: {
        style: {
          colors: mood === "dark" ? "white" : "black" // Change the font color of the x-axis labels here
        }
      }
    },
    yaxis: {
      title: {
        text: '$ (thousands)'
      }
      ,labels: {
        style: {
          colors: mood === "dark" ? "white" : "black" // Change the font color of the x-axis labels here
        }
      }
    },
    legend: {
        labels: {
          colors: mood === "dark" ? "white" : "black" // Change the font color of all legend labels here
        }
      },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands"
        }
      }
    }
  }
  const series = [{
    name: 'Net Profit',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  }, {
    name: 'Revenue',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
  }, {
    name: 'Free Cash Flow',
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
  }]
  return (
    <div className="area" style={{ backgroundColor: mood === "light" ? "white" : "#40375C"}}>
      {typeof window !== "undefined" && (
        <DynamicApexChart
          options={options}
          series={series}
          type="bar"
          width="700"
          height="200"
        />
      )}
    </div>
  );
};
export default columnChart;
