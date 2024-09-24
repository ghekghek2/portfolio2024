import ProjectUi from "./ProjectUi";

function Live() {
  const projects = [
    {
      title: "ChemStash",
      description:
        "ChemStash is a full-stack application designed to simplify chemical inventory management and real-time task coordination for laboratories. Developed in collaboration with chemists in Taiwan, I contributed as both a UI/UX designer and full-stack developer, ensuring an intuitive interface and seamless functionality. ",

      link: "mern-with-auth-rba5.onrender.com/manager/dashboard",
      demo: "my.spline.design/untitled-ca6514341383ae3018bef86408dfaa28/",
      img: ["../chemstash2.png", "../chemstash.png"],
      skillTag: ["MongoDB", "Express Js", "React", "Daisy Ui", "Figma"],
    },
    {
      title: "Kubook",
      description:
        "  Kubook is a user-friendly online booking dashboard designed exclusively for front desk operations, offering a seamless scheduling experience . With its intuitive interface, managing appointments and services becomes effortless, ensuring efficient front desk management without any hassle",

      link: "kubook.vercel.app/",
      img: [
        "../dashboard.png",
        "../checkin.png",
        "../booking.png",
        "../dashboard-dark.png",
        "../checkin-dark.png",
        "../booking-dark.png",
      ],
      skillTag: ["React", "Supabase", "Styled-component", "css"],
    },
    {
      title: "Escreentest",
      description:
        "  Escreentest simplifies the hiring process by allowing employers to create online tests for applicants. Candidates can take these tests remotely, enabling employers to efficiently shortlist qualified candidates before interviews.",
      link: "escreentest.vercel.app/home",
      img: ["../test1.png"],
      skillTag: ["React", "Supabase", "Styled-component", "css"],
    },

    {
      title: "Movie Collection",
      description:
        " Explore, organize, and rate films effortlessly with Movie Collection watch list app. Discover new favorites and keep track of your cinematic journey, all in one intuitive platform",

      link: "collectmovie.netlify.app",
      img: ["../movie.PNG"],
      skillTag: ["React", "omdbapi", "Tailwind"],
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
