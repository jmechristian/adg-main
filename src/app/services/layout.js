import { buildMetadata } from '@/helpers/seo';

export const metadata = buildMetadata({
  title: 'Services | Akseizer Design Group',
  description:
    'Interior design, architecture, branding, millwork, and construction services from Akseizer Design Group.',
  path: '/services',
});

export default function ServicesLayout({ children }) {
  return children;
}
