import { buildProjectMetadata } from '@/helpers/seo';

export async function generateMetadata({ params }) {
  const { slug } = await params;

  return buildProjectMetadata({
    id: slug,
    path: `/interiors/${slug}`,
    fallbackTitle: 'Interiors | Akseizer Design Group',
    fallbackDescription:
      'Explore interior design projects by Akseizer Design Group.',
  });
}

export default function InteriorsProjectLayout({ children }) {
  return children;
}
