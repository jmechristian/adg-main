'use client';
import React, { useEffect, useState } from 'react';
import { getProjectsBySubcategory } from '@/helpers/api';

import FilterItem from '@/components/FilterItem';

import { useRouter } from 'next/navigation';

const RelatedProjects = ({ id, currentId }) => {
  const [relatedProjects, setRelatedProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const router = useRouter();
  const PROJECTS_PER_PAGE = 3;

  useEffect(() => {
    const fetchRelatedProjects = async () => {
      const projects = await getProjectsBySubcategory(id);
      setRelatedProjects(
        projects
          .filter((project) => project.project.status === 'PUBLISHED')
          .filter((project) => project.project.id !== currentId)
      );
    };
    fetchRelatedProjects();
  }, [id]);

  const handleNextPage = () => {
    if (
      currentPage <
      Math.ceil(relatedProjects.length / PROJECTS_PER_PAGE) - 1
    ) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const getCurrentPageProjects = () => {
    const startIndex = currentPage * PROJECTS_PER_PAGE;
    return relatedProjects.slice(startIndex, startIndex + PROJECTS_PER_PAGE);
  };

  const handleProjectClick = (project) => {
    switch (project.departments.items[0].department.id) {
      case '0cd75086-b396-4c52-a907-5b52fb6aeedd':
        router.push(`/interiors/${project.id}`);
        break;
      case '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7':
        router.push(`/architecture/${project.id}`);
        break;
      case '4dfd71af-51a3-4af9-874f-da260e081f08':
        router.push(`/branding/${project.id}`);
        break;
      case '6cd6cac5-1533-45e3-8e9a-d4e1472def9a':
        router.push(`/residential/${project.id}`);
        break;
      case '763080b2-dddf-45e6-ab08-c540a84d8b07':
        router.push(`/millwork/${project.id}`);
        break;
      default:
        router.push(`/interiors/${project.id}`);
        break;
    }
  };

  const hasNextPage =
    currentPage < Math.ceil(relatedProjects.length / PROJECTS_PER_PAGE) - 1;
  const hasPrevPage = currentPage > 0;

  if (relatedProjects.length === 0) return null;

  return (
    <div className='w-full flex items-center justify-center relative'>
      <button
        onClick={handlePrevPage}
        disabled={!hasPrevPage}
        className='absolute -left-20 top-1/2 -translate-y-1/2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
      >
        <div
          className='w-16 h-20 bg-contain cursor-pointer bg-center bg-no-repeat'
          style={{
            backgroundImage: `url('https://adgadmin170407-dev.s3.us-east-1.amazonaws.com/left.png')`,
          }}
        ></div>
      </button>

      <div className='w-full max-w-6xl mx-auto'>
        <div className='w-full grid grid-cols-3 gap-6'>
          {getCurrentPageProjects().map((project) => (
            <div
              key={project.project.id}
              className='w-full aspect-video cursor-pointer'
              onClick={() => handleProjectClick(project.project)}
            >
              <FilterItem project={project.project} />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handleNextPage}
        disabled={!hasNextPage}
        className='absolute -right-20 top-1/2 -translate-y-1/2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
      >
        <div
          className='w-16 h-20 bg-contain cursor-pointer bg-center bg-no-repeat'
          style={{
            backgroundImage: `url('https://adgadmin170407-dev.s3.us-east-1.amazonaws.com/right.png')`,
          }}
        ></div>
      </button>
    </div>
  );
};

export default RelatedProjects;
