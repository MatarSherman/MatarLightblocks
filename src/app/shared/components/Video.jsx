"use client";

import { useEffect, useState } from "react";
import { browserName } from "react-device-detect";

export function useBrowserID() {
  const browserString = browserName;
  const isSafari = browserString.toLowerCase().includes("safari");
  return { isSafari };
}

export function Video({ className, src, alt = "", setBgIsLoaded, onEnded, loop=true, videoType }) {
  const [videoSrc, setVideoSrc] = useState("");
  const { isSafari } = useBrowserID();

  // this is needed to make sure the onPlay event listener is initialized before the video starts playing
  // otherwise the event never fires and text stays hidden
  useEffect(() => {
    setVideoSrc(src);
  }, [setVideoSrc, src]);

  return isSafari ? (
    <img
      className={className}
      onLoad={() => {
        setBgIsLoaded?.(true);
      }}
      src={videoSrc}
      alt={alt}
    />
  ) : (
    <video
      className={className}
      onPlay={() => {
        setBgIsLoaded?.(true);
      }}
      onEnded={onEnded}
      autoPlay
      muted
      loop={loop}
      playsInline
      disablePictureInPicture
    >
      {videoSrc && <source src={videoSrc} type={videoType || "video/mp4"} />}
    </video>
  );
}
