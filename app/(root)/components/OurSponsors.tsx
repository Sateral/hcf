'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Autoplay from 'embla-carousel-autoplay';
import { currentShow } from '@/constants/current-show';

const OurSponsors = () => {
  const plugin = React.useRef(Autoplay({ delay: 3000 }));

  return (
    <div className="sm:px-16 px-8">
      <h2 className="font-caudex font-bold lg:text-7xl text-6xl sm:pb-6 pb-4 text-secondaryBg">
        Our <br /> <span className="text-primaryText">Sponsors</span>
      </h2>
      <Carousel
        className="flex flex-col"
        plugins={[plugin.current]}
        opts={{ loop: true, align: 'start' }}
      >
        <CarouselContent>
          {currentShow.sponsors.map((sponsor) => (
            <CarouselItem
              key={sponsor.sponsor}
              className="lg:basis-1/4 sm:basis-1/3 basis-1/2"
            >
              <Link href={sponsor.link}>
                <Card>
                  <CardContent className="p-5 flex flex-col items-center gap-8">
                    <Image
                      src={sponsor.image}
                      alt={sponsor.sponsor}
                      height={250}
                      width={250}
                      className="rounded-sm"
                    />
                    <p className="text-center font-catamaran md:text-2xl sm:text-xl text-md font-bold">
                      <span className="text-primaryText">{sponsor.id}</span>
                      <br />
                      <span className="text-secondaryBg">
                        {sponsor.sponsor}
                      </span>
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="sm:flex hidden" />
        <CarouselNext className="sm:flex hidden" />
      </Carousel>
      <div className="sm:hidden flex justify-between pt-2">
        <ArrowLeft className="bg-gray-100 rounded-full p-4" size={60} />
        <ArrowRight className="bg-gray-100 rounded-full p-4" size={60} />
      </div>
    </div>
  );
};

export default OurSponsors;
