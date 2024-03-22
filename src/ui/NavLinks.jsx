import { NavLink } from "react-router-dom";

function NavLinks({ to, label, icon: Icon }) {
  return (
    <NavLink to={to}>
      {({ isActive }) => (
        <li
          className={`flex items-center justify-center md:justify-between  md:p-2 bg-slate-800 hover:bg-slate-600 dark:hover:bg-cyan-950 dark:bg-slate-900 border-b border-slate-500 dark:border-cyan-500 cursor-pointer ${
            isActive
              ? "text-slate-50 dark:text-cyan-500"
              : " text-slate-300 dark:text-slate-500"
          }`}
        >
          <p className="hidden md:block tracking-wider">{label}</p>
          {isActive && (
            <div className="w-3 h-3 rounded-full bg-slate-500 dark:bg-cyan-500 hidden md:block"></div>
          )}
          <div className="flex justify-center items-center md:hidden h-10 text-2xl">
            <Icon />
          </div>
        </li>
      )}
    </NavLink>
  );
}

export default NavLinks;
