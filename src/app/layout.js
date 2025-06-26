'use client';

import './globals.css';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdCheckBoxOutlineBlank, MdAspectRatio } from 'react-icons/md';
import { useEffect } from 'react';
import useLayoutStore from '@/store/useLayoutStore';
import Nav from '@/components/Nav';
// export const metadata = {
//   title: 'Akseizer Design Group',
//   description: 'Akseizer Design Group',
// };

export default function RootLayout({ children }) {
  const { isBoxedLayout, setBoxedLayoutTrue, setBoxedLayoutFalse } =
    useLayoutStore();

  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  const footerLinks = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Projects',
      href: '/projects',
    },
    {
      label: 'Services',
      href: '/services',
    },
    {
      label: 'Studio',
      href: '/studio',
    },
    {
      label: 'Map',
      href: '/map',
    },
    {
      label: 'Inquire',
      href: '/inquire',
    },
  ];

  const departmentLinks = [
    {
      label: 'Interior Design',
      href: '/interiors',
    },
    {
      label: 'Architecture',
      href: '/architecture',
    },
    {
      label: 'Branding & Marketing',
      href: '/branding',
    },
    {
      label: 'Millwork & Cabinetry',
      href: '/services',
    },
    {
      label: 'Construction Services',
      href: '/services',
    },
    {
      label: 'Residential Design',
      href: '/services',
    },
  ];

  return (
    <html lang='en' className='scroll-smooth'>
      <body className='relative min-h-screen select-none'>
        {/* <div className='fixed top-5 right-5 w-16 h-16 rounded-full bg-black z-[100] flex items-center justify-center cursor-pointer hover:bg-brand-gray transition-all duration-300'>
          {isBoxedLayout ? (
            <MdCheckBoxOutlineBlank
              className='w-10 h-10 text-white'
              onClick={setBoxedLayoutFalse}
            />
          ) : (
            <MdAspectRatio
              className='w-10 h-10 text-white'
              onClick={setBoxedLayoutTrue}
            />
          )}
        </div> */}
        <Nav />
        <main className='relative z-10 bg-white mb-[1000px] md:mb-[375px]'>
          {children}
        </main>
        <footer className='w-full py-12 bg-brand-peach fixed bottom-0 left-0 right-0 z-0'>
          <div className='flex flex-col gap-4'>
            <div className='w-full max-w-6xl mx-auto flex flex-col md:!grid md:!grid-cols-4 gap-10 px-24 md:px-0'>
              <div className='col-span-1 md:col-span-1'>
                <Image
                  src='https://adgadmin170407-dev.s3.us-east-1.amazonaws.com/dark-logo.png'
                  alt='ADG'
                  width={150}
                  height={115}
                />
              </div>
              <div className='col-span-4 md:col-span-1'>
                <div className='flex flex-col gap-2'>
                  {footerLinks.map((link) => (
                    <div
                      onClick={() => {
                        window.location.href = link.href;
                      }}
                      key={link.label}
                      className='text-brand-gray font-brand-book uppercase cursor-pointer'
                    >
                      {link.label}
                    </div>
                  ))}
                </div>
              </div>
              <div className='col-span-4 md:col-span-1'>
                <div className='flex flex-col gap-2 justify-center'>
                  {departmentLinks.map((link) => (
                    <div
                      onClick={() => {
                        window.location.href = link.href;
                      }}
                      key={link.label}
                      className='text-brand-gray font-brand-book cursor-pointer'
                    >
                      {link.label}
                    </div>
                  ))}
                </div>
              </div>
              <div className='col-span-4 md:col-span-1 justify-end md:pl-16'>
                <div className='flex flex-col gap-5 justify-end'>
                  <div className='text-brand-gray font-brand-book'>
                    <span className='font-brand-book-bold block'>
                      Akseizer Design Group{' '}
                    </span>
                    123 North Alfred Street
                    <br />
                    Alexandria, VA 22314
                  </div>
                  <div className='flex flex-col'>
                    <div className='text-brand-gray font-brand-book'>
                      <span className='font-brand-book-bold'>T:</span> (703)
                      804-8200
                    </div>
                    <div className='text-brand-gray font-brand-book'>
                      <span className='font-brand-book-bold'>E:</span>{' '}
                      Info@DesignADG.com
                    </div>
                  </div>
                  <div className='flex items-center gap-3 h-6'>
                    {/* <FaFacebook className='w-6 h-6 text-brand-gray' />
                    <FaInstagram className='w-6 h-6 text-brand-gray' />
                    <FaLinkedin className='w-6 h-6 text-brand-gray' /> */}
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full max-w-6xl mx-auto h-[1px] bg-brand-gray/30 mt-5'></div>
            <div className='w-full max-w-6xl mx-auto text-brand-gray  text-xs font-brand-book text-center'>
              ©2025 Akseizer Design Group, LLC | Images on the website require
              written permission for third party use.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
