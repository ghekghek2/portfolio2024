import { FaFigma } from "react-icons/fa";
import { BsFiletypeHtml } from "react-icons/bs";
import { BsFiletypeCss } from "react-icons/bs";
import { BsFiletypeScss } from "react-icons/bs";
import { BiLogoTailwindCss } from "react-icons/bi";
import { RiBootstrapLine } from "react-icons/ri";
import { RiJavascriptLine } from "react-icons/ri";
import { DiJqueryLogo } from "react-icons/di";
import { SiCreatereactapp } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiReactquery } from "react-icons/si";
import { TbBrandSupabase } from "react-icons/tb";
import { IoGitBranchOutline } from "react-icons/io5";
import IconSkill from "../ui/IconSkill";
import React, { useState } from "react";
export const Context = React.createContext();

function Skill() {
  const [text, setText] = useState("");

  return (
    <Context.Provider value={[text, setText]}>
      <div className="p-4 h-full md:h-screen grid grid-cols-12 grid-rows-6 gap-4">
        <div className="flex items-center text-slate-800 text-5xl font-semibold col-span-3 border  border-slate-500 ">
          My Tech Stack
        </div>

        <IconSkill
          icon={SiCreatereactapp}
          title="React"
          colSpan={2}
          rowSpan={2}
        />
        <IconSkill icon={TbBrandSupabase} title="Supabase" colSpan={4} />
        <IconSkill icon={FaFigma} title="Figma" colSpan={3} />
        <IconSkill icon={SiReactquery} title=" React Query" />
        <IconSkill icon={RiJavascriptLine} title="Javascript" />
        <IconSkill icon={SiRedux} title="Redux" />
        <IconSkill icon={BsFiletypeHtml} title="Html" />
        <IconSkill icon={BsFiletypeCss} title="Css" />
        <IconSkill icon={BsFiletypeScss} title="Sass" />
        <IconSkill icon={BiLogoTailwindCss} title="Tailwind" colSpan={2} />
        <IconSkill icon={RiBootstrapLine} title="Bootsrap" colSpan={2} />
        <IconSkill
          icon={SiStyledcomponents}
          title="Styled Components"
          colSpan={2}
        />
        <IconSkill icon={DiJqueryLogo} title="Jquery" colSpan={2} />
        <IconSkill icon={IoGitBranchOutline} title="Git" colSpan={2} />

        <div className="flex items-center justify-center border  col-span-6 row-span-4  border-slate-500  text-slate-800 text-5xl font-semibold ">
          <img src="/gsap.png" alt="" />
        </div>
        {/* <div className="flex items-center justify-center border  col-span-6 row-span-3  border-slate-500  text-slate-800 text-5xl font-semibold ">
        Title here
      </div> */}
        <div className="border  border-slate-500 col-span-6 row-span-3 flex justify-center items-center">
          {text}
        </div>
      </div>
    </Context.Provider>
  );
}

export default Skill;
