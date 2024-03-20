import ProjectUi from "./ProjectUi";
function Movie() {
  const movies = [
    {
      title: " movie Collection",
      description:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas explicabo officia beatae culpa pariatur facere voluptatibus commodi quis earum praesentium.",

      link: "www.figma.com/proto/X5Myh2KykVv0WfhGD4ujC2/Food-web-app-design-(Copy)?page-id=0%3A1&type=design&node-id=55759-90&viewport=199%2C179%2C0.13&t=57yN6ObVrDtR60KN-1&scaling=scale-down&starting-point-node-id=1%3A2&show-proto-sidebar=1&mode=design",
      img: ["../movie.png"],
      skillTag: ["React"],
    },
  ];

  return (
    <div className="mt-20">
      {movies.map((movie, index) => (
        <ProjectUi key={index} desc={movie} />
      ))}
    </div>
  );
}

export default Movie;
