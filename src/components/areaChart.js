import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const DynamicApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const AreaChart = () => {
  const options = {
    xaxis: {
      categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    colors: ["#7A47F8", "#47D9E3", "#F847F1"],
    dataLabels: {
      enabled: false,
    },
  };
  const series = [
    {
      name: "series-1",
      data: [30, 40, 25, 50, 49, 21, 70, 51],
    },
    {
      name: "series-2",
      data: [23, 12, 54, 61, 32, 56, 81, 19],
    },
    {
      name: "series-3",
      data: [10, 2, 54, 40, 22, 30, 50, 7],
    },
  ];
  return (
    <div className="area">
      {typeof window !== "undefined" && (
        <DynamicApexChart
          options={options}
          series={series}
          type="area"
          width="700"
          height="200"
        />
      )}
    </div>
  );
};
export default AreaChart;
