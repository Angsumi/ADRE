import parsedMocks from './parsedMocks.json';
import parsedPYQ2024 from './parsedPYQ2024.json';
import parsedPYQ2022 from './parsedPYQ2022.json';

export interface Question {
  id: string;
  subject: string;
  topic: string;
  question: string;
  options: string[];
  correctAnswer: number; // 0-indexed
  explanation: string;
  pyqYear?: number;
  paper?: string;
}

export interface MockExam {
  id: string;
  slug: string;
  filename: string;
  title: string;
  grade: 'Grade 3' | 'Grade 4';
  difficulty: 'Easy' | 'Moderate' | 'Tough';
  timeLimitMinutes: number;
  totalMarks: number;
  questions: Question[];
}

export const SAMPLE_MOCKS: MockExam[] = parsedMocks as MockExam[];
export const PYQ_2024_DATA: Question[] = parsedPYQ2024 as Question[];
export const PYQ_2022_DATA: Question[] = parsedPYQ2022 as Question[];
export const ALL_PYQ_DATA: Question[] = [...PYQ_2024_DATA, ...PYQ_2022_DATA];
