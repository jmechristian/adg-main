'use client';
import React from 'react';
import Hero from '@/components/Hero';
import HomeText from '@/components/HomeText';
import HomeVisit from '@/components/HomeVisit';
import VariableHomeDepartments from '@/components/VariableHomeDepartments';
import SecondVariableHomeDepartments from '@/components/SecondVariableHomeDepartments';
import { HomeSlider } from '@jmechristian/adg-component-library';
import '@jmechristian/adg-component-library/styles.css';

const HomeWrapper = ({ homePage }) => {
  return (
    <div className='w-full max-w-[2000px] mx-auto relative flex !flex-col !gap-16'>
      <Hero
        hero={homePage?.hero || ''}
        heroQuote={homePage?.heroQuote || ''}
        id={homePage?.id}
      />
      <HomeText introText={homePage?.introText || ''} id={homePage?.id} />
      <VariableHomeDepartments />
      <HomeSlider featured={homePage?.featureProjects.items || []} />
      <SecondVariableHomeDepartments />
      <HomeVisit
        studioText={homePage?.studioText || ''}
        studioLink={homePage?.studioLink || ''}
        studioImage={homePage?.studioImage || ''}
        id={homePage?.id}
      />
    </div>
  );
};

export default HomeWrapper;
