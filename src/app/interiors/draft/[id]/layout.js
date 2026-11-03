import { buildProjectMetadata } from '@/helpers/seo';

export async function generateMetadata({ params }) {
  const { id } = await params;

  return buildProjectMetadata({
    id,
    path: `/interiors/draft/${id}`,
    fallbackTitle: 'Interiors Draft | Akseizer Design Group',
    fallbackDescription:
      'Explore interior design projects by Akseizer Design Group.',
    index: false,
  });
}

export default function InteriorsDraftLayout({ children }) {
  return children;
}
