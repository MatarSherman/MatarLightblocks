"use client";

import { useEffect, useState } from "react";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    handleResize();

    // Cleanup listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return windowSize;
}

export default useWindowSize;
