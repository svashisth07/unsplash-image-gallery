import React from "react";
import { createPortal } from "react-dom";
import { Button } from "../button";
import { usePortal } from "@/hooks/usePortal";
import { Z_INDEX } from "@/constants";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
  isOpen: boolean;
}

export const Modal: React.FC<ModalProps> = ({ children, onClose, isOpen }) => {
  const target = usePortal("modal");
  const zIndexClass = `z-[${Z_INDEX.MODAL}]`;

  return isOpen
    ? createPortal(
        <div
          className={`fixed inset-0 flex overflow-hidden bg-black/60 ${zIndexClass}`}
        >
          <div className="relative bg-white w-full max-w-screen-sm h-auto max-h-[90vh] m-auto flex-col flex rounded-lg shadow-lg overflow-hidden">
            <div className="flex justify-end absolute top-0 right-0">
              <Button variant="secondary" onClick={onClose}>
                <span className="text-2xl">&times;</span>
              </Button>
            </div>
            {children}
          </div>
        </div>,
        target
      )
    : null;
};
