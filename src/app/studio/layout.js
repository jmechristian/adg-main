import { buildMetadata } from '@/helpers/seo';

export const metadata = buildMetadata({
  title: 'Studio | Akseizer Design Group',
  description:
    'Learn about Akseizer Design Group, a visionary studio of interior designers, architects, brand strategists, and builders.',
  path: '/studio',
});

export default function StudioLayout({ children }) {
  return children;
}
