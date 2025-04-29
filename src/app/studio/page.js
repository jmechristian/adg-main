'use client';
import React, { useEffect } from 'react';
import useLayoutStore from '@/store/useLayoutStore';
import StudioHero from '@/components/StudioHero';
import StudioAbout from '@/components/StudioAbout';
import StudioTeam from '@/components/StudioTeam';
const Studio = () => {
  return (
    <div className='w-full max-w-[2000px] mx-auto relative flex flex-col gap-16'>
      <StudioHero />
      <StudioAbout />
      <StudioTeam />
    </div>
  );
};

export default Studio;
