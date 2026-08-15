import { MetadataRoute } from 'next';
import { getAllTopics, getAllSubjects } from '@/lib/topicData';
import { SYLLABUS_SUBJECTS } from '@/lib/syllabusData';
import { getAllArticles } from '@/lib/articlesData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://axomrank.com';

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
    '/adre-eligibility/',
    '/adre-comparisons/',
    '/assam-culture/',
    '/assam-administration/',
    '/tools/score-calculator/',
    '/tools/eligibility-checker/',
    '/tools/study-planner/',
    '/assam-gk/',
    '/assam-gk/history/',
    '/current-affairs/',
  ];

  const syllabusRoutes = SYLLABUS_SUBJECTS.map((s) => `/adre/syllabus/${s.slug}/`);
  const articleRoutes = getAllArticles().map((a) => a.route);

  const topics = getAllTopics();
  const topicRoutes = topics.map((t) => `/adre/topics/${t.slug}/`);

  const subjects = getAllSubjects();
  const subjectRoutes = subjects.map((s) => `/adre/subjects/${s.slug}/`);

  const allRoutes = Array.from(
    new Set([...staticRoutes, ...syllabusRoutes, ...articleRoutes, ...subjectRoutes, ...topicRoutes])
  );

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route.includes('topics') ? 'weekly' : 'daily',
    priority: route === '' ? 1.0 : route.includes('topics') ? 0.8 : 0.9,
  }));
}
