import { FC, useState } from "react";
import { UnsplashImage } from "@/types/image-gallery";
import { ImageCard } from "../image-card";
import { Modal } from "../modal";

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

      <Modal onClose={handleCloseModal} isOpen={!!selectedImage}>
        <img
          src={selectedImage?.urls.regular}
          alt={selectedImage?.alt_description}
          className="w-full h-full object-cover"
        />
      </Modal>
    </div>
  );
};
