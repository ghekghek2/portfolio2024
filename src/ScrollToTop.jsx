import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollableElement = document.getElementById("outlet");
    if (scrollableElement) {
      scrollableElement.scrollTop = 0;
    }
  }, [pathname]);

  return null;
}

export default ScrollToTop;
