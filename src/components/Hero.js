import React from 'react';
import Image from 'next/image';
const Hero = () => {
  return (
    <div
      className='w-full h-screen bg-black bg-center relative bg-no-repeat bg-cover flex flex-col justify-between items-center'
      style={{
        backgroundImage:
          "url('https://adgadmin170407-dev.s3.us-east-1.amazonaws.com/adg-hero.webp')",
      }}
    >
      <div className='w-full h-40 bg-gradient-to-b from-black to-transparent'></div>
      <div className='w-full max-w-6xl mx-auto z-20'>
        <h1 className='text-white text-6xl font-brand font-light text-center leading-tighter -mt-12'>
          A collective of luxury lifestylists{' '}
          <span className='italic'>elevating space, structure, and story.</span>
        </h1>
      </div>
      <div className='w-full pb-12 flex items-center justify-center'>
        <div>
          <Image
            src='https://adgadmin170407-dev.s3.us-east-1.amazonaws.com/scroll.png'
            alt='Scroll'
            width={127}
            height={35}
          />
        </div>
      </div>
      <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-15 z-10'></div>
    </div>
  );
};

export default Hero;
