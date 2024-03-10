import SideNavbar from "../components/SideNavbar";

import { Outlet } from "react-router-dom";

function Pagelayout() {
  return (
    <div className="flex gap-2 md:gap-8 justify-center ">
      <SideNavbar />
      <div className=" relative overflow-y-scroll no-scrollbar h-full  max-w-[1440px]">
        <Outlet />
      </div>
    </div>
  );
}

export default Pagelayout;
