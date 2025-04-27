'use client';
import React from 'react';
import useLayoutStore from '@/store/useLayoutStore';
import { MdDehaze } from 'react-icons/md';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
const Nav = () => {
  const { isDarkNav } = useLayoutStore();
  const pathname = usePathname();
  const links = [
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
      label: 'Inquire',
      href: '/inquire',
    },
  ];

  return (
    <nav className='w-full pb-20 absolute top-0 left-0 z-50 pt-4 lg:pt-6 px-4 lg:px-0 '>
      <div className='w-full max-w-5xl mx-auto flex items-center justify-between'>
        {links.slice(0, 2).map((link) => (
          <a
            href={link.href}
            key={link.label}
            className={`text-2xl font-brand italic hidden lg:!block hover:border-b hover:border-brand-white transition-all duration-300 ${
              isDarkNav ? 'text-brand-gray' : 'text-white'
            } ${
              pathname === link.href ? 'border-b-2 pb-2 border-brand-gray' : ''
            }`}
          >
            {link.label}
          </a>
        ))}
        <div className='hidden lg:!block max-w-[120px]'>
          {isDarkNav ? (
            <Image
              src='https://adgadmin170407-dev.s3.us-east-1.amazonaws.com/dark-logo.png'
              alt='ADG'
              width={148}
              height={107}
            />
          ) : (
            <Image
              src='https://adgadmin170407-dev.s3.us-east-1.amazonaws.com/adg-logo.png'
              alt='ADG'
              width={148}
              height={107}
            />
          )}
        </div>
        {links.slice(2, 4).map((link) => (
          <a
            href={link.href}
            key={link.label}
            className={`text-2xl font-brand italic hidden lg:!block hover:border-b hover:border-brand-white transition-all duration-300 ${
              isDarkNav ? 'text-brand-gray' : 'text-white'
            }`}
          >
            {link.label}
          </a>
        ))}
        <div className='max-w-[90px] lg:!hidden'>
          {isDarkNav ? (
            <Image
              src='https://adgadmin170407-dev.s3.us-east-1.amazonaws.com/dark-logo.png'
              alt='ADG'
              width={148}
              height={107}
            />
          ) : (
            <Image
              src='https://adgadmin170407-dev.s3.us-east-1.amazonaws.com/adg-logo.png'
              alt='ADG'
              width={148}
              height={107}
            />
          )}
        </div>
        <div className='lg:!hidden'>
          <MdDehaze size={32} />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
