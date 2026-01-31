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
  },
} as const;
