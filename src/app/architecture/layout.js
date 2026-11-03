import { buildMetadata } from '@/helpers/seo';

export const metadata = buildMetadata({
  title: 'Architecture | Akseizer Design Group',
  description:
    'Explore architecture projects by Akseizer Design Group, a studio of interior designers, architects, brand strategists, and builders.',
  path: '/architecture',
});

export default function ArchitectureLayout({ children }) {
  return children;
}
