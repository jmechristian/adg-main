'use client';
import { getServicesPage } from '@/helpers/api';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  OverlayHero,
  DepartmentSummary,
} from '@jmechristian/adg-component-library';
import '@jmechristian/adg-component-library/styles.css';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
const Services = () => {
  const [servicesPage, setServicesPage] = useState();
  const [isLoading, setIsLoading] = useState(true);
  console.log(servicesPage);
  const router = useRouter();
  useEffect(() => {
    getServicesPage()
      .then(setServicesPage)
      .finally(() => setIsLoading(false));
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
      className='w-full max-w-[2000px] mx-auto pb-16 overflow-x-hidden'
    >
      <div className='flex flex-col gap-16'>
        <div id='services-hero'>
          <OverlayHero
            image={servicesPage[0].hero}
            content={servicesPage[0].heroQuote}
          />
        </div>
        <div className='flex flex-col max-w-5xl mx-auto px-4 lg:px-0'>
          {servicesPage[0].departments.items
            .sort((a, b) => a.order - b.order)
            .map((department) => (
              <div key={department.id}>
                <DepartmentSummary
                  key={department.id}
                  title={department.title}
                  image={department.image}
                  description={department.description}
                  split={department.split}
                  envision={department.envision.items}
                  design={department.design.items}
                  execute={department.execute.items}
                  link={
                    department.link
                      ? () => (window.location.href = department.link)
                      : null
                  }
                />
                <div className='h-px bg-brand-brown my-16'></div>
              </div>
            ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
