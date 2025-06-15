'use client';
import React, { useEffect, useState, Suspense } from 'react';
import { getPublishedProjects } from '@/helpers/api';
import useLayoutStore from '@/store/useLayoutStore';
import ProjectFilter from '@/components/ProjectFilter';

const Page = () => {
  const { isDarkNav, setDarkNavTrue } = useLayoutStore();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setDarkNavTrue();
  }, []);

  useEffect(() => {
    const getProjects = async () => {
      const projects = await getPublishedProjects();
      setProjects(projects);
      setLoading(false);
    };
    getProjects();
  }, []);

  return (
    <div className='w-full max-w-6xl mx-auto'>
      <div className='h-32 md:h-44'></div>
      {loading ? (
        <div className='flex items-center justify-center min-h-screen'>
          <div className='w-32 h-32 relative'>
            <div className='animate-pulse flex space-y-4'>
              <div className='space-y-3'>
                <div className='h-4 bg-gray-200 rounded w-32'></div>
                <div className='h-4 bg-gray-200 rounded w-24'></div>
                <div className='h-4 bg-gray-200 rounded w-28'></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='flex flex-col gap-4'>
          <Suspense
            fallback={
              <div className='w-full h-96 bg-neutral-100 animate-pulse rounded-lg' />
            }
          >
            <ProjectFilter projects={projects} />
          </Suspense>
        </div>
      )}
    </div>
  );
};

export default Page;
