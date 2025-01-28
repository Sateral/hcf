"use client";

import Hero from "@/components/Hero";
import React from "react";
import Image from "next/image";

import Map from "@/public/assets/map.jpg";

const page = () => {
  const mapDownload = () => {
    const flyerEng = "/assets/map.jpg";
    const link = document.createElement("a");
    link.href = flyerEng;
    link.setAttribute("download", "Map_to_show.jpg");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Hero pageTitle="Map &" sub="Directions" />

      <section className="flex xlg:flex-row flex-col justify-center items-center sm:py-16 py-6 lg:px-32 sm:px-16 px-2 bg-[#E8EBF2] text-secondaryBg">
        <div className="flex flex-1 flex-col items-center sm:px-16 px-8">
          <div className="flex flex-col justify-center items-center text-center sm:pb-12 pb-4">
            <h2 className="font-catamaran sm:text-5xl text-4xl font-medium">
              Ancaster Fairgrounds
            </h2>
            <h3 className="font-catamaran sm:text-3xl text-2xl font-light text-center">
              630 Trinity Road, Ancaster (Jerseyville). <br /> (Corner of Hwy 52
              & Hwy 2)
            </h3>
          </div>
          <div className="pMargin">
            <p>
              <span className="font-semibold">From Toronto</span> take the QEW
              (west) toward Hamilton, then take 403 Hamilton (right lanes),
              continue up the escarpment{" "}
              <span className="font-semibold">
                exit at Hwy 52 - Copetown (Exit 55)
              </span>
              , at the end of the exit ramp turn left onto Hwy 52{" "}
              <span className="font-semibold">(Trinity Road)</span>, proceed
              south just over 1 km (through lights at Hwy 2) to the{" "}
              <span className="font-semibold">Ancaster Fairground</span> on the
              right
            </p>

            <p>
              Please Note: From the 407 (ETR) directions are the same as above.
              (The 407 connects at the 403 - QEW interchange.)
            </p>

            <p>
              <span className="font-semibold">From Niagara</span> take the QEW
              toward Hamilton{" "}
              <span className="font-semibold">
                take Red Hill Valley Parkway exit, follow Parkway, (at the top
                of the mountain the name changes to the Lincoln Alexander
                Parkway), continue to 403, take 403 west (toward Brantford) exit
                at Hwy 52 - Copetown (Exit 55)
              </span>
              , at the end of the ramp{" "}
              <span className="font-semibold">turn left</span> onto Hwy 52{" "}
              <span>(Trinity Road)</span>, proceed south just over 1 km (through
              lights at Hwy 2) to the{" "}
              <span className="font-semibold">Ancaster Fairground</span> on the
              right.
            </p>

            <p>
              <span className="font-semibold">
                From London, Brantford and points west
              </span>
              , take 403 (east),{" "}
              <span className="font-semibold">exit at HWY 52</span> - Copetown{" "}
              <span className="font-semibold">(Exit 55)</span>, turn{" "}
              <span>right</span> at end of the ramp onto HWY 52{" "}
              <span className="font-semibold">(Trinity Road)</span>, proceed
              south just over 1 km (through lights at Hwy 2) to the{" "}
              <span className="font-semibold">Ancaster Fairground</span> on the
              right.
            </p>
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center flex-col sm:px-16 px-2 xlg:pt-0 pt-16">
          <h3 className="font-semibold text-2xl">Map to the Show</h3>

          <Image
            src={Map}
            width={600}
            height={400}
            alt="Map to the Show"
            className="my-4 rounded-lg shadow-md"
          />

          <button
            className="border-secondaryBg border-2 w-64 h-16 lg:mt-0 mt-4 flex justify-center items-center rounded-full hover:bg-secondaryBg  hover:text-primaryBg transition ease-in-out cursor-pointer"
            onClick={mapDownload}
          >
            <p className="font-kulim sm:text-xl text-lg">
              Print your own <br /> Map & Directions
            </p>
          </button>
        </div>
      </section>
    </>
  );
};

export default page;
