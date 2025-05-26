'use client';
import React, { useEffect, useState } from 'react';
import { MdKeyboardBackspace, MdArrowUpward } from 'react-icons/md';
import { useParams } from 'next/navigation';
import { getProjectById } from '@/helpers/api';
import { useRouter } from 'next/navigation';
import {
  HeadingHero,
  TwoColIntro,
  CascadingGallery,
  ModalGallery,
} from '@jmechristian/adg-component-library';
import '@jmechristian/adg-component-library/styles.css';
import useLayoutStore from '@/store/useLayoutStore';

// Skeleton component for loading state
const ProjectSkeleton = () => {
  return (
    <div className='flex flex-col gap-8 max-w-6xl mx-auto py-8 w-full'>
      <div className='flex flex-col gap-8'>
        {/* Hero section skeleton */}
        <div className='w-full'>
          <div className='h-[50vh] bg-gray-200 animate-pulse rounded-md'></div>
          <div className='mt-4'>
            <div className='h-8 w-3/4 bg-gray-200 animate-pulse rounded-md'></div>
            <div className='h-6 w-1/2 bg-gray-200 animate-pulse rounded-md mt-2'></div>
          </div>
        </div>

        {/* Two column intro skeleton */}
        <div className='px-5 lg:px-0'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div>
              <div className='h-4 w-full bg-gray-200 animate-pulse rounded-md mb-2'></div>
              <div className='h-4 w-full bg-gray-200 animate-pulse rounded-md mb-2'></div>
              <div className='h-4 w-3/4 bg-gray-200 animate-pulse rounded-md mb-2'></div>
              <div className='h-4 w-5/6 bg-gray-200 animate-pulse rounded-md'></div>
            </div>
            <div>
              <div className='h-4 w-full bg-gray-200 animate-pulse rounded-md mb-2'></div>
              <div className='h-4 w-full bg-gray-200 animate-pulse rounded-md mb-2'></div>
              <div className='h-4 w-3/4 bg-gray-200 animate-pulse rounded-md'></div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery skeleton */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className='h-64 bg-gray-200 animate-pulse rounded-md'
          ></div>
        ))}
      </div>
    </div>
  );
};

const Page = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const { setDarkNavTrue } = useLayoutStore();
  const [modalImage, setModalImage] = useState({ open: false, index: null });
  const router = useRouter();
  useEffect(() => {
    setDarkNavTrue();
  }, [setDarkNavTrue]);

  useEffect(() => {
    const fetchProject = async () => {
      const project = await getProjectById(slug);
      console.log(project);
      setProject(project);
      setLoading(false);
    };
    fetchProject();
  }, [slug]);

  const handleModalImage = (imageId) => {
    const image = project.gallery.images.items.find(
      (image) => image.id === imageId
    );

    // Find the index of the image in the gallery
    const imageIndex = project.gallery.images.items.findIndex(
      (image) => image.id === imageId
    );

    // Now you can use imageIndex which will be -1 if not found, or the actual index if found
    console.log(imageIndex);
    setModalImage({ open: true, index: imageIndex });
  };

  return (
    <div className='relative' id='top'>
      <div className='h-24 lg:h-36'></div>
      {loading ? (
        <ProjectSkeleton />
      ) : (
        project && (
          <div className='flex flex-col gap-8 max-w-6xl mx-auto py-8 w-full'>
            <div className='flex flex-col gap-8'>
              <HeadingHero
                title={project.name}
                location={project.locationString || ''}
                hero={{
                  id:
                    project.gallery.images.items.sort(
                      (a, b) => (a.order || 0) - (b.order || 0)
                    )[0]?.id ?? '9050e5e5-a95b-4020-87c5-03703c2b4400',
                  url:
                    project.gallery.images.items.sort(
                      (a, b) => (a.order || 0) - (b.order || 0)
                    )[0]?.url ?? 'https://placehold.co/1152x775',
                  alt:
                    project.gallery.images.items.sort(
                      (a, b) => (a.order || 0) - (b.order || 0)
                    )[0]?.alt ?? 'Hero Image',
                  caption:
                    project.gallery.images.items.sort(
                      (a, b) => (a.order || 0) - (b.order || 0)
                    )[0]?.caption ?? 'Hero Image',
                }}
                setModalImage={(imageId) => {
                  handleModalImage(imageId);
                }}
              />
              <div className='px-5 lg:px-0'>
                <TwoColIntro
                  id={project.id}
                  description={project.description || ''}
                  collaborators={project.collaborators || ''}
                  size={project.size || ''}
                  subcategory={
                    project.subcategories?.items.length > 0
                      ? project.subcategories?.items.map(
                          (s) => s.subcategory.name
                        )
                      : null
                  }
                  project_type={
                    project.project_type?.items.length > 0
                      ? project.project_type?.items.map(
                          (p) => p.projectType.name
                        )
                      : null
                  }
                  building_type={
                    project.building_type?.items.length > 0
                      ? project.building_type?.items.map(
                          (b) => b.buildingType.name
                        )
                      : null
                  }
                />
              </div>
            </div>
            <CascadingGallery
              images={
                project.gallery.images.items.length > 1
                  ? project.gallery.images.items
                      .sort((a, b) => (a.order || 0) - (b.order || 0))
                      .slice(1)
                  : []
              }
              quotes={
                project.quotes?.items
                  ? project.quotes.items.sort(
                      (a, b) => (a.displayOrder || 0) - (b.displayOrder || 0)
                    )
                  : []
              }
              setModalImage={(imageId) => {
                handleModalImage(imageId);
              }}
            />
          </div>
        )
      )}
      {project &&
        modalImage.open &&
        project.gallery &&
        project.gallery.images && (
          <ModalGallery
            images={project.gallery.images.items}
            closeModal={() => setModalImage({ open: false, index: null })}
            currentIndex={modalImage.index}
            projectName={project.name}
          />
        )}
      <div className='items-center justify-between flex max-w-6xl mx-auto py-8 w-full'>
        <div className='flex items-center gap-2'>
          <div
            className='cursor-pointer text-brand-brown'
            onClick={() => router.back()}
          >
            <MdKeyboardBackspace size={20} />
          </div>
          <div
            className='text-brand-brown font-serif font-light uppercase tracking-wider cursor-pointer'
            onClick={() => router.push('/branding')}
          >
            View All{' '}
            {project && project.subcategories?.items[0].subcategory.name}s
          </div>
        </div>
        <div
          className='flex items-center gap-2  cursor-pointer'
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className='text-brand-brown font-serif font-light uppercase tracking-wider'>
            Back to Top
          </div>
          <div className='text-brand-brown'>
            <MdArrowUpward size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
