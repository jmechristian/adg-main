import React from 'react';
import { MdChair } from 'react-icons/md';

const InteriorsIcon = ({ small, active, onClick }) => {
  return (
    <div className='relative group' onClick={onClick}>
      <div
        className='absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-sm 
        opacity-0 group-hover:opacity-100 transition-opacity'
      >
        Interiors
      </div>
      <div
        className={`${
          small ? 'w-7 h-7' : 'w-10 h-10'
        } bg-brand-brown rounded-full flex items-center justify-center cursor-pointer
        ${!active ? 'opacity-50' : ''} transition-opacity`}
      >
        <MdChair
          className={`${small ? 'text-xl' : 'text-3xl'} text-white/70`}
        />
      </div>
    </div>
  );
};

export default InteriorsIcon;
