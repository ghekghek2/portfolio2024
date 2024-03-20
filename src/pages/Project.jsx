import { Outlet } from "react-router-dom";

function Project() {
  return (
    <div className=" mx-auto parent ">
      <div className="mt-12">
        <Outlet />
      </div>
    </div>
  );
}

export default Project;
