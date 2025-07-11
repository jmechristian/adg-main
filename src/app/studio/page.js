'use client';

import { getStudioPage } from '@/helpers/api';
import { useState } from 'react';
import { useEffect } from 'react';
import { OverlayHero } from '@jmechristian/adg-component-library';
import '@jmechristian/adg-component-library/styles.css';
import { AnimatePresence, motion } from 'framer-motion';
export default function Studio() {
  const [studioPage, setStudioPage] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStudioPage = async () => {
      const studioPage = await getStudioPage();
      setStudioPage(studioPage);
      setIsLoading(false);
    };
    fetchStudioPage();
  }, []);

  if (isLoading) {
    return (
      <div className='w-full max-w-7xl mx-auto relative flex flex-col gap-16 min-h-screen pt-40'>
        <div className='animate-pulse'>
          {/* Hero placeholder */}
          <div className='h-96 bg-gray-200 rounded-lg mb-16'></div>

          {/* Text placeholder */}
          <div className='space-y-4 mb-16'>
            <div className='h-4 bg-gray-200 rounded w-3/4'></div>
            <div className='h-4 bg-gray-200 rounded w-1/2'></div>
          </div>

          {/* Departments placeholder */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16'>
            {[...Array(4)].map((_, i) => (
              <div key={i} className='h-64 bg-gray-200 rounded-lg'></div>
            ))}
          </div>

          {/* Featured placeholder */}
          <div className='h-96 bg-gray-200 rounded-lg mb-16'></div>

          {/* Visit placeholder */}
          <div className='h-64 bg-gray-200 rounded-lg'></div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className='w-full max-w-[2000px] mx-auto overflow-x-hidden'
    >
      <div className='flex flex-col gap-16'>
        <div id='studio-hero'>
          <OverlayHero
            image={studioPage?.hero}
            content={studioPage?.heroQuote}
          />
        </div>
        <div className='w-full max-w-5xl mx-auto pb-16 px-4 md:!px-0'>
          <div className='grid grid-cols-1 md:!grid-cols-12 gap-20 items-center overflow-hidden'>
            <div className='col-span-1 md:!col-span-6 flex flex-col gap-4'>
              <div className='text-brand-gray text-4xl font-brand font-light'>
                About Us
              </div>
              <div className='text-brand-gray text-2xl font-brand font-light leading-normal'>
                Led by{' '}
                <span className='font-medium'>
                  Founding Principal Jeff Akseizer
                </span>
                , Akseizer Design Group (ADG) is a visionary studio of interior
                designers, architects, brand strategists, and builders united by
                a passion for creating immersive, forward-thinking environments.
                Headquartered in Alexandria, Virginia, our award-winning team
                has delivered over 1,000 projects nationwide across the
                multi-family, hospitality, commercial, and residential
                sectors—each defined by thoughtful detail and refined execution.
              </div>
            </div>
            <div className='col-span-1 md:!col-span-6 w-full h-full'>
              <div
                className='w-full h-full bg-cover bg-center aspect-[4/3]'
                style={{
                  backgroundImage: `url('https://adgadmin170407-dev.s3.us-east-1.amazonaws.com/Jeff+Headshots_003_2.webp')`,
                }}
              ></div>
            </div>
            <div className='col-span-1 md:!col-span-12 w-full h-full'>
              <div className='text-brand-brown text-4xl font-brand text-center font-light italic leading-normal max-w-4xl mx-auto'>
                Each space we craft tells a story, brought to life through a
                distinctive visual language that elevates the everyday.
              </div>
            </div>
          </div>
        </div>
        <div className='w-full bg-brand-peach/50 pt-16 -mt-16'>
          <div className='w-full max-w-5xl mx-auto flex flex-col gap-6 pb-16 px-4 md:!px-0'>
            <div className='text-brand-gray text-4xl font-brand font-light italic'>
              Our Team
            </div>
            <div className='grid grid-cols-1 md:!grid-cols-4 gap-10 px-10 md:!px-0 overflow-hidden'>
              {studioPage?.leadership.items
                .sort((a, b) => a.order - b.order)
                .map((person) => (
                  <div key={person.id} className='flex flex-col gap-5'>
                    <div
                      className='w-full bg-cover bg-center aspect-[9/11]'
                      style={{ backgroundImage: `url(${person.image})` }}
                    ></div>
                    <div className='flex flex-col gap-1.5'>
                      <div className='flex items-start justify-between'>
                        <div className='text-brand-gray text-2xl font-brand font-light leading-none'>
                          {person.name}
                        </div>
                        <div className='text-brand-brown text-xs font-brand-book uppercase font-light pt-1'>
                          {person.extra}
                        </div>
                      </div>
                      <div className='text-brand-brown text-xs font-brand-book uppercase font-light'>
                        {person.title}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className='w-full bg-brand-dark-peach py-16 flex flex-col gap-6'>
            <div className='w-full max-w-5xl mx-auto grid grid-cols-1 md:!grid-cols-4 gap-10 px-12 md:!px-0 overflow-hidden'>
              {studioPage?.staff.items
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((person) => (
                  <div key={person.id} className='flex flex-col gap-5'>
                    <div
                      className='w-full bg-cover bg-center aspect-[9/11]'
                      style={{ backgroundImage: `url(${person.image})` }}
                    ></div>
                    <div className='flex flex-col gap-1.5'>
                      <div className='flex items-start justify-between'>
                        <div className='text-brand-gray text-2xl font-brand font-light leading-none'>
                          {person.name}
                        </div>
                        <div className='text-brand-brown text-xs font-brand-book uppercase font-light leading-none pt-1'>
                          {person.extra}
                        </div>
                      </div>
                      <div className='text-brand-brown text-xs font-brand-book uppercase font-light'>
                        {person.title}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
