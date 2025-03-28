import './globals.css';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Nav from '@/components/Nav';
export const metadata = {
  title: 'Akseizer Design Group',
  description: 'Akseizer Design Group',
};

export default function RootLayout({ children }) {
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
      href: '/millwork',
    },
    {
      label: 'Construction Services',
      href: '/construction',
    },
    {
      label: 'Residential Design',
      href: '/residential',
    },
  ];

  return (
    <html lang='en'>
      <body className='relative'>
        <Nav />
        <main>{children}</main>
        <footer className='w-full py-20 bg-brand-peach'>
          <div className='flex flex-col gap-8'>
            <div className='w-full max-w-6xl mx-auto grid grid-cols-4'>
              <div className='col-span-4 md:col-span-1'>
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
                    <Link
                      href={link.href}
                      key={link.label}
                      className='text-brand-gray text-lg font-brand-book uppercase'
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div className='col-span-4 md:col-span-1'>
                <div className='flex flex-col gap-2 justify-center'>
                  {departmentLinks.map((link) => (
                    <Link
                      href={link.href}
                      key={link.label}
                      className='text-brand-gray text-lg font-brand-book'
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div className='col-span-4 md:col-span-1 justify-end pl-16'>
                <div className='flex flex-col gap-5 justify-end'>
                  <div className='text-brand-gray text-lg font-brand-book'>
                    <span className='font-brand-book-bold block'>
                      Akseizer Design Group{' '}
                    </span>
                    123 North Alfred Street
                    <br />
                    Alexandria, VA 22314
                  </div>
                  <div className='flex flex-col'>
                    <div className='text-brand-gray text-lg font-brand-book'>
                      <span className='font-brand-book-bold'>T:</span> (703)
                      804-8200
                    </div>
                    <div className='text-brand-gray text-lg font-brand-book'>
                      <span className='font-brand-book-bold'>E:</span>{' '}
                      Info@DesignADG.com
                    </div>
                  </div>
                  <div className='flex items-center gap-3'>
                    <FaFacebook className='w-6 h-6 text-brand-gray' />
                    <FaInstagram className='w-6 h-6 text-brand-gray' />
                    <FaLinkedin className='w-6 h-6 text-brand-gray' />
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full max-w-6xl mx-auto h-[1px] bg-brand-gray/30 mt-5'></div>
            <div className='w-full max-w-6xl mx-auto text-brand-gray text-lg font-brand-book text-center'>
              ©2025 Akseizer Design Group, LLC | Images on the website require
              written permission for third party use.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
