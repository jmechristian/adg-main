import { buildMetadata } from '@/helpers/seo';

export const metadata = buildMetadata({
  title: 'Map | Akseizer Design Group',
  description: 'View Akseizer Design Group project locations on the map.',
  path: '/map',
});

export default function MapLayout({ children }) {
  return children;
}
