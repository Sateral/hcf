import React from 'react'

type HeroProps = {
  pageTitle: string;
  sub: string;
}

const Hero: React.FC<HeroProps> = ({ pageTitle, sub }) => {
  return (
    <div className='md:h-64 h-48 bg-secondaryBg flex flex-col justify-center items-start sm:px-24 ss:px-16 px-12 font-caudex font-bold sm:text-6xl text-5xl'>
      <h1 className='text-primaryText'>{pageTitle}</h1>
      <h2 className='text-primaryBg'>{sub}</h2>
    </div>
  )
}

export default Hero