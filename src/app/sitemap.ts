import { MetadataRoute } from 'next';
import { getAllTopics, getAllSubjects } from '@/lib/topicData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://Angsumi.github.io/ADRE';

  const staticRoutes = [
    '',
    '/adre/',
    '/adre/grade-3/',
    '/adre/grade-4/',
    '/adre/syllabus/',
    '/adre/previous-year-question-paper/',
    '/adre/mock-test/',
    '/adre/topics/',
    '/adre/subjects/',
    '/tools/score-calculator/',
    '/tools/eligibility-checker/',
    '/tools/study-planner/',
    '/assam-gk/',
    '/assam-gk/history/',
    '/current-affairs/',
  ];

  const topics = getAllTopics();
  const topicRoutes = topics.map((t) => `/adre/topics/${t.slug}/`);

  const subjects = getAllSubjects();
  const subjectRoutes = subjects.map((s) => `/adre/subjects/${s.slug}/`);

  const allRoutes = [...staticRoutes, ...subjectRoutes, ...topicRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route.includes('topics') ? 'weekly' : 'daily',
    priority: route === '' ? 1.0 : route.includes('topics') ? 0.8 : 0.9,
  }));
}
