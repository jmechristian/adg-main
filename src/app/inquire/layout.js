import { buildMetadata } from '@/helpers/seo';

export const metadata = buildMetadata({
  title: 'Inquire | Akseizer Design Group',
  description:
    'Start a project with Akseizer Design Group. Share your interior design, architecture, branding, or construction needs.',
  path: '/inquire',
});

export default function InquireLayout({ children }) {
  return children;
}
