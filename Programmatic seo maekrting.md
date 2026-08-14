# Build Goal: ADRE Assam Exam Preparation Platform

You are Codex acting as the lead product engineer, UI/UX designer, SEO engineer, and technical architect for a free-first ADRE exam preparation platform.

## 1. Product Goal

Build a fast, mobile-first, SEO-optimized web application for candidates preparing for the Assam Direct Recruitment Examination (ADRE), conducted by the State Level Recruitment Commission (SLRC), Government of Assam.

The immediate goal is to launch a completely free MVP on GitHub Pages at:

`https://angsuman.github.io/adre/`

The long-term goal is to turn this into a leading Assam-specific ADRE preparation platform with:

- Previous Year Questions
- Question database
- Topic-wise practice
- Subject-wise practice
- Grade III preparation
- Grade IV preparation
- Mock tests
- Daily quizzes
- Assam GK
- Assam History
- Assam Geography
- Assam Culture
- Current Affairs
- Performance analytics
- Personalized practice
- Eventually, premium digital products

The product must be designed so that a custom domain can be added later without rebuilding the application.

---

# 2. Core Strategic Principle

Do NOT build this as a generic coaching website.

Build it as:

> A data-driven ADRE preparation engine.

The core asset should be a structured question database that can power:

- quizzes
- mock tests
- topic pages
- subject pages
- question pages
- SEO pages
- study recommendations
- social-media content
- analytics
- future personalization

The architecture must therefore be database/content driven rather than manually hardcoded page by page.

---

# 3. Critical Accuracy Rule

Never invent official ADRE information.

Do not fabricate:

- notification dates
- vacancy numbers
- examination dates
- eligibility criteria
- application dates
- syllabus changes
- government announcements
- official statistics

If ADRE 3.0 has not yet been officially announced for a particular detail, clearly label it as:

> "Official information not yet released."

Use official Government of Assam / SLRC sources whenever official information is required.

The platform should clearly distinguish:

1. Official information
2. Previous-year information
3. Our analysis
4. Expected/unofficial information

Never present speculation as fact.

---

# 4. Target Audience

Primary users:

- Assam ADRE Grade III candidates
- Assam ADRE Grade IV candidates
- Assamese-speaking candidates
- English-speaking candidates preparing for ADRE
- First-time government-job aspirants in Assam
- Candidates looking for free ADRE preparation resources

The website must work extremely well on low-to-mid-range Android phones and relatively slow Indian mobile networks.

Mobile experience is more important than desktop complexity.

---

# 5. Initial MVP

Build the following sections first:

## Home

Include:

- ADRE preparation headline
- short explanation
- Start Free Practice CTA
- Daily Quiz CTA
- Previous Year Questions CTA
- Mock Test CTA
- Grade III section
- Grade IV section
- Assam GK section
- subject navigation
- clear statement that the platform is free

Do NOT make the homepage look like a generic coaching institute.

The design should feel like a modern exam-preparation product.

---

# 6. Main Navigation

Create a simple navigation structure:

- Home
- Practice
- Mock Tests
- Previous Papers
- Subjects
- Assam GK
- Daily Quiz
- About

On mobile, use a clean mobile navigation/bottom navigation where appropriate.

Do not overload the navigation.

---

# 7. Question Database Architecture

Create a structured question model.

Each question should support fields such as:

```text
id
question
options
correctAnswer
explanation
subject
topic
subtopic
difficulty
exam
grade
year
paper
language
source
tags
```

The architecture must allow thousands of questions later.

Do not hardcode questions directly into UI components.

Use structured JSON/data files initially if that is the simplest GitHub Pages-compatible approach.

Design the data layer so it can later be migrated to Supabase or another backend.

---

# 8. Initial Subjects

Support at least:

- Assam History
- Indian History
- Assam Geography
- Indian Geography
- Assam Polity
- Indian Polity
- Assam Economy
- Indian Economy
- General Science
- Mathematics
- Reasoning
- English
- General Knowledge
- Assam Culture
- Current Affairs

Keep the taxonomy extensible.

---

# 9. Practice Engine

Build a reusable quiz engine.

The user should be able to select:

- subject
- topic
- difficulty
- number of questions

For example:

```text
Subject:
Assam History

Topic:
Ahom Kingdom

Questions:
20

Difficulty:
Mixed
```

Then start the quiz.

Each question should have:

- question
- four options where applicable
- answer selection
- next button
- progress indicator
- immediate or end-of-test feedback

After completion show:

- score
- percentage
- correct answers
- incorrect answers
- unanswered questions
- topic performance
- weak areas
- restart button
- practice-again button

---

# 10. Mock Test System

Create a reusable mock-test system.

Initially support:

- 20-question tests
- 50-question tests
- 100-question tests

Eventually support full ADRE-style mock examinations.

Every test should produce a result page.

