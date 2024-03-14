"use client";
import { useEffect, useState } from "react";

import { browserName } from "react-device-detect";
import './video.css'

export function useBrowserID() {
  const browserString = browserName;
  const isSafari = browserString.toLowerCase().includes("safari");
  return { isSafari };
}

export function Video({ className='', src, alt = "", isSmoothLoad, skipSafariCheck, setBgIsLoaded }) {
  const [videoSrc, setVideoSrc] = useState("");
  const { isSafari } = skipSafariCheck ? false : useBrowserID();
  const [isLoaded, setIsLoaded] = useState(!isSmoothLoad);

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
      className={`${className} ${isSmoothLoad ? 'smooth-load-video' : ''} ${isLoaded ? 'loaded-video' : 'loading-video'}`}
      onPlay={() => {
        if (!isLoaded) {
          setIsLoaded(true)
        }
        setBgIsLoaded?.(true);
      }}
      autoPlay
      muted
      loop
      playsInline
    >
      {videoSrc && <source src={videoSrc} type="video/mp4" />}
    </video>
  );
}
