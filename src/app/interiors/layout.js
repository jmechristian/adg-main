import { buildMetadata } from '@/helpers/seo';

export const metadata = buildMetadata({
  title: 'Interiors | Akseizer Design Group',
  description: 'Explore interior design projects by Akseizer Design Group.',
  path: '/interiors',
});

export default function InteriorsLayout({ children }) {
  return children;
}
