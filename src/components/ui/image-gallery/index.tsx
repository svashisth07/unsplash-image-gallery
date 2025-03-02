import { FC, useState } from "react";
import { UnsplashImage } from "@/types/image-gallery";
import { ImageCard } from "../image-card";
import { ImageModal } from "../image-modal";

interface ImageGalleryProps {
  images: UnsplashImage[];
}

export const ImageGallery: FC<ImageGalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<UnsplashImage | null>(
    null
  );

  const handleImageClick = (image: UnsplashImage) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="columns-1 md:columns-2 lg:columns-4 p-4 min-h-screen">
      {images.map((image) => (
        <ImageCard
          image={image}
          key={image.id}
          onClick={() => handleImageClick(image)}
        />
      ))}
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};
