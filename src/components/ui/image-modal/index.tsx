import React from "react";
import { UnsplashImage } from "@/types/image-gallery";
import { Button } from "../button";
import { Z_INDEX } from "@/constants";

interface ImageModalProps {
  image: UnsplashImage;
  onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-[${Z_INDEX.MODAL}] flex overflow-hidden bg-black/60`}
    >
      <div className="relative bg-white w-full max-w-screen-sm h-auto max-h-[90vh] m-auto flex-col flex rounded-lg shadow-lg overflow-hidden">
        <div className="flex justify-end absolute top-0 right-0">
          <Button variant="secondary" onClick={onClose}>
            <span className="text-2xl">&times;</span>
          </Button>
        </div>
        <img
          src={image.urls.regular}
          alt={image.alt_description}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};
