"use client";

import useWindowSize from "@/hooks/useWindowsSize";
import React, { Suspense, useState } from "react";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

const SplineBackground = () => {
  const [loaded, setLoaded] = useState(false);
  const size = useWindowSize();

  // Don't allow it on small screens
  if (size.width < 770) {
    return null;
  }

  const onLoad = () => {
    const el = document.getElementsByClassName("spline-container")[0];
    if (el) {
      el.style.opacity = 1;
      el.style.transition = "opacity 1.7s ease-out";
    }
  };

  return (
    <Suspense fallback={""}>
      <div className={`spline-container`}>
        <Spline
          scene="https://prod.spline.design/0rqxcsk4GcwtvCqk/scene.splinecode"
          onLoad={onLoad}
        />
      </div>
    </Suspense>
  );
};

export default SplineBackground;
