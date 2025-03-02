'use client';

import { MouseEventHandler } from 'react';
import Hero from '@/components/Hero';
import Image from 'next/image';

import { ChevronLeftCircle, ChevronRightCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Lightbox from '@/components/lightbox';

const Page = () => {
  const images = [
    '/2025-03/HCF_web coupon 2025 revised.jpg',
    '/2025-03/HCF event poster 2025.jpg',
  ];

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

      <div>
        <div className="flex flex-col justify-start items-start gap-4 sm:py-16 py-6 px-16 bg-[#F5F5F5] text-secondaryBg">
          <div className="text-start">
            <h2 className="w-full text-left text-4xl text-secondaryBg font-bold">
              Buy Tickets
            </h2>
            <p className="text-2xl">
              Purchase your electronic tickets for the event through Eventbrite
              or Zeffy.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <Button
              className="p-6 shrink-0"
              onClick={() =>
                window.open(
                  'https://www.eventbrite.ca/e/hamilton-cat-fanciers-cat-show-tickets-1204219716589?aff=oddtdtcreator',
                  '_blank'
                )
              }
            >
              <p className="font-kulim sm:text-xl text-lg">Buy on Eventbrite</p>
            </Button>

            <Button
              className="p-6 shrink-0 bg-[#646464] hover:bg-[#3E3E3E]"
              onClick={() =>
                window.open(
                  'https://www.zeffy.com/en-CA/ticketing/ancaster-cat-show--2025?fbclid=IwY2xjawIXbx5leHRuA2FlbQIxMAABHQfeg9VYZjqIyePBsHTmR8vTGjZ_xe9GmGUvqSEENM4tdRMPTCBP1GzPZA_aem_Hi6NZ7rBgeuLlq5tovJpIA',
                  '_blank'
                )
              }
            >
              <p className="font-kulim sm:text-xl text-lg">Buy on Zeffy</p>
            </Button>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center sm:py-16 py-6 px-16 bg-[#D9D9D9] text-secondaryBg">
          <div className="text-start w-full">
            <h2 className="w-full text-left text-5xl text-secondaryBg font-bold">
              Event Flyers
            </h2>
            <h3 className="text-2xl">Click on the flyers to expand</h3>
          </div>
          <div className="flex flex-row justify-center items-center md:gap-16 gap-8 sm:py-10 py-6 flex-wrap w-full">
            {/* <Lightbox className="flex justify-center items-center md:flex-row flex-col md:gap-16 gap-8 px-4 flex-wrap"> */}
            <Lightbox className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full justify-items-center">
              {images &&
                images.map((image, index) => (
                  <Image
                    src={image}
                    key={index}
                    data-index={index}
                    width={500}
                    height={300}
                    alt="flyer"
                    className="hover:cursor-pointer rounded-xl border-[#3E3E3E] border-4"
                  />
                ))}
            </Lightbox>
            {images.length == 0 && (
              <div className="text-4xl">No information yet. Coming soon!</div>
            )}
          </div>
          {images && (
            <div className="flex flex-row gap-4">
              <Button
                className="p-8"
                onClick={() => downloadPDF('/2025-03/HCF_web coupon 2025.pdf')}
                // className="border-secondaryBg border-2 sm:w-64 w-96 h-16 flex justify-center items-center rounded-full hover:bg-secondaryBg  hover:text-primaryBg transition ease-in-out cursor-pointer"
              >
                <p className="font-kulim sm:text-2xl text-xl">
                  Download Admission Coupon PDF
                </p>
              </Button>
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
      </div>
    </>
  );
};

export default Page;
