import Hero from '@/components/Hero';
import Image from 'next/image';
import { sponsors } from '@/constants';
import React from 'react';
import Link from 'next/link';

const page = () => {
  return (
    <>
      <Hero pageTitle="Sponsors of" sub="Hamilton Cat Fanciers" />

      <section className="flex flex-col justify-center items-center bg-[#E8EBF2] py-12 gap-8">
        {sponsors.map((sponsor, i) => (
          // <div
          //   key={sponsor.sponsor}
          //   className="flex md:flex-row flex-col justify-center items-center"
          // >
          //   <Image
          //     src={sponsor.image}
          //     alt={sponsor.sponsor}
          //     width={450}
          //     height={450}
          //     className=""
          //   />

          //   <div className="flex flex-2 flex-col text-secondaryBg font-catamaran sm:mx-8 mx-4 md:pt-0 pt-4 max-w-[700px] md:w-[55%]">
          //     <h2 className="font-bold text-2xl">{sponsor.sponsor}</h2>
          //     <p className="text-lg">{sponsor.sponsor}</p>
          //   </div>
          // </div>
          <Link href={sponsor.link}>
            <div
              key={sponsor.sponsor}
              className="flex flex-col md:flex-row justify-center items-center w-[850px] p-2 rounded-lg bg-white hover:transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <Image
                src={sponsor.image}
                alt={sponsor.sponsor}
                width={450}
                height={450}
                className="max-w-[250px] md:mx-8 mx-4"
              />

              <div className="flex flex-2 flex-col text-secondaryBg font-catamaran sm:mx-8 mx-4 md:pt-0 pt-4 max-w-[700px] md:w-[55%]">
                <h2 className="font-bold text-2xl">{sponsor.sponsor}</h2>
                <p className="text-lg">{sponsor.id}</p>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
};

export default page;
