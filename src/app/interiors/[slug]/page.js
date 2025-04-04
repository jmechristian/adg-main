'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

const Page = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     const fetchProject = async () => {
  //       const project = await getProjectBySlug(slug);
  //       setProject(project);
  //       setLoading(false);
  //     };
  //     fetchProject();
  //   }, [slug]);

  return <div> {project.name} </div>;
};

export default Page;
