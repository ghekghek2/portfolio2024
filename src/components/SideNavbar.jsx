import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { PiGithubLogoLight } from "react-icons/pi";
function SideNavbar() {
  return (
    <div className=" z-50 border border-slate-300 bg-slate-200 max-h-screen  sticky   w-12 md:w-28 top-0 left-0 bottom-0">
      <div className="h-full  w-full flex flex-col justify-between py-4 md:py-16">
        <div></div>
        <div className="flex w-full justify-center flex-col items-center">
          <CiFacebook className="w-9 h-9 rounded-full p-1 hover:bg-slate-300 cursor-pointer" />
          <CiInstagram className="w-9 h-9 rounded-full p-1 hover:bg-slate-300 cursor-pointer" />
          <PiGithubLogoLight className="w-9 h-9 rounded-full p-1 hover:bg-slate-300 cursor-pointer" />
        </div>
        <div className="-rotate-90 flex">
          <span> 2023</span>- <span>2024 </span>
        </div>
      </div>
    </div>
  );
}

export default SideNavbar;
