import { UnsplashImage } from "@/types/image-gallery";

export const ImageCard = ({
  image,
  onClick,
}: {
  image: UnsplashImage;
  onClick: () => void;
}) => {
  return (
    <div className="mb-4 overflow-hidden break-inside-avoid group rounded-md">
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={`w-full h-auto group-hover:scale-105 group-hover:cursor-pointer transition-all`}
        onClick={onClick}
      />
    </div>
  );
};
