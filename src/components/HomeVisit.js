import React from 'react';

const HomeVisit = () => {
  return (
    <div className='w-full max-w-6xl mx-auto py-24'>
      <div className='grid grid-cols-12 gap-20 items-center'>
        <div className='col-span-12 md:col-span-6 flex flex-col gap-10'>
          <div className='text-brand-gray text-3xl font-brand font-light'>
            With a diverse portfolio spanning multi-family, hospitality,
            high-end residential, and commercial spaces,{' '}
            <span className='italic'>
              ADG creates immersive environments that blend artistry, function,
              and innovation.
            </span>
          </div>
          <div className='text-brand-gray text-3xl font-brand font-light'>
            Operating from a dynamic studio in Alexandria, Virginia, our
            award-winning team delivers a distinctive visual language that
            elevates every project.
          </div>
          <div className='text-brand-gray text-xl font-brand-book uppercase bg-brand-peach px-10 py-6 w-fit'>
            Visit Our Studio
          </div>
        </div>
        <div className='col-span-12 md:col-span-6'>
          <div
            className='w-full h-full bg-cover bg-center aspect-square'
            style={{
              backgroundImage: `url('https://adgadmin170407-dev.s3.us-east-1.amazonaws.com/visit-hero.png')`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default HomeVisit;
