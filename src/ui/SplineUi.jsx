import Spline from "@splinetool/react-spline";
import { useRef, useMemo, useState } from "react";

function SplineUi() {
  const spline = useRef();
  const [isLoading, setIsLoading] = useState(true); // Loading state

  const onLoad = useMemo(
    () => (splineApp) => {
      spline.current = splineApp;
      setIsLoading(false); // Stop loading once the scene is loaded
    },
    []
  );

  return (
    <>
      {isLoading && (
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="text-white">Loading Spline...</div>
        </div>
      )}

      <Spline
        scene="https://prod.spline.design/BthIDeQCQg7R1t-F/scene.splinecode"
        className="spline"
        onLoad={onLoad}
      />

      {/* <div className="absolute bottom-0 right-0  ">
        <div className="relative -right-[250px] w-[500px] bg-slate-700 rounded-full rotate-12 -bottom-[350px] h-[500px] flex justify-center items-center">
          <div className="absolute w-[400px] bg-slate-800 z-50 rounded-full rotate-12 h-[400px]"></div>
        </div>
      </div> */}
    </>
  );
}

export default SplineUi;
