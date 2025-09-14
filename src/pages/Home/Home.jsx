import { useState } from "react";
import Feature from "../../components/Feature/Feature";
import RealEstateAgentRoundedIcon from "@mui/icons-material/RealEstateAgentRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import AddTaskRoundedIcon from "@mui/icons-material/AddTaskRounded";
import AccountTreeRoundedIcon from "@mui/icons-material/AccountTreeRounded";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import LineChartHome from "./../../components/Charts/ChartHome/LineChart";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import BarChart from "./../../components/Charts/ChartHome/BarChart";
import BarChartTrafik from "./../../components/Charts/ChartHome/BarChartTrafik";
import DataGridTable from "./../../components/Charts/ChartHome/DataGridTable";
import PieChart from "./../../components/Charts/ChartHome/PieChart";
import Calendar from "./../../components/Charts/ChartHome/Calendar";
import CheckBox from "./../../components/Feature/CheckBox";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Task from "../../components/Feature/Task";
import Grid from "../../components/Charts/ChartHome/Grid";

export default function Home() {
    const [series] = useState([63, 25, 12]);
    const items = [
        { Icon: BarChartRoundedIcon, title: "Earnings", caption: "$348.5" },
        { Icon: RealEstateAgentRoundedIcon, title: "Sales", caption: "$574.3" },
        {
            Icon: AttachMoneyRoundedIcon,
            title: "Spend this month",
            caption: "$642.39",
        },
        {
            Icon: AccountBalanceWalletRoundedIcon,
            title: "Your balance",
            caption: "$1000",
        },
        { Icon: AddTaskRoundedIcon, title: "New Tasks", caption: "154" },
        {
            Icon: AccountTreeRoundedIcon,
            title: "Total Projects",
            caption: "2935",
        },
    ];

    return (
        <>
            <div
                className="
    grid 
    gap-5 
    grid-cols-1 
    md:grid-cols-2 
    lg:grid-cols-3 
    [@media(min-width:1600px)]:grid-cols-[repeat(6,1fr)]
  "
            >
                {items.map(({ Icon, title, caption }, index) => {
                    return (
                        <Feature
                            key={index}
                            Icon={Icon}
                            title={title}
                            caption={caption}
                        />
                    );
                })}
            </div>
            <div className="py-5 w-full flex gap-5 flex-col">
                {/* -----------------------------section1----------------------------- */}
               <Section1/>
                {/* -----------------------------section2----------------------------- */}
               
               <Section2 series={series}/>
                {/* -----------------------------section3----------------------------- */}
               
               <Section3/>
            </div>
        </>
    );
}




