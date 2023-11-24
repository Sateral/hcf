import Image from "next/image";

const OurSponsors = () => {
  const sponsors = [
    {
      sponsor: "Politically Incorrect Pets!",
      id: "Door prize provided by:",
      image: require("@/public/assets/PIP.png"),
    },

    {
      sponsor: "Purina Pro Plan",
      id: "Best of the Best Prizes provided by:",
      image: require("@/public/assets/PPP.png"),
    },

    {
      sponsor: "The Cat Clinic",
      id: "Ring One Sponsored by:",
      image: require("@/public/assets/TCC.png"),
    },
  ];

  return (
    <>
      <h2 className="font-caudex font-bold lg:text-7xl text-6xl sm:pb-6 pb-4 sm:px-16 px-6 text-secondaryBg">
        Our <br /> <span className="text-primaryText">Sponsors</span>
      </h2>
      <div className="flex justify-center">
        <div className="max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center">
            {sponsors.map((spon, index) => (
              <div
                key={spon.id}
                className={`flex flex-col items-center sm:py-12 sm:px-16 p-4 ${
                  index !== sponsors.length - 1 ? "md:mr-4 sm:mr-12" : ""
                } m-8 bg-[#dddddd] rounded-lg`}
              >
                <div className="flex justify-center">
                  <Image
                    src={spon.image.default}
                    alt={spon.sponsor}
                    className="md:min-w-[300px]"
                  />
                </div>
                <div className="flex justify-center">
                  <p className="text-center font-catamaran md:text-2xl sm:text-xl text-md font-bold">
                    <span className="text-primaryText">{spon.id}</span>
                    <br />
                    <span className="text-secondaryBg">{spon.sponsor}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurSponsors;
