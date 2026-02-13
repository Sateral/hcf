export const currentShow = {
  year: 2026,
  dates: {
    display: "Saturday, March 21 & Sunday, March 22 2026",
    start: "2026-03-21",
    end: "2026-03-22",
  },
  venue: {
    name: "Ancaster Fairgrounds",
    address: "630 Trinity Rd. (Hwy 52 & HWY 2)",
  },
  ticketing: {
    zeffy:
      "https://www.zeffy.com/en-CA/ticketing/ancaster-cat-show--2026",
  },
  coupon: {
    image: "/2026-03/HCF 2026 discount.jpg",
    pdf: "/2026-03/HCF 2026 discount.jpg",
    downloadName: "AdmissionCoupon.jpg",
  },
  flyers: {
    images: [
      "/2026-03/HCF poster  2026.jpg",
      "/2026-03/HCFevent poster 2026 REVISED.jpg",
    ],
    posterPdf: "/2026-03/2026 HCF show flyer.pdf",
    posterDownloadName: "HCF_show_flyer_2026.pdf",
  },
  vendors: {
    image: "/2026-03/HCF_vendor list 2026.jpg",
    pdf: "/2026-03/HCF_vendor list 2026.jpg",
    downloadName: "HCF_vendor_list_2026.jpg",
    applicationPdf: "/assets/HAMILTON CAT FANCIERS vendor 2025.pdf",
    applicationDownloadName: "HAMILTON CAT FANCIERS vendor 2025.pdf",
  },
  sponsors: [
    {
      sponsor: "Farmina Pet Foods",
      id: "Premier Sponsor of the Show",
      image: "/2025-03/sponsors/Farmina logo.jpg",
      link: "https://www.farmina.com/ca",
    },
    {
      sponsor: "Global Pet Stores",
      id: "Presentation Ring Sponsor",
      image: "/2025-03/sponsors/GPF logos.png",
      link: "https://globalpetfoods.com",
    },
  ],
} as const;
