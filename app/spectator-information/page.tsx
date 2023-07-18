"use client"

import React, { useState } from 'react'
import Hero from '@/components/Hero'
import Image from 'next/image'

import { 
  ChevronLeftCircle, 
  ChevronRightCircle, 
  XCircle 
} from 'lucide-react';

const Page = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleOpenModal = (imageIndex: number) => {
    setCurrentImageIndex(imageIndex)
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  }

  const handlePrev = () => {
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

  const handleNext = () => {
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

  const images = [
    "/../public/assets/specInfo.png",
    "/../public/assets/admissionCoupon.png",
  ]

  return (
    <>
      <Hero pageTitle="Spectator" sub="Information"/>

      <section className='flex flex-col sm:py-16 py-6 px-16 bg-[#D9D9D9] text-secondaryBg'>
        <h2 className='w-full text-center font-caudex text-4xl text-secondaryBg font-bold'>Click on the flyer to expand</h2>

        <div className='flex justify-center items-center md:flex-row flex-col md:gap-16 gap-8 sm:py-16 py-6 flex-wrap'>
          {images.map((image, index) => (
            <Image src={image} key={index} width={500} height={300} alt="flyer" className='hover:cursor-pointer rounded-xl border-[#3E3E3E] border-4 w=' onClick={() => handleOpenModal(index)} />
          ))}
        </div>

        {modalOpen && (
        <div className="fixed top-0 left-0 z-[9999] bg-black bg-opacity-80 w-full h-full">
          <div className=''>
            <Image
              src={images[currentImageIndex]}
              className={`${isLoading ? 'opacity-0' : 'opacity-100'} absolute top-[47.5%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-w-[95%] max-h-[90%] object-contain`}
              alt="Flyer"
              onLoad={() => setIsLoading(false)}
              width={800}
              height={1000}
            />
            <div className="absolute top-2 right-2 text-xl text-primaryBg">
              {currentImageIndex + 1}/{images.length}
            </div>
            
            <div className='bg-black text-primaryBg bg-opacity-40 fixed bottom-0 left-0 w-full md:gap-32 gap-16 flex justify-center items-center p-2 text-3xl'>
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
      </section>
    </>
  )
}

export default Page