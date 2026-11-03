import { buildProjectMetadata } from '@/helpers/seo';

export async function generateMetadata({ params }) {
  const { slug } = await params;

  return buildProjectMetadata({
    id: slug,
    path: `/branding/${slug}`,
    fallbackTitle: 'Branding | Akseizer Design Group',
    fallbackDescription:
      'Explore branding and marketing projects by Akseizer Design Group.',
  });
}

export default function BrandingProjectLayout({ children }) {
  return children;
}
