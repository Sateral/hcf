import Hero from '@/components/Hero';
import Image from 'next/image';
import { affiliates } from '@/constants';
import React from 'react';

const page = () => {
  return (
    <>
      <Hero pageTitle="Affiliates of" sub="Hamilton Cat Fanciers" />

      <section className="flex flex-col justify-center items-center sm:py-16 py-6 bg-[#E8EBF2]">
        {affiliates.map((aff, i) => (
          <div
            key={aff.name}
            className={`flex md:flex-row flex-col justify-center items-center ${
              i != 0 ? 'mt-8' : ''
            }`}
          >
            <div className="sm:w-[450px] w-[70%] h-[250px] flex flex-1 justify-center items-center bg-white rounded-3xl mx-8">
              <Image
                src={aff.image.default}
                alt={aff.name}
                className="md:h-[200px] h-[150px] py-4 w-auto"
              />
            </div>

            <div className="flex flex-2 flex-col text-secondary font-catamaran sm:mx-8 mx-4 md:pt-0 pt-4 max-w-[700px] md:w-[55%]">
              <h2 className="font-bold text-2xl">{aff.name}</h2>
              <p className="text-lg">{aff.info}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default page;
