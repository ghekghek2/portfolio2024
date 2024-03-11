import { LuLayoutDashboard } from "react-icons/lu";
import { MdForwardToInbox } from "react-icons/md";
import { PiHouseLineBold } from "react-icons/pi";
import { NavLink } from "react-router-dom";

function NavBarLink() {
  return (
    <ul className=" w-[90%] md:w-full text-sm mx-auto  ">
      <NavLink to="/">
        <li className="flex items-center justify-center md:justify-start text-slate-100 dark:text-slate-300 md:p-2 bg-slate-700 dark:bg-slate-900 border-b border-slate-500 dark:border-cyan-500 cursor-pointer   ">
          <p className="hidden md:block tracking-wider ">Home</p>
          <div className="flex justify-center items-center md:hidden h-10 text-2xl ">
            <PiHouseLineBold />
          </div>
        </li>
      </NavLink>
      <NavLink to="/project">
        <li className="flex items-center justify-center md:justify-start text-slate-100 dark:text-slate-300 md:p-2 bg-slate-700 dark:bg-slate-900 border-b border-slate-500 dark:border-cyan-500 cursor-pointer">
          <p className="hidden md:block tracking-wider">Project</p>
          <div className="flex justify-center items-center md:hidden h-10 text-2xl ">
            <LuLayoutDashboard />
          </div>
        </li>
      </NavLink>
      <NavLink to="/email">
        <li className="flex items-center justify-center md:justify-start text-slate-100 dark:text-slate-300 md:p-2 bg-slate-700 dark:bg-slate-900 ">
          <p className="hidden md:block tracking-wider">Contact</p>
          <div className="flex justify-center items-center md:hidden h-10 text-2xl ">
            <MdForwardToInbox />
          </div>
        </li>
      </NavLink>
    </ul>
  );
}

export default NavBarLink;
