export const currentShow = {
  year: 2025,
  dates: {
    display: "Saturday, March 15 & Sunday, March 16 2025",
    start: "2025-03-15",
    end: "2025-03-16",
  },
  venue: {
    name: "Ancaster Fairgrounds",
    address: "630 Trinity Rd. (Hwy 52 & HWY 2)",
  },
  ticketing: {
    eventbrite:
      "https://www.eventbrite.ca/e/hamilton-cat-fanciers-cat-show-tickets-1204219716589?aff=oddtdtcreator",
    zeffy:
      "https://www.zeffy.com/en-CA/ticketing/ancaster-cat-show--2025?fbclid=IwY2xjawIXbx5leHRuA2FlbQIxMAABHQfeg9VYZjqIyePBsHTmR8vTGjZ_xe9GmGUvqSEENM4tdRMPTCBP1GzPZA_aem_Hi6NZ7rBgeuLlq5tovJpIA",
  },
  coupon: {
    image: "/2025-03/HCF_web coupon 2025 revised.jpg",
    pdf: "/2025-03/HCF_web coupon 2025.pdf",
    downloadName: "AdmissionCoupon.pdf",
  },
  flyers: {
    images: [
      "/2025-03/hcf_2025_flyer revised 1.jpg",
      "/2025-03/hcf_2025_flyer revised 2.jpg",
      "/2025-03/HCF event poster 2025.jpg",
      "/2025-03/HCFevent poster 2025 2.jpg",
    ],
    posterPdf: "/2025-03/hcf_2025_flyer revised judges.pdf",
    posterDownloadName: "hcf_2025_flyer ENGLISH.pdf",
  },
  vendors: {
    image: "/2025-03/HCF_vendor list revised.jpg",
    pdf: "/2025-03/HCF_vendor list - 2025-01-14.pdf",
    downloadName: "HCF_vendor_list_2025.pdf",
    applicationPdf: "/assets/HAMILTON CAT FANCIERS vendor 2025.pdf",
    applicationDownloadName: "HAMILTON CAT FANCIERS vendor 2025.pdf",
  },
  sponsors: [
    {
      sponsor: "Wheatley Wares",
      id: "Sponsoring the BEST OF THE BEST AWARDS",
      image: "/assets/Wheatley Wares logo.png",
      link: "https://wheatleywares.com",
    },
    {
      sponsor: "Farmina",
      id: "Sponsoring 2 judging rings!",
      image: "/2025-03/sponsors/Farmina logo.jpg",
      link: "https://www.farmina.com/ca",
    },
    {
      sponsor: "Global Pet Foods",
      id: "Sponsoring 1 judging ring and the Door Prize!",
      image: "/2025-03/sponsors/GPF logos.png",
      link: "https://globalpetfoods.com",
    },
    {
      sponsor: "Village Cat Clinic",
      id: "Exhibiors' Morning Coffee Sponsor",
      image: "/2025-03/sponsors/TheCatClinic.png",
      link: "https://www.thecatclinic.ca/",
    },
    {
      sponsor: "Harlow Blend Pet Foods",
      id: "Judging Ring Sponsor",
      image: "/2025-03/sponsors/HarlowBlend.png",
      link: "https://harlowblend.com",
    },
  ],
} as const;
