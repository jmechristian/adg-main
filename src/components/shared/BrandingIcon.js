import React from 'react';
import { MdCategory } from 'react-icons/md';

const BrandingIcon = ({ small, active, onClick }) => {
  return (
    <div className='relative group' onClick={onClick}>
      <div
        className='absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-sm 
        opacity-0 group-hover:opacity-100 transition-opacity'
      >
        Branding
      </div>
      <div
        className={`${
          small ? 'w-7 h-7' : 'w-10 h-10'
        } bg-brand rounded-full flex items-center justify-center cursor-pointer
        ${!active ? 'opacity-50' : ''} transition-opacity`}
      >
        <MdCategory
          className={`${small ? 'text-xl' : 'text-3xl'} text-white/60`}
        />
      </div>
    </div>
  );
};

export default BrandingIcon;
