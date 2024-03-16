import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function ProjectUi({ desc }) {
  const containerRef = useRef(null);
  const text = useRef(null);
  const skill = useRef(null);
  const tags = useRef([]);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width:800px)", () => {
      gsap.to(text.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top",
          end: "bottom 65%",
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
          start: "top",
          end: "bottom 65%",
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
      tl.to(tags.current, {
        opacity: 1,
        stagger: 0.1,
        touchAction: "restart none none none",
      });

      ScrollTrigger.create({
        animation: tl,
        trigger: containerRef.current,
        start: "50 40%",
        end: "500 40%",
        stagger: 1,
        // markers: true,
      });
    });
  });

  return (
    <div className="mb-10 " ref={containerRef}>
      <div className="flex justify-between md:flex-row flex-col gap-2 ">
        <div className="md:w-1/3 md:pr-4">
          <div className="font-bold text-3xl mt-0 md:mt-56" ref={text}>
            {desc.title}
          </div>

          <div className="opacity-1 md:opacity-0 " ref={skill}>
            <div className="text">{desc.description}</div>
            <div className="my-4 flex border-b border-transparent dark:border-b  dark:border-cyan-500 px-2 py-1 rounded-md w-fit items-center gap-2 text-lg bg-slate-700 dark:bg-slate-900  text-slate-50">
              <a href={`https://${desc.link}`} target="_blank" className="   ">
                Visit
              </a>
            </div>
            <div className="flex gap-2 justify-end">
              {desc.skillTag.map((skill, index) => (
                <p
                  className="border-slate-300 border p-2 rounded-md md:opacity-0 tag text-sm dark:bg-transparent dark:border-slate-800"
                  key={index}
                  ref={(el) => (tags.current[index] = el)}
                >
                  {skill}
                </p>
              ))}
            </div>
          </div>
          <div></div>
        </div>
        <div className=" w-full md:w-4/6 flex flex-col gap-2  items-center justify-center ">
          {desc.img.map((image, index) => (
            <img
              className=" w-full md:w-11/12"
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
