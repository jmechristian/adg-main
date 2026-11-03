import { buildMetadata } from '@/helpers/seo';

export const metadata = buildMetadata({
  title: 'Projects | Akseizer Design Group',
  description:
    'Browse architecture, interiors, and branding projects by Akseizer Design Group.',
  path: '/projects',
});

export default function ProjectsLayout({ children }) {
  return children;
}
