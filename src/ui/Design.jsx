import ProjectUi from "./ProjectUi";

function Design() {
  const webDesign = [
    {
      title: "Food hunt",
      description:
        "Ordering platform design providing a seamless experience for exploring and ordering culinary delights.",

      link: "www.figma.com/proto/X5Myh2KykVv0WfhGD4ujC2/Food-web-app-design-(Copy)?page-id=0%3A1&type=design&node-id=55759-90&viewport=199%2C179%2C0.13&t=57yN6ObVrDtR60KN-1&scaling=scale-down&starting-point-node-id=1%3A2&show-proto-sidebar=1&mode=design",
      img: ["../food2.png", "../food1.png"],
      skillTag: ["Figma"],
    },
    {
      title: "Pik-nik Landing page",
      description:
        "Snack landing page design offering a delightful browsing experience for snack enthusiasts.",
      link: "www.figma.com/file/43DT3VA43vuX2jcfCXYyY8/Piknik?type=design&node-id=0%3A1&mode=design&t=demvLnkE099EG5Bt-1",
      img: ["../piknik.png"],
      skillTag: ["Figma"],
    },
    {
      title: "Ghekfix",
      description:
        "Landing page design catering to computer repair services, ensuring easy access to technical support.",
      link: "www.figma.com/file/x3GsiTroWD1XBvX9bMNWpy/Ghekfix?type=design&node-id=0%3A1&mode=design&t=8Kt5Ad40FCwPgNOh-1",
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
