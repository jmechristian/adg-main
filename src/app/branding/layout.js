import { buildMetadata } from '@/helpers/seo';

export const metadata = buildMetadata({
  title: 'Branding | Akseizer Design Group',
  description:
    'Explore branding and marketing projects by Akseizer Design Group.',
  path: '/branding',
});

export default function BrandingLayout({ children }) {
  return children;
}
