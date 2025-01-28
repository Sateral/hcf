"use client";

import Hero from "@/components/Hero";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const downloadPdf = () => {
    const pdfPath = "/assets/HAMILTON CAT FANCIERS vendor 2025.pdf";
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = "HAMILTON CAT FANCIERS vendor 2025.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <Hero pageTitle="New" sub="Vendors" />

      <section className="flex justify-center items-center flex-col sm:py-16 py-6 lg:px-64 sm:px-32 px-16 bg-[#E8EBF2] text-secondaryBg">
        <div>
          <div className="flex lg:flex-row flex-col justify-between lg:items-center items-start">
            <div className="flex flex-col">
              <h2 className="font-catamaran sm:text-6xl text-4xl font-medium">
                Interested in Becoming a Vendor?
              </h2>
            </div>
          </div>

          <div className="sm:pt-8 py-6 sm:text-2xl text-xl max-w-[950px]">
            <p className="font-light">
              Join us at the Hamilton Cat Fanciers&apos; Annual Cat Show on
              March 15-16, 2025, at ANCASTER FAIRGROUNDS. This family-friendly
              event, themed &apos;The Wizard of PAWZ,&apos; attracts 3000+
              visitors. Showcase your products to a cat-loving audience and
              benefit from active social media promotion. Download the PDF for
              details and more information. We look forward to welcoming you to
              our event!
            </p>
          </div>

          <div className="flex justify-center items-center">
            <button
              className=" border-secondaryBg border-2 w-64 h-16 lg:mt-0 mt-4 flex justify-center items-center rounded-full hover:bg-secondaryBg  hover:text-primaryBg transition ease-in-out cursor-pointer"
              onClick={downloadPdf}
            >
              <p className="font-kulim sm:text-xl text-lg">Download PDF</p>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
