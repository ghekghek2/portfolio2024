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
  const [text, setText] = useState("React");

  return (
    <Context.Provider value={[text, setText]}>
      <div className="pl-2 md:p-4 gap-4 w-full  ">
        <div className="flex  items-center text-3xl font-semibold mb-2   ">
          Tech Stack
        </div>
        <div className="flex flex-wrap gap-2 md:gap-1 text-2xl md:text-5xl ">
          <IconSkill icon={SiCreatereactapp} title="React" />
          <IconSkill icon={TbBrandSupabase} title="Supabase" />
          <IconSkill icon={SiReactquery} title=" React Query" />
          <IconSkill icon={RiJavascriptLine} title="Javascript" />
          <IconSkill icon={SiRedux} title="Redux" />
          <IconSkill icon={BiLogoTailwindCss} title="Tailwind" />
          <IconSkill icon={FaFigma} title="Figma" />
          <IconSkill icon={BsFiletypeHtml} title="Html" />
          <IconSkill icon={BsFiletypeCss} title="Css" />
          <IconSkill icon={IoGitBranchOutline} title="Git" />
          <IconSkill icon={BsFiletypeScss} title="Sass" />

          <IconSkill icon={RiBootstrapLine} title="Bootsrap" />

          <IconSkill icon={DiJqueryLogo} title="Jquery" />
          <IconSkill icon={SiStyledcomponents} title="Styled Components" />
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="  font-semibold dark:text-cyan-500">{text}</div>
        </div>
      </div>
    </Context.Provider>
  );
}

export default Skill;
