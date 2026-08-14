# AxomRank — Technical SEO & Core Web Vitals Standard

## 1. Technical Baseline Requirements
- **Rendering**: Mobile-first responsive SSR/Static Generation with Next.js App Router for instant load speeds.
- **Canonical URLs**: Strictly clean, canonical URLs without standard dynamic tracking parameters.
- **XML Sitemap Architecture**:
  - Main Sitemap Index: `/sitemap.xml`
  - Sub-Sitemaps:
    - `/sitemap-pages.xml` (Core landing & tool pages)
    - `/sitemap-adre.xml` (ADRE syllabus, pattern, pyq pages)
    - `/sitemap-assam-gk.xml` (Assam GK guides & quizzes)
    - `/sitemap-tests.xml` (Mock tests & practice sets)
- **Robots.txt Configuration**: Disallow user dashboards, admin paths, dynamic search endpoints while granting full access to standard content routes and declaring sitemap indices.

## 2. Core Web Vitals Optimization Guidelines
- **LCP (Largest Contentful Paint)**: < 1.2s on 3G/4G networks. Use modern CSS gradients and WebP/AVIF vector SVGs instead of heavy hero bitmaps.
- **CLS (Cumulative Layout Shift)**: 0.00. Pre-allocate exact layout heights for quiz cards, timer containers, and dynamic score widgets.
- **INP (Interaction to Next Paint)**: < 50ms. Asynchronous state updates for quiz interactions and tool calculators.

## 3. Crawl Budget & Parameter Handling
- All internal filters (e.g. topic sorting or subject toggles on quiz engines) update via client-side state or hash fragments rather than generating duplicate indexable URLs.
