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
          <div className=" flex flex-col  font-semibold w-fit ">
            <Header title="Work Experience" />
            <div className="rounded-b-lg border dark:border-slate-600 p-4 flex flex-col gap-4 ">
              <div className="flex items-center justify-between gap-12 ">
                <div className="text-5xl">Front End Developer</div>
                <div>
                  <p className="text-sm text-right">
                    Group One Jl International Inc
                  </p>
                  <p className="text-xs text-right">
                    March 2023 - February 2024
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className=" text-5xl line-through decoration-slate-300 text-slate-400">
                  It Support
                </div>
                <div>
                  <p className="text-sm text-right">
                    {" "}
                    Mariveles Harbor Corporation
                  </p>
                  <p className="text-xs text-right">
                    {" "}
                    March 2022 - September 2022
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className=" text-5xl line-through decoration-slate-300 text-slate-400">
                  Computer Technician
                </div>
                <div>
                  <p className="text-sm text-right">Crizvi Resort</p>
                  <p className="text-xs text-right">
                    {" "}
                    February 2020 - March 2022
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-me  w-1/2 ">
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
