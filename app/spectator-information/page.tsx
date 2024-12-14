"use client";

import { MouseEventHandler } from "react";
import useLightBoxModal from "@/hooks/use-lightbox-modal";
import Hero from "@/components/Hero";
import Image from "next/image";

import { ChevronLeftCircle, ChevronRightCircle, XCircle } from "lucide-react";

const Page = () => {
  const images: [] = [
    // require("@/public/assets/HCF poster 2024.jpg"),
    // require("@/public/assets/HCF 2024 PRESENTATIONS.jpg"),
    // require("@/public/assets/HCF_vendor list 2024.jpg"),
    // require("@/public/assets/2024_Coupon.jpg"),
  ];

  const lightboxModal = useLightBoxModal();

  const onLightbox: MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation();
    const index: number = Number(
      event.currentTarget.getAttribute("data-index")
    );
    lightboxModal.onOpen(images, index);
  };

  return (
    <>
      <Hero pageTitle="Spectator" sub="Information" />

      <div className="flex flex-col sm:py-16 py-6 px-16 bg-[#D9D9D9] text-secondaryBg">
        {/* <h2 className="w-full text-center font-caudex text-4xl text-secondaryBg font-bold">
          Click on the flyer to expand
        </h2> */}

        <div className="flex justify-center items-center md:flex-row flex-col md:gap-16 gap-8 sm:py-16 py-6 flex-wrap">
          {images &&
            images.map((image, index) => (
              <Image
                src={image}
                key={index}
                data-index={index}
                width={500}
                height={300}
                alt="flyer"
                className="hover:cursor-pointer rounded-xl border-[#3E3E3E] border-4 w="
                onClick={onLightbox}
              />
            ))}
          {images.length == 0 && (
            <div className="text-4xl">No information yet. Coming soon!</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
