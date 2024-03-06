import BoxAnimation from "../components/BoxAnimation";
import Button from "../ui/Button";
import { BsSend } from "react-icons/bs";

function Home() {
  return (
    <div className="p-4 gap-4  flex  justify-between  h-full md:h-screen">
      <div className="  flex justify-center items-center  md:basis-2/5 ">
        <div className="">
          <h1 className="text-3xl font-semibold text-slate-800">
            Kevin Divinagracia
          </h1>
          <p className="text-xl text-slate-800 flex items-center gap-2">
            <span>
              <img src="/line.png" alt="" />
            </span>

            <span>I’m a Front-End Developer</span>
          </p>
          <p className="">
            I’m creative user interface and user experience Developer based in
            Philippines, and very passionate and dedicated to my work.
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
