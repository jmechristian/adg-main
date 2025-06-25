'use client';
import React from 'react';
import HomeDepartments from './HomeDepartments';
import useLayoutStore from '@/store/useLayoutStore';
const VariableHomeDepartments = () => {
  const { isBoxedLayout } = useLayoutStore();
  return (
    <div
      className={`grid md:grid-cols-3 gap-12 ${
        isBoxedLayout ? 'max-w-7xl mx-auto w-full' : 'max-w-full'
      }`}
    >
      <HomeDepartments id={'3bd05ab9-051d-4a1d-8340-21af2f92f9a6'} />
      <HomeDepartments id={'2c397c64-ac7c-480b-bb28-f301d39fd2e6'} />
      <HomeDepartments id={'805e95b1-063c-4b73-8c7c-3f00b9ddc1b1'} />
    </div>
  );
};

export default VariableHomeDepartments;
