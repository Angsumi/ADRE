# AxomRank — Structured Data & Schema Strategy

## 1. Schema Types & Triggers

### A. Organization & WebSite Schema
Applied on homepage & root layout:
```json
{
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "AxomRank",
  "url": "https://axomrank.com",
  "logo": "https://axomrank.com/logo.png",
  "description": "Assam-first competitive-examination intelligence and preparation platform for ADRE, APSC, and Assam Police exams.",
  "sameAs": [
    "https://facebook.com/axomrank",
    "https://telegram.me/axomrank"
  ]
}
```

### B. Course & LearningResource Schema
Applied on ADRE Hub (`/adre/`, `/adre/grade-3/`, `/adre/grade-4/`):
```json
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "ADRE Grade 3 & Grade 4 Preparation Program",
  "description": "Comprehensive preparation program with previous year papers, full-length mock tests, and Assam GK practice.",
  "provider": {
    "@type": "Organization",
    "name": "AxomRank"
  }
}
```

### C. Quiz & Question Schema
Applied on interactive test pages (`/adre/mock-test/`, `/adre/mcq/`, `/adre/previous-year-question-paper/2024/`):
```json
{
  "@context": "https://schema.org",
  "@type": "Quiz",
  "name": "ADRE Assam History Practice Quiz",
  "about": {
    "@type": "Thing",
    "name": "Assam History"
  },
  "hasPart": [
    {
      "@type": "Question",
      "name": "Who was the first king of the Ahom Kingdom in Assam?",
      "suggestedAnswer": [
        { "@type": "Answer", "text": "Sukapha", "correctAnswer": true },
        { "@type": "Answer", "text": "Sutingpha", "correctAnswer": false }
      ]
    }
  ]
}
```

### D. WebApplication Schema
Applied on interactive tool pages (`/tools/score-calculator/`, `/tools/eligibility-checker/`):
```json
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "ADRE Score & Rank Calculator",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "INR"
  }
}
```

### E. BreadcrumbList Schema
Applied globally on all sub-pages for rich snippet search results.