The result page should be designed to encourage another practice session without becoming manipulative or spammy.

---

# 11. Daily Quiz

Create a Daily Quiz system.

Initially this can be based on deterministic/static data.

The interface should support:

> Today's ADRE Challenge

Show:

- date
- number of questions
- start button

After completion:

- score
- accuracy
- topic performance
- recommended practice

The architecture must allow daily questions to be changed easily.

---

# 12. Previous Year Questions

Create a dedicated Previous Year Questions section.

Organize questions by:

- year
- grade
- paper
- subject
- topic

Example:

```text
Previous Year Questions
 ├── 2024
 │    ├── Grade III
 │    └── Grade IV
 └── 2022
      ├── relevant papers
      └── relevant categories
```

Do not claim a paper is official unless its source is known.

Where legally appropriate, link users toward official/source material rather than unnecessarily reproducing copyrighted documents.

---

# 13. SEO Architecture

SEO is one of the central objectives of this project.

The site should be structured around genuine search intent rather than mass-producing meaningless pages.

Create indexable pages for useful entities such as:

```text
/adre/
/adre/grade-3/
/adre/grade-4/
/adre/syllabus/
/adre/previous-year-questions/
/adre/mock-tests/
/adre/assam-gk/
/adre/subjects/
/adre/subjects/assam-history/
/adre/subjects/assam-geography/
/adre/subjects/mathematics/
/adre/topics/ahom-kingdom/
/adre/topics/assam-history/
/adre/questions/[question-slug]/
```

Use clean, readable URLs.

Every indexable page must contain genuinely useful content.

Do NOT generate thousands of thin pages simply to increase page count.

---

# 14. Programmatic SEO

The architecture should support programmatic SEO later.

A question can generate useful relationships:

```text
Question
↓
Topic
↓
Subject
↓
Grade
↓
Exam
↓
Mock Test
```

For example, a question about the Ahom Kingdom could connect to:

- Assam History
- Ahom Kingdom
- Assam GK
- Grade III
- Grade IV
- related questions
- related mock tests

Build strong internal linking.

Do not create a separate page merely because a keyword exists.

Only create pages when there is meaningful user value.

---

# 15. Question Page SEO

Question pages should contain:

- question
- answer
- explanation
- subject
- topic
- exam relevance
- related questions
- related topics
- practice CTA

Use appropriate metadata.

Generate:

- title
- meta description
- canonical URL
- Open Graph metadata

Use structured data only where appropriate and valid.

Do not use misleading structured data.

---

# 16. Technical SEO

Implement:

- semantic HTML
- proper headings
- canonical URLs
- sitemap
- robots.txt
- Open Graph
- Twitter/social metadata where useful
- clean URLs
- internal linking
- fast loading
- image optimization
- accessibility
- mobile responsiveness

Make sure GitHub Pages deployment works correctly with the `/adre/` base path.

This is extremely important.

The application must not assume it is hosted at `/`.

Configure the build system correctly for:

`https://angsuman.github.io/adre/`

Test:

- direct URL navigation
- refresh
- deep links
- assets
- CSS
- JavaScript
- images
- routing

---

# 17. Performance

Target excellent Lighthouse performance.

Prioritize:

- minimal JavaScript
- code splitting where appropriate
- compressed assets
- optimized images
- no unnecessary libraries
- no huge UI frameworks unless justified
- minimal third-party scripts

The site must remain usable on mobile devices.

Aim for:

- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

Do not sacrifice functionality merely to chase an artificial score.

---

# 18. Design Direction

Do NOT make this look like a generic Indian coaching website.

Avoid:

- excessive gradients
- stock photos of students
- cliché government-exam graphics
- excessive red/yellow/blue
- cluttered dashboards
- giant advertising banners
- "BREAKING NEWS" style interfaces
- AI-generated visual clutter

Design direction:

- clean
- trustworthy
- modern
- Assam-aware
- academic
- data-driven
- fast
- highly readable
- mobile-first

The visual identity should subtly reflect Assam without turning the website into a tourism website.

Use restrained Assamese cultural references.

Do not use symbols or imagery inaccurately.

---

# 19. Assamese Language

Design the system so that Assamese content can be added easily.

Support:

- English
- Assamese

Do not hardcode English strings throughout components.

Create a translation/content architecture that can later support bilingual pages.

---

# 20. Free-First Strategy

The initial platform should provide substantial free value.

Do not put basic information behind a payment wall.

Free features should include:

- PYQs
- basic practice
- daily quiz
- selected mock tests
- Assam GK
- topic practice
- basic score analysis

The future premium layer can include:

- advanced analytics
- large mock-test library
- personalized preparation
- advanced revision tools
- premium notes
- large question bank
- downloadable resources
- additional practice

Do not implement payments yet unless specifically instructed.

---

# 21. Growth Architecture

The application should eventually support this funnel:

