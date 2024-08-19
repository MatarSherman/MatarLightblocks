'use client';

import { teamImagesTop, teamImagesBottom } from "./teamImages";
import "./team-carousel.css";

const concatDupe = (array=[], dupesAmount) => {
  const newArray = []
  for (let count = 0; count < dupesAmount; count++) {
    newArray.push(...array)
  }
  return newArray
}

export function TeamCarousel({ isLoaded }) {
  return (
    <div
      className={`team-carousel ${isLoaded ? "team-carousel--visible" : ""}`}
    >
      <div className="team-carousel__track">
        {
        concatDupe(teamImagesTop, 4).map(({ filename }, i) => (
          <CarouselItem key={`track_${i}`} filename={filename} />
        ))}
      </div>
      <div className="team-carousel__track team-carousel__track--bottom">
        {concatDupe(teamImagesBottom, 4).map(({ filename }, i) => (
          <CarouselItem key={`btrack_${i}`} filename={filename} />
        ))}
      </div>
    </div>
  );
}

function CarouselItem({ filename }) {
  const assetDir = "/images/carousel/";
  const large = `${assetDir}${filename}-517.jpg`;
  const small = `${assetDir}${filename}-191.jpg`;
  return (
    // <div className="team-carousel__image-container">
    <img
      width={517}
      height={344.38}
      className="team-carousel__image"
      src={large}
      srcSet={`${small} 191w, ${large} 517w`}
      sizes="(max-width: 768px) 191px,
         517px"
      alt=""
    />
    // </div>
  );
}
