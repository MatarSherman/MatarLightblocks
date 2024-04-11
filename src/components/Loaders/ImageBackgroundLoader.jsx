import Image from "next/image";

const ImageBackgroundLoader = () => {
  return (
    <div className="image-background-loader">
      <Image
        className="grid-background-image"
        src={"/Lightblocks-Home-Grid-1920x1320.jpg"}
        alt="background image"
        fill
        priority
      />
    </div>
  );
};
export default ImageBackgroundLoader;
