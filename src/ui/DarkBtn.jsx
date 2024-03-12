import { GrSun } from "react-icons/gr";
import { BiMoon } from "react-icons/bi";
import { useState } from "react";

function DarkBtn() {
  const [dark, setDark] = useState(false);
  function toggleTheme() {
    document.documentElement.classList.toggle("dark");
    setDark(() => !dark);
  }

  return (
    <button
      onClick={toggleTheme}
      className="md:text-xl flex gap-2 flex-col bg-slate-700  text-slate-100 dark:text-cyan-500 items-center border border-slate-800 h-full p-1 rounded-full relative transition-all "
    >
      <GrSun />
      <BiMoon />
      <div
        className={` w-4 h-4 md:w-5 md:h-5 bg-slate-50 dark:bg-slate-900  rounded-full absolute  transition-all duration-500 ${
          !dark ? "translate-y-6 md:translate-y-7 " : "translate-y-0"
        }`}
      ></div>
    </button>
  );
}

export default DarkBtn;
