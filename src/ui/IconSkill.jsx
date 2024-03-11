import { useContext } from "react";
import { Context } from "../pages/Skill";

function Icon({ icon: IconComponent, title }) {
  const [text, setText] = useContext(Context);

  return (
    <div
      onMouseEnter={() => setText(title)}
      onMouseLeave={() => setText(text)}
      className={` bg-slate-100 dark:bg-transparent basis-2/12 h-14 md:h-full md:basis-0 flex items-center rounded-lg cursor-pointer shadow-md border  border-slate-500 justify-center  md:text-5xl p-2 
`}
    >
      <IconComponent />
    </div>
  );
}

export default Icon;
