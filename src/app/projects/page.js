'use client';
import React, { useEffect, useState } from 'react';
import { getAllProjects } from '@/helpers/api';
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
      const projects = await getAllProjects();
      console.log(projects.listProjects.items);
      setProjects(projects.listProjects.items);
      setLoading(false);
    };
    getProjects();
  }, []);

  return (
    <div className='w-full max-w-6xl mx-auto'>
      <div className='h-64'></div>
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
          <ProjectFilter projects={projects} />
        </div>
      )}
    </div>
  );
};

export default Page;
