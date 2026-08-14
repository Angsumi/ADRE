import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://axomrank.com';

  const routes = [
    '',
    '/adre/',
    '/adre/syllabus/',
    '/adre/previous-year-question-paper/',
    '/adre/mock-test/',
    '/tools/score-calculator/',
    '/tools/eligibility-checker/',
    '/tools/study-planner/',
    '/assam-gk/',
    '/assam-gk/history/',
    '/current-affairs/',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route.includes('current-affairs') ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route.includes('adre') ? 0.9 : 0.8,
  }));
}
