import React from 'react';

const StudioAbout = () => {
  return (
    <div className='w-full max-w-5xl mx-auto pb-16'>
      <div className='grid grid-cols-12 gap-20 items-center'>
        <div className='col-span-12 md:col-span-6 flex flex-col gap-4'>
          <div className='text-brand-gray text-4xl font-brand font-light'>
            About Us
          </div>
          <div className='text-brand-gray text-2xl font-brand font-light leading-normal'>
            Akseizer Design Group (ADG) is a dynamic team of interior designers,
            architects, brand strategists, and builders dedicated to crafting
            immersive, innovative spaces. Based in Alexandria, Virginia, our
            award-winning team has completed over 1,000 projects across
            multi-family, hospitality, commercial, and residential sectors,
            always delivering with meticulous attention to detail.
          </div>
        </div>
        <div className='col-span-12 md:col-span-6 w-full h-full'>
          <div
            className='w-full h-full bg-cover bg-center'
            style={{
              backgroundImage: `url('https://adgadmin170407-dev.s3.us-east-1.amazonaws.com/studio-building.webp')`,
            }}
          ></div>
        </div>
        <div className='col-span-12 md:col-span-12 w-full h-full'>
          <div className='text-brand-brown text-4xl font-brand text-center font-light italic leading-normal max-w-4xl mx-auto'>
            Each space we craft tells a story, brought to life through a
            distinctive visual language that elevates the everyday.
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudioAbout;
