export interface Question {
  id: string;
  subject: 'Assam GK' | 'Assam History' | 'Assam Geography' | 'Mathematics' | 'Reasoning' | 'English' | 'General Science';
  topic: string;
  question: string;
  options: string[];
  correctAnswer: number; // 0-indexed
  explanation: string;
  pyqYear?: number;
}

export interface MockExam {
  id: string;
  slug: string;
  title: string;
  category: 'Grade 3' | 'Grade 4' | 'Subject Mock';
  timeLimitMinutes: number;
  totalMarks: number;
  questions: Question[];
}

export const SAMPLE_QUESTIONS: Question[] = [
  {
    id: 'q1',
    subject: 'Assam History',
    topic: 'Ahom Kingdom',
    question: 'Who was the first king of the Ahom Kingdom in Assam, establishing Charaideo as its first capital in 1253 AD?',
    options: ['Sukapha (Chaolung Sukaphaa)', 'Sutingpha', 'Rudrasingha', 'Bamon Konwar'],
    correctAnswer: 0,
    explanation: 'Chaolung Sukaphaa founded the Ahom kingdom in 1228 AD and established Charaideo as the capital in 1253 AD.',
    pyqYear: 2022,
  },
  {
    id: 'q2',
    subject: 'Assam Geography',
    topic: 'National Parks',
    question: 'Which National Park in Assam is world-famous for the highest density of One-Horned Rhinoceroses?',
    options: ['Manas National Park', 'Pobitora Wildlife Sanctuary', 'Kaziranga National Park', 'Orang National Park'],
    correctAnswer: 2,
    explanation: 'Kaziranga National Park is a UNESCO World Heritage site hosting two-thirds of the world’s Great One-horned Rhinoceros population.',
    pyqYear: 2024,
  },
  {
    id: 'q3',
    subject: 'Assam GK',
    topic: 'State Emblems & Culture',
    question: 'What is the official state anthem of Assam, composed by Lakshminath Bezbaroa?',
    options: ['Axom Hamar', 'O Mur Apunar Desh', 'Joi Aai Axom', 'Brahmaputra Ki Dhar'],
    correctAnswer: 1,
    explanation: 'O Mur Apunar Desh was written by Sahityarathi Lakshminath Bezbaroa and tunes set by Kamala Prasad Agarwala.',
    pyqYear: 2022,
  },
  {
    id: 'q4',
    subject: 'Reasoning',
    topic: 'Number Series',
    question: 'Complete the series: 4, 9, 19, 39, 79, ?',
    options: ['119', '139', '159', '169'],
    correctAnswer: 2,
    explanation: 'The pattern is (x * 2) + 1. So 79 * 2 + 1 = 159.',
    pyqYear: 2024,
  },
  {
    id: 'q5',
    subject: 'Mathematics',
    topic: 'Percentage & Profit',
    question: 'If an article is sold at Rs. 450 with a loss of 10%, at what price should it be sold to gain 20%?',
    options: ['Rs. 500', 'Rs. 550', 'Rs. 600', 'Rs. 650'],
    correctAnswer: 2,
    explanation: 'CP = 450 / 0.9 = 500. SP for 20% gain = 500 * 1.2 = 600.',
    pyqYear: 2024,
  },
];

export const SAMPLE_MOCKS: MockExam[] = [
  {
    id: 'mock-g3-full',
    slug: 'grade-3',
    title: 'ADRE Grade 3 Full Length Benchmark Mock 2026',
    category: 'Grade 3',
    timeLimitMinutes: 120,
    totalMarks: 150,
    questions: SAMPLE_QUESTIONS,
  },
  {
    id: 'mock-g4-full',
    slug: 'grade-4',
    title: 'ADRE Grade 4 Practice Series Mock #1',
    category: 'Grade 4',
    timeLimitMinutes: 90,
    totalMarks: 100,
    questions: SAMPLE_QUESTIONS,
  },
];
