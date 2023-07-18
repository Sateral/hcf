"use client"

import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

function Donation() {
  const DonationSection = () => {
    const [amount, setAmount] = useState(0);
    const [ref, inView] = useInView({
      triggerOnce: true, // Trigger the animation only once
      threshold: 0.5, // Adjust this threshold as needed
    });

    useEffect(() => {
      if (inView) {
        const targetAmount = 43575; // Replace with your target amount
        const startAmount = 40000; // Replace with your starting amount

        const animationDuration = 1500; // Adjust the duration of the animation in milliseconds
        const frameRate = 10; // Adjust the frame rate of the animation in milliseconds

        const totalFrames = Math.ceil(animationDuration / frameRate);
        const easingFunction = (x: number) => {
          // Easing function for smooth easing
          return 1 - Math.pow(1 - x, 3);
        };

        let currentAmount = startAmount;
        let frameCount = 0;

        const intervalId = setInterval(() => {
          frameCount++;

          const progress = frameCount / totalFrames;
          const easedProgress = easingFunction(progress);

          const increment = Math.ceil((targetAmount - startAmount) * easedProgress);

          currentAmount = startAmount + increment;

          if (currentAmount >= targetAmount) {
            currentAmount = targetAmount;
            clearInterval(intervalId);
          }

          setAmount(currentAmount);
        }, frameRate);

        return () => {
          clearInterval(intervalId);
        };
      }
    }, [inView]);

    return (
      <section className='flex justify-center items-center flex-col font-catamaran sm:text-3xl text-2xl font-bold text-primaryBg sm:py-8 py-6 bg-gradient-to-b from-[#323232] to-[#1d1d1d]'>
        <p>To date, a total of:</p>
        <p ref={ref} className='font-normal md:text-8xl sm:text-7xl text-6xl py-4 numGradient'>
          ${amount.toLocaleString()}
        </p>
        <p>has been donated to these groups</p>
      </section>
    );
  };

  return (
    <div>
      <DonationSection />
    </div>
  );
}

export default Donation;
