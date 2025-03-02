'use client';

import Image from 'next/image';
import { MouseEventHandler } from 'react';
import useLightBoxModal from '@/hooks/use-lightbox-modal';
import Hero from '@/components/Hero';
import Lightbox from '@/components/lightbox';

const Page = () => {
  const lightboxModal = useLightBoxModal();

  const onLightbox: MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation();
    const index: number = Number(
      event.currentTarget.getAttribute('data-index')
    );
    lightboxModal.onOpen(images, index);
  };

  const flyerEng = () => {
    const flyerEng = '/assets/hcf_2024_flyer REVISED JUDGES.pdf';
    const link = document.createElement('a');
    link.href = flyerEng;
    link.setAttribute('download', 'hcf_2024_flyer.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const theme = () => {
    const theme = '/2025-03/hcf_2025_flyer revised judges.pdf';
    const link = document.createElement('a');
    link.href = theme;
    link.setAttribute('download', 'hcf_2025_flyer ENGLISH.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const images = [
    '/2025-03/hcf_2025_flyer revised 1.jpg',
    '/2025-03/hcf_2025_flyer revised 2.jpg',
    '/2025-03/HCF event poster 2025.jpg',
    '/2025-03/HCFevent poster 2025 2.jpg',
  ];

  return (
    <>
      <Hero pageTitle="Next" sub="Show" />

      <div className="flex flex-col justify-center items-center sm:py-16 py-6 px-16 bg-[#E8EBF2] text-secondaryBg">
        <div className="text-start w-full">
          <h2 className="w-full text-left text-5xl text-secondaryBg font-bold">
            Event Flyers
          </h2>
          <h3 className="text-2xl">Click on the flyers to expand</h3>
        </div>

        {/* <Lightbox className="flex justify-center items-center md:flex-row flex-col md:gap-16 gap-8 sm:py-16 py-6 px-4 flex-wrap"> */}
        <Lightbox className="grid grid-cols-1  md:grid-cols-3 gap-6 w-full py-6 justify-items-center">
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
        </Lightbox>

        <div className="flex justify-around items-center sm:flex-row flex-col text-secondaryBg">
          {/* <button
            onClick={flyerEng}
            className="border-secondaryBg border-2 sm:w-64 w-96 h-16 flex justify-center items-center rounded-full hover:bg-secondaryBg  hover:text-primaryBg transition ease-in-out cursor-pointer"
          >
            <p className="font-kulim sm:text-xl text-lg">Download Flyer PDF</p>
          </button> */}

          <button
            onClick={theme}
            className="border-secondaryBg border-2 sm:w-64 w-96 h-16 flex justify-center items-center rounded-full hover:bg-secondaryBg  hover:text-primaryBg transition ease-in-out cursor-pointer"
          >
            <p className="font-kulim sm:text-xl text-lg">
              Download HCF Poster PDF
            </p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Page;