```text
Google Search
      ↓
SEO Page
      ↓
Free Question / Tool
      ↓
Practice
      ↓
Result
      ↓
Account
      ↓
Daily Practice
      ↓
Returning User
      ↓
Premium Product
```

Build the product architecture so this funnel is possible.

---

# 22. Social Sharing

Create attractive shareable result states.

After a test, allow the user to eventually share something like:

> ADRE Mock Test  
> Score: 82/100  
> Accuracy: 82%

The shared result should contain the website URL.

Do not implement unnecessary social APIs at the MVP stage.

A simple share/copy mechanism is sufficient.

---

# 23. Analytics

Prepare the application for analytics.

Track important events such as:

- quiz started
- quiz completed
- question answered
- mock test started
- mock test completed
- subject selected
- CTA clicked
- signup
- return visit

Do not collect unnecessary personal information.

Privacy should be considered from the beginning.

---

# 24. Future Data Strategy

Design the code so the initial static data source can later be replaced by:

```text
Static JSON
      ↓
Supabase
      ↓
Authenticated user database
      ↓
Personalized recommendation engine
```

Do not over-engineer the backend now.

The first version must remain simple and free to host.

---

# 25. AI Usage

AI may be used to help generate:

- explanations
- summaries
- metadata
- question categorization
- related-question suggestions
- content drafts

But AI-generated information must not automatically be treated as factual.

For historical, governmental, statistical, legal, examination, or current-affairs information, require verification before publication.

Never mass-publish unverified AI-generated facts.

---

# 26. Content Quality Rule

The objective is NOT:

> "Create 10,000 pages."

The objective is:

> "Create the most useful free ADRE preparation resource possible."

Every page should answer a real user need.

Prioritize:

- originality
- usefulness
- accuracy
- internal linking
- first-hand/verified information
- clear explanations
- exam relevance

Avoid thin programmatic pages.

---

# 27. GitHub Pages Requirements

The final application must deploy successfully to:

`https://angsuman.github.io/adre/`

Create:

- README.md
- deployment instructions
- build configuration
- GitHub Actions workflow if required
- sitemap
- robots.txt
- appropriate static assets

The repository should be organized professionally.

---

# 28. Development Workflow

Before writing large amounts of code:

1. Inspect the repository.
2. Decide the simplest suitable architecture.
3. Create the application structure.
4. Build the homepage.
5. Build the data model.
6. Build the question engine.
7. Build the mock-test engine.
8. Build SEO infrastructure.
9. Build the initial content.
10. Test locally.
11. Run Lighthouse.
12. Fix errors.
13. Deploy to GitHub Pages.
14. Verify the live site.
15. Document how new questions and content can be added.

Do not stop after merely creating files.

The final goal is a working deployed application.

---

# 29. Important Development Principle

Prefer simplicity over unnecessary complexity.

Do not introduce:

- authentication
- databases
- payment gateways
- server infrastructure
- complicated AI APIs
- unnecessary dependencies

until they are actually needed.

The MVP should be capable of running as a static site.

---

# 30. First Milestone

The first milestone is:

> A polished, fast, mobile-first ADRE preparation website deployed successfully at `https://angsuman.github.io/adre/`.

It must contain:

- homepage
- subject pages
- question database
- practice engine
- mock test
- previous-year-question structure
- SEO metadata
- sitemap
- robots.txt
- responsive UI
- GitHub Pages deployment

Use placeholder/demo questions only where real verified data is not yet available, and clearly mark demo content.

---

# 31. Definition of Success

The MVP is successful when:

- it loads correctly from `/adre/`
- all navigation works
- quizzes work
- mock tests work
- results work
- pages are crawlable
- sitemap exists
- mobile layout works
- no broken routes exist
- Lighthouse performance is strong
- the repository is maintainable
- adding 1,000+ questions later does not require rewriting the application

---

# 32. What NOT to Do

Do not:

- fabricate ADRE 3.0 information
- claim unofficial information is official
- create spammy AI pages
- copy competitor websites
- use copyrighted material without appropriate rights
- create fake reviews
- create fake rankings
- use misleading SEO
- overload the site with advertisements
- build unnecessary backend infrastructure
- sacrifice speed for visual effects
- create a generic coaching-site design

---

# FINAL INSTRUCTION

Take ownership of the technical implementation.

Make sensible engineering decisions without asking me for approval for every small implementation detail.

When a decision materially affects the product strategy, SEO architecture, cost, or long-term maintainability, explain the decision briefly.

Start by inspecting the existing `adre` repository and then build the MVP systematically.

The ultimate objective is:

> **Build the best free, data-driven, Assam-focused ADRE preparation platform possible, acquire organic search traffic before the next official ADRE recruitment cycle, convert visitors into returning daily users, and eventually monetize the highest-value preparation features.**

Do not optimize for the number of pages.

Optimize for:

**Search visibility × usefulness × retention × trust × conversion.**