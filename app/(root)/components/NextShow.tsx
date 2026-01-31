'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import fairgrounds from '@/public/assets/fairgrounds.webp';
import { MapPin } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { currentShow } from '@/constants/current-show';
import { downloadFile } from '@/lib/download';

const NextShow = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const downloadCoupon = () => {
    downloadFile(currentShow.coupon.pdf, currentShow.coupon.downloadName);
  };

  return (
    <div className="flex justify-center items-center md:flex-row flex-col sm:py-16 py-6 bg-[#D9D9D9]">
      <div className="flex-2 flex flex-col justify-center items-start md:ml-10 ml-0 md:mt-0 mt-10 md:order-1 order-2 md:px-0 ss:px-16 px-4">
        <div className="flex flex-row justify-center items-center text-secondaryBg font-alata">
          <MapPin size={24} />
          <p className="text-xl">{currentShow.venue.name}</p>
        </div>

        <Image
          src={fairgrounds}
          className="w-[950px]"
          loading="lazy"
          alt="Ancaster Fairgrounds"
        />
      </div>

      <div className="flex-1 flex justify-center items-center flex-col sm:px-16 px-6 md:order-2 order-1">
        <div className="text-secondaryBg font-catamaran font-bold md:text-3xl ss:text-4xl text-2xl lg:min-w-[470px] md:min-w-[370px]">
          <h2 className="font-caudex lg:text-6xl ss:text-5xl text-4xl">
            Attend Our Next <br />{' '}
            <span className="text-primaryText">Cat Show</span>
          </h2>
          <div className="md:text-4xl sm:text-xl text-lg">
            <p className="py-8">
              {currentShow.dates.display} at the {currentShow.venue.name}
            </p>
            <p className="xl:mb-32 lg:mb-16 md:mb-4 mb-12">
              {currentShow.venue.address}
            </p>
          </div>

          <Button
            className="md:p-8 p-4 md:text-4xl text-xl"
            onClick={downloadCoupon}
          >
            Click for Discount on Admission Coupon
          </Button>

          {/* <Dialog>
            <DialogTrigger>
              <Button className="md:p-8 p-4 md:text-4xl text-xl">
                Click for Discount on Admission Coupon
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogTitle>Admission Coupon Unavailable</DialogTitle>
              <DialogDescription>
                As of now there is now available discount on admission. Please
                check back soon!
              </DialogDescription>
            </DialogContent>
          </Dialog> */}
        </div>
      </div>
    </div>
  );
};

export default NextShow;
