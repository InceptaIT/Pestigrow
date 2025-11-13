// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // Get the current location object from React Router
  const { pathname } = useLocation();

  // This effect runs every time the pathname (route) changes
  useEffect(() => {
    // Scroll the window to the top left position
    window.scrollTo(0, 0);
  }, [pathname]); // Depend on pathname to trigger on route change

  // This component doesn't render anything visually
  return null;
};

export default ScrollToTop;
