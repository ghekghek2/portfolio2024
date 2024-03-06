import Home from "../pages/Home";
import SideNavbar from "../components/SideNavbar";
import Skill from "../pages/Skill";

function Pagelayout() {
  return (
    <div className="flex  gap-2 md:gap-8 justify-center">
      <SideNavbar />
      <div className=" overflow-y-scroll no-scrollbar h-full md:h-screen">
        <Home />
        <Skill />
      </div>
    </div>
  );
}

export default Pagelayout;
