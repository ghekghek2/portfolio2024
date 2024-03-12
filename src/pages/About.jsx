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
          <div className="timeline w-full flex flex-col  gap-24 relative pl-2">
            <div className="line absolute h-full w-1  bg-slate-200 dark:bg-cyan-950 rounded-full"></div>
            <div className="containerx left-container relative flex items-center ">
              <div className="w-4 h-4 bg-slate-300 dark:bg-cyan-800 rounded-full -left-[6px] absolute "></div>
              <div className="text-box ml-10">
                Group One Jl International Inc <br />
                <b>
                  <span>Junior Front-End - Ui / Ux</span>
                </b>
                &nbsp;&nbsp;&nbsp;
                <small>Full Time</small>&nbsp;&nbsp;&nbsp;
                <small>Present</small>
              </div>
            </div>
            <div className="containerx right-container relative flex items-center gap-2">
              <div className="w-4 h-4 bg-slate-300 dark:bg-cyan-800 rounded-full -left-[6px] absolute "></div>
              <div className="text-box ml-10">
                Mariveles Harbor Corporation <br />
                <b>
                  <span>I.T Support</span>
                </b>
                &nbsp;&nbsp;&nbsp;
                <small>Full Time</small>
              </div>
            </div>
            <div className="containerx left-container relative flex items-center gap-2">
              <div className="w-4 h-4 bg-slate-300 dark:bg-cyan-800 rounded-full -left-[6px] absolute "></div>
              <div className="text-box ml-10">
                Crizvi Resort <br />
                <b>
                  <span>Computer Technician</span>
                </b>
                &nbsp;&nbsp;&nbsp;
                <small>Part Time</small>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-10">
          <h1 className="text-3xl font-semibold">Education</h1>
          <div>
            <div>
              <p>Bataan Peninsula State University</p>
            </div>
            <b>
              <p>Bachelor of Science Information Technology</p>
            </b>

            <div>
              <p>TESDA</p>
            </div>
            <b>
              <p>Computer Hardware Servicing NCII</p>
            </b>

            <div>
              <p>TESDA</p>
            </div>
            <b>
              <p>Electrical Installation Maintenance NCII</p>
            </b>

            <div>
              <p>Udemy Certificates</p>
            </div>
            <b>
              <p>The Ultimate React Course 2024: React and Supabase</p>
              <p>
                Web and Mobile Designer UI/UX : Html Css Tailwind Figma
                Responsive Design{" "}
              </p>
            </b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
