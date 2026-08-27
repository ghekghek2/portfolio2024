// import Iframe from "react-iframe";
import Home from "../pages/Home";
import Header from "./Header";

// import About from "../pages/About";
// import Skill from "../pages/Skill";

function AppLayout() {
  return (
    <div className="gap-4 flex flex-col pb-10 ">
      <Home />

      <div className="">
        {/* <h1 className="font-bold text-2xl"> About me</h1> */}
        <div className="flex flex-col  gap-8 mt-8">
          <div className=" flex flex-col  font-semibold w-full md:w-fit ">
            <Header title="Work Experience" />
            <div className="rounded-b-lg border dark:border-slate-600 p-6 flex flex-col divide-y divide-slate-100 dark:divide-slate-800">
              <div className="flex md:items-center justify-between gap-12 md:flex-row flex-col w-full pb-5">
                <div className="md:text-5xl font-semibold tracking-tight">
                  UX Engineer
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    HQZen
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Feb 2025 — Jun 2025
                  </p>
                </div>
              </div>
              <div className="flex md:items-center justify-between gap-12 md:flex-row flex-col py-5">
                <div className="md:text-5xl font-semibold tracking-tight  decoration-slate-300 text-slate-400 dark:text-slate-600">
                  Web Developer
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-400 dark:text-slate-500">
                    Central One Bataan
                  </p>
                  <p className="text-xs text-slate-300 dark:text-slate-600 mt-0.5">
                    Oct 2024 — Nov 2024
                  </p>
                </div>
              </div>
              <div className="flex md:items-center justify-between gap-12 md:flex-row flex-col py-5">
                <div className="md:text-5xl font-semibold tracking-tight  decoration-slate-300 text-slate-400 dark:text-slate-600">
                  Front End Developer
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-400 dark:text-slate-500">
                    Group One JL International
                  </p>
                  <p className="text-xs text-slate-300 dark:text-slate-600 mt-0.5">
                    Mar 2023 — Aug 2024
                  </p>
                </div>
              </div>
              <div className="flex md:items-center justify-between gap-12 md:flex-row flex-col pt-5">
                <div className="md:text-5xl font-semibold tracking-tight  decoration-slate-300 text-slate-400 dark:text-slate-600">
                  I.T Support
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-400 dark:text-slate-500">
                    Mariveles Harbor Corporation
                  </p>
                  <p className="text-xs text-slate-300 dark:text-slate-600 mt-0.5">
                    Mar 2022 — Sep 2022
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-me  md:w-1/2 ">
            <Header title="About" />
            <p className="  about-text  rounded-b-lg   border dark:border-slate-600 p-4">
              Kevin Divinagracia is a Front-End Developer with a background in
              IT support and extensive experience as a freelance computer
              technician. His transition into web development began with his IT
              work, where he sharpened his technical troubleshooting skills and
              gained a deep understanding of user needs. He then shifted his
              focus to web development, mastering HTML, CSS, JavaScript, and
              React. Since making this transition, Kevin has accumulated
              valuable experience creating user-friendly, responsive, and
              visually appealing websites.
            </p>
          </div>
        </div>
      </div>
      {/* 
      <div className="border h-screen">
        <h1 className="font-bold text-2xl"> What i do</h1>
      </div> */}
      {/* <div className="h-screen w-screen">
        <Iframe
          url="https://prod.spline.design/txbTFKcxNk30WCul/scene.splinecode"
          width="100%"
          height="100%"
          id="myId"
          className="myClassname"
        />
      </div> */}

      {/* <Skill /> */}
      {/* <About /> */}
    </div>
  );
}

export default AppLayout;
