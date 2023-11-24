"use client";

import { useState, useEffect } from "react";

import LightboxModal from "@/components/lightbox-modal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <LightboxModal />
    </>
  );
};

export default ModalProvider;
