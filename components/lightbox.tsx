'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Lightbox = ({ children, className }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [scale, setScale] = useState<number>(1); // For zooming
  const [startX, setStartX] = useState<number | null>(null); // For swiping

  const items = Array.isArray(children) ? children : [children];

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
    setScale(1); // Reset zoom level on close
  };

  const nextImage = React.useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    setScale(1); // Reset zoom level when navigating
  }, [items.length]);

  const prevImage = React.useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
    setScale(1); // Reset zoom level when navigating
  }, [items.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, nextImage, prevImage]);

  // Zoom functionality
  const zoomIn = () => setScale((prevScale) => Math.min(prevScale + 0.2, 3));
  const zoomOut = () => setScale((prevScale) => Math.max(prevScale - 0.2, 1));

  // Swipe functionality for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!startX) return;
    const endX = e.touches[0].clientX;
    if (startX - endX > 50) {
      nextImage();
      setStartX(null);
    } else if (endX - startX > 50) {
      prevImage();
      setStartX(null);
    }
  };

  return (
    <>
      {/* Render children with click handlers */}
      <div className={className}>
        {items.map((child, index) =>
          React.cloneElement(child, {
            onClick: () => openLightbox(index),
            key: index,
            className: `${child.props.className} cursor-pointer hover:scale-105 transition-transform`,
          })
        )}
      </div>

      {/* Lightbox Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div className="">
            <Button
              className="absolute top-2 right-2 text-white text-2xl font-bold z-10 bg-black/30"
              size={'icon'}
              onClick={closeLightbox}
            >
              ✕
            </Button>
            <Button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-xl font-bold bg-black/30 z-10"
              onClick={prevImage}
              size={'icon'}
            >
              ◀
            </Button>
            <div
              className="flex items-center justify-center w-30 h-30"
              style={{
                transform: `scale(${scale})`,
                transition: 'transform 0.2s',
              }}
            >
              <Image
                src={items[currentIndex].props.src}
                alt={items[currentIndex].props.alt}
                width={items[currentIndex].props.width}
                height={items[currentIndex].props.height}
                className="max-w-[90vw] max-h-[80vh] rounded-lg shadow-lg"
              />
            </div>
            <Button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-xl bg-black/30 font-bold z-10"
              size={'icon'}
              onClick={nextImage}
            >
              ▶
            </Button>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 space-x-4 ">
              <Button
                onClick={zoomOut}
                size={'icon'}
                className="text-white text-xl px-4 py-2 rounded-lg bg-black/30"
              >
                -
              </Button>
              <Button
                onClick={zoomIn}
                size={'icon'}
                className="text-white text-xl px-4 py-2 rounded-lg bg-black/30"
              >
                +
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Lightbox;
