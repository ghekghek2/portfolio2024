import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

function ProjectUi({ img, title, des }) {
  const containerRef = useRef(null);
  const text = useRef(null);
  const skill = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width:800px)", () => {
      gsap.to(text.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top ",
          end: "bottom 30%",
          scrub: 1,
          pin: text.current,
          pinSpacing: false,
          toggleActions: "restart ,none,none none",
          // markers: true,
        },
      });
      gsap.to(skill.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top ",
          end: "bottom 30%",
          scrub: 1,
          pin: skill.current,
          pinSpacing: false,
          toggleActions: "restart ,none,none none",
          // markers: true,
        },
      });

      const tl = gsap.timeline();

      tl.to(skill.current, {
        opacity: 1,

        touchAction: "restart none none none",
      });

      ScrollTrigger.create({
        animation: tl,
        trigger: containerRef.current,
        start: "200 20% ",
        end: "500 40%",
        markers: true,
      });
    });
  });

  return (
    <div className="mb-10" ref={containerRef}>
      <div className="flex justify-between md:flex-row flex-col">
        <div className="">
          <div className="font-bold text-3xl mt-0 md:mt-10" ref={text}>
            {title}
          </div>
          <div className="opacity-1 md:opacity-0" ref={skill}>
            <p>{des}</p>
          </div>
          <div></div>
        </div>
        <div className=" w-full md:w-4/6 flex flex-col gap-2  ">
          {img.map((image, index) => (
            <img
              className="h-fit"
              key={index}
              src={image}
              alt={`img-${index}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectUi;
