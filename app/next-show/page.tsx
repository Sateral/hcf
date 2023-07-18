"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import images from './images'
import Hero from '@/components/Hero';

import { 
  ChevronLeftCircle, 
  ChevronRightCircle, 
  XCircle 
} from 'lucide-react';

const Page = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleOpenModal = (imageIndex: number): void => {
    setCurrentImageIndex(imageIndex)
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  }

  const handlePrev = (): void => {
    if (isLoading) {
      return;
    }

    setCurrentImageIndex((prevImageIndex) => {
      if (prevImageIndex === 0) {
        return images.length - 1;
      } else {
        return prevImageIndex - 1;
      }
    });
  };

  const handleNext = (): void => {
    if (isLoading) {
      return;
    }

    setIsLoading(true);

    setCurrentImageIndex((prevImageIndex) => {
      if (prevImageIndex === images.length - 1) {
        return 0;
      } else {
        return prevImageIndex + 1;
      }
    });
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'visible';
  };

  const flyerEng = () => {
    const engFlyerURL = 'https://www.hamiltoncatshow.ca/Images_2023/hcf_2023_flyer_EN.pdf'
    window.open(engFlyerURL, "_blank");
  };

  const flyerFr = () => {
    const frFlyerURL = '/assets/HCF_2023_flyer_FR.pdf';
    const link = document.createElement('a');
    link.href = frFlyerURL;
    link.setAttribute('download', 'HCF_2023_flyer_FR.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const theme = () => {
    const themeURL = 'https://www.hamiltoncatshow.ca/Images_2023/steampunk_cats_contest.pdf'
    window.open(themeURL, "_blank");
  };

  return (
    <>
      <Hero pageTitle="Next" sub="Show"/>

      <div className='bg-[#E8EBF2] flex flex-col sm:py-16 py-6'>
        <h2 className='w-full text-center font-caudex text-4xl text-secondaryBg font-bold'>Click on the flyer to expand</h2>

        <div className='flex justify-center items-center md:flex-row flex-col md:gap-16 gap-8 sm:py-16 py-6 px-4 flex-wrap'>
          {images.map((image, index) => (
            <Image src={image} key={index} width={500} height={500} alt="flyer" className='hover:cursor-pointer rounded-xl border-[#3E3E3E] border-4' onClick={() => handleOpenModal(index)} />
          ))}
        </div>
        
        <div className='flex justify-around items-center sm:flex-row flex-col text-secondaryBg'>
          <button onClick={flyerEng} className='border-secondaryBg border-2 sm:w-64 w-96 h-16 flex justify-center items-center rounded-full hover:bg-secondaryBg  hover:text-primaryBg transition ease-in-out cursor-pointer'>
            <p className='font-kulim sm:text-xl text-lg'>Download Flyer PDF</p>
          </button>

          <button onClick={flyerFr} className='border-secondaryBg border-2 sm:w-72 w-96 h-16 sm:my-0 my-8 flex justify-center items-center rounded-full hover:bg-secondaryBg  hover:text-primaryBg transition ease-in-out cursor-pointer'>
            <p className='font-kulim sm:text-xl text-lg'>Download French Flyer Version</p>
          </button>

          <button onClick={theme} className='border-secondaryBg border-2 sm:w-64 w-96 h-16 flex justify-center items-center rounded-full hover:bg-secondaryBg  hover:text-primaryBg transition ease-in-out cursor-pointer'>
            <p className='font-kulim sm:text-xl text-lg'>Download Theme PDF</p>
          </button>
        </div>
        

       {modalOpen && (
        <div className="fixed top-0 left-0 z-[9999] bg-black bg-opacity-80 w-full h-full">
          <div className=''>
            <Image
              src={images[currentImageIndex]}
              height={800}
              width={1000}
              className={`${isLoading ? 'opacity-0' : 'opacity-100'} absolute top-[47.5%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-w-[95%] max-h-[90%] object-contain`}
              alt="Flyer"
              onLoad={() => setIsLoading(false)}
            />
            <div className="absolute top-2 right-2 text-xl">
              {currentImageIndex + 1}/{images.length}
            </div>
            
            <div className='bg-black bg-opacity-40 fixed bottom-0 left-0 w-full md:gap-32 gap-16 flex justify-center items-center p-2'>
              <ChevronLeftCircle
                color='white'
                size={40}
                className="cursor-pointer"
                onClick={handlePrev}
              />
              <XCircle
                color='white'
                size={40}
                className="cursor-pointer"
                onClick={handleCloseModal}
              />
              <ChevronRightCircle
                color='white'
                size={40}
                className="cursor-pointer"
                onClick={handleNext}
              />
            </div>
          </div>
        </div>
       )}
     </div>
    </>
    
  )
}

export default Page