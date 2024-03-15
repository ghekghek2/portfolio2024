import { NavLink } from "react-router-dom";

function ProjectLink({ children, to }) {
  return (
    <div>
      <NavLink to={to}>
        {({ isActive }) => (
          <div
            className={` ${
              isActive
                ? "font-semibold  border-b border-slate-800 dark:border-cyan-500 dark:text-cyan-500"
                : " text-slate-500 dark:text-slate-500 font-medium"
            }
           `}
          >
            {children}
          </div>
        )}
      </NavLink>
    </div>
  );
}

export default ProjectLink;
