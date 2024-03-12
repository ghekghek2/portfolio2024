import About from "../pages/About";
import Home from "../pages/Home";
import Skill from "../pages/Skill";

function AppLayout() {
  return (
    <div className="gap-4 flex flex-col">
      <Home />
      <Skill />
      <About />
    </div>
  );
}

export default AppLayout;
