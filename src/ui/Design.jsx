import ProjectUi from "./ProjectUi";

function Design() {
  const webDesign = [
    {
      title: "Food hunt",
      description:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas explicabo officia beatae culpa pariatur facere voluptatibus commodi quis earum praesentium.",

      link: "kubook.vercel.app/",
      img: ["../food2.png", "../food1.png"],
      skillTag: ["Figma"],
    },
    {
      title: "Pik-nik Landing page",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas explicabo officia beatae culpa pariatur facere voluptatibus commodi quis earum praesentium.",
      link: "escreentest.vercel.app/home",
      img: ["../piknik.png"],
      skillTag: ["Figma"],
    },
    {
      title: "Ghekfix",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas explicabo officia beatae culpa pariatur facere voluptatibus commodi quis earum praesentium.",
      link: "escreentest.vercel.app/home",
      img: ["../gfix1.png", "../gfix2.png", "../gfix3.png"],
      skillTag: ["Figma"],
    },
  ];

  return (
    <div className="mt-20">
      {webDesign.map((webdesign, index) => (
        <ProjectUi key={index} desc={webdesign} />
      ))}
    </div>
  );
}

export default Design;
