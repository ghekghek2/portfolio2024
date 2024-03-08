import BoxAnimation from "../components/BoxAnimation";
import Button from "../ui/Button";
import { BsSend } from "react-icons/bs";

function Home() {
  return (
    <div className="p-4 gap-4 h-full md:max-h-[990px]  flex  justify-between w-full   ">
      <div className="  flex justify-center items-center  md:basis-2/5 ">
        <div className="">
          <h1 className="text-3xl font-semibold text-slate-800">
            Kevin Divinagracia
          </h1>
          <div className="text-xl text-slate-800 flex items-center h-10 gap-2 ">
            <div>
              <img src="/line.png" alt="" />
            </div>

            <div className="morphing ">
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
          <Button className="mt-4 bg-teal-600 font-semibold" icon={<BsSend />}>
            Hire me
          </Button>
        </div>
      </div>

      <BoxAnimation />
    </div>
  );
}

export default Home;
