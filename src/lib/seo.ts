import { Metadata } from 'next';

export const SITE_CONFIG = {
  name: 'AxomRank',
  domain: 'https://axomrank.com',
  tagline: 'Prepare smarter. Rank higher.',
  description: 'Assam-first competitive-examination intelligence & preparation platform for ADRE Grade 3 & Grade 4, APSC, and Assam Police exams.',
  disclaimer: 'Notice: AxomRank is an independent digital preparation platform and is not affiliated with, endorsed by, or an official representative of the Government of Assam, State Level Recruitment Commission (SLRC), or any state board.',
};

export function buildMetadata({
  title,
  description,
  path = '',
  image = '/og-image.jpg',
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}): Metadata {
  const url = `${SITE_CONFIG.domain}${path}`;

  return {
    title: `${title} | AxomRank`,
    description,
    alternates: {
      canonical: url,
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title: `${title} | AxomRank`,
      description,
      url,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: `${SITE_CONFIG.domain}${image}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | AxomRank`,
      description,
      images: [`${SITE_CONFIG.domain}${image}`],
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_CONFIG.domain}${item.url}`,
    })),
  };
}

export function generateQuizSchema({
  title,
  description,
  questions,
}: {
  title: string;
  description: string;
  questions: { question: string; options: string[]; answer: string }[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Quiz',
    name: title,
    description,
    hasPart: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      suggestedAnswer: q.options.map((opt) => ({
        '@type': 'Answer',
        text: opt,
        correctAnswer: opt === q.answer,
      })),
    })),
  };
}

export function generateWebAppSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name,
    description,
    url: `${SITE_CONFIG.domain}${url}`,
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
    },
  };
}
