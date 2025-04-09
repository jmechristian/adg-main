import Hero from '@/components/Hero';
import HomeText from '@/components/HomeText';
import HomeFeatured from '@/components/HomeFeatured';
import HomeVisit from '@/components/HomeVisit';
import VariableHomeDepartments from '@/components/VariableHomeDepartments';
import SecondVariableHomeDepartments from '@/components/SecondVariableHomeDepartments';
export const revalidate = 0;
export const metadata = {
  title: 'Akseizer Design Group',
  description: 'Akseizer Design Group',
};
export default function Home() {
  return (
    <div className='w-full max-w-[1920px] mx-auto relative flex flex-col gap-16'>
      <Hero />
      <HomeText />
      <VariableHomeDepartments />
      <HomeFeatured />
      <SecondVariableHomeDepartments />
      <HomeVisit />
    </div>
  );
}
