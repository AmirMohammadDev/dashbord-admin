import Chart from "react-apexcharts";

export default function MyPieChart({series}) {
    const options = {
        chart: {
            type: "pie",
        },
        labels: ["Your files", "System", "Empty"], // اسم هر بخش
        colors: ["#4318FF", "#6AD2FF", "#EFF4FB"], // رنگ‌ها دقیقاً مثل SVG
        stroke: {
            width: 2,
            colors: ["#ffffff"], // رنگ حاشیه
        },
        dataLabels: {
            enabled: false,
        },
        legend: { show: false },
        tooltip: {
            y: {
                formatter: (val) => val, // مقادیر همونطور نمایش داده بشه
            },
        },
    };

    return (
        <div className="center">
            <Chart options={options} series={series} type="pie" width="200" />
        </div>
    );
}
