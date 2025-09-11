import Chart from "react-apexcharts";

export default function LineChartModern() {
    const options = {
        chart: {
            type: "line",
            toolbar: { show: false },
            zoom: { enabled: false },
            dropShadow: {
                enabled: true,
                top: 8,
                left: 0,
                blur: 6,
                opacity: 0.15,
            },
        },
        stroke: {
            curve: "smooth",
            width: 5,
        },
        colors: ["#4318ff", "#39b8ff"],
        markers: {
            size: 0,
            hover: { size: 6 },
        },
        grid: {
            borderColor: "rgba(0,0,0,0)",
            strokeDashArray: 4,
            yaxis: {
                lines: { show: true },
            },
            xaxis: {
                lines: { show: false },
            },
        },
        xaxis: {
            categories: ["SEP", "OCT", "NOV", "DEC", "JAN", "FEB"],
            labels: {
                style: {
                    colors: "#a3aed0",
                    fontSize: "13px",
                    fontWeight: 500,
                },
            },
            axisBorder: { show: false },
            axisTicks: { show: false },
        },
        yaxis: {
            show: false,
        },
        tooltip: {
            theme: "dark",
            style: { fontSize: "13px" },
        },
        legend: {
            show: true,
            position: "top",
            horizontalAlign: "right",
            labels: {
                colors: "#5b6b8b",
            },
        },
        fill: {
            type: "gradient",
            gradient: {
                shade: "dark",
                gradientToColors: ["#7551ff", "#00f2fe"],
                shadeIntensity: 1,
                type: "horizontal",
                opacityFrom: 0.9,
                opacityTo: 0.9,
                stops: [0, 100],
            },
        },
    };

    const series = [
        {
            name: "Revenue",
            data: [45, 64, 35, 70, 40, 85],
        },
        {
            name: "Profit",
            data: [80, 40, 70, 55, 90, 50],
        },
    ];

    return (
        <div className=" w-full">
            <Chart options={options} series={series} type="line" height={300}/>
        </div>
    );
}
