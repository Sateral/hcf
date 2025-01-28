import Hero from "@/components/Hero";
import React from "react";

import { showInfo } from "@/constants/index";

const page = () => {
  return (
    <>
      <Hero pageTitle="Frequently" sub="Asked Questions" />

      <section className="flex flex-col sm:py-16 py-6 lg:px-64 sm:px-32 px-16 bg-[#E8EBF2] text-secondaryBg">
        <div className="flex lg:flex-row flex-col justify-between lg:items-center items-start">
          <div className="flex flex-col">
            <h2 className="font-catamaran sm:text-6xl text-4xl font-medium">
              Visiting a Cat Show?
            </h2>
            <h3 className="font-catamaran sm:text-4xl text-3xl font-light">
              Here&apos;s what to expect.
            </h3>
          </div>
        </div>

        {showInfo.map((question) => (
          <div
            key={question.header}
            className="sm:pt-8 py-6 sm:text-2xl text-xl"
          >
            <p className="font-semibold">{question.header}</p>
            <p className="font-light">{question.info}</p>
          </div>
        ))}
      </section>
    </>
  );
};

export default page;
