"use client";

import { Video } from "@/app/shared/components/Video";
import useWindowSize from "@/hooks/useWindowsSize";

const VideoBackgroundLoader = () => {
  const size = useWindowSize();

  // Don't allow it on large screens
  if (size.width > 768) {
    return null;
  }

  return (
    <div className="home-hero__background-video-container">
      <Video src="/video/hero_bg.mp4" className="home-hero__background-video" />
    </div>
  );
};
export default VideoBackgroundLoader;
