import React from "react";
import Chart from "react-apexcharts";

export default function BarChart() {
  const options = {
    chart: {
      type: "bar",
      height: 240,
      toolbar: { show: false },
      zoom: { enabled: false },
      pan: { enabled: false },
    },
    xaxis: {
      categories: ["1", "4", "8", "12", "14", "16", "18"],
      labels: {
        style: {
          colors: "#a3aed0",
          fontSize: "16px",
        },
      },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      show: false,
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        borderRadiusApplication: "end", // فقط بالای میله گرد
        columnWidth: "40%",
      },
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    legend: { show: false },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 0.5,
        gradientToColors: ["#BFB6FB"], // رنگ پایان
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    colors: ["#461DFD"], // رنگ شروع
  };

  const series = [
    {
      data: [20, 30, 40, 20, 45, 50, 40],
    },
  ];

  return <Chart options={options} series={series} type="bar" height={300} />;
}
