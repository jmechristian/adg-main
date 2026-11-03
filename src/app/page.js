import HomeWrapper from '@/components/HomeWrapper';
import { getHomePage } from '@/helpers/api';
import { buildMetadata, DEFAULT_DESCRIPTION } from '@/helpers/seo';

export const revalidate = 0;
export const metadata = buildMetadata({
  title: 'Akseizer Design Group',
  description: DEFAULT_DESCRIPTION,
  path: '/',
});
export default async function Home() {
  const data = await getHomePage();
  return (
    <div className='w-full'>
      <HomeWrapper homePage={data} />
    </div>
  );
}
