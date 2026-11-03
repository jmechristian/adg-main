import { buildProjectMetadata } from '@/helpers/seo';

export async function generateMetadata({ params }) {
  const { slug } = await params;

  return buildProjectMetadata({
    id: slug,
    path: `/architecture/${slug}`,
    fallbackTitle: 'Architecture | Akseizer Design Group',
    fallbackDescription:
      'Explore architecture projects by Akseizer Design Group, a studio of interior designers, architects, brand strategists, and builders.',
  });
}

export default function ArchitectureProjectLayout({ children }) {
  return children;
}
