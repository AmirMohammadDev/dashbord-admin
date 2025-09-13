import { useState, useEffect, useRef } from "react";
import "./App.css";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/Sidebar/Sidebar";

export default function App() {
    let router = useRoutes(routes);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const sidebarRef = useRef();

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1200) {
                setIsSidebarOpen(false);
            } else {
                setIsSidebarOpen(true);
            }
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (window.innerWidth < 1200) {
            function handleClickOutside(event) {
                if (
                    sidebarRef.current &&
                    !sidebarRef.current.contains(event.target)
                ) {
                    setIsSidebarOpen(false);
                }
            }
            if (isSidebarOpen) {
                document.addEventListener("mousedown", handleClickOutside);
            } else {
                document.removeEventListener("mousedown", handleClickOutside);
            }
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }
    }, [isSidebarOpen]);

    return (
        <div className="flex h-screen overflow-hidden dark:bg-[#0B1437]">
            <div
                ref={sidebarRef}
                className={`xl:static fixed top-0 left-0 h-full bg-white dark:bg-[#111C44] p-5 transition-transform duration-300 z-50
      ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} w-[300px]`}
            >
                <Sidebar setIsSidebarOpen={setIsSidebarOpen} />
            </div>
            <div className="flex-1 flex flex-col px-5 py-8 w-full overflow-y-auto">
                <div className="w-[calc(-340px+100vw)] fixed max-xl:w-[calc(-30px+100vw)] z-20 backdrop-blur-[10px] bg-[rgba(244, 247, 254, 0.2)] rounded-4xl max-sm:pb-5">
                    <Topbar
                        onMenuClick={() => setIsSidebarOpen((prev) => !prev)}
                        isSidebarOpen={isSidebarOpen}
                    />
                </div>

                <div className="mt-30 max-md:mt-50">{router}</div>
            </div>
        </div>
    );
}
