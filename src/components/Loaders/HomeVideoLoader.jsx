"use client";

import { useState } from "react";
import { Video } from "@/app/shared/components/Video";
import useWindowSize from "@/hooks/useWindowsSize";
import SplineBackground from "../Spline/SplineBackground";

import "@/app/home.css";

const HomeVideoLoader = () => {
  const [ended, setEnded] = useState(false);
  const size = useWindowSize();

  // Don't allow it on small screens
  if (size.width < 770) {
    return null;
  }

  const onEnded = () => {
    setEnded(true);
  };

  return (
    <>
      <div className={`logo_animation__video_container`}>
        <Video
          className="logo_animation__video"
          src="/video/quick_logo_animation.mp4"
          onEnded={onEnded}
          loop={false}
          videoType="video/mp4"
        />
      </div>
      {ended && <SplineBackground />}
    </>
  );
};
export default HomeVideoLoader;
