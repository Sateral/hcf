"use client";

import Image from "next/image";
import { MouseEventHandler } from "react";
import useLightBoxModal from "@/hooks/use-lightbox-modal";
import Hero from "@/components/Hero";
import image1 from "@/public/assets/flyer-front.jpg";
import image2 from "@/public/assets/flyer-back.jpg";
import image3 from "@/public/assets/theme.jpg";

const Page = () => {
  const lightboxModal = useLightBoxModal();

  const onLightbox: MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation();
    const index: number = Number(
      event.currentTarget.getAttribute("data-index")
    );
    lightboxModal.onOpen(images, index);
  };

  const flyerEng = () => {
    const engFlyerURL =
      "https://www.hamiltoncatshow.ca/Images_2023/hcf_2023_flyer_EN.pdf";
    window.open(engFlyerURL, "_blank");
  };

  const flyerFr = () => {
    const frFlyerURL = "/assets/HCF_2023_flyer_FR.pdf";
    const link = document.createElement("a");
    link.href = frFlyerURL;
    link.setAttribute("download", "HCF_2023_flyer_FR.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const theme = () => {
    const themeURL =
      "https://www.hamiltoncatshow.ca/Images_2023/steampunk_cats_contest.pdf";
    window.open(themeURL, "_blank");
  };

  const images = [image1.src, image2.src, image3.src];

  return (
    <>
      <Hero pageTitle="Next" sub="Show" />

      <div className="bg-[#E8EBF2] flex flex-col sm:py-16 py-6">
        <h2 className="w-full text-center font-caudex text-4xl text-secondaryBg font-bold">
          Click on the flyer to expand
        </h2>

        <div className="flex justify-center items-center md:flex-row flex-col md:gap-16 gap-8 sm:py-16 py-6 px-4 flex-wrap">
          {images.map((image, index) => (
            <Image
              src={image}
              key={index}
              width={500}
              height={500}
              alt="flyer"
              data-index={index}
              className="hover:cursor-pointer rounded-xl border-[#3E3E3E] border-4"
              onClick={onLightbox}
            />
          ))}
        </div>

        <div className="flex justify-around items-center sm:flex-row flex-col text-secondaryBg">
          <button
            onClick={flyerEng}
            className="border-secondaryBg border-2 sm:w-64 w-96 h-16 flex justify-center items-center rounded-full hover:bg-secondaryBg  hover:text-primaryBg transition ease-in-out cursor-pointer"
          >
            <p className="font-kulim sm:text-xl text-lg">Download Flyer PDF</p>
          </button>

          <button
            onClick={flyerFr}
            className="border-secondaryBg border-2 sm:w-72 w-96 h-16 sm:my-0 my-8 flex justify-center items-center rounded-full hover:bg-secondaryBg  hover:text-primaryBg transition ease-in-out cursor-pointer"
          >
            <p className="font-kulim sm:text-xl text-lg">
              Download French Flyer Version
            </p>
          </button>

          <button
            onClick={theme}
            className="border-secondaryBg border-2 sm:w-64 w-96 h-16 flex justify-center items-center rounded-full hover:bg-secondaryBg  hover:text-primaryBg transition ease-in-out cursor-pointer"
          >
            <p className="font-kulim sm:text-xl text-lg">Download Theme PDF</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Page;
