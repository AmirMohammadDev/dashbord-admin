
import { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import IconBox from "./IconBox";
import { NavLink } from "react-router-dom";

export default function Sidebar({ setIsSidebarOpen }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    { Icon: HomeIcon, title: "Main Dashboard" , route:"/dashbord-admin" },
    { Icon: ShoppingCartIcon, title: "NFT Marketplace" , route:"/newUser" },
    { Icon: BarChartIcon, title: "Data Tables" , route:"/products" },
    { Icon: PersonIcon, title: "Profile" , route:"/users" },
    { Icon: LockIcon, title: "Sign In" , route:"/login" },
  ];
  useEffect(()=>{
    setActiveIndex(items.findIndex(ele =>window.location.pathname===ele.route))
  },[])
  const clickHandler = (index) => {
    setActiveIndex(index);
     if (setIsSidebarOpen && window.innerWidth < 1200) {
        setIsSidebarOpen(false);
    }
  };

  return (
    <div className="w-full">
      <h1 className="w-max text-2xl m-auto mt-10 dark:text-white">AmirMohammad</h1>
      <hr className="my-10 border-gray-300" />
      <div className="flex flex-col gap-3">
        {items.map(({ Icon, title,route }, index) => (
          <NavLink to={route} key={index}>
             <div key={index} onClick={() => clickHandler(index) } >
            <IconBox Icon={Icon} title={title} active={activeIndex === index} />
          </div>
          </NavLink>
         
        ))}
      </div>
    </div>
  );
}
