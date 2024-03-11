import { teamImagesTop, teamImagesBottom } from "./teamImages";
import "./team-carousel.css";

export function TeamCarousel({ isLoaded }) {
  return (
    <div
      className={`team-carousel ${isLoaded ? "team-carousel--visible" : ""}`}
    >
      <div className="team-carousel__track">
        {teamImagesTop.map(({ filename }, i) => (
          <CarouselItem key={`track_${i}`} filename={filename} />
        ))}
        {teamImagesTop.map(({ filename }, i) => (
          <CarouselItem key={`track2_${i}`} filename={filename} />
        ))}
        {teamImagesTop.map(({ filename }, i) => (
          <CarouselItem key={`track3_${i}`} filename={filename} />
        ))}
        {teamImagesTop.map(({ filename }, i) => (
          <CarouselItem key={`track4_${i}`} filename={filename} />
        ))}
        {teamImagesTop.map(({ filename }, i) => (
          <CarouselItem key={`track5_${i}`} filename={filename} />
        ))}
        {teamImagesTop.map(({ filename }, i) => (
          <CarouselItem key={`track6_${i}`} filename={filename} />
        ))}
        {teamImagesTop.map(({ filename }, i) => (
          <CarouselItem key={`track7_${i}`} filename={filename} />
        ))}
        {teamImagesTop.map(({ filename }, i) => (
          <CarouselItem key={`track8_${i}`} filename={filename} />
        ))}
        {teamImagesTop.map(({ filename }, i) => (
          <CarouselItem key={`track9_${i}`} filename={filename} />
        ))}
        {teamImagesTop.map(({ filename }, i) => (
          <CarouselItem key={`track10_${i}`} filename={filename} />
        ))}
      </div>
      <div className="team-carousel__track team-carousel__track--bottom">
        {teamImagesBottom.map(({ filename }, i) => (
          <CarouselItem key={`btrack_${i}`} filename={filename} />
        ))}
        {teamImagesBottom.map(({ filename }, i) => (
          <CarouselItem key={`btrack2_${i}`} filename={filename} />
        ))}
        {teamImagesBottom.map(({ filename }, i) => (
          <CarouselItem key={`btrack3_${i}`} filename={filename} />
        ))}
        {teamImagesBottom.map(({ filename }, i) => (
          <CarouselItem key={`btrack4_${i}`} filename={filename} />
        ))}
        {teamImagesBottom.map(({ filename }, i) => (
          <CarouselItem key={`btrack5_${i}`} filename={filename} />
        ))}
        {teamImagesBottom.map(({ filename }, i) => (
          <CarouselItem key={`btrack6_${i}`} filename={filename} />
        ))}
        {teamImagesBottom.map(({ filename }, i) => (
          <CarouselItem key={`btrack7_${i}`} filename={filename} />
        ))}
        {teamImagesBottom.map(({ filename }, i) => (
          <CarouselItem key={`btrack8_${i}`} filename={filename} />
        ))}
        {teamImagesBottom.map(({ filename }, i) => (
          <CarouselItem key={`btrack9_${i}`} filename={filename} />
        ))}
        {teamImagesBottom.map(({ filename }, i) => (
          <CarouselItem key={`btrack10_${i}`} filename={filename} />
        ))}
      </div>
    </div>
  );
}

function CarouselItem({ filename }) {
  const assetDir = "/images/carousel/";
  const large = `${assetDir}${filename}-517.png`;
  const small = `${assetDir}${filename}-191.png`;
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
