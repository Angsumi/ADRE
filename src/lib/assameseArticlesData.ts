import fs from 'fs';
import path from 'path';
import { renderMarkdownToHtml } from './markdown';

export interface AssameseArticleEntity {
  id: string;
  slug: string;
  filename: string;
  categoryCode: 'A' | 'C' | 'G' | 'H';
  categoryNameEn: string;
  categoryNameAs: string;
  route: string;
  filePath: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  readingTime: string;
  updatedDate: string;
  author: string;
  rawContent: string;
  contentHtml: string;
}

const ASSAMESE_ARTICLES_DIR = path.join(process.cwd(), 'New', 'Assamese Article');

let cachedAssameseArticles: AssameseArticleEntity[] | null = null;

const CATEGORY_MAP: Record<string, { en: string; as: string }> = {
  A: { en: 'Administration', as: 'প্ৰশাসন' },
  C: { en: 'Culture & Heritage', as: 'সংস্কৃতি আৰু ঐতিহ্য' },
  G: { en: 'Geography & Nature', as: 'ভূগোল আৰু প্ৰকৃতি' },
  H: { en: 'History', as: 'ইতিহাস' },
};

export function getAllAssameseArticles(): AssameseArticleEntity[] {
  if (cachedAssameseArticles) return cachedAssameseArticles;

  const articles: AssameseArticleEntity[] = [];

  if (!fs.existsSync(ASSAMESE_ARTICLES_DIR)) {
    return [];
  }

  const files = fs.readdirSync(ASSAMESE_ARTICLES_DIR);
  for (const f of files) {
    if (f.endsWith('.as.md') || f.endsWith('.md')) {
      const fullPath = path.join(ASSAMESE_ARTICLES_DIR, f);
      const text = fs.readFileSync(fullPath, 'utf-8');
      const entity = parseAssameseArticle(f, fullPath, text);
      if (entity) {
        articles.push(entity);
      }
    }
  }

  // Sort logically by category code and filename
  articles.sort((a, b) => a.filename.localeCompare(b.filename));

  cachedAssameseArticles = articles;
  return articles;
}

function parseAssameseArticle(
  fileBasename: string,
  filePath: string,
  text: string
): AssameseArticleEntity | null {
  const filenameNoExt = fileBasename.replace(/\.as\.md$/, '').replace(/\.md$/, '');
  const prefix = filenameNoExt.charAt(0).toUpperCase() as 'A' | 'C' | 'G' | 'H';
  const categoryInfo = CATEGORY_MAP[prefix] || { en: 'General', as: 'সাধাৰণ' };

  // Derive clean slug without prefix: e.g. "A01-district-administration" -> "district-administration"
  let slug = filenameNoExt.replace(/^[A-Z]\d+-/i, '');
  if (!slug) slug = filenameNoExt.toLowerCase();

  // Extract H1 header and strip any prefix if present
  const h1Match = text.match(/^#\s+(.+)$/m);
  let h1 = h1Match ? h1Match[1].trim() : slug;
  h1 = h1.replace(/^[A-Z]\d+[-:\s]+/i, '');

  // Extract metadata fields
  const metaTitleMatch = text.match(/\*\*Meta title[^\*:]*:\*\*\s*([^\n\*]+)/i);
  let metaTitle = metaTitleMatch ? metaTitleMatch[1].trim() : h1;
  metaTitle = metaTitle.replace(/^[A-Z]\d+[-:\s]+/i, '');

  const metaDescMatch = text.match(/\*\*Meta description[^\*:]*:\*\*\s*([^\n\*]+)/i);
  const metaDescription = metaDescMatch
    ? metaDescMatch[1].trim()
    : `${h1} — ADRE পৰীক্ষাৰ বাবে প্ৰস্তুতি গাইড।`;

  const primaryKwMatch = text.match(/\*\*Primary keyword:\*\*\s*([^\n\*]+)/i);
  const primaryKeyword = primaryKwMatch ? primaryKwMatch[1].trim() : h1;

  const readingTimeMatch = text.match(/\*\*পঢ়াৰ সময়:\*\*\s*([^\n\*\|]+)/i) || text.match(/\*\*Reading time:\*\*\s*([^\n\*\|]+)/i);
  const readingTime = readingTimeMatch ? readingTimeMatch[1].trim() : '১০ মিনিট';

  const updatedMatch = text.match(/\*\*আপডেট:\*\*\s*([^\n\*\|]+)/i) || text.match(/\*\*Updated:\*\*\s*([^\n\*\|]+)/i);
  const updatedDate = updatedMatch ? updatedMatch[1].trim() : 'আগষ্ট ২০২৬';

  const authorMatch = text.match(/\*\*লেখক:\*\*\s*([^\n\*\|]+)/i) || text.match(/\*\*Author:\*\*\s*([^\n\*\|]+)/i);
  const author = authorMatch ? authorMatch[1].trim() : 'AxomRank Editorial Team';

  // Clean Route under /Assamese/[slug]/
  const route = `/Assamese/${slug}/`;

  const contentHtml = renderMarkdownToHtml(text);

  return {
    id: slug,
    slug,
    filename: filenameNoExt,
    categoryCode: prefix,
    categoryNameEn: categoryInfo.en,
    categoryNameAs: categoryInfo.as,
    route,
    filePath,
    h1,
    metaTitle,
    metaDescription,
    primaryKeyword,
    readingTime,
    updatedDate,
    author,
    rawContent: text,
    contentHtml,
  };
}

export function getAssameseArticleBySlug(slugParam: string): AssameseArticleEntity | undefined {
  const norm = slugParam.toLowerCase().replace(/^\//, '').replace(/\/$/, '');
  const articles = getAllAssameseArticles();
  return (
    articles.find((a) => a.slug.toLowerCase() === norm) ||
    articles.find((a) => a.filename.toLowerCase() === norm)
  );
}

export function getAssameseArticlesByCategory(categoryCode: string): AssameseArticleEntity[] {
  return getAllAssameseArticles().filter(
    (a) => a.categoryCode.toLowerCase() === categoryCode.toLowerCase()
  );
}
