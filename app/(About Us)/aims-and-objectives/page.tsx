import Hero from '@/components/Hero';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Objectives } from './objectives';

const page = () => {
  return (
    <>
      <Hero pageTitle="Aims &" sub="Objectives" />

      <section className="flex flex-col sm:py-16 py-6 lg:px-32 xs:px-16 px-4 bg-[#E8EBF2] text-secondaryBg">
        <div className="flex justify-center items-center">
          <h3 className="font-catamaran lg:text-3xl sm:text-2xl text-xl">
            The Hamilton Cat Fanciers is a not-for-profit cat club affiliated
            with the Canadian Cat Association (CCA). Our founding meeting was
            held on March 8, 1998, and on June 13, 1998 our application for club
            status was accepted by the CCA Board of Directors.
          </h3>
        </div>

        {Objectives.map((objective, index) => (
          <div
            key={objective.aim}
            className="sm:pt-8 py-6 xlg:text-2xl md:text-lg flex sm:flex-row flex-col justify-center items-center"
          >
            <div
              className={`bg-[#D9D9D9] md:h-64 xs:h-48 sm:w-[850px] xs:w-[400px] w-[250px] flex justify-center items-center rounded-bl-3xl sm:rounded-tl-3xl rounded-tl-none sm:rounded-br-none rounded-br-3xl sm:order-1 order-2 ${
                index === 2 ? 'h-96' : 'h-48'
              }`}
            >
              <p className="xlg:px-24 px-8">{objective.aim}</p>
            </div>

            <div className="bg-primaryText text-primaryBg md:h-64 xs:h-48 h-32 sm:w-[500px] xs:w-[400px] w-[250px] flex justify-center items-center rounded-tr-3xl sm:rounded-br-3xl rounded-br-none sm:rounded-tl-none rounded-tl-3xl sm:order-2 order-1">
              <FontAwesomeIcon
                icon={objective.icon}
                width={100}
                className="xs:w-[100px] w-[60px]"
              />
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default page;
