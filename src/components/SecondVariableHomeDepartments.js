'use client';
import React from 'react';
import HomeDepartments from './HomeDepartments';
import useLayoutStore from '@/store/useLayoutStore';
const SecondVariableHomeDepartments = () => {
  const { isBoxedLayout } = useLayoutStore();
  return (
    <div
      className={`grid md:grid-cols-3 gap-12 ${
        isBoxedLayout ? 'max-w-7xl mx-auto w-full' : 'max-w-full'
      }`}
    >
      <HomeDepartments id={'8bada3a0-7d24-4b9d-9568-6a83fb71e8e4'} />
      <HomeDepartments id={'fcc02d20-79df-47c1-bd4f-f0f39973ccfa'} />
      <HomeDepartments id={'75c5697a-2915-4706-9bd9-87b485a0a5c6'} />
    </div>
  );
};

export default SecondVariableHomeDepartments;
