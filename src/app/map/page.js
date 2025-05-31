'use client';
import React, { useEffect, useState } from 'react';
import MapComponent from '@/components/MapComponent';
import { listProjectsWithLocations } from '@/helpers/api';
import useLayoutStore from '@/store/useLayoutStore';

const Page = () => {
  const { setDarkNavTrue } = useLayoutStore();
  const [locations, setLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setDarkNavTrue();
  }, []);

  useEffect(() => {
    const getLocations = async () => {
      setIsLoading(true);
      const locations = await listProjectsWithLocations();
      setLocations(locations);
      setIsLoading(false);
    };
    getLocations();
  }, []);

  return (
    <div className='w-full'>
      <div className='h-36'></div>
      {isLoading ? (
        <div className='w-full h-[calc(100vh-11rem)] bg-neutral-100 animate-pulse rounded-lg' />
      ) : (
        <MapComponent locations={locations} />
      )}
    </div>
  );
};

export default Page;
