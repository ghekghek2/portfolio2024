import ProjectUi from "./ProjectUi";
function Mockup() {
  const mockup = [
    {
      title: "Food hunt",
      description:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas explicabo officia beatae culpa pariatur facere voluptatibus commodi quis earum praesentium.",

      link: "kubook.vercel.app/",
      img: ["../mockup1.png"],
      skillTag: ["Figma"],
    },
    {
      title: "Pinoy Music App",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas explicabo officia beatae culpa pariatur facere voluptatibus commodi quis earum praesentium.",
      link: "escreentest.vercel.app/home",
      img: ["../mockup2.png"],
      skillTag: ["Figma"],
    },
  ];

  return (
    <div className="mt-20">
      {mockup.map((mockup, index) => (
        <ProjectUi key={index} desc={mockup} />
      ))}
    </div>
  );
}

export default Mockup;