function Section1() {
    return(
        <>
         <section className="flex w-full gap-5 max-md:flex-col">
                    <div className="flex flex-col bg-white dark:bg-[#111C44] w-[50%] max-md:w-full rounded-2xl p-5 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                        <div className="flex justify-between">
                            <button className="bg-[#F4F7FE] hover:bg-[#E2E8F0] dark:bg-[#1F294F] dark:text-white dark:hover:bg-[#374062] text-[#A3AED0] py-2 px-4 rounded-xl flex gap-1 items-center cursor-pointer">
                                <CalendarMonthRoundedIcon className="scale-75" />
                                <span className="text-[15px]">This month</span>
                            </button>
                            <button className="bg-[#F4F7FE] px-2.5 py-2 rounded-xl cursor-pointer dark:bg-[#1F294F] dark:text-white text-[#422AFB]">
                                <BarChartRoundedIcon />
                            </button>
                        </div>
                        <div className="flex max-lg:flex-col ">
                            <div className="w-[145px]">
                                <div className="mt-8 mr-5">
                                    <span className="font-bold text-[#1C275A] dark:text-white text-4xl inline-block">
                                        $37.5k
                                    </span>
                                    <p className="text-[#A3AED0] flex items-center gap-2 mt-3">
                                        Total <br /> Spent{" "}
                                        <span className="text-[#01B574] font-bold flex items-center">
                                            <ArrowDropUpRoundedIcon />
                                            +2.45%
                                        </span>
                                    </p>
                                    <p className="text-[#01B574] font-bold mt-7">
                                        <CheckCircleRoundedIcon className="scale-[0.7]" />
                                        On track
                                    </p>
                                </div>
                            </div>
                            <LineChartHome className="dark:bg-[#111C44]" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-between bg-white dark:bg-[#111C44] w-[50%] rounded-2xl p-5 shadow-[0_8px_30px_rgba(0,0,0,0.08)] max-md:w-full">
                        <div className="flex justify-between">
                            <p className="font-bold text-xl dark:text-white">
                                Weekly Revenue
                            </p>
                            <button className="bg-[#F4F7FE] px-2.5 py-2 rounded-xl cursor-pointer dark:bg-[#1F294F] dark:text-white text-[#422AFB]">
                                <BarChartRoundedIcon />
                            </button>
                        </div>
                        <BarChart />
                    </div>
                </section>
        </>
    )
}




function Section2({series}) {
    return(
        <>
         <section className="flex w-full gap-5 max-xl:flex-col">
                    <div className="flex flex-col bg-white dark:bg-[#111C44] w-[50%] max-xl:w-full rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                        <div className="flex justify-between">
                            <p className="font-bold text-xl dark:text-white">
                                Check Table
                            </p>
                            <button className="bg-[#F4F7FE] px-2.5 py-2 rounded-xl cursor-pointer dark:bg-[#1F294F] dark:text-white text-[#422AFB]">
                                <MenuRoundedIcon />
                            </button>
                        </div>
                        <DataGridTable />
                    </div>
                    <div className="flex gap-5 max-sm:flex-col w-[50%] max-xl:w-[100%] ">
                        <div className="flex flex-col justify-between bg-white dark:bg-[#111C44] w-[50%] max-sm:w-full rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                            <div className="flex justify-between">
                                <div>
                                    <span className="text-sm text-[#A3AED0] font-medium">
                                        Daily Traffic
                                    </span>
                                    <p className="text-sm text-[#A3AED0] font-medium">
                                        <span className="text-4xl font-bold text-[#1B2559] dark:text-white">
                                            {" "}
                                            2.579{" "}
                                        </span>
                                        Visitors
                                    </p>
                                </div>
                                <div>
                                    <p className="text-[#01B574] font-bold text-sm mt-3">
                                        <ArrowDropUpRoundedIcon />
                                        +2.56%
                                    </p>
                                </div>
                            </div>
                            <BarChartTrafik />
                        </div>
                        <div className="flex flex-col justify-between max-sm:gap-20 bg-white dark:bg-[#111C44] w-[50%] max-sm:w-full rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                            <div className="flex justify-between">
                                <p className="text[#1B2559] text-[1rem] font-bold dark:text-white">
                                    Your Pie Chart
                                </p>
                                <select className="outline-none text-[#A3AED0] pe-3 font-medium">
                                    <option
                                        value="daily"
                                        className="text-[#1B2559]"
                                    >
                                        Daily
                                    </option>
                                    <option
                                        value="monthly"
                                        className="text-[#1B2559]"
                                    >
                                        Monthly
                                    </option>
                                    <option
                                        value="yearly"
                                        className="text-[#1B2559]"
                                    >
                                        Yearly
                                    </option>
                                </select>
                            </div>
                            <PieChart series={series} />
                            <div className="flex justify-around bg-white dark:bg-[#1B254B] w-[100%] max-sm:w-full rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                                <div className="flex flex-col items-center gap-1 ">
                                    <div className="flex items-baseline gap-1">
                                        <div className="w-2 h-2 rounded bg-[#422AFB]"></div>
                                        <p className="text-[12px]  text-[#A3AED0] font-bold ">
                                            Your Files
                                        </p>
                                    </div>
                                    <p className="text-xl font-medium text-[#1B2559] dark:text-white">
                                        {series[0]}%
                                    </p>
                                </div>
                                <div className="w-0.5 bg-gray-400 h-full"></div>
                                <div className="flex flex-col items-center gap-1 ">
                                    <div className="flex items-baseline gap-1">
                                        <div className="w-2 h-2 rounded bg-[rgb(106,210,255)]"></div>
                                        <p className="text-[12px]  text-[#A3AED0] font-bold ">
                                            System
                                        </p>
                                    </div>
                                    <p className="text-xl font-medium text-[#1B2559] dark:text-white">
                                        {series[1]}%
                                    </p>
                                </div>
                                <div className="w-0.5 bg-gray-400 h-full"></div>
                                <div className="flex flex-col items-center gap-1 ">
                                    <div className="flex items-baseline gap-1">
                                        <div className="w-2 h-2 rounded bg-[rgb(106,210,255)]"></div>
                                        <p className="text-[12px]  text-[#A3AED0] font-bold ">
                                            Empty
                                        </p>
                                    </div>
                                    <p className="text-xl font-medium text-[#1B2559] dark:text-white">
                                        {series[2]}%
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </>
    )
}




function Section3() {
    return(
        <>
         <section className="flex w-full gap-5 max-xl:flex-col">
                    <div className="flex flex-col bg-white dark:bg-[#111C44] w-[50%] max-xl:w-full rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                        <Grid/>
                    </div>
                    <div className="flex gap-5 max-sm:flex-col w-[50%] max-xl:w-[100%] ">
                        <div className="flex flex-col bg-white gap-5 dark:bg-[#111C44] w-[50%] max-sm:w-full rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                            <div className="flex justify-between">
                                <div className="flex items-center gap-2">
                                    <p className="text-xl text-[#1B2559] font-bold dark:text-white">
                                        Tasks
                                    </p>
                                </div>
                                <button className="bg-[#F4F7FE] px-2.5 py-2 rounded-xl cursor-pointer dark:bg-[#1F294F] dark:text-white text-[#422AFB]">
                                    <MenuRoundedIcon />
                                </button>
                            </div>
                            <div className="flex flex-col gap-5">
                                <Task/>
                                <Task/>
                                <Task/>
                                <Task/>
                                <Task/>
                                <Task/>
                                <Task/>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center bg-white dark:bg-[#111C44] w-[50%] max-sm:w-full rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                            <Calendar />
                        </div>
                    </div>
                </section>
        </>
    )
}
