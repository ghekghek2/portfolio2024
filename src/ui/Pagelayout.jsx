import Home from "../pages/Home";
import SideNavbar from "../components/SideNavbar";
import Skill from "../pages/Skill";
import About from "../pages/About";
import Contact from "../pages/Contact";

function Pagelayout() {
  return (
    <div className="flex  gap-2 md:gap-8 justify-center">
      <SideNavbar />
      <div className=" overflow-y-scroll no-scrollbar h-full md:h-screen max-w-[1440px]">
        <Home />
        <Skill />
        <About />
        <Contact />
      </div>
    </div>
  );
}

export default Pagelayout;
