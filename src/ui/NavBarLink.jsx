import { LuLayoutDashboard } from "react-icons/lu";
import { MdForwardToInbox } from "react-icons/md";
import { PiHouseLineBold } from "react-icons/pi";
import { IoIosCode } from "react-icons/io";
import NavLinks from "../ui/NavLinks";
function NavBarLink() {
  return (
    <ul className=" w-[90%] md:w-full text-sm mx-auto ">
      <ul className="w-[90%] md:w-full text-sm mx-auto">
        <NavLinks to="/project" label="Project" icon={LuLayoutDashboard} />

        <NavLinks to="/email" label="Contact" icon={MdForwardToInbox} />
        <NavLinks to="/skill" label="Skill" icon={IoIosCode} />

        <NavLinks to="profile" label="Profile" icon={PiHouseLineBold} />
      </ul>
    </ul>
  );
}

export default NavBarLink;
