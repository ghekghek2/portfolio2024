import BoxAnimation from "../components/BoxAnimation";
import Button from "../ui/Button";
import { BsSend } from "react-icons/bs";
import "./App.css";
import { NavLink } from "react-router-dom";

import Download from "../components/Download";

function Home() {
  return (
    <div className=" gap-4 h-full md:max-h-[990px]  flex  justify-between w-full md:pb-10   ">
      <div className="  flex justify-center items-center    min-[1440px]:basis-2/5 ">
        <div className="py-4">
          <h1 className="text-3xl font-semibold text-slate-700">
            Kevin Divinagracia
          </h1>
          <div className="text-xl text-slate-800  flex items-center h-10 gap-2 ">
            <div>
              <img src="/line.png" alt="" />
            </div>

            <div className="morphing  ">
              <p className="word text-[24px] md:text-3xl dark:text-cyan-500">
                Front-End Developer
              </p>
              <p className="word text-[24px] md:text-3xl dark:text-cyan-500">
                Computer Technician
              </p>
              <p className="word text-[24px] md:text-3xl dark:text-cyan-500">
                Ui Designer
              </p>
              <p className="word text-[24px] md:text-3xl dark:text-cyan-500">
                Ux Designer
              </p>
              {/* <p className="word text-3xl">CSS</p>
              <p className="word text-3xl">is</p>
              <p className="word text-3xl">great!</p> */}
            </div>
          </div>
          <p className="">
            I’m a creative User Interface and User Experience Developer based in
            the Philippines, and I’m very passionate about building web
            applications.
          </p>
          <div className="flex gap-2">
            <NavLink to="/email">
              <Button
                className="mt-4 bg-slate-700 hover:bg-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800 border-b border-transparent dark:border-b dark:border-cyan-500  text-lg"
                icon={<BsSend />}
              >
                Hire me
              </Button>
            </NavLink>
            <Download />
          </div>
        </div>
      </div>
      <div className="w-full relative mt-20 hidden min-[1440px]:block">
        <div className="w-full  border-t border-slate-500 dark:border-slate-700"></div>
        <BoxAnimation />
      </div>
    </div>
  );
}

export default Home;
