'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { getDepartments, getSubcategoriesByDepartment } from '@/helpers/api';
const ProjectFilter = ({ projects }) => {
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
    <div className='w-full max-w-6xl mx-auto flex flex-col gap-16 pb-24'>
      <div className='w-full flex items-center justify-between'>
        {departments &&
          departments
            .sort((a, b) => a.displayOrder - b.displayOrder)
            .map((department) => (
              <div
                className={`cursor-pointer ${
                  departmentFilters.id === department.id
                    ? 'text-brand-brown'
                    : 'text-brand-gray'
                }`}
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
      <div className='w-full flex items-center justify-between'>
        {subcategories &&
          subcategories
            .sort((a, b) => a.displayOrder - b.displayOrder)
            .map((subcategory) => (
              <div
                key={subcategory.id}
                className={`cursor-pointer ${
                  subcategoryFilters?.id === subcategory.subcategory.id
                    ? 'text-brand-brown'
                    : 'text-brand-gray'
                }`}
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
      <div>Projects {filteredProjects.length}</div>
    </div>
  );
};

export default ProjectFilter;
