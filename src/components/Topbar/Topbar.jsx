import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import InfoOutlineIcon from "@mui/icons-material/InfoOutline";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SearchIcon from "@mui/icons-material/Search";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Topbar({ onMenuClick }) {
  const [darkMode, setDarkMode] = useState(false);

  // وقتی کامپوننت اولین بار لود میشه، مود رو از localStorage بخون
  useEffect(() => {
    console.log("avali");
    
    const savedMode = localStorage.getItem("theme");
    if (savedMode === "dark") {
    console.log("if dark");

      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
    console.log("else dark");

      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // هر وقت darkMode تغییر کرد تو localStorage ذخیره کن
  useEffect(() => {
    console.log("dark");
    
    if (darkMode) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="w-full h-[100px] max-md:h-[150px]">
      <div className="flex flex-col md:flex-row justify-between items-center z-30 px-4 max-sm:px-0 pt-5">
        <div className="flex items-center gap-3 mb-2 md:mb-0">
          <div className="flex flex-col">
            <p className="text-blue-900 dark:text-white text-sm">
              <NavLink to={"/"} className={"inline-block pr-1"}>Page</NavLink>{"   /   "}
              <NavLink to={location.pathname.slice(1,location.pathname.lastIndexOf("/"))} className={"inline-block pl-1"}>{location.pathname.split("/")}</NavLink>
            </p>
            <h1 className="font-bold text-4xl cursor-pointer text-blue-900 dark:text-white ">
              Main Dashboard
            </h1>
          </div>
        </div>

        <div className="flex items-center w-fit bg-white dark:bg-[#111C44] rounded-4xl p-2.5">
          <div className="relative cursor-pointer mr-3 bg-[#F4F7FE] dark:bg-[#0B1437] dark:text-white  rounded-4xl pl-3 py-2">
            <SearchIcon />
            <input
              type="text"
              className="focus:outline-none ml-2 max-xl:w-25 dark:placeholder:text-[#bebebe]"
              placeholder="Search..."
            />
          </div>
          <div
            className="xl:hidden cursor-pointer z-10 mr-3 text-gray-400 dark:text-white"
            onClick={onMenuClick}
          >
            <MenuIcon />
          </div>

          <div className="relative cursor-pointer mr-3 text-gray-400 dark:text-white">
            <NotificationsNoneIcon />
          </div>
          <div className="relative cursor-pointer mr-3 text-gray-400 dark:text-white">
            <InfoOutlineIcon />
          </div>
          <div
            className="relative cursor-pointer mr-3 text-gray-400 dark:text-white"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <LightModeRoundedIcon /> : <DarkModeIcon />}
          </div>
          <img
            className="h-10 w-10 rounded-[50%] z-10 cursor-pointer"
            src="./public/Images/Profile.png"
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
}
