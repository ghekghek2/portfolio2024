import { useContext } from "react";
import { Context } from "../pages/Skill";

function Icon({ icon: IconComponent, colSpan, rowSpan, title }) {
  const [text, setText] = useContext(Context);

  return (
    <div
      onMouseEnter={() => setText(title)}
      onMouseLeave={() => setText(text)}
      className={`flex items-center border border-slate-500 justify-center text-4xl p-2 
        col-span-${colSpan}
           row-span-${rowSpan}`}
    >
      <IconComponent />
    </div>
  );
}

export default Icon;
