import SideNavbar from "../components/SideNavbar";
import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import "../App.css";
import ProjectLink from "../ui/ProjectLink";
function Pagelayout() {
  const [loading, setLoading] = useState(true); // Start with loading state as true
  const { location, pathname } = useLocation();
  const isProjectRoute =
    pathname.includes("/project/mockup") ||
    pathname.includes("/project/live") ||
    pathname.includes("/project/design");

  useEffect(() => {
    setLoading(true); // Set loading state to true when location changes
    const timer = setTimeout(() => {
      setLoading(false); // Set loading state to false after 500 milliseconds
    }, 300); // 500 milliseconds delay

    return () => clearTimeout(timer);
  }, [location, pathname]); // Run the effect whenever location changes

  return (
    <div className="flex gap-2 md:gap-8 justify-center">
      <SideNavbar />
      <div
        id="outlet"
        className=" outlet relative overflow-y-scroll  overflow-x-hidden  h-screen max-h-[1080px] max-w-[1440px] w-full px-2 md:px-0  transition-all duration-600"
      >
        {isProjectRoute && (
          <div className="bg-slate-800 dark:bg-slate-900 fixed top-0 project-link  pl-4   py-4  flex   gap-4 z-50  visible rounded-l-lg">
            {/* Content to display when on the project/mockup route */}
            <ProjectLink to="project/live">Live Project</ProjectLink>
            <ProjectLink to="project/design">Web Design</ProjectLink>

            <ProjectLink to="project/mockup">Mockup</ProjectLink>
          </div>
        )}
        <div
          className={` ${
            loading
              ? " transition-opacity duration-300 opacity-0 invisible  "
              : "opacity-1   transition-opacity visible "
          } `}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Pagelayout;
