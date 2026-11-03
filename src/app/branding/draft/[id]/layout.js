import { buildProjectMetadata } from '@/helpers/seo';

export async function generateMetadata({ params }) {
  const { id } = await params;

  return buildProjectMetadata({
    id,
    path: `/branding/draft/${id}`,
    fallbackTitle: 'Branding Draft | Akseizer Design Group',
    fallbackDescription:
      'Explore branding and marketing projects by Akseizer Design Group.',
    index: false,
  });
}

export default function BrandingDraftLayout({ children }) {
  return children;
}
