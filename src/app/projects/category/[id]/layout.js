import { buildCategoryMetadata } from '@/helpers/seo';

export async function generateMetadata({ params }) {
  const { id } = await params;
  return buildCategoryMetadata(id);
}

export default function ProjectCategoryLayout({ children }) {
  return children;
}
