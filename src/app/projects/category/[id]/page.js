'use client';
import React, { useEffect, useState } from 'react';
import { getProjectsBySubcategory, getSubcategoryName } from '@/helpers/api';
import useLayoutStore from '@/store/useLayoutStore';
import FilterItem from '@/components/FilterItem';

import { useParams, useRouter } from 'next/navigation';

const Page = () => {
  const { isDarkNav, setDarkNavTrue } = useLayoutStore();
  const [displayedProjects, setDisplayedProjects] = useState([]);
  const [allProjects, setAllProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const { id } = useParams();
  const router = useRouter();
  const PROJECTS_PER_PAGE = 12;
  const [subcategoryName, setSubcategoryName] = useState('');
  useEffect(() => {
    setDarkNavTrue();
  }, []);

  useEffect(() => {
    const getProjects = async () => {
      setIsLoading(true);
      const projects = await getProjectsBySubcategory(id);
      const publishedProjects = projects.filter(
        (project) => project.project.status === 'PUBLISHED'
      );
      setAllProjects(publishedProjects);
      setDisplayedProjects(publishedProjects.slice(0, PROJECTS_PER_PAGE));
      const subcategoryName = await getSubcategoryName(id);
      setSubcategoryName(subcategoryName);
      setIsLoading(false);
    };
    getProjects();
  }, [id]);

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    const startIndex = 0;
    const endIndex = nextPage * PROJECTS_PER_PAGE;
    setDisplayedProjects(allProjects.slice(startIndex, endIndex));
    setCurrentPage(nextPage);
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

  const hasMoreProjects = displayedProjects.length < allProjects.length;

  return (
    <div className='w-full max-w-6xl mx-auto'>
      <div className='h-44'></div>
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
        <div className='w-full max-w-6xl mx-auto flex flex-col gap-10 pb-24 pt-10'>
          <div className='w-full flex items-center gap-10 border-b border-neutral-200 relative'>
            <div className='flex flex-1 items-center gap-6'>
              <div className='font-brand-book font-light tracking-wide uppercase text-2xl text-neutral-300 pb-2'>
                {subcategoryName}
              </div>
            </div>
          </div>
          <div className='w-full flex flex-col gap-6'>
            {(() => {
              const layout = [];

              for (let i = 0; i < displayedProjects.length; i += 12) {
                const group = displayedProjects.slice(i, i + 12);

                if (group[0] || group[1] || group[2]) {
                  layout.push({
                    type: 'grid1',
                    projects: [group[0], group[1], group[2]],
                  });
                }

                if (group[3]) {
                  layout.push({
                    type: 'full',
                    projects: [group[3]],
                  });
                }

                if (group[4] || group[5] || group[6]) {
                  layout.push({
                    type: 'grid2',
                    projects: [group[4], group[5], group[6]],
                  });
                }

                if (group[7]) {
                  layout.push({
                    type: 'full',
                    projects: [group[7]],
                  });
                }

                if (group[8] || group[9] || group[10]) {
                  layout.push({
                    type: 'grid1',
                    projects: [group[8], group[9], group[10]],
                  });
                }

                if (group[11]) {
                  layout.push({
                    type: 'full',
                    projects: [group[11]],
                  });
                }
              }

              return layout.map((item, index) => {
                // Mobile layout - single column
                const mobileLayout = (
                  <div
                    key={`mobile-${index}`}
                    className='md:hidden flex flex-col gap-6'
                  >
                    {item.projects.map(
                      (project, pIndex) =>
                        project && (
                          <div
                            key={`mobile-project-${pIndex}`}
                            className='w-full aspect-video'
                            onClick={() => handleProjectClick(project.project)}
                          >
                            <FilterItem project={project.project} />
                          </div>
                        )
                    )}
                  </div>
                );

                // Desktop/tablet layout
                const desktopLayout = (
                  <div key={`desktop-${index}`} className='hidden md:block'>
                    {item.type === 'grid1' && (
                      <div className='w-full grid md:grid-cols-2 lg:grid-cols-12 gap-6'>
                        <div className='w-full col-span-8 h-full'>
                          <div
                            className='w-full h-full'
                            onClick={() => {
                              if (item.projects[0]) {
                                handleProjectClick(item.projects[0].project);
                              }
                            }}
                          >
                            {item.projects[0] ? (
                              <FilterItem project={item.projects[0].project} />
                            ) : (
                              <div className='w-full h-full bg-white'></div>
                            )}
                          </div>
                        </div>
                        <div className='w-full col-span-4 flex flex-col gap-6'>
                          <div
                            className='w-full aspect-video'
                            onClick={() => {
                              if (item.projects[1]) {
                                handleProjectClick(item.projects[1].project);
                              }
                            }}
                          >
                            {item.projects[1] ? (
                              <FilterItem project={item.projects[1].project} />
                            ) : (
                              <div className='w-full h-full bg-white'></div>
                            )}
                          </div>
                          <div
                            className='w-full aspect-video'
                            onClick={() => {
                              if (item.projects[2]) {
                                handleProjectClick(item.projects[2].project);
                              }
                            }}
                          >
                            {item.projects[2] ? (
                              <FilterItem project={item.projects[2].project} />
                            ) : (
                              <div className='w-full h-full bg-white'></div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                    {item.type === 'full' && (
                      <div className='w-full grid md:grid-cols-2 lg:grid-cols-12 gap-6'>
                        <div className='w-full col-span-12'>
                          <div
                            className='w-full h-full aspect-[6/3]'
                            onClick={() => {
                              handleProjectClick(item.projects[0].project);
                            }}
                          >
                            <FilterItem project={item.projects[0].project} />
                          </div>
                        </div>
                      </div>
                    )}
                    {item.type === 'grid2' && (
                      <div className='w-full grid md:grid-cols-2 lg:grid-cols-12 gap-6'>
                        <div className='w-full col-span-4 flex flex-col gap-6'>
                          <div
                            className='w-full aspect-video'
                            onClick={() => {
                              if (item.projects[0]) {
                                handleProjectClick(item.projects[0].project);
                              }
                            }}
                          >
                            {item.projects[0] ? (
                              <FilterItem project={item.projects[0].project} />
                            ) : (
                              <div className='w-full h-full bg-white'></div>
                            )}
                          </div>
                          <div
                            className='w-full aspect-video'
                            onClick={() => {
                              if (item.projects[1]) {
                                handleProjectClick(item.projects[1].project);
                              }
                            }}
                          >
                            {item.projects[1] ? (
                              <FilterItem project={item.projects[1].project} />
                            ) : (
                              <div className='w-full h-full bg-white'></div>
                            )}
                          </div>
                        </div>
                        <div className='w-full col-span-8 h-full'>
                          <div
                            className='w-full h-full'
                            onClick={() => {
                              if (item.projects[2]) {
                                handleProjectClick(item.projects[2].project);
                              }
                            }}
                          >
                            {item.projects[2] ? (
                              <FilterItem project={item.projects[2].project} />
                            ) : (
                              <div className='w-full h-full bg-white'></div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );

                return (
                  <div key={`layout-${index}`}>
                    {mobileLayout}
                    {desktopLayout}
                  </div>
                );
              });
            })()}
            {hasMoreProjects && (
              <div className='w-full flex justify-center py-8'>
                <button
                  onClick={handleLoadMore}
                  disabled={isLoading}
                  className='px-8 py-3 bg-brand-brown text-white font-brand-book tracking-wide uppercase hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
                >
                  {isLoading ? (
                    <div className='flex items-center gap-2'>
                      <div className='animate-spin rounded-full h-4 w-4 border-b-2 border-white'></div>
                      <span>Loading...</span>
                    </div>
                  ) : (
                    'Load More'
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
