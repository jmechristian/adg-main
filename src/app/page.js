import Image from 'next/image';
import Hero from '@/components/Hero';
import HomeText from '@/components/HomeText';
import HomeDepartments from '@/components/HomeDepartments';
import HomeFeatured from '@/components/HomeFeatured';
import HomeVisit from '@/components/HomeVisit';
export default function Home() {
  return (
    <div className='w-full max-w-[1920px] mx-auto relative flex flex-col gap-12'>
      <Hero />
      <HomeText />
      <div className='grid md:grid-cols-3 gap-12 mt-6'>
        <HomeDepartments
          department='Interior Design'
          content='Designing your dreams'
          callout='into reality'
          link='/interior-design'
          image='https://adgadmin170407-dev.s3.us-east-1.amazonaws.com/home_department1.png'
        />
        <HomeDepartments
          department='ARCHITECTURE'
          content='Elevating your vision to'
          callout='new heights'
          link='/architecture'
          image='https://adgadmin170407-dev.s3.us-east-1.amazonaws.com/home_department2.png'
        />
        <HomeDepartments
          department='branding & marketing'
          content='Crafting brands that sell '
          callout='your story'
          link='/branding'
          image='https://adgadmin170407-dev.s3.us-east-1.amazonaws.com/home_department3.png'
        />
      </div>
      <HomeFeatured />
      <div className='grid md:grid-cols-3 gap-12 mt-6'>
        <HomeDepartments
          department=''
          content=''
          callout='Millwork & Cabinetry'
          link='/interior-design'
          image='https://adgadmin170407-dev.s3.us-east-1.amazonaws.com/subfeature-1.png'
        />
        <HomeDepartments
          department=''
          content=''
          callout='Construction Services'
          link='/architecture'
          image='https://adgadmin170407-dev.s3.us-east-1.amazonaws.com/subfeature-2.png'
        />
        <HomeDepartments
          department=''
          content=''
          callout='Residential Design'
          link='/branding'
          image='https://adgadmin170407-dev.s3.us-east-1.amazonaws.com/subfeature-3.png'
        />
      </div>
      <HomeVisit />
    </div>
  );
}
