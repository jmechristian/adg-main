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
      <HomeDepartments
        department='Interior Design'
        content='Designing your dreams'
        callout='into reality'
        link='/interior-design'
        image='https://adgadmin170407-dev.s3.us-east-1.amazonaws.com/home_department1.png'
      />
      <HomeDepartments
        department='ARCHITECTURE'
        content='Elevating your vision to'
        callout='new heights'
        link='/architecture'
        image='https://adgadmin170407-dev.s3.us-east-1.amazonaws.com/home_department2.png'
      />
      <HomeDepartments
        department='branding & marketing'
        content='Crafting brands that sell '
        callout='your story'
        link='/branding'
        image='https://adgadmin170407-dev.s3.us-east-1.amazonaws.com/home_department3.png'
      />
    </div>
  );
};

export default VariableHomeDepartments;
