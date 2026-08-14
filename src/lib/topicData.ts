import ALL_PYQ from '../data/parsedPYQ2024.json';
import PYQ2022 from '../data/parsedPYQ2022.json';
import MOCKS from '../data/parsedMocks.json';
import { Question } from '../data/mockData';

export interface TopicEntity {
  slug: string;
  title: string;
  subjectSlug: string;
  subjectName: string;
  description: string;
  questions: Question[];
  pyqCount: number;
}

export interface SubjectEntity {
  slug: string;
  title: string;
  icon: string;
  description: string;
  weightagePercent: number;
  topics: string[];
  totalQuestions: number;
}

// Combine all raw data items
const COMBINED_QUESTIONS: Question[] = [
  ...(ALL_PYQ as Question[]),
  ...(PYQ2022 as Question[]),
];

// Helper to slugify string
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Subject mappings & metadata
export const SUBJECT_MAP: Record<string, { title: string; icon: string; weightage: number; description: string }> = {
  'assam-gk': {
    title: 'Assam General Knowledge & History',
    icon: '🗡️',
    weightage: 35,
    description: 'Comprehensive coverage of Kamarupa, Ahom Dynasty, Geography, Rivers, Culture, and State Administration.',
  },
  'english': {
    title: 'General English',
    icon: '📚',
    weightage: 20,
    description: 'Grammar, Synonyms, Antonyms, Idioms, Prepositions, and Reading Comprehension for ADRE.',
  },
  'mathematics': {
    title: 'Elementary Mathematics',
    icon: '📐',
    weightage: 20,
    description: 'Quantitative aptitude covering Percentages, Ratios, Speed-Distance, Time-Work, and Algebra.',
  },
  'general-science': {
    title: 'General Science',
    icon: '🔬',
    weightage: 15,
    description: 'Class 8-10 level Physics, Chemistry, Biology, and Scientific Concepts commonly asked in SLRC exams.',
  },
  'reasoning': {
    title: 'Logical Reasoning & Mental Ability',
    icon: '🧩',
    weightage: 10,
    description: 'Coding-Decoding, Series, Blood Relations, Analogies, and Visual Pattern Recognition.',
  },
};

// Map raw subject names to standard subject slug
export function getSubjectSlug(rawSubject: string): string {
  const s = rawSubject.toLowerCase();
  if (s.includes('assam') || s.includes('social studies')) return 'assam-gk';
  if (s.includes('math')) return 'mathematics';
  if (s.includes('science')) return 'general-science';
  if (s.includes('reason')) return 'reasoning';
  return 'english';
}

// Helper to intelligently re-categorize "General" or vague topic names based on question content
function categorizeQuestionTopic(q: Question): string {
  const rawTopic = (q.topic || '').trim();
  if (rawTopic && rawTopic.toLowerCase() !== 'general' && rawTopic.toLowerCase() !== 'general knowledge') {
    return rawTopic;
  }

  const text = (q.question + ' ' + (q.explanation || '')).toLowerCase();
  
  if (text.includes('ahom') || text.includes('kamarupa') || text.includes('lachit') || text.includes('sukaphaa') || text.includes('buranjis') || text.includes('bhaskaravarman')) return 'History of Assam';
  if (text.includes('river') || text.includes('brahmaputra') || text.includes('national park') || text.includes('kaziranga') || text.includes('manas') || text.includes('district')) return 'Geography of Assam';
  if (text.includes('constitution') || text.includes('article') || text.includes('amendment') || text.includes('parliament') || text.includes('panchayat') || text.includes('governor') || text.includes('president')) return 'Indian Polity & Governance';
  if (text.includes('dynasty') || text.includes('mughal') || text.includes('british') || text.includes('battle') || text.includes('treaty') || text.includes('freedom')) return 'Indian & World History';
  if (text.includes('mean') || text.includes('median') || text.includes('remainder') || text.includes('equation') || text.includes('triangle') || text.includes('area') || text.includes('speed') || text.includes('ratio') || text.includes('percentage')) return 'General Mathematics';
  if (text.includes('reflection') || text.includes('pattern') || text.includes('grid') || text.includes("series") || text.includes("code") || text.includes("relation")) return 'Reasoning & Mental Ability';
  if (text.includes('antonym') || text.includes('synonym') || text.includes('spelling') || text.includes('grammar') || text.includes('preposition') || text.includes('sentence')) return 'English Grammar & Usage';
  if (text.includes('element') || text.includes('cell') || text.includes('organ') || text.includes('acid') || text.includes('force') || text.includes('energy') || text.includes('planet')) return 'General Science';

  return q.subject ? `${q.subject} Core Topics` : 'General Exam Knowledge';
}

// Group all questions into topic entities
export function getAllTopics(): TopicEntity[] {
  const topicMap: Record<string, { title: string; rawSubject: string; questions: Question[] }> = {};

  COMBINED_QUESTIONS.forEach((q) => {
    const rawTopic = categorizeQuestionTopic(q);
    const slug = slugify(rawTopic);

    if (!topicMap[slug]) {
      topicMap[slug] = {
        title: rawTopic,
        rawSubject: q.subject,
        questions: [],
      };
    }
    topicMap[slug].questions.push(q);
  });

  return Object.entries(topicMap).map(([slug, data]) => {
    const subSlug = getSubjectSlug(data.rawSubject);
    const subInfo = SUBJECT_MAP[subSlug] || SUBJECT_MAP['assam-gk'];

    return {
      slug,
      title: data.title,
      subjectSlug: subSlug,
      subjectName: subInfo.title,
      description: `Practice official ADRE solved questions and previous year paper sets for ${data.title}. Includes step-by-step solutions and explanations.`,
      questions: data.questions,
      pyqCount: data.questions.filter((q) => q.pyqYear !== undefined).length,
    };
  });
}

// Get single topic by slug
export function getTopicBySlug(slug: string): TopicEntity | undefined {
  return getAllTopics().find((t) => t.slug === slug);
}

// Get all subjects
export function getAllSubjects(): SubjectEntity[] {
  const allTopics = getAllTopics();

  return Object.entries(SUBJECT_MAP).map(([subSlug, meta]) => {
    const matchingTopics = allTopics.filter((t) => t.subjectSlug === subSlug);
    const totalQCount = matchingTopics.reduce((acc, curr) => acc + curr.questions.length, 0);

    return {
      slug: subSlug,
      title: meta.title,
      icon: meta.icon,
      description: meta.description,
      weightagePercent: meta.weightage,
      topics: matchingTopics.map((t) => t.title),
      totalQuestions: totalQCount,
    };
  });
}

// Get featured question items (25+ top questions for individual indexable pages)
export function getFeaturedQuestions(): Question[] {
  return COMBINED_QUESTIONS.slice(0, 30);
}
