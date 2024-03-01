import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const OurSponsors = () => {
  const sponsors = [
    {
      sponsor: "Wheatley Wares",
      id: "Sponsoring 2 judging rings!",
      image: require("@/public/assets/Wheatley Wares logo.png"),
      link: "https://wheatleywares.com",
    },
    {
      sponsor: "Village Cat Clinic",
      id: "Sponsoring 1 judging ring!",
      image: require("@/public/assets/Village Cat Clinic logo.jpg"),
      link: "https://thecatclinic.ca",
    },
    {
      sponsor: "The Cat Clinic",
      id: "Sponsoring 1 judging ring!",
      image: require("@/public/assets/The Cat Clinic logo.jpg"),
      link: "https://thecatclinic.ca",
    },
    {
      sponsor: "Big Country Raw",
      id: "Sponsoring the Best of the Best:",
      image: require("@/public/assets/big-country-raw.jpg"),
      link: "https://bigcountryraw.ca",
    },
  ];

  return (
    <div className="sm:px-16 px-8">
      <h2 className="font-caudex font-bold lg:text-7xl text-6xl sm:pb-6 pb-4 text-secondaryBg">
        Our <br /> <span className="text-primaryText">Sponsors</span>
      </h2>
      <Carousel className="flex flex-col">
        <CarouselContent>
          {sponsors.map((sponsor) => (
            <CarouselItem
              key={sponsor.sponsor}
              className="lg:basis-1/4 sm:basis-1/3 basis-1/2"
            >
              <Link href={sponsor.link}>
                <Card>
                  <CardContent className="p-5 flex flex-col items-center gap-8">
                    <Image
                      src={sponsor.image.default}
                      alt={sponsor.sponsor}
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
