'use client';

import Image from 'next/image';
import Hero from '@/components/Hero';
import Lightbox from '@/components/lightbox';
import { currentShow } from '@/constants/current-show';
import { downloadFile } from '@/lib/download';

const Page = () => {
  const downloadPoster = () => {
    downloadFile(
      currentShow.flyers.posterPdf,
      currentShow.flyers.posterDownloadName
    );
  };

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
          {currentShow.flyers.images.map((image, index) => (
            <Image
              src={image}
              key={index}
              width={500}
              height={500}
              alt="flyer"
              className="hover:cursor-pointer rounded-xl border-[#3E3E3E] border-4"
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
            onClick={downloadPoster}
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
