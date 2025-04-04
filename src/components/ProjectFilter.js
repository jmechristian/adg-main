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
      <div className='w-full flex flex-col gap-10'>
        <div className='w-full grid md:grid-cols-2 lg:grid-cols-12 gap-6'>
          <div className='w-full col-span-8 h-full'>
            <div
              className='w-full h-full'
              onClick={() => {
                router.push(`/interiors/draft/${filteredProjects[0].id}`);
              }}
            >
              <FilterItem project={filteredProjects[0]} />
            </div>
          </div>
          <div className='w-full col-span-4 flex flex-col gap-6'>
            <div
              className='w-full aspect-video'
              onClick={() => {
                router.push(`/interiors/draft/${filteredProjects[1].id}`);
              }}
            >
              <FilterItem project={filteredProjects[1]} />
            </div>
            <div
              className='w-full aspect-video'
              onClick={() => {
                router.push(`/interiors/draft/${filteredProjects[2].id}`);
              }}
            >
              <FilterItem project={filteredProjects[2]} />
            </div>
          </div>
          <div className='w-full col-span-12'>
            <div
              className='w-full h-full aspect-[6/3]'
              onClick={() => {
                router.push(`/interiors/draft/${filteredProjects[3].id}`);
              }}
            >
              <FilterItem project={filteredProjects[3]} />
            </div>
          </div>
          <div className='w-full col-span-4 flex flex-col gap-6'>
            <div
              className='w-full aspect-video'
              onClick={() => {
                router.push(`/interiors/draft/${filteredProjects[4].id}`);
              }}
            >
              <FilterItem project={filteredProjects[4]} />
            </div>
            <div
              className='w-full aspect-video'
              onClick={() => {
                router.push(`/interiors/draft/${filteredProjects[5].id}`);
              }}
            >
              <FilterItem project={filteredProjects[5]} />
            </div>
          </div>
          <div className='w-full col-span-8 h-full'>
            <div
              className='w-full  h-full'
              onClick={() => {
                router.push(`/interiors/draft/${filteredProjects[6].id}`);
              }}
            >
              <FilterItem project={filteredProjects[6]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectFilter;
