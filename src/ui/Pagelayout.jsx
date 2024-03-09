import Home from "../pages/Home";
import SideNavbar from "../components/SideNavbar";
import Skill from "../pages/Skill";
import About from "../pages/About";
import Contact from "../pages/Contact";
import TopNav from "../components/TopNav";

function Pagelayout() {
  return (
    <div className="flex  gap-2 md:gap-8 justify-center ">
      <SideNavbar />
      <div className=" relative overflow-y-scroll no-scrollbar h-full  max-w-[1440px]">
        <TopNav />
        <Home />
        <Skill />
        <About />
        <Contact />
      </div>
    </div>
  );
}

export default Pagelayout;
