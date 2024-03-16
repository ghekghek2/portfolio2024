import { Outlet } from "react-router-dom";

import ProjectLink from "../ui/ProjectLink";
function Project() {
  return (
    <div className=" mx-auto parent ">
      <div className="backdrop-blur-[20px]  bg-transparent fixed top-0 project-link   py-4  flex   gap-4 z-50 ">
        <ProjectLink to="live">Live Project</ProjectLink>
        <ProjectLink to="design">Web Design</ProjectLink>
        <ProjectLink to="mobile">Mobile Design</ProjectLink>
        <ProjectLink to="mockup">Mockup</ProjectLink>
      </div>
      <div className="mt-12">
        <Outlet />
      </div>
    </div>
  );
}

export default Project;
