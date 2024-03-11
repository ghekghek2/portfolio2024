import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import CallOuts from "../ui/CallOuts";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
function BoxAnimation() {
  const container = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 10 });

    tl.from(" .c ", {
      // y: "-200px",
      // x: "200px",
      // scale: 0,
      opacity: 0,
      scale: 0,
      duration: 1,
      // delay: 2,
      ease: "power1.out",
    })

      .from(" .step-1 > *", {
        scale: 1,
        ease: "power1.out",
        opacity: 0,
        y: "-200px",
        stagger: 0.5,
        duration: 0.5,
      })

      .from(" .step-2 > *:not(.box4):not(.box1):not(.box3)", {
        scale: 1,
        ease: "power1.out",
        opacity: 0,
        x: 200,
        stagger: 0.5,
        duration: 0.4,
      })

      .from(".x", { duration: 0.2, width: "0", opacity: 0, gap: 0 })
      .from(" .step-3 > *", {
        scale: 1,
        ease: "power1.out",
        opacity: 0,
        x: -200,
        stagger: 0.5,
        duration: 0.4,
      })

      .from(" .step-4 > *", {
        scale: 1,
        ease: "power1.out",
        opacity: 0,
        x: 200,
        stagger: 0.5,
        duration: 0.4,
      })

      .from(".y", { gap: 0, duration: 0.2, width: "0", opacity: 0 })
      .from(" .step-5 ", {
        scale: 1,
        ease: "power1.out",
        opacity: 0,
        x: 200,
        stagger: 0.5,
        duration: 0.4,
      })

      .from(" .step-6 > *", {
        scale: 1,
        ease: "power1.out",
        opacity: 0,
        x: -200,
        stagger: 0.5,
        duration: 0.5,
      })
      .from(" .step-7 > *:not(.box2)", {
        ease: "power1.out",
        opacity: 0,
        y: "20px",
        stagger: 0.2,
        duration: 0.2,
      })
      .from(".box1", {
        duration: 1,
        opacity: 0,
        x: "100px",
        y: "50px",
        ease: "power1.out",
        delay: 0.5,
      })

      .from(".box2", {
        duration: 1,
        opacity: 0,
        x: "-50px",
        y: "-50px",
        ease: "power1.out",
      })
      .from(".box3", {
        duration: 1,
        opacity: 0,
        x: "150px",
        y: "-100px",
        ease: "power1.out",
      })
      // .to(" .c ", {
      //   y: "-20px",
      //   x: "20px",
      //   scale: 1.1,
      //   ease: "power1.out",
      // })
      .from(".box4", {
        duration: 1,
        opacity: 0,
        x: "-100px",
        y: "100px",
        ease: "power4.out",
      });
  });

  return (
    <div className="w-full h-full items-center justify-center z-10  hidden md:flex   ">
      <div
        ref={container}
        className="outline-1  c opacity-1 bg-slate-100  dark:backdrop-blur-[1px] dark:bg-transparent  flex flex-col w-1/2  h-96 border-2 border-slate-500 dark:border-slate-700 rounded-md  gap-2 p-4 scale-125 shadow-[3px_3px_0_0_#64748b] dark:shadow-[3px_3px_0_0_#334155] "
      >
        <div className="flex flex-col gap-2 h-full">
          <div className=" flex justify-between items-center step-1 relative">
            <div className="logo">Website</div>
            <div className="w-8 h-8 bg-slate-200 dark:bg-slate-800 rounded-full"></div>
          </div>
          <div className="flex flex-col gap-2 step-2 relative">
            <CallOuts
              className="z-50  box4 top-3  right-7 w-32 border border-yellow-700 shadow-[4px_4px_0_0_rgba(161,98,7,1)] "
              border="border-yellow-700 "
            >
              Lorem ipsum dolor sit amet
            </CallOuts>
            <CallOuts
              className=" z-50 box1 top-14  border border-teal-700 shadow-[4px_4px_0_0_rgba(15,118,110,1)] "
              border="border-teal-700"
            >
              Lorem ipsum dolor sit amet consectetur.
            </CallOuts>

            <CallOuts
              className="z-50  box3  top-24 left-5 border border-slate-700 shadow-[4px_4px_0_0_rgba(71,85,105,1)] "
              border="border-slate-700"
            >
              Lorem ipsum dolor sit amet consectetur.
            </CallOuts>
            <div className="skelefromn  h-4 bg-slate-200 dark:bg-slate-800"></div>
            <div className="skelefromn  h-4 bg-slate-200 dark:bg-slate-800 "></div>
            <div className="skelefromn  h-4 bg-slate-200 dark:bg-slate-800"></div>
          </div>
          <div className="flex gap-2 items-center x ">
            <div className="flex flex-col gap-2 step-3 basis-1/4 ">
              <div className="skelefromn  h-4 bg-slate-200 dark:bg-slate-800"></div>
              <div className="skelefromn h-4 bg-slate-200 dark:bg-slate-800"></div>
              <div className="skelefromn h-4 bg-slate-200 dark:bg-slate-800"></div>
            </div>
            <div className="flex flex-col gap-2 step-4 basis-1/4 ">
              <div className="skelefromn  h-4 bg-slate-200 dark:bg-slate-800"></div>
              <div className="skelefromn  h-4 bg-slate-200 dark:bg-slate-800"></div>
              <div className="skelefromn  h-4 bg-slate-200 dark:bg-slate-800"></div>
            </div>
            <div className="w-full basis-full h-full bg-slate-200 dark:bg-slate-800"></div>
          </div>

          <div className="flex gap-2 items-center  w-full y">
            <div className="w-full h-full bg-slate-200 dark:bg-slate-800  step-5"></div>
            <div className="flex flex-col gap-2 step-6 ">
              <div className="skelefromn w-[4.8rem] h-4 bg-slate-200 dark:bg-slate-800"></div>
              <div className="skelefromn w-[4.8rem]  h-4 bg-slate-200 dark:bg-slate-800"></div>
              <div className="skelefromn w-[4.8rem]  h-4 bg-slate-200 dark:bg-slate-800"></div>
            </div>
          </div>

          <div className="flex gap-2 items-center h-full step-7 relative">
            <CallOuts
              className="z-50 box2 right-0 top-0 border border-cyan-700 shadow-[4px_4px_0_0_rgba(14,116,144,1)] "
              border="border-cyan-700"
            >
              Lorem ipsum dolor sit amet consectetur.
            </CallOuts>
            <div className="skelefromn w-20 h-full rounded-sm bg-slate-200 dark:bg-slate-800"></div>
            <div className="skelefromn w-20 h-full rounded-sm bg-slate-200 dark:bg-slate-800"></div>
            <div className="skelefromn w-20 h-full rounded-sm bg-slate-200 dark:bg-slate-800"></div>
            <div className="skelefromn w-20 h-full rounded-sm bg-slate-200 dark:bg-slate-800"></div>
            <div className="skelefromn w-20 h-full rounded-sm bg-slate-200 dark:bg-slate-800"></div>
            <div className="skelefromn w-20 h-full rounded-sm bg-slate-200 dark:bg-slate-800"></div>
            <div className="skelefromn w-20 h-full rounded-sm bg-slate-200 dark:bg-slate-800"></div>
          </div>
        </div>

        {/* <div className="box2 w-10 h-10 bg-indigo-500 rounded-full  -translate-y-32 -translate-x-40">
          {" "}
        </div> */}
      </div>

      {/* <div className="el">asd</div> */}
    </div>
  );
}

export default BoxAnimation;
