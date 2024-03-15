import ProjectUi from "./ProjectUi";

function Live() {
  const projects = [
    {
      title: "Kubook",
      description:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas explicabo officia beatae culpa pariatur facere voluptatibus commodi quis earum praesentium.",

      link: "kubook.vercel.app/",
      img: [
        "../dashboard.png",
        "../dashboard-dark.png",
        "../checkin.png",
        "../checkin-dark.png",
        "../booking-dark.png",
      ],
      skillTag: ["React", "Supabase", "Styled-component"],
    },
    {
      title: "Escreentest",
      description:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas explicabo officia beatae culpa pariatur facere voluptatibus commodi quis earum praesentium.",
      link: "escreentest.vercel.app/home",
      img: ["../test1.png", "../test2.png", "../test3.png"],
      skillTag: ["React", "Supabase", "Styled-component"],
    },
  ];

  return (
    <div className="mt-20">
      {projects.map((project, index) => (
        <ProjectUi key={index} desc={project} />
      ))}
    </div>
  );
}

export default Live;
