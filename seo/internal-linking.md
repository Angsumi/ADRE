# AxomRank — Internal Linking & Topic Cluster Architecture

## 1. Hub-and-Spoke Graph Design

```
                     [ /adre/ Hub Page ]
                      /       |       \
                     /        |        \
        [ /adre/syllabus/ ] [ /adre/grade-3/ ] [ /adre/grade-4/ ]
                 |                |                     |
        [ /adre/exam-pattern/ ]  [ /adre/mock-test/ ]   [ /adre/pyq/ ]
                 \                /                     /
                  \              /                     /
               [ Topic MCQs / Assam GK Hubs ] <-------+
                        |           |
            [ /tools/score-calculator/ ]
                        |
            [ User Account / Product Funnel ]
```

## 2. Anchor Text Strategy
- **Exact Match Anchors (Internal Only)**: Use targeted phrases like `ADRE Previous Year Question Paper`, `Assam History MCQs`, `ADRE Grade 3 Mock Test`.
- **Contextual In-body Links**: Every educational notes page MUST link to the corresponding topic practice quiz within the first 3 paragraphs.
- **Breadcrumb Navigation Links**: Enforce explicit hierarchal paths on every page (Home > ADRE > Mock Test > Grade 3).

## 3. Automated Contextual Cross-Linking Rules
1. **Pillar to Spoke**: All Evergreen Exam Hubs link down to Syllabus, Pattern, PYQs, and Mock Tests.
2. **Spoke to Product**: All Mock Test, MCQ, and Tool pages include contextual call-to-actions to the AxomRank diagnostic tool and user account creation.
3. **Cross-Subject Links**: Subject guides (e.g. Assam History) link to related questions in the PYQ Vault and mock exam engines.
