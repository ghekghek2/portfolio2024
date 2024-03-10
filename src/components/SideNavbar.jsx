import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { PiGithubLogoLight } from "react-icons/pi";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdForwardToInbox } from "react-icons/md";
function SideNavbar() {
  return (
    <div className=" z-50 border border-slate-300 bg-slate-200 max-h-screen  sticky  md:w-28 top-0 left-0 bottom-0">
      <div className="h-full  md:w-full flex flex-col justify-between w-10 ">
        <div className="flex justify-center items-center p-4">Logo</div>
        <div className="flex flex-col items-center justify-center ">
          {/* <div className="  w-fit h-fit  ">
            <div className=" text-slate-700 hidden md:block">Social</div>
           
          </div> */}
          <div className="flex w-full justify-center flex-col  items-center  ">
            <CiFacebook className="w-9 h-9 rounded-full p-1 hover:bg-slate-300 cursor-pointer" />
            <CiInstagram className="w-9 h-9 rounded-full p-1 hover:bg-slate-300 cursor-pointer" />
            <PiGithubLogoLight className="w-9 h-9 rounded-full p-1 hover:bg-slate-300 cursor-pointer" />
          </div>
        </div>

        <ul className=" w-full text-sm  ">
          <li className="flex items-center justify-center md:justify-start text-slate-100 md:p-2 bg-slate-800 mb-1">
            <p className="hidden md:block">Project</p>
            <div className="flex justify-center items-center md:hidden h-10 text-2xl ">
              <LuLayoutDashboard />
            </div>
          </li>
          <li className="flex items-center justify-center md:justify-start text-slate-100 md:p-2 bg-slate-800">
            <p className="hidden md:block">Contact</p>
            <div className="flex justify-center items-center md:hidden h-10 text-2xl ">
              <MdForwardToInbox />
            </div>
          </li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default SideNavbar;
