import BoxAnimation from "../components/BoxAnimation";
import Button from "../ui/Button";
import { BsSend } from "react-icons/bs";

function Home() {
  return (
    <div className="pl-2 md:p-4 gap-4 h-full md:max-h-[990px]  flex  justify-between w-full   ">
      <div className="  flex justify-center items-center  md:basis-2/5 ">
        <div className="">
          <h1 className="text-3xl font-semibold text-slate-700">
            Kevin Divinagracia
          </h1>
          <div className="text-xl text-slate-800 flex items-center h-10 gap-2 ">
            <div>
              <img src="/line.png" alt="" />
            </div>

            <div className="morphing  ">
              <p className="word text-3xl">Front-End Developer</p>
              <p className="word text-3xl">Computer Technician</p>
              <p className="word text-3xl">Ui Designer</p>
              <p className="word text-3xl">Ux Designer</p>
              {/* <p className="word text-3xl">CSS</p>
              <p className="word text-3xl">is</p>
              <p className="word text-3xl">great!</p> */}
            </div>
          </div>
          <p className="">
            I’m creative user interface and user experience Developer based in
            Philippines, and very passionate building web application.
          </p>
          <Button className="mt-4 bg-slate-800 text-lg" icon={<BsSend />}>
            Hire me
          </Button>
        </div>
      </div>
      <div className="w-full relative mt-20 hidden md:block">
        <div className="w-full  border-t border-slate-500"></div>
        <BoxAnimation />
      </div>
    </div>
  );
}

export default Home;
