import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { PiGithubLogoLight } from "react-icons/pi";
import NavBarLink from "../ui/NavBarLink";
import DarkBtn from "../ui/DarkBtn";

function SideNavbar() {
  return (
    <div className=" dark:backdrop-blur-[1px] dark:bg-transparent dark:border-slate-800 transition-all duration-300 z-50 border border-slate-300 bg-slate-200 max-h-screen  sticky  md:w-[140px] top-0 left-0 bottom-0 ">
      <div className="h-full   md:w-full flex flex-col justify-between w-10 ">
        <div className="flex justify-center items-center pt-4">
          <div className="drkbtn  p-1 rounded-full">
            <DarkBtn />
          </div>
        </div>
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

        <NavBarLink />
      </div>
    </div>
  );
}

export default SideNavbar;
