import fs from 'fs';
import path from 'path';
import { renderMarkdownToHtml } from './markdown';

export interface ArticleEntity {
  id: string;
  slug: string;
  category: string;
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

const ARTICLES_DIR = path.join(process.cwd(), 'Article');

let cachedArticles: ArticleEntity[] | null = null;

export function getAllArticles(): ArticleEntity[] {
  if (cachedArticles) return cachedArticles;

  const articles: ArticleEntity[] = [];

  if (!fs.existsSync(ARTICLES_DIR)) {
    return [];
  }

  function walk(dir: string) {
    const files = fs.readdirSync(dir);
    for (const f of files) {
      const fullPath = path.join(dir, f);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        walk(fullPath);
      } else if (f.endsWith('.md')) {
        const text = fs.readFileSync(fullPath, 'utf-8');
        const entity = parseArticleFile(fullPath, text);
        if (entity) {
          articles.push(entity);
        }
      }
    }
  }

  walk(ARTICLES_DIR);
  cachedArticles = articles;
  return articles;
}

function parseArticleFile(filePath: string, text: string): ArticleEntity | null {
  const filename = path.basename(filePath, '.md');
  const folder = path.basename(path.dirname(filePath));

  // Extract H1 header
  const h1Match = text.match(/^#\s+(.+)$/m);
  const h1 = h1Match ? h1Match[1].trim() : filename;

  // Extract metadata header fields
  const metaTitleMatch = text.match(/\*\*Meta title[^\*:]*:\*\*\s*([^\n\*]+)/i);
  const metaTitle = metaTitleMatch ? metaTitleMatch[1].trim() : h1;

  const metaDescMatch = text.match(/\*\*Meta description[^\*:]*:\*\*\s*([^\n\*]+)/i);
  const metaDescription = metaDescMatch ? metaDescMatch[1].trim() : `${h1} — Complete guide for ADRE exam.`;

  const primaryKwMatch = text.match(/\*\*Primary keyword:\*\*\s*([^\n\*]+)/i);
  const primaryKeyword = primaryKwMatch ? primaryKwMatch[1].trim() : h1;

  const readingTimeMatch = text.match(/\*\*Reading time:\*\*\s*([^\n\*\|]+)/i);
  const readingTime = readingTimeMatch ? readingTimeMatch[1].trim() : '8 minutes';

  const updatedMatch = text.match(/\*\*Updated:\*\*\s*([^\n\*\|]+)/i);
  const updatedDate = updatedMatch ? updatedMatch[1].trim() : 'August 2026';

  const authorMatch = text.match(/\*\*Author:\*\*\s*([^\n\*\|]+)/i);
  const author = authorMatch ? authorMatch[1].trim() : 'AxomRank Editorial Team';

  // Extract target URL from markdown or derive from filename/folder
  const urlMatch = text.match(/\*\*URL:\*\*\s*`?https?:\/\/[^\/]+(\/[^`\s]+)`?/i);
  let route = '';

  if (urlMatch && urlMatch[1]) {
    route = urlMatch[1].trim();
  }

  // Normalize route
  route = route.replace(/\/+/g, '/');
  if (route.startsWith('/ADRE')) {
    route = route.slice(5);
  }
  if (!route.startsWith('/')) {
    route = '/' + route;
  }
  if (!route.endsWith('/')) {
    route = route + '/';
  }

  // If no URL meta tag was found in file, construct standard route based on folder
  if (!route || route === '/') {
    if (folder === 'adre-articles') {
      route = `/adre/${filename.replace(/^\d+-/, '')}/`;
    } else if (folder === 'adre-comparison-articles') {
      route = `/adre-comparisons/${filename.replace(/^[A-Z]\d+-/, '')}/`;
    } else if (folder === 'adre-eligibility-articles') {
      route = `/adre-eligibility/${filename.replace(/^[A-Z]\d+-/, '')}/`;
    } else if (folder === 'assam-gk-articles') {
      if (filename.startsWith('C')) {
        route = `/assam-culture/${filename.replace(/^[A-Z]\d+-/, '')}/`;
      } else if (filename.startsWith('A')) {
        route = `/assam-administration/${filename.replace(/^[A-Z]\d+-/, '')}/`;
      } else {
        route = `/assam-gk/${filename.replace(/^[A-Z]\d+-/, '')}/`;
      }
    }
  }

  // Derive slug from route
  const parts = route.split('/').filter(Boolean);
  const slug = parts[parts.length - 1] || filename;
  const category = parts[0] || folder;

  const contentHtml = renderMarkdownToHtml(text);

  return {
    id: `${folder}-${filename}`,
    slug,
    category,
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

export function getArticleByRoute(routePath: string): ArticleEntity | undefined {
  let target = routePath.replace(/\/+/g, '/');
  if (target.startsWith('/ADRE')) target = target.slice(5);
  if (!target.startsWith('/')) target = '/' + target;
  if (!target.endsWith('/')) target = target + '/';

  return getAllArticles().find((a) => a.route === target || a.route.toLowerCase() === target.toLowerCase());
}

export function getArticlesByCategory(category: string): ArticleEntity[] {
  const cat = category.toLowerCase().replace(/^\//, '').replace(/\/$/, '');
  return getAllArticles().filter((a) => a.category.toLowerCase() === cat);
}
