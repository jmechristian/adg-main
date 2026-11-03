import {
  getFullImageUrl,
  getProjectById,
  getSubcategoryName,
} from '@/helpers/api';

export const SITE_NAME = 'Akseizer Design Group';
export const SITE_URL = 'https://www.designadg.com';
export const DEFAULT_SEO_IMAGE =
  'https://adgadmin170407-dev.s3.us-east-1.amazonaws.com/designadg-seo-sm.png';
export const DEFAULT_DESCRIPTION =
  'Akseizer Design Group is a dynamic team of interior designers, architects, brand strategists, and builders.';

export function toMetaDescription(value, fallback = DEFAULT_DESCRIPTION) {
  if (!value || typeof value !== 'string') return fallback;

  const text = value
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/\s+/g, ' ')
    .trim();

  if (!text) return fallback;
  if (text.length <= 160) return text;
  return `${text.slice(0, 157).trimEnd()}...`;
}

export function buildMetadata({
  title = SITE_NAME,
  description = DEFAULT_DESCRIPTION,
  path = '/',
  index = true,
  image,
  imageAlt,
}) {
  const url = new URL(path, SITE_URL).toString();
  const imageUrl = image || DEFAULT_SEO_IMAGE;
  const alt = imageAlt || SITE_NAME;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: {
      canonical: url,
    },
    robots: index
      ? { index: true, follow: true }
      : { index: false, follow: false },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'en_US',
      type: 'website',
      images: [{ url: imageUrl, alt }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  };
}

function getProjectHeroImage(project) {
  const items = project?.gallery?.images?.items || [];
  const hero = items
    .filter((item) => item?.url && item.type !== 'video')
    .sort((a, b) => (a.order || 0) - (b.order || 0))[0];

  if (!hero?.url) return null;

  return {
    url: getFullImageUrl(hero.url),
    alt: hero.alt || project.name || SITE_NAME,
  };
}

export async function buildProjectMetadata({
  id,
  path,
  fallbackTitle,
  fallbackDescription,
  index = true,
}) {
  try {
    const project = await getProjectById(id);
    if (!project?.name) {
      return buildMetadata({
        title: fallbackTitle,
        description: fallbackDescription,
        path,
        index,
      });
    }

    const location = project.locationString?.trim();
    const fallback = `${project.name}${
      location ? ` in ${location}` : ''
    } by Akseizer Design Group.`;
    const hero = getProjectHeroImage(project);

    return buildMetadata({
      title: `${project.name} | ${SITE_NAME}`,
      description: toMetaDescription(project.description, fallback),
      path,
      index,
      image: hero?.url,
      imageAlt: hero?.alt,
    });
  } catch (error) {
    console.error('Failed to build project metadata', error);
    return buildMetadata({
      title: fallbackTitle,
      description: fallbackDescription,
      path,
      index,
    });
  }
}

export async function buildCategoryMetadata(id) {
  const path = `/projects/category/${id}`;

  try {
    const name = await getSubcategoryName(id);
    if (!name) {
      return buildMetadata({
        title: `Projects | ${SITE_NAME}`,
        description: 'Browse projects by Akseizer Design Group.',
        path,
      });
    }

    return buildMetadata({
      title: `${name} | ${SITE_NAME}`,
      description: `Browse ${name} projects by Akseizer Design Group.`,
      path,
    });
  } catch (error) {
    console.error('Failed to build category metadata', error);
    return buildMetadata({
      title: `Projects | ${SITE_NAME}`,
      description: 'Browse projects by Akseizer Design Group.',
      path,
    });
  }
}
