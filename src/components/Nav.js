'use client';
import React from 'react';
import useLayoutStore from '@/store/useLayoutStore';
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
    <nav className='w-full py-20 absolute top-0 left-0 z-50 pt-6 '>
      <div className='w-full max-w-5xl mx-auto flex items-center justify-between'>
        {links.slice(0, 2).map((link) => (
          <a
            href={link.href}
            key={link.label}
            className={`text-3xl font-brand italic ${
              isDarkNav ? 'text-brand-gray' : 'text-white'
            } ${
              pathname === link.href ? 'border-b-2 pb-2 border-brand-gray' : ''
            }`}
          >
            {link.label}
          </a>
        ))}
        <div>
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
            className={`text-3xl font-brand italic ${
              isDarkNav ? 'text-brand-gray' : 'text-white'
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
