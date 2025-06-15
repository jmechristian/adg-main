'use client';
import React, { useState } from 'react';
import useLayoutStore from '@/store/useLayoutStore';
import { MdDehaze, MdClose } from 'react-icons/md';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Nav = () => {
  const { isDarkNav } = useLayoutStore();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
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
    <nav className='w-full absolute top-0 left-0 z-50 pt-4 lg:pt-6 px-4 lg:px-0'>
      <div className='w-full max-w-5xl mx-auto flex items-center justify-between'>
        {links.slice(0, 2).map((link) => (
          <a
            href={link.href}
            key={link.label}
            className={`text-2xl font-brand italic hidden lg:!block hover:border-b hover:border-brand-gray transition-all duration-300 pb-1 ${
              isDarkNav ? 'text-brand-gray' : 'text-white'
            } ${
              pathname === link.href ? 'border-b pb-1 border-brand-gray' : ''
            }`}
          >
            {link.label}
          </a>
        ))}
        <div
          className='hidden lg:!block max-w-[120px]'
          onClick={() => router.push('/')}
        >
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
            className={`text-2xl font-brand italic hidden lg:!block hover:border-b hover:border-brand-gray pb-1 transition-all duration-300 ${
              isDarkNav ? 'text-brand-gray' : 'text-white'
            } ${
              pathname === link.href ? 'border-b pb-1 border-brand-gray' : ''
            }`}
          >
            {link.label}
          </a>
        ))}
        <div
          className='max-w-[90px] lg:!hidden'
          onClick={() => router.push('/')}
        >
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
        <div className='lg:!hidden' onClick={() => setIsOpen(!isOpen)}>
          <MdDehaze size={32} />
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className='w-full h-screen bg-brand-peach absolute top-0 left-0 z-50 flex flex-col items-center justify-center'
        >
          <button
            onClick={() => setIsOpen(false)}
            className='absolute top-6 right-6 text-3xl'
          >
            <MdClose />
          </button>
          <div className='w-full max-w-5xl mx-auto flex flex-col items-center justify-center'>
            {links.map((link, index) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link href={link.href} onClick={() => setIsOpen(false)}>
                  <div className='text-5xl font-brand italic hover:border-b hover:border-brand-gray transition-all duration-300 pb-3'>
                    {link.label}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Nav;
