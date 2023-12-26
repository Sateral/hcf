import Image from "next/image";
import homepageCat from "@/public/assets/hero-cat.jpg";
import cca from "@/public/assets/CCA.png";
import catPlaying from "@/public/assets/cat-playing.webp";

import { MapPin } from "lucide-react";

import Donation from "@/components/Donation";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import NextShow from "./components/NextShow";
import OurSponsors from "./components/OurSponsors";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section
        className="relative h-screen w-auto bg-center bg-no-repeat bg-cover flex flex-col justify-center p-12"
        style={{ backgroundImage: `url(${homepageCat.src})` }}
      >
        <h1 className="font-lora sm:text-8xl xs:text-7xl text-5xl sm:w-full w-full xs:font-normal font-bold text-secondaryBg ">
          Hamilton Cat Fanciers
        </h1>

        <p className="font-catamaran text-xl md:w-full sm:w-[450px] xs:w-[350px] w-[50%] text-secondaryBg my-4">
          A non-profit cat club affiliated with the Canadian Cat Association
          (CCA)
        </p>

        <div className="flex justify-start items-center absolute bottom-2 left-6">
          <p className="text-secondaryBg font-catamaran text-xl">
            Proudly affiliated with
          </p>
          <Link href="https://www.cca-afc.com/" target="_blank">
            <Image src={cca} alt="CCA-AFC Logo" className="w-12" />
          </Link>
        </div>
      </section>

      <section>
        <NextShow />
      </section>

      <section className="flex justify-center items-start flex-col bg-primaryBg">
        <div className="flex justify-center items-center md:flex-row flex-col sm:pt-16 pt-6 md:pb-0 sm:pb-16 pb-6">
          <div className="flex-1 flex justify-center items-center flex-col sm:px-16 px-4">
            <div className="text-secondaryBg font-catamaran md:text-3xl text-2xl">
              <h2 className="font-caudex font-bold text-secondaryBg lg:text-7xl md:text-5xl ss:text-6xl text-5xl">
                Local Community <br />{" "}
                <span className="text-primaryText">Involvement</span>
              </h2>

              <p className="py-8 text-secondaryBg sm:text-2xl text-xl">
                Through the success of the Hamilton Cat Fanciers&apos; annual
                show the club can donate to local cat and kitten rescue groups.
                The club is proud of our contributions which has assisted these
                charities in their efforts to take care of and find homes for
                unwanted and abandoned cats and kittens:
              </p>

              <ul className="custom-list-disc ml-8 font-caudex text-clip text-secondaryBg sm:text-3xl text-2xl">
                <li className="mb-8">
                  <Link href="https://anadoptflam.com">
                    Animal Adoptions of Flamborough
                  </Link>
                </li>
                <li className="mb-8">
                  <Link href="https://burlingtonhumane.ca/">
                    Burlington Humane Society
                  </Link>
                </li>
                <li className="mb-8">
                  <Link href="https://hbspca.com/">
                    Hamilton / Burlington SPCA
                  </Link>
                </li>
                <li className="mb-8">
                  <Link href="https://ncwl.weebly.com/">
                    Neveah&apos;s Charity of West Lincoln Cat Rescue
                  </Link>
                </li>
                <li className="mb-8">
                  Animal Welfare Association of Hamilton (until operation
                  discontinued 2016)
                </li>
              </ul>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 px-8">
            <Image
              src={catPlaying}
              className="w-[650px] rounded-3xl catShadow"
              loading="lazy"
              alt="Orange tabby cat playing in the grass"
            />
          </div>
        </div>
      </section>

      <Donation />

      <section className="flex flex-col sm:py-16 py-6 bg-primaryBg">
        <OurSponsors />
      </section>
    </main>
  );
}
