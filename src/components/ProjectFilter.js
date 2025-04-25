'use client';

import React, {
  useState,
  useEffect,
  useMemo,
  useRef,
  useCallback,
} from 'react';
import Image from 'next/image';
import { getDepartments, getSubcategoriesByDepartment } from '@/helpers/api';
import FilterItem from './FilterItem';
import { useRouter } from 'next/navigation';

const ProjectFilter = ({ projects }) => {
  // console.log(projects);
  const router = useRouter();
  const [departments, setDepartments] = useState([]);
  const [departmentFilters, setDepartmentFilters] = useState([]);
  const [locationFilters, setLocationFilters] = useState([]);
  const [typeFilters, setTypeFilters] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [subcategoryFilters, setSubcategoryFilters] = useState(null);
  const [displayCount, setDisplayCount] = useState(12);
  const [isLoading, setIsLoading] = useState(false);

  const PROJECTS_PER_PAGE = 12;

  useEffect(() => {
    const fetchDepartments = async () => {
      const departments = await getDepartments();
      console.log('departments', departments);
      setDepartments(departments);
      setDepartmentFilters({
        id: '0cd75086-b396-4c52-a907-5b52fb6aeedd',
        name: 'Interiors',
      });
    };
    fetchDepartments();
  }, []);

  useEffect(() => {
    const fetchSubcategories = async () => {
      const subcategories = await getSubcategoriesByDepartment(
        departmentFilters.id
      );
      setSubcategories(subcategories);
    };
    departmentFilters && departmentFilters.id && fetchSubcategories();
  }, [departmentFilters]);

  const filteredProjects = useMemo(() => {
    return projects
      .filter((project) => {
        if (!departmentFilters?.id && !subcategoryFilters?.id) return true;

        const hasDepartment = project.departments.items.some(
          (dept) => dept.department.id === departmentFilters?.id
        );

        const hasSubcategory = project.subcategories.items.some(
          (sub) => sub.subcategory.id === subcategoryFilters?.id
        );

        if (departmentFilters?.id && !subcategoryFilters?.id) {
          return hasDepartment;
        }

        if (departmentFilters?.id && subcategoryFilters?.id) {
          return hasDepartment && hasSubcategory;
        }

        return true;
      })
      .sort((a, b) => {
        // If a subcategory filter is active, sort by that subcategory's displayOrder first
        if (subcategoryFilters?.id) {
          const aSubcategoryProject = a.subcategoryProjects?.items?.find(
            (item) => item.subcategory?.name === subcategoryFilters.name
          );
          const bSubcategoryProject = b.subcategoryProjects?.items?.find(
            (item) => item.subcategory?.name === subcategoryFilters.name
          );

          const aOrder =
            aSubcategoryProject?.displayOrder ?? Number.MAX_SAFE_INTEGER;
          const bOrder =
            bSubcategoryProject?.displayOrder ?? Number.MAX_SAFE_INTEGER;

          if (aOrder !== bOrder) {
            return aOrder - bOrder;
          }
        }

        // Then sort by featured projects
        const aFeaturedOrder =
          a.featuredProjects?.items?.[0]?.displayOrder ??
          Number.MAX_SAFE_INTEGER;
        const bFeaturedOrder =
          b.featuredProjects?.items?.[0]?.displayOrder ??
          Number.MAX_SAFE_INTEGER;

        if (aFeaturedOrder !== bFeaturedOrder) {
          return aFeaturedOrder - bFeaturedOrder;
        }

        // If no subcategory filter, sort by subcategory name and then displayOrder
        const aSubcategoryName =
          a.subcategoryProjects?.items?.[0]?.subcategory?.name ?? '';
        const bSubcategoryName =
          b.subcategoryProjects?.items?.[0]?.subcategory?.name ?? '';

        if (aSubcategoryName !== bSubcategoryName) {
          return aSubcategoryName.localeCompare(bSubcategoryName);
        }

        const aSubcategoryOrder =
          a.subcategoryProjects?.items?.[0]?.displayOrder ??
          Number.MAX_SAFE_INTEGER;
        const bSubcategoryOrder =
          b.subcategoryProjects?.items?.[0]?.displayOrder ??
          Number.MAX_SAFE_INTEGER;

        return aSubcategoryOrder - bSubcategoryOrder;
      });
  }, [projects, departmentFilters, subcategoryFilters]);

  const displayedProjects = useMemo(() => {
    return filteredProjects.slice(0, displayCount);
  }, [filteredProjects, displayCount]);

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setDisplayCount((prev) => prev + PROJECTS_PER_PAGE);
      setIsLoading(false);
    }, 500);
  };

  const hasMoreProjects = displayedProjects.length < filteredProjects.length;

  return (
    <div className='w-full max-w-6xl mx-auto flex flex-col gap-10 pb-24'>
      <div className='w-full flex items-center justify-between'>
        {departments &&
          departments
            .sort((a, b) => a.displayOrder - b.displayOrder)
            .map((department) => (
              <div
                className={`cursor-pointer ${
                  departmentFilters.id === department.id
                    ? 'text-brand-brown'
                    : 'text-neutral-300'
                } font-brand-book font-light tracking-wide uppercase text-2xl`}
                key={department.id}
                onClick={() => {
                  setDepartmentFilters({
                    id: department.id,
                    name: department.name,
                  });
                  setSubcategoryFilters(null);
                }}
              >
                {department.name}
              </div>
            ))}
      </div>
      <div className='w-full flex items-center justify-between border-b border-neutral-200 relative'>
        <div className='flex flex-1 items-center gap-6'>
          {subcategories &&
            subcategories
              .sort((a, b) => {
                // First sort by subcategory displayOrder
                const aOrder =
                  a.subcategory.displayOrder ?? Number.MAX_SAFE_INTEGER;
                const bOrder =
                  b.subcategory.displayOrder ?? Number.MAX_SAFE_INTEGER;
                if (aOrder !== bOrder) {
                  return aOrder - bOrder;
                }
                // If displayOrder is the same, sort alphabetically by name
                return a.subcategory.name.localeCompare(b.subcategory.name);
              })
              .map((subcategory) => (
                <div
                  key={subcategory.id}
                  className={`cursor-pointer relative ${
                    subcategoryFilters?.id === subcategory.subcategory.id
                      ? 'text-brand-brown after:absolute after:bottom-[-1px] after:left-0 after:w-full after:h-[3px] after:bg-brand-brown'
                      : 'text-neutral-300'
                  } font-brand-book font-light tracking-wide text-lg pb-2`}
                  onClick={() =>
                    setSubcategoryFilters({
                      id: subcategory.subcategory.id,
                      name: subcategory.subcategory.name,
                    })
                  }
                >
                  {subcategory.subcategory.name}
                </div>
              ))}
        </div>
        <div className='flex items-center gap-2 border-l border-neutral-200 pl-4 pb-2 pr-1'>
          <div className='cursor-pointer'>
            <Image
              src='https://adgadmin170407-dev.s3.us-east-1.amazonaws.com/map-icon.png'
              alt='Filter'
              width={28}
              height={28}
            />
          </div>
          <div className='cursor-pointer text-brand-brown font-brand-book font-light tracking-wide text-lg'>
            Map
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
            if (item.type === 'grid1') {
              return (
                <div
                  key={`grid1-${index}`}
                  className='w-full grid md:grid-cols-2 lg:grid-cols-12 gap-6'
                >
                  <div className='w-full col-span-8 h-full'>
                    <div
                      className='w-full h-full'
                      onClick={() => {
                        if (item.projects[0]) {
                          console.log(item.projects[0]);
                          router.push(
                            `/interiors/draft/${item.projects[0].id}`
                          );
                        }
                      }}
                    >
                      {item.projects[0] ? (
                        <FilterItem project={item.projects[0]} />
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
                          console.log(item.projects[1]);
                          router.push(
                            `/interiors/draft/${item.projects[1].id}`
                          );
                        }
                      }}
                    >
                      {item.projects[1] ? (
                        <FilterItem project={item.projects[1]} />
                      ) : (
                        <div className='w-full h-full bg-white'></div>
                      )}
                    </div>
                    <div
                      className='w-full aspect-video'
                      onClick={() => {
                        if (item.projects[2]) {
                          console.log(item.projects[2]);
                          router.push(
                            `/interiors/draft/${item.projects[2].id}`
                          );
                        }
                      }}
                    >
                      {item.projects[2] ? (
                        <FilterItem project={item.projects[2]} />
                      ) : (
                        <div className='w-full h-full bg-white'></div>
                      )}
                    </div>
                  </div>
                </div>
              );
            } else if (item.type === 'full') {
              return (
                <div
                  key={`full-${index}`}
                  className='w-full grid md:grid-cols-2 lg:grid-cols-12 gap-6'
                >
                  <div className='w-full col-span-12'>
                    <div
                      className='w-full h-full aspect-[6/3]'
                      onClick={() => {
                        console.log(item.projects[0]);
                        router.push(`/interiors/draft/${item.projects[0].id}`);
                      }}
                    >
                      <FilterItem project={item.projects[0]} />
                    </div>
                  </div>
                </div>
              );
            } else if (item.type === 'grid2') {
              return (
                <div
                  key={`grid2-${index}`}
                  className='w-full grid md:grid-cols-2 lg:grid-cols-12 gap-6'
                >
                  <div className='w-full col-span-4 flex flex-col gap-6'>
                    <div
                      className='w-full aspect-video'
                      onClick={() => {
                        if (item.projects[0]) {
                          console.log(item.projects[0]);
                          router.push(
                            `/interiors/draft/${item.projects[0].id}`
                          );
                        }
                      }}
                    >
                      {item.projects[0] ? (
                        <FilterItem project={item.projects[0]} />
                      ) : (
                        <div className='w-full h-full bg-white'></div>
                      )}
                    </div>
                    <div
                      className='w-full aspect-video'
                      onClick={() => {
                        if (item.projects[1]) {
                          console.log(item.projects[1]);
                          router.push(
                            `/interiors/draft/${item.projects[1].id}`
                          );
                        }
                      }}
                    >
                      {item.projects[1] ? (
                        <FilterItem project={item.projects[1]} />
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
                          console.log(item.projects[2]);
                          router.push(
                            `/interiors/draft/${item.projects[2].id}`
                          );
                        }
                      }}
                    >
                      {item.projects[2] ? (
                        <FilterItem project={item.projects[2]} />
                      ) : (
                        <div className='w-full h-full bg-white'></div>
                      )}
                    </div>
                  </div>
                </div>
              );
            }
            return null;
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
  );
};

export default ProjectFilter;
