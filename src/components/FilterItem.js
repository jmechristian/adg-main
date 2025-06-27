import React, { useState } from 'react';
import { getFullImageUrl } from '@/helpers/api';
import { AnimatePresence, motion } from 'framer-motion';

const FilterItem = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const heroImage =
    project &&
    project.gallery.images.items.length > 0 &&
    project.gallery.images.items.sort((a, b) => a.order - b.order)[0];
  return (
    project && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className='w-full h-full bg-cover bg-center bg-no-repeat relative cursor-pointer'
        style={{
          backgroundImage: `url(${
            getFullImageUrl(heroImage.url) || 'http://placehold.co/600x400'
          })`,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered && (
          <>
            <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50'></div>
            <div className='absolute inset-0 flex flex-col justify-end z-20 py-3 pl-6 gap-0.5'>
              <h2 className='text-white text-2xl font-brand'>{project.name}</h2>
              <div className='uppercase text-white text-sm font-brand-book tracking-wide'>
                {project.previewLocation || project.locationString}
              </div>
            </div>
          </>
        )}
      </motion.div>
    )
  );
};

export default FilterItem;
