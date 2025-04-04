'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { getDepartments, getSubcategoriesByDepartment } from '@/helpers/api';
import FilterItem from './FilterItem';
import { useRouter } from 'next/navigation';
const ProjectFilter = ({ projects }) => {
  const router = useRouter();
  const [departments, setDepartments] = useState([]);
  const [departmentFilters, setDepartmentFilters] = useState([]);
  const [locationFilters, setLocationFilters] = useState([]);
  const [typeFilters, setTypeFilters] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [subcategoryFilters, setSubcategoryFilters] = useState(null);
  console.log(projects);

  useEffect(() => {
    const fetchDepartments = async () => {
      const departments = await getDepartments();
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
      console.log(subcategories);
    };
    departmentFilters && departmentFilters.id && fetchSubcategories();
  }, [departmentFilters]);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // If no filters are selected, show all projects
      if (!departmentFilters?.id && !subcategoryFilters?.id) return true;

      // Check if project has the selected department
      const hasDepartment = project.departments.items.some(
        (dept) => dept.department.id === departmentFilters?.id
      );

      // Check if project has the selected subcategory
      const hasSubcategory = project.subcategories.items.some(
        (sub) => sub.subcategory.id === subcategoryFilters?.id
      );

      // If only department filter is selected
      if (departmentFilters?.id && !subcategoryFilters?.id) {
        return hasDepartment;
      }

      // If both filters are selected
      if (departmentFilters?.id && subcategoryFilters?.id) {
        return hasDepartment && hasSubcategory;
      }

      return true;
    });
  }, [projects, departmentFilters, subcategoryFilters]);

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
                } font-brand-book font-light tracking-wide uppercase text-xl`}
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
              .sort((a, b) => a.displayOrder - b.displayOrder)
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
          // Create a new array that will hold our layout pattern
          const layout = [];

          // Process projects in groups of 8 (3 for first grid, 1 for full width, 3 for second grid, 1 for second full width)
          for (let i = 0; i < filteredProjects.length; i += 8) {
            const group = filteredProjects.slice(i, i + 8);

            // First grid: large on left, two small on right
            if (group[0] || group[1] || group[2]) {
              layout.push({
                type: 'grid1',
                projects: [group[0], group[1], group[2]],
              });
            }

            // First full width
            if (group[3]) {
              layout.push({
                type: 'full',
                projects: [group[3]],
              });
            }

            // Second grid: two small on left, large on right
            if (group[4] || group[5] || group[6]) {
              layout.push({
                type: 'grid2',
                projects: [group[4], group[5], group[6]],
              });
            }

            // Second full width
            if (group[7]) {
              layout.push({
                type: 'full',
                projects: [group[7]],
              });
            }
          }

          // Render the layout
          return layout.map((item, index) => {
            if (item.type === 'grid1') {
              return (
                <div
                  key={`grid1-${index}`}
                  className='w-full grid md:grid-cols-2 lg:grid-cols-12 gap-6'
                >
                  {/* Large project on left */}
                  <div className='w-full col-span-8 h-full'>
                    <div
                      className='w-full h-full'
                      onClick={() => {
                        if (item.projects[0]) {
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

                  {/* Two small projects on right */}
                  <div className='w-full col-span-4 flex flex-col gap-6'>
                    <div
                      className='w-full aspect-video'
                      onClick={() => {
                        if (item.projects[1]) {
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
                  {/* Two small projects on left */}
                  <div className='w-full col-span-4 flex flex-col gap-6'>
                    <div
                      className='w-full aspect-video'
                      onClick={() => {
                        if (item.projects[0]) {
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

                  {/* Large project on right */}
                  <div className='w-full col-span-8 h-full'>
                    <div
                      className='w-full h-full'
                      onClick={() => {
                        if (item.projects[2]) {
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
      </div>
    </div>
  );
};

export default ProjectFilter;
