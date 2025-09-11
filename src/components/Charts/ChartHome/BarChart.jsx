import Chart from "react-apexcharts";

export default function BarChart() {
    const options = {
        chart: {
            type: "bar",
            stacked: true,
            height: 240,
            toolbar: { show: false },
            zoom: { enabled: false },

            pan: { enabled: false },
        },
        plotOptions: {
            bar: {
                borderRadius: 3,
                columnWidth: "20%",
                 borderRadiusApplication: "end", 
            },
            
        },
        xaxis: {
            categories: ["17", "18", "19", "20", "21", "22", "23", "24"],
            labels: {
                style: {
                    colors: "#a3aed0",
                    fontSize: "16px",
                },
            },
            axisBorder: { show: false }, // حذف خط محور X
            axisTicks: { show: false },
        },
        yaxis: {
            show: false,
        },
        colors: ["#5D46C4", "#80D9FF", "#E5ECF9"], // رنگ هر سری
        grid: {
            show: false,
        },
        dataLabels: {
            enabled: false,
        },
        legend: { show: false },
    };

    const series = [
        { name: "PRODUCT A", data: [40, 55, 41, 67, 22, 43, 29, 8] },
        { name: "PRODUCT B", data: [30, 23, 20, 8, 13, 27, 43, 24] },
        { name: "PRODUCT C", data: [15, 17, 15, 15, 21, 14, 12, 45] },
    ];

    return (
        <div className="w-auto h-[300px] max-lg:h-[400px] focus:outline-none">
            <Chart options={options} series={series} type="bar" height="100%" />
        </div>
    );
}
