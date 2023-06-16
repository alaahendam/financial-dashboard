import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
const DynamicApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const SingleAreaChart = () => {
  const chartData = useSelector(
    (state) => state.chartsData.singleAreaChartData
  );
  const series = [
    {
      name: "STOCK ABC",
      data: chartData,
    },
  ];
  const options = {
    chart: {
      type: "area",
      height: 350,
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false, // Hide the download data toggler
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    grid: {
      show: false, // Hide background lines
    },
    labels: seriesData.monthDataSeries1.dates,
    xaxis: {
      type: "datetime",
      labels: {
        show: false, // Hide y-axis labels
      },
      axisBorder: {
        show: false, // Hide x-axis footer line
      },
      axisTicks: {
        show: false, // Hide x-axis footer ticks
      },
      stroke: {
        show: false, // Hide x-axis footer line
      },
    },
    yaxis: {
      opposite: true,
      labels: {
        show: false, // Hide y-axis labels
      },
    },
    legend: {
      horizontalAlign: "left",
    },
    colors: ["#A68BEF"],
  };

  return (
    <div>
      {typeof window !== "undefined" && (
        <DynamicApexChart
          options={options}
          series={series}
          type="area"
          width={200}
          height={150}
        />
      )}
    </div>
  );
};
export default SingleAreaChart;
