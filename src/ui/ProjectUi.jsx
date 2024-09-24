import Readmore from "./Readmore";

function ProjectUi({ desc }) {
  return (
    <div className="mb-4 md:mb-8">
      <div className="flex justify-between md:flex-row flex-col gap-4 md:gap-12">
        {/* Left Side (Description Section) */}
        <div className="flex-1">
          <div className="sticky top-40">
            {" "}
            {/* Moved sticky outside flexbox */}
            <div className="font-bold text-3xl mt-0">{desc.title}</div>
            <div>
              <Readmore>{desc.description}</Readmore>
              <div className="flex gap-2">
                <div className="my-4 flex border-b border-transparent dark:border-b dark:border-cyan-500 px-2 py-1 rounded-md w-fit items-center gap-2 text-lg bg-slate-700 dark:bg-slate-900 text-slate-50">
                  <a href={`https://${desc.link}`} target="_blank" className="">
                    Visit
                  </a>
                </div>
                {desc.demo && (
                  <div className="my-4 flex border-b border-transparent dark:border-b dark:border-cyan-500 px-2 py-1 rounded-md w-fit items-center gap-2 text-lg bg-slate-700 dark:bg-slate-900 text-slate-50">
                    <a
                      href={`https://${desc.demo}`}
                      target="_blank"
                      className=""
                    >
                      Demo
                    </a>
                  </div>
                )}
              </div>
              <div className="flex gap-2 justify-end flex-wrap">
                {desc.skillTag.map((skill, index) => (
                  <p
                    className="border-slate-300 border p-1 rounded-md mt-0 md:mt-6 tag text-sm dark:bg-transparent dark:border-slate-800"
                    key={index}
                  >
                    {skill}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side (Images Section) */}
        <div className="flex flex-col w-full max-w-4xl gap-2">
          {desc.img.map((image, index) => (
            <img
              className="transition-all duration-500 "
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
