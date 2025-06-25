import HomeWrapper from '@/components/HomeWrapper';
import { getHomePage } from '@/helpers/api';
export const revalidate = 0;
export const metadata = {
  title: 'Akseizer Design Group',
  description: 'Akseizer Design Group',
};
export default async function Home() {
  const data = await getHomePage();
  return (
    <div className='w-full'>
      <HomeWrapper homePage={data} />
    </div>
  );
}
