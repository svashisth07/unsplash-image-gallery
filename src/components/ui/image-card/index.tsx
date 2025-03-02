import { UnsplashImage } from "@/types/image-gallery";

export const ImageCard = ({ image }: { image: UnsplashImage }) => {
  return (
    <div className="mb-4 overflow-hidden break-inside-avoid group rounded-md">
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={`w-full h-auto group-hover:scale-105`}
      />
    </div>
  );
};
