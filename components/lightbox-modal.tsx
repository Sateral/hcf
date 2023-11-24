"use client";

import { FC } from "react";
import useLightboxModal from "@/hooks/use-lightbox-modal";
import Modal from "@/components/ui/modal";
import Image from "next/image";

const LightboxModal = ({}) => {
  const lightboxModal = useLightboxModal();
  const images = useLightboxModal((state) => state.data);
  const index = useLightboxModal((state) => state.currentIndex);

  if (!images) {
    console.log("No images");
    return null;
  }

  if (lightboxModal.isOpen) {
    console.log("OPEN!");
  }

  return (
    <Modal
      open={lightboxModal.isOpen}
      onClose={lightboxModal.onClose}
      nextSlide={lightboxModal.nextSlide}
      prevSlide={lightboxModal.prevSlide}
      index={index}
      slideLength={images.length}
    >
      <Image
        src={images[index]}
        alt="Image"
        width={1000}
        height={1000}
        className="absolute top-[47.5%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-w-[95%] max-h-[90%] object-contain"
      />
    </Modal>
  );
};

export default LightboxModal;
