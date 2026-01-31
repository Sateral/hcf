'use client';

import Hero from '@/components/Hero';
import Image from 'next/image';

import Lightbox from '@/components/lightbox';
import { currentShow } from '@/constants/current-show';

const Page = () => {
  const images = [currentShow.vendors.image];

  return (
    <>
      <Hero pageTitle="Vendors" sub="of the show" />

      <div className="flex flex-col sm:py-16 py-6 px-16 bg-[#D9D9D9] text-secondaryBg">
        <h2 className="w-full text-center font-caudex text-4xl text-secondaryBg font-bold">
          Click on the flyer to expand
        </h2>

        <Lightbox className="flex justify-center items-center md:flex-row flex-col md:gap-16 gap-8 sm:py-16 py-6 flex-wrap">
          {images.map((image, index) => (
            <Image
              src={image}
              key={index}
              data-index={index}
              width={500}
              height={300}
              alt="flyer"
              className="hover:cursor-pointer rounded-xl border-[rgb(62,62,62)] border-4 w="
            />
          ))}
        </Lightbox>
        {images.length == 0 && (
          <div className="text-4xl">No information yet. Coming soon!</div>
        )}
      </div>
    </>
  );
};

export default Page;
