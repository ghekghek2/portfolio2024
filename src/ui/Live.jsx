import ProjectUi from "./ProjectUi";

function Live() {
  const projects = [
    "../dashboard.png",
    "../dashboard-dark.png",
    // "../checkin.png",
    // "../checkin-dark.png",
    // "../booking-dark.png",
  ];

  return (
    <div className="">
      <ProjectUi des="des1" title="Project 1" img={projects} />
      <ProjectUi des="des2" title="Project 2" img={projects} />
      <ProjectUi des="des3" title="Project 3" img={projects} />
    </div>
  );
}

export default Live;
