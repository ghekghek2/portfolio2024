import ProjectUi from "./ProjectUi";
function Mockup() {
  const mockup = [
    {
      title: "Food hunt",
      description:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas explicabo officia beatae culpa pariatur facere voluptatibus commodi quis earum praesentium.",

      link: "www.figma.com/proto/X5Myh2KykVv0WfhGD4ujC2/Food-web-app-design-(Copy)?page-id=0%3A1&type=design&node-id=55759-90&viewport=199%2C179%2C0.13&t=57yN6ObVrDtR60KN-1&scaling=scale-down&starting-point-node-id=1%3A2&show-proto-sidebar=1&mode=design",
      img: ["../mockup1.png"],
      skillTag: ["Figma"],
    },
    {
      title: "Pinoy Music App",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas explicabo officia beatae culpa pariatur facere voluptatibus commodi quis earum praesentium.",
      link: "www.figma.com/file/TAtUeNwxzfT83SXXLJydji/Music?type=design&node-id=0%3A1&mode=design&t=omgUEEUjOIJ4NERM-1",
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
