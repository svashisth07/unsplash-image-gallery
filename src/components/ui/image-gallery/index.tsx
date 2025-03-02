import { FC } from "react";
import { UnsplashImage } from "@/types/image-gallery";
import { ImageCard } from "../image-card";

interface ImageGalleryProps {
  images: UnsplashImage[];
}

export const ImageGallery: FC<ImageGalleryProps> = ({ images }) => {
  return (
    <div className="columns-1 md:columns-2 lg:columns-4 p-4">
      {images.map((image) => (
        <ImageCard image={image} key={image.id} />
      ))}
    </div>
  );
};
