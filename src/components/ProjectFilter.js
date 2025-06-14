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
import { useRouter, useSearchParams } from 'next/navigation';

const ProjectFilter = ({ projects }) => {
  // console.log(projects);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [departments, setDepartments] = useState([]);
  const [departmentFilters, setDepartmentFilters] = useState(() => {
    const deptId = searchParams.get('department');
    return deptId ? { id: deptId } : null;
  });
  const [locationFilters, setLocationFilters] = useState([]);
  const [typeFilters, setTypeFilters] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [subcategoryFilters, setSubcategoryFilters] = useState(() => {
    const subId = searchParams.get('subcategory');
    return subId ? { id: subId } : null;
  });
  const [displayCount, setDisplayCount] = useState(12);
  const [isLoading, setIsLoading] = useState(false);

  const PROJECTS_PER_PAGE = 12;

  useEffect(() => {
    const fetchDepartments = async () => {
      const departments = await getDepartments();
      const filteredDepts = departments.filter(
        (d) =>
          d.id !== '763080b2-dddf-45e6-ab08-c540a84d8b07' &&
          d.id !== '6cd6cac5-1533-45e3-8e9a-d4e1472def9a'
      );
      setDepartments(filteredDepts);

      // If we have a department ID from URL, find its name
      if (departmentFilters?.id) {
        const dept = filteredDepts.find((d) => d.id === departmentFilters.id);
        if (dept) {
          setDepartmentFilters({ id: dept.id, name: dept.name });
        }
      } else {
        // Default to Interiors if no department in URL
        setDepartmentFilters({
          id: '0cd75086-b396-4c52-a907-5b52fb6aeedd',
          name: 'Interiors',
        });
      }
    };
    fetchDepartments();
  }, []);

  useEffect(() => {
    const fetchSubcategories = async () => {
      const subcategories = await getSubcategoriesByDepartment(
        departmentFilters.id
      );
      setSubcategories(subcategories);

      // If we have a subcategory ID from URL, find its name
      if (subcategoryFilters?.id) {
        const sub = subcategories.find(
          (s) => s.subcategory.id === subcategoryFilters.id
        );
        if (sub) {
          setSubcategoryFilters({
            id: sub.subcategory.id,
            name: sub.subcategory.name,
          });
        }
      }
    };
    departmentFilters && departmentFilters.id && fetchSubcategories();
  }, [departmentFilters]);

  const updateFilters = (dept, sub) => {
    const params = new URLSearchParams();
    if (dept?.id) params.set('department', dept.id);
    if (sub?.id) params.set('subcategory', sub.id);

    // Update URL without full page reload
    router.push(`?${params.toString()}`, { scroll: false });

    setDepartmentFilters(dept);
    setSubcategoryFilters(sub);
  };

  const handleDepartmentClick = (department) => {
    updateFilters({ id: department.id, name: department.name }, null);
  };

  const handleSubcategoryClick = (subcategory) => {
    updateFilters(
      departmentFilters,
      subcategory
        ? {
            id: subcategory.subcategory.id,
            name: subcategory.subcategory.name,
          }
        : null
    );
  };

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

  const hasMoreProjects = displayedProjects.length < filteredProjects.length;

  return (
    <div className='w-full max-w-6xl mx-auto flex flex-col gap-2 pb-24'>
      <div className='w-full flex flex-col gap-6'>
        {/* Mobile Dropdowns */}
        <div className='md:hidden flex flex-col gap-4 px-4'>
          <select
            className='w-full p-3 border border-neutral-200 rounded-md font-brand-book text-lg'
            value={departmentFilters?.id || ''}
            onChange={(e) => {
              const selectedDept = departments.find(
                (d) => d.id === e.target.value
              );
              if (selectedDept) {
                handleDepartmentClick(selectedDept);
              }
            }}
          >
            <option value=''>Select Department</option>
            {departments &&
              departments
                .sort((a, b) => a.displayOrder - b.displayOrder)
                .map((department) => (
                  <option key={department.id} value={department.id}>
                    {department.name}
                  </option>
                ))}
          </select>

          <select
            className='w-full p-3 border border-neutral-200 rounded-md font-brand-book text-lg'
            value={subcategoryFilters?.id || ''}
            onChange={(e) => {
              if (e.target.value === '') {
                handleSubcategoryClick(null);
              } else {
                const selectedSub = subcategories.find(
                  (s) => s.subcategory.id === e.target.value
                );
                if (selectedSub) {
                  handleSubcategoryClick(selectedSub);
                }
              }
            }}
            disabled={!departmentFilters?.id}
          >
            <option value=''>All</option>
            {subcategories &&
              subcategories
                .sort((a, b) => {
                  const aOrder =
                    a.subcategory.displayOrder ?? Number.MAX_SAFE_INTEGER;
                  const bOrder =
                    b.subcategory.displayOrder ?? Number.MAX_SAFE_INTEGER;
                  if (aOrder !== bOrder) return aOrder - bOrder;
                  return a.subcategory.name.localeCompare(b.subcategory.name);
                })
                .map((subcategory) => (
                  <option
                    key={subcategory.subcategory.id}
                    value={subcategory.subcategory.id}
                  >
                    {subcategory.subcategory.name}
                  </option>
                ))}
          </select>

          <button
            className='w-full flex items-center justify-center gap-2 p-3 border border-neutral-200 rounded-md font-brand-book text-lg text-brand-brown'
            onClick={() => router.push('/map')}
          >
            <Image
              src='https://adgadmin170407-dev.s3.us-east-1.amazonaws.com/map-icon.png'
              alt='Map'
              width={24}
              height={24}
            />
            <span>View Map</span>
          </button>
        </div>

        {/* Desktop Layout */}
        <div className='hidden md:block'>
          <div className='w-full flex items-center gap-6 mb-1.5'>
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
                    onClick={() => handleDepartmentClick(department)}
                  >
                    {department.name}
                  </div>
                ))}
          </div>
          <div className='w-full flex items-center gap-10 border-y border-neutral-200 relative'>
            <div className='flex flex-1 items-center gap-5 mt-3'>
              <div
                className={`cursor-pointer relative ${
                  !subcategoryFilters?.id
                    ? 'text-brand-brown after:absolute after:bottom-[-1px] after:left-0 after:w-full after:h-[3px] after:bg-brand-brown'
                    : 'text-neutral-300'
                } font-brand-book font-light tracking-wide text-lg pb-2`}
                onClick={() => handleSubcategoryClick(null)}
              >
                All
              </div>
              {subcategories &&
                subcategories
                  .sort((a, b) => {
                    const aOrder =
                      a.subcategory.displayOrder ?? Number.MAX_SAFE_INTEGER;
                    const bOrder =
                      b.subcategory.displayOrder ?? Number.MAX_SAFE_INTEGER;
                    if (aOrder !== bOrder) return aOrder - bOrder;
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
                      onClick={() => handleSubcategoryClick(subcategory)}
                    >
                      {subcategory.subcategory.name}
                    </div>
                  ))}
            </div>
            <div
              className='flex items-center gap-2 border-l border-neutral-200 pl-4 pb-2 pr-1 h-full'
              onClick={() => router.push('/map')}
            >
              <div className='cursor-pointer mt-3'>
                <Image
                  src='https://adgadmin170407-dev.s3.us-east-1.amazonaws.com/map-icon.png'
                  alt='Filter'
                  width={24}
                  height={24}
                />
              </div>
              <div className='cursor-pointer text-brand-brown font-brand-book font-light tracking-wide text-lg mt-3'>
                Map
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full flex flex-col gap-6 mt-8'>
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
                        onClick={() => handleProjectClick(project)}
                      >
                        <FilterItem project={project} />
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
                            handleProjectClick(item.projects[0]);
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
                            handleProjectClick(item.projects[1]);
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
                            handleProjectClick(item.projects[2]);
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
                )}
                {item.type === 'full' && (
                  <div className='w-full grid md:grid-cols-2 lg:grid-cols-12 gap-6'>
                    <div className='w-full col-span-12'>
                      <div
                        className='w-full h-full aspect-[6/3]'
                        onClick={() => {
                          handleProjectClick(item.projects[0]);
                        }}
                      >
                        <FilterItem project={item.projects[0]} />
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
                            handleProjectClick(item.projects[0]);
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
                            handleProjectClick(item.projects[1]);
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
                            handleProjectClick(item.projects[2]);
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
  );
};

export default ProjectFilter;
