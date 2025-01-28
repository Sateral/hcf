'use client';

import { MouseEventHandler } from 'react';
import Hero from '@/components/Hero';
import Image from 'next/image';

import { ChevronLeftCircle, ChevronRightCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Lightbox from '@/components/lightbox';

const Page = () => {
  const images = ['/2025-03/HCF_web coupon 2025.jpg'];

  const downloadPDF = (path: string) => {
    const link = document.createElement('a');
    link.href = path;
    link.setAttribute('download', 'HCF_web coupon 2025.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Hero pageTitle="Spectator" sub="Information" />

      <div className="flex flex-col justify-center items-center sm:py-16 py-6 px-16 bg-[#D9D9D9] text-secondaryBg">
        <h2 className="w-full text-center font-caudex text-4xl text-secondaryBg font-bold">
          Click on the flyer to expand
        </h2>

        <div className="flex flex-row justify-center items-center md:gap-16 gap-8 sm:py-16 py-6 flex-wrap">
          <Lightbox className="flex justify-center items-center md:flex-row flex-col md:gap-16 gap-8 px-4 flex-wrap">
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
                />
              ))}
          </Lightbox>
          {images.length == 0 && (
            <div className="text-4xl">No information yet. Coming soon!</div>
          )}
        </div>
        {images && (
          <div className="flex flex-row gap-4">
            <button
              onClick={() => downloadPDF('/2025-03/HCF_web coupon 2025.pdf')}
              className="border-secondaryBg border-2 sm:w-64 w-96 h-16 flex justify-center items-center rounded-full hover:bg-secondaryBg  hover:text-primaryBg transition ease-in-out cursor-pointer"
            >
              <p className="font-kulim sm:text-xl text-lg">
                Download Admission Coupon PDF
              </p>
            </button>
            {/* <button
              onClick={() => downloadPDF('/2025-03/HCF_web coupon 2025.pdf')}
              className="border-secondaryBg border-2 sm:w-64 w-96 h-16 flex justify-center items-center rounded-full hover:bg-secondaryBg  hover:text-primaryBg transition ease-in-out cursor-pointer"
            >
              <p className="font-kulim sm:text-xl text-lg">
                Download Vendor List PDF
              </p>
            </button> */}
          </div>
        )}
      </div>
    </>
  );
};

export default Page;
