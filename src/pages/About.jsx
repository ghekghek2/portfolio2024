import { PiCertificate } from "react-icons/pi";

function About() {
  return (
    <div className=" w-full">
      <div className="flex flex-col  justify-between gap-4 items-start">
        <div className="w-full md:w-3/5">
          <h1 className="text-3xl font-semibold mb-2 ">Who i am</h1>
          <p className="">
            Hey there! I am a front-end developer specializing in front-end and
            UI/UX development, I'm deeply passionate about crafting
            user-friendly technology solutions. My journey began with a
            background in computer repair and maintenance, giving me a robust
            technical foundation that enriches my design process
          </p>
        </div>
        <div>
          <h1 className="text-3xl font-semibold mb-2">Work Experience</h1>
          <div className="timeline w-full flex flex-col gap-8 relative pl-2">
            <div className="line absolute h-full w-0.5 bg-slate-200 dark:bg-cyan-950 rounded-full left-0"></div>

            <div className="relative flex items-start pl-8">
              <div className="w-3 h-3 bg-cyan-500 dark:bg-cyan-400 rounded-full -left-[5px] absolute top-1.5 ring-4 ring-cyan-100 dark:ring-cyan-950"></div>
              <div>
                <p className="text-xs font-medium text-cyan-600 dark:text-cyan-400 tracking-wide uppercase mb-0.5">02/2025 — 06/2025</p>
                <p className="font-semibold text-base leading-tight">HQZen</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">UX Engineer &middot; Full Time</p>
              </div>
            </div>

            <div className="relative flex items-start pl-8">
              <div className="w-3 h-3 bg-slate-300 dark:bg-cyan-800 rounded-full -left-[5px] absolute top-1.5"></div>
              <div>
                <p className="text-xs font-medium text-slate-400 dark:text-slate-500 tracking-wide uppercase mb-0.5">10/2024 — 11/2024</p>
                <p className="font-semibold text-base leading-tight">Central One Bataan</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Web Developer &middot; Full Time</p>
              </div>
            </div>

            <div className="relative flex items-start pl-8">
              <div className="w-3 h-3 bg-slate-300 dark:bg-cyan-800 rounded-full -left-[5px] absolute top-1.5"></div>
              <div>
                <p className="text-xs font-medium text-slate-400 dark:text-slate-500 tracking-wide uppercase mb-0.5">03/2023 — 08/2024</p>
                <p className="font-semibold text-base leading-tight">Group One JL International</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Front End Developer &middot; Full Time</p>
              </div>
            </div>

            <div className="relative flex items-start pl-8">
              <div className="w-3 h-3 bg-slate-300 dark:bg-cyan-800 rounded-full -left-[5px] absolute top-1.5"></div>
              <div>
                <p className="text-xs font-medium text-slate-400 dark:text-slate-500 tracking-wide uppercase mb-0.5">03/2022 — 09/2022</p>
                <p className="font-semibold text-base leading-tight">Mariveles Harbor Corporation</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">I.T Support &middot; Full Time</p>
              </div>
            </div>

          </div>
        </div>

        <div className="pb-10">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-semibold ">Education</h1>
            <div>
              <div className="flex items-center gap-2 ">
                <PiCertificate className="text-2xl" />

                <p>Bataan Peninsula State University</p>
              </div>
              <strong className="md:pl-11">
                Bachelor of Science Information Technology
              </strong>
            </div>
            <div>
              <div>
                <div className="flex items-center gap-2 ">
                  <PiCertificate className="text-2xl" />

                  <p>Udemy Certificates</p>
                </div>
                <strong className="md:pl-11">
                  The Ultimate React Course : React and Supabase
                </strong>
                <br />
                <strong className="md:pl-11">
                  Web and Mobile Designer UI/UX : Html Css Tailwind Figma
                  Responsive Design
                </strong>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 ">
                <PiCertificate className="text-2xl" />

                <p>TESDA</p>
              </div>

              <strong className="md:pl-11">
                Computer Hardware Servicing NCII
              </strong>
            </div>
            <div>
              <div className="flex items-center gap-2 ">
                <PiCertificate className="text-2xl" />

                <p>TESDA</p>
              </div>

              <strong className="md:pl-11">
                Electrical Installation Maintenance NCII
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
