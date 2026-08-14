export interface SyllabusSubtopic {
  name: string;
  details?: string[];
}

export interface SyllabusSection {
  title: string;
  subtopics: SyllabusSubtopic[];
}

export interface SyllabusPhase {
  phase: string;
  name: string;
  topics: string;
}

export interface PriorityMatrixItem {
  domain: string;
  priority: 'A' | 'B' | 'C';
  whyItMatters: string;
  target: string;
}

export interface SyllabusSubject {
  slug: string;
  title: string;
  icon: string;
  weightage: string;
  description: string;
  pdfUrl?: string;
  pdfFilename?: string;
  sections: SyllabusSection[];
  phases?: SyllabusPhase[];
  priorityMatrix?: PriorityMatrixItem[];
}

export const SYLLABUS_SUBJECTS: SyllabusSubject[] = [
  {
    slug: 'mathematics',
    title: 'Mathematics & Quantitative Aptitude',
    icon: '📐',
    weightage: '20% Marks (Class 10/12 Level)',
    description: 'Comprehensive 10-Phase preparation hierarchy covering foundation arithmetic, commercial math, algebra, geometry, mensuration, data interpretation, and speed calculation strategies.',
    pdfUrl: '/pdf/syllabus/ADRE_Mathematics_Master_Topic_Map.pdf',
    pdfFilename: 'ADRE_Mathematics_Master_Topic_Map.pdf',
    sections: [
      {
        title: '1. Foundation Arithmetic & Calculation',
        subtopics: [
          { name: 'Number System & Divisibility', details: ['Types of numbers, prime numbers, divisibility rules (2-13), place value, unit digit calculation.'] },
          { name: 'HCF & LCM', details: ['Prime factorisation method, division method, word problems on bells/traffic lights, fraction HCF/LCM.'] },
          { name: 'Simplification & Approximation', details: ['BODMAS/PEMDAS rule, surds & indices, decimal operations, approximation techniques.'] },
          { name: 'Fractions & Decimals', details: ['Proper/improper/mixed fractions, recurring decimals, ordering of fractions, conversion.'] },
        ],
      },
      {
        title: '2. Core Commercial Mathematics',
        subtopics: [
          { name: 'Percentage', details: ['Base change, population growth, expenditure & consumption, mark-up & effective percentage.'] },
          { name: 'Profit, Loss & Discount', details: ['Cost price, selling price, marked price, successive discounts, dishonest shopkeeper problems.'] },
          { name: 'Simple Interest & Compound Interest', details: ['Formula vs ratio method, annual/half-yearly compounding, difference between SI and CI.'] },
          { name: 'Ratio & Proportion & Partnership', details: ['Direct/inverse proportion, mean proportional, profit distribution in partnership based on time & capital.'] },
          { name: 'Average & Ages', details: ['Weighted average, change in average when items added/removed, age calculation problems.'] },
        ],
      },
      {
        title: '3. Work, Speed & Distance',
        subtopics: [
          { name: 'Time & Work / Pipes & Cisterns', details: ['Efficiency method, alternate work days, men-women-children work formula, inlet/outlet pipes.'] },
          { name: 'Time, Speed & Distance', details: ['Average speed, relative speed, train crossing platform/pole, boat and stream (upstream/downstream).'] },
        ],
      },
      {
        title: '4. Algebra, Geometry & Mensuration',
        subtopics: [
          { name: 'Algebraic Basics & Identities', details: ['Expansion formulas (a+b)², (a+b)³, factorisation, linear equations in 1 & 2 variables, quadratic equations.'] },
          { name: 'Geometry Basics', details: ['Lines & angles, triangle properties (congruence/similarity), circle theorems (chords, tangents, angles).'] },
          { name: 'Mensuration 2D & 3D', details: ['Area & perimeter of triangle/rectangle/circle, surface area & volume of cylinder/cone/sphere/cube.'] },
          { name: 'Data Interpretation', details: ['Reading tables, bar charts, pie charts, line graphs, calculating percentage change & averages.'] },
        ],
      },
    ],
    phases: [
      { phase: 'Phase 1', name: 'Foundation', topics: 'Number System → Simplification → Fractions/Decimals → HCF/LCM' },
      { phase: 'Phase 2', name: 'Core Arithmetic', topics: 'Ratio/Proportion → Percentage → Profit/Loss/Discount → Average' },
      { phase: 'Phase 3', name: 'Work & Motion', topics: 'Time & Work → Pipes → Time/Speed/Distance → Trains → Boats/Streams' },
      { phase: 'Phase 4', name: 'Commercial Maths', topics: 'Simple Interest → Compound Interest → Partnership → Mixture/Alligation' },
      { phase: 'Phase 5', name: 'Algebra', topics: 'Algebraic basics → Identities → Linear equations → Indices/Surds → Quadratic' },
      { phase: 'Phase 6', name: 'Geometry', topics: 'Lines/Angles → Triangles → Quadrilaterals → Circles → Polygons' },
      { phase: 'Phase 7', name: 'Mensuration', topics: '2D areas/perimeters → Composite figures → 3D surface area/volume' },
      { phase: 'Phase 8', name: 'Data & Graphs', topics: 'Tables → Bar graphs → Pie charts → Line graphs → Mean/Median/Mode' },
      { phase: 'Phase 9', name: 'Supporting', topics: 'Trigonometry → Coordinate geometry → selected applications' },
      { phase: 'Phase 10', name: 'Exam Mode', topics: 'Mixed sets → timed sets → error log → full mocks → revision' },
    ],
    priorityMatrix: [
      { domain: 'Number System & Simplification', priority: 'A', whyItMatters: 'Foundation + frequent calculation', target: 'Master' },
      { domain: 'Ratio / Proportion', priority: 'A', whyItMatters: 'Feeds percentage, partnership, mixtures', target: 'Master' },
      { domain: 'Percentage', priority: 'A', whyItMatters: 'High transfer to many word problems', target: 'Master' },
      { domain: 'Profit / Loss / Discount', priority: 'A', whyItMatters: 'Standard arithmetic application', target: 'Master' },
      { domain: 'Average', priority: 'A', whyItMatters: 'Short, scoring, highly reusable', target: 'Master' },
      { domain: 'Time & Work / Pipes', priority: 'A', whyItMatters: 'Formula + rate reasoning', target: 'Master' },
      { domain: 'Time-Speed-Distance', priority: 'A', whyItMatters: 'Common application family', target: 'Master' },
      { domain: 'Algebra', priority: 'B', whyItMatters: 'Conceptual but manageable', target: 'Strong' },
      { domain: 'Geometry', priority: 'B', whyItMatters: 'Properties + direct application', target: 'Strong' },
      { domain: 'Mensuration', priority: 'B', whyItMatters: 'Formula-driven scoring', target: 'Strong' },
      { domain: 'Data Interpretation', priority: 'B', whyItMatters: 'Fast marks if calculation is controlled', target: 'Strong' },
      { domain: 'SI / CI', priority: 'B', whyItMatters: 'Formula + application', target: 'Strong' },
    ],
  },
  {
    slug: 'history',
    title: 'History of Assam & India',
    icon: '🗡️',
    weightage: '25%+ Marks',
    description: 'Detailed coverage of Ancient Kamarupa, 600-year Ahom Kingdom, Freedom Movement in Assam, Vedic Period, Mauryan & Gupta Empires, Mughals, and Indian National Movement.',
    pdfUrl: '/pdf/syllabus/ADRE_History_Syllabus.pdf',
    pdfFilename: 'ADRE_History_Syllabus.pdf',
    sections: [
      {
        title: '1. History of Assam',
        subtopics: [
          { name: '1.1 Ancient Assam (Kamrupa Era)', details: ['Danava & Naraka Dynasties, Varman Dynasty (Pushyavarman, Bhaskaravarman, Hiuen Tsang accounts), Mlechchha Dynasty (Salastambha, Harshadeva), Pala Dynasty (Brahmapala, Dharmapala).'] },
          { name: '1.2 Medieval Assam & Ahom Rule (1228-1826)', details: ['Chaolung Sukapha foundation, Suhungmung (Dihingia Raja), Pratap Singha, Gadadhar Singha, Rudra Singha. Ahom-Mughal conflicts (Mir Jumla invasion, Battle of Saraighat 1671, Lachit Borphukan, Battle of Itakhuli). Koch Dynasty (Biswa Singha, Nara Narayan, Chilarai), Chutiya & Kachari Kingdoms, Moamoria Rebellion.'] },
          { name: '1.3 Modern Assam & Freedom Movement', details: ['Treaty of Yandaboo (1826), Annexation of Cachar & Jaintia, Revolt of 1857 in Assam (Maniram Dewan, Piyali Barua), Phulaguri Dhawa (1861), Patharughat Uprising (1894). Formation of Assam Association (1903), Assam Sahitya Sabha, Non-Cooperation, Civil Disobedience, Quit India (Kanaklata Barua, Kushal Konwar), Sylhet Referendum.'] },
        ],
      },
      {
        title: '2. History of India',
        subtopics: [
          { name: '2.1 Ancient India', details: ['Indus Valley Civilization (Harappa, Mohenjodaro, town planning), Early & Later Vedic period, Rise of Buddhism (Gautama Buddha) & Jainism (Mahavira), Mauryan Empire (Chandragupta, Ashoka Dhamma), Gupta Empire Golden Age (Samudragupta, Chandragupta II).'] },
          { name: '2.2 Medieval India', details: ['Delhi Sultanate (Slave, Khilji, Tughlaq, Sayyid, Lodi), Mughal Empire (Babur, Akbar Din-i-Ilahi/Mansabdari, Jahangir, Shah Jahan, Aurangzeb), Maratha Empire (Shivaji), Vijayanagara Empire, Bhakti & Sufi Movements.'] },
          { name: '2.3 Modern India & National Movement', details: ['Advent of Europeans, Expansion of British Power (Plassey 1757, Buxar 1764, Subsidiary Alliance, Doctrine of Lapse), Revolt of 1857, Indian National Congress (1885), Partition of Bengal (1905), Swadeshi Movement. Gandhian Era (1915-1947: Champaran, Rowlatt Act, Jallianwala Bagh, Non-Cooperation, Dandi March, Quit India), Independence & Partition 1947.'] },
        ],
      },
      {
        title: '3. Cultural Heritage of Assam & India',
        subtopics: [
          { name: '3.1 Cultural Heritage of Assam', details: ['Neo-Vaishnavite Movement (Srimanta Sankardev, Madhavdev, Satras, Namghars), Sattriya Dance, Bihu festivals (Rongali, Kongali, Bhogali), Muga silk attire, Sarthebari Bell-metal industry, Ahom architecture (Rang Ghar, Kareng Ghar, Talatal Ghar), Kamakhya Temple.'] },
          { name: '3.2 Cultural Heritage of India', details: ['Classical Dances (Bharatanatyam, Kathak, Odissi), Hindustani & Carnatic Music, Temple architecture (Dravidian & Nagara styles), Indo-Islamic monuments (Taj Mahal, Qutub Minar, Fatehpur Sikri).'] },
        ],
      },
    ],
  },
  {
    slug: 'geography',
    title: 'Geography of Assam, India & World',
    icon: '🌍',
    weightage: '20% Marks',
    description: 'Exhaustive syllabus covering Brahmaputra and Barak river networks, 7 National Parks of Assam, soil/climate/minerals, Indian physical geography, and World Earth science fundamentals.',
    pdfUrl: '/pdf/syllabus/ADRE_Geography_Syllabus.pdf',
    pdfFilename: 'ADRE_Geography_Syllabus.pdf',
    sections: [
      {
        title: '1. Geography of Assam',
        subtopics: [
          { name: '1.1 Physical Geography & Climate', details: ['Brahmaputra Valley, Barak Valley, Karbi Anglong & North Cachar Hills. Monsoon characteristics, annual rainfall distribution, Alluvial, Red, and Laterite soils.'] },
          { name: '1.2 Drainage System & Water Bodies', details: ['Brahmaputra River System (Subansiri, Kameng, Dhansiri tributaries), Barak River System, Wetlands & Beels (Deepor Beel, Son Beel), Majuli River Island.'] },
          { name: '1.3 Protected Areas & Resources', details: ['7 National Parks (Kaziranga, Manas, Nameri, Orang, Dibru-Saikhowa, Raimona, Dihing Patkai) & Wildlife Sanctuaries. Tropical evergreen & deciduous forests. Oil & Gas (Digboi, Naharkatia), Coal (Makum), Limestone.'] },
          { name: '1.4 Demographics & Economy', details: ['Population density, literacy rates, tribal communities (Bodos, Mishings, Karbis). Tea estates, Muga/Eri/Pat sericulture, Rice production, Petroleum refineries, Transport & National Highways.'] },
        ],
      },
      {
        title: '2. Geography of India',
        subtopics: [
          { name: '2.1 Physical Features & Rivers', details: ['Himalayas, Northern Plains, Peninsular Plateau, Thar Desert, Coastal Plains, Island territories (Andaman & Nicobar, Lakshadweep). Himalayan rivers (Ganga, Indus, Brahmaputra) & Peninsular rivers (Godavari, Krishna, Cauvery, Narmada, Tapi).'] },
          { name: '2.2 Climate, Agriculture & Resources', details: ['South-West & North-East Monsoon, El Nino/La Nina effects. Rabi, Kharif, Zaid crops (Rice, Wheat, Sugarcane, Cotton). Major iron ore, coal, bauxite mines, steel plants, demography & Census highlights.'] },
        ],
      },
      {
        title: '3. Fundamentals of World Geography',
        subtopics: [
          { name: '3.1 Physical Geography & Earth', details: ['Solar system, Earth interior (Crust, Mantle, Core), Latitudes, Longitudes, International Date Line, Time Zones. Continents, major mountain ranges (Andes, Rockies, Alps), Sahara & Gobi deserts.'] },
          { name: '3.2 Atmosphere & Oceans', details: ['Atmospheric layers (Troposphere, Stratosphere, Ionosphere), Composition. Oceanography, major oceans, warm & cold ocean currents, tides.'] },
        ],
      },
    ],
  },
  {
    slug: 'polity',
    title: 'Indian Polity & Assam Governance',
    icon: '🏛️',
    weightage: '15% Marks',
    description: 'Complete breakdown of Indian Constitution, Fundamental Rights, Union/State Executive, Gauhati High Court, 6th Schedule, Autonomous Councils of Assam (BTC, KAAC, NCHAC), and APSC/UPSC.',
    pdfUrl: '/pdf/syllabus/ADRE_Polity_Syllabus.pdf',
    pdfFilename: 'ADRE_Polity_Syllabus.pdf',
    sections: [
      {
        title: '1. Indian Constitution & Framework',
        subtopics: [
          { name: '1.1 Historical Background & Making', details: ['Regulating Act 1773, Government of India Acts 1919 & 1935, Indian Independence Act 1947. Constituent Assembly (B.R. Ambedkar, B.N. Rau), Drafting Committee, Sources of Indian Constitution.'] },
          { name: '1.2 Core Philosophy & Rights', details: ['The Preamble (Sovereign, Socialist, Secular, Democratic, Republic). Fundamental Rights (Articles 12-35), Directive Principles of State Policy (Part IV), Fundamental Duties (Part IVA, 42nd Amendment).'] },
        ],
      },
      {
        title: '2. Government Structure (Union & State)',
        subtopics: [
          { name: '2.1 Union & State Executive & Legislature', details: ['President (Election, Powers, Impeachment), Prime Minister, Cabinet, Lok Sabha & Rajya Sabha. Governor powers, Chief Minister, Assam Legislative Assembly (Vidhan Sabha structure).'] },
          { name: '2.2 Judiciary & Gauhati High Court', details: ['Supreme Court (Jurisdiction, Judicial Review), Gauhati High Court (Jurisdiction over North-Eastern states, history, benches), Subordinate Courts & Lok Adalats.'] },
        ],
      },
      {
        title: '3. Local Self-Government & Special Assam Provisions',
        subtopics: [
          { name: '3.1 Panchayati Raj & Municipalities', details: ['73rd Constitutional Amendment (Three-tier Panchayati Raj system, Part IX), 74th Amendment (Municipalities, Part IXA).'] },
          { name: '3.2 Special Provisions for Assam (Crucial for ADRE)', details: ['Sixth Schedule of Indian Constitution (Tribal area administration). Bodoland Territorial Council (BTC), Karbi Anglong Autonomous Council (KAAC), North Cachar Hills Autonomous Council (NCHAC). Article 371B special provisions for Assam.'] },
        ],
      },
      {
        title: '4. Constitutional & Statutory Bodies',
        subtopics: [
          { name: '4.1 Constitutional Bodies', details: ['Election Commission of India, APSC (Assam Public Service Commission), UPSC, CAG (Comptroller and Auditor General), Finance Commission, Advocate General of Assam.'] },
          { name: '4.2 Statutory & Executive Bodies', details: ['NHRC (National Human Rights Commission), State Information Commission, NITI Aayog composition & cooperative federalism.'] },
        ],
      },
    ],
  },
  {
    slug: 'english',
    title: 'General English & Verbal Ability',
    icon: '📚',
    weightage: '15% Marks',
    description: 'Complete grammar rules, prepositions, tenses, active/passive voice, direct/indirect narration, synonyms/antonyms, idioms, one-word substitution, and reading comprehension.',
    pdfUrl: '/pdf/syllabus/ADRE_English_Syllabus.pdf',
    pdfFilename: 'ADRE_English_Syllabus.pdf',
    sections: [
      {
        title: '1. Grammar & Usage',
        subtopics: [
          { name: '1.1 Parts of Speech & Prepositions', details: ['Nouns, Pronouns, Adjectives, Verbs, Adverbs, Prepositions (fixed & directional prepositions), Conjunctions.'] },
          { name: '1.2 Tenses & Sentence Structure', details: ['Present, Past, Future tenses (Simple, Continuous, Perfect), Subject-Verb Agreement, Articles (A, An, The).'] },
          { name: '1.3 Voice & Speech', details: ['Active & Passive Voice conversion rules across tenses, Direct & Indirect Speech (Narration changes, reporting verbs).'] },
        ],
      },
      {
        title: '2. Vocabulary & Expressions',
        subtopics: [
          { name: '2.1 Synonyms & Antonyms', details: ['Contextual word meanings, high-frequency vocabulary, Homophones & Homonyms.'] },
          { name: '2.2 Phrases & Expressions', details: ['Common English idioms, phrasal verbs, One-Word Substitutions for definitions.'] },
          { name: '2.3 Spelling & Correction', details: ['Spotting correctly and incorrectly spelt words commonly tested in SLRC exams.'] },
        ],
      },
      {
        title: '3. Reading Comprehension & Construction',
        subtopics: [
          { name: '3.1 Reading Comprehension', details: ['Unseen passages, extracting main themes, author tone, deducing word meanings in context.'] },
          { name: '3.2 Sentence Construction & Errors', details: ['Para Jumbles (scrambled sentence ordering), Error Spotting, Sentence Improvement, Cloze Tests.'] },
        ],
      },
    ],
  },
  {
    slug: 'reasoning',
    title: 'Logical Reasoning & Mental Ability',
    icon: '🧩',
    weightage: '10% Marks',
    description: 'High-scoring analytical and logical reasoning section covering coding-decoding, blood relations, analogies, series completion, syllogism, and non-verbal pattern recognition.',
    sections: [
      {
        title: '1. Verbal Reasoning',
        subtopics: [
          { name: 'Analogy & Classification', details: ['Word analogy, number analogy, letter analogy, odd one out identification.'] },
          { name: 'Coding-Decoding', details: ['Letter shift coding, numerical coding, substitution coding, deciphering message codes.'] },
        ],
      },
      {
        title: '2. Analytical & Spatial Reasoning',
        subtopics: [
          { name: 'Blood Relations & Family Tree', details: ['Deciphering family relationships from statements, coded blood relation symbols.'] },
          { name: 'Direction Sense & Ranking', details: ['Distance calculation, compass orientation, order & ranking position in a row.'] },
          { name: 'Series Completion', details: ['Number series, letter series, missing term patterns, alpha-numeric sequences.'] },
          { name: 'Seating Arrangement & Puzzles', details: ['Linear seating arrangement, circular arrangement facing inside/outside, matrix puzzles.'] },
        ],
      },
      {
        title: '3. Logic & Non-Verbal Reasoning',
        subtopics: [
          { name: 'Syllogism & Venn Diagrams', details: ['Statement & Conclusion, Venn diagram representation, valid logical deductions.'] },
          { name: 'Non-Verbal Pattern Recognition', details: ['Figure series, mirror images, paper folding & cutting, pattern completion.'] },
        ],
      },
    ],
  },
];

export function getSyllabusSubject(slug: string): SyllabusSubject | undefined {
  return SYLLABUS_SUBJECTS.find((s) => s.slug === slug);
}
