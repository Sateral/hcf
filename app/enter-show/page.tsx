import Hero from '@/components/Hero';
import React from 'react';

import { Objectives } from '@/app/(About Us)/aims-and-objectives/objectives';
import Link from 'next/link';

const page = () => {
  return (
    <>
      <Hero pageTitle="Enter" sub="Show" />

      <section className="flex flex-col justify-center items-center sm:py-16 py-6 xl:px-40 px-16 bg-[#E8EBF2] text-secondaryBg">
        <h2 className="font-catamaran lg:text-5xl text-4xl font-bold sm:pb-16 pb-6">
          CCA Entry Form
        </h2>

        <div className="flex md:flex-row flex-col justify-around items-center w-full gap-16">
          <div className="md:w-[600px] ss:w-[450px] w-[300px] flex justify-center items-center flex-col ss:h-[450px] h-[350px] gap-8 bg-[#D9D9D9] text-center rounded-2xl">
            <p className="px-12 ss:text-3xl text-xl">
              This Document is in MS Word format it may be filled in and saved,
              then sent to the entry clerk as an attachment.
            </p>

            <button className="border-primaryText border-2 w-64 h-16 text-2xl flex justify-center items-center rounded-full hover:bg-primaryText text-primaryText hover:text-primaryBg transition ease-in-out cursor-pointer font-kulim">
              <Link href="https://www.cca-afc.com/documents/CCAForms/CatShowEntrydoc_20190913_012250.doc">
                Download
              </Link>
            </button>
          </div>

          {/* <div className="md:w-[600px] ss:w-[450px] w-[300px] flex justify-center items-center flex-col ss:h-[450px] h-[350px] gap-8 bg-[#D9D9D9] text-center rounded-2xl">
            <p className="px-12 ss:text-3xl text-xl">
              This Document is in MS Word format it may be filled in and saved,
              then sent to the entry clerk as an attachment.
            </p>

            <button className="border-primaryText border-2 w-64 h-16 text-2xl flex justify-center items-center rounded-full hover:bg-primaryText text-primaryText hover:text-primaryBg transition ease-in-out cursor-pointer font-kulim">
              Download
            </button>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default page;
