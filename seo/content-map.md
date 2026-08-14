# AxomRank — Content Architecture & Mapping Plan

## 1. Content Types Strategy
Rather than maintaining a generic blog, AxomRank deploys 10 distinct content types designed for intent match, conversion, and authority:

1. **Evergreen Exam Hubs**: High-level definitive guides (`/adre/`, `/adre/grade-3/`, `/adre/grade-4/`).
2. **Interactive PYQ Solvers**: Solve real exam questions online with detailed Assamese & English solutions.
3. **Mock Test Landing Pages**: Exam-like timed interface with instant scorecards and AxomRank Score calculation.
4. **Subject Topic & MCQ Engines**: Micro-quizzes and practice sets categorised by subject and subtopic.
5. **Assam Knowledge Pillars**: Deep educational content on Assam History, Geography, Polity, Culture, and Tribes.
6. **Current Affairs Digest**: Bi-lingual weekly and monthly Assam + National Current Affairs for exam prep.
7. **Free SEO Tools**: Client-side interactive web applications (Score Calculator, Eligibility Checker, Age Calculator).
8. **Exam Analysis & Cut-off Insights**: Data-driven breakdown of previous exams, mark distributions, and difficulty levels.
9. **Structured Exam Guides**: Step-by-step preparation roadmaps (30-day, 60-day, 90-day plans).
10. **Mistake Bank & Weak Topic Drill**: Conversion-focused interactive features.

## 2. Dynamic Content-to-URL Directory Mapping

| Target URL Pattern | Content Type | Target Intent Keywords | CTA / Product Conversion | Primary Schema |
| :--- | :--- | :--- | :--- | :--- |
| `/adre/` | Evergreen Hub | adre, adre 3.0, adre exam | "Start Free ADRE Mock Test" | `WebPage`, `Course` |
| `/adre/syllabus/` | Guide | adre syllabus, grade 3 4 syllabus | "Download Syllabus / Test Weak Topics" | `Article`, `BreadcrumbList` |
| `/adre/exam-pattern/` | Guide | adre exam pattern, marks scheme | "Take Sample Pattern Test" | `Article`, `BreadcrumbList` |
| `/adre/eligibility/` | Interactive Guide | adre eligibility, age limit | "Launch Instant Eligibility Checker" | `WebApplication`, `FAQPage` |
| `/adre/grade-3/` | Sub-Hub | adre grade 3, grade 3 syllabus | "Attempt Grade 3 Full Mock" | `Course`, `BreadcrumbList` |
| `/adre/grade-4/` | Sub-Hub | adre grade 4, grade 4 exam pattern | "Attempt Grade 4 Full Mock" | `Course`, `BreadcrumbList` |
| `/adre/previous-year-question-paper/` | Hub / Directory | adre previous year question paper | "Solve PYQ Papers Online" | `CollectionPage`, `BreadcrumbList` |
| `/adre/previous-year-question-paper/2024/` | Interactive Solver | adre question paper 2024, pyq 2024 | "Solve 2024 Paper in Exam Mode" | `Quiz`, `Question` |
| `/adre/previous-year-question-paper/2022/` | Interactive Solver | adre question paper 2022, pyq 2022 | "Solve 2022 Paper in Exam Mode" | `Quiz`, `Question` |
| `/adre/mock-test/` | Interactive Landing | adre mock test, online test series | "Start Free Full Mock" | `Quiz`, `Product` |
| `/adre/mock-test/grade-3/` | Interactive Test | adre grade 3 mock test | "Begin 100-Q Grade 3 Simulator" | `Quiz` |
| `/adre/mock-test/grade-4/` | Interactive Test | adre grade 4 mock test | "Begin 135-Q Grade 4 Simulator" | `Quiz` |
| `/adre/mcq/` | Practice Engine | adre mcq, practice questions | "Start 10-Question Daily Drill" | `Quiz` |
| `/adre/mcq/assam-history/` | Topic Practice | adre assam history mcq | "Drill Assam History Questions" | `Quiz` |
| `/adre/mcq/assam-geography/` | Topic Practice | adre assam geography mcq | "Drill Assam Geography Questions" | `Quiz` |
| `/assam-gk/` | Topic Hub | assam gk, assam general knowledge | "Take Assam GK Master Quiz" | `CollectionPage` |
| `/assam-gk/history/` | Educational Article | assam history, Ahom kingdom notes | "Attempt History MCQ Test" | `Article`, `Quiz` |
| `/assam-gk/geography/` | Educational Article | assam geography, rivers national parks | "Attempt Geography MCQ Test" | `Article`, `Quiz` |
| `/assam-gk/polity/` | Educational Article | assam polity, state government | "Attempt Polity MCQ Test" | `Article`, `Quiz` |
| `/assam-gk/culture/` | Educational Article | assam culture, festivals bihu | "Attempt Culture MCQ Test" | `Article`, `Quiz` |
| `/current-affairs/` | News/Digest Hub | assam current affairs, daily affairs | "Download Monthly Affairs PDF" | `CollectionPage` |
| `/tools/score-calculator/` | Interactive Tool | adre score calculator, mark calculator | "Calculate Score & Predict Rank" | `WebApplication` |
| `/tools/eligibility-checker/` | Interactive Tool | adre eligibility checker, age calculator | "Check Your Exam Eligibility" | `WebApplication` |
| `/tools/study-planner/` | Interactive Tool | adre study plan generator | "Generate My 30-Day Timetable" | `WebApplication` |

## 3. Editorial & Disclaimers Standard
To maintain 100% trust, every page explicitly displays:
> **Notice**: AxomRank is an independent digital preparation platform and is not affiliated with, endorsed by, or official representative of the Government of Assam, State Level Recruitment Commission (SLRC), or any state board. Official notifications are always linked directly to government portals.
