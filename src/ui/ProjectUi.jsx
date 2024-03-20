import Readmore from "./Readmore";

function ProjectUi({ desc }) {
  return (
    <div className="mb-4 md:mb-8   ">
      <div className="flex justify-between md:flex-row flex-col   gap-4 md:gap-12">
        <div className="md:w-1/3 flex  flex-col  justify-center ">
          <div className="font-bold text-3xl mt-0 ">{desc.title}</div>

          <div className=" ">
            {/* <div className="text">{desc.description}</div> */}

            <Readmore>{desc.description}</Readmore>
            <div className="my-4 flex border-b border-transparent dark:border-b  dark:border-cyan-500 px-2 py-1 rounded-md w-fit items-center gap-2 text-lg bg-slate-700 dark:bg-slate-900  text-slate-50">
              <a href={`https://${desc.link}`} target="_blank" className="   ">
                Visit
              </a>
            </div>
            <div className="flex gap-2 justify-end">
              {desc.skillTag.map((skill, index) => (
                <p
                  className="border-slate-300 border p-1 rounded-md mt-6 tag text-sm dark:bg-transparent dark:border-slate-800"
                  key={index}
                >
                  {skill}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div
          className={`w-100 md:w-4/5 grid  ${
            desc.img.length > 2
              ? "grid-cols-3"
              : desc.img.length === 1
              ? ""
              : "grid-cols-2"
          } gap-2  md:items-end justify-center  transition-all  p-2  shadow-sm rounded-md`}
        >
          {desc.img.map((image, index) => (
            <img
              className=" transition-all duration-500 "
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
