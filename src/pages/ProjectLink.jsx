import { NavLink, Outlet } from "react-router-dom";

function ProjectLink() {
  return (
    <div>
      <NavLink to="live">Live</NavLink>
      <NavLink to="design">Design</NavLink>
      <NavLink to="mockup">Mockup</NavLink>
      <Outlet />
    </div>
  );
}

export default ProjectLink;
