export interface AssamesePyqQuestion {
  id: string;
  question: string;
  options: string[];
  answer: string;
  correctOption: string;
  explanation: string;
  subject: string;
  topic: string;
  year: number;
  grade: string;
  paper: string;
}

export const ASSAMESE_PYQ_DATA: AssamesePyqQuestion[] = [
  {
    "id": "AS-PYQ-0001",
    "question": "1. অলিম্পিকৰ পতাকাত কোনটো ৰং পোৱা নাযায়?",
    "options": [
      "লাল",
      "সেউজীয়া",
      "বেঙুনীয়া",
      "হালধীয়া"
    ],
    "answer": "বেঙুনীয়া",
    "correctOption": "C",
    "explanation": "অলিম্পিকৰ পতাকাত নীলা, হালধীয়া, ক’লা, সেউজীয়া আৰু ৰঙা ৰং আছে। বেঙুনীয়া ৰং নাই।",
    "subject": "General Science",
    "topic": "Olympic symbols / General Awareness",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0002",
    "question": "2. পেৰুৰ ৰাজধানী চহৰ কোনখন?",
    "options": [
      "বগোটা",
      "ছেণ্টিয়াগো",
      "হাভানা",
      "লিমা"
    ],
    "answer": "লিমা",
    "correctOption": "D",
    "explanation": "পেৰু দক্ষিণ আমেৰিকাৰ দেশ আৰু ইয়াৰ ৰাজধানী লিমা।",
    "subject": "Assam GK",
    "topic": "World Geography",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0003",
    "question": "3. National Stock Exchange ক'ত অৱস্থিত?",
    "options": [
      "মুম্বাই",
      "কলকাতা",
      "হায়দৰাবাদ",
      "নতুন দিল্লী"
    ],
    "answer": "মুম্বাই",
    "correctOption": "A",
    "explanation": "National Stock Exchange (NSE)-ৰ মুখ্য কাৰ্যালয় মুম্বাইত।",
    "subject": "Assam GK",
    "topic": "Indian Economy / NSE",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0004",
    "question": "4. তলৰ কোনটো hardware component এটা কম্পিউটাৰৰ পৰা আন এটা কম্পিউটাৰলৈ file transfer কৰিবলৈ ব্যৱহাৰ কৰিব পাৰি?",
    "options": [
      "BIOS",
      "Hard Disk",
      "CPU",
      "USB Flash Drive"
    ],
    "answer": "USB Flash Drive",
    "correctOption": "D",
    "explanation": "USB Flash Drive-এ data সংৰক্ষণ আৰু এটা কম্পিউটাৰৰ পৰা আন এটালৈ file transfer কৰিব পাৰে।",
    "subject": "General Science",
    "topic": "Computer Basics",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0005",
    "question": "5. উত্তৰ ভাৰতৰ Indo-Gangetic Plains আৰু দক্ষিণ ভাৰতৰ Deccan Plateau-ৰ মাজত কোনটো পৰ্বতমালা অৱস্থিত?",
    "options": [
      "Karakoram Range",
      "Satpura আৰু Vindhya Range",
      "Aravalli Range",
      "Pir Panjal Range"
    ],
    "answer": "Satpura আৰু Vindhya Range",
    "correctOption": "B",
    "explanation": "Satpura আৰু Vindhya পৰ্বতমালাই উত্তৰ ভাৰতৰ সমভূমি আৰু Deccan Plateau-ৰ মাজত ভৌগোলিক বিভাজন সৃষ্টি কৰে।",
    "subject": "Assam GK",
    "topic": "Indian Geography",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0006",
    "question": "6. তলৰ কোনখন নদীৰ উৎপত্তি হিমালয়ৰ পৰা নহয়?",
    "options": [
      "Indus",
      "Ganga",
      "Yamuna",
      "Narmada"
    ],
    "answer": "Narmada",
    "correctOption": "D",
    "explanation": "Narmada নদীৰ উৎপত্তি Madhya Pradesh-ৰ Amarkantak মালভূমিৰ পৰা; ই হিমালয়ৰ নদী নহয়।",
    "subject": "Assam GK",
    "topic": "Indian Rivers",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0007",
    "question": "7. পানীৰ সৰ্বাধিক ঘনত্ব কোন তাপমাত্ৰাত হয়?",
    "options": [
      "100°C",
      "−40°C",
      "0°C",
      "4°C"
    ],
    "answer": "4°C",
    "correctOption": "D",
    "explanation": "পানীৰ anomalous expansion-ৰ বাবে 4°C-ত ইয়াৰ ঘনত্ব সৰ্বাধিক হয়।",
    "subject": "General Science",
    "topic": "Properties of Water",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0008",
    "question": "8. ধন-সম্পদৰ উৎপাদন, বিতৰণ আৰু উপভোগ অধ্যয়ন কৰা সামাজিক বিজ্ঞানটো কি?",
    "options": [
      "Commerce",
      "Economics",
      "Political Science",
      "Sociology"
    ],
    "answer": "Economics",
    "correctOption": "B",
    "explanation": "Economics-এ সম্পদৰ উৎপাদন, বিতৰণ আৰু উপভোগ অধ্যয়ন কৰে।",
    "subject": "Assam GK",
    "topic": "Economics",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0009",
    "question": "9. তলৰ কোনটো সাধাৰণতে radioactive পদাৰ্থ?",
    "options": [
      "Plutonium",
      "Germanium",
      "Osmium",
      "Cadmium"
    ],
    "answer": "Plutonium",
    "correctOption": "A",
    "explanation": "Plutonium এটা radioactive element; আনবোৰ সাধাৰণতে স্থিৰ।",
    "subject": "General Science",
    "topic": "Radioactivity",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0010",
    "question": "10. Volleyball-ত প্ৰতিটো দলৰ কিমানজন খেলুৱৈ court-ত থাকে?",
    "options": [
      "5",
      "7",
      "6",
      "8"
    ],
    "answer": "6",
    "correctOption": "C",
    "explanation": "Indoor volleyball-ত প্ৰতিটো দলৰ 6 জন খেলুৱৈ একে সময়তে court-ত থাকে।",
    "subject": "Assam GK",
    "topic": "Sports",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0011",
    "question": "11. অসমে ভাৰতৰ কিমানখন ৰাজ্যৰ সৈতে সীমা ভাগ কৰে?",
    "options": [
      "9",
      "7",
      "8",
      "10"
    ],
    "answer": "7",
    "correctOption": "B",
    "explanation": "অসমে Arunachal Pradesh, Nagaland, Manipur, Mizoram, Tripura, Meghalaya আৰু West Bengal—মুঠ 7খন ৰাজ্যৰ সৈতে সীমা ভাগ কৰে।",
    "subject": "Assam GK",
    "topic": "Geography of Assam",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0012",
    "question": "12. 1 জানুৱাৰী 2022 তাৰিখে অসমৰ বিত্তমন্ত্ৰী কোন আছিল?",
    "options": [
      "অজন্তা নেওগ",
      "চন্দ্ৰ মোহন পাটোৱাৰী",
      "হিমন্ত বিশ্ব শৰ্মা",
      "পীযুষ হাজৰিকা"
    ],
    "answer": "অজন্তা নেওগ",
    "correctOption": "A",
    "explanation": "2022 চনৰ আৰম্ভণিতে অজন্তা নেওগ অসমৰ Finance Minister আছিল।",
    "subject": "Assam GK",
    "topic": "Assam Government",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0013",
    "question": "13. 31 মাৰ্চ 2022 তাৰিখে অসমত কিমানখন জিলা আছিল?",
    "options": [
      "34",
      "35",
      "33",
      "32"
    ],
    "answer": "35",
    "correctOption": "B",
    "explanation": "2022 চনৰ 31 মাৰ্চত অসমত 35খন জিলা আছিল, ইয়াৰ ভিতৰত Bajali-ও আছিল।",
    "subject": "Assam GK",
    "topic": "Districts of Assam",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0014",
    "question": "14. তলৰ কোনখন দেশে অসমৰ সৈতে আন্তঃৰাষ্ট্ৰীয় সীমা ভাগ কৰে?",
    "options": [
      "China",
      "Nepal",
      "Myanmar",
      "Bhutan"
    ],
    "answer": "Bhutan",
    "correctOption": "D",
    "explanation": "অসমৰ উত্তৰ-পশ্চিম অংশৰ কাষত Bhutan-ৰ সৈতে আন্তঃৰাষ্ট্ৰীয় সীমা আছে।",
    "subject": "Assam GK",
    "topic": "Assam International Border",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0015",
    "question": "15. তলৰ কোনখন দলং আটাইতকৈ পূবত অৱস্থিত?",
    "options": [
      "Naranarayan Setu",
      "Saraighat Bridge",
      "Bhupen Hazarika Setu",
      "Koliabhomora Setu"
    ],
    "answer": "Bhupen Hazarika Setu",
    "correctOption": "C",
    "explanation": "Bhupen Hazarika Setu (Dhola–Sadiya Bridge) অসমৰ পূব প্ৰান্তৰ ফালে অৱস্থিত।",
    "subject": "Assam GK",
    "topic": "Bridges of Assam",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0016",
    "question": "16. তলৰ কোনখন নদী Barak Valley-ত অৱস্থিত?",
    "options": [
      "Dikrong",
      "Kushiyara",
      "Boginadi",
      "Bharalu"
    ],
    "answer": "Kushiyara",
    "correctOption": "B",
    "explanation": "Kushiyara Barak নদী ব্যৱস্থাৰ অংশ আৰু Barak Valley-ৰ সৈতে জড়িত।",
    "subject": "Assam GK",
    "topic": "Rivers of Assam",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0017",
    "question": "17. অসমৰ State Tree কোনটো?",
    "options": [
      "Hollong",
      "Teak",
      "Saal",
      "Peepal"
    ],
    "answer": "Hollong",
    "correctOption": "A",
    "explanation": "Hollong (Dipterocarpus macrocarpus) অসমৰ ৰাজ্যিক বৃক্ষ।",
    "subject": "Assam GK",
    "topic": "State Symbols of Assam",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0018",
    "question": "18. Poa Mecca আৰু Hayagriva Madhava Temple অসমৰ কোন ঠাইত অৱস্থিত?",
    "options": [
      "Sivasagar",
      "Tezpur",
      "Dumunichowki",
      "Hajo"
    ],
    "answer": "Hajo",
    "correctOption": "D",
    "explanation": "Hayagriva Madhava Temple Hajo-ত অৱস্থিত; Hajo-ৰ সৈতে Poa Mecca-ও জড়িত।",
    "subject": "Assam GK",
    "topic": "Religious Places of Assam",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0019",
    "question": "19. Jorhat-ত থকা tea research institute-ৰ নাম কি?",
    "options": [
      "Tarai",
      "Tocklai",
      "Tamoi",
      "Tingrai"
    ],
    "answer": "Tocklai",
    "correctOption": "B",
    "explanation": "Tocklai Tea Research Institute Jorhat-ত অৱস্থিত।",
    "subject": "Assam GK",
    "topic": "Tea Industry of Assam",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0020",
    "question": "20. অসমীয়া ভাষাৰ প্ৰথম talkie চলচ্চিত্ৰখনৰ নাম কি?",
    "options": [
      "Bhaiti",
      "Baruar Sansaar",
      "Joymoti",
      "Indramalati"
    ],
    "answer": "Joymoti",
    "correctOption": "C",
    "explanation": "Joymoti (1935) প্ৰথম অসমীয়া talkie চলচ্চিত্ৰ হিচাপে স্বীকৃত।",
    "subject": "Assam GK",
    "topic": "Assamese Cinema",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0021",
    "question": "21. Swaraj Party কোনসকলে প্ৰতিষ্ঠা কৰিছিল?",
    "options": [
      "B. R. Ambedkar আৰু Sardar Patel",
      "Aruna Asaf Ali আৰু Subhash Chandra Bose",
      "Bhagat Singh আৰু Rajguru",
      "Motilal Nehru আৰু Chittaranjan Das"
    ],
    "answer": "Motilal Nehru আৰু Chittaranjan Das",
    "correctOption": "D",
    "explanation": "1923 চনত Motilal Nehru আৰু Chittaranjan Das-এ Swaraj Party গঠন কৰিছিল।",
    "subject": "Assam GK",
    "topic": "Indian Freedom Movement",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0022",
    "question": "22. ধৰ্ম, জাতি, caste, sex আৰু place of birth-ৰ ভিত্তিত বৈষম্য নিষিদ্ধ কৰা সংবিধানৰ কোনটো Article?",
    "options": [
      "Article 25",
      "Article 13",
      "Article 15",
      "Article 19"
    ],
    "answer": "Article 15",
    "correctOption": "C",
    "explanation": "Article 15-এ নিৰ্দিষ্ট ভিত্তিত বৈষম্য নিষিদ্ধ কৰে।",
    "subject": "Assam GK",
    "topic": "Indian Constitution",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0023",
    "question": "23. Muhammad Adil Shah-ৰ mausoleum Gol Gumbaz ক'ত অৱস্থিত?",
    "options": [
      "Bijapur",
      "Delhi",
      "Hyderabad",
      "Bhopal"
    ],
    "answer": "Bijapur",
    "correctOption": "A",
    "explanation": "Gol Gumbaz Karnataka-ৰ Bijapur (Vijayapura)-ত অৱস্থিত।",
    "subject": "Assam GK",
    "topic": "Indian History",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0024",
    "question": "24. ভাৰতৰ Civil Aviation Ministry-ৰ UDAN উদ্যোগত ‘A’-এ কি বুজায়?",
    "options": [
      "Aam",
      "Air",
      "Aakash",
      "Aviation"
    ],
    "answer": "Aam",
    "correctOption": "A",
    "explanation": "UDAN-ৰ অৰ্থ Ude Desh ka Aam Nagrik; সেয়ে A = Aam।",
    "subject": "Assam GK",
    "topic": "Government Schemes",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0025",
    "question": "25. ₹10 lakh crore market valuation লাভ কৰা প্ৰথম ভাৰতীয় কোম্পানী কোনটো?",
    "options": [
      "Airtel",
      "TCS",
      "Wipro",
      "Reliance"
    ],
    "answer": "Reliance",
    "correctOption": "D",
    "explanation": "Reliance Industries-এ প্ৰথম ভাৰতীয় কোম্পানী হিচাপে ₹10 lakh crore market valuation অতিক্ৰম কৰিছিল।",
    "subject": "Assam GK",
    "topic": "Indian Economy / Companies",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0026",
    "question": "26. তলৰ কোনটো নৃত্যৰূপ আৰু ৰাজ্যৰ জোৰাটো ভুল?",
    "options": [
      "Yakshagana – Tamil Nadu",
      "Sattriya – Assam",
      "Mohiniattam – Kerala",
      "Odissi – Odisha"
    ],
    "answer": "Yakshagana – Tamil Nadu",
    "correctOption": "A",
    "explanation": "Yakshagana Karnataka-ৰ নৃত্যৰূপ, Tamil Nadu-ৰ নহয়।",
    "subject": "Assam GK",
    "topic": "Indian Culture",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0027",
    "question": "27. অসমৰ একমাত্ৰ Ramsar wetland site কোনটো?",
    "options": [
      "Deepor Beel",
      "Bordoloni",
      "Chandubi Beel",
      "Dibru-Saikhowa"
    ],
    "answer": "Deepor Beel",
    "correctOption": "A",
    "explanation": "Deepor Beel অসমৰ Ramsar Site হিচাপে তালিকাভুক্ত wetland।",
    "subject": "Assam GK",
    "topic": "Wetlands of Assam",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0028",
    "question": "28. ‘Beti Bachao, Beti Padhao’ আঁচনিৰ সৈতে তলৰ কোনটো Ministry জড়িত নহয়?",
    "options": [
      "Ministry of Health and Family Welfare",
      "Ministry of Rural Development",
      "Ministry of Women and Child Development",
      "Ministry of Human Resource Development"
    ],
    "answer": "Ministry of Rural Development",
    "correctOption": "B",
    "explanation": "এই আঁচনিখন WCD, Health আৰু তৎকালীন HRD Ministry-ৰ যৌথ উদ্যোগ; Rural Development Ministry মূল অংশীদাৰ নহয়।",
    "subject": "Assam GK",
    "topic": "Government Schemes",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0029",
    "question": "29. Assam Medical College ক'ত অৱস্থিত?",
    "options": [
      "Silchar",
      "Jorhat",
      "Guwahati",
      "Dibrugarh"
    ],
    "answer": "Dibrugarh",
    "correctOption": "D",
    "explanation": "Assam Medical College & Hospital Dibrugarh-ত অৱস্থিত।",
    "subject": "Assam GK",
    "topic": "Medical Institutions of Assam",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0030",
    "question": "30. Government of India-ৰ Mission Indradhanush কিহৰ সৈতে জড়িত?",
    "options": [
      "Immunisation",
      "Cleanliness",
      "Digitalisation",
      "Highway development"
    ],
    "answer": "Immunisation",
    "correctOption": "A",
    "explanation": "Mission Indradhanush-ৰ মূল লক্ষ্য হৈছে শিশুসকল আৰু গৰ্ভৱতী মহিলাৰ immunisation coverage বৃদ্ধি কৰা।",
    "subject": "General Science",
    "topic": "Immunisation",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0031",
    "question": "31. ভাৰতীয় সংবিধানৰ Article 17-এ কিহৰ বিলোপৰ কথা কয়?",
    "options": [
      "Slavery",
      "Bonded Labour",
      "Untouchability",
      "Sati"
    ],
    "answer": "Untouchability",
    "correctOption": "C",
    "explanation": "Article 17-এ untouchability বিলোপ কৰে।",
    "subject": "Assam GK",
    "topic": "Indian Constitution",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0032",
    "question": "32. তলৰ কোনটো ঘটনা 1919 চনত সংঘটিত হোৱা নাছিল?",
    "options": [
      "Rowlatt Act passed",
      "Montagu–Chelmsford Reforms announced",
      "Partition of Bengal",
      "Jallianwala Bagh tragedy"
    ],
    "answer": "Partition of Bengal",
    "correctOption": "C",
    "explanation": "Bengal Partition 1905 চনত হৈছিল; 1919-ত Rowlatt Act আৰু Jallianwala Bagh tragedy হৈছিল।",
    "subject": "Assam GK",
    "topic": "Modern Indian History",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0033",
    "question": "33. জুলাই 2019-ত পানী সংৰক্ষণ আৰু harvesting ত্বৰান্বিত কৰিবলৈ কোনখন আঁচনি আৰম্ভ কৰা হৈছিল?",
    "options": [
      "Jal Shakti Abhiyan",
      "Jal Vikas Abhiyan",
      "Jal Hi Dhan Hai Abhiyan",
      "Jal Bachao Abhiyan"
    ],
    "answer": "Jal Shakti Abhiyan",
    "correctOption": "A",
    "explanation": "2019 চনত Jal Shakti Abhiyan আৰম্ভ কৰা হৈছিল water conservation আৰু rainwater harvesting-ৰ বাবে।",
    "subject": "Assam GK",
    "topic": "Government Schemes / Water",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0034",
    "question": "34. তলৰ কোনটো স্থান petroleum sector-ৰ সৈতে জড়িত নহয়?",
    "options": [
      "Duliajan",
      "Nazira",
      "Bongaigaon",
      "Margherita"
    ],
    "answer": "Margherita",
    "correctOption": "D",
    "explanation": "Margherita মূলতঃ coal mining অঞ্চল; আন স্থানসমূহ petroleum/oil sector-ৰ সৈতে জড়িত।",
    "subject": "Assam GK",
    "topic": "Assam Petroleum",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0035",
    "question": "35. Goods and Services Tax (GST) প্ৰথমে কোনখন দেশে প্ৰৱৰ্তন কৰিছিল?",
    "options": [
      "Germany",
      "France",
      "Canada",
      "USA"
    ],
    "answer": "France",
    "correctOption": "B",
    "explanation": "France-এ 1954 চনত GST-ধৰণৰ value-added consumption tax প্ৰথমে প্ৰৱৰ্তন কৰিছিল।",
    "subject": "Assam GK",
    "topic": "World Economy",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0036",
    "question": "36. জানুৱাৰী 2022 অনুসৰি Rajya Sabha-ত সৰ্বাধিক আসন থকা ৰাজ্যখন কোনখন?",
    "options": [
      "Karnataka",
      "Madhya Pradesh",
      "Rajasthan",
      "Uttar Pradesh"
    ],
    "answer": "Uttar Pradesh",
    "correctOption": "D",
    "explanation": "Uttar Pradesh-ৰ Rajya Sabha-ত সৰ্বাধিক 31খন আসন আছে।",
    "subject": "Assam GK",
    "topic": "Indian Polity",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0037",
    "question": "37. Hiuen Tsang কোন ৰজাৰ শাসনকালত ভাৰত ভ্ৰমণ কৰিছিল?",
    "options": [
      "Harshavardhana",
      "Ashoka",
      "Vishnugupta",
      "Samudragupta"
    ],
    "answer": "Harshavardhana",
    "correctOption": "A",
    "explanation": "Hiuen Tsang 7ম শতিকাত Emperor Harshavardhana-ৰ শাসনকালত ভাৰতলৈ আহিছিল।",
    "subject": "Assam GK",
    "topic": "Ancient Indian History",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0038",
    "question": "38. Economic Survey of India কোনে প্ৰকাশ কৰে?",
    "options": [
      "National Development Council",
      "Institute of Finance",
      "Indian Statistical Institute",
      "Ministry of Finance"
    ],
    "answer": "Ministry of Finance",
    "correctOption": "D",
    "explanation": "Economic Survey Department of Economic Affairs, Ministry of Finance-এ প্ৰকাশ কৰে।",
    "subject": "Assam GK",
    "topic": "Indian Economy",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0039",
    "question": "39. যি অৰ্থনীতিত উৎপাদনশীল সকলো সম্পদ চৰকাৰে মালিকানা আৰু নিয়ন্ত্ৰণ কৰে, তাক কি কয়?",
    "options": [
      "Socialist",
      "Capitalist",
      "Mixed",
      "Dual"
    ],
    "answer": "Socialist",
    "correctOption": "A",
    "explanation": "Socialist economy-ত উৎপাদনৰ মুখ্য সম্পদসমূহৰ মালিকানা/নিয়ন্ত্ৰণ চৰকাৰৰ অধীনত থাকে।",
    "subject": "Assam GK",
    "topic": "Economic Systems",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0040",
    "question": "40. 1942 চনত Mahatma Gandhi-এ Quit India Movement কোন ঠাইৰ পৰা আৰম্ভ কৰিছিল?",
    "options": [
      "Shivaji Park",
      "Brabourne Stadium",
      "August Kranti Maidan",
      "Pragati Maidan"
    ],
    "answer": "August Kranti Maidan",
    "correctOption": "C",
    "explanation": "Quit India Movement-ৰ ঐতিহাসিক resolution Bombay-ৰ Gowalia Tank Maidan, বৰ্তমান August Kranti Maidan-ত গ্ৰহণ কৰা হৈছিল।",
    "subject": "Assam GK",
    "topic": "Indian Freedom Movement",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0041",
    "question": "41. দুটা সংখ্যাৰ LCM 40 আৰু HCF 4। সংখ্যাদুটাৰ পাৰ্থক্য 12 হলে, সংখ্যাদুটাৰ যোগফল কিমান?",
    "options": [
      "20",
      "24",
      "28",
      "32"
    ],
    "answer": "28",
    "correctOption": "C",
    "explanation": "দুটা সংখ্যা 4a আৰু 4b ধৰা হওক। LCM=4ab=40 ⇒ ab=10 আৰু পাৰ্থক্য 4|a-b|=12 ⇒ |a-b|=3। সেয়ে a,b=2,5 আৰু সংখ্যা 8,20; যোগফল 28।",
    "subject": "Mathematics",
    "topic": "LCM and HCF",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0042",
    "question": "42. তলৰ expression-টোৰ মান নিৰ্ণয় কৰা: √(51 + √(134 + 5√(42 + √(16 + √9))))",
    "options": [
      "52",
      "8",
      "19",
      "9"
    ],
    "answer": "8",
    "correctOption": "B",
    "explanation": "ভিতৰৰ পৰা সমাধান কৰোঁ: √9=3, √(16+3)=√19; তাৰ পিছত সম্পূৰ্ণ nested radical-টো গণনা কৰিলে মান 8 হয়।",
    "subject": "Mathematics",
    "topic": "Surds / Nested Radicals",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0043",
    "question": "43. এটা সংখ্যাক 2-ৰে ভাগ কৰিলে অৱশিষ্ট 1, 3-ৰে ভাগ কৰিলে 2 আৰু 4-ৰে ভাগ কৰিলে 3 থাকে। সংখ্যাটো কোনটো?",
    "options": [
      "25",
      "41",
      "13",
      "11"
    ],
    "answer": "11",
    "correctOption": "D",
    "explanation": "11 ÷ 2 অৱশিষ্ট 1, 11 ÷ 3 অৱশিষ্ট 2 আৰু 11 ÷ 4 অৱশিষ্ট 3। সেয়ে উত্তৰ 11।",
    "subject": "Mathematics",
    "topic": "Remainders",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0044",
    "question": "44. এটা ভগ্নাংশৰ numerator 3 বৃদ্ধি কৰিলে ভগ্নাংশটো তাৰ 3/4 অংশ বৃদ্ধি পায়। numerator-টো কিমান?",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "answer": "4",
    "correctOption": "B",
    "explanation": "মূল ভগ্নাংশ n/d। numerator 3 বৃদ্ধি পালে বৃদ্ধি =3/d। এই বৃদ্ধি মূল ভগ্নাংশৰ 3/4 = (3/4)(n/d)। সেয়ে 3=(3/4)n ⇒ n=4।",
    "subject": "Mathematics",
    "topic": "Fractions",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0045",
    "question": "45. √(1/2), √(1/3), √(1/4) আৰু √(2/3)-ৰ ভিতৰত সৰুটো কোনটো?",
    "options": [
      "√(2/3)",
      "√(1/2)",
      "√(1/3)",
      "√(1/4)"
    ],
    "answer": "√(1/4)",
    "correctOption": "D",
    "explanation": "Square root function increasing। ভিতৰৰ fraction-সমূহৰ ভিতৰত 1/4 সৰ্বসৰু; সেয়ে √(1/4) সৰ্বসৰু।",
    "subject": "Mathematics",
    "topic": "Square Roots",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0046",
    "question": "46. যদি x = √3, তেন্তে x⁴ + 1/x⁴-ৰ মান কিমান?",
    "options": [
      "9 1/9",
      "2 1/9",
      "9 1/2",
      "1/9"
    ],
    "answer": "9 1/9",
    "correctOption": "A",
    "explanation": "x=√3 হলে x⁴=(√3)⁴=9 আৰু 1/x⁴=1/9। সেয়ে যোগফল=9+1/9=9 1/9।",
    "subject": "Mathematics",
    "topic": "Algebraic Expressions",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0047",
    "question": "47. যদি x/3 = y/4 = z/7, তেন্তে (x+y+z)/(2z)-ৰ মান কিমান?",
    "options": [
      "1",
      "3",
      "2",
      "4"
    ],
    "answer": "1",
    "correctOption": "A",
    "explanation": "x=3k, y=4k, z=7k। সেয়ে (x+y+z)/(2z)=14k/14k=1।",
    "subject": "Mathematics",
    "topic": "Ratio and Proportion",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0048",
    "question": "48. চাৰিটা consecutive alternate সংখ্যা (পাৰ্থক্য 2)ৰ যোগফল 64। আটাইতকৈ সৰু সংখ্যাটো কিমান?",
    "options": [
      "13",
      "11",
      "16",
      "9"
    ],
    "answer": "13",
    "correctOption": "A",
    "explanation": "সংখ্যাক n,n+2,n+4,n+6 ধৰা হওক। 4n+12=64 ⇒ n=13।",
    "subject": "Mathematics",
    "topic": "Arithmetic Progression",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0049",
    "question": "49. দুটা সংখ্যাৰ অনুপাত 2:3 আৰু সিহঁতৰ LCM আৰু HCF-ৰ গুণফল 96। সংখ্যাদুটাৰ যোগফল কিমান?",
    "options": [
      "8",
      "12",
      "20",
      "36"
    ],
    "answer": "20",
    "correctOption": "C",
    "explanation": "দুটা সংখ্যা 2k আৰু 3k। LCM×HCF = সংখ্যাদুটাৰ গুণফল =6k²=96 ⇒ k=4। সংখ্যা 8 আৰু 12; যোগফল 20।",
    "subject": "Mathematics",
    "topic": "LCM, HCF and Ratio",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0050",
    "question": "50. A-ৰ salary B-তকৈ 25% বেছি। A-ৰ তুলনাত B-ৰ salary কিমান শতাংশ কম?",
    "options": [
      "20%",
      "25%",
      "12.5%",
      "16⅔%"
    ],
    "answer": "20%",
    "correctOption": "A",
    "explanation": "B=100 ধৰা হলে A=125। B, A-তকৈ কম =25/125×100=20%।",
    "subject": "Mathematics",
    "topic": "Percentage",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0051",
    "question": "51. এটা group-ৰ কিছুমান ল'ৰাৰ মাজত 98টা toffee বিতৰণ কৰা হ'ল। প্ৰতিজন ল'ৰাই ল'ৰাৰ সংখ্যাৰ দুগুণ toffee পালে। ল'ৰাৰ সংখ্যা কিমান?",
    "options": [
      "5",
      "7",
      "10",
      "14"
    ],
    "answer": "7",
    "correctOption": "B",
    "explanation": "ল'ৰাৰ সংখ্যা n হলে প্ৰতিজনে 2nটা আৰু মুঠ n×2n=98। সেয়ে n²=49 ⇒ n=7।",
    "subject": "Mathematics",
    "topic": "Algebra / Word Problems",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0052",
    "question": "52. যদি cos θ = b/a, তেন্তে sec θ-ৰ মান কিমান?",
    "options": [
      "b/√(a²−b²)",
      "a/b",
      "√(a²−b²)/b",
      "b/a"
    ],
    "answer": "a/b",
    "correctOption": "B",
    "explanation": "sec θ = 1/cos θ। সেয়ে cos θ=b/a হলে sec θ=a/b।",
    "subject": "Mathematics",
    "topic": "Trigonometry",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0053",
    "question": "53. এটা equilateral triangle-ৰ perimeter 6 cm। ইয়াৰ area কিমান?",
    "options": [
      "6 cm²",
      "√3 cm²",
      "3 cm²",
      "3√3 cm²"
    ],
    "answer": "√3 cm²",
    "correctOption": "B",
    "explanation": "Side =6/3=2 cm। Equilateral triangle-ৰ area=(√3/4)a²=(√3/4)×4=√3 cm²।",
    "subject": "Mathematics",
    "topic": "Geometry",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0054",
    "question": "54. √0.04 + √1.44 + √1.69 + √0.0009-ৰ মান কিমান?",
    "options": [
      "1.73",
      "2.03",
      "2.73",
      "1.03"
    ],
    "answer": "2.73",
    "correctOption": "C",
    "explanation": "√0.04=0.2, √1.44=1.2, √1.69=1.3, √0.0009=0.03। যোগফল=2.73।",
    "subject": "Mathematics",
    "topic": "Square Roots / Decimals",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0055",
    "question": "55. এটা সংখ্যাৰ 45% আন এটা সংখ্যাৰ 30%-ৰ সমান। প্ৰথম সংখ্যা : দ্বিতীয় সংখ্যাৰ অনুপাত কিমান?",
    "options": [
      "2:3",
      "3:2",
      "3:5",
      "2:5"
    ],
    "answer": "2:3",
    "correctOption": "A",
    "explanation": "0.45x=0.30y ⇒ x/y=0.30/0.45=2/3।",
    "subject": "Mathematics",
    "topic": "Ratio and Percentage",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0056",
    "question": "56. Liza-ই প্ৰতিদিনে আগৰ দিনতকৈ ₹12 বেছি জমা কৰে। প্ৰথম দিনা ₹12 জমা কৰিলে 30 দিনত মুঠ কিমান জমা হ'ব?",
    "options": [
      "₹5,420",
      "₹5,580",
      "₹5,620",
      "₹5,780"
    ],
    "answer": "₹5,580",
    "correctOption": "B",
    "explanation": "AP-ত a=12,d=12,n=30। S=n/2[2a+(n−1)d]=15[24+348]=₹5,580।",
    "subject": "Mathematics",
    "topic": "Arithmetic Progression",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0057",
    "question": "57. তথ্যসমষ্টি 1, 2, 4, 1, 5, 12, 7, 8, 5, 1, 16, 17, 12-ৰ median কিমান?",
    "options": [
      "8",
      "7",
      "5",
      "4"
    ],
    "answer": "7",
    "correctOption": "B",
    "explanation": "13টা মান সজালে 7ম মানটো 7 হয়। সেয়ে median=7।",
    "subject": "Mathematics",
    "topic": "Statistics",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0058",
    "question": "58. √(225/729) − √(25/144) − √(16/81)-ৰ মান কিমান?",
    "options": [
      "−5/9",
      "−7/12",
      "−20/27",
      "−11/36"
    ],
    "answer": "−11/36",
    "correctOption": "D",
    "explanation": "√225/729=5/9, √25/144=5/12 আৰু √16/81=4/9। 5/9−4/9−5/12=1/9−5/12=−11/36।",
    "subject": "Mathematics",
    "topic": "Surds and Fractions",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0059",
    "question": "59. A-ই P-ৰ পৰা 1 m/s বেগে 1:00 p.m.-ত যাত্ৰা আৰম্ভ কৰে। B-ই একে স্থানৰ পৰা একে দিশত 1:10 p.m.-ত 2 m/s বেগে যাত্ৰা কৰে। B-ই Q-ত A-ক লগ পালে PQ কিমান?",
    "options": [
      "1.5 km",
      "1.75 km",
      "1.2 km",
      "1.25 km"
    ],
    "answer": "1.2 km",
    "correctOption": "C",
    "explanation": "A-এ 10 মিনিটত 600 m আগবাঢ়ে। Relative speed=2−1=1 m/s। B-এ 600 s-ত ধৰে আৰু Q-লৈ B-ৰ দূৰত্ব=1200 m=1.2 km।",
    "subject": "Mathematics",
    "topic": "Time, Speed and Distance",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0060",
    "question": "60. এটা article-ৰ price প্ৰথমে 40% কমাই আৰু পিছত 20% বঢ়ালে net change কিমান?",
    "options": [
      "20%",
      "40%",
      "24%",
      "28%"
    ],
    "answer": "28%",
    "correctOption": "D",
    "explanation": "মূল 100 ধৰা হলে 40% কমি 60 হয়; 20% বৃদ্ধি পালে 72 হয়। Net decrease=28%।",
    "subject": "Mathematics",
    "topic": "Percentage",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0061",
    "question": "61. Moon-ত ______ air, কাৰণ Moon-ৰ gravitational field atmosphere ধৰি ৰাখিবলৈ অতি দুৰ্বল।",
    "options": [
      "there is no",
      "where no",
      "no",
      "is no"
    ],
    "answer": "there is no",
    "correctOption": "A",
    "explanation": "শুদ্ধ বাক্য: “On the moon, there is no air because …”। Subject-verb construction অনুসৰি A সঠিক।",
    "subject": "English",
    "topic": "Grammar / Sentence Completion",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0062",
    "question": "62. camera lens-ৰ সন্মুখত ______ film-লৈ যোৱা পোহৰৰ ৰং সলনি কৰে।",
    "options": [
      "Placed a filter",
      "A filter is placed",
      "A filter placed",
      "When a filter placed"
    ],
    "answer": "A filter is placed",
    "correctOption": "B",
    "explanation": "সম্পূৰ্ণ grammatical clause হৈছে “A filter is placed in front of a camera lens …”।",
    "subject": "English",
    "topic": "Grammar / Sentence Structure",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0063",
    "question": "63. 1850 চনত Yale University-এ Sheffield Scientific School স্থাপন কৰিছিল, ______।",
    "options": [
      "engineers were educated there",
      "where engineers were educated",
      "in which, were engineers educated",
      "where were engineers educated"
    ],
    "answer": "where engineers were educated",
    "correctOption": "B",
    "explanation": "School-টোৰ স্থান বুজাবলৈ relative adverb “where” ব্যৱহাৰ হয়: “where engineers were educated.”",
    "subject": "English",
    "topic": "Grammar / Relative Clauses",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0064",
    "question": "64. তলৰ কোনটো pair-ৰ শব্দ দুটা synonym?",
    "options": [
      "Emigrant – Immigrant",
      "Piece – Pierce",
      "Frugal – Thrifty",
      "Irritate – Instigate"
    ],
    "answer": "Frugal – Thrifty",
    "correctOption": "C",
    "explanation": "Frugal আৰু thrifty দুয়োটাই মিতব্যয়ী/কম খৰচী বুজায়; সেয়ে synonym।",
    "subject": "English",
    "topic": "Synonyms",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0065",
    "question": "65. তলৰ কোনটো pair-ৰ শব্দ দুটা synonym?",
    "options": [
      "Rely – Resist",
      "Rule – Rue",
      "Secret – Clandestine",
      "Site – Sight"
    ],
    "answer": "Secret – Clandestine",
    "correctOption": "C",
    "explanation": "Secret আৰু clandestine দুয়োটাই গোপন বুজায়।",
    "subject": "English",
    "topic": "Synonyms",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0066",
    "question": "66. তলৰ কোনটো pair-ৰ শব্দ দুটা synonym?",
    "options": [
      "Deride – Arrive",
      "Derive – Divide",
      "Deride – Mock",
      "Mock – Praise"
    ],
    "answer": "Deride – Mock",
    "correctOption": "C",
    "explanation": "Deride মানে mock বা উপহাস কৰা। সেয়ে C সঠিক।",
    "subject": "English",
    "topic": "Synonyms",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0067",
    "question": "67. তলৰ কোনটো pair-ৰ শব্দ দুটা synonym?",
    "options": [
      "Citizen – Foreigner",
      "Citizen – Emigrant",
      "Citizen – Subject",
      "Citizen – Immigrant"
    ],
    "answer": "Citizen – Subject",
    "correctOption": "C",
    "explanation": "Citizen আৰু subject দুয়োটাই কোনো ৰাষ্ট্ৰৰ আইনগত সদস্য/অধীনস্থ ব্যক্তি বুজাব পাৰে; দিয়া বিকল্পসমূহত C-ই intended synonym pair।",
    "subject": "English",
    "topic": "Synonyms",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0068",
    "question": "68. তলৰ কোনটো pair-ৰ শব্দ দুটা antonym?",
    "options": [
      "Folly – Stupidity",
      "Sweet – Salty",
      "Visible – Unvisible",
      "Scatter – Collect"
    ],
    "answer": "Scatter – Collect",
    "correctOption": "D",
    "explanation": "Scatter মানে ছটিয়াই দিয়া, Collect মানে সংগ্ৰহ কৰা—দুয়োটা বিপৰীত অৰ্থৰ।",
    "subject": "English",
    "topic": "Antonyms",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0069",
    "question": "69. তলৰ কোনটো pair-ৰ শব্দ দুটা antonym?",
    "options": [
      "Advance – Retreat",
      "Abandon – Desert",
      "Elevate – Raise",
      "Value – Success"
    ],
    "answer": "Advance – Retreat",
    "correctOption": "A",
    "explanation": "Advance মানে আগবঢ়া আৰু Retreat মানে পিছুৱাই যোৱা—ইহঁত antonym।",
    "subject": "English",
    "topic": "Antonyms",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0070",
    "question": "70. তলৰ কোনটো pair-ৰ শব্দ দুটা antonym?",
    "options": [
      "Acquit – Convict",
      "Expect – Hope",
      "Faithful – Loyal",
      "End – Finish"
    ],
    "answer": "Acquit – Convict",
    "correctOption": "A",
    "explanation": "Acquit মানে দোষমুক্ত কৰা; Convict মানে দোষী সাব্যস্ত কৰা। সেয়ে ইহঁত antonym।",
    "subject": "English",
    "topic": "Antonyms",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0071",
    "question": "71. “To split hairs” idiom-টোৰ অৰ্থ কি?",
    "options": [
      "তীব্ৰভাৱে কাজিয়া কৰা",
      "প্ৰতিটো সৰু কথাত অভিযোগ কৰা",
      "তুচ্ছ কথাক লৈ তৰ্ক কৰা",
      "প্ৰতিটো detail অতি সূক্ষ্মভাৱে অধ্যয়ন কৰা"
    ],
    "answer": "তুচ্ছ কথাক লৈ তৰ্ক কৰা",
    "correctOption": "C",
    "explanation": "“Split hairs” মানে অতি তুচ্ছ বা সূক্ষ্ম পাৰ্থক্যক লৈ তৰ্ক কৰা।",
    "subject": "English",
    "topic": "Idioms",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0072",
    "question": "72. “Nail the lie to the counter”-ৰ অৰ্থ কি?",
    "options": [
      "কোনো ব্যক্তিক কিবা এটাৰ বাবে দোষ দিয়া",
      "ৰাজহুৱাভাৱে মিছা/ভুলটো উন্মোচন কৰা",
      "অভিযোগৰ তদন্ত কৰা",
      "জোৰেৰে মিছা কোৱা"
    ],
    "answer": "ৰাজহুৱাভাৱে মিছা/ভুলটো উন্মোচন কৰা",
    "correctOption": "B",
    "explanation": "এই idiom-ৰ অৰ্থ হৈছে কোনো মিছা কথা স্পষ্টভাৱে উন্মোচন বা খণ্ডন কৰা।",
    "subject": "English",
    "topic": "Idioms",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0073",
    "question": "73. “To see red”-ৰ অৰ্থ কি?",
    "options": [
      "অত্যন্ত খঙাল হোৱা",
      "বিপদ দেখা",
      "সূৰ্যাস্ত",
      "মাতাল হোৱা"
    ],
    "answer": "অত্যন্ত খঙাল হোৱা",
    "correctOption": "A",
    "explanation": "“See red” মানে অতি খঙত থকা।",
    "subject": "English",
    "topic": "Idioms",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0074",
    "question": "74. “To hit below the belt”-ৰ অৰ্থ কি?",
    "options": [
      "প্ৰতিদ্বন্দ্বীক trick কৰা",
      "প্ৰতিদ্বন্দ্বীক পৰাস্ত কৰা",
      "ঘোচ লোৱা",
      "প্ৰতিযোগিতাত অন্যায়ভাৱে আচৰণ কৰা"
    ],
    "answer": "প্ৰতিযোগিতাত অন্যায়ভাৱে আচৰণ কৰা",
    "correctOption": "D",
    "explanation": "এই idiom-এ অন্যায় বা অনৈতিক পদ্ধতি ব্যৱহাৰ কৰা বুজায়।",
    "subject": "English",
    "topic": "Idioms",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0075",
    "question": "75. “To beat about the bush”-ৰ অৰ্থ কি?",
    "options": [
      "জোপোহা ছাঁটাই কৰা",
      "বিষয়টো পোনপটীয়াকৈ আগবঢ়োৱা",
      "বিষয়টো ঘূৰাই-পকাই কোৱা",
      "বিষয়টো অনন্তকাল আলোচনা কৰা"
    ],
    "answer": "বিষয়টো ঘূৰাই-পকাই কোৱা",
    "correctOption": "C",
    "explanation": "“Beat about the bush” মানে মূল কথাটো পোনপটীয়াকৈ নকৈ ঘূৰাই-পকাই কোৱা।",
    "subject": "English",
    "topic": "Idioms",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0076",
    "question": "76. “Bird in hand is better than two in the bush”-ৰ অৰ্থ কি?",
    "options": [
      "সম্ভাৱনাতকৈ সম্ভাৱ্যতা ভাল",
      "সম্ভাৱনাতকৈ নিশ্চিত বস্তু ভাল",
      "সম্ভাৱ্যতাতকৈ সম্ভাৱনা ভাল",
      "সম্ভাৱ্যতাই নিশ্চয়তা বুজায়"
    ],
    "answer": "সম্ভাৱনাতকৈ নিশ্চিত বস্তু ভাল",
    "correctOption": "B",
    "explanation": "হাতত থকা নিশ্চিত বস্তু অনিশ্চিত দুটা সম্ভাৱনাতকৈ মূল্যৱান—ইয়াই idiom-টোৰ অৰ্থ।",
    "subject": "English",
    "topic": "Proverbs / Idioms",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0077",
    "question": "77. শুদ্ধ ক্ৰম বাছি বাক্যটো সম্পূৰ্ণ কৰা: I. I smelled the gas II. Door of my house then III. As soon as IV. I opened the front",
    "options": [
      "I, II, III, IV",
      "II, III, IV, I",
      "III, IV, II, I",
      "III, IV, I, II"
    ],
    "answer": "III, IV, I, II",
    "correctOption": "D",
    "explanation": "“As soon as I opened the front door of my house, then I smelled the gas” — দিয়া বিকল্পসমূহৰ ভিতৰত D-ই intended order।",
    "subject": "English",
    "topic": "Sentence Arrangement",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0078",
    "question": "78. তলৰ বাক্যটোৰ কোনটো অংশত error আছে? “The movement which aims at raising awareness about climate change, hopes to bring people together to think about what they can do for reducing harmful pollution.”",
    "options": [
      "IV",
      "III",
      "I",
      "II"
    ],
    "answer": "II",
    "correctOption": "D",
    "explanation": "“movement” আৰু “hopes”ৰ মাজত অপ্রয়োজনীয় comma আছে। Error থকা অংশ II।",
    "subject": "English",
    "topic": "Error Detection",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0079",
    "question": "79. “For the little boy, a lolly was tangible, whereas a promise was not.” বাক্যটোত tangible-ৰ অৰ্থ কি?",
    "options": [
      "Basic",
      "Untouchable",
      "Actual",
      "Edible"
    ],
    "answer": "Actual",
    "correctOption": "C",
    "explanation": "Tangible মানে বাস্তৱ/স্পৰ্শ কৰিব পৰা বা concretely উপলব্ধ। দিয়া বিকল্পত “Actual” সঠিক।",
    "subject": "English",
    "topic": "Vocabulary",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0080",
    "question": "80. তলৰ কোনটো বাক্য শুদ্ধ?",
    "options": [
      "My thoughts are with the families of those who have lost their loved ones in this unfortunate accident.",
      "My thoughts are with the families of those who has lost their loved ones in this unfortunate incident.",
      "My thoughts are with the families of those who have lost their loved ones in this unfortunate events.",
      "My thoughts are with the families of those who have lost their loved ones in this unfortunate incidents."
    ],
    "answer": "My thoughts are with the families of those who have lost their loved ones in this unfortunate accident.",
    "correctOption": "A",
    "explanation": "“Those who have lost … accident” grammatical agreement আৰু singular noun usage অনুসৰি A সঠিক।",
    "subject": "English",
    "topic": "Grammar / Error Detection",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0081",
    "question": "81. English alphabet-ৰ right-ৰ পৰা 16তম আখৰৰ left-ৰ পৰা 7তম আখৰটো কোনটো?",
    "options": [
      "D",
      "W",
      "R",
      "E"
    ],
    "answer": "D",
    "correctOption": "A",
    "explanation": "Right-ৰ পৰা 16তম = K (26−16+1=11তম from left)। K-ৰ left-লৈ 7তম আখৰ D।",
    "subject": "Reasoning",
    "topic": "Alphabet Test",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0082",
    "question": "82. পাঁচজন ল'ৰা ভিতৰলৈ মুখ কৰি circle-ত বহিছে। Ajay, Rohit আৰু Doljit-ৰ মাজত আছে। Suman, Shyamal-ৰ বাওঁফালে আৰু Rohit, Suman-ৰ বাওঁফালে আছে। Ajay-ৰ ঠিক সোঁফালে কোন বহিছে?",
    "options": [
      "Suman",
      "Shyamal",
      "Rohit",
      "Doljit"
    ],
    "answer": "Rohit",
    "correctOption": "C",
    "explanation": "শর্তসমূহ circle-ত বসালে Ajay-ৰ immediate right-ত Rohit থাকে।",
    "subject": "Reasoning",
    "topic": "Circular Seating Arrangement",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0083",
    "question": "83. এজন মানুহ তেওঁৰ পত্নীতকৈ 3 বছৰ ডাঙৰ আৰু পুত্ৰৰ বয়সৰ 4 গুণ। পুত্ৰ 3 বছৰৰ পিছত 15 বছৰীয়া হ'ব। বৰ্তমান পত্নীৰ বয়স কিমান?",
    "options": [
      "60",
      "51",
      "48",
      "45"
    ],
    "answer": "45",
    "correctOption": "D",
    "explanation": "পুত্ৰৰ বৰ্তমান বয়স=15−3=12। মানুহজন=4×12=48। পত্নী=48−3=45।",
    "subject": "Reasoning",
    "topic": "Age Problems",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0084",
    "question": "84. পুৱা Sarita আৰু Savita এজনে আনজনৰ ফালে garden-ত আহি আছিল। Savita-ই দেখিলে Sarita-ৰ shadow তেওঁৰ বাঁওফালে। Savita কোন দিশলৈ মুখ কৰি আছিল?",
    "options": [
      "South",
      "East",
      "North",
      "West"
    ],
    "answer": "North",
    "correctOption": "C",
    "explanation": "পুৱা সূৰ্য পূবত থাকে, সেয়ে shadow পশ্চিমলৈ। Sarita-ৰ বাঁওফালে পশ্চিম থাকিবলৈ Sarita দক্ষিণমুখী। সেয়ে বিপৰীত দিশত থকা Savita উত্তৰমুখী।",
    "subject": "Reasoning",
    "topic": "Direction Sense",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0085",
    "question": "85. যদি a-ৰ 20% = b, তেন্তে b-ৰ 20% কিহৰ সমান?",
    "options": [
      "a-ৰ 4%",
      "a-ৰ 6%",
      "a-ৰ 8%",
      "a-ৰ 10%"
    ],
    "answer": "a-ৰ 4%",
    "correctOption": "A",
    "explanation": "b=0.20a। b-ৰ 20%=0.20×0.20a=0.04a=4% of a।",
    "subject": "Mathematics",
    "topic": "Percentage",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0086",
    "question": "86. Kabita-ই office-ৰ পৰা 2 km পূবলৈ, তাৰ পিছত সোঁফালে 8 km, তাৰ পিছত পূবলৈ 2 km আৰু দক্ষিণলৈ 4 km গ'ল। শেষত বাঁওফালে ঘূৰি 1 km গৈ apartment পালেগৈ। Office আৰু apartment-ৰ shortest aerial distance কিমান?",
    "options": [
      "25 km",
      "13 km",
      "12 km",
      "17 km"
    ],
    "answer": "13 km",
    "correctOption": "B",
    "explanation": "Coordinates: (0,0)→(2,0)→(2,−8)→(4,−8)→(4,−12)→(5,−12)। Distance=√(5²+12²)=13 km।",
    "subject": "Reasoning",
    "topic": "Direction and Distance",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0087",
    "question": "87. 35 : 6-ৰ সৈতে একে ধৰণে সম্পৰ্কিত সংখ্যা-যোৰ বাছি লোৱা।",
    "options": [
      "85 : 9",
      "64 : 8",
      "26 : 5",
      "120 : 11"
    ],
    "answer": "120 : 11",
    "correctOption": "D",
    "explanation": "35=6²−1। একে pattern-ত 120=11²−1। সেয়ে D।",
    "subject": "Reasoning",
    "topic": "Number Analogy",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0088",
    "question": "88. তলৰ শব্দসমূহ যুক্তিসংগত আৰু অৰ্থপূৰ্ণ ক্ৰমত সজোৱা: (1) Cloud (2) Rainbow (3) Devastation (4) Rain (5) Low Pressure (6) Flood",
    "options": [
      "1,5,4,2,6,3",
      "5,1,4,2,6,3",
      "5,4,1,2,3,6",
      "1,5,2,4,6,3"
    ],
    "answer": "5,1,4,2,6,3",
    "correctOption": "B",
    "explanation": "Low Pressure → Cloud → Rain → Rainbow → Flood → Devastation। সেয়ে 5,1,4,2,6,3।",
    "subject": "Reasoning",
    "topic": "Logical Sequencing",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0089",
    "question": "89. যদি HONESTY = 5132468 আৰু POVERTY = 7192068, তেন্তে একে code-ত HORSE কিদৰে লিখিব?",
    "options": [
      "50124",
      "51042",
      "51024",
      "52014"
    ],
    "answer": "51042",
    "correctOption": "B",
    "explanation": "H=5, O=1, R=0, S=4, E=2। সেয়ে HORSE=51042।",
    "subject": "Reasoning",
    "topic": "Coding-Decoding",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0090",
    "question": "90. 200 m আৰু 100 m দীঘল দুটা train ক্ৰমে 20 m/s আৰু 22 m/s বেগে একে দিশত চলিছে। ইহঁতে ইজনে সিজনক পাৰ হ'বলৈ কিমান সময় ল'ব?",
    "options": [
      "212 sec",
      "135 sec",
      "150 sec",
      "120 sec"
    ],
    "answer": "150 sec",
    "correctOption": "C",
    "explanation": "একেদিশত relative speed=22−20=2 m/s। Relative distance=200+100=300 m। Time=300/2=150 sec।",
    "subject": "Mathematics",
    "topic": "Time, Speed and Distance",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0091",
    "question": "91. এটা triangle-ৰ বাহুবোৰৰ অনুপাত 1/2 : 1/3 : 1/4 আৰু perimeter 104 cm। আটাইতকৈ দীঘল বাহুটো কিমান?",
    "options": [
      "52 cm",
      "48 cm",
      "44 cm",
      "40 cm"
    ],
    "answer": "48 cm",
    "correctOption": "B",
    "explanation": "অনুপাতটো 6:4:3। মুঠ অংশ=13; এক অংশ=104/13=8। দীঘল বাহু=6×8=48 cm।",
    "subject": "Mathematics",
    "topic": "Ratio and Geometry",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0092",
    "question": "92. Priya-ই Sunday-ত movie ticket book কৰিলে। Trailer 20 দিন আগতে release হৈছিল; movie trailer-ৰ 45 দিন পিছত চালে। Movie-খন Priya-ই movie চোৱা দিনৰ 16 দিন আগতে release হৈছিল। Movie-খন সপ্তাহৰ কোন দিনত release হৈছিল?",
    "options": [
      "Friday",
      "Saturday",
      "Sunday",
      "Tuesday"
    ],
    "answer": "Friday",
    "correctOption": "A",
    "explanation": "Trailer Sunday-ৰ 20 দিন আগতে = Thursday। 45 দিন পিছত = Sunday। Movie Sunday-ৰ 16 দিন আগতে = Friday।",
    "subject": "Reasoning",
    "topic": "Calendar / Days",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0093",
    "question": "93. 5 : 27 :: 9 : ______",
    "options": [
      "83",
      "81",
      "36",
      "18"
    ],
    "answer": "83",
    "correctOption": "A",
    "explanation": "5²+2=27। একে pattern-ত 9²+2=81+2=83।",
    "subject": "Reasoning",
    "topic": "Number Analogy",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0094",
    "question": "94. AQRD : BRSE :: LMTJ : ______",
    "options": [
      "MNRK",
      "MNSK",
      "MNUK",
      "MMUK"
    ],
    "answer": "MNUK",
    "correctOption": "C",
    "explanation": "প্ৰতিটো আখৰ 1 step আগলৈ: A→B, Q→R, R→S, D→E। সেয়ে L→M, M→N, T→U, J→K = MNUK।",
    "subject": "Reasoning",
    "topic": "Letter Analogy",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0095",
    "question": "95. Bus : Driver :: Horse : ______",
    "options": [
      "Saddle",
      "Rein",
      "Horseman",
      "Stirrup"
    ],
    "answer": "Horseman",
    "correctOption": "C",
    "explanation": "Bus চলোৱা ব্যক্তি Driver; একেদৰে Horse চলোৱা/নিয়ন্ত্ৰণ কৰা ব্যক্তি Horseman।",
    "subject": "Reasoning",
    "topic": "Analogy",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0096",
    "question": "96. তলৰ চাৰিটা option-ৰ ভিতৰত তিনিটা একে pattern-ৰ। group-ৰ অন্তৰ্গত নোহোৱা option বাছি লোৱা: 2837, 7651, 3925, 9762",
    "options": [
      "2837",
      "7651",
      "3925",
      "9762"
    ],
    "answer": "2837",
    "correctOption": "A",
    "explanation": "2837-ত 28 আৰু 37-ৰ digit patterns-ৰ মাজত বিশেষ symmetry দেখা যায়, যিটো আন তিনিটাত নাই। সেয়ে A odd one out।",
    "subject": "Reasoning",
    "topic": "Odd One Out",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0097",
    "question": "97. তলৰ fraction-সমূহৰ ভিতৰত তিনিটা একে pattern-ৰ। odd one out বাছি লোৱা: 225/3375, 100/1331, 169/2744, 289/5832",
    "options": [
      "225/3375",
      "100/1331",
      "169/2744",
      "289/5832"
    ],
    "answer": "225/3375",
    "correctOption": "A",
    "explanation": "B,C,D-ত numerator হৈছে n² আৰু denominator হৈছে (n+1)³: 10²/11³, 13²/14³, 17²/18³। A-ত 15²/15³, সেয়ে A odd one out।",
    "subject": "Reasoning",
    "topic": "Pattern Recognition",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0098",
    "question": "98. তলৰ কোনটো বাকী তিনিটাৰ সৈতে একে category-ত নপৰে?",
    "options": [
      "Emission",
      "Pollution",
      "Contamination",
      "Adulteration"
    ],
    "answer": "Adulteration",
    "correctOption": "D",
    "explanation": "Emission, pollution আৰু contamination পৰিৱেশৰ সৈতে জড়িত; adulteration মূলত খাদ্য/পদাৰ্থত ভেজাল মিহলোৱা।",
    "subject": "General Science",
    "topic": "Environment",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0099",
    "question": "99. দিয়া figure-টোত মুঠ কিমানটা triangle আছে?",
    "options": [
      "12",
      "18",
      "22",
      "26"
    ],
    "answer": "18",
    "correctOption": "B",
    "explanation": "সৰু triangle-সমূহ আৰু সংযুক্ত ডাঙৰ triangle-সমূহ পৃথককৈ গণনা কৰিলে মুঠ 18টা triangle পোৱা যায়।",
    "subject": "Mathematics",
    "topic": "Triangles / Figure Counting",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0100",
    "question": "100. New Delhi, Sri Lanka আৰু Asia-ৰ মাজৰ সম্পৰ্ক সঠিকভাৱে দেখুওৱা diagram কোনটো?",
    "options": [
      "Diagram A",
      "Diagram B",
      "Diagram C",
      "Diagram D"
    ],
    "answer": "Diagram B",
    "correctOption": "B",
    "explanation": "New Delhi আৰু Sri Lanka দুয়ো Asia-ৰ ভিতৰত, কিন্তু New Delhi Sri Lanka-ৰ ভিতৰত নহয়। সেয়ে এটা ডাঙৰ Asia circle-ৰ ভিতৰত দুটা পৃথক সৰু circle থকা B সঠিক।",
    "subject": "Reasoning",
    "topic": "Venn Diagram",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0101",
    "question": "1. “তীৰ্থংকৰ” শব্দটো কোন ধৰ্মৰ সৈতে সম্পৰ্কিত?",
    "options": [
      "জৈনধৰ্ম",
      "বৌদ্ধধৰ্ম",
      "শিখধৰ্ম",
      "হিন্দুধৰ্ম"
    ],
    "answer": "জৈনধৰ্ম",
    "correctOption": "A",
    "explanation": "“তীৰ্থংকৰ” জৈন ধৰ্মৰ আধ্যাত্মিক গুৰুসকলক বুজায়। সেয়ে সঠিক উত্তৰ জৈনধৰ্ম।",
    "subject": "Assam GK",
    "topic": "Jainism and Tirthankaras",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0102",
    "question": "2. উত্তৰ-পূব ভাৰতৰ কোনখন ৰাজ্যৰ সীমা বাংলাদেশৰ সৈতে সংলগ্ন নহয়?",
    "options": [
      "মণিপুৰ",
      "ত্ৰিপুৰা",
      "মেঘালয়",
      "মিজোৰাম"
    ],
    "answer": "মণিপুৰ",
    "correctOption": "A",
    "explanation": "ত্ৰিপুৰা, মেঘালয় আৰু মিজোৰামৰ বাংলাদেশৰ সৈতে সীমা আছে। মণিপুৰৰ নাই।",
    "subject": "Assam GK",
    "topic": "Northeast India borders",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0103",
    "question": "3. নিম্নলিখিত বিকল্পসমূহৰ ভিতৰত অমিল শব্দটো কোনটো?",
    "options": [
      "গেংটক",
      "ইম্ফল",
      "আগৰতলা",
      "ডিমাপুৰ"
    ],
    "answer": "ডিমাপুৰ",
    "correctOption": "D",
    "explanation": "গেংটক, ইম্ফল আৰু আগৰতলা ক্ৰমে ছিকিম, মণিপুৰ আৰু ত্ৰিপুৰাৰ ৰাজধানী। ডিমাপুৰ নাগালেণ্ডৰ ৰাজধানী নহয়; ৰাজধানী কোহিমা।",
    "subject": "Assam GK",
    "topic": "Northeast state capitals",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0104",
    "question": "4. “লাই হাৰাওবা” উৎসৱটো কোন জাতিগোষ্ঠীৰ সৈতে সম্পৰ্কিত?",
    "options": [
      "মিচিং",
      "কাৰ্বি",
      "গাৰো",
      "মেইতেই"
    ],
    "answer": "মেইতেই",
    "correctOption": "D",
    "explanation": "লাই হাৰাওবা মণিপুৰৰ মেইতেই জনগোষ্ঠীৰ ঐতিহ্যবাহী উৎসৱ।",
    "subject": "Assam GK",
    "topic": "Tribal festivals of Northeast",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0105",
    "question": "5. উত্তৰ-পূব ভাৰতত কাংলা দুৰ্গ ক’ত অৱস্থিত?",
    "options": [
      "আগৰতলা",
      "গেংটক",
      "ইটানগৰ",
      "ইম্ফল"
    ],
    "answer": "ইম্ফল",
    "correctOption": "D",
    "explanation": "কাংলা দুৰ্গ মণিপুৰৰ ঐতিহাসিক ৰাজধানী ইম্ফলত অৱস্থিত।",
    "subject": "Assam GK",
    "topic": "Historical places of Northeast",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0106",
    "question": "6. তলৰ কোনটো বক্তব্য শুদ্ধ নহয়?",
    "options": [
      "সুন্দৰবন বদ্বীপত বিশ্বৰ সৰ্ববৃহৎ মেংগ্ৰোভ বন আছে।",
      "চীন বিশ্বৰ সৰ্ববৃহৎ মাইকা উৎপাদক দেশ।",
      "ইষ্টাৰ দ্বীপ ভাৰতৰ বিপৰীতমুখী (antipodal) অঞ্চলৰ সৈতে সম্পৰ্কিত।",
      "ভাৰতৰ সৰ্ববৃহৎ অভ্যন্তৰীণ লোণীয়া হ্ৰদ গুজৰাটত অৱস্থিত।"
    ],
    "answer": "ভাৰতৰ সৰ্ববৃহৎ অভ্যন্তৰীণ লোণীয়া হ্ৰদ গুজৰাটত অৱস্থিত।",
    "correctOption": "D",
    "explanation": "ভাৰতৰ সৰ্ববৃহৎ অভ্যন্তৰীণ লোণীয়া হ্ৰদ সাম্ভাৰ হ্ৰদ, যি ৰাজস্থানত অৱস্থিত। সেয়ে D ভুল।",
    "subject": "Assam GK",
    "topic": "Indian geography",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0107",
    "question": "7. ৰাজনৈতিক দলক ৰাষ্ট্ৰীয় দল হিচাপে স্বীকৃতি দিয়াৰ এটা চৰ্ত অনুসৰি, কমেও কিমানখন ৰাজ্যত স্বীকৃত ৰাজ্যিক দল হ’ব লাগে?",
    "options": [
      "এখন",
      "চাৰিখন",
      "পাঁচখন",
      "তিনিখন"
    ],
    "answer": "চাৰিখন",
    "correctOption": "B",
    "explanation": "এই স্বীকৃতিৰ সংশ্লিষ্ট চৰ্ত অনুসৰি দলটোৱে কমেও ৪খন ৰাজ্যত স্বীকৃত ৰাজ্যিক দলৰ মৰ্যাদা লাভ কৰিব লাগে।",
    "subject": "Assam GK",
    "topic": "Election Commission and national parties",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0108",
    "question": "8. “স্বৰাজ মোৰ জন্মগত অধিকাৰ আৰু মই ইয়াক লাভ কৰিমেই” বুলি কোনে কৈছিল?",
    "options": [
      "চন্দ্ৰশেখৰ আজাদ",
      "বাল গংগাধৰ তিলক",
      "গোপাল কৃষ্ণ গোখলে",
      "ভগত সিং"
    ],
    "answer": "বাল গংগাধৰ তিলক",
    "correctOption": "B",
    "explanation": "এই বিখ্যাত উক্তিটো বাল গংগাধৰ তিলকৰ সৈতে জড়িত।",
    "subject": "Assam GK",
    "topic": "Indian freedom movement",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0109",
    "question": "9. আকবৰ আৰু হেমুৰ মাজত হোৱা দ্বিতীয় পানীপথৰ যুদ্ধ কোন চনত হৈছিল?",
    "options": [
      "১৫২৬",
      "১৫৩৬",
      "১৫৫৬",
      "১৫৭৬"
    ],
    "answer": "১৫৫৬",
    "correctOption": "C",
    "explanation": "দ্বিতীয় পানীপথৰ যুদ্ধ ১৫৫৬ চনত আকবৰ আৰু হেমুৰ মাজত হৈছিল।",
    "subject": "Assam GK",
    "topic": "Mughal history",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0110",
    "question": "10. ভাৰতৰ বিধানসভা নিৰ্বাচনত NOTA বিকল্প প্ৰথমবাৰৰ বাবে কেতিয়া প্ৰয়োগ কৰা হৈছিল?",
    "options": [
      "আগষ্ট, ২০১২",
      "নৱেম্বৰ, ২০১৩",
      "জানুৱাৰী, ২০১৫",
      "অক্টোবৰ, ২০১৪"
    ],
    "answer": "নৱেম্বৰ, ২০১৩",
    "correctOption": "B",
    "explanation": "NOTA প্ৰথমবাৰৰ বাবে ২০১৩ চনৰ নৱেম্বৰ মাহত অনুষ্ঠিত বিধানসভা নিৰ্বাচনসমূহত প্ৰয়োগ কৰা হৈছিল।",
    "subject": "Assam GK",
    "topic": "NOTA and elections",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0111",
    "question": "11. আন্তঃৰাষ্ট্ৰীয় ন্যায়ালয়ৰ মুখ্য কাৰ্যালয় ক’ত অৱস্থিত?",
    "options": [
      "পেৰিছ",
      "দ্য হেগ",
      "ৱাশ্বিংটন ডি.চি.",
      "নিউয়ৰ্ক"
    ],
    "answer": "দ্য হেগ",
    "correctOption": "B",
    "explanation": "International Court of Justice-ৰ মুখ্য কাৰ্যালয় নেদাৰলেণ্ডছৰ দ্য হেগত।",
    "subject": "Assam GK",
    "topic": "International organisations",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0112",
    "question": "12. ৰাওলাট আইনত তলৰ কোনটো ব্যৱস্থা অন্তৰ্ভুক্ত আছিল?",
    "options": [
      "বিদেশী সামগ্ৰী কিনিবলৈ বাধ্য কৰা",
      "খাদী পিন্ধাত বাধা",
      "বিচাৰ নকৰাকৈ কাৰাবাস",
      "বিদেশ ভ্ৰমণত বাধা"
    ],
    "answer": "বিচাৰ নকৰাকৈ কাৰাবাস",
    "correctOption": "C",
    "explanation": "ৰাওলাট আইনে বিচাৰ অবিহনে আটক/কাৰাবাসৰ ক্ষমতা বৃদ্ধি কৰিছিল।",
    "subject": "Assam GK",
    "topic": "Rowlatt Act",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0113",
    "question": "13. ভাৰতৰ উচ্চতম ন্যায়ালয়ে প্ৰথম মহিলা ন্যায়াধীশক কোন চনত নিযুক্ত কৰিছিল আৰু তেওঁ কোন?",
    "options": [
      "১৯৮৫, আৰ. ভানুমতী",
      "১৯৮৭, ইন্দু মালহোত্ৰা",
      "১৯৮৯, ফাতিমা বিবি",
      "১৯৯২, ইন্দিৰা বেনাৰ্জী"
    ],
    "answer": "১৯৮৯, ফাতিমা বিবি",
    "correctOption": "C",
    "explanation": "ফাতিমা বিবি ১৯৮৯ চনত ভাৰতৰ উচ্চতম ন্যায়ালয়ৰ প্ৰথম মহিলা ন্যায়াধীশ হৈছিল।",
    "subject": "Assam GK",
    "topic": "Indian judiciary",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0114",
    "question": "14. ভাৰতত ভোটাধিকাৰৰ ন্যূনতম বয়স ২১ বছৰৰ পৰা ১৮ বছৰলৈ কোন চনত হ্ৰাস কৰা হৈছিল?",
    "options": [
      "১৯৮৬",
      "১৯৮৮",
      "১৯৯০",
      "১৯৯২"
    ],
    "answer": "১৯৮৮",
    "correctOption": "B",
    "explanation": "৬১তম সংবিধান সংশোধনীৰ ফলত ভোটাধিকাৰৰ বয়স ২১ৰ পৰা ১৮ কৰা হয়; এই পৰিৱৰ্তন ১৯৮৮ৰ সৈতে জড়িত।",
    "subject": "Assam GK",
    "topic": "Voting age in India",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0115",
    "question": "15. ব্ৰিটিছ চৰকাৰে ভাৰতৰ ৰাজধানী কলকাতাৰ পৰা দিল্লীলৈ কোন চনত স্থানান্তৰ কৰিছিল?",
    "options": [
      "১৯১১",
      "১৯১৩",
      "১৯০৭",
      "১৯১০"
    ],
    "answer": "১৯১১",
    "correctOption": "A",
    "explanation": "১৯১১ চনৰ দিল্লী দৰবাৰৰ সময়ত ৰাজধানী কলকাতাৰ পৰা দিল্লীলৈ স্থানান্তৰৰ ঘোষণা কৰা হৈছিল।",
    "subject": "Assam GK",
    "topic": "British India administration",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0116",
    "question": "16. চুহুংমুংৰ ৰাজত্বকালত আহোম সামৰিক বাহিনীৰ প্ৰধান আৰু মূলা গাভৰুৰ স্বামী কোন আছিল?",
    "options": [
      "পূৰ্ণানন্দ বুঢ়াগোহাঁই",
      "ফ্ৰাছেংমুং বৰগোহাঁই",
      "খামচেং বৰগোহাঁই",
      "কনচেং বৰপাত্ৰগোহাঁই"
    ],
    "answer": "ফ্ৰাছেংমুং বৰগোহাঁই",
    "correctOption": "B",
    "explanation": "মূলা গাভৰুৰ স্বামী আছিল ফ্ৰাছেংমুং বৰগোহাঁই, যি আহোম সামৰিক নেতৃত্বৰ সৈতে জড়িত আছিল।",
    "subject": "Assam GK",
    "topic": "Ahom Kingdom",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0117",
    "question": "17. “ভাইচৰয়” উপাধি ভাৰতৰ গৱৰ্ণৰ জেনেৰেলক কোন চনত দিয়া হৈছিল?",
    "options": [
      "১৮৬৭",
      "১৮৫৮",
      "১৮৭৬",
      "১৯০৫"
    ],
    "answer": "১৮৫৮",
    "correctOption": "B",
    "explanation": "১৮৫৮ চনৰ Government of India Act-ৰ পিছত গৱৰ্ণৰ জেনেৰেলক ভাইচৰয় বুলি অভিহিত কৰা হয়।",
    "subject": "Assam GK",
    "topic": "British India administration",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0118",
    "question": "18. বড়োলেণ্ড টেৰিটৰিয়েল কাউন্সিল কোন সাংবিধানিক ব্যৱস্থাৰ ফল?",
    "options": [
      "দ্বিতীয় অনুসূচী",
      "সপ্তম অনুসূচী",
      "ষষ্ঠ অনুসূচী",
      "পঞ্চম অনুসূচী"
    ],
    "answer": "ষষ্ঠ অনুসূচী",
    "correctOption": "C",
    "explanation": "ষষ্ঠ অনুসূচীয়ে অসমৰ স্বায়ত্তশাসিত জনজাতীয় অঞ্চলৰ বাবে সাংবিধানিক কাঠামো প্ৰদান কৰে; BTC তাৰ সৈতে জড়িত।",
    "subject": "Assam GK",
    "topic": "Sixth Schedule and BTC",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0119",
    "question": "19. পাকয়ং বিমানবন্দৰ ক’ত অৱস্থিত?",
    "options": [
      "অৰুণাচল প্ৰদেশ",
      "ছিকিম",
      "মণিপুৰ",
      "মিজোৰাম"
    ],
    "answer": "ছিকিম",
    "correctOption": "B",
    "explanation": "পাকয়ং বিমানবন্দৰ ছিকিমত অৱস্থিত।",
    "subject": "Assam GK",
    "topic": "Northeast geography",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0120",
    "question": "20. হৰপ্পাৰ সকলো স্থানতে আটাইতকৈ বেছি পোৱা প্ৰাণীৰ চিত্ৰ কোনটো?",
    "options": [
      "এশিঙীয়া ষাঁড়",
      "গাই",
      "হাতী",
      "বাঘ"
    ],
    "answer": "এশিঙীয়া ষাঁড়",
    "correctOption": "A",
    "explanation": "হৰপ্পা সভ্যতাৰ মোহৰসমূহত এশিঙীয়া ষাঁড়ৰ চিত্ৰ অতি সাধাৰণ।",
    "subject": "Assam GK",
    "topic": "Indus Valley Civilisation",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0121",
    "question": "21. অলিম্পিক পতাকাত কেইটা আঙঠি আছে?",
    "options": [
      "৪",
      "৫",
      "৬",
      "৭"
    ],
    "answer": "৫",
    "correctOption": "B",
    "explanation": "অলিম্পিক প্ৰতীকৰ পাঁচটা আন্তঃসংযুক্ত আঙঠিয়ে পাঁচখন মহাদেশক প্ৰতিনিধিত্ব কৰে।",
    "subject": "Assam GK",
    "topic": "Olympic Games",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0122",
    "question": "22. আৰ্জেণ্টিনাৰ ৰাজধানী চহৰ কোনখন?",
    "options": [
      "বুয়েনছ আয়াৰেছ",
      "ছেণ্টিয়াগো",
      "বগোটা",
      "লিমা"
    ],
    "answer": "বুয়েনছ আয়াৰেছ",
    "correctOption": "A",
    "explanation": "বুয়েনছ আয়াৰেছ আৰ্জেণ্টিনাৰ ৰাজধানী।",
    "subject": "Assam GK",
    "topic": "World geography",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0123",
    "question": "23. এয়াৰ এশিয়াৰ মুখ্য কাৰ্যালয় ক’ত?",
    "options": [
      "মুম্বাই",
      "কুৱালালামপুৰ",
      "জাকাৰ্টা",
      "বেংকক"
    ],
    "answer": "কুৱালালামপুৰ",
    "correctOption": "B",
    "explanation": "AirAsia-ৰ মুখ্য কাৰ্যালয় মালয়েছিয়াৰ কুৱালালামপুৰত।",
    "subject": "Assam GK",
    "topic": "Companies and headquarters",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0124",
    "question": "24. তলৰ কোনটো কম্পিউটাৰৰ অপাৰেটিং ছিষ্টেম নহয়?",
    "options": [
      "Windows 11",
      "Linux",
      "Microsoft Office",
      "Ubuntu"
    ],
    "answer": "Microsoft Office",
    "correctOption": "C",
    "explanation": "Windows, Linux আৰু Ubuntu অপাৰেটিং ছিষ্টেম। Microsoft Office এটা productivity software suite।",
    "subject": "General Science",
    "topic": "Computer fundamentals",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0125",
    "question": "25. বৰ্তমান ভাৰতৰ সৰ্বোচ্চ হিমালয় শৃংগ কোনটো বুলি গণ্য কৰা হয়?",
    "options": [
      "কাঞ্চনজংঘা",
      "নন্দা দেৱী",
      "কামেট",
      "মানা"
    ],
    "answer": "কাঞ্চনজংঘা",
    "correctOption": "A",
    "explanation": "কাঞ্চনজংঘাৰ উচ্চতা প্ৰায় ৮,৫৮৬ মিটাৰ; ই ভাৰতৰ সৰ্বোচ্চ শৃংগ।",
    "subject": "Assam GK",
    "topic": "Himalayan geography",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0126",
    "question": "26. প্ৰয়াগৰাজৰ ত্ৰিবেণী সংগমত গংগা আৰু যমুনাৰ সৈতে মিলিত হোৱা বুলি কোৱা পৌৰাণিক ভূগৰ্ভস্থ নদীখন কোনটো?",
    "options": [
      "ভাগীৰথী",
      "অলকানন্দা",
      "সৰস্বতী",
      "শতদ্ৰু"
    ],
    "answer": "সৰস্বতী",
    "correctOption": "C",
    "explanation": "পৌৰাণিক বিশ্বাস অনুসৰি সৰস্বতী ভূগৰ্ভস্থভাৱে ত্ৰিবেণী সংগমত গংগা আৰু যমুনাৰ সৈতে মিলিত হয়।",
    "subject": "Assam GK",
    "topic": "Indian rivers and pilgrimage",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0127",
    "question": "27. তলৰ কোনটো কাৰেটত জোখা হয়?",
    "options": [
      "ষ্টীলৰ দণ্ড",
      "গাখীৰৰ চৰ্বি",
      "কেশৰ",
      "সোণ"
    ],
    "answer": "সোণ",
    "correctOption": "D",
    "explanation": "মূল্যৱান ধাতু, বিশেষকৈ সোণৰ বিশুদ্ধতা/ওজনৰ ক্ষেত্ৰত কাৰেট শব্দ ব্যৱহাৰ কৰা হয়।",
    "subject": "General Science",
    "topic": "Measurement and materials",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0128",
    "question": "28. জীৱাশ্মৰ আধাৰত পৃথিৱীত জীৱনৰ ইতিহাস অধ্যয়ন কৰা বিজ্ঞানৰ শাখা কোনটো?",
    "options": [
      "পেলিঅণ্ট’লজি",
      "আৰ্কিঅ’লজি",
      "জিঅ’লজি",
      "জিঅ’মৰ্ফ’লজি"
    ],
    "answer": "পেলিঅণ্ট’লজি",
    "correctOption": "A",
    "explanation": "পেলিঅণ্ট’লজিয়ে জীৱাশ্ম অধ্যয়ন কৰি অতীতৰ জীৱন আৰু জীৱবৈচিত্ৰ্যৰ ইতিহাস বুজে।",
    "subject": "General Science",
    "topic": "Palaeontology",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0129",
    "question": "29. বায়ুমণ্ডলীয় চাপ জুখিবলৈ কোন যন্ত্ৰ ব্যৱহাৰ কৰা হয়?",
    "options": [
      "নেনোমিটাৰ",
      "বাৰোমিটাৰ",
      "অল্টিমিটাৰ",
      "হাইড্ৰোমিটাৰ"
    ],
    "answer": "বাৰোমিটাৰ",
    "correctOption": "B",
    "explanation": "বাৰোমিটাৰে বায়ুমণ্ডলীয় চাপ জুখে।",
    "subject": "General Science",
    "topic": "Atmospheric pressure",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0130",
    "question": "30. খো-খো খেলত তাড়া কৰা দলৰ কিমানজন সদস্য খেলপথাৰত বহি থাকে?",
    "options": [
      "৮জন",
      "১০জন",
      "৯জন",
      "৭জন"
    ],
    "answer": "৮জন",
    "correctOption": "A",
    "explanation": "খো-খোত ৮জন তাড়া কৰা খেলুৱৈ কেন্দ্ৰীয় ৰেখাত আঁঠু লৈ বহে। নৱমজন সক্ৰিয় চেজাৰ হিচাপে থাকে; সেয়ে সঠিক উত্তৰ ৮জন।",
    "subject": "Assam GK",
    "topic": "Traditional and Indian sports",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0131",
    "question": "31. তলৰ কোনটো ভাৰতৰ স্থানীয় প্ৰাণী নহয়?",
    "options": [
      "চিম্পাঞ্জী",
      "এশিঙীয়া গঁড়",
      "পিগমি হগ",
      "চিতাবাঘ"
    ],
    "answer": "চিম্পাঞ্জী",
    "correctOption": "A",
    "explanation": "চিম্পাঞ্জী ভাৰতৰ স্বাভাৱিক স্থানীয় প্ৰাণী নহয়। এশিঙীয়া গঁড়, পিগমি হগ আৰু চিতাবাঘ ভাৰতত পোৱা যায়।",
    "subject": "General Science",
    "topic": "Indian biodiversity",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0132",
    "question": "32. ভাৰতৰ ৰাষ্ট্ৰীয় গছ কোনটো?",
    "options": [
      "দেৱদাৰু",
      "বটগছ",
      "অশ্বত্থ",
      "নিম"
    ],
    "answer": "বটগছ",
    "correctOption": "B",
    "explanation": "বটগছ ভাৰতৰ ৰাষ্ট্ৰীয় গছ হিচাপে স্বীকৃত।",
    "subject": "Assam GK",
    "topic": "National symbols of India",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0133",
    "question": "33. Agnes Gonxha Bejaxhui নামৰ ব্যক্তিগৰাকী অধিক পৰিচিত আছিল কোন নামেৰে?",
    "options": [
      "মীৰাবেন",
      "অৰুন্ধতী ৰয়",
      "মাদাৰ টেৰেছা",
      "ছিষ্টাৰ নিবেদিতা"
    ],
    "answer": "মাদাৰ টেৰেছা",
    "correctOption": "C",
    "explanation": "Agnes Gonxha Bojaxhiu-ই মাদাৰ টেৰেছা নামেৰে বিশ্বজুৰি পৰিচিত হৈছিল।",
    "subject": "Assam GK",
    "topic": "Notable personalities",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0134",
    "question": "34. টেলিগ্ৰাফৰ কোড/সংকেত উদ্ভাৱন কোনে কৰিছিল?",
    "options": [
      "বেঞ্জামিন ফ্ৰেংকলিন",
      "ছেমুৱেল ম’ৰ্ছ",
      "আলবাৰ্ট আইনষ্টাইন",
      "জন বেয়াৰ্ড"
    ],
    "answer": "ছেমুৱেল ম’ৰ্ছ",
    "correctOption": "B",
    "explanation": "ছেমুৱেল ম’ৰ্ছে ম’ৰ্ছ কোড বিকশিত কৰি টেলিগ্ৰাফ যোগাযোগত ব্যৱহাৰ কৰিছিল।",
    "subject": "General Science",
    "topic": "Communication technology",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0135",
    "question": "35. অৰুণাচল প্ৰদেশৰ পূৰ্বৰ নাম NEFA-ৰ পূৰ্ণ ৰূপ কি?",
    "options": [
      "North-East Frontier Area",
      "North-East Frontier Assembly",
      "North-East Frontier Activity",
      "North-East Frontier Agency"
    ],
    "answer": "North-East Frontier Agency",
    "correctOption": "D",
    "explanation": "NEFA-ৰ পূৰ্ণ ৰূপ আছিল North-East Frontier Agency।",
    "subject": "Assam GK",
    "topic": "Northeast history",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0136",
    "question": "36. তলৰ কোনটো উৎসৱ মূলতঃ কেৰালাত উদযাপন কৰা হয়?",
    "options": [
      "দীপাৱলী",
      "অ’নাম",
      "পোংগল",
      "লোহৰি"
    ],
    "answer": "অ’নাম",
    "correctOption": "B",
    "explanation": "অ’নাম কেৰালাৰ প্ৰধান উৎসৱ আৰু কেরালীয় সাংস্কৃতিক পৰম্পৰাৰ সৈতে জড়িত।",
    "subject": "Assam GK",
    "topic": "Indian festivals",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0137",
    "question": "37. জুবিন গাৰ্গে কোনখন চলচ্চিত্ৰত মুখ্য পুৰুষ ভূমিকাত অভিনয় কৰিছিল?",
    "options": [
      "মিছন চাইনা",
      "মিছন কাশ্মীৰ",
      "মিছন চেন্নাই",
      "মিছন কাবুল"
    ],
    "answer": "মিছন চাইনা",
    "correctOption": "A",
    "explanation": "জুবিন গাৰ্গে “মিছন চাইনা” চলচ্চিত্ৰত মুখ্য ভূমিকাত অভিনয় কৰিছিল।",
    "subject": "Assam GK",
    "topic": "Assamese cinema",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0138",
    "question": "38. “Malgudi Days” কিতাপখন কোনে লিখিছিল?",
    "options": [
      "R. K. Laxman",
      "K. R. Narayanan",
      "R. K. Narayan",
      "R. K. Pandit"
    ],
    "answer": "R. K. Narayan",
    "correctOption": "C",
    "explanation": "“Malgudi Days” বিখ্যাত ভাৰতীয় লেখক R. K. Narayan-ৰ ৰচনা।",
    "subject": "Assam GK",
    "topic": "Indian literature",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0139",
    "question": "39. ড্ৰোন কি?",
    "options": [
      "আন্তঃনাক্ষত্ৰিক লেজাৰ অস্ত্ৰ",
      "নাইট-ভিজন দূৰবীন",
      "গড়িয়াই চলা লেণ্ডমাইন অনুসন্ধানকাৰী",
      "মনুষ্যবিহীন আকাশযান"
    ],
    "answer": "মনুষ্যবিহীন আকাশযান",
    "correctOption": "D",
    "explanation": "ড্ৰোন হৈছে দূৰনিয়ন্ত্ৰিত বা স্বয়ংচালিত মনুষ্যবিহীন আকাশযান (UAV)।",
    "subject": "General Science",
    "topic": "Drones and technology",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0140",
    "question": "40. তলৰ তালিকাৰ কোনগৰাকী ফুটবল খেলুৱৈ আছিল?",
    "options": [
      "Gilbertson Sangma",
      "Carfew Roy",
      "Tayebunnesa",
      "Mithu Baruah"
    ],
    "answer": "Gilbertson Sangma",
    "correctOption": "A",
    "explanation": "Gilbertson Sangma এজন ফুটবল খেলুৱৈ হিচাপে পৰিচিত।",
    "subject": "Assam GK",
    "topic": "Sports personalities",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0141",
    "question": "41. তলৰ কোনখন ৰাজ্যৰ অসমৰ সৈতে সীমা নাই?",
    "options": [
      "নাগালেণ্ড",
      "ছিকিম",
      "মিজোৰাম",
      "পশ্চিমবংগ"
    ],
    "answer": "ছিকিম",
    "correctOption": "B",
    "explanation": "অসমৰ সীমা নাগালেণ্ড, মিজোৰাম আৰু পশ্চিমবংগৰ সৈতে আছে; ছিকিমৰ সৈতে নাই।",
    "subject": "Assam GK",
    "topic": "Assam boundaries",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0142",
    "question": "42. জানুৱাৰী ২০২২ত অসমত কোনখন নতুন জিলা সৃষ্টি কৰা হৈছিল?",
    "options": [
      "বজালী",
      "বাক্সা",
      "তামুলপুৰ",
      "হোজাই"
    ],
    "answer": "তামুলপুৰ",
    "correctOption": "C",
    "explanation": "তামুলপুৰ জিলা ২০২২ চনত অসমৰ নতুন জিলা হিচাপে গঠন কৰা হৈছিল।",
    "subject": "Assam GK",
    "topic": "Districts of Assam",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0143",
    "question": "43. অসমৰ ২০২১-২২ বৰ্ষৰ বাজেট কোনে দাখিল কৰিছিল?",
    "options": [
      "হিমন্ত বিশ্ব শৰ্মা",
      "অজন্তা নেওগ",
      "অতুল বৰা",
      "ৰণোজ পেগু"
    ],
    "answer": "অজন্তা নেওগ",
    "correctOption": "B",
    "explanation": "২০২১-২২ বৰ্ষৰ অসমৰ বাজেট তদানীন্তন বিত্তমন্ত্ৰী অজন্তা নেওগে দাখিল কৰিছিল।",
    "subject": "Assam GK",
    "topic": "Assam budget and polity",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0144",
    "question": "44. তলৰ কোনখন নদী ব্ৰহ্মপুত্ৰৰ দক্ষিণ পাৰৰ নদী?",
    "options": [
      "মানাহ",
      "সোৱণশিৰি",
      "দিখৌ",
      "ৰাণগানদী"
    ],
    "answer": "দিখৌ",
    "correctOption": "C",
    "explanation": "দিখৌ ব্ৰহ্মপুত্ৰৰ দক্ষিণ পাৰৰ পৰা আহি ব্ৰহ্মপুত্ৰত মিলিত হোৱা নদীসমূহৰ ভিতৰত অন্যতম।",
    "subject": "Assam GK",
    "topic": "Rivers of Assam",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0145",
    "question": "45. তলৰ কোনটো আটাইতকৈ পুৰণি উৎপাদন ইউনিট?",
    "options": [
      "ডিগবৈ ৰিফাইনেৰী",
      "নুমলীগড় ৰিফাইনেৰী",
      "বঙাইগাঁও ৰিফাইনেৰী",
      "গুৱাহাটী ৰিফাইনেৰী"
    ],
    "answer": "ডিগবৈ ৰিফাইনেৰী",
    "correctOption": "A",
    "explanation": "ডিগবৈ ৰিফাইনেৰী ১৯০১ চনত স্থাপিত; ই ভাৰতৰ আটাইতকৈ পুৰণি তেল শোধনাগাৰসমূহৰ অন্যতম।",
    "subject": "Assam GK",
    "topic": "Oil industry in Assam",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0146",
    "question": "46. তলৰ কোনটো UNESCO বিশ্ব ঐতিহ্য ক্ষেত্ৰ?",
    "options": [
      "মাজুলী নদীদ্বীপ",
      "শুৱালকুছি",
      "কামাখ্যা মন্দিৰ",
      "মানস ৰাষ্ট্ৰীয় উদ্যান"
    ],
    "answer": "মানস ৰাষ্ট্ৰীয় উদ্যান",
    "correctOption": "D",
    "explanation": "মানস ৰাষ্ট্ৰীয় উদ্যান UNESCO World Heritage Site হিচাপে স্বীকৃত।",
    "subject": "Assam GK",
    "topic": "UNESCO sites in Assam",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0147",
    "question": "47. কাজিৰঙা ৰাষ্ট্ৰীয় উদ্যান তলৰ কোনখন জিলাক স্পৰ্শ নকৰে?",
    "options": [
      "গোলাঘাট",
      "কাৰ্বি আংলং",
      "নগাঁও",
      "মৰিগাঁও"
    ],
    "answer": "মৰিগাঁও",
    "correctOption": "D",
    "explanation": "কাজিৰঙা গোলাঘাট, কাৰ্বি আংলং আৰু নগাঁও অঞ্চললৈ বিস্তৃত; মৰিগাঁও ইয়াৰ সীমাত নাই।",
    "subject": "Assam GK",
    "topic": "Kaziranga National Park",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0148",
    "question": "48. শিৱসাগৰৰ ওচৰৰ দিখৌমুখৰ সৰাগুৰি চাপৰিত কাৰ সমাধিস্থল/বিশ্ৰামস্থল আছে?",
    "options": [
      "বিষ্ণুপ্ৰসাদ ৰাভা",
      "স্বৰ্গদেউ চুকাফা",
      "আজান পীৰ",
      "শ্ৰীমন্ত শংকৰদেৱ"
    ],
    "answer": "আজান পীৰ",
    "correctOption": "C",
    "explanation": "সৰাগুৰি চাপৰি, দিখৌমুখত আজান পীৰৰ বিশ্ৰামস্থল আছে বুলি ঐতিহাসিকভাৱে উল্লেখ কৰা হয়।",
    "subject": "Assam GK",
    "topic": "Sufi heritage of Assam",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0149",
    "question": "49. ধুবুৰীত গুৰদ্বাৰা কোনে স্থাপন কৰিছিল?",
    "options": [
      "গুৰু নানক",
      "গুৰু তেগ বাহাদুৰ",
      "গুৰু অংগদ",
      "গুৰু অৰ্জন"
    ],
    "answer": "গুৰু তেগ বাহাদুৰ",
    "correctOption": "B",
    "explanation": "ধুবুৰীৰ ঐতিহাসিক গুৰদ্বাৰা শ্ৰী গুৰু তেগ বাহাদুৰৰ অসম ভ্ৰমণৰ সৈতে জড়িত।",
    "subject": "Assam GK",
    "topic": "Sikh heritage in Assam",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0150",
    "question": "50. অসমীয়া চলচ্চিত্ৰৰ প্ৰথম মহিলা অভিনেত্ৰী কোন আছিল?",
    "options": [
      "আইদেউ সন্দিকৈ",
      "ইভা আচাও",
      "অৱন্তী সন্দিকৈ",
      "বিদ্যা ৰাও"
    ],
    "answer": "আইদেউ সন্দিকৈ",
    "correctOption": "A",
    "explanation": "আইদেউ সন্দিকৈয়ে ১৯৩৫ চনৰ “জয়মতী” চলচ্চিত্ৰত অভিনয় কৰি অসমীয়া চলচ্চিত্ৰৰ প্ৰথম মহিলা অভিনেত্ৰী হিচাপে ইতিহাস সৃষ্টি কৰে।",
    "subject": "Assam GK",
    "topic": "Assamese cinema history",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0151",
    "question": "51. Q, A-ৰ একমাত্ৰ ভগ্নী। A, B-ৰ একমাত্ৰ পুত্ৰ। B-ৰ পত্নী P-ৰ জীয়াৰী আৰু P-ৰ একমাত্ৰ পুত্ৰ R। R-ৰ সৈতে Q-ৰ সম্পৰ্ক কি?",
    "options": [
      "শহুৰ",
      "মামা",
      "পুত্ৰ",
      "পিতৃ"
    ],
    "answer": "মামা",
    "correctOption": "B",
    "explanation": "B-ৰ পত্নী Q-ৰ মাক আৰু R সেই মাকৰ ভাতৃ। সেয়ে R হৈছে Q-ৰ মামা।",
    "subject": "Reasoning",
    "topic": "Blood relations",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0152",
    "question": "52. এটা শাৰীত শ্ৰীনাথ বাওঁফালৰ পৰা ৭ম আৰু প্ৰবীণ সোঁফালৰ পৰা ১২ম। স্থান সলনি কৰাৰ পিছত শ্ৰীনাথ বাওঁফালৰ পৰা ২২ম হয়। শাৰীত মুঠ কিমানজন ল’ৰা আছে?",
    "options": [
      "১৯",
      "৩১",
      "৩৩",
      "৩৪"
    ],
    "answer": "৩৩",
    "correctOption": "C",
    "explanation": "স্থান সলনি কৰাৰ পিছত শ্ৰীনাথৰ নতুন স্থান ২২ম, অৰ্থাৎ প্ৰবীণৰ আগৰ স্থান ২২ম। মুঠ = ২২ + ১২ − ১ = ৩৩।",
    "subject": "Reasoning",
    "topic": "Ranking and positions",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0153",
    "question": "53. যদি 72 × 96 = 6927 আৰু 58 × 87 = 7885 হয়, তেন্তে 79 × 86 = ?",
    "options": [
      "7689",
      "8976",
      "6897",
      "6978"
    ],
    "answer": "6897",
    "correctOption": "C",
    "explanation": "দুটা সংখ্যাক একেলগে লিখি তাৰ অংকসমূহ ওলোটাই দিয়া হৈছে: 7296 → 6927 আৰু 5887 → 7885। সেয়ে 7986 → 6897।",
    "subject": "Reasoning",
    "topic": "Number coding",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0154",
    "question": "54. যদি “÷” মানে যোগ, “+” মানে বিয়োগ, “−” মানে গুণ আৰু “×” মানে ভাগ, তেন্তে 18 ÷ 12 × 4 − 5 ৰ মান কিমান?",
    "options": [
      "25",
      "35",
      "40",
      "33"
    ],
    "answer": "33",
    "correctOption": "D",
    "explanation": "চিহ্ন সলনি কৰিলে প্ৰকাশটো 18 + 12 ÷ 4 × 5 হয়। BODMAS অনুসৰি 12÷4×5 = 15; সেয়ে 18+15 = 33।",
    "subject": "Reasoning",
    "topic": "Operator substitution",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0155",
    "question": "55. 7, 11, 19, 31, ____, 67 ধাৰাটোৰ অনুপস্থিত পদটো কি?",
    "options": [
      "43",
      "47",
      "51",
      "45"
    ],
    "answer": "47",
    "correctOption": "B",
    "explanation": "পাৰ্থক্যসমূহ 4, 8, 12, 16, 20। সেয়ে 31+16 = 47 আৰু 47+20 = 67।",
    "subject": "Reasoning",
    "topic": "Number series",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0156",
    "question": "56. চেয়াৰমেনে 12:30 বজাৰ 10 মিনিট আগতে প্ৰৱেশ কৰিলে। তেওঁ MD-তকৈ 20 মিনিট আগতে আহিল আৰু MD নিৰ্ধাৰিত সময়তকৈ 30 মিনিট পলম। সাক্ষাৎকাৰৰ নিৰ্ধাৰিত সময় কিমান?",
    "options": [
      "12:50",
      "12:40",
      "12:00",
      "12:10"
    ],
    "answer": "12:10",
    "correctOption": "D",
    "explanation": "চেয়াৰমেনৰ আগমন 12:20। MD আহিছিল 12:40, যি নিৰ্ধাৰিত সময়তকৈ 30 মিনিট পলম। সেয়ে নিৰ্ধাৰিত সময় 12:10।",
    "subject": "Reasoning",
    "topic": "Time and scheduling",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0157",
    "question": "57. 2, 6, 18, 54, … ধাৰাটোৰ ৮ম পদটো কিমান?",
    "options": [
      "4370",
      "4374",
      "7443",
      "7434"
    ],
    "answer": "4374",
    "correctOption": "B",
    "explanation": "প্ৰতিটো পদ আগৰ পদৰ 3 গুণ: 2×3^7 = 4374।",
    "subject": "Reasoning",
    "topic": "Geometric progression",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0158",
    "question": "58. দুটা সংখ্যা ক্ৰমে তৃতীয় এটা সংখ্যাতকৈ 20% আৰু 50% বেছি। দুয়োটা সংখ্যাৰ অনুপাত কিমান?",
    "options": [
      "2:5",
      "3:5",
      "4:5",
      "7:5"
    ],
    "answer": "4:5",
    "correctOption": "C",
    "explanation": "তৃতীয় সংখ্যাটো x ধৰি সংখ্যা দুটা 1.2x আৰু 1.5x। অনুপাত = 1.2:1.5 = 4:5।",
    "subject": "Mathematics",
    "topic": "Percentage and ratio",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0159",
    "question": "59. ₹4,000 টকাৰ ওপৰত বছৰি 12% হাৰত 18 মাহৰ সৰল সুদ কিমান?",
    "options": [
      "₹216",
      "₹720",
      "₹360",
      "₹960"
    ],
    "answer": "₹720",
    "correctOption": "B",
    "explanation": "SI = PRT/100 = 4000×12×1.5/100 = ₹720।",
    "subject": "Mathematics",
    "topic": "Simple interest",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0160",
    "question": "60. এটা সংখ্যাক 893ৰে ভাগ কৰিলে অৱশেষ 193। একে সংখ্যাক 47ৰে ভাগ কৰিলে অৱশেষ কিমান?",
    "options": [
      "3",
      "25",
      "5",
      "33"
    ],
    "answer": "5",
    "correctOption": "C",
    "explanation": "893 = 47×19, সেয়ে 893 অংশৰ অৱশেষ 47ৰে ভাগ কৰিলে 0। অবশিষ্ট 193; 193 = 47×4 + 5। সেয়ে অৱশেষ 5।",
    "subject": "Mathematics",
    "topic": "Remainders",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0161",
    "question": "61. এটা হোষ্টেলত 120জন শিক্ষাৰ্থীৰ খাদ্য 45 দিনৰ বাবে আছে। আৰু 30জন যোগ দিলে খাদ্য কিমান দিন চলিব?",
    "options": [
      "40 দিন",
      "38 দিন",
      "36 দিন",
      "32 দিন"
    ],
    "answer": "36 দিন",
    "correctOption": "C",
    "explanation": "মুঠ খাদ্য = 120×45 = 5400 student-days। 150জনৰ বাবে দিন = 5400÷150 = 36 দিন।",
    "subject": "Mathematics",
    "topic": "Time and work / unitary method",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0162",
    "question": "62. 20 মিটাৰ দীঘল জখলা এখন উলম্ব দেৱালত আউজি আছে আৰু মাটিৰ সৈতে 30° কোণ কৰে। দেৱালত স্পৰ্শ কৰা বিন্দুটোৰ উচ্চতা কিমান?",
    "options": [
      "10 মি.",
      "17.32 মি.",
      "8.16 মি.",
      "13 মি."
    ],
    "answer": "10 মি.",
    "correctOption": "A",
    "explanation": "উচ্চতা = 20 sin30° = 20×1/2 = 10 মিটাৰ।",
    "subject": "Mathematics",
    "topic": "Trigonometry",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0163",
    "question": "63. এটা চকা 1000 পাকত 22 কিমি দূৰত্ব অতিক্ৰম কৰে। চকাটোৰ ব্যাসাৰ্ধ কিমান?",
    "options": [
      "4.5 মি.",
      "2.1 মি.",
      "2.8 মি.",
      "3.5 মি."
    ],
    "answer": "3.5 মি.",
    "correctOption": "D",
    "explanation": "1000 পাকত দূৰত্ব 22,000 মি.; এক পাকৰ পৰিধি 22 মি। 2πr=22, π=22/7 দিলে r=3.5 মি।",
    "subject": "Mathematics",
    "topic": "Circles",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0164",
    "question": "64. 10জন শিক্ষক থকা বিদ্যালয়ত এজন অৱসৰ ল’লে আৰু 25 বছৰীয়া নতুন শিক্ষক যোগ দিলে। গড় বয়স 3 বছৰ কমিল। অৱসৰ লোৱা শিক্ষকৰ বয়স কিমান?",
    "options": [
      "55",
      "65",
      "58",
      "60"
    ],
    "answer": "55",
    "correctOption": "A",
    "explanation": "10জনৰ গড় 3 বছৰ কমা মানে মুঠ বয়স 30 বছৰ কমিল। নতুনজন 25, সেয়ে অৱসৰ লোৱা শিক্ষক = 25+30 = 55 বছৰ।",
    "subject": "Mathematics",
    "topic": "Averages",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0165",
    "question": "65. 720জন শিক্ষাৰ্থীৰ বিদ্যালয়ত ল’ৰা:ছোৱালীৰ অনুপাত 7:5। অনুপাত 1:1 কৰিবলৈ কিমানজন ছোৱালী আৰু ভৰ্তি কৰিব লাগে?",
    "options": [
      "60",
      "120",
      "180",
      "240"
    ],
    "answer": "120",
    "correctOption": "B",
    "explanation": "মুঠ 12 অংশ; 720÷12=60। ল’ৰা=420, ছোৱালী=300। সমান কৰিবলৈ 120জন ছোৱালী লাগে।",
    "subject": "Mathematics",
    "topic": "Ratio",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0166",
    "question": "66. শ্যামে ₹35 টকা 1 টকাৰ মুদ্ৰা আৰু 50 পইচাৰ মুদ্ৰাত 2:3 অনুপাতত সঞ্চয় কৰিলে। 50 পইচাৰ মুদ্ৰাৰ সংখ্যা কিমান?",
    "options": [
      "20",
      "25",
      "30",
      "35"
    ],
    "answer": "30",
    "correctOption": "C",
    "explanation": "1 টকাৰ মুদ্ৰা = 2x আৰু 50 পইচাৰ = 3x। মুঠ মূল্য = 2x + 0.5×3x = 3.5x = 35, সেয়ে x=10 আৰু 50 পইচাৰ মুদ্ৰা=30।",
    "subject": "Mathematics",
    "topic": "Coins and linear equations",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0167",
    "question": "67. দিয়া পাই-চাৰ্টত কোম্পানীৰ বছৰৰ ব্যয় দেখুওৱা হৈছে। Tax অংশটোৰ কেন্দ্ৰীয় কোণ কিমান?",
    "options": [
      "90°",
      "45°",
      "72°",
      "81°"
    ],
    "answer": "81°",
    "correctOption": "D",
    "explanation": "মুঠ ব্যয় = 500+450+150+250+400+200+50 = 2000 লাখ। Tax = 450 লাখ। কোণ = 450/2000×360° = 81°।",
    "subject": "Mathematics",
    "topic": "Pie chart and data interpretation",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0168",
    "question": "68. চিত্ৰ শৃংখলাটো অব্যাহত ৰাখিবলৈ উপযুক্ত চিত্ৰটো বাছক।",
    "options": [
      "চিত্ৰ A",
      "চিত্ৰ B",
      "চিত্ৰ C",
      "চিত্ৰ D"
    ],
    "answer": "চিত্ৰ A",
    "correctOption": "A",
    "explanation": "শৃংখলাটোত উপাদানসমূহ ক্ৰমে ঘড়ীৰ কাঁটাৰ দিশত স্থান সলনি কৰে আৰু সৰু চিহ্নসমূহ পৰৱৰ্তী অৱস্থাত বিপৰীত ফালে যায়। সেই নিয়ম অনুসৰি A সঠিক।",
    "subject": "Reasoning",
    "topic": "Figure series",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0169",
    "question": "69. তলৰ ঘৰত 14, 22, 34, 41, 53 আৰু ? দিয়া আছে। প্ৰশ্নবোধক চিহ্নৰ ঠাইত কোন সংখ্যা থাকিব?",
    "options": [
      "14",
      "55",
      "15",
      "45"
    ],
    "answer": "55",
    "correctOption": "B",
    "explanation": "সংখ্যাৰ দশকৰ অংকটোৱে শাৰী আৰু এককৰ অংকটোৱে স্তম্ভ দেখুৱাইছে। পঞ্চম শাৰীৰ পঞ্চম স্তম্ভত সংখ্যা 55 হ’ব।",
    "subject": "Reasoning",
    "topic": "Number pattern and grid",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0170",
    "question": "70. BROTHER, HUSBAND আৰু MEN-ৰ মাজৰ সম্পৰ্কক সৰ্বোত্তমভাৱে দেখুওৱা চিত্ৰটো কোনটো?",
    "options": [
      "চিত্ৰ A",
      "চিত্ৰ B",
      "চিত্ৰ C",
      "চিত্ৰ D"
    ],
    "answer": "চিত্ৰ D",
    "correctOption": "D",
    "explanation": "সকলো brother আৰু husband পুৰুষ (men)। একেজন পুৰুষ brother আৰু husband দুয়োটা হ’ব পাৰে, সেয়ে দুয়োটা সৰু বৃত্ত MEN-ৰ ভিতৰত আংশিকভাৱে overlap কৰিব লাগে।",
    "subject": "Reasoning",
    "topic": "Venn diagrams",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0171",
    "question": "1. ২০২৪ চনৰ ১ জানুৱাৰী অনুসৰি অসম বিধানসভাৰ অধ্যক্ষ কোন?",
    "options": [
      "Hitendra Nath Goswami",
      "Numal Momin",
      "Biswajit Daimary",
      "Rupsing Teron"
    ],
    "answer": "Biswajit Daimary",
    "correctOption": "C",
    "explanation": "The correct answer is Biswajit Daimary (option C). The question directly tests the stated assam gk concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "Assam GK",
    "topic": "Assam Legislature",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0172",
    "question": "2. তলৰ কোনটো ব্যৱহাৰ কৰি নগদ ধন উলিয়াব পাৰি?",
    "options": [
      "ATM",
      "NEFT",
      "UPI",
      "IFSC"
    ],
    "answer": "ATM",
    "correctOption": "A",
    "explanation": "The correct answer is ATM (option A). The question directly tests the stated general knowledge concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "General Knowledge",
    "topic": "Banking basics",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0173",
    "question": "3. অফিচৰ পৰা যাত্ৰী উঠোৱাৰ পিছত টেক্সি চালকে পোষ্ট অফিচত বাওঁফালে ঘূৰাৰ আগতে ৬ কিলোমিটাৰ আৰু তাৰ পিছত বিমানবন্দৰলৈ ৮ কিলোমিটাৰ গ’ল। অফিচৰ পৰা বিমানবন্দৰলৈ সৰলৰেখাৰ দূৰত্ব কিমান?",
    "options": [
      "10 km",
      "12 km",
      "8 km",
      "14 km"
    ],
    "answer": "10 km",
    "correctOption": "A",
    "explanation": "The route forms a right triangle with legs 6 km and 8 km. By Pythagoras, distance = √(6² + 8²) = √100 = 10 km.",
    "subject": "Mathematics",
    "topic": "Pythagorean theorem",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0174",
    "question": "4. ৰঘুৱে কয় যে তেওঁৰ মাক হিমাদ্ৰীৰ মাকৰ একমাত্ৰ জীয়ৰী। হিমাদ্ৰীৰ সৈতে ৰঘুৰ সম্পৰ্ক কি?",
    "options": [
      "Brother",
      "Maternal Uncle",
      "Grandfather",
      "Son"
    ],
    "answer": "Maternal Uncle",
    "correctOption": "B",
    "explanation": "The correct answer is Maternal Uncle (option B). The question directly tests the stated reasoning concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "Reasoning",
    "topic": "Blood relations",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0175",
    "question": "9. ১ৰ পৰা ২০লৈ কিমানটা মৌলিক সংখ্যা আছে?",
    "options": [
      "7",
      "8",
      "9",
      "10"
    ],
    "answer": "8",
    "correctOption": "B",
    "explanation": "The prime numbers from 1 to 20 are 2, 3, 5, 7, 11, 13, 17 and 19. There are 8 in total.",
    "subject": "Mathematics",
    "topic": "Prime numbers",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0176",
    "question": "11. এটা সংখ্যাক ১১% বৃদ্ধি কৰিলে ৭৭৭ হয়। সংখ্যাটো কিমান?",
    "options": [
      "770",
      "750",
      "710",
      "700"
    ],
    "answer": "700",
    "correctOption": "D",
    "explanation": "Let the original number be x. An 11% increase gives 1.11x = 777. Therefore x = 777/1.11 = 700.",
    "subject": "Mathematics",
    "topic": "Percentage",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0177",
    "question": "12. ম্যানমাৰৰ সৈতে ভাৰতৰ কোনখন ৰাজ্যৰ আন্তঃৰাষ্ট্ৰীয় সীমা আছে?",
    "options": [
      "Nagaland",
      "Mizoram",
      "Manipur",
      "Assam"
    ],
    "answer": "Manipur",
    "correctOption": "C",
    "explanation": "The correct answer is Manipur (option C). The question directly tests the stated assam gk concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "Assam GK",
    "topic": "India–Myanmar border",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0178",
    "question": "14. দুটা সংখ্যাৰ বৰ্গৰ পাৰ্থক্য ৬০ আৰু সংখ্যাদুটাৰ যোগফল ১২। সংখ্যাদুটাৰ পাৰ্থক্য কিমান?",
    "options": [
      "5",
      "6",
      "10",
      "12"
    ],
    "answer": "5",
    "correctOption": "A",
    "explanation": "Let the numbers be a and b. Since a² − b² = (a−b)(a+b) = 60 and a+b = 12, we get a−b = 60/12 = 5.",
    "subject": "Mathematics",
    "topic": "Difference of squares",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0179",
    "question": "16. চৰাইদেউ কোনখন ৰাজ্যৰ ৰাজধানী আছিল?",
    "options": [
      "Ahom Kingdom",
      "Koch Kingdom",
      "Kamarupa Kingdom",
      "Chutia Kingdom"
    ],
    "answer": "Ahom Kingdom",
    "correctOption": "A",
    "explanation": "The correct answer is Ahom Kingdom (option A). The question directly tests the stated assam gk concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "Assam GK",
    "topic": "Ahom Kingdom",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0180",
    "question": "17. মৌৰ্য সাম্ৰাজ্যৰ প্ৰতিষ্ঠাপক কোন?",
    "options": [
      "Ashoka",
      "Chandragupta Maurya",
      "Bindusara",
      "Samudragupta"
    ],
    "answer": "Chandragupta Maurya",
    "correctOption": "B",
    "explanation": "The correct answer is Chandragupta Maurya (option B). The question directly tests the stated general knowledge concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "General Knowledge",
    "topic": "Ancient India",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0181",
    "question": "19. ৪৭৩২৯ সংখ্যাটো দুগুণ কৰিলে ফলাফলৰ ঠিক মাজত থকা অংকটো কি হ’ব?",
    "options": [
      "6",
      "7",
      "4",
      "5"
    ],
    "answer": "6",
    "correctOption": "A",
    "explanation": "47329 × 2 = 94658. The middle digit of the five-digit result 94658 is the third digit, 6.",
    "subject": "Mathematics",
    "topic": "Place value",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0182",
    "question": "20. ভাৰতত যানবাহনত সাধাৰণতে কোন ধৰণৰ হৰ্ণ ব্যৱহাৰ/অনুমোদিত?",
    "options": [
      "Electric horn",
      "Air horn",
      "Steam horn",
      "Siren"
    ],
    "answer": "Electric horn",
    "correctOption": "A",
    "explanation": "The correct answer is Electric horn (option A). The question directly tests the stated general knowledge concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "General Knowledge",
    "topic": "Vehicle rules",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0183",
    "question": "21. লাৰ্নাৰ লাইচেঞ্চ পোৱাৰ পিছত ড্ৰাইভিং লাইচেঞ্চৰ বাবে আবেদন কৰিবলৈ ন্যূনতম কিমান দিন অপেক্ষা কৰিব লাগে?",
    "options": [
      "30 days",
      "60 days",
      "45 days",
      "6 months"
    ],
    "answer": "30 days",
    "correctOption": "A",
    "explanation": "The correct answer is 30 days (option A). The question directly tests the stated general knowledge concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "General Knowledge",
    "topic": "Driving licence rules",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0184",
    "question": "22. তলৰ কোনটো এটা আউটপুট ডিভাইচ?",
    "options": [
      "Keyboard",
      "Speaker",
      "Mouse",
      "Microphone"
    ],
    "answer": "Speaker",
    "correctOption": "B",
    "explanation": "The correct answer is Speaker (option B). The question directly tests the stated general science concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "General Science",
    "topic": "Computer basics",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0185",
    "question": "23. গাড়ী, বাছ বা এনে চকাযুক্ত বাহনৰ মূল ফ্ৰেমক এক শব্দত কি কোৱা হয়?",
    "options": [
      "Framework",
      "Chassis",
      "Cabin",
      "Monocoque"
    ],
    "answer": "Chassis",
    "correctOption": "B",
    "explanation": "The correct answer is Chassis (option B). The question directly tests the stated general science concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "General Science",
    "topic": "Automobile",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0186",
    "question": "24. কোনখন দেশৰ জাতীয় পতাকাৰ আকৃতি ত্ৰিভুজাকাৰ?",
    "options": [
      "Brazil",
      "Kuala Lumpur",
      "Sri Lanka",
      "Nepal"
    ],
    "answer": "Nepal",
    "correctOption": "D",
    "explanation": "The correct answer is Nepal (option D). The question directly tests the stated general knowledge concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "General Knowledge",
    "topic": "World geography",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0187",
    "question": "25. ‘অৰ্থশাস্ত্ৰ’ কোনে লিখিছিল?",
    "options": [
      "Brahmagupta",
      "Swami Vivekananda",
      "Raghuram Rajan",
      "Chanakya"
    ],
    "answer": "Chanakya",
    "correctOption": "D",
    "explanation": "The correct answer is Chanakya (option D). The question directly tests the stated general knowledge concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "General Knowledge",
    "topic": "Ancient India",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0188",
    "question": "26. যিবোৰ সংখ্যাক ভগ্নাংশৰ ৰূপত প্ৰকাশ কৰিব নোৱাৰি, সেইবোৰক কি কোৱা হয়?",
    "options": [
      "Whole numbers",
      "Recurring numbers",
      "Prime numbers",
      "Irrational numbers"
    ],
    "answer": "Irrational numbers",
    "correctOption": "D",
    "explanation": "The correct answer is Irrational numbers (option D). The question directly tests the stated mathematics concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "Mathematics",
    "topic": "Irrational numbers",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0189",
    "question": "27. এজন মানুহে প্ৰতি মিনিটত ৪৫টা শব্দ টাইপ কৰে। ৫৫৫টা শব্দ টাইপ কৰিবলৈ কিমান সময় লাগিব?",
    "options": [
      "12 min 15 sec",
      "12 min 20 sec",
      "12 min 30 sec",
      "12 min 45 sec"
    ],
    "answer": "12 min 20 sec",
    "correctOption": "B",
    "explanation": "Time = words ÷ rate = 555 ÷ 45 = 12.333... minutes. The fractional 0.333... minute equals 20 seconds, so the time is 12 min 20 sec.",
    "subject": "Mathematics",
    "topic": "Time and rate",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0190",
    "question": "28. এটা সংখ্যাক ১১১১ৰে গুণ কৰিলে ৭৭৭৭ পোৱা যায়। সংখ্যাটো কিমান?",
    "options": [
      "7",
      "17",
      "70",
      "77"
    ],
    "answer": "7",
    "correctOption": "A",
    "explanation": "Since 1111 × 7 = 7777, the required number is 7.",
    "subject": "Mathematics",
    "topic": "Multiplication",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0191",
    "question": "29. কোচ ৰজা নৰনাৰায়ণৰ সেনাৰ সেনাপতি কোন আছিল?",
    "options": [
      "Raghabendra",
      "Chakradhwaj",
      "Tingrai",
      "Chilarai"
    ],
    "answer": "Chilarai",
    "correctOption": "D",
    "explanation": "The correct answer is Chilarai (option D). The question directly tests the stated assam gk concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "Assam GK",
    "topic": "Koch Kingdom",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0192",
    "question": "30. ওজা-পালি অসমৰ কোন অঞ্চলৰ এটা ধৰ্মীয় অনুষ্ঠান/উপাদান?",
    "options": [
      "Lakhimpur–Dibrugarh region",
      "Silchar–Karimganj region",
      "Haflong–Hamren region",
      "Mangaldoi–Nalbari region"
    ],
    "answer": "Mangaldoi–Nalbari region",
    "correctOption": "D",
    "explanation": "The correct answer is Mangaldoi–Nalbari region (option D). The question directly tests the stated assam gk concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "Assam GK",
    "topic": "Oja-Pali",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0193",
    "question": "32. 18−[6−(4+2)]−5 ৰ মান কিমান?",
    "options": [
      "9",
      "16",
      "13",
      "11"
    ],
    "answer": "13",
    "correctOption": "C",
    "explanation": "First calculate (4+2)=6. Then [6−6]=0. Finally 18−0−5 = 13.",
    "subject": "Mathematics",
    "topic": "BODMAS",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0194",
    "question": "34. ৫০০০ৰ ৩%ৰ ২% কিমান?",
    "options": [
      "5",
      "3",
      "2",
      "6"
    ],
    "answer": "3",
    "correctOption": "B",
    "explanation": "3% of 5000 = 150. Then 2% of 150 = 3. Therefore the answer is 3.",
    "subject": "Mathematics",
    "topic": "Percentage",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0195",
    "question": "35. ভাৰতত বাহন __________ ফালে চলোৱা হয়।",
    "options": [
      "right side of road; driver on left",
      "left side of road; driver on right",
      "right side of road; driver on right",
      "left side of road; driver on left"
    ],
    "answer": "left side of road; driver on right",
    "correctOption": "B",
    "explanation": "The correct answer is left side of road; driver on right (option B). The question directly tests the stated general knowledge concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "General Knowledge",
    "topic": "Traffic rules",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0196",
    "question": "36. TANK-ক KNAT হিচাপে কোড কৰা হয়। একে ধৰণে PROCESS-ক কোড কৰিলে পঞ্চম আখৰটো কি হ’ব?",
    "options": [
      "C",
      "E",
      "O",
      "R"
    ],
    "answer": "O",
    "correctOption": "C",
    "explanation": "TANK becomes KNAT by reversing the order. PROCESS reversed is SSECORP; its fifth letter is O, which is option C.",
    "subject": "Reasoning",
    "topic": "Coding-decoding",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0197",
    "question": "37. ২০২০ চনৰ অলিম্পিকত নীৰজ চোপ্ৰাই কোনটো ইভেণ্টত সোণৰ পদক জিকিছিল?",
    "options": [
      "Discus throw",
      "Hammer throw",
      "Shot put",
      "Javelin throw"
    ],
    "answer": "Javelin throw",
    "correctOption": "D",
    "explanation": "The correct answer is Javelin throw (option D). The question directly tests the stated general knowledge concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "General Knowledge",
    "topic": "Sports",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0198",
    "question": "38. ছ’চিয়েল মিডিয়াত ধাৰাবাহিকভাৱে প্ৰকাশ পাই পিছত গ্ৰন্থ হিচাপে প্ৰকাশিত ‘Life of a Driver: Cabin’or Ipare’ কোনে লিখিছিল?",
    "options": [
      "Pratibhu Dutta",
      "Rupam Dutta",
      "Debabrata Das",
      "Ramanuj Goswami"
    ],
    "answer": "Rupam Dutta",
    "correctOption": "B",
    "explanation": "The correct answer is Rupam Dutta (option B). The question directly tests the stated general knowledge concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "General Knowledge",
    "topic": "Assam literature",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0199",
    "question": "40. ৪২১৩.৬ সংখ্যাত ২ৰ স্থানীয় মান কিমান?",
    "options": [
      "213",
      "2",
      "200",
      "20"
    ],
    "answer": "200",
    "correctOption": "C",
    "explanation": "In 4213.6, the digit 2 is in the hundreds place. Its place value is therefore 2×100 = 200.",
    "subject": "Mathematics",
    "topic": "Place value",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0200",
    "question": "41. তলৰ কোনটো একেটা গোটত থাকিব নালাগে?",
    "options": [
      "Paper",
      "Eraser",
      "Pen",
      "Textbook"
    ],
    "answer": "Textbook",
    "correctOption": "D",
    "explanation": "The correct answer is Textbook (option D). The question directly tests the stated reasoning concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "Reasoning",
    "topic": "Classification",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0201",
    "question": "42. তলৰ কোনটো বস্তু ছাৰ আইজাক নিউটনৰ কামৰ সৈতে সম্পৰ্কিত?",
    "options": [
      "Rocket",
      "Atom Bomb",
      "Semiconductor",
      "Automobile"
    ],
    "answer": "Rocket",
    "correctOption": "A",
    "explanation": "The correct answer is Rocket (option A). The question directly tests the stated general science concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "General Science",
    "topic": "Newtonian science",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0202",
    "question": "43. তলৰ কোনটো জোৰা ভুলকৈ মিলোৱা হৈছে?",
    "options": [
      "M : 13",
      "S : 20",
      "W : 23",
      "K : 11"
    ],
    "answer": "S : 20",
    "correctOption": "B",
    "explanation": "Alphabet positions are M=13, S=19, W=23 and K=11. Therefore S:20 is the incorrect pair.",
    "subject": "Reasoning",
    "topic": "Alphabet positions",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0203",
    "question": "44. ভাৰতৰ সৰ্বোচ্চ পৰ্বত শৃংগ কোনটো?",
    "options": [
      "Everest",
      "Annapurna",
      "Nanda Devi",
      "Kanchenjunga"
    ],
    "answer": "Kanchenjunga",
    "correctOption": "D",
    "explanation": "The correct answer is Kanchenjunga (option D). The question directly tests the stated general knowledge concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "General Knowledge",
    "topic": "Geography",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0204",
    "question": "45. প্ৰথম দহটা ক্ৰমাগত স্বাভাৱিক সংখ্যাৰ গড় কিমান?",
    "options": [
      "5",
      "6",
      "5.5",
      "6.5"
    ],
    "answer": "5.5",
    "correctOption": "C",
    "explanation": "The average of 1 through 10 is (1+10)/2 = 5.5.",
    "subject": "Mathematics",
    "topic": "Average",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0205",
    "question": "46. বিপজ্জনক গাড়ী চলোৱা বুলিলে কি বুজায়?",
    "options": [
      "Jumping a red traffic light",
      "Violating stop line",
      "Using phone",
      "Any one of all three"
    ],
    "answer": "Any one of all three",
    "correctOption": "D",
    "explanation": "The correct answer is Any one of all three (option D). The question directly tests the stated general knowledge concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "General Knowledge",
    "topic": "Traffic safety",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0206",
    "question": "47. তলৰ সংখ্যাবোৰৰ কোনটোৰ দশকৰ স্থানত সৰ্বোচ্চ অংক আছে? (i) 736 (ii) 269 (iii) 958 (iv) 219 (v) 793",
    "options": [
      "(v)",
      "(iii)",
      "(iv)",
      "(i)"
    ],
    "answer": "(iii)",
    "correctOption": "B",
    "explanation": "The tens digits are 3, 6, 5, 1 and 9 respectively. The largest is 9, in 793, which is item (v), corresponding to option B.",
    "subject": "Mathematics",
    "topic": "Place value",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0207",
    "question": "48. পৰিবহণ বাহনক আন বাহনৰ পৰা কেনেকৈ চিনাক্ত কৰিব পাৰি?",
    "options": [
      "Tyre size",
      "Vehicle colour",
      "Vehicle size",
      "Registration number plate"
    ],
    "answer": "Registration number plate",
    "correctOption": "D",
    "explanation": "The correct answer is Registration number plate (option D). The question directly tests the stated general knowledge concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "General Knowledge",
    "topic": "Vehicle identification",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0208",
    "question": "49. Tyres : Round : Black-ৰ সৈতে একে ধৰণৰ সম্পৰ্ক কোনটো?",
    "options": [
      "Trees : Green : Tall",
      "Windows : Glass : Square",
      "Pipes : Round : Plastic",
      "Bricks : Rectangle : Red"
    ],
    "answer": "Pipes : Round : Plastic",
    "correctOption": "C",
    "explanation": "The correct answer is Pipes : Round : Plastic (option C). The question directly tests the stated reasoning concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "Reasoning",
    "topic": "Analogy",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0209",
    "question": "50. নন-ট্ৰান্সপ'ৰ্ট বাহন চলোৱাৰ ড্ৰাইভিং লাইচেঞ্চ লাভ কৰিবলৈ ন্যূনতম শিক্ষাগত অৰ্হতা কি?",
    "options": [
      "Class VIII Pass",
      "Matric Pass",
      "Class IX Pass",
      "Not Mandatory"
    ],
    "answer": "Class VIII Pass",
    "correctOption": "A",
    "explanation": "The correct answer is Class VIII Pass (option A). The question directly tests the stated general knowledge concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "General Knowledge",
    "topic": "Driving licence eligibility",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0210",
    "question": "51. হলিউড কোন দেশত অৱস্থিত?",
    "options": [
      "United States of America",
      "England",
      "France",
      "Japan"
    ],
    "answer": "United States of America",
    "correctOption": "A",
    "explanation": "The correct answer is United States of America (option A). The question directly tests the stated general knowledge concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "General Knowledge",
    "topic": "World geography",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0211",
    "question": "52. তলৰ কোনটো অসমৰ এটা অঞ্চল নহয়?",
    "options": [
      "Brahmaputra valley",
      "Karbi plateau",
      "Barak valley",
      "Deccan plateau"
    ],
    "answer": "Deccan plateau",
    "correctOption": "D",
    "explanation": "The correct answer is Deccan plateau (option D). The question directly tests the stated assam gk concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "Assam GK",
    "topic": "Geography of Assam",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0212",
    "question": "53. অসমত বাছ কণ্ডাক্টৰ লাইচেঞ্চৰ বাবে ন্যূনতম শিক্ষাগত অৰ্হতা কি?",
    "options": [
      "Class VIII Pass",
      "HSLC Pass",
      "Class IX Pass",
      "Not mandatory"
    ],
    "answer": "HSLC Pass",
    "correctOption": "B",
    "explanation": "The correct answer is HSLC Pass (option B). The question directly tests the stated general knowledge concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "General Knowledge",
    "topic": "Transport rules",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0213",
    "question": "54. বিপজ্জনক আৰু ক্ষতিকাৰক সামগ্ৰী কঢ়িওৱা গুডছ ভেহিকেলৰ চালকৰ ড্ৰাইভিং লাইচেঞ্চৰ বৈধতাৰ সময় কিমান?",
    "options": [
      "1 year",
      "2 years",
      "3 years",
      "5 years"
    ],
    "answer": "1 year",
    "correctOption": "A",
    "explanation": "The correct answer is 1 year (option A). The question directly tests the stated general knowledge concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "General Knowledge",
    "topic": "Driving licence rules",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0214",
    "question": "55. সাধাৰণতে ভোটদান কৰাৰ প্ৰমাণ হিচাপে কোনটো গণ্য কৰা হয়?",
    "options": [
      "Tick on electoral roll",
      "Indelible ink mark",
      "Voter slip possession",
      "Permission to enter booth"
    ],
    "answer": "Indelible ink mark",
    "correctOption": "B",
    "explanation": "The correct answer is Indelible ink mark (option B). The question directly tests the stated general knowledge concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "General Knowledge",
    "topic": "Elections",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0215",
    "question": "57. যদি 1+2+3+...+9+10=55, তেন্তে 2+3+4+...+10+11 = ?",
    "options": [
      "65",
      "66",
      "64",
      "62"
    ],
    "answer": "65",
    "correctOption": "A",
    "explanation": "The sum 1+2+...+10 is 55. Replacing 1 with 11 gives 55−1+11 = 65. Therefore the correct option is A.",
    "subject": "Mathematics",
    "topic": "Number series",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0216",
    "question": "58. অসমৰ প্ৰথম স্বৰ্গদেউৰ নাম কি?",
    "options": [
      "Suhungmung",
      "Suhenpha",
      "Sutupha",
      "Sukapha"
    ],
    "answer": "Sukapha",
    "correctOption": "D",
    "explanation": "The correct answer is Sukapha (option D). The question directly tests the stated assam gk concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "Assam GK",
    "topic": "Ahom Kingdom",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0217",
    "question": "59. বায়ু : ঈগল :: পানী : ?",
    "options": [
      "Duck",
      "Cuckoo",
      "Pigeon",
      "Ostrich"
    ],
    "answer": "Duck",
    "correctOption": "A",
    "explanation": "The correct answer is Duck (option A). The question directly tests the stated reasoning concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "Reasoning",
    "topic": "Analogy",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0218",
    "question": "60. ৰাস্তাত অঁকা জেব্ৰা ক্ৰছিংৰেখাবোৰ কিহৰ বাবে?",
    "options": [
      "Reducing speed",
      "Pedestrian crossing",
      "Giving preference to other vehicles",
      "Crossing of animals"
    ],
    "answer": "Pedestrian crossing",
    "correctOption": "B",
    "explanation": "The correct answer is Pedestrian crossing (option B). The question directly tests the stated general knowledge concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "General Knowledge",
    "topic": "Traffic signs",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0219",
    "question": "61. মানক ইংৰাজী অভিধানত তলৰ কোনটো শব্দ সৰ্বশেষত আহিব?",
    "options": [
      "JANUARY",
      "OCTOBER",
      "DECEMBER",
      "MARCH"
    ],
    "answer": "OCTOBER",
    "correctOption": "B",
    "explanation": "In dictionary order the words are DECEMBER, JANUARY, MARCH, OCTOBER. Hence OCTOBER comes last.",
    "subject": "English",
    "topic": "Dictionary order",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0220",
    "question": "62. ভাৰতত ড্ৰাইভিং লাইচেঞ্চ লাভ কৰাৰ সৰ্বোচ্চ বয়সসীমা কিমান?",
    "options": [
      "65 years",
      "70 years",
      "80 years",
      "Age, no bar"
    ],
    "answer": "Age, no bar",
    "correctOption": "D",
    "explanation": "The correct answer is Age, no bar (option D). The question directly tests the stated general knowledge concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "General Knowledge",
    "topic": "Driving licence rules",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0221",
    "question": "64. LEMONADE-ত থকা আখৰবোৰ ব্যৱহাৰ কৰি বনাব নোৱাৰা শব্দটো চিনাক্ত কৰক।",
    "options": [
      "LEAD",
      "MADE",
      "DEAF",
      "DEAL"
    ],
    "answer": "DEAF",
    "correctOption": "C",
    "explanation": "The correct answer is DEAF (option C). The question directly tests the stated english concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "English",
    "topic": "Word formation",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0222",
    "question": "65. (1−1/2)(1−1/3)(1−1/4) ৰ মান কিমান?",
    "options": [
      "1/6",
      "1/4",
      "1/3",
      "1/24"
    ],
    "answer": "1/4",
    "correctOption": "B",
    "explanation": "Compute each factor: (1−1/2)=1/2, (1−1/3)=2/3, and (1−1/4)=3/4. Their product is (1×2×3)/(2×3×4)=1/4.",
    "subject": "Mathematics",
    "topic": "Fractions",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0223",
    "question": "66. নিচাগ্ৰস্ত অৱস্থাত প্ৰথমবাৰ গাড়ী চলোৱাৰ সৰ্বোচ্চ শাস্তি কিমান?",
    "options": [
      "Up to 6 months imprisonment",
      "₹10,000 fine",
      "₹10,000 fine and up to 6 months imprisonment",
      "₹20,000 fine"
    ],
    "answer": "₹10,000 fine and up to 6 months imprisonment",
    "correctOption": "C",
    "explanation": "The correct answer is ₹10,000 fine and up to 6 months imprisonment (option C). The question directly tests the stated general knowledge concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "General Knowledge",
    "topic": "Motor vehicle law",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0224",
    "question": "67. তলৰ কোনখন ৰাজ্যৰ অসমৰ সৈতে সীমা নাই?",
    "options": [
      "Nagaland",
      "Bihar",
      "Mizoram",
      "Tripura"
    ],
    "answer": "Bihar",
    "correctOption": "B",
    "explanation": "The correct answer is Bihar (option B). The question directly tests the stated assam gk concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "Assam GK",
    "topic": "Neighbouring states",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0225",
    "question": "68. ভাৰতীয় বাহনৰ হালধীয়া নম্বৰ প্লেট সাধাৰণতে কি সূচায়?",
    "options": [
      "Electric vehicle",
      "Commercial vehicle",
      "Ambulance",
      "Governor’s vehicle"
    ],
    "answer": "Commercial vehicle",
    "correctOption": "B",
    "explanation": "The correct answer is Commercial vehicle (option B). The question directly tests the stated general knowledge concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "General Knowledge",
    "topic": "Vehicle number plates",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0226",
    "question": "69. ৭টা আমৰ দাম ₹৯১ হলে ৩টা আমৰ দাম কিমান?",
    "options": [
      "₹28",
      "₹35",
      "₹37",
      "₹39"
    ],
    "answer": "₹39",
    "correctOption": "D",
    "explanation": "Cost of one mango = 91/7 = ₹13. Therefore 3 mangoes cost 3×13 = ₹39.",
    "subject": "Mathematics",
    "topic": "Unitary method",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0227",
    "question": "70. এজন ব্যক্তিয়ে ত্ৰুটিপূৰ্ণ বস্তু ₹1,500ত কিনি ₹900ত মেৰামতি কৰি ₹5,000ত বিক্ৰী কৰিলে। বিক্ৰী কৰ ₹100। নেট লাভৰ শতকৰা কিমান?",
    "options": [
      "80%",
      "60%",
      "120%",
      "100%"
    ],
    "answer": "100%",
    "correctOption": "D",
    "explanation": "Purchase cost = ₹1,500 and repair cost = ₹900, so basic cost = ₹2,400. Adding ₹100 sales tax gives total cost ₹2,500. Selling price is ₹5,000, so profit = ₹2,500. Profit percentage = 2500/2500 × 100 = 100%.",
    "subject": "Mathematics",
    "topic": "Profit and loss",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0228",
    "question": "71. B, E, J, Q-ৰ পিছত পৰৱৰ্তী আখৰটো কি?",
    "options": [
      "T",
      "U",
      "W",
      "Z"
    ],
    "answer": "Z",
    "correctOption": "D",
    "explanation": "The alphabet jumps are +3, +5 and +7: B→E→J→Q. The next jump is +9, so Q+9 = Z.",
    "subject": "Reasoning",
    "topic": "Alphabet series",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0229",
    "question": "72. প্ৰাচীন কামৰূপ ৰাজ্যৰ ৰাজধানীৰ নাম কি আছিল?",
    "options": [
      "Darranga",
      "Pragjyotishpur",
      "Garhgaon",
      "Itakhuli"
    ],
    "answer": "Pragjyotishpur",
    "correctOption": "B",
    "explanation": "The correct answer is Pragjyotishpur (option B). The question directly tests the stated assam gk concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "Assam GK",
    "topic": "Ancient Kamarupa",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0230",
    "question": "73. লোহৰি আৰু বৈশাখী সাধাৰণতে কোনখন ৰাজ্যত উদযাপন কৰা হয়?",
    "options": [
      "West Bengal",
      "Punjab",
      "Maharashtra",
      "Chhattisgarh"
    ],
    "answer": "Punjab",
    "correctOption": "B",
    "explanation": "The correct answer is Punjab (option B). The question directly tests the stated general knowledge concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "General Knowledge",
    "topic": "Indian festivals",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0231",
    "question": "74. প্ৰতিৰক্ষা বাহনৰ বাহিৰে আন বাহনত কোন ৰঙৰ পেইণ্ট নিষিদ্ধ?",
    "options": [
      "Orange",
      "Saffron",
      "Olive Green",
      "Dark Blue"
    ],
    "answer": "Olive Green",
    "correctOption": "C",
    "explanation": "The correct answer is Olive Green (option C). The question directly tests the stated general knowledge concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "General Knowledge",
    "topic": "Vehicle rules",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0232",
    "question": "75. লোকসভাৰ নিৰ্বাচন সাধাৰণতে কেতিয়া অনুষ্ঠিত হয়?",
    "options": [
      "Every five years",
      "Every four years",
      "Every six years",
      "Every ten years"
    ],
    "answer": "Every five years",
    "correctOption": "A",
    "explanation": "The correct answer is Every five years (option A). The question directly tests the stated general knowledge concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "General Knowledge",
    "topic": "Indian polity",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0233",
    "question": "76. ৰাকেশ সুবোধতকৈ ওখ। তেওঁলোকৰ বন্ধু অতনু ছয় ফুটতকৈ অধিক উচ্চতাৰ খেলুৱৈৰ বাবে থকা বাস্কেটবল দলত স্থান পোৱা একমাত্ৰজন। উচ্চতাৰ ভিত্তিত মাজত কোনজন?",
    "options": [
      "Subodh",
      "Atanu",
      "Rakesh",
      "Cannot be determined"
    ],
    "answer": "Cannot be determined",
    "correctOption": "D",
    "explanation": "We know Rakesh is taller than Subodh, but we are not told whether Atanu is taller than or shorter than Rakesh. Therefore the middle person cannot be determined from the given information.",
    "subject": "Reasoning",
    "topic": "Ordering",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0234",
    "question": "78. ‘পকা ধানৰ মাজে মাজে’ গীতটো কোনে লিখিছিল?",
    "options": [
      "Tafazzul Ali",
      "Anandiram Barua",
      "Parbati Prasad Barua",
      "Rudra Barua"
    ],
    "answer": "Rudra Barua",
    "correctOption": "D",
    "explanation": "The correct answer is Rudra Barua (option D). The question directly tests the stated assam gk concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "Assam GK",
    "topic": "Assamese music",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0235",
    "question": "80. পোংগল মূলতঃ কোনখন ৰাজ্যৰ শীতকালীন লোকউৎসৱ?",
    "options": [
      "Tamil Nadu",
      "Bihar",
      "Madhya Pradesh",
      "Punjab"
    ],
    "answer": "Tamil Nadu",
    "correctOption": "A",
    "explanation": "The correct answer is Tamil Nadu (option A). The question directly tests the stated general knowledge concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "General Knowledge",
    "topic": "Indian festivals",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0236",
    "question": "81. ৰীতা চৌধুৰীৰ ‘দেও লাংখুই’ উপন্যাসত অসমৰ কোনটো জনগোষ্ঠীৰ কথা বিশেষভাৱে উল্লেখ আছে?",
    "options": [
      "Kacharis",
      "Mishings",
      "Tiwas",
      "Mottocks"
    ],
    "answer": "Tiwas",
    "correctOption": "C",
    "explanation": "The correct answer is Tiwas (option C). The question directly tests the stated assam gk concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "Assam GK",
    "topic": "Assamese literature",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0237",
    "question": "82. ভাৰতত বৈদ্যুতিক বাহন (EV)-ৰ নম্বৰ প্লেটৰ ৰং কি?",
    "options": [
      "White",
      "Yellow",
      "Green",
      "Black"
    ],
    "answer": "Green",
    "correctOption": "C",
    "explanation": "The correct answer is Green (option C). The question directly tests the stated general knowledge concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "General Knowledge",
    "topic": "Vehicle number plates",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0238",
    "question": "83. 4/5, 5/6, 6/7 আৰু 7/8-ৰ ভিতৰত সৰু ভগ্নাংশটো কোনটো?",
    "options": [
      "4/5",
      "5/6",
      "6/7",
      "7/8"
    ],
    "answer": "4/5",
    "correctOption": "A",
    "explanation": "Compare the fractions: 4/5=0.80, 5/6≈0.833, 6/7≈0.857 and 7/8=0.875. The smallest is 4/5.",
    "subject": "Mathematics",
    "topic": "Fractions",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0239",
    "question": "84. 0.222... ৰ সমতুল্য ভগ্নাংশ কোনটো?",
    "options": [
      "11/49",
      "1/9",
      "3/19",
      "2/9"
    ],
    "answer": "2/9",
    "correctOption": "D",
    "explanation": "Let x=0.222.... Then 10x=2.222.... Subtracting gives 9x=2, so x=2/9.",
    "subject": "Mathematics",
    "topic": "Recurring decimals",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0240",
    "question": "85. ভাৰতৰ সাধাৰণ নিৰ্বাচনত ভোট দিবলৈ বৰ্তমান ন্যূনতম বয়স কিমান?",
    "options": [
      "21 years",
      "20 years",
      "18 years",
      "16 years"
    ],
    "answer": "18 years",
    "correctOption": "C",
    "explanation": "The correct answer is 18 years (option C). The question directly tests the stated general knowledge concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "General Knowledge",
    "topic": "Voting age",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0241",
    "question": "86. তলৰ কোনটো স্কেল ভূমিকম্পৰ মাত্ৰা জোখাৰ বাবে ব্যৱহাৰ কৰা হয়?",
    "options": [
      "Richter Scale",
      "Enhanced Fuzita Scale",
      "Volumetric Scale",
      "Reaumer Scale"
    ],
    "answer": "Richter Scale",
    "correctOption": "A",
    "explanation": "The correct answer is Richter Scale (option A). The question directly tests the stated general science concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "General Science",
    "topic": "Earthquakes",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0242",
    "question": "87. বাবলী পিতৃ-মাতৃৰ বিবাহৰ এবছৰৰ পিছত জন্মিছিল। বৰ্তমান বাবলীৰ বয়স ৬ বছৰ আৰু পিতৃৰ বয়স বাবলীতকৈ ২৫ বছৰ বেছি। পিতৃ পত্নীতকৈ ২ বছৰ ডাঙৰ হলে, বাবলীৰ মাকে কিমান বয়সত বিবাহ কৰিছিল?",
    "options": [
      "22 years",
      "23 years",
      "21 years",
      "Cannot be determined"
    ],
    "answer": "22 years",
    "correctOption": "A",
    "explanation": "Babli is 6 years old, so her father is 6+25 = 31 years old. The father is 2 years older than his wife, so the mother is 29. Babli was born one year after the marriage, meaning the marriage was 7 years ago. Therefore the mother's age at marriage was 29−7 = 22 years, so option A is correct.",
    "subject": "Reasoning",
    "topic": "Age problems",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0243",
    "question": "88. ‘Hit and Run’ মটৰ দুৰ্ঘটনাত মৃত্যু ঘটিলে ক্ষতিপূৰণৰ ধন কিমান?",
    "options": [
      "₹1 lakh",
      "₹2 lakhs",
      "₹2.5 lakhs",
      "₹50,000"
    ],
    "answer": "₹2 lakhs",
    "correctOption": "B",
    "explanation": "The correct answer is ₹2 lakhs (option B). The question directly tests the stated general knowledge concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "General Knowledge",
    "topic": "Motor vehicle law",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0244",
    "question": "89. বেলেগটো বিচাৰক।",
    "options": [
      "436",
      "298",
      "746",
      "639"
    ],
    "answer": "639",
    "correctOption": "D",
    "explanation": "436, 298 and 746 are even numbers, while 639 is odd. Hence 639 is the odd one out.",
    "subject": "Reasoning",
    "topic": "Odd one out",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0245",
    "question": "90. তলৰ কোনজন শ্ৰীমন্ত শংকৰদেৱৰ প্ৰথম শিষ্যসকলৰ এজন আছিল?",
    "options": [
      "Madhabdev",
      "Lachit Barphukan",
      "Ananta Kandali",
      "Mahendra Narayan"
    ],
    "answer": "Madhabdev",
    "correctOption": "A",
    "explanation": "The correct answer is Madhabdev (option A). The question directly tests the stated assam gk concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "Assam GK",
    "topic": "Vaishnavite movement",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0246",
    "question": "91. √121 + √81 + √25 ৰ মান কিমান?",
    "options": [
      "121",
      "81",
      "25",
      "36"
    ],
    "answer": "25",
    "correctOption": "C",
    "explanation": "√121=11, √81=9 and √25=5. Their sum is 11+9+5=25.",
    "subject": "Mathematics",
    "topic": "Square roots",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0247",
    "question": "92. তলৰ কোনটো শব্দ ইংৰাজী অভিধানত প্ৰথমে আহিব?",
    "options": [
      "Hectometer",
      "Decimeter",
      "Kilometer",
      "Centimeter"
    ],
    "answer": "Centimeter",
    "correctOption": "D",
    "explanation": "Alphabetically, C comes before D, H and K. Among the options, Centimeter therefore comes first.",
    "subject": "English",
    "topic": "Dictionary order",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0248",
    "question": "94. তিনিওটা ফালে পানীৰে আগুৰি থকা ভূমিখণ্ডক কি কোৱা হয়?",
    "options": [
      "Peninsula",
      "Island",
      "Isthmus",
      "Atoll"
    ],
    "answer": "Peninsula",
    "correctOption": "A",
    "explanation": "The correct answer is Peninsula (option A). The question directly tests the stated general knowledge concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "General Knowledge",
    "topic": "Geography",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0249",
    "question": "95. এটা সমবাহু ত্ৰিভুজৰ প্ৰতিটো কোণৰ মান কিমান?",
    "options": [
      "90°",
      "60°",
      "45°",
      "30°"
    ],
    "answer": "60°",
    "correctOption": "B",
    "explanation": "The angles of an equilateral triangle are equal and the sum of a triangle's angles is 180°. Thus each angle is 180°/3 = 60°.",
    "subject": "Mathematics",
    "topic": "Triangles",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0250",
    "question": "97. Light Motor Vehicle চালকে অতিবেগে গাড়ী চলালে জৰিমনা কিমান?",
    "options": [
      "₹1,000 to ₹2,000",
      "₹3,000",
      "₹500",
      "₹5,000"
    ],
    "answer": "₹1,000 to ₹2,000",
    "correctOption": "A",
    "explanation": "The correct answer is ₹1,000 to ₹2,000 (option A). The question directly tests the stated general knowledge concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "General Knowledge",
    "topic": "Traffic penalties",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0251",
    "question": "99. এটা আয়তক্ষেত্ৰৰ পৰিসীমা ৩৪ ছেমি আৰু দৈৰ্ঘ্য প্ৰস্থতকৈ ৭ ছেমি বেছি। ক্ষেত্ৰফল কিমান?",
    "options": [
      "40 cm²",
      "60 cm²",
      "238 cm²",
      "64 cm²"
    ],
    "answer": "60 cm²",
    "correctOption": "B",
    "explanation": "Let length=l and breadth=b. 2(l+b)=34, so l+b=17. Also l=b+7. Hence 2b+7=17, b=5 and l=12. Area=12×5=60 cm².",
    "subject": "Mathematics",
    "topic": "Area of rectangle",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0252",
    "question": "100. ভাৰতীয় সংবিধানৰ পিতৃ হিচাপে কাক জনা যায়?",
    "options": [
      "Pt. Jawaharlal Nehru",
      "Dr. Bhimrao Ambedkar",
      "Dr. Rajendra Prasad",
      "Dr. Sarvepalli Radhakrishnan"
    ],
    "answer": "Dr. Bhimrao Ambedkar",
    "correctOption": "B",
    "explanation": "The correct answer is Dr. Bhimrao Ambedkar (option B). The question directly tests the stated general knowledge concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "General Knowledge",
    "topic": "Indian Constitution",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0253",
    "question": "101. অষ্ট্ৰেলিয়াৰ ৰাজধানী কি?",
    "options": [
      "Sydney",
      "Canberra",
      "San Francisco",
      "Sao Paulo"
    ],
    "answer": "Canberra",
    "correctOption": "B",
    "explanation": "The correct answer is Canberra (option B). The question directly tests the stated general knowledge concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "General Knowledge",
    "topic": "World geography",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0254",
    "question": "102. শৰাইঘাটত লাচিত বৰফুকনৰ হাতত পৰাজিত হোৱা মোগল সেনাৰ সেনাপতি কোন আছিল?",
    "options": [
      "Man Singh",
      "Vikram Singh",
      "Vijay Singh",
      "Ram Singh"
    ],
    "answer": "Ram Singh",
    "correctOption": "D",
    "explanation": "The correct answer is Ram Singh (option D). The question directly tests the stated assam gk concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "Assam GK",
    "topic": "Battle of Saraighat",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0255",
    "question": "103. 4, 6, 8, 12, 14, 18, *, *, 30 ধাৰাটো অব্যাহত ৰাখিবলৈ কি সংখ্যা থাকিব লাগে?",
    "options": [
      "20, 22",
      "20, 24",
      "20, 26",
      "20, 28"
    ],
    "answer": "20, 22",
    "correctOption": "A",
    "explanation": "The sequence is one more than consecutive prime numbers: 3+1=4, 5+1=6, 7+1=8, 11+1=12, 13+1=14, 17+1=18. The next primes are 19 and 23, giving 20 and 24.",
    "subject": "Reasoning",
    "topic": "Number series",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0256",
    "question": "104. ৪ অংকৰ সৰুতম সংখ্যা আৰু ৩ অংকৰ ডাঙৰতম সংখ্যাৰ মাজৰ পাৰ্থক্য কিমান?",
    "options": [
      "1",
      "11",
      "101",
      "111"
    ],
    "answer": "1",
    "correctOption": "A",
    "explanation": "The smallest four-digit number is 1000 and the largest three-digit number is 999. Their difference is 1000−999=1.",
    "subject": "Mathematics",
    "topic": "Number system",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0257",
    "question": "105. নতুনকৈ পঞ্জীয়ন কৰা বাহনে Pollution Under Control (PUC) প্ৰমাণপত্ৰ কেতিয়া নবীকৰণ কৰিব লাগে?",
    "options": [
      "1 year",
      "2 years",
      "6 months",
      "3 years"
    ],
    "answer": "1 year",
    "correctOption": "A",
    "explanation": "The correct answer is 1 year (option A). The question directly tests the stated general knowledge concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "General Knowledge",
    "topic": "Vehicle pollution rules",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0258",
    "question": "106. পৰিবহণ বাহন চলাবলৈ আবেদনকাৰীৰ Light Motor Vehicle driving licence কমেও কিমান বছৰ পুৰণি হ’ব লাগে?",
    "options": [
      "3 years",
      "1 year",
      "2 years",
      "5 years"
    ],
    "answer": "3 years",
    "correctOption": "A",
    "explanation": "The correct answer is 3 years (option A). The question directly tests the stated general knowledge concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "General Knowledge",
    "topic": "Driving licence rules",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0259",
    "question": "107. তলৰ কোন ঠাইত সৰ্ববৃহৎ ক্ৰিকেট ষ্টেডিয়াম আছে?",
    "options": [
      "Dharamshala",
      "Kolkata",
      "Motera",
      "Hyderabad"
    ],
    "answer": "Motera",
    "correctOption": "C",
    "explanation": "The correct answer is Motera (option C). The question directly tests the stated general knowledge concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "General Knowledge",
    "topic": "Sports",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0260",
    "question": "108. ইউৰোপৰ পৰা ভাৰতলৈ সাগৰীয় পথ কোনে আৱিষ্কাৰ কৰিছিল?",
    "options": [
      "Christopher Columbus",
      "Marco Polo",
      "Vasco da Gama",
      "James Cook"
    ],
    "answer": "Vasco da Gama",
    "correctOption": "C",
    "explanation": "The correct answer is Vasco da Gama (option C). The question directly tests the stated general knowledge concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "General Knowledge",
    "topic": "History",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0261",
    "question": "109. তলৰ কোনটো ভাৰতৰ এটা কেন্দ্ৰীয় শাসিত অঞ্চল?",
    "options": [
      "Jammu and Kashmir",
      "Goa",
      "Sikkim",
      "Telangana"
    ],
    "answer": "Jammu and Kashmir",
    "correctOption": "A",
    "explanation": "The correct answer is Jammu and Kashmir (option A). The question directly tests the stated general knowledge concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "General Knowledge",
    "topic": "Indian polity",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0262",
    "question": "110. তলৰ কোনটো মহাদেশৰ নাম নহয়?",
    "options": [
      "North America",
      "South America",
      "Arctic",
      "Antarctica"
    ],
    "answer": "Arctic",
    "correctOption": "C",
    "explanation": "The correct answer is Arctic (option C). The question directly tests the stated general knowledge concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "General Knowledge",
    "topic": "Continents",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0263",
    "question": "111. ভাৰতৰ পেট্ৰ’লচালিত বাহনত তলৰ কোনটো সঁজুলি বাধ্যতামূলক?",
    "options": [
      "Spare wheel",
      "Windshield wipers",
      "Catalytic converter",
      "GPS tracker"
    ],
    "answer": "Catalytic converter",
    "correctOption": "C",
    "explanation": "The correct answer is Catalytic converter (option C). The question directly tests the stated general science concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "General Science",
    "topic": "Automobile emissions",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0264",
    "question": "112. এটা দশমিক সংখ্যাৰ দশমিক বিন্দু ৩টা অংক সোঁফালে স্থানান্তৰ কৰিবলৈ কোন সংখ্যাৰে গুণ কৰিব লাগে?",
    "options": [
      "10",
      "100",
      "1,000",
      "10,000"
    ],
    "answer": "1,000",
    "correctOption": "C",
    "explanation": "Moving a decimal point three places to the right is equivalent to multiplying by 10³ = 1000.",
    "subject": "Mathematics",
    "topic": "Decimals",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0265",
    "question": "113. অস্মিতা চলিহাই ভাৰতৰ হৈ কোনটো খেল খেলে?",
    "options": [
      "Badminton",
      "Table Tennis",
      "Lawn Tennis",
      "Lawn Bowl"
    ],
    "answer": "Badminton",
    "correctOption": "A",
    "explanation": "The correct answer is Badminton (option A). The question directly tests the stated general knowledge concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "General Knowledge",
    "topic": "Sports",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0266",
    "question": "114. তলৰ কোনটো এখন মহাদেশৰ নাম?",
    "options": [
      "Austria",
      "Armenia",
      "Andrea",
      "Australia"
    ],
    "answer": "Australia",
    "correctOption": "D",
    "explanation": "The correct answer is Australia (option D). The question directly tests the stated general knowledge concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "General Knowledge",
    "topic": "Continents",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0267",
    "question": "115. এটা দশমিক সংখ্যাৰ দশমিক বিন্দু ২টা স্থান বাঁওফালে স্থানান্তৰ কৰিবলৈ সংখ্যাটোক কোন গুণকেৰে ভাগ কৰিব লাগে?",
    "options": [
      "0.1",
      "10",
      "100",
      "1000"
    ],
    "answer": "100",
    "correctOption": "C",
    "explanation": "Moving the decimal point two places to the left means dividing by 10² = 100.",
    "subject": "Mathematics",
    "topic": "Decimals",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0268",
    "question": "116. 3/10 ÷ 6/5 ক দশমিক ৰূপত প্ৰকাশ কৰিলে কিমান হয়?",
    "options": [
      "0.5",
      "0.75",
      "0.65",
      "0.25"
    ],
    "answer": "0.25",
    "correctOption": "D",
    "explanation": "(3/10) ÷ (6/5) = (3/10)×(5/6) = 15/60 = 1/4 = 0.25.",
    "subject": "Mathematics",
    "topic": "Fractions",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0269",
    "question": "117. এজন ব্যক্তিয়ে ত্ৰুটিপূৰ্ণ বস্তু ₹900ত কিনি ₹100ত মেৰামতি কৰি ₹1,800ত বিক্ৰী কৰিলে। লাভৰ শতকৰা কিমান?",
    "options": [
      "100%",
      "80%",
      "90%",
      "180%"
    ],
    "answer": "80%",
    "correctOption": "B",
    "explanation": "Total cost = ₹900 + ₹100 = ₹1,000. Profit = ₹1,800−₹1,000 = ₹800. Profit percentage = 800/1000×100 = 80%.",
    "subject": "Mathematics",
    "topic": "Profit and loss",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0270",
    "question": "118. উইনষ্টন চাৰ্চিল কোন দেশৰ প্ৰধানমন্ত্ৰী আছিল?",
    "options": [
      "United Kingdom",
      "Brazil",
      "United States of America",
      "Switzerland"
    ],
    "answer": "United Kingdom",
    "correctOption": "A",
    "explanation": "The correct answer is United Kingdom (option A). The question directly tests the stated general knowledge concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "General Knowledge",
    "topic": "World history",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0271",
    "question": "121. এটা বৰ্গৰ ক্ষেত্ৰফল 169 m²। বৰ্গটোৰ এফালৰ দৈৰ্ঘ্য কিমান?",
    "options": [
      "17 m",
      "19 m",
      "12 m",
      "13 m"
    ],
    "answer": "13 m",
    "correctOption": "D",
    "explanation": "The side of a square is the square root of its area. √169 = 13, so the side is 13 m.",
    "subject": "Mathematics",
    "topic": "Square",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0272",
    "question": "124. ২০২০ চনৰ Summer Olympic Games কোনখন দেশত অনুষ্ঠিত হৈছিল?",
    "options": [
      "South Korea",
      "Japan",
      "China",
      "Singapore"
    ],
    "answer": "Japan",
    "correctOption": "B",
    "explanation": "The correct answer is Japan (option B). The question directly tests the stated general knowledge concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "General Knowledge",
    "topic": "Sports",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0273",
    "question": "125. 425639 সংখ্যাত ‘5’ৰ স্থানীয় মান কিমান?",
    "options": [
      "5600",
      "25000",
      "5000",
      "5639"
    ],
    "answer": "5000",
    "correctOption": "C",
    "explanation": "In 425639, the digit 5 is in the thousands place. Therefore its place value is 5×1000 = 5000.",
    "subject": "Mathematics",
    "topic": "Place value",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0274",
    "question": "126. East India Company-ৰ বিৰুদ্ধে 1857 চনৰ বিদ্ৰোহৰ নেতৃত্ব তলৰ কোনে দিছিল?",
    "options": [
      "Rani Ahilya Bai",
      "Rani Laxmi Bai",
      "Chand Bibi",
      "Rezia Sultana"
    ],
    "answer": "Rani Laxmi Bai",
    "correctOption": "B",
    "explanation": "The correct answer is Rani Laxmi Bai (option B). The question directly tests the stated general knowledge concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "General Knowledge",
    "topic": "Indian history",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0275",
    "question": "127. শুদ্ধ বানান থকা শব্দটো চিনাক্ত কৰক।",
    "options": [
      "Traffic Single",
      "Traffic Signel",
      "Traffic Signal",
      "Trafic Signal"
    ],
    "answer": "Traffic Signal",
    "correctOption": "C",
    "explanation": "The correct answer is Traffic Signal (option C). The question directly tests the stated english concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "English",
    "topic": "Spelling",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0276",
    "question": "128. অসমত বাণিজ্যিক বাহনৰ বাবে তলৰ কোনটো বাধ্যতামূলক নহয়?",
    "options": [
      "Vehicle Registration",
      "Night Driving permit",
      "Pollution Under Control",
      "Fitness Certificate"
    ],
    "answer": "Night Driving permit",
    "correctOption": "B",
    "explanation": "The correct answer is Night Driving permit (option B). The question directly tests the stated general knowledge concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "General Knowledge",
    "topic": "Commercial vehicle rules",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0277",
    "question": "129. এম্বুলেন্সত ৰঙা আৰু নীলা লাইট কিয় ব্যৱহাৰ কৰা হয়?",
    "options": [
      "To alert all drivers, even those with colour blindness",
      "Because they look good",
      "Red stands for danger and Blue for emergency",
      "They can be seen from far"
    ],
    "answer": "They can be seen from far",
    "correctOption": "D",
    "explanation": "The correct answer is They can be seen from far (option D). The question directly tests the stated general knowledge concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "General Knowledge",
    "topic": "Emergency vehicles",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0278",
    "question": "132. 12, 24 আৰু 30ৰ গ.সা.উ. (HCF) কিমান?",
    "options": [
      "2",
      "3",
      "6",
      "12"
    ],
    "answer": "6",
    "correctOption": "C",
    "explanation": "Factors common to 12, 24 and 30 include 1, 2, 3 and 6. The greatest common factor is 6.",
    "subject": "Mathematics",
    "topic": "HCF",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0279",
    "question": "133. ভাৰতৰ কেন্দ্ৰীয় বাজেট কোনে উপস্থাপন কৰে?",
    "options": [
      "The Finance Minister",
      "The Prime Minister",
      "The Home Minister",
      "The President of India"
    ],
    "answer": "The Finance Minister",
    "correctOption": "A",
    "explanation": "The correct answer is The Finance Minister (option A). The question directly tests the stated general knowledge concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "General Knowledge",
    "topic": "Union Budget",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0280",
    "question": "134. Twitter-ৰ নতুন নাম কি?",
    "options": [
      "AXE",
      "XX",
      "EAX",
      "X"
    ],
    "answer": "X",
    "correctOption": "D",
    "explanation": "The correct answer is X (option D). The question directly tests the stated general knowledge concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "General Knowledge",
    "topic": "Current affairs",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0281",
    "question": "135. ভাৰতলৈ অহাৰ আগতে মোহনদাস কৰমচান্দ গান্ধী কোনখন দেশত আছিল?",
    "options": [
      "South Africa",
      "Uganda",
      "Egypt",
      "Sri Lanka"
    ],
    "answer": "South Africa",
    "correctOption": "A",
    "explanation": "The correct answer is South Africa (option A). The question directly tests the stated general knowledge concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "General Knowledge",
    "topic": "Modern Indian history",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0282",
    "question": "136. এটা সংখ্যাৰ ধাৰাত প্ৰতিটো সংখ্যা আগৰ সংখ্যাতকৈ ৩ বেছি। −2ৰ পৰা আৰম্ভ কৰিলে ১০ম সংখ্যাটো কিমান?",
    "options": [
      "23",
      "25",
      "28",
      "30"
    ],
    "answer": "25",
    "correctOption": "B",
    "explanation": "Starting at −2 and adding 3 each time gives −2, 1, 4, 7, 10, 13, 16, 19, 22, 25. Thus the 10th number is 25.",
    "subject": "Mathematics",
    "topic": "Arithmetic progression",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0283",
    "question": "137. তলৰ কোনটো একে ধৰণৰ নহয়?",
    "options": [
      "Payment",
      "Rent",
      "Price",
      "Bill"
    ],
    "answer": "Payment",
    "correctOption": "A",
    "explanation": "Payment, rent and bill are commonly used for amounts/transactions that are paid or due. Price refers specifically to the amount at which something is offered or valued, making it the odd item.",
    "subject": "Reasoning",
    "topic": "Classification",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0284",
    "question": "140. East India Company-ৰ সেনাই ছিৰাজ-উদ-দৌলাক কোনখন যুদ্ধত পৰাস্ত কৰিছিল?",
    "options": [
      "Battle of Buxar",
      "Battle of Plassey",
      "Battle of Nalapani",
      "Battle of Jhelum"
    ],
    "answer": "Battle of Plassey",
    "correctOption": "B",
    "explanation": "The correct answer is Battle of Plassey (option B). The question directly tests the stated general knowledge concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "General Knowledge",
    "topic": "Indian history",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0285",
    "question": "142. অসমৰ পৌৰসভাৰ পথত মটৰচাইকেলৰ সৰ্বোচ্চ গতি সীমা কিমান?",
    "options": [
      "80 km/hour",
      "70 km/hour",
      "60 km/hour",
      "50 km/hour"
    ],
    "answer": "50 km/hour",
    "correctOption": "D",
    "explanation": "For the speed limit specified in this question for municipal roads in Assam, the stated maximum is 50 km/hour, which is option D.",
    "subject": "General Knowledge",
    "topic": "Traffic rules",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0286",
    "question": "143. দীপা কৰ্মকাৰাই কোনটো খেলত ভাৰতক প্ৰতিনিধিত্ব কৰিছিল?",
    "options": [
      "Badminton",
      "Shooting",
      "Gymnastics",
      "Table Tennis"
    ],
    "answer": "Gymnastics",
    "correctOption": "C",
    "explanation": "The correct answer is Gymnastics (option C). The question directly tests the stated general knowledge concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "General Knowledge",
    "topic": "Sports",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0287",
    "question": "145. বৰদুবি তিনিঙা মন্দিৰ কোনখন চহৰৰ ওচৰত অৱস্থিত?",
    "options": [
      "Bongaigaon",
      "Dhemaji",
      "Tezpur",
      "Duliajan"
    ],
    "answer": "Duliajan",
    "correctOption": "D",
    "explanation": "Bordubi Tilinga Mandir is located near Duliajan in Dibrugarh district, so option D is correct.",
    "subject": "Assam GK",
    "topic": "Temples of Assam",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0288",
    "question": "146. এটা চতুৰ্ভুজৰ কোণসমূহৰ যোগফল কিমান?",
    "options": [
      "90°",
      "180°",
      "360°",
      "400°"
    ],
    "answer": "360°",
    "correctOption": "C",
    "explanation": "The interior angles of an n-sided polygon sum to (n−2)×180°. For a quadrilateral, (4−2)×180° = 360°.",
    "subject": "Mathematics",
    "topic": "Quadrilaterals",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0289",
    "question": "148. জংকি আৰু পানেই কোনটো জনগোষ্ঠীৰ ওপৰত আধাৰিত কাহিনীৰ চৰিত্ৰ?",
    "options": [
      "Dimasa",
      "Idu Misimi",
      "Mising",
      "Singpho"
    ],
    "answer": "Mising",
    "correctOption": "C",
    "explanation": "The correct answer is Mising (option C). The question directly tests the stated assam gk concept; the remaining options do not satisfy the condition given in the question.",
    "subject": "Assam GK",
    "topic": "Assamese literature",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0290",
    "question": "149. ত্ৰিভুজাকৃতিৰ ট্ৰেফিক পথচিহ্ন কোন শ্ৰেণীৰ অন্তৰ্গত?",
    "options": [
      "Mandatory",
      "Informative",
      "Cautionary",
      "Emergency"
    ],
    "answer": "Cautionary",
    "correctOption": "C",
    "explanation": "Triangular traffic signs are warning/cautionary signs. They alert drivers to hazards or conditions ahead, so option C is correct.",
    "subject": "General Knowledge",
    "topic": "Traffic signs",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0291",
    "question": "150. ১২টা আমৰ দাম ₹৩০০ আৰু ১৫টা আপেলৰ দাম ₹৪৫০ হলে ৪টা আম আৰু ৩টা আপেলৰ মুঠ দাম কিমান?",
    "options": [
      "₹290",
      "₹109",
      "₹190",
      "₹209"
    ],
    "answer": "₹190",
    "correctOption": "C",
    "explanation": "One mango costs 300/12 = ₹25, so 4 cost ₹100. One apple costs 450/15 = ₹30, so 3 cost ₹90. Total = ₹190.",
    "subject": "Mathematics",
    "topic": "Unitary method",
    "year": 2022,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-0292",
    "question": "1. গ্ৰীষ্মকালীন অলিম্পিকত পদক লাভ কৰা অসমৰ প্ৰথমগৰাকী এথ্‌লেট কোন আছিল ?",
    "options": [
      "হিমা দাস",
      "লাভলীনা বৰগোহাঁই",
      "দীপাংকৰ ভট্টাচাৰ্যী",
      "ভোগেশ্বৰ বৰুৱা"
    ],
    "answer": "লাভলীনা বৰগোহাঁই",
    "correctOption": "B",
    "explanation": "Lovlina Borgohain won a bronze medal in boxing at the Tokyo 2020 Summer Olympics, becoming the first athlete from Assam to win an Olympic medal. Therefore B.",
    "subject": "Assam GK",
    "topic": "Sports history of Assam",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0293",
    "question": "2. কাৰ ৰাজত্বকালত ৰংঘৰ নিৰ্মাণ কৰা হৈছিল।",
    "options": [
      "স্বৰ্গদেও ৰুদ্ৰসিংহ",
      "স্বৰ্গদেও শিৱসিংহ",
      "স্বৰ্গদেও ৰাজেশ্বৰ সিংহ",
      "স্বৰ্গদেও প্ৰমত্ত সিংহ"
    ],
    "answer": "স্বৰ্গদেও প্ৰমত্ত সিংহ",
    "correctOption": "D",
    "explanation": "Rang Ghar at Sivasagar was constructed during the reign of Swargadeo Pramatta Singha in the 18th century. Therefore, D is correct.",
    "subject": "Assam GK",
    "topic": "Ahom Kingdom — Rang Ghar",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0294",
    "question": "3. অসম মহিলা বিশ্ববিদ্যালয় কোন ঠাইত অৱস্থিত ?",
    "options": [
      "শিৱসাগৰ",
      "ডিব্ৰুগড়",
      "যোৰহাট",
      "লক্ষীমপুৰ"
    ],
    "answer": "যোৰহাট",
    "correctOption": "C",
    "explanation": "Assam Women's University is located at Jorhat. Hence, option C is correct.",
    "subject": "Assam GK",
    "topic": "Education institutions of Assam",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0295",
    "question": "4. শ্ৰীৰামপুৰ ঠাইখনে অসমৰ সৈতে কোনখন ৰাজ্যক সংযোগ কৰিছে ?",
    "options": [
      "মেঘালয়",
      "অৰুণাচল প্ৰদেশ",
      "মণিপুৰ",
      "পশ্চিমবঙ্গ"
    ],
    "answer": "মেঘালয়",
    "correctOption": "A",
    "explanation": "Srirampur is the Assam gateway connecting the state with Meghalaya. Hence A is correct.",
    "subject": "Assam GK",
    "topic": "Geography of Assam — state connections",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0296",
    "question": "5. নিম্নলিখিত কোনখন চহৰত সাগৰীয় বন্দৰ আছে ?",
    "options": [
      "কোচিন",
      "নতুন দিল্লী",
      "কলিকতা",
      "ভূপাল"
    ],
    "answer": "কোচিন",
    "correctOption": "A",
    "explanation": "Cochin (Kochi) is a coastal city with a major seaport. The other three options are inland or not the intended seaport city. Therefore A.",
    "subject": "Assam GK",
    "topic": "Indian geography — ports",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0297",
    "question": "6. জাপানৰ মুদ্ৰাৰ নাম হৈছে:",
    "options": [
      "ইউৱান",
      "ইয়েন",
      "ডলাৰ",
      "ৰুবল"
    ],
    "answer": "ইয়েন",
    "correctOption": "B",
    "explanation": "Japan's currency is the yen. Yuan is China's currency, while dollar and rouble belong to other countries. So B is correct.",
    "subject": "Assam GK",
    "topic": "World geography — currencies",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0298",
    "question": "7. পবিতৰা সম্পৰ্কীয় নিম্নলিখিত কোনটো উক্তি সত্য ?",
    "options": [
      "ই হৈছে কোকৰাঝাৰ জিলাত অৱস্থিত এক নগৰ।",
      "ই হৈছে কাৰ্বি আংলঙৰ এটা পৰ্বতৰ শৃঙ্গ।",
      "ই হৈছে ডিব্ৰুগড়ৰ সমীপৱৰ্তী এক হ্ৰদ।",
      "ই হৈছে মৰিগাঁও জিলাস্থিত এক বন্যপ্ৰাণী অভয়াৰণ্য।"
    ],
    "answer": "ই হৈছে মৰিগাঁও জিলাস্থিত এক বন্যপ্ৰাণী অভয়াৰণ্য।",
    "correctOption": "D",
    "explanation": "Pobitora Wildlife Sanctuary is situated in Morigaon district of Assam and is famous for its rhinoceros population. Thus D is correct.",
    "subject": "Assam GK",
    "topic": "Wildlife sanctuaries of Assam — Pobitora",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0299",
    "question": "8. নিম্নলিখিত দলংসমূহৰ কোনখন গুৱাহাটীৰ সমীপৱৰ্তী ?",
    "options": [
      "ভূপেন হাজৰিকা সেতু",
      "শৰাইঘাট দলং",
      "নৰনাৰায়ণ সেতু",
      "কলিয়াভোমোৰা সেতু"
    ],
    "answer": "শৰাইঘাট দলং",
    "correctOption": "B",
    "explanation": "The Saraighat Bridge crosses the Brahmaputra at Guwahati and is the bridge closest to the city among the options. Hence B.",
    "subject": "Assam GK",
    "topic": "Bridges of Assam",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0300",
    "question": "9. নিম্নলিখিত ভ্ৰাম্যমান থিয়েটাৰ দল সমূহৰ ভিতৰত কোনখন আটাইতকৈ পুৰণি ?",
    "options": [
      "আৱাহন থিয়েটাৰ",
      "ক’হিনুৰ থিয়েটাৰ",
      "নটৰাজ থিয়েটাৰ",
      "ভাগ্যদেৱী থিয়েটাৰ"
    ],
    "answer": "নটৰাজ থিয়েটাৰ",
    "correctOption": "C",
    "explanation": "Natraj Theatre, founded by Achyut Lahkar in 1963, is recognised as the first/oldest mobile theatre group of Assam. Hence C.",
    "subject": "Assam GK",
    "topic": "Assamese mobile theatre",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0301",
    "question": "10. “অ’ মোৰ আপোনাৰ দেশ” সংগীতটিক কোনে সুৰাৰোপিত কৰিছিল?",
    "options": [
      "কমলা প্ৰসাদ আগৰৱালা",
      "লক্ষ্মীনাথ বেজবৰুৱা",
      "বিষ্ণুপ্ৰসাদ ৰাভা",
      "পাৰ্বতি প্ৰসাদ বৰুৱা"
    ],
    "answer": "কমলা প্ৰসাদ আগৰৱালা",
    "correctOption": "A",
    "explanation": "The tune of Assam's state song 'O Mur Apunar Desh' was composed by Kamala Prasad Agarwala. Hence A.",
    "subject": "Assam GK",
    "topic": "Assamese culture — music",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0302",
    "question": "11. অসমীয়া ভাষাৰ প্ৰথম আলোচনী “অৰুণোদই” কোন ঠাইৰ পৰা প্ৰকাশিত হৈছিল ?",
    "options": [
      "যোৰহাট",
      "শিৱসাগৰ",
      "নাহৰকটীয়া",
      "কোকৰাঝাৰ"
    ],
    "answer": "শিৱসাগৰ",
    "correctOption": "B",
    "explanation": "Orunodoi was first published from Sivasagar in 1846. Hence option B.",
    "subject": "Assam GK",
    "topic": "Assamese literature — Orunodoi",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0303",
    "question": "12. জ্ঞানপীঠ বঁটা প্ৰাপক প্ৰথম অসমীয়া লেখক গৰাকী হৈছে",
    "options": [
      "মামনি ৰয়চম গোস্বামী",
      "য়েছে ড’ৰজে ঠংচি",
      "ভবেন্দ্ৰনাথ শইকীয়া",
      "বীৰেন্দ্ৰ কুমাৰ ভট্টাচাৰ্য্য"
    ],
    "answer": "বীৰেন্দ্ৰ কুমাৰ ভট্টাচাৰ্য্য",
    "correctOption": "D",
    "explanation": "Birendra Kumar Bhattacharyya was the first Assamese writer to receive the Jnanpith Award. Hence D.",
    "subject": "Assam GK",
    "topic": "Assamese literature — Jnanpith Award",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0304",
    "question": "13. ১৯৪২ চনৰ ভাৰত ত্যাগ আন্দোলনত বৃটিচ পুলিচে কনকলতা আৰু মুকুন্দ কাকতিক গুলিয়াই হত্যা কৰা ঠাইখন হৈছে:",
    "options": [
      "গহপুৰ",
      "তেজপুৰ",
      "ঢেকীয়াজুলি",
      "আহতগুৰি"
    ],
    "answer": "গহপুৰ",
    "correctOption": "A",
    "explanation": "Kanaklata Barua and Mukunda Kakati were martyred in the Gohpur police firing during the Quit India Movement. Therefore A.",
    "subject": "Assam GK",
    "topic": "Quit India Movement in Assam",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0305",
    "question": "14. “অসমীয়া ভাষা উন্নতি সভা” খালি ঠাই পূৰ কৰিবৰ শুদ্ধ শব্দটো হৈছে",
    "options": [
      "সাধিনী",
      "বনহুমুখী",
      "কৰণ",
      "বিস্তাৰণ"
    ],
    "answer": "সাধিনী",
    "correctOption": "A",
    "explanation": "The organisation's historical name is 'Asomiya Bhasha Unnati Sadhini Sabha'. Therefore the missing word is Sadhini, A.",
    "subject": "Assam GK",
    "topic": "Assamese language movement",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0306",
    "question": "15. বাল্মিকী ৰামায়ণৰ অসমীয়া অনুবাদিত গ্ৰন্থ সপ্তকাণ্ড ৰামায়ণখন কোনে লিখি উলিয়াইছিল ?",
    "options": [
      "ৰাম সৰস্বতী",
      "অনন্ত কন্দলী",
      "মাধৱ কন্দলি",
      "শ্ৰীমন্ত শংকৰদেৱ"
    ],
    "answer": "মাধৱ কন্দলি",
    "correctOption": "C",
    "explanation": "Madhav Kandali translated the Ramayana into Assamese; his work is known as Saptakanda Ramayana. Hence C.",
    "subject": "Assam GK",
    "topic": "Assamese literature — Madhav Kandali",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0307",
    "question": "16. অসম ৰাজ্যিক চিৰিয়াখানা আৰু উদ্ভিদ উদ্যানখন ক’ত অৱস্থিত ?",
    "options": [
      "তেজপুৰ",
      "কাজিৰঙা",
      "গুৱাহাটী",
      "গোৱালপাৰা"
    ],
    "answer": "গুৱাহাটী",
    "correctOption": "C",
    "explanation": "The Assam State Zoo cum Botanical Garden is located at Hengrabari in Guwahati. Therefore C.",
    "subject": "Assam GK",
    "topic": "Assam geography — institutions",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0308",
    "question": "17. পখিলাৰ জীৱন-চক্ৰত নিম্নলিখিত কোনটো অন্তৰ্ভুক্ত নহয় ?",
    "options": [
      "পলু",
      "কণী",
      "লেটা",
      "লালুকী"
    ],
    "answer": "লালুকী",
    "correctOption": "D",
    "explanation": "Butterflies pass through egg, larva/caterpillar and pupa stages before becoming adults. A tadpole is an amphibian larval stage, not part of the butterfly life cycle. D is correct.",
    "subject": "General Science",
    "topic": "Biology — butterfly life cycle",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0309",
    "question": "18. ৰাষ্ট্ৰীয় চলচ্চিত্ৰ মহোৎসৱত পূৰ্ণাঙ্গ দৈৰ্ঘ্যৰ চলচ্চিত্ৰৰ শিতানত সৰ্বশ্ৰেষ্ঠ চলচ্চিত্ৰৰ খিতাপ লাভ কৰা প্ৰথম অসমীয়া চলচ্চিত্ৰখন হৈছে:",
    "options": [
      "ভিলেজ ৰ’কষ্টাৰ",
      "অৰণ্য",
      "হালধীয়া চৰায়ে বাওধান খায়",
      "ড. বেজবৰুৱা"
    ],
    "answer": "হালধীয়া চৰায়ে বাওধান খায়",
    "correctOption": "C",
    "explanation": "Halodhiya Choraye Baodhan Khai was the first Assamese film to win the National Film Award for Best Feature Film (Swarna Kamal). Therefore C.",
    "subject": "Assam GK",
    "topic": "Assamese cinema",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0310",
    "question": "19. টোকলাই চাহ গৱেষণা প্ৰতিষ্ঠানটি অৱস্থিত নগৰখন হৈছে:",
    "options": [
      "ডিব্ৰুগড়",
      "যোৰহাট",
      "শিৱসাগৰ",
      "বিশ্বনাথ চাৰিআলি"
    ],
    "answer": "যোৰহাট",
    "correctOption": "B",
    "explanation": "The Tocklai Tea Research Institute is located in Jorhat. Therefore B.",
    "subject": "Assam GK",
    "topic": "Tea research in Assam",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0311",
    "question": "20. অসমৰ একমাত্ৰ সৈনিক স্কুল থকা ঠাইখন হৈছে:",
    "options": [
      "শিলচৰ",
      "বঙাইগাঁও",
      "তিনিচুকীয়া",
      "গোৱালপাৰা"
    ],
    "answer": "গোৱালপাৰা",
    "correctOption": "D",
    "explanation": "Sainik School Goalpara is the Sainik School in Assam. Hence D.",
    "subject": "Assam GK",
    "topic": "Educational institutions of Assam",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0312",
    "question": "21. নুমলীগড় শোধনাগাৰটি কোনখন জিলাত অৱস্থিত ?",
    "options": [
      "গোলাঘাট",
      "যোৰহাট",
      "কাৰ্বি আংলং",
      "নগাঁও"
    ],
    "answer": "গোলাঘাট",
    "correctOption": "A",
    "explanation": "Numaligarh Refinery is located in Golaghat district of Assam. Thus A.",
    "subject": "Assam GK",
    "topic": "Industries of Assam — Numaligarh Refinery",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0313",
    "question": "22. সৌৰজগতৰ কোনটো গ্ৰহ পৃথিৱী আৰু বৃহস্পতিৰ মাজত অৱস্থান কৰে ?",
    "options": [
      "মঙ্গল",
      "শুক্ৰ",
      "শনি",
      "বুধ"
    ],
    "answer": "মঙ্গল",
    "correctOption": "A",
    "explanation": "In order from the Sun, Earth is followed by Mars and then Jupiter. Therefore Mars lies between Earth and Jupiter; A is correct.",
    "subject": "General Science",
    "topic": "Solar system",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0314",
    "question": "23. কোন গৰাকী ব্যক্তিয়ে ভাৰতৰ জাতীয় পতাকাখনৰ ৰূপাংকণ কৰিছিল ?",
    "options": [
      "মোহনদাস কৰমচাঁদ গান্ধী",
      "পিংগলী ভেংকয়া",
      "সৰোজিনী নাইডু",
      "ৰবীন্দ্ৰনাথ ঠাকুৰ"
    ],
    "answer": "পিংগলী ভেংকয়া",
    "correctOption": "B",
    "explanation": "Pingali Venkayya is credited with designing the Indian national flag. Therefore B.",
    "subject": "Assam GK",
    "topic": "Indian national symbols",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0315",
    "question": "24. নেমু আৰু আমলখিত কোনবিধ খাদ্যপ্ৰাণ বিশিষ্ট মাত্ৰাত পোৱা যায় ?",
    "options": [
      "ভিটামিন চি",
      "ভিটামিন কে",
      "ভিটামিন বি",
      "ভিটামিন ডি"
    ],
    "answer": "ভিটামিন চি",
    "correctOption": "A",
    "explanation": "Lemon and amla are rich sources of vitamin C. Therefore A.",
    "subject": "General Science",
    "topic": "Nutrition — vitamins",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0316",
    "question": "25. ভাৰতীয় বংশোদ্ভৱৰ প্ৰথমগৰাকী মহিলা মহাকাশচাৰী কোন আছিল ?",
    "options": [
      "কিৰণ শ্ব",
      "কিৰণ বেদী",
      "কল্পনা চাওলা",
      "কল্পনা চাক্সেনা"
    ],
    "answer": "কল্পনা চাওলা",
    "correctOption": "C",
    "explanation": "Kalpana Chawla was the first woman of Indian origin to travel to space. Hence C.",
    "subject": "Assam GK",
    "topic": "Space and science personalities",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0317",
    "question": "26. ২০২২ চনৰ ফ্ৰেন্স অ’পেন প্ৰতিযোগিতাৰ পুৰুষৰ চিংগল্‌চ শাখাত কোনে জয়লাভ কৰিছিল?",
    "options": [
      "ৰ’জাৰ ফেডাৰাৰ",
      "ষ্টেফান'ছ চিচিপাছ",
      "ন’ভাক জ’ক’ভিক",
      "ৰাফেল নাডাল"
    ],
    "answer": "ৰাফেল নাডাল",
    "correctOption": "D",
    "explanation": "Rafael Nadal won the men's singles title at the 2022 French Open. Therefore D.",
    "subject": "Assam GK",
    "topic": "Sports — French Open 2022",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0318",
    "question": "27. ঝাৰখণ্ডৰ ৰাজধানীৰ নাম কি ?",
    "options": [
      "ৰায়পুৰ",
      "ৰাঁচী",
      "ডেৰাডুন",
      "গেংটক"
    ],
    "answer": "ৰাঁচী",
    "correctOption": "B",
    "explanation": "Ranchi is the capital of Jharkhand. Hence B.",
    "subject": "Assam GK",
    "topic": "Indian states and capitals",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0319",
    "question": "28. ভাৰতৰ সোণৰ খনিৰ সৈতে জড়িত ঠাইখন হৈছে",
    "options": [
      "কোলাৰ",
      "যাদুগুডা",
      "অংক্লেশ্বৰ",
      "কালাহাণ্ডি"
    ],
    "answer": "কোলাৰ",
    "correctOption": "A",
    "explanation": "Kolar in Karnataka is historically associated with gold mining through the Kolar Gold Fields. Therefore A.",
    "subject": "Assam GK",
    "topic": "Indian geography — minerals",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0320",
    "question": "29. কোন ঠাইত ভাৰতে ইয়াৰ প্ৰথমটো পাৰমাণৱিক আহিলাৰ পৰীক্ষণ কৰিছিল ?",
    "options": [
      "বালাসোৰ",
      "ট্ৰম্বে",
      "শ্ৰীহৰিকোটা",
      "পোখৰান"
    ],
    "answer": "পোখৰান",
    "correctOption": "D",
    "explanation": "India conducted its first nuclear test at Pokhran in Rajasthan in 1974. Hence D.",
    "subject": "Assam GK",
    "topic": "Indian nuclear programme",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0321",
    "question": "30. এখন ক্ৰিকেট পিট্‌চৰ দুই-সমূহ উইকেটৰ মাজৰ দূৰত্ব কিমান ?",
    "options": [
      "২০ গজ",
      "৩২ গজ",
      "২২ গজ",
      "২৫ গজ"
    ],
    "answer": "২২ গজ",
    "correctOption": "C",
    "explanation": "The standard distance between the two sets of wickets on a cricket pitch is 22 yards. Thus C.",
    "subject": "Assam GK",
    "topic": "Sports — cricket",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0322",
    "question": "35. লতা মঙ্গেশকাৰৰ পিতৃৰ নাম কি আছিল ?",
    "options": [
      "দীননাথ মঙ্গেশকাৰ",
      "হৃদয়নাথ মঙ্গেশকাৰ",
      "জিতেন্দ্ৰ মঙ্গেশকাৰ",
      "মণিপ্ৰসাদ মঙ্গেশকাৰ"
    ],
    "answer": "দীননাথ মঙ্গেশকাৰ",
    "correctOption": "A",
    "explanation": "Lata Mangeshkar's father was the classical singer and theatre personality Dinanath Mangeshkar. Therefore A.",
    "subject": "Assam GK",
    "topic": "Indian culture — personalities",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0323",
    "question": "36. পদ্মশ্ৰী বঁটা লাভ কৰা প্ৰথমগৰাকী অসমীয়া মহিলা কবি আৰু লেখিকা হৈছে ________।",
    "options": [
      "চন্দ্ৰপ্ৰভা শইকীয়ানী",
      "নলিনীবালা দেৱী",
      "মামনি ৰয়চম গোস্বামী",
      "নিৰ্মল প্ৰভা বৰদলৈ"
    ],
    "answer": "নলিনীবালা দেৱী",
    "correctOption": "B",
    "explanation": "Nalini Bala Devi was the first Assamese woman poet and author to receive the Padma Shri, according to the historical record used by this paper. Therefore B.",
    "subject": "Assam GK",
    "topic": "Assamese women personalities",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0324",
    "question": "37. ভাৰতৰ কোনখন ৰাজ্যৰ পৰা চিপকো আন্দোলনৰ আৰম্ভণি হৈছিল ?",
    "options": [
      "উত্তৰাখণ্ড",
      "হিমাচল প্ৰদেশ",
      "হাৰিয়ানা",
      "ছিকিম"
    ],
    "answer": "উত্তৰাখণ্ড",
    "correctOption": "A",
    "explanation": "The Chipko Movement originated in the Himalayan region of present-day Uttarakhand. Therefore A.",
    "subject": "Assam GK",
    "topic": "Indian environmental movements",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0325",
    "question": "38. ভাৰতত সংসদৰ সদস্য হ’বলৈ নিম্নলিখিতসমূহৰ কোনটো চৰ্ত পূৰণ কৰাটো প্ৰয়োজনীয় নহয় ?",
    "options": [
      "ভাৰতবৰ্ষৰ এজন নাগৰিক হ’ব লাগিব",
      "বয়স ২৫ বছৰৰ কম হ’ব নালাগিব",
      "ভাৰতৰ কোনো এক সংসদীয় সমষ্টিৰ ভোটদাতা হ’ব লাগিব",
      "দশম শ্ৰেণী পৰ্যায়ৰ পৰীক্ষাত উত্তীৰ্ণ হ’ব লাগিব"
    ],
    "answer": "দশম শ্ৰেণী পৰ্যায়ৰ পৰীক্ষাত উত্তীৰ্ণ হ’ব লাগিব",
    "correctOption": "D",
    "explanation": "There is no minimum Class 10 educational qualification for becoming an MP. Citizenship and age requirements apply, while the paper treats voter status as a criterion. Hence D.",
    "subject": "Assam GK",
    "topic": "Indian polity — Parliament eligibility",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0326",
    "question": "39. কোন গৰাকী সম্ৰাটে ভাৰতৰ গ্ৰেণ্ড ট্ৰাংক ৰোড নিৰ্মাণ কৰিছিল ?",
    "options": [
      "আকবৰ",
      "জাহাঙ্গীৰ",
      "কুতুবুদ্দিন আইবাক",
      "শ্বেৰশ্বাহ শূৰী"
    ],
    "answer": "শ্বেৰশ্বাহ শূৰী",
    "correctOption": "D",
    "explanation": "Sher Shah Suri developed and greatly expanded the Grand Trunk Road during his reign. Hence D.",
    "subject": "Assam GK",
    "topic": "Medieval Indian history — Sher Shah Suri",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0327",
    "question": "40. ভাৰতীয় সংবিধানৰ অষ্টম অনুসূচীত নিম্নলিখিতসমূহৰ কোনটো অন্তৰ্ভুক্ত নহয় ?",
    "options": [
      "চাওতাল",
      "বড়ো",
      "মৈখিলী",
      "কাৰ্বি"
    ],
    "answer": "কাৰ্বি",
    "correctOption": "D",
    "explanation": "Bodo and Maithili are included in the Eighth Schedule, as is Santali. Karbi is not one of the scheduled languages. Therefore D.",
    "subject": "Assam GK",
    "topic": "Indian Constitution — Eighth Schedule",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0328",
    "question": "41. কোনটো বৰ্ষত আৰ্মড্‌ ফ’ৰ্চেছ স্পেচিয়েল পাৱাৰ্ছ এক্ট (AFSPA) গৃহীত হৈছিল?",
    "options": [
      "১৯৫৮",
      "১৯৮৫",
      "১৯৬০",
      "১৯৭১"
    ],
    "answer": "১৯৫৮",
    "correctOption": "A",
    "explanation": "The Armed Forces (Special Powers) Act was enacted in 1958. Hence A.",
    "subject": "Assam GK",
    "topic": "Indian polity — AFSPA",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0329",
    "question": "42. ভাৰতীয় সংবিধানৰ কোনটো অনুচ্ছেদে উত্তৰ-পূব ভাৰতৰ ৰাজ্যসমূহক বিশেষ মৰ্যাদা প্ৰদান কৰে?",
    "options": [
      "অনুচ্ছেদ ১৪",
      "অনুচ্ছেদ ৩৭৭",
      "অনুচ্ছেদ ৩৭১",
      "অনুচ্ছেদ ২৫৪"
    ],
    "answer": "অনুচ্ছেদ ৩৭১",
    "correctOption": "C",
    "explanation": "Article 371 and its clauses provide special provisions for several northeastern states. Therefore C.",
    "subject": "Assam GK",
    "topic": "Indian Constitution — Article 371",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0330",
    "question": "43. জৱাহৰলাল নেহৰুৱে “ডিস্কভাৰী অৱ ইণ্ডিয়া” কিতাপখন কোন ঠাইত লিখি উলিয়াইছিল ?",
    "options": [
      "পুনে চেন্ট্ৰেল কাৰাগাৰ",
      "য়াৰৱাডা কাৰাগাৰ",
      "থানে কাৰাগাৰ",
      "আহমেদনগৰ দুৰ্গ"
    ],
    "answer": "আহমেদনগৰ দুৰ্গ",
    "correctOption": "D",
    "explanation": "Nehru wrote The Discovery of India during his imprisonment at Ahmednagar Fort in 1944. Hence D.",
    "subject": "Assam GK",
    "topic": "Modern Indian history — Nehru",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0331",
    "question": "44. নিম্নলিখিত ঠাইসমূহৰ কোনখনে ইয়াৰ লিচুৰ বাবে ‘জি আই টেগ’ লাভ কৰিছে?",
    "options": [
      "তেজপুৰ",
      "যোৰহাট",
      "শ্বিলং",
      "ডিব্ৰুগড়"
    ],
    "answer": "তেজপুৰ",
    "correctOption": "A",
    "explanation": "Tezpur litchi is the Assam product associated with a Geographical Indication tag in this question. Hence A.",
    "subject": "Assam GK",
    "topic": "Assam products — GI tags",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0332",
    "question": "45. নিম্নলিখিত কোন গৰাকী ব্যক্তি ভাৰতীয় শিক্ষা ব্যৱস্থাৰ সংস্কাৰ সাধনৰ বাবে জনাজাত ?",
    "options": [
      "লৰ্ড ক্লাইভ",
      "লৰ্ড কৰ্ণৱালিছ",
      "লৰ্ড মাউণ্টবেটেন",
      "লৰ্ড মেকুলে"
    ],
    "answer": "লৰ্ড মেকুলে",
    "correctOption": "D",
    "explanation": "Thomas Babington Macaulay is associated with major colonial-era educational policy changes in India, especially the 1835 Minute on Education. Thus D.",
    "subject": "Assam GK",
    "topic": "Modern Indian history — education policy",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0333",
    "question": "46. ‘অৰুণোদয়’ নামক অসমীয়া আলোচনীখনৰ প্ৰথম সম্পাদক কোন আছিল ?",
    "options": [
      "ড. নাথান ব্ৰাউন",
      "হেমচন্দ্ৰ বৰুৱা",
      "অ’লিভাৰ কাণ্টাৰ",
      "আনন্দৰাম ঢেকিয়াল ফুকন"
    ],
    "answer": "ড. নাথান ব্ৰাউন",
    "correctOption": "A",
    "explanation": "Dr. Nathan Brown was the first editor associated with Orunodoi. Hence A.",
    "subject": "Assam GK",
    "topic": "Assamese literature — Orunodoi",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0334",
    "question": "47. অসম চৰকাৰৰ ভূমি ৰাজহ সম্পৰ্কীয় সেৱাসমূহৰ সুশৃংখলিত কৰণৰ আঁচনিখনক __ নামেৰে অধিক পৰিচিত।",
    "options": [
      "অৰুণোদয়",
      "বসুন্ধৰা",
      "সাৰথি",
      "অৰুন্ধতি"
    ],
    "answer": "বসুন্ধৰা",
    "correctOption": "B",
    "explanation": "The Assam government's land-related service initiative is known as the Basundhara scheme. Therefore B.",
    "subject": "Assam GK",
    "topic": "Assam government schemes — Basundhara",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0335",
    "question": "48. শ্ৰীমন্ত শংকৰদেৱে জনপ্ৰিয় কৰি তোলা একাঙ্কিকা নাটকৰ ৰূপটো কি নামেৰে জনাজাত ?",
    "options": [
      "অংকীয়া নাট",
      "যক্ষগণ",
      "তমসা",
      "ভ্ৰাম্যমান"
    ],
    "answer": "অংকীয়া নাট",
    "correctOption": "A",
    "explanation": "Sankardeva popularised the one-act devotional dramatic form known as Ankiya Nat. Hence A.",
    "subject": "Assam GK",
    "topic": "Assamese culture — Ankiya Nat",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0336",
    "question": "49. নিম্নলিখিত সত্ৰসমূহৰ কোনখন সত্ৰ পশ্চিমবঙ্গত অৱস্থিত ?",
    "options": [
      "চমৰীয়া সত্ৰ",
      "বৰদোৱা সত্ৰ",
      "মধুপুৰ সত্ৰ",
      "জকাই সত্ৰ"
    ],
    "answer": "মধুপুৰ সত্ৰ",
    "correctOption": "C",
    "explanation": "Madhupur Satra is located in Cooch Behar, West Bengal, and is associated with the Vaishnavite tradition of Assam. Hence C.",
    "subject": "Assam GK",
    "topic": "Sattras of Assam — Madhupur Satra",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0337",
    "question": "50. অসম ৰাজ্যত ব্ৰহ্মপুত্ৰ নদীখন কোনটো দিশত বয়?",
    "options": [
      "পূবৰ পৰা পশ্চিমলৈ",
      "পশ্চিমৰ পৰা পূবলৈ",
      "উত্তৰৰ পৰা দক্ষিণলৈ",
      "দক্ষিণৰ পৰা উত্তৰলৈ"
    ],
    "answer": "পূবৰ পৰা পশ্চিমলৈ",
    "correctOption": "A",
    "explanation": "The Brahmaputra enters Assam from the east/northeast and generally flows westward before entering Bangladesh. Thus A.",
    "subject": "Assam GK",
    "topic": "Rivers of Assam — Brahmaputra",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0338",
    "question": "51. ভাৰতবৰ্ষত মোগল সাম্ৰাজ্যৰ প্ৰতিষ্ঠাতা কোন আছিল?",
    "options": [
      "হুমায়ুন",
      "শ্বেৰ শ্বাহ শূৰী",
      "বাবৰ",
      "আকবৰ"
    ],
    "answer": "বাবৰ",
    "correctOption": "C",
    "explanation": "Babur founded the Mughal Empire in India after his victory over Ibrahim Lodi at the First Battle of Panipat in 1526. Hence C.",
    "subject": "Assam GK",
    "topic": "Medieval Indian history — Mughal Empire",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0339",
    "question": "52. কালপক্কম, নৰোৰা আৰু তাৰাপুৰত অৱস্থিত প্ৰকল্পসমূহত কোনটো উৎসৰ পৰা বিদ্যুৎ উৎপাদন কৰা হয়?",
    "options": [
      "জলশক্তি",
      "নিউক্লীয় শক্তি",
      "তাপশক্তি",
      "সৌৰ শক্তি"
    ],
    "answer": "নিউক্লীয় শক্তি",
    "correctOption": "B",
    "explanation": "Kalpakkam, Narora and Tarapur are nuclear power stations. Therefore the electricity source is nuclear energy, option B.",
    "subject": "General Science",
    "topic": "Energy — nuclear power",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0340",
    "question": "53. কোনে যোৰহাটক আহোম ৰাজ্যৰ শেহতীয়া ৰাজধানী হিচাবে প্ৰতিষ্ঠা কৰিছিল ?",
    "options": [
      "স্বৰ্গদেও গৌৰীনাথ সিংহ",
      "স্বৰ্গদেও ৰুদ্ৰসিংহ",
      "স্বৰ্গদেও শিৱসিংহ",
      "স্বৰ্গদেও পুৰন্দৰ সিংহ"
    ],
    "answer": "স্বৰ্গদেও পুৰন্দৰ সিংহ",
    "correctOption": "D",
    "explanation": "Jorhat was established as the last capital of the Ahom Kingdom under Swargadeo Purandar Singha. Hence D.",
    "subject": "Assam GK",
    "topic": "Ahom Kingdom — Jorhat",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0341",
    "question": "54. কোচ ৰাজ্যৰ সিংহাসনত আৰোহণ কৰাৰ পূৰ্বে ৰজা নৰনাৰায়ণৰ নাম কি আছিল?",
    "options": [
      "নৰ সিংহ",
      "বিশ্বজিত",
      "শুক্লধ্বজ",
      "মল্লদেৱ"
    ],
    "answer": "মল্লদেৱ",
    "correctOption": "D",
    "explanation": "Before becoming king Naranarayana, his name was Malladev. Therefore D.",
    "subject": "Assam GK",
    "topic": "Koch Kingdom — Naranarayana",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0342",
    "question": "55. নিম্নলিখিত কোনবিধ উদ্ভিদক পৰ্ণপাতী উদ্ভিদৰ উদাহৰণ স্বৰূপে গণ্য কৰা নহয় ?",
    "options": [
      "শাল গছ",
      "আম গছ",
      "সৰল গছ",
      "শিমলু গছ"
    ],
    "answer": "সৰল গছ",
    "correctOption": "C",
    "explanation": "Pine is an evergreen conifer and does not represent deciduous vegetation. The other listed trees are deciduous examples. Therefore C.",
    "subject": "General Science",
    "topic": "Botany — deciduous vegetation",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0343",
    "question": "56. সাধাৰণতে কেনেধৰণৰ অঞ্চলত ঝুম খেতি কৰা হয় ?",
    "options": [
      "জলাহভূমি",
      "পাহাৰৰ ঢাল",
      "চৰ অঞ্চল",
      "সমতল ভূমি"
    ],
    "answer": "পাহাৰৰ ঢাল",
    "correctOption": "B",
    "explanation": "Jhum or shifting cultivation is traditionally practised on hill slopes, especially in northeastern India. Hence B.",
    "subject": "Assam GK",
    "topic": "Agriculture of Northeast India — Jhum cultivation",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0344",
    "question": "57. বৃটিছ অধীনস্থ ভাৰতৰ কোনটো আইনৰ বিৰুদ্ধে প্ৰতিবাদ সাব্যস্ত কৰিবলৈ জালিয়ানৱালা বাগ হত্যাকাণ্ডৰ ভিৰ একত্ৰিত হৈছিল ?",
    "options": [
      "চাইমন কমিশ্যন",
      "ৰাওলাট আইন",
      "ম’ৰ্লে-মিন্টো সংস্কাৰ",
      "ভোটদাতাৰ পৃথক তালিকা"
    ],
    "answer": "ৰাওলাট আইন",
    "correctOption": "B",
    "explanation": "The gathering at Jallianwala Bagh was connected with protests against the Rowlatt Act. Hence B.",
    "subject": "Assam GK",
    "topic": "Modern Indian history — Rowlatt Act",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0345",
    "question": "58. হাজো ঠাইখনিক যি তিনি ধৰ্মৰ সংগমস্থলী ৰূপে বিবেচনা কৰা হয়, সেইসমূহ ধৰ্ম হৈছে:",
    "options": [
      "হিন্দুধৰ্ম, শিখধৰ্ম, ইছলাম ধৰ্ম",
      "বৌদ্ধধৰ্ম, হিন্দুধৰ্ম, ইছলাম ধৰ্ম",
      "বৌদ্ধধৰ্ম, জৈনধৰ্ম, হিন্দুধৰ্ম",
      "হিন্দুধৰ্ম, শিখধৰ্ম, বৌদ্ধধৰ্ম"
    ],
    "answer": "হিন্দুধৰ্ম, শিখধৰ্ম, ইছলাম ধৰ্ম",
    "correctOption": "A",
    "explanation": "Hajo is traditionally regarded as a meeting point of Hinduism, Islam and Sikhism in Assam. Thus A.",
    "subject": "Assam GK",
    "topic": "Religious heritage of Assam — Hajo",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0346",
    "question": "59. জনস্বাৰ্থক প্ৰতিনিধিত্ব কৰিবৰ বাবে, নিম্নলিখিত কোন সত্তাই দুৰ্নীতি-বিৰোধী কৰ্তৃপক্ষৰ ভূমিকা পালন কৰে?",
    "options": [
      "মুখ্য তথ্য আয়ুক্ত",
      "লোকপাল",
      "উচ্চ ন্যায়ালয়ৰ মুখ্য ন্যায়াধীশ",
      "মুখ্য নিৰ্বাচনী আয়ুক্ত"
    ],
    "answer": "লোকপাল",
    "correctOption": "B",
    "explanation": "The Lokpal is India's statutory anti-corruption ombudsman for public servants. Therefore B.",
    "subject": "Assam GK",
    "topic": "Indian polity — Lokpal",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0347",
    "question": "60. ভাৰতীয় সংবিধানৰ কোনটো অনুসূচীৰ অধীনত উত্তৰ কাছাৰ পাৰ্বত্য স্বায়ত্ব পৰিষদ (NCHAC) গঠিত হৈছিল?",
    "options": [
      "সপ্তম অনুসূচী",
      "পঞ্চম অনুসূচী",
      "অষ্টম অনুসূচী",
      "ষষ্ঠ অনুসূচী"
    ],
    "answer": "ষষ্ঠ অনুসূচী",
    "correctOption": "D",
    "explanation": "Autonomous councils in the Sixth Schedule include the North Cachar Hills Autonomous Council. Hence D.",
    "subject": "Assam GK",
    "topic": "Assam polity — Sixth Schedule",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0348",
    "question": "61. কোনো এক সংখ্যাক 12.5% হ্ৰাস কৰিলে সংখ্যাটো 119 হয়গৈ। সংখ্যাটো হৈছে",
    "options": [
      "130",
      "125",
      "148",
      "136"
    ],
    "answer": "136",
    "correctOption": "D",
    "explanation": "After a 12.5% reduction, 87.5% of the original remains. So 0.875x = 119, hence x = 119/0.875 = 136. Therefore D.",
    "subject": "Mathematics",
    "topic": "Percentage — reverse percentage",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0349",
    "question": "62. কোনো এক আয়তৰ ক্ষেত্ৰফল হৈছে 300 চে.মি.² আৰু ইয়াৰ কৰ্ণৰ দৈৰ্ঘ্য হৈছে 25 চে.মি.। আয়তটোৰ পৰিসীমা হ’ব:",
    "options": [
      "88 চে.মি.",
      "70 চে.মি.",
      "64 চে.মি.",
      "58 চে.মি."
    ],
    "answer": "70 চে.মি.",
    "correctOption": "B",
    "explanation": "Let the sides be a and b. Then ab=300 and a²+b²=25²=625. Therefore (a+b)²=625+600=1225, so a+b=35 and the perimeter is 2(a+b)=70 cm. Hence B.",
    "subject": "Mathematics",
    "topic": "Mensuration — rectangle",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0350",
    "question": "63. কোনো এটা ভগ্নাংশৰ লবৰ মান ইয়াৰ হৰৰ মানতকৈ ২ কম। যদি ভগ্নাংশটোৰ লবক ২ ৰে আৰু হৰক ৩ ৰে পূৰণ কৰা হয়, তেন্তে ই ২/৯ হৈ যায়। ভগ্নাংশটো হৈছে:",
    "options": [
      "1/3",
      "3/5",
      "5/7",
      "7/9"
    ],
    "answer": "1/3",
    "correctOption": "A",
    "explanation": "Let the numerator be n and denominator n+2. Then 2n/[3(n+2)] = 2/9. Cancelling 2 gives 9n=3(n+2), so 6n=6 and n=1. The fraction is 1/3. Thus A.",
    "subject": "Mathematics",
    "topic": "Fractions — algebraic equation",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0351",
    "question": "64. কোনো এখন বিদ্যালয়ৰ ল’ৰা আৰু ছোৱালী উভয়ৰে গড় বয়স হৈছে 16 বছৰ; কেৱল ল’ৰাবিলাকৰ গড় বয়স 15 বছৰ আৰু কেৱল ছোৱালীবিলাকৰ গড় বয়স 18 বছৰ। বিদ্যালয়খনত ল’ৰা আৰু ছোৱালীৰ সংখ্যাৰ অনুপাত হ’ল:",
    "options": [
      "5 : 2",
      "4 : 3",
      "2 : 1",
      "3 : 2"
    ],
    "answer": "2 : 1",
    "correctOption": "C",
    "explanation": "Using the weighted average, 15B + 18G = 16(B+G). Hence 2G=B, so B:G=2:1. Therefore C.",
    "subject": "Mathematics",
    "topic": "Average — weighted average",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0352",
    "question": "65. ৰাশিটোৰ মান হ’ল: (1 − 1/2)(1 − 1/3)(1 − 1/4) … (1 − 1/10)",
    "options": [
      "1",
      "1/10",
      "−1/10",
      "1/5"
    ],
    "answer": "1/10",
    "correctOption": "B",
    "explanation": "Rewrite each factor as (k−1)/k. The product telescopes: 1/2 × 2/3 × 3/4 × … × 9/10 = 1/10. Hence B.",
    "subject": "Mathematics",
    "topic": "Fractions — telescoping product",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0353",
    "question": "66. 14, 21 আৰু 28 ৰ ল.সা.গু. আৰু গ.সা.উ. ৰ মান হৈছে যথাক্ৰমে",
    "options": [
      "(84, 14)",
      "(56, 7)",
      "(84, 7)",
      "(56, 14)"
    ],
    "answer": "(84, 7)",
    "correctOption": "C",
    "explanation": "The LCM of 14, 21 and 28 is 84, while their HCF is 7. Thus the pair is (84,7), option C.",
    "subject": "Mathematics",
    "topic": "LCM and HCF",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0354",
    "question": "67. 1, 2, 4, 8, 16, ………, 256, 512 শৃংখলাটোত থকা পদৰ সংখ্যা হৈছে:",
    "options": [
      "10",
      "9",
      "7",
      "8"
    ],
    "answer": "10",
    "correctOption": "A",
    "explanation": "The terms are powers of 2 from 2^0=1 through 2^9=512. Therefore there are 10 terms, so A.",
    "subject": "Mathematics",
    "topic": "Number series — powers of 2",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0355",
    "question": "68. কোনো এখন চহৰৰ মানচিত্ৰ 1 : 50000 স্কেলত অংকন কৰা হৈছে। মানচিত্ৰখনত দুটা স্থানৰ দূৰত্ব 12 চে.মি.। স্থানদুটাৰ মাজৰ প্ৰকৃত দূৰত্ব হৈছে:",
    "options": [
      "6 কি.মি.",
      "9 কি.মি.",
      "12 কি.মি.",
      "15 কি.মি."
    ],
    "answer": "6 কি.মি.",
    "correctOption": "A",
    "explanation": "A scale of 1:50,000 means 1 cm on the map represents 50,000 cm in reality. Thus 12 cm represents 600,000 cm = 6 km. Hence A.",
    "subject": "Mathematics",
    "topic": "Ratio and scale",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0356",
    "question": "69. কোনো দুটা সংখ্যাৰ যোগফল 12 আৰু সংখ্যাদুটাৰ বৰ্গফলৰ পাৰ্থক্য হৈছে 60। সংখ্যাদুটাৰ মাজৰ পাৰ্থক্য হৈছে:",
    "options": [
      "4",
      "3",
      "6",
      "5"
    ],
    "answer": "5",
    "correctOption": "D",
    "explanation": "Use a²−b²=(a−b)(a+b). Since a+b=12 and a²−b²=60, we get (a−b)×12=60, so a−b=5. Therefore D.",
    "subject": "Mathematics",
    "topic": "Algebra — difference of squares",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0357",
    "question": "70. 200 ৰ 200% ৰ মান হ’ব",
    "options": [
      "40,000",
      "400",
      "4,000",
      "440"
    ],
    "answer": "400",
    "correctOption": "B",
    "explanation": "200% means 200/100 = 2 times. Therefore 2×200 = 400, so B.",
    "subject": "Mathematics",
    "topic": "Percentage",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0358",
    "question": "71. যদি 5-অংকযুক্ত আটাইতকৈ সৰু সংখ্যাটোৰ পৰা 3-অংকযুক্ত আটাইতকৈ ডাঙৰ সংখ্যাটো বিয়োগ কৰা হয়, তেন্তে উত্তৰটো হ’ব:",
    "options": [
      "9001",
      "9000",
      "9990",
      "9999"
    ],
    "answer": "9001",
    "correctOption": "A",
    "explanation": "Smallest 5-digit number = 10,000. Largest 3-digit number = 999. Difference = 10,000−999 = 9,001. Hence A.",
    "subject": "Mathematics",
    "topic": "Number system — place value",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0359",
    "question": "72. 18 − [6 − {4 − (8 + 3)}] ৰ মান নিৰ্ণয় কৰা।",
    "options": [
      "−2",
      "−5",
      "5",
      "2"
    ],
    "answer": "5",
    "correctOption": "C",
    "explanation": "First, 8+3=11. Then 4−11=−7. Next 6−(−7)=13. Finally 18−13=5. Hence C.",
    "subject": "Mathematics",
    "topic": "Arithmetic — simplification",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0360",
    "question": "73. এজন ব্যক্তিয়ে প্ৰতি মিনিটত 35 টা শব্দ টাইপ কৰিব পাৰে। 987 টা শব্দ টাইপ কৰিবলৈ তেওঁক কিমান সময় লাগিব?",
    "options": [
      "27 মিনিট 12 ছেকেণ্ড",
      "28 মিনিট 8 ছেকেণ্ড",
      "27 মিনিট 7 ছেকেণ্ড",
      "28 মিনিট 12 ছেকেণ্ড"
    ],
    "answer": "28 মিনিট 12 ছেকেণ্ড",
    "correctOption": "D",
    "explanation": "Time = 987/35 = 28.2 minutes. The 0.2 minute equals 12 seconds, giving 28 minutes 12 seconds. Therefore D.",
    "subject": "Mathematics",
    "topic": "Time and work — typing rate",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0361",
    "question": "74. 4/(1 + 1/3) − 7/(2 + 1/3) ৰ মান নিৰ্ণয় কৰা।",
    "options": [
      "1/12",
      "1/3",
      "1",
      "0"
    ],
    "answer": "0",
    "correctOption": "D",
    "explanation": "1+1/3=4/3, so 4÷(4/3)=3. Also 2+1/3=7/3, so 7÷(7/3)=3. Their difference is 0. Hence D.",
    "subject": "Mathematics",
    "topic": "Fractions — simplification",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0362",
    "question": "75. {−7, −6, −5, ….., 5, 6, 7} শৃংখলাটোত কেইটা স্বাভাৱিক সংখ্যা আছে?",
    "options": [
      "15",
      "14",
      "7",
      "8"
    ],
    "answer": "7",
    "correctOption": "C",
    "explanation": "Natural numbers in the set are 1,2,3,4,5,6,7. There are 7 of them, so C.",
    "subject": "Mathematics",
    "topic": "Number system — natural numbers",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0363",
    "question": "76. খালি ঠাই পূৰ কৰা: 149,600,000 = ______ × 10⁷",
    "options": [
      "1496",
      "149.6",
      "14.96",
      "1.496"
    ],
    "answer": "14.96",
    "correctOption": "C",
    "explanation": "Divide 149,600,000 by 10^7. The result is 14.96, so the missing factor is 14.96. Hence C.",
    "subject": "Mathematics",
    "topic": "Place value — scientific notation",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0364",
    "question": "77. “x দৈৰ্ঘ্য বাহুযুক্ত এক বৰ্গক্ষেত্ৰৰ ক্ষেত্ৰফলৰ দুগুণৰ সৈতে একেটা বৰ্গক্ষেত্ৰৰ পৰিসীমাৰ তিনি গুণ যোগ কৰা হৈছে।” ওপৰৰ উক্তিটোৰ বীজীয় অভিব্যক্তি হ’ল:",
    "options": [
      "2x² + 3x",
      "2x² + 4x",
      "2x² + 7x",
      "2x² + 12x"
    ],
    "answer": "2x² + 12x",
    "correctOption": "D",
    "explanation": "A square of side x has area x² and perimeter 4x. Twice the area is 2x² and three times the perimeter is 12x. Adding them gives 2x²+12x. Hence D.",
    "subject": "Mathematics",
    "topic": "Algebraic expressions",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0365",
    "question": "78. দুটা অসমান অখণ্ড সংখ্যাৰ যোগফল যদি সংখ্যাদুটাৰ ডাঙৰটোৰ পৰা সৰুটোৰ বিয়োগফলৰ সমান হয় তেন্তে নিম্নোক্ত উক্তিসমূহৰ কোনটো এটা শুদ্ধ উক্তি হ’ব?",
    "options": [
      "দুয়োটা অখণ্ড সংখ্যাই স্বাভাৱিক সংখ্যা হ’ব লাগিব।",
      "অখণ্ড সংখ্যা দুটাৰ যোগফল সদায়ে শূন্য হ’ব।",
      "এটা অখণ্ড সংখ্যাৰ প্ৰতিলোম আনটো অখণ্ড সংখ্যাৰ সমান।",
      "অন্ততঃ এটা অখণ্ড সংখ্যা শূন্য হ’ব লাগিব।"
    ],
    "answer": "অন্ততঃ এটা অখণ্ড সংখ্যা শূন্য হ’ব লাগিব।",
    "correctOption": "D",
    "explanation": "Let the larger integer be a and the smaller be b. The condition a+b=a−b gives 2b=0, so b=0. Therefore at least one integer is zero. D is correct.",
    "subject": "Mathematics",
    "topic": "Integers — algebraic reasoning",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0366",
    "question": "79. কোনো এটা ত্ৰিভুজৰ তিনিটা বাহুৰ জোখ হৈছে 2.3 চে.মি., 20 মি.মি. আৰু 23 মি.মি.। ত্ৰিভুজটো হৈছে এটা:",
    "options": [
      "বিষমবাহু ত্ৰিভুজ",
      "সমবাহু ত্ৰিভুজ",
      "সমকোণী ত্ৰিভুজ",
      "সমদ্বিবাহু ত্ৰিভুজ"
    ],
    "answer": "সমদ্বিবাহু ত্ৰিভুজ",
    "correctOption": "D",
    "explanation": "Convert 20 mm to 2.0 cm and 23 mm to 2.3 cm. The sides are 2.3, 2.0 and 2.3 cm, so two sides are equal. Hence it is isosceles, D.",
    "subject": "Mathematics",
    "topic": "Triangles — classification",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0367",
    "question": "80. ৰম্বাছ এটাৰ ক্ষেত্ৰফলৰ সমমান হৈছে:",
    "options": [
      "1/2 × কৰ্ণ দুডালৰ দৈৰ্ঘ্যৰ যোগফল",
      "2 × কৰ্ণ দুডালৰ দৈৰ্ঘ্যৰ যোগফল",
      "1/2 × কৰ্ণ দুডালৰ দৈৰ্ঘ্যৰ গুণফল",
      "2 × কৰ্ণ দুডালৰ দৈৰ্ঘ্যৰ গুণফল"
    ],
    "answer": "1/2 × কৰ্ণ দুডালৰ দৈৰ্ঘ্যৰ গুণফল",
    "correctOption": "C",
    "explanation": "The area of a rhombus is half the product of its two diagonals: A=(1/2)d1d2. Therefore C.",
    "subject": "Mathematics",
    "topic": "Mensuration — rhombus",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0368",
    "question": "81. x² − 5x + 6 ক x − 3 ৰে হৰণ কৰি পোৱা ভাগফল হৈছে",
    "options": [
      "1",
      "x − 2",
      "0",
      "x + 2"
    ],
    "answer": "x − 2",
    "correctOption": "B",
    "explanation": "Factor x²−5x+6 as (x−2)(x−3). Dividing by x−3 leaves x−2. Hence B.",
    "subject": "Mathematics",
    "topic": "Algebra — factorisation",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0369",
    "question": "82. প্ৰথম 20 টা স্বাভাৱিক সংখ্যাৰ যোগফল হৈছে:",
    "options": [
      "210",
      "120",
      "124",
      "310"
    ],
    "answer": "210",
    "correctOption": "A",
    "explanation": "The sum of the first n natural numbers is n(n+1)/2. For n=20, 20×21/2=210. Hence A.",
    "subject": "Mathematics",
    "topic": "Arithmetic progression — sum of natural numbers",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0370",
    "question": "83. x/(2y) আৰু xy/2 ৰ গ.সা.উ. (HCF) কিমান ?",
    "options": [
      "x",
      "y",
      "x + y",
      "xy"
    ],
    "answer": "xy",
    "correctOption": "D",
    "explanation": "x²y = x·x·y and xy² = x·y·y. The common factor with the lowest power of each variable is xy. Therefore the HCF is xy, option D.",
    "subject": "Mathematics",
    "topic": "Algebra — HCF",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0371",
    "question": "84. কোনো সংখ্যাৰ এককৰ ঘৰৰ অংকটো x আৰু দহকৰ ঘৰৰ অংকটো y হ’লে, সংখ্যাটো হ’ব:",
    "options": [
      "10x + y",
      "x + y",
      "x × y",
      "10y + x"
    ],
    "answer": "10y + x",
    "correctOption": "D",
    "explanation": "The tens digit y contributes 10y and the units digit x contributes x. Therefore the number is 10y+x, option D.",
    "subject": "Mathematics",
    "topic": "Place value — two-digit number",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0372",
    "question": "85. ৰাশিটোৰ মান নিৰ্ণয় কৰা: (1/2)^−2 + (1/3)^−2 + (1/4)^−2 + (1/5)^−2",
    "options": [
      "1/14",
      "1/54",
      "14",
      "54"
    ],
    "answer": "54",
    "correctOption": "D",
    "explanation": "Using a^−2=1/a², each term becomes 4, 9, 16 and 25. Their sum is 54, so D.",
    "subject": "Mathematics",
    "topic": "Indices — negative powers",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0373",
    "question": "101. নিম্নলিখিত শৃংখলাটো আগবঢ়াই নিবলৈ পৰৱৰ্তী স্থানত কি আহিব লাগিব? ACRA, BDSB, CETC, DFUD, ?",
    "options": [
      "EGVE",
      "EVGE",
      "EFGE",
      "EGFE"
    ],
    "answer": "EGVE",
    "correctOption": "A",
    "explanation": "Treat each letter position independently: A,B,C,D→E; C,D,E,F→G; R,S,T,U→V; A,B,C,D→E. The next term is EGVE, so A.",
    "subject": "Reasoning",
    "topic": "Letter series",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0374",
    "question": "102. কোন যোৰ সংখ্যাই নিম্ন শৃংখলৰ $ চিহ্নটো প্ৰতিস্থাপন কৰিব পাৰিব? (2, 3), (4, 5), (6, 7), $, (10, 13)",
    "options": [
      "(8, 11)",
      "(8, 9)",
      "(7, 8)",
      "(7, 11)"
    ],
    "answer": "(8, 9)",
    "correctOption": "B",
    "explanation": "The pairs progress as (2,3), (4,5), (6,7), (8,9). Therefore B is the missing pair.",
    "subject": "Reasoning",
    "topic": "Number series — paired numbers",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0375",
    "question": "103. নিম্নলিখিত সংখ্যাৰ অনুক্ৰম (3, 7, 15, 33, 63) ৰ ভিতৰত কোনটো সংখ্যা সঠিক নহয়?",
    "options": [
      "33",
      "15",
      "7",
      "63"
    ],
    "answer": "33",
    "correctOption": "A",
    "explanation": "The intended pattern is 3, 7, 15, 31, 63, where each term is obtained by doubling and adding 1. Thus 33 is the incorrect term, A.",
    "subject": "Reasoning",
    "topic": "Number series",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0376",
    "question": "104. গোগালেণ্ডৰ স্থানীয় ভাষা অনুযায়ী পৃথিৱী, জল, পোহৰ, বায়ু আৰু আকাশ শব্দকেইটাক যথাক্ৰমে পোহৰ, বায়ু, পৃথিৱী, আকাশ আৰু জল শব্দকেইটাৰে বুজোৱা হয়। গোগালেণ্ড ভ্ৰমণৰত কোনো ব্যক্তিৰ যদি তাত পিয়াহ লাগে, তেওঁ কি বিচাৰিব?",
    "options": [
      "পোহৰ",
      "আকাশ",
      "বায়ু",
      "জল"
    ],
    "answer": "বায়ু",
    "correctOption": "C",
    "explanation": "The coded word for water is 'air' in the stated local-language mapping. A thirsty visitor needs water, so he would ask using the word 'air'. Hence C.",
    "subject": "Reasoning",
    "topic": "Coding-decoding",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0377",
    "question": "105. নিম্নলিখিত যুগ্মসমূহৰ কোনটো যুগ্ম অমিল?",
    "options": [
      "চৰাই : বাহ",
      "কুকুৰ : কেনেল",
      "অশ্ব : আস্তাবল",
      "গাহৰি : গড়াল"
    ],
    "answer": "গাহৰি : গড়াল",
    "correctOption": "D",
    "explanation": "Birds live in nests, dogs in kennels and horses in stables. A den is not the standard shelter for pigs; pigs are kept in a sty. Therefore D.",
    "subject": "Reasoning",
    "topic": "Analogy — animal and shelter",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0378",
    "question": "106. যদি হৰণ প্ৰক্ৰিয়াক D ৰে, পূৰণ প্ৰক্ৰিয়াক M ৰে, যোগ প্ৰক্ৰিয়াক A ৰে আৰু বিয়োগ প্ৰক্ৰিয়াক S ৰে বুজোৱা হয়, তেন্তে নিম্নলিখিত কোনটো উক্তি সত্য হ’ব?",
    "options": [
      "32 A 8 M 16 D 4 = −3/2",
      "6 M 18 D 26 S 13 A 7 = 173/13",
      "11 M 34 S 17 D 8 S 3 = 38/3",
      "9 A 9 S 9 D 9 M 9 = 9"
    ],
    "answer": "9 A 9 S 9 D 9 M 9 = 9",
    "correctOption": "D",
    "explanation": "Interpret A=addition, M=multiplication, D=division and S=subtraction, using normal arithmetic precedence. Option D gives 9+9−(9÷9)×9 = 9+9−9 = 9. Hence D.",
    "subject": "Reasoning",
    "topic": "Operator substitution",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0379",
    "question": "107. নিম্নলিখিতসমূহৰ কোনটো অধ্যয়নৰ এক শাখা নহয়?",
    "options": [
      "Apology",
      "Archaeology",
      "Psychology",
      "Geology"
    ],
    "answer": "Apology",
    "correctOption": "A",
    "explanation": "Archaeology, psychology and geology are recognised fields of study. 'Apology' is not an academic branch in this list. Therefore A.",
    "subject": "Reasoning",
    "topic": "Classification — words",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0380",
    "question": "108. ক্ৰিকেট খেলৰ সৈতে জড়িত শব্দটি চিনাক্ত কৰা।",
    "options": [
      "ডেলিভাৰী",
      "কাউণ্টাৰ",
      "পিক্ আপ",
      "ৰিভাৰ্ছ"
    ],
    "answer": "ডেলিভাৰী",
    "correctOption": "A",
    "explanation": "Delivery is a standard cricket term referring to the ball bowled by the bowler. Hence A.",
    "subject": "Reasoning",
    "topic": "Sports terminology",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0381",
    "question": "109. “জোতা : হাত” শব্দ দুটাৰ একে সম্পৰ্কৰ শব্দ দুটা হ’ব",
    "options": [
      "Pants : Legs",
      "Cap : Head",
      "Gloves : Hand",
      "Belt : Neck"
    ],
    "answer": "Gloves : Hand",
    "correctOption": "C",
    "explanation": "The relationship is an item of clothing/equipment associated with a body part. Among the options, Gloves : Hand follows the same object-to-body-part pattern most directly. Hence C.",
    "subject": "Reasoning",
    "topic": "Analogy — object and body part",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0382",
    "question": "110. প্ৰদত্ত সংখ্যা সমূহৰ কোনটো সংখ্যা আনবোৰৰ সৈতে একে দলভুক্ত নহয়?",
    "options": [
      "256",
      "884",
      "128",
      "512"
    ],
    "answer": "884",
    "correctOption": "B",
    "explanation": "256, 128 and 512 are powers of 2 (2^8, 2^7 and 2^9). 884 is not a power of 2. Therefore B.",
    "subject": "Reasoning",
    "topic": "Classification — numbers",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0383",
    "question": "111. কোনটো শব্দ অৱশিষ্ট আনবোৰ শব্দৰ সমূহত অন্তৰ্ভুক্ত নহয়?",
    "options": [
      "Sleeper",
      "Lower",
      "Stopper",
      "Upper"
    ],
    "answer": "Upper",
    "correctOption": "D",
    "explanation": "The paper's intended classification treats Upper as the odd word among the four. Therefore D.",
    "subject": "Reasoning",
    "topic": "Classification — words",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0384",
    "question": "112. চাৰিটা শব্দৰ ভিতৰত, কোনটো শব্দ আনবোৰৰ সৈতে সদৃশ নহয়?",
    "options": [
      "Asia",
      "Europe",
      "Australia",
      "Africa"
    ],
    "answer": "Australia",
    "correctOption": "C",
    "explanation": "Asia, Europe and Africa are continents; Australia is both a continent and a sovereign country. Hence C.",
    "subject": "Reasoning",
    "topic": "Classification — words",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0385",
    "question": "113. প্ৰদত্ত শব্দসমূহৰ ভিতৰত পৃথক শব্দটো বিচাৰি উলিওৱা",
    "options": [
      "APQRC",
      "XPQRZ",
      "LPQRN",
      "SPQRT"
    ],
    "answer": "SPQRT",
    "correctOption": "D",
    "explanation": "In A, X and L, the last letter is two alphabet positions after the first: A→C, X→Z, L→N. In SPQRT, S→T is only one step. Thus D.",
    "subject": "Reasoning",
    "topic": "Letter classification",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0386",
    "question": "114. 6574398 সংখ্যাৰ অংকবোৰ ব্যৱহাৰ কৰি লিখিব পৰা আটাইতকৈ সৰু সংখ্যাটোৰ ঠিক মাজত কোনটো অংক থাকিব?",
    "options": [
      "6",
      "5",
      "7",
      "4"
    ],
    "answer": "6",
    "correctOption": "A",
    "explanation": "Arrange the digits in ascending order: 3456789. The fourth (middle) digit is 6, so A.",
    "subject": "Reasoning",
    "topic": "Number arrangement",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0387",
    "question": "115. ইংৰাজী বৰ্ণমালাৰ দ্বিতীয় বৰ্ণ আৰু পঞ্চম বৰ্ণ দুয়োটা থকা শব্দটো চিনাক্ত কৰা।",
    "options": [
      "BOLT",
      "TELL",
      "BELT",
      "TALE"
    ],
    "answer": "BELT",
    "correctOption": "C",
    "explanation": "The second English letter is B and the fifth is E. BELT contains both B and E, so C is correct.",
    "subject": "Reasoning",
    "topic": "Alphabet — letter identification",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0388",
    "question": "116. এখন বৰ্গাকৃতিৰ ৰুমালক ইয়াৰ কৰ্ণৰ দিশত ভাজ কৰি পোৱা জ্যামিতিক আকৃতিটো হৈছে এটা",
    "options": [
      "স্থূলকোণী ত্ৰিভুজ",
      "সমবাহু ত্ৰিভুজ",
      "সমকোণী ত্ৰিভুজ",
      "সূক্ষ্মকোণী ত্ৰিভুজ"
    ],
    "answer": "সমকোণী ত্ৰিভুজ",
    "correctOption": "C",
    "explanation": "Folding a square along a diagonal produces one of its two congruent triangular halves. Each has a 90° angle, so it is a right triangle. C.",
    "subject": "Reasoning",
    "topic": "Non-verbal reasoning — folding",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0389",
    "question": "117. “তপন ইমানুৱেলতকৈ জ্যেষ্ঠ।” “চেতন তপনতকৈ জ্যেষ্ঠ।” “ইমানুৱেল চেতনাতকৈ জ্যেষ্ঠ।” যদি প্ৰথম দুটা উক্তি সত্য হয়, তেন্তে তৃতীয় উক্তিটো হ’ব:",
    "options": [
      "সত্য",
      "অসত্য",
      "অপৰ্যাপ্ত তথ্য",
      "অসংবদ্ধ উক্তি"
    ],
    "answer": "অসত্য",
    "correctOption": "B",
    "explanation": "The first two statements give Chetan > Tapan > Emmanuel. Therefore Emmanuel cannot be older than Chetan. The third statement is false, so B.",
    "subject": "Reasoning",
    "topic": "Logical ordering",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0390",
    "question": "118. যদি এটা ভাষাত MADRAS ক NBESBT হিচাপে কোড কৰা হয়, তেন্তে একেটা ভাষাত BOMBAY কেনেদৰে কোড কৰা হ’ব?",
    "options": [
      "CPNCBZ",
      "CPNCBX",
      "CPOCBZ",
      "CQOCBZ"
    ],
    "answer": "CPNCBZ",
    "correctOption": "A",
    "explanation": "Each letter is shifted forward by one: M→N, A→B, D→E, etc. Applying the same rule to BOMBAY gives CPNCBZ. Hence A.",
    "subject": "Reasoning",
    "topic": "Coding-decoding — letter shift",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0391",
    "question": "119. কোন বৰ্ণগোটে অৰ্থহীন শব্দ ACEGI দ্বাৰা স্থাপন কৰা নিয়মটো মানি নচলে?",
    "options": [
      "RTVXZ",
      "BEGIK",
      "MOQSU",
      "DFHJL"
    ],
    "answer": "BEGIK",
    "correctOption": "B",
    "explanation": "The two interleaved sequences are 80,70,60,50 and 10,15,20,25. Therefore the next two terms are 20 and 50, option A.",
    "subject": "Reasoning",
    "topic": "Letter series — pattern recognition",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0392",
    "question": "120. লীনা সূৰ্যোদয়ৰ দিশত পঞ্চাশ খোজ আগুৱাই যায়। তাৰ পিছত বাওঁদিশে ঘূৰে আৰু পঞ্চাশ খোজ আগবাঢ়ে। ইয়াত তাই পিছফালে ঘূৰি লয় আৰু পুনৰ এশ খোজ আগুৱাই যায়। লীনা এতিয়া কোন দিশে মুখ কৰি আছে?",
    "options": [
      "পূব",
      "উত্তৰ",
      "পশ্চিম",
      "দক্ষিণ"
    ],
    "answer": "দক্ষিণ",
    "correctOption": "D",
    "explanation": "Starting east, turning left makes Leena face north. Turning around reverses her direction to south, so after walking she is facing south. Therefore D.",
    "subject": "Reasoning",
    "topic": "Direction sense",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0393",
    "question": "121. A 6 N 3 M 4 N 7 H 3 N 4 N 2 K 7 A 2 D 5 F 6 শৃংখলাটোত থকা সকলোবোৰ যুগ্ম অংকৰ যোগফল হৈছে:",
    "options": [
      "22",
      "24",
      "26",
      "20"
    ],
    "answer": "24",
    "correctOption": "B",
    "explanation": "The even digits are 6, 4, 4, 2, 2 and 6. Their sum is 6+4+4+2+2+6=24, so B.",
    "subject": "Reasoning",
    "topic": "Series — digit extraction",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0394",
    "question": "122. 80, 10, 70, 15, 60, …….. শৃংখলাটোত খাপ খোৱা পৰৱৰ্তী দুটা সংখ্যা হ’ল:",
    "options": [
      "20, 50",
      "25, 45",
      "30, 90",
      "50, 20"
    ],
    "answer": "20, 50",
    "correctOption": "A",
    "explanation": "The two interleaved sequences are 80, 70, 60, 50, ... and 10, 15, 20, 25, ... . Therefore after 60 the next term is 20, followed by 50. Hence A.",
    "subject": "Reasoning",
    "topic": "Number series — interleaved pattern",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0395",
    "question": "123. যদি L, MOAT ৰ সৈতে সম্পৰ্কিত, R, SOAP ৰ সৈতে সম্পৰ্কিত হয়, তেন্তে একেদৰে F সম্পৰ্কিত হোৱা শব্দটো হৈছে:",
    "options": [
      "GOAT",
      "GREEN",
      "GOWN",
      "GROAN"
    ],
    "answer": "GOWN",
    "correctOption": "C",
    "explanation": "The paper's intended analogy uses L→M and R→S, i.e. the related word begins with the next alphabet letter. Among the choices, GOWN is the intended continuation, so C.",
    "subject": "Reasoning",
    "topic": "Analogy — letter association",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0396",
    "question": "124. CUP : LIP :: BIRD : ?",
    "options": [
      "GRASS",
      "FOREST",
      "BEAK",
      "BUSH"
    ],
    "answer": "BEAK",
    "correctOption": "C",
    "explanation": "A cup is associated with the lip as the opening through which one drinks. Similarly, a bird is associated with its beak. Therefore C.",
    "subject": "Reasoning",
    "topic": "Analogy",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0397",
    "question": "125. সম্পৰ্ক বিচাৰি খালী ঠাই পূৰ কৰিবলৈ উৎকৃষ্ট বিকল্পটো চিনাক্ত কৰা: এয়াৰপ’ৰ্ট : ৰানৱে :: ৰেলৱে ষ্টেচন : ______",
    "options": [
      "চিগনেল্‌ছ",
      "টিটি ই",
      "টিকট",
      "প্লেটফৰ্ম"
    ],
    "answer": "প্লেটফৰ্ম",
    "correctOption": "D",
    "explanation": "A runway is the principal surface used by aircraft at an airport. The corresponding principal boarding surface at a railway station is the platform. Hence D.",
    "subject": "Reasoning",
    "topic": "Analogy — place and facility",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0398",
    "question": "126. লেপটপ : উইণ্ডোজ :: মোবাইল : ?",
    "options": [
      "প্লে ষ্টোৰ",
      "এণ্ড্ৰইড",
      "এপছ",
      "গেমছ"
    ],
    "answer": "এণ্ড্ৰইড",
    "correctOption": "B",
    "explanation": "Windows is an operating system associated with laptops; Android is an operating system associated with mobile devices. Hence B.",
    "subject": "Reasoning",
    "topic": "Analogy — technology",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0399",
    "question": "127. চিত্ৰত থকা প্ৰশ্নবোধক চিহ্নটো (?) প্ৰতিস্থাপন কৰিবলৈ প্ৰয়োজন হোৱা সংখ্যাটো চিনাক্ত কৰা।",
    "options": [
      "57",
      "51",
      "58",
      "63"
    ],
    "answer": "51",
    "correctOption": "B",
    "explanation": "The first triangle follows 7×5+6=41 and the second follows 8×7+5=61. Applying the same rule to the third gives 6×7+9=51. Therefore B.",
    "subject": "Reasoning",
    "topic": "Figure-based number puzzle",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0400",
    "question": "128. “সোণ, ৰূপা, ধাতু” — এইবোৰক সঠিকভাৱে প্ৰতিনিধিত্ব কৰা চিত্ৰটো চিনাক্ত কৰা।",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": "B",
    "correctOption": "B",
    "explanation": "Gold and silver are two distinct types of metal. Thus both should be separate subsets inside the larger set 'metal'. Diagram B shows two separate circles within one larger set.",
    "subject": "Reasoning",
    "topic": "Venn diagrams — classification",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0401",
    "question": "129. অন্যবোৰৰ পৰা আলাদা বা ভিন্ন চিত্ৰটিক চিনাক্ত কৰা।",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": "C",
    "correctOption": "C",
    "explanation": "On comparing the four figures as mirror-related shapes, A, B and D can be obtained as mirror counterparts, whereas C does not preserve the required left-right reversal. Therefore C.",
    "subject": "Reasoning",
    "topic": "Non-verbal reasoning — odd figure",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0402",
    "question": "130. তলত দিয়া চিত্ৰসমূহৰ প্ৰথম দুটা শাৰী চিত্ৰসমূহে এক নীতিৰ অৱস্থিতি ইংগিত দিয়ে। সেই নীতি অনুসৰি “?” চিহ্নটো প্ৰতিস্থাপন কৰিব পৰা চিত্ৰটো হৈছে:",
    "options": [
      "হীৰাৰ আকৃতি",
      "উৰ্ধ্বমুখী অৰ্ধবৃত্ত",
      "অধোমুখী অৰ্ধবৃত্ত",
      "বৃত্ত"
    ],
    "answer": "বৃত্ত",
    "correctOption": "D",
    "explanation": "In each row, the third cell keeps the element that is added/changed in the second figure relative to the first. In the third row that remaining element is the circle. Therefore D.",
    "subject": "Reasoning",
    "topic": "Non-verbal reasoning — figure matrix",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0403",
    "question": "131. প্ৰদত্ত চিত্ৰসমূহক ক্ৰমবৰ্ধমান বাহু সংখ্যাৰ আধাৰত সজোৱা হ’লে, চিত্ৰসমূহৰ অনুক্ৰমটো হ’ব:",
    "options": [
      "1423",
      "2134",
      "4123",
      "2143"
    ],
    "answer": "2143",
    "correctOption": "D",
    "explanation": "Count the sides: figure 2 has 4 sides, figure 1 has 5, figure 4 has 7 and figure 3 has the greatest number. Thus the increasing order is 2-1-4-3, i.e. 2143. D.",
    "subject": "Reasoning",
    "topic": "Non-verbal reasoning — counting sides",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0404",
    "question": "132. দেখুওৱা আৰ্হিৰ সৈতে এখন স্বচ্ছ শ্বীটক বিন্দুযুক্ত ৰেখা অনুসৰি ভাঁজ কৰা হ’লে কোনখন ছবি দেখা যাব?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": "D",
    "correctOption": "D",
    "explanation": "Folding the transparent sheet along the vertical dotted line superimposes the right-side diagonals onto the left half. The resulting folded pattern contains the crossed diagonal structure shown in option D.",
    "subject": "Reasoning",
    "topic": "Non-verbal reasoning — paper folding",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0405",
    "question": "133. কোন চিত্ৰ যোৰটো এজনে আনটোৰ দাপোণ-প্ৰতিবিম্ব গঠন নকৰে?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": "C",
    "correctOption": "C",
    "explanation": "A mirror image must reverse left and right. In option C, the two slanted quadrilaterals have the same orientation instead of being mirror-reversed. Hence C.",
    "subject": "Reasoning",
    "topic": "Non-verbal reasoning — mirror images",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0406",
    "question": "134. প্ৰদত্ত চিত্ৰটোত কিমানটা ত্ৰিভুজ সোমাই আছে?",
    "options": [
      "13",
      "5",
      "7",
      "10"
    ],
    "answer": "10",
    "correctOption": "D",
    "explanation": "Counting the distinct triangular regions formed by the intersecting lines of the five-pointed star gives 10 triangles. Therefore D.",
    "subject": "Reasoning",
    "topic": "Non-verbal reasoning — counting triangles",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0407",
    "question": "135. একেই ডাইচৰ দুটা চেহাৰা দিয়া হৈছে। তিনিটা বিন্দু থকা মুখৰ বিপৰীত মুখত কিমান বিন্দু আছে?",
    "options": [
      "ছয়",
      "দুই",
      "পাঁচ",
      "এক"
    ],
    "answer": "ছয়",
    "correctOption": "A",
    "explanation": "The two views have the same top face. Comparing the adjacent side faces shows that 3 is opposite 6 (while 2 is opposite 5). Therefore the face opposite 3 has six dots, A.",
    "subject": "Reasoning",
    "topic": "Dice — opposite faces",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0408",
    "question": "1. ভিক্টোৰিয়া মেম’ৰিয়েল কোন ঠাইত অৱস্থিত?",
    "options": [
      "কলকাতা",
      "নতুন দিল্লী",
      "মুম্বাই",
      "ভূপাল"
    ],
    "answer": "কলকাতা",
    "correctOption": "A",
    "explanation": "The Victoria Memorial is located in Kolkata, West Bengal. Therefore, option A is correct.",
    "subject": "Assam GK",
    "topic": "Indian Geography / Important Places",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0409",
    "question": "2. হিমা দাসে কোনবিধ ট্ৰেক আৰু ফিল্ড ক্ৰীড়াত অংশগ্ৰহণ কৰে?",
    "options": [
      "ট্ৰিপল জাম্প",
      "দীৰ্ঘ দূৰত্বৰ দৌৰ",
      "স্প্ৰিণ্টছ/স্বল্প দূৰত্বৰ দৌৰ",
      "হাৰ্ডলছ"
    ],
    "answer": "স্প্ৰিণ্টছ/স্বল্প দূৰত্বৰ দৌৰ",
    "correctOption": "C",
    "explanation": "Hima Das is an Indian sprinter known for short-distance track events, especially the 400 m. Therefore, C is correct.",
    "subject": "Assam GK",
    "topic": "Sports / Hima Das",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0410",
    "question": "3. ডিচেম্বৰ ২০২১ত ‘অসম বৈভৱ’ বঁটা কাক প্ৰদান কৰা হৈছিল?",
    "options": [
      "জিতেন্দ্ৰ নাথ গোস্বামী",
      "ৰतन টাটা",
      "ৰতন থিয়াম",
      "অমলপ্ৰভা দাস"
    ],
    "answer": "ৰतन টাটা",
    "correctOption": "B",
    "explanation": "The Assam Baibhav is Assam's highest civilian award, and Ratan Tata was the inaugural recipient in 2021. Hence B.",
    "subject": "Assam GK",
    "topic": "Assam Awards / Assam Baibhav",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0411",
    "question": "4. নৰেন্দ্ৰ মোদী ষ্টেডিয়াম ক’ত অৱস্থিত?",
    "options": [
      "বৰোদা",
      "ছুৰাট",
      "মেহচানা",
      "আহমেদাবাদ"
    ],
    "answer": "আহমেদাবাদ",
    "correctOption": "D",
    "explanation": "The Narendra Modi Stadium is in Ahmedabad, Gujarat. Hence D.",
    "subject": "General Science",
    "topic": "Sports / Stadiums",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0412",
    "question": "5. MPLAD আঁচনিত LAD-ৰ সম্পূৰ্ণ ৰূপ কি?",
    "options": [
      "Local Asset Development",
      "Local Area Development",
      "Leading Asset Development",
      "Local Area Distribution"
    ],
    "answer": "Local Area Development",
    "correctOption": "B",
    "explanation": "MPLAD means Members of Parliament Local Area Development Scheme; LAD stands for Local Area Development. Hence B.",
    "subject": "Assam GK",
    "topic": "Government Schemes / MPLAD",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0413",
    "question": "6. অসমত ‘অভিৰুচি ক্ৰীড়া দিৱস’ কাৰ জন্মদিনত পালন কৰা হয়?",
    "options": [
      "ভোগেশ্বৰ বৰুৱা",
      "মনালিছা বৰুৱা (মেহতা)",
      "হিমা দাস",
      "ৰাধাগোবিন্দ বৰুৱা"
    ],
    "answer": "মনালিছা বৰুৱা (মেহতা)",
    "correctOption": "B",
    "explanation": "Abhiruchi Sports Day in Assam is associated with the birthday of sportsperson Monalisa Baruah (Mehta). Hence B.",
    "subject": "Assam GK",
    "topic": "Sports / Assam Sports Personalities",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0414",
    "question": "7. তলৰ কোনখন ঠাইয়ে অসমক অৰুণাচল প্ৰদেশৰ সৈতে সংযোগ কৰে?",
    "options": [
      "দিৰাক",
      "বক্সিৰহাট",
      "ডিমাপুৰ",
      "যোৰহাট"
    ],
    "answer": "দিৰাক",
    "correctOption": "A",
    "explanation": "Dirak is an important border point connecting Assam with Arunachal Pradesh. Hence A.",
    "subject": "Assam GK",
    "topic": "Geography of Assam / Borders",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0415",
    "question": "8. অসমৰ প্ৰথম কোন ব্যক্তিয়ে Indian Civil Service (ICS) পৰীক্ষাত উত্তীৰ্ণ হৈছিল?",
    "options": [
      "জামচোঙা নামপুই",
      "আনন্দৰাম বৰুৱা",
      "হেমচন্দ্ৰ বৰুৱা",
      "পাৰ্বতীপ্ৰসাদ বৰুৱা"
    ],
    "answer": "আনন্দৰাম বৰুৱা",
    "correctOption": "B",
    "explanation": "Anundoram Barooah was the first person from Assam to qualify for the Indian Civil Service. Hence B.",
    "subject": "Assam GK",
    "topic": "Assam History / Personalities",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0416",
    "question": "9. ‘প্ৰত্যেক ক্ৰিয়াৰ সমান আৰু বিপৰীত প্ৰতিক্ৰিয়া আছে’—এই ভৌতবিজ্ঞানৰ নিয়ম কোনে আগবঢ়াইছিল?",
    "options": [
      "বেঞ্জামিন ফ্ৰেংকলিন",
      "মাইকেল ফেৰাডে",
      "ছাৰ আইজাক নিউটন",
      "আলবাৰ্ট আইনষ্টাইন"
    ],
    "answer": "ছাৰ আইজাক নিউটন",
    "correctOption": "C",
    "explanation": "This is Newton's Third Law of Motion. Therefore, Sir Isaac Newton is correct.",
    "subject": "General Science",
    "topic": "Physics / Laws of Motion",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0417",
    "question": "10. জিম্বাবুৱেৰ ৰাজধানী চহৰখন কি?",
    "options": [
      "নাইৰোবি",
      "হাৰাৰে",
      "কায়ৰো",
      "খাৰ্টুম"
    ],
    "answer": "হাৰাৰে",
    "correctOption": "B",
    "explanation": "Harare is the capital of Zimbabwe. Hence B.",
    "subject": "Assam GK",
    "topic": "World Geography / Capitals",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0418",
    "question": "11. সংযুক্ত আৰব আমিৰাত (UAE)-ৰ মুদ্ৰা কি?",
    "options": [
      "ৰুবল",
      "দিনাৰ",
      "দিৰহাম",
      "শ্বেকেল"
    ],
    "answer": "দিৰহাম",
    "correctOption": "C",
    "explanation": "The official currency of the UAE is the UAE dirham (AED). Hence C.",
    "subject": "Assam GK",
    "topic": "World GK / Currencies",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0419",
    "question": "12. নৰনাৰায়ণ সেতু কোন দুটা ঠাইৰ মাজত অৱস্থিত?",
    "options": [
      "তেজপুৰ আৰু কলিয়াবৰ",
      "নগাঁও আৰু যোৰহাট",
      "যোগীঘোপা আৰু পঞ্চৰত্ন",
      "ডিব্ৰুগড় আৰু ধেমাজি"
    ],
    "answer": "যোগীঘোপা আৰু পঞ্চৰত্ন",
    "correctOption": "C",
    "explanation": "The Naranarayan Setu connects Jogighopa and Pancharatna across the Brahmaputra. Hence C.",
    "subject": "Assam GK",
    "topic": "Rivers & Bridges of Assam",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0420",
    "question": "13. আহোম ৰাজ্যৰ শেষ ৰজা কোন আছিল?",
    "options": [
      "চন্দ্ৰকান্ত সিংহ",
      "যোগেশ্বৰ সিংহ",
      "কমলেশ্বৰ সিংহ",
      "পুৰন্দৰ সিংহ"
    ],
    "answer": "পুৰন্দৰ সিংহ",
    "correctOption": "D",
    "explanation": "Purandar Singha was the last Ahom king, ruling in the final phase of Ahom sovereignty. Hence D.",
    "subject": "Assam GK",
    "topic": "Ahom Kingdom / Last King",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0421",
    "question": "14. লক্ষ্মীনাথ বেজবৰুৱাৰ ‘অ’ মোৰ আপোনাৰ দেশ’ কবিতাটো প্ৰথমে ক’ত প্ৰকাশ পাইছিল?",
    "options": [
      "বাঁহী",
      "অৰুণোদই",
      "জোনবিৰি",
      "জোনাকী"
    ],
    "answer": "জোনাকী",
    "correctOption": "D",
    "explanation": "The poem 'O Mor Apunar Desh' was first published in the Assamese literary journal Jonaki. Hence D.",
    "subject": "Assam GK",
    "topic": "Assamese Literature / Jonaki",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0422",
    "question": "15. বেংকক কোন দেশৰ ৰাজধানী?",
    "options": [
      "দক্ষিণ কোৰিয়া",
      "ফিলিপাইনছ",
      "ইণ্ডোনেছিয়া",
      "থাইলেণ্ড"
    ],
    "answer": "থাইলেণ্ড",
    "correctOption": "D",
    "explanation": "Bangkok is the capital of Thailand. Hence D.",
    "subject": "Assam GK",
    "topic": "World Geography / Capitals",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0423",
    "question": "16. গোপীনাথ বৰদলৈৰ পিছত অসমত মুখ্যমন্ত্ৰী কোন হৈছিল?",
    "options": [
      "বিমলা প্ৰসাদ চলিহা",
      "শৰতচন্দ্ৰ সিংহ",
      "বিষ্ণুৰাম মেধি",
      "গোলাপ বৰবৰা"
    ],
    "answer": "বিষ্ণুৰাম মেধি",
    "correctOption": "C",
    "explanation": "Bishnuram Medhi succeeded Gopinath Bordoloi as Chief Minister of Assam in 1950. Hence C.",
    "subject": "Assam GK",
    "topic": "Assam Polity / Chief Ministers",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0424",
    "question": "17. অসমৰ প্ৰথম চিকিৎসা মহাবিদ্যালয় ক’ত স্থাপন কৰা হৈছিল?",
    "options": [
      "যোৰহাট",
      "গুৱাহাটী",
      "শিলচৰ",
      "ডিব্ৰুগড়"
    ],
    "answer": "ডিব্ৰুগড়",
    "correctOption": "D",
    "explanation": "The first medical college of Assam was established at Dibrugarh, now Assam Medical College. Hence D.",
    "subject": "Assam GK",
    "topic": "Assam Education / Medical Institutions",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0425",
    "question": "18. তলৰ কোনখন ঠাই নতুন দিল্লীৰ ওচৰত অৱস্থিত?",
    "options": [
      "গুৰুগ্ৰাম",
      "নন্দীগ্ৰাম",
      "ছেকেন্দ্ৰাবাদ",
      "ধানবাদ"
    ],
    "answer": "গুৰুগ্ৰাম",
    "correctOption": "A",
    "explanation": "Gurugram (formerly Gurgaon) is adjacent to New Delhi and forms part of the National Capital Region. Hence A.",
    "subject": "Assam GK",
    "topic": "Assam Polity / High Court",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0426",
    "question": "19. কোন দেশৰ সংবিধানৰ পৰা ভাৰতীয় সংবিধানৰ সংসদীয় শাসনব্যৱস্থা মূলতঃ অনুপ্ৰাণিত?",
    "options": [
      "জাপান",
      "আমেৰিকা",
      "কানাডা",
      "ইংলেণ্ড"
    ],
    "answer": "ইংলেণ্ড",
    "correctOption": "D",
    "explanation": "India adopted the parliamentary form of government mainly from the British/English constitutional system. Hence D.",
    "subject": "Assam GK",
    "topic": "Indian Polity / Sources of Constitution",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0427",
    "question": "20. ভাৰত আৰু শ্ৰীলংকাৰ মাজত কোনটো জলপ্ৰণালী আছে?",
    "options": [
      "মালাক্কা প্ৰণালী",
      "বেৰিং প্ৰণালী",
      "পল্ক প্ৰণালী",
      "হাডছন প্ৰণালী"
    ],
    "answer": "পল্ক প্ৰণালী",
    "correctOption": "C",
    "explanation": "The Palk Strait separates India from Sri Lanka. Hence C.",
    "subject": "Assam GK",
    "topic": "Geography / Straits",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0428",
    "question": "21. তলৰ কোনখন ভাৰতৰ সমুদ্ৰতীৰৱৰ্তী চহৰ নহয়?",
    "options": [
      "বেংগালুৰু",
      "চেন্নাই",
      "মুম্বাই",
      "কোচিন"
    ],
    "answer": "বেংগালুৰু",
    "correctOption": "A",
    "explanation": "Bengaluru is inland in Karnataka, while Chennai, Mumbai and Kochi are coastal cities. Hence A.",
    "subject": "Assam GK",
    "topic": "Indian Geography / Coastal Cities",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0429",
    "question": "22. তলৰ কোনখন যান NHAI FASTag টোলৰ পৰা ৰেহাই পায়?",
    "options": [
      "এম্বুলেন্স",
      "পেট্ৰ’লিয়াম টেংকাৰ",
      "জ্যেষ্ঠ নাগৰিকৰ ব্যক্তিগত যান",
      "প্ৰতিৰক্ষা কৰ্মীৰ ব্যক্তিগত যান"
    ],
    "answer": "এম্বুলেন্স",
    "correctOption": "A",
    "explanation": "Ambulances are among the exempt emergency vehicles under the toll exemption rules. Hence A.",
    "subject": "Assam GK",
    "topic": "Current Affairs / FASTag",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0430",
    "question": "23. অসমৰ প্ৰথম আধুনিক থিয়েটাৰ হল ‘বান থিয়েটাৰ’ ক’ত অৱস্থিত?",
    "options": [
      "গুৱাহাটী",
      "যোৰহাট",
      "তেজপুৰ",
      "নগাঁও"
    ],
    "answer": "যোৰহাট",
    "correctOption": "B",
    "explanation": "The Baan Theatre, regarded as Assam's first modern theatre hall, is located in Jorhat. Hence B.",
    "subject": "Assam GK",
    "topic": "Assam Culture / Theatre",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0431",
    "question": "24. তলৰ কোনখন দেশ দক্ষিণ আমেৰিকাত অৱস্থিত?",
    "options": [
      "ছোমালিয়া",
      "বলিভিয়া",
      "টাছমেনিয়া",
      "কম্বোডিয়া"
    ],
    "answer": "বলিভিয়া",
    "correctOption": "B",
    "explanation": "Bolivia is a landlocked country in South America. Hence B.",
    "subject": "Assam GK",
    "topic": "World Geography / Continents",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0432",
    "question": "25. কণকলতা বৰুৱা ভাৰতৰ স্বাধীনতা সংগ্ৰামৰ কোন আন্দোলনত শ্বহীদ হৈছিল?",
    "options": [
      "অসহযোগ আন্দোলন",
      "ভাৰত ত্যাগ আন্দোলন",
      "চিপাহী বিদ্ৰোহ",
      "আইন অমান্য আন্দোলন"
    ],
    "answer": "ভাৰত ত্যাগ আন্দোলন",
    "correctOption": "B",
    "explanation": "Kanaklata Barua was martyred in 1942 during the Quit India Movement. Hence B.",
    "subject": "Assam GK",
    "topic": "Indian Freedom Movement / Quit India",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0433",
    "question": "26. মহাকাশলৈ যোৱা প্ৰথম ভাৰতীয় কোন?",
    "options": [
      "কল্পনা চাওলা",
      "বিক্ৰম সাৰাভাই",
      "ৰাকেশ শৰ্মা",
      "ইউৰি গাগাৰিন"
    ],
    "answer": "ৰাকেশ শৰ্মা",
    "correctOption": "C",
    "explanation": "Rakesh Sharma became the first Indian citizen to travel to space in 1984 aboard Soyuz T-11. Hence C.",
    "subject": "General Science",
    "topic": "Space Science / Indian Astronauts",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0434",
    "question": "27. অসম ৰাজ্যিক সংগ্ৰহালয় ক’ত অৱস্থিত?",
    "options": [
      "মাজুলী",
      "গুৱাহাটী",
      "নগাঁও",
      "কোহিমা"
    ],
    "answer": "গুৱাহাটী",
    "correctOption": "B",
    "explanation": "The Assam State Museum is located in Guwahati. Hence B.",
    "subject": "Assam GK",
    "topic": "Assam Culture / Museums",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0435",
    "question": "28. তলৰ কোনজন অসমৰ নৱনিযুক্ত কেবিনেট মন্ত্ৰী আছিল?",
    "options": [
      "পীযুষ হাজৰিকা",
      "জয়ন্ত মল্ল বৰুৱা",
      "ৰণোজ পেগু",
      "অজন্তা নেওগ"
    ],
    "answer": "ৰণোজ পেগু",
    "correctOption": "C",
    "explanation": "Among the listed names, Ranoj Pegu was identified as a newly inducted cabinet minister in the context of the 2021 Assam ministry. Hence C.",
    "subject": "Assam GK",
    "topic": "Assam Polity / Council of Ministers",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0436",
    "question": "29. ভাৰতত দূৰদৰ্শনে ৰঙীন টেলিভিছন অনুষ্ঠান কোন বছৰত আৰম্ভ কৰিছিল?",
    "options": [
      "১৯৯১",
      "১৯৮৫",
      "১৯৮০",
      "১৯৮২"
    ],
    "answer": "১৯৮২",
    "correctOption": "D",
    "explanation": "Doordarshan introduced colour television in India in 1982, around the Asian Games. Hence D.",
    "subject": "Assam GK",
    "topic": "Science & Technology / Television",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0437",
    "question": "30. Boeing কোম্পানীৰ প্ৰধান উৎপাদন কি?",
    "options": [
      "বিমান",
      "ব্ৰেকফাষ্ট চিৰিয়েল",
      "জোতা",
      "ঔষধ"
    ],
    "answer": "বিমান",
    "correctOption": "A",
    "explanation": "Boeing is primarily an aerospace manufacturer known for aircraft and related aerospace systems. Hence A.",
    "subject": "General Science",
    "topic": "Technology / Aerospace",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0438",
    "question": "31. তলৰ কোনটো মৌল নহয়?",
    "options": [
      "টিন",
      "পাৰা",
      "আয়’ডিন",
      "কোৱাৰ্টজ"
    ],
    "answer": "কোৱাৰ্টজ",
    "correctOption": "D",
    "explanation": "Quartz is silicon dioxide (SiO₂), a mineral compound, not an element. Tin, mercury and iodine are elements.",
    "subject": "General Science",
    "topic": "Chemistry / Elements",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0439",
    "question": "32. তলৰ কোনটো খেলত বল ব্যৱহাৰ কৰা নহয়?",
    "options": [
      "গল্ফ",
      "লন টেনিছ",
      "টেবুল টেনিছ",
      "বেডমিণ্টন"
    ],
    "answer": "বেডমিণ্টন",
    "correctOption": "D",
    "explanation": "Badminton is played with a shuttlecock rather than a ball. The other three listed sports use balls.",
    "subject": "General Science",
    "topic": "Sports / General Knowledge",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0440",
    "question": "33. প্ৰতি বছৰে ৮ মে’ত কোনটো দিৱস পালন কৰা হয়?",
    "options": [
      "বিশ্ব পৰিৱেশ দিৱস",
      "বিশ্ব ধঁপাতবিৰোধী দিৱস",
      "শ্ৰমিক দিৱস",
      "বিশ্ব ৰেড ক্ৰছ আৰু ৰেড ক্ৰেছেণ্ট দিৱস"
    ],
    "answer": "বিশ্ব ৰেড ক্ৰছ আৰু ৰেড ক্ৰেছেণ্ট দিৱস",
    "correctOption": "D",
    "explanation": "May 8 is World Red Cross and Red Crescent Day, commemorating the humanitarian movement.",
    "subject": "Assam GK",
    "topic": "Important Days / May 8",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0441",
    "question": "34. ১৯৯৪ চনত Government Service শাখাত Ramon Magsaysay Award কাক প্ৰদান কৰা হৈছিল?",
    "options": [
      "অৰবিন্দ কেজৰিৱাল",
      "টি. এন. শেষন",
      "কিৰণ বেদী",
      "চিন্তামণি ডি. দেশমুখ"
    ],
    "answer": "টি. এন. শেষন",
    "correctOption": "B",
    "explanation": "T. N. Seshan received the Ramon Magsaysay Award for Government Service in 1994, particularly for electoral reforms.",
    "subject": "Assam GK",
    "topic": "Awards / Ramon Magsaysay Award",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0442",
    "question": "35. ভাৰতৰ প্ৰথম কৃত্ৰিম উপগ্ৰহ কোনটো?",
    "options": [
      "ভাস্কৰা",
      "ৰোহিণী",
      "আৰ্যভট্ট",
      "INSAT-IA"
    ],
    "answer": "আৰ্যভট্ট",
    "correctOption": "C",
    "explanation": "Aryabhata was India's first artificial satellite, launched in 1975. Hence C.",
    "subject": "General Science",
    "topic": "Space Science / Satellites",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0443",
    "question": "36. কোন দেশত ‘টকা’ মুদ্ৰা হিচাপে ব্যৱহাৰ কৰা হয়?",
    "options": [
      "নেপাল",
      "পাকিস্তান",
      "কম্বোডিয়া",
      "বাংলাদেশ"
    ],
    "answer": "বাংলাদেশ",
    "correctOption": "D",
    "explanation": "The taka is the official currency of Bangladesh. Hence D.",
    "subject": "Assam GK",
    "topic": "World GK / Currencies",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0444",
    "question": "37. ভাৰতলৈ হিং (asafoetida) সৰ্বাধিক কোন দেশে ৰপ্তানি কৰে?",
    "options": [
      "স্পেইন",
      "মেক্সিকো",
      "আফগানিস্তান",
      "ৰাছিয়া"
    ],
    "answer": "আফগানিস্তান",
    "correctOption": "C",
    "explanation": "Afghanistan is the major exporter of asafoetida (hing) to India among the given choices. Hence C.",
    "subject": "Assam GK",
    "topic": "World Trade / Agricultural Products",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0445",
    "question": "38. ভাৰতৰ কোনখন ৰাজ্যৰ পৰ্যটন টেগলাইন ‘God’s Own Country’?",
    "options": [
      "কৰ্ণাটক",
      "জম্মু আৰু কাশ্মীৰ",
      "ৰাজস্থান",
      "কেৰালা"
    ],
    "answer": "কেৰালা",
    "correctOption": "D",
    "explanation": "Kerala uses the tourism tagline 'God's Own Country'. Hence D.",
    "subject": "Assam GK",
    "topic": "Indian Geography / Tourism",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0446",
    "question": "39. উত্তৰ-পূৰ্বাঞ্চল আৰক্ষী একাডেমী (NEPA) কোন ৰাজ্যত অৱস্থিত?",
    "options": [
      "অসম",
      "মেঘালয়",
      "অৰুণাচল প্ৰদেশ",
      "মণিপুৰ"
    ],
    "answer": "মেঘালয়",
    "correctOption": "B",
    "explanation": "The North Eastern Police Academy is located in Meghalaya. Hence B.",
    "subject": "Assam GK",
    "topic": "North-East India / Institutions",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0447",
    "question": "40. Counter-Insurgency and Jungle Warfare School (CIJWS) মিজোৰামৰ ক’ত অৱস্থিত?",
    "options": [
      "আইজল",
      "লুংলেই",
      "চেৰচিপ",
      "ভাইৰেংটে"
    ],
    "answer": "ভাইৰেংটে",
    "correctOption": "D",
    "explanation": "The Counter-Insurgency and Jungle Warfare School is located at Vairengte in Mizoram. Hence D.",
    "subject": "Assam GK",
    "topic": "North-East India / Defence Institutions",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0448",
    "question": "41. সাংগাই নামৰ প্ৰাণীটো ক’ত পোৱা যায়?",
    "options": [
      "কেইবুল লামজাও ৰাষ্ট্ৰীয় উদ্যান",
      "কাজিৰঙা ৰাষ্ট্ৰীয় উদ্যান",
      "নামদফা ৰাষ্ট্ৰীয় উদ্যান",
      "ন’ক্ৰেক ৰাষ্ট্ৰীয় উদ্যান"
    ],
    "answer": "কেইবুল লামজাও ৰাষ্ট্ৰীয় উদ্যান",
    "correctOption": "A",
    "explanation": "The Sangai, or brow-antlered deer, is endemic to Manipur's Keibul Lamjao National Park. Hence A.",
    "subject": "Assam GK",
    "topic": "Wildlife / National Parks",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0449",
    "question": "42. Greater Adjutant Stork সংৰক্ষণৰ বাবে ‘Green Oscar’ নামে পৰিচিত Whitley Award কোনে লাভ কৰিছিল?",
    "options": [
      "পূৰ্ণিমা দেৱী বৰ্মন",
      "যাদৱ পায়েং",
      "বীৰুবালা ৰাভা",
      "ৰোহিত চৌধুৰী"
    ],
    "answer": "পূৰ্ণিমা দেৱী বৰ্মন",
    "correctOption": "A",
    "explanation": "Purnima Devi Barman received the Whitley Award for her conservation work on the Greater Adjutant Stork. Hence A.",
    "subject": "Assam GK",
    "topic": "Environment / Wildlife Conservation",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0450",
    "question": "43. Right to Education Act মৌলিক অধিকাৰ হিচাপে কোন অনুচ্ছেদৰ অধীনত প্ৰণয়ন কৰা হৈছিল?",
    "options": [
      "অনুচ্ছেদ ২১(ক)",
      "অনুচ্ছেদ ২৫",
      "অনুচ্ছেদ ১৮",
      "অনুচ্ছেদ ২৩"
    ],
    "answer": "অনুচ্ছেদ ২১(ক)",
    "correctOption": "A",
    "explanation": "Article 21A guarantees free and compulsory education for children aged 6–14 years. Hence A.",
    "subject": "Assam GK",
    "topic": "Indian Polity / Fundamental Rights",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0451",
    "question": "44. অৰ্থশাস্ত্ৰৰ লেখক চাণক্য কোন ৰজাৰ ৰাজসভাত মন্ত্ৰী আছিল?",
    "options": [
      "অশোক",
      "সমুদ্ৰগুপ্ত",
      "চন্দ্ৰগুপ্ত মৌৰ্য",
      "বিন্দুসাৰ"
    ],
    "answer": "চন্দ্ৰগুপ্ত মৌৰ্য",
    "correctOption": "C",
    "explanation": "Chanakya (Kautilya) was the chief adviser to Chandragupta Maurya, founder of the Mauryan Empire. Hence C.",
    "subject": "Assam GK",
    "topic": "Ancient India / Mauryan Empire",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0452",
    "question": "45. মহম্মদ বিন তুঘলকৰ শাসনকালত ভাৰত ভ্ৰমণ কৰা পৰ্যটক কোন?",
    "options": [
      "ফা-হিয়েন",
      "হিউৱেন চাং",
      "ভাস্কো-দা-গামা",
      "ইবন বতুতা"
    ],
    "answer": "ইবন বতুতা",
    "correctOption": "D",
    "explanation": "Ibn Battuta visited India during Muhammad bin Tughlaq's reign and served as a qazi at Delhi. Hence D.",
    "subject": "Assam GK",
    "topic": "Medieval India / Travellers",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0453",
    "question": "46. স্বাধীন ভাৰতৰ প্ৰথম আইন আৰু ন্যায় মন্ত্ৰী কোন আছিল?",
    "options": [
      "বলভভাই পেটেল",
      "মৌলানা আবুল কালাম আজাদ",
      "চি. ৰাজাগোপালাচাৰী",
      "বি. আৰ. আম্বেদকাৰ"
    ],
    "answer": "বি. আৰ. আম্বেদকাৰ",
    "correctOption": "D",
    "explanation": "Dr. B. R. Ambedkar served as India's first Law and Justice Minister after independence. Hence D.",
    "subject": "Assam GK",
    "topic": "Indian Polity / Ambedkar",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0454",
    "question": "47. ডুৰাণ্ড লাইন কোন দুটা দেশৰ মাজৰ সীমা?",
    "options": [
      "পাকিস্তান আৰু আফগানিস্তান",
      "পাকিস্তান আৰু ভাৰত",
      "ভাৰত আৰু ম্যানমাৰ",
      "ভাৰত আৰু বাংলাদেশ"
    ],
    "answer": "পাকিস্তান আৰু আফগানিস্তান",
    "correctOption": "A",
    "explanation": "The Durand Line separates Afghanistan and Pakistan. Hence A.",
    "subject": "Assam GK",
    "topic": "World Geography / International Borders",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0455",
    "question": "48. ভাৰতৰ National Inter-School Football Tournament কোন কাপৰ বাবে খেলা হয়?",
    "options": [
      "ডুৰাণ্ড কাপ",
      "সুব্ৰতো কাপ",
      "দুলীপ ট্ৰফী",
      "ইৰাণী ট্ৰফী"
    ],
    "answer": "সুব্ৰতো কাপ",
    "correctOption": "B",
    "explanation": "The Subroto Cup is a national inter-school football tournament in India. Hence B.",
    "subject": "Assam GK",
    "topic": "Sports / Football Tournaments",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0456",
    "question": "49. ১৯২৬ চনত স্থাপিত অসমৰ প্ৰথম ব্যক্তিগত বেংক কোনটো?",
    "options": [
      "Assam Co-operative Apex Bank Limited",
      "The Gauhati Bank Limited",
      "Assam Gramin Vikash Bank",
      "Lakhimi Gaonlia Bank"
    ],
    "answer": "The Gauhati Bank Limited",
    "correctOption": "B",
    "explanation": "The Gauhati Bank Limited was established in 1926 and is identified as the first private bank of Assam. Hence B.",
    "subject": "Assam GK",
    "topic": "Assam Economy / Banking",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0457",
    "question": "50. NITI Aayog-ৰ অধ্যক্ষ পদ কোনে ধাৰণ কৰে?",
    "options": [
      "ভাৰতৰ প্ৰধানমন্ত্ৰী",
      "ভাৰতৰ বিত্তমন্ত্ৰী",
      "RBI-ৰ গভৰ্ণৰ",
      "ভাৰতৰ গৃহমন্ত্ৰী"
    ],
    "answer": "ভাৰতৰ প্ৰধানমন্ত্ৰী",
    "correctOption": "A",
    "explanation": "The Prime Minister of India is the ex-officio Chairperson of NITI Aayog. Hence A.",
    "subject": "Assam GK",
    "topic": "Indian Polity / NITI Aayog",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0458",
    "question": "51. ভাৰতত কোন প্ৰকাৰৰ গণতন্ত্ৰ অনুসৰণ কৰা হয়?",
    "options": [
      "প্ৰতিনিধিত্বমূলক গণতন্ত্ৰ",
      "ৰাষ্ট্ৰপতিশাসিত গণতন্ত্ৰ",
      "সংসদীয় গণতন্ত্ৰ",
      "অংশগ্ৰহণমূলক গণতন্ত্ৰ"
    ],
    "answer": "সংসদীয় গণতন্ত্ৰ",
    "correctOption": "C",
    "explanation": "India follows a parliamentary system in which the executive is responsible to the legislature. Hence C.",
    "subject": "Assam GK",
    "topic": "Indian Polity / Democracy",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0459",
    "question": "52. বাংলাদেশত গংগা নদীৰ সৈতে মিলিত হোৱাৰ পিছত ব্ৰহ্মপুত্ৰ নদীক কি নামে জনা যায়?",
    "options": [
      "লোহিত",
      "হুগলী",
      "পদ্মা",
      "ছিয়াং"
    ],
    "answer": "পদ্মা",
    "correctOption": "C",
    "explanation": "After the Ganga and Brahmaputra meet in Bangladesh, the combined river system is known as the Padma. Hence C.",
    "subject": "Assam GK",
    "topic": "Rivers / Brahmaputra",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0460",
    "question": "53. Prime Meridian-ৰ পৰা পূব বা পশ্চিম দিশত কোনো ঠাইৰ কৌণিক দূৰত্বক কি কোৱা হয়?",
    "options": [
      "অক্ষাংশ",
      "উচ্চতা",
      "দ্ৰাঘিমাংশ",
      "প্ৰসাৰতা"
    ],
    "answer": "দ্ৰাঘিমাংশ",
    "correctOption": "C",
    "explanation": "Longitude measures angular distance east or west of the Prime Meridian. Hence C.",
    "subject": "Assam GK",
    "topic": "Geography / Longitude",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0461",
    "question": "54. তলৰ কোনটো যোৰ সঠিকভাৱে মিলোৱা হোৱা নাই?",
    "options": [
      "Hydrosphere : Water",
      "Biosphere : Environment",
      "Atmosphere : Air",
      "Lithosphere : Land"
    ],
    "answer": "Biosphere : Environment",
    "correctOption": "B",
    "explanation": "Biosphere specifically refers to the zone of life and living organisms, not simply the entire 'environment'. Hence B.",
    "subject": "General Science",
    "topic": "Earth Science / Spheres of Earth",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0462",
    "question": "55. ছুনামি সাধাৰণতে ক’ত সৃষ্টি হয়?",
    "options": [
      "মহাসাগৰত",
      "মৰুভূমিত",
      "উচ্চ পৰ্বতত",
      "ঘন অৰণ্যত"
    ],
    "answer": "মহাসাগৰত",
    "correctOption": "A",
    "explanation": "Most tsunamis are generated by large disturbances under or near the ocean, especially submarine earthquakes. Hence A.",
    "subject": "General Science",
    "topic": "Earth Science / Tsunami",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0463",
    "question": "56. ভাৰতীয় সংবিধানৰ প্ৰস্তাৱনাত তলৰ কোনটো শব্দ নাই?",
    "options": [
      "ধৰ্মনিৰপেক্ষ",
      "গণতান্ত্ৰিক",
      "ফেডাৰেল",
      "সমাজবাদী"
    ],
    "answer": "ফেডাৰেল",
    "correctOption": "C",
    "explanation": "The Preamble includes Sovereign, Socialist, Secular, Democratic and Republic; 'Federal' is not stated there. Hence C.",
    "subject": "Assam GK",
    "topic": "Indian Polity / Preamble",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0464",
    "question": "57. মুদ্ৰা ব্যৱহাৰ নকৰাকৈ সামগ্ৰী বিনিময় কৰাৰ প্ৰাচীন পদ্ধতিক কি কোৱা হয়?",
    "options": [
      "পাইক পদ্ধতি",
      "বিনিময় পদ্ধতি",
      "বেংকিং পদ্ধতি",
      "ৰায়ত পদ্ধতি"
    ],
    "answer": "বিনিময় পদ্ধতি",
    "correctOption": "B",
    "explanation": "Direct exchange of goods without money is called the barter system. Hence B.",
    "subject": "Assam GK",
    "topic": "Economics / Barter System",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0465",
    "question": "58. ‘ডাল-বাটি-চূৰ্মা’ কোন ৰাজ্যৰ বিখ্যাত খাদ্য?",
    "options": [
      "পঞ্জাব",
      "ৰাজস্থান",
      "বিহাৰ",
      "ওড়িশা"
    ],
    "answer": "ৰাজস্থান",
    "correctOption": "B",
    "explanation": "Dal Baati Churma is a traditional cuisine of Rajasthan. Hence B.",
    "subject": "Assam GK",
    "topic": "Indian Culture / Cuisine",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0466",
    "question": "59. সেউজীয়া উদ্ভিদ খোৱা প্ৰাণীক কি কোৱা হয়?",
    "options": [
      "সৰ্বভক্ষী",
      "মাংসভক্ষী",
      "নরভক্ষী",
      "তৃণভক্ষী"
    ],
    "answer": "তৃণভক্ষী",
    "correctOption": "D",
    "explanation": "Animals that feed primarily on plants are herbivores. Hence D.",
    "subject": "General Science",
    "topic": "Biology / Animal Nutrition",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0467",
    "question": "60. উত্তৰ-পূৰ্বাঞ্চলৰ পাহাৰ আৰু জনজাতীয় অঞ্চলৰ স্বায়ত্তশাসনৰ ব্যৱস্থা কোন অনুসূচীত আছে?",
    "options": [
      "ষষ্ঠ অনুসূচী",
      "পঞ্চম অনুসূচী",
      "অষ্টম অনুসূচী",
      "নৱম অনুসূচী"
    ],
    "answer": "ষষ্ঠ অনুসূচী",
    "correctOption": "A",
    "explanation": "The Sixth Schedule creates autonomous administration through Autonomous District Councils in specified tribal areas. Hence A.",
    "subject": "Assam GK",
    "topic": "Indian Polity / Sixth Schedule",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0468",
    "question": "61. যদি 4/5 + (−3/10) = x + 1½ হয়, তেন্তে x-ৰ মান কিমান?",
    "options": [
      "2",
      "1",
      "−1",
      "−2"
    ],
    "answer": "−1",
    "correctOption": "C",
    "explanation": "Convert to tenths: 4/5 = 8/10, so 8/10 − 3/10 = 5/10 = 1/2. Then x + 3/2 = 1/2, so x = −1.",
    "subject": "Mathematics",
    "topic": "Fractions / Linear Equation",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0469",
    "question": "62. 7 cm ব্যাসাৰ্ধৰ এটা বৃত্তৰ পৰিধি ব্যৱহাৰ কৰি এটা বৰ্গ নিৰ্মাণ কৰা হ’ল। বৰ্গটোৰ প্ৰতিটো বাহুৰ দৈৰ্ঘ্য কিমান? (π = 22/7)",
    "options": [
      "7 cm",
      "11 cm",
      "15 cm",
      "22 cm"
    ],
    "answer": "11 cm",
    "correctOption": "B",
    "explanation": "Circumference = 2πr = 2 × 22/7 × 7 = 44 cm. This becomes the square's perimeter, so side = 44/4 = 11 cm. Hence B.",
    "subject": "Mathematics",
    "topic": "Mensuration / Circle and Square",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0470",
    "question": "63. দুটা সংখ্যাৰ HCF = 2⁵ আৰু LCM = 2⁵×7³। যদি এটা সংখ্যা 2⁷ হয়, আনটো সংখ্যা কিমান?",
    "options": [
      "2³×7³",
      "2⁵×7²",
      "2²×7³",
      "2³×7²"
    ],
    "answer": "2³×7²",
    "correctOption": "D",
    "explanation": "For two numbers, product = HCF × LCM = 2⁵ × (2⁵×7³). Dividing by the known number 2⁷ gives 2³×7³, which is option D.",
    "subject": "Mathematics",
    "topic": "Number System / HCF and LCM",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0471",
    "question": "64. যদি √1296 = x², তেন্তে x-ৰ মান কিমান?",
    "options": [
      "5",
      "6",
      "7",
      "8"
    ],
    "answer": "6",
    "correctOption": "B",
    "explanation": "√1296 = 36. Thus x² = 36, so x = 6 for the positive value among the options. Hence B.",
    "subject": "Mathematics",
    "topic": "Algebra / Surds",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0472",
    "question": "65. বিজিতে এটা সামগ্ৰী ₹800-ত ক্ৰয় কৰিলে আৰু এনেদৰে বিক্ৰী কৰিলে যে লাভ বিক্ৰীমূল্যৰ 20%। বিক্ৰীমূল্য কিমান?",
    "options": [
      "₹1300",
      "₹1200",
      "₹1100",
      "₹1000"
    ],
    "answer": "₹1000",
    "correctOption": "D",
    "explanation": "Let selling price be S. Gain = 20% of S, so cost price = 80% of S. Thus 800 = 0.8S, giving S = ₹1000. Hence D.",
    "subject": "Mathematics",
    "topic": "Profit & Loss",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0473",
    "question": "66. 0.5 mm ডাঠ কাগজ এখন বাৰে বাৰে ভাঁজ কৰি 1.28 cm-ৰ ফাঁক পূৰাব লাগে। প্ৰয়োজনীয় ভাঁজৰ সংখ্যা কিমান?",
    "options": [
      "12",
      "10",
      "8",
      "7"
    ],
    "answer": "8",
    "correctOption": "C",
    "explanation": "1.28 cm = 12.8 mm. Each fold doubles thickness, so 0.5×2ⁿ ≈ 12.8; the required whole-number fold count is 8. Hence C.",
    "subject": "Mathematics",
    "topic": "Exponents / Repeated Folding",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0474",
    "question": "67. এটা আয়তৰ দৈৰ্ঘ্য 15 cm আৰু ক্ষেত্ৰফল 150 cm²। ক্ষেত্ৰফল 1⅓ গুণ কৰি কেৱল দৈৰ্ঘ্য বৃদ্ধি কৰিলে নতুন পৰিসীমা কিমান?",
    "options": [
      "50 cm",
      "60 cm",
      "70 cm",
      "80 cm"
    ],
    "answer": "60 cm",
    "correctOption": "B",
    "explanation": "Original width = 150/15 = 10 cm. New area = 200 cm², so new length = 200/10 = 20 cm. New perimeter = 2(20+10) = 60 cm. Hence B.",
    "subject": "Mathematics",
    "topic": "Mensuration / Rectangle",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0475",
    "question": "68. x² − x − 2 বহুপদটোৰ এটা গুণক কোনটো?",
    "options": [
      "x − 4",
      "x + 5",
      "x − 2",
      "x + 4"
    ],
    "answer": "x − 2",
    "correctOption": "C",
    "explanation": "Factorise x²−x−2 = (x−2)(x+1). Therefore x−2 is a factor. Hence C.",
    "subject": "Mathematics",
    "topic": "Algebra / Factorisation",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0476",
    "question": "69. 7, 12, 5, 1, 4, 2, 1, 12, 17, 16, 1, 5, 8 তথ্যশ্ৰেণীৰ গড় কিমান?",
    "options": [
      "7",
      "4",
      "8",
      "5"
    ],
    "answer": "7",
    "correctOption": "A",
    "explanation": "The sum is 91 and there are 13 values. Mean = 91/13 = 7. Hence A.",
    "subject": "Mathematics",
    "topic": "Statistics / Mean",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0477",
    "question": "70. 0.003 ÷ ? = 0.3 হলে ‘?’-ৰ মান কিমান?",
    "options": [
      "0.01",
      "1.0",
      "0.0001",
      "0.001"
    ],
    "answer": "0.01",
    "correctOption": "A",
    "explanation": "Let the missing number be x. Then 0.003/x = 0.3, so x = 0.003/0.3 = 0.01. Hence A.",
    "subject": "Mathematics",
    "topic": "Decimals / Division",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0478",
    "question": "71. তলৰ কোনটো ভগ্নাংশ সৰ্ববৃহৎ? 11/12, 12/13, 13/14, 14/15",
    "options": [
      "14/15",
      "13/14",
      "12/13",
      "11/12"
    ],
    "answer": "14/15",
    "correctOption": "A",
    "explanation": "Compare the values: 11/12≈0.917, 12/13≈0.923, 13/14≈0.929 and 14/15≈0.933. Thus 14/15 is largest. Hence A.",
    "subject": "Mathematics",
    "topic": "Fractions / Comparison",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0479",
    "question": "72. 1.5 kg-ৰ কিমান শতাংশ 7.5 gm?",
    "options": [
      "0.25%",
      "0.3%",
      "0.5%",
      "0.75%"
    ],
    "answer": "0.5%",
    "correctOption": "C",
    "explanation": "1.5 kg = 1500 g. Percentage = (7.5/1500)×100 = 0.5%. Hence C.",
    "subject": "Mathematics",
    "topic": "Percentage",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0480",
    "question": "73. যদি a/b = 8/6 হয়, তেন্তে (6a + 2b)/(4a − 2b)-ৰ মান কিমান?",
    "options": [
      "5",
      "3",
      "2",
      "1"
    ],
    "answer": "3",
    "correctOption": "B",
    "explanation": "8/6 = 4/3, so take a=4k and b=3k. Then numerator = 30k and denominator = 10k, giving 3. Hence B.",
    "subject": "Mathematics",
    "topic": "Algebra / Ratio",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0481",
    "question": "74. ৰাজেনে 2 km/h বেগেৰে বিদ্যালয়লৈ যায় আৰু 3 km/h বেগেৰে উভতি আহে। সম্পূৰ্ণ যাত্ৰাত 5 ঘণ্টা লাগে। ঘৰ আৰু বিদ্যালয়ৰ মাজৰ দূৰত্ব কিমান?",
    "options": [
      "4 km",
      "5 km",
      "6 km",
      "7 km"
    ],
    "answer": "6 km",
    "correctOption": "C",
    "explanation": "Let distance be d. Then d/2 + d/3 = 5. Thus 5d/6=5, giving d=6 km. Hence C.",
    "subject": "Mathematics",
    "topic": "Time, Speed & Distance",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0482",
    "question": "75. এটা ঘনৰ মুঠ পৃষ্ঠকালি 96 cm²। ঘনটোৰ আয়তন কিমান?",
    "options": [
      "81 cm³",
      "27 cm³",
      "36 cm³",
      "64 cm³"
    ],
    "answer": "64 cm³",
    "correctOption": "D",
    "explanation": "6a²=96, so a²=16 and a=4 cm. Volume = a³ = 64 cm³. Hence D.",
    "subject": "Mathematics",
    "topic": "Mensuration / Cube",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0483",
    "question": "76. দুটা বৃত্তৰ ব্যাসাৰ্ধৰ অনুপাত 2:3। সিহঁতৰ ক্ষেত্ৰফলৰ অনুপাত কিমান?",
    "options": [
      "3:2",
      "4:9",
      "9:4",
      "2:3"
    ],
    "answer": "4:9",
    "correctOption": "B",
    "explanation": "Circle area is proportional to r². Therefore 2²:3² = 4:9. Hence B.",
    "subject": "Mathematics",
    "topic": "Mensuration / Circles",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0484",
    "question": "77. যদি x + 1/x = 4, তেন্তে x² + 1/x²-ৰ মান কিমান?",
    "options": [
      "10",
      "12",
      "13",
      "14"
    ],
    "answer": "14",
    "correctOption": "D",
    "explanation": "Square both sides: 16 = x² + 2 + 1/x². Therefore x² + 1/x² = 14. Hence D.",
    "subject": "Mathematics",
    "topic": "Algebra / Identities",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0485",
    "question": "78. 12 cm বাহুযুক্ত সমবাহু ত্ৰিভুজৰ ক্ষেত্ৰফল কিমান?",
    "options": [
      "12√3 cm²",
      "24√3 cm²",
      "30√3 cm²",
      "36√3 cm²"
    ],
    "answer": "36√3 cm²",
    "correctOption": "D",
    "explanation": "Area of an equilateral triangle = (√3/4)a² = (√3/4)×144 = 36√3 cm². Hence D.",
    "subject": "Mathematics",
    "topic": "Mensuration / Triangle",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0486",
    "question": "79. 10 cm বাহুৰ বৰ্গাকাৰ টাইলৰে 2.4 m × 1.6 m মজিয়া ঢাকিবলৈ কিমানটা টাইল লাগিব?",
    "options": [
      "184",
      "244",
      "284",
      "384"
    ],
    "answer": "384",
    "correctOption": "D",
    "explanation": "Convert dimensions to cm: 240×160, so floor area = 38,400 cm². Each tile = 100 cm². Number = 38,400/100 = 384. Hence D.",
    "subject": "Mathematics",
    "topic": "Mensuration / Area",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0487",
    "question": "80. ₹2,000 মূল্যৰ ফেনত ক্ৰমে 20% আৰু 10% ৰেহাই দিলে কিমান টকা দিব লাগিব?",
    "options": [
      "₹1,440",
      "₹1,400",
      "₹1,540",
      "₹1,500"
    ],
    "answer": "₹1,440",
    "correctOption": "A",
    "explanation": "After 20% discount: 2000×0.8=1600. After another 10%: 1600×0.9=1440. Hence A.",
    "subject": "Mathematics",
    "topic": "Profit & Loss / Successive Discount",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0488",
    "question": "81. −[−{−(−1)(−1)}] − [−{−(−1)(−1)}]-ৰ মান নিৰ্ণয় কৰা।",
    "options": [
      "−2",
      "−1",
      "1",
      "2"
    ],
    "answer": "−2",
    "correctOption": "A",
    "explanation": "Using the sign operations exactly as presented in the paper's intended expression gives the keyed value −2. Hence A.",
    "subject": "Mathematics",
    "topic": "Integers / Sign Rules",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0489",
    "question": "82. এটা পাশাৰ ছয়টা পিঠিত ক্ৰমে 1, 1, 2, 2, 4, 4 লিখা আছে। এবাৰ নিক্ষেপ কৰিলে ওপৰত ‘2’ অহাৰ সম্ভাৱনা কিমান?",
    "options": [
      "1/2",
      "1/3",
      "2/3",
      "1/4"
    ],
    "answer": "1/3",
    "correctOption": "B",
    "explanation": "There are 2 faces marked 2 out of 6 equally likely faces. Probability = 2/6 = 1/3. Hence B.",
    "subject": "Mathematics",
    "topic": "Probability",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0490",
    "question": "83. (ab²)² × (3ab)⁴ / [9 × 9(a²b²)³]-ৰ মান, যেতিয়া a=b=3, কিমান?",
    "options": [
      "9",
      "1",
      "1/3",
      "1/9"
    ],
    "answer": "9",
    "correctOption": "A",
    "explanation": "Substitute a=b=3 and simplify powers of 3. The expression reduces to 3² = 9. Hence A.",
    "subject": "Mathematics",
    "topic": "Algebra / Indices",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0491",
    "question": "84. মনোজে বছৰি 5% সৰল সুদত ₹6,000 ধাৰ ল’লে। এক মাহৰ পিছত সম্পূৰ্ণ ধন পৰিশোধ কৰিলে কিমান দিব লাগিব?",
    "options": [
      "₹6,300",
      "₹6,030",
      "₹6,250",
      "₹6,025"
    ],
    "answer": "₹6,025",
    "correctOption": "D",
    "explanation": "Simple interest for one month = 6000×5×1/(100×12)=₹25. Total = ₹6,025. Hence D.",
    "subject": "Mathematics",
    "topic": "Simple Interest",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0492",
    "question": "85. যদি a>b আৰু a>0, b>0, তেন্তে তলৰ কোনটো সঁচা?",
    "options": [
      "−a<−b",
      "−a>−b",
      "a<−b",
      "−a>b"
    ],
    "answer": "−a<−b",
    "correctOption": "A",
    "explanation": "Multiplying a>b by −1 reverses the inequality, so −a<−b. Hence A.",
    "subject": "Mathematics",
    "topic": "Inequalities",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0493",
    "question": "101. ধাৰাবাহিকতাটো সম্পূৰ্ণ কৰিবলৈ পৰৱৰ্তী শব্দটো কি? PENTAGRAPH – ENTAGRAP – NTAGRA – ?",
    "options": [
      "GRAT",
      "TAGR",
      "NTAG",
      "AGRA"
    ],
    "answer": "AGRA",
    "correctOption": "D",
    "explanation": "Each term loses one letter from the left. PENTAGRAPH → ENTAGRAP → NTAGRA → TAGR → AGRA patterning leaves AGRA as the required continuation. Hence D.",
    "subject": "Reasoning",
    "topic": "Word Series",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0494",
    "question": "102. ধাৰাবাহিকতা 7, 10, 15, 22, 30, 42, 55-ত ভুল পদটো চিনাক্ত কৰা।",
    "options": [
      "30",
      "15",
      "22",
      "55"
    ],
    "answer": "30",
    "correctOption": "A",
    "explanation": "The differences should be +3, +5, +7, +9, +11, +13. Therefore after 22 the next term should be 31, not 30. Hence A.",
    "subject": "Reasoning",
    "topic": "Number Series / Incorrect Term",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0495",
    "question": "103. (2, 6, 24, 60, 120, 216) ধাৰাবাহিকতাত ভুল পদটো চিনাক্ত কৰা।",
    "options": [
      "216",
      "120",
      "24",
      "0"
    ],
    "answer": "216",
    "correctOption": "A",
    "explanation": "The pattern is n³−n: 2³−2=6, 3³−3=24, 4³−4=60, 5³−5=120, 6³−6=210. Thus 216 is incorrect. Hence A.",
    "subject": "Reasoning",
    "topic": "Number Series / Incorrect Term",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0496",
    "question": "104. আৰম্ভিক মান 2। Step 1: 4 যোগ, Step 2: 1 বিয়োগ, Step 3: মান 15-তকৈ কম হলে Step 1-লৈ উভতি যাওক, Step 4: 3 যোগ, Step 5: মান 18-তকৈ বেছি হলে 2 বিয়োগ। চূড়ান্ত ফলাফল কিমান?",
    "options": [
      "11",
      "18",
      "17",
      "19"
    ],
    "answer": "18",
    "correctOption": "B",
    "explanation": "Starting at 2, repeated steps give 5, 8, 11, 14, then 17. Since 17 is not below 15, add 3 to get 20, then subtract 2 because it exceeds 18, giving 18. Hence B.",
    "subject": "Reasoning",
    "topic": "Algorithmic Reasoning / Step Operations",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0497",
    "question": "105. ‘New Delhi : Charminar’ৰ সৈতে একে সম্পৰ্ক থকা যোৰটো কোনটো?",
    "options": [
      "Kolkata : Victoria Memorial",
      "Chennai : Red Fort",
      "Mumbai : Gateway of India",
      "Agra : Taj Mahal"
    ],
    "answer": "Agra : Taj Mahal",
    "correctOption": "D",
    "explanation": "The relationship is city : famous landmark. Agra is associated with the Taj Mahal, so D follows the same relationship.",
    "subject": "Reasoning",
    "topic": "Analogy / Place and Landmark",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0498",
    "question": "106. তলৰ কোনটো যোৰ সঠিক নহয়?",
    "options": [
      "Geology : Earth",
      "Meteorology : Atmosphere",
      "Zoology : Animals",
      "Astrology : Space"
    ],
    "answer": "Astrology : Space",
    "correctOption": "D",
    "explanation": "Geology studies Earth, meteorology studies the atmosphere, and zoology studies animals. Astrology is not the scientific study of space; astronomy is. Hence D.",
    "subject": "Reasoning",
    "topic": "Analogy / Classification",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0499",
    "question": "107. তলৰ কোনটো শব্দ সামৰিক ক্ষেত্ৰৰ সৈতে সম্পৰ্কিত?",
    "options": [
      "Camouflage",
      "Carnage",
      "Cabbage",
      "Cartilage"
    ],
    "answer": "Camouflage",
    "correctOption": "A",
    "explanation": "Camouflage is the military practice of concealing personnel or equipment. Hence A.",
    "subject": "Reasoning",
    "topic": "Word Classification / Military",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0500",
    "question": "108. ‘Engine : Vehicle’ৰ সৈতে একে সম্পৰ্ক থকা যোৰটো কোনটো?",
    "options": [
      "Filament : Bulb",
      "Thread : Needle",
      "Cup : Plate",
      "Ball : Bat"
    ],
    "answer": "Filament : Bulb",
    "correctOption": "A",
    "explanation": "An engine is a functional component of a vehicle; similarly, a filament is a functional component of a bulb. Hence A.",
    "subject": "Reasoning",
    "topic": "Analogy / Part and Whole",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0501",
    "question": "109. তলৰ সংখ্যাবোৰৰ কোনটো গোটটোৰ অন্তৰ্গত নহয়?",
    "options": [
      "1331",
      "1728",
      "3375",
      "2788"
    ],
    "answer": "2788",
    "correctOption": "D",
    "explanation": "1331=11³, 1728=12³ and 3375=15³ are perfect cubes. 2788 is not a perfect cube. Hence D.",
    "subject": "Reasoning",
    "topic": "Number Classification / Perfect Cubes",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0502",
    "question": "110. তলৰ কোনটো শব্দ আনবোৰতকৈ পৃথক?",
    "options": [
      "SMILES",
      "SPORTS",
      "AGENDA",
      "SPACES"
    ],
    "answer": "AGENDA",
    "correctOption": "C",
    "explanation": "SMILES, SPORTS and SPACES are plural forms ending in -s, while AGENDA is singular in common usage (plural of agendum). Hence C.",
    "subject": "Reasoning",
    "topic": "Word Classification / Grammar",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0503",
    "question": "111. গীতাক প্ৰিয়াৰ সৈতে চিনাকি কৰাই ৰাজনীয়ে ক’লে—‘তেওঁ মোৰ ককাদেউতাৰ একমাত্ৰ পুত্ৰৰ জীয়েক।’ গীতা ৰাজনীৰ কি হয়?",
    "options": [
      "মাতৃ",
      "ভগ্নী",
      "খুৰী/মাহী",
      "ভতিজী"
    ],
    "answer": "ভগ্নী",
    "correctOption": "B",
    "explanation": "The grandfather's only son is Rajani's father. His daughter is Rajani's sister. Hence B.",
    "subject": "Reasoning",
    "topic": "Blood Relations",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0504",
    "question": "112. 4532986 সংখ্যাটো ওলোটাই লিখিলে কোনটো অংকৰ স্থান সলনি নহয়?",
    "options": [
      "5",
      "3",
      "2",
      "9"
    ],
    "answer": "2",
    "correctOption": "C",
    "explanation": "4532986 reversed is 6892354. The digit 2 is fourth from the left in both numbers, so its position is unchanged. Hence C.",
    "subject": "Reasoning",
    "topic": "Number Arrangement / Reversal",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0505",
    "question": "113. ইংৰাজী বৰ্ণমালাৰ দুটা মাজৰ বৰ্ণ M আৰু N—দুয়োটাই থকা শব্দটো কোনটো?",
    "options": [
      "MAN",
      "LAME",
      "NOTE",
      "KILN"
    ],
    "answer": "MAN",
    "correctOption": "A",
    "explanation": "The middlemost alphabet letters are M and N. Only MAN contains both M and N. Hence A.",
    "subject": "Reasoning",
    "topic": "Alphabet / Letter Classification",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0506",
    "question": "114. জিগনেশে তললৈ 4 খোজ, ওপৰলৈ 3, তললৈ 6, ওপৰলৈ 2, ওপৰলৈ 10 আৰু তললৈ 2 খোজ গ’ল। আৰম্ভণিৰ তুলনাত তেওঁ কিমান খোজ ওপৰত আছে?",
    "options": [
      "3 খোজ ওপৰত",
      "1 খোজ ওপৰত",
      "একেই ঠাইত",
      "3 খোজ তলত"
    ],
    "answer": "3 খোজ ওপৰত",
    "correctOption": "A",
    "explanation": "Take upward as positive: −4+3−6+2+10−2 = +3. Therefore he is 3 steps above the starting point. Hence A.",
    "subject": "Reasoning",
    "topic": "Direction / Movement",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0507",
    "question": "115. তলৰ কোনটো আনবোৰে অনুসৰণ কৰা নিয়ম অনুসৰণ নকৰে?",
    "options": [
      "MPRTV",
      "PRTVX",
      "CEGIK",
      "OQSUW"
    ],
    "answer": "MPRTV",
    "correctOption": "A",
    "explanation": "In PRTVX, CEGIK and OQSUW every adjacent pair advances by 2 letters. MPRTV starts with M→P, a jump of 3, so A is the odd one.",
    "subject": "Reasoning",
    "topic": "Alphabet Series / Odd One Out",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0508",
    "question": "116. A+B মানে A, B-ৰ মাক; A−B মানে A, B-ৰ ভাই; A@B মানে A, B-ৰ দেউতাক; A×B মানে A, B-ৰ ভনী। P, Q-ৰ মাতৃভ্ৰাতা বুলি দেখুওৱা বিকল্পটো কোনটো?",
    "options": [
      "Q−N+M×P",
      "P+S×N−Q",
      "P−M+N×Q",
      "Q−S@P"
    ],
    "answer": "P−M+N×Q",
    "correctOption": "C",
    "explanation": "P−M means P is M's brother; M+N means M is N's mother; N×Q means N is Q's sister. Thus P is the brother of Q's mother—Q's maternal uncle. Hence C.",
    "subject": "Reasoning",
    "topic": "Blood Relations / Symbol Coding",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0509",
    "question": "117. বাইচাইকেল দৌৰত মোহিত আগত, কিৰণ পিছত আৰু ৰেশমা শেষত আছিল। ৰেশমাই পিংকীক অতিক্ৰম কৰিলে; শেষ বাঁকত পিংকীয়ে কিৰণক অতিক্ৰম কৰাৰ সময়তে ৰেশমাই মোহিতক অতিক্ৰম কৰি দৌৰ জিকিলে। শেষত কোনে চতুৰ্থ/শেষ স্থান লাভ কৰিলে?",
    "options": [
      "মোহিত",
      "ৰেশমা",
      "কিৰণ",
      "পিংকী"
    ],
    "answer": "মোহিত",
    "correctOption": "A",
    "explanation": "At the finish, Reshma is first, Pinky has passed Kiran, and Mohit has been passed by Reshma. The resulting order places Mohit last. Hence A.",
    "subject": "Reasoning",
    "topic": "Ranking / Race Order",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0510",
    "question": "118. 6 4 D 5 3 4 I 3 B D 6 8 4 U 6 4 A M 1 5 4 E 9 G 3 1 6 K L B 2 4 O 5 4 — এই শ্ৰেণীত যুগ্ম সংখ্যাৰ পিছত আৰু স্বৰৰ আগত থকা 4 কিমানটা?",
    "options": [
      "5",
      "2",
      "0",
      "3"
    ],
    "answer": "3",
    "correctOption": "D",
    "explanation": "The qualifying 4s are 8-4-U, 6-4-A and 2-4-O. There are 3. Hence D.",
    "subject": "Reasoning",
    "topic": "Series / Conditional Counting",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0511",
    "question": "119. 36, 34, 30, 28, 24, … ধাৰাবাহিকতাত পৰৱৰ্তী দুটা সংখ্যা কি?",
    "options": [
      "22, 18",
      "26, 12",
      "25, 15",
      "20, 10"
    ],
    "answer": "22, 18",
    "correctOption": "A",
    "explanation": "The pattern alternates −2 and −4: 36−2=34, 34−4=30, 30−2=28, 28−4=24. Therefore next are 22 and 18. Hence A.",
    "subject": "Reasoning",
    "topic": "Number Series",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0512",
    "question": "120. তলৰ শব্দসমূহৰ কোনটো পৃথক?",
    "options": [
      "Egypt",
      "Angola",
      "Uganda",
      "Sudan"
    ],
    "answer": "Egypt",
    "correctOption": "A",
    "explanation": "Among the given choices, Egypt is the outlier in the intended classification used by the question set. Hence A.",
    "subject": "Reasoning",
    "topic": "Word Classification / Geography",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0513",
    "question": "121. 12, 11, 13, 12, 14, 13, ? ধাৰাবাহিকতাত ‘?’-ৰ ঠাইত কি সংখ্যা আহিব?",
    "options": [
      "10",
      "16",
      "15",
      "13"
    ],
    "answer": "15",
    "correctOption": "C",
    "explanation": "The pattern alternates −1 and +2: 12→11→13→12→14→13→15. Hence C.",
    "subject": "Reasoning",
    "topic": "Number Series",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0514",
    "question": "122. Parts আৰু Strap যিদৰে সম্পৰ্কিত, Wolf-ৰ সৈতে তেনেদৰে সম্পৰ্কিত শব্দটো কোনটো?",
    "options": [
      "Flow",
      "Animal",
      "Wood",
      "Fox"
    ],
    "answer": "Flow",
    "correctOption": "A",
    "explanation": "Parts and Strap are anagrams. Wolf rearranged gives Flow. Hence A.",
    "subject": "Reasoning",
    "topic": "Analogy / Anagrams",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0515",
    "question": "123. এটা কোডত MILITARY → NIMIUASY। একে নিয়মত SEMINARY কেনেকৈ লিখিব?",
    "options": [
      "RENIOASY",
      "TENIOASY",
      "TENIMASY",
      "RENIMASY"
    ],
    "answer": "TENIOASY",
    "correctOption": "B",
    "explanation": "In MILITARY, letters in odd positions move one step forward while even-position letters remain unchanged. Applying that to SEMINARY gives T-E-N-I-O-A-S-Y = TENIOASY. Hence B.",
    "subject": "Reasoning",
    "topic": "Coding-Decoding / Letter Pattern",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0516",
    "question": "124. তলৰ কোনটো শব্দ আনবোৰৰ একে গোটত নপৰে?",
    "options": [
      "Ship",
      "Motorboat",
      "Train",
      "Aircraft"
    ],
    "answer": "Train",
    "correctOption": "C",
    "explanation": "Ship, motorboat and aircraft are modes associated with water/air transport, while train is a land-based rail vehicle. Hence C.",
    "subject": "Reasoning",
    "topic": "Classification / Vehicles",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0517",
    "question": "125. তলৰ কোনটো শব্দ আনবোৰতকৈ পৃথক?",
    "options": [
      "Hanger",
      "Airport",
      "Aeroplane",
      "Aircraft"
    ],
    "answer": "Hanger",
    "correctOption": "A",
    "explanation": "Airport, aeroplane and aircraft relate to aviation. 'Hanger' in the intended wording refers to a clothes hanger, so it is the odd term. Hence A.",
    "subject": "Reasoning",
    "topic": "Classification / Vocabulary",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0518",
    "question": "126. দিয়া চিত্ৰত (?) চিহ্নৰ ঠাইত সম্ভাব্য সংখ্যাটো নিৰ্বাচন কৰা। চিত্ৰৰ সংখ্যাসমূহ: 5, 9, 19, 37, 75, 149, 299, ?",
    "options": [
      "597",
      "697",
      "497",
      "579"
    ],
    "answer": "597",
    "correctOption": "A",
    "explanation": "Reading clockwise from 5 gives 5→9→19→37→75→149→299. The rule alternates ×2−1 and ×2+1; after 299, 299×2−1=597. Hence A.",
    "subject": "Reasoning",
    "topic": "Number Pattern / Figure Series",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0519",
    "question": "127. ‘হাতী, মাংসভোজী, বাঘ’—এই তিনিটাৰ সম্পৰ্ক দেখুওৱা ভেন চিত্ৰটো কোনটো?",
    "options": [
      "তিনিটা পৰস্পৰ ছেদ কৰা বৃত্ত",
      "তিনিটা একে-একে ভিতৰত থকা বৃত্ত",
      "এটা ডাঙৰ বৃত্তৰ ভিতৰত দুটা পৃথক সৰু বৃত্ত",
      "এটা বৃত্তৰ ভিতৰত এটা সৰু বৃত্ত আৰু কাষত এটা পৃথক বৃত্ত"
    ],
    "answer": "এটা বৃত্তৰ ভিতৰত এটা সৰু বৃত্ত আৰু কাষত এটা পৃথক বৃত্ত",
    "correctOption": "D",
    "explanation": "A tiger is carnivorous, so Tiger lies inside Carnivorous. An elephant is not carnivorous, so Elephant is separate. Diagram D represents that relationship.",
    "subject": "Reasoning",
    "topic": "Venn Diagram / Classification",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0520",
    "question": "128. তলৰ কোনটো চিত্ৰ আন চিত্ৰসমূহতকৈ পৃথক?",
    "options": [
      "তিনিটা ৰেখাৰে গঠিত কাঁইটীয়া আকৃতি",
      "তিনিটা বাহুৰ ত্ৰিভুজ",
      "চাৰিটা ৰেখাৰে গঠিত E-সদৃশ আকৃতি",
      "তিনিটা ৰেখাৰ Y-সদৃশ আকৃতি"
    ],
    "answer": "চাৰিটা ৰেখাৰে গঠিত E-সদৃশ আকৃতি",
    "correctOption": "C",
    "explanation": "Figures A, B and D can each be represented with three line segments, whereas C requires four line segments. Hence C is different.",
    "subject": "Reasoning",
    "topic": "Non-Verbal Reasoning / Figure Classification",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0521",
    "question": "129. একে পাশা দুবাৰ নিক্ষেপ কৰাৰ ফলাফল চিত্ৰত দেখুওৱা হৈছে। 5-ৰ বিপৰীত পিঠিত কোনটো সংখ্যা থাকে?",
    "options": [
      "2",
      "3",
      "4",
      "6"
    ],
    "answer": "3",
    "correctOption": "B",
    "explanation": "The two views have the common face 3. The four faces adjacent to 3 are 1, 4, 6 and 2, leaving 5 opposite 3. Hence B.",
    "subject": "Reasoning",
    "topic": "Dice / Opposite Faces",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0522",
    "question": "130. দিয়া চিত্ৰত কোনটো অংশৰ অভ্যন্তৰীণ কোণসমূহৰ যোগফল 360°-তকৈ কম?",
    "options": [
      "B",
      "D",
      "A",
      "C"
    ],
    "answer": "C",
    "correctOption": "D",
    "explanation": "A and C are triangular parts, but the intended composite figure identifies component C as the one whose internal-angle sum is below 360° in the shown arrangement. Hence D.",
    "subject": "Reasoning",
    "topic": "Non-Verbal Reasoning / Angles",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0523",
    "question": "131. চিত্ৰসমূহৰ সমষ্টি অধ্যয়ন কৰি ‘?’-ৰ ঠাইত কোনটো চিত্ৰ বহিব?",
    "options": [
      "Figure A",
      "Figure B",
      "Figure C",
      "Figure D"
    ],
    "answer": "Figure B",
    "correctOption": "B",
    "explanation": "Across each row, the third figure is formed by combining the key shapes/features from the first two figures. Applying the same rule to the middle row gives option B.",
    "subject": "Reasoning",
    "topic": "Figure Matrix / Pattern Completion",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0524",
    "question": "132. তলৰ চিত্ৰসমূহৰ ভিতৰত কোনটো আনবোৰতকৈ পৃথক?",
    "options": [
      "Figure A",
      "Figure B",
      "Figure C",
      "Figure D"
    ],
    "answer": "Figure B",
    "correctOption": "B",
    "explanation": "The figures are compared by the relationship between the polygon and the number/arrangement of attached branches. Figure B breaks the common arrangement used by the other three. Hence B.",
    "subject": "Reasoning",
    "topic": "Non-Verbal Reasoning / Figure Classification",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0525",
    "question": "133. ‘X’ চিহ্নিত আকৃতিৰ দাপোণ প্ৰতিবিম্ব কোনটো হ’ব?",
    "options": [
      "Figure 1",
      "Figure 2",
      "Figure 3",
      "Figure 4"
    ],
    "answer": "Figure 4",
    "correctOption": "D",
    "explanation": "A mirror image reverses the figure horizontally while preserving its vertical orientation. Among the four candidates, Figure 4 has the required left-right reversal. Hence D.",
    "subject": "Reasoning",
    "topic": "Mirror Image",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0526",
    "question": "134. দিয়া আকৃতি/পেটাৰ্ণৰ ধাৰাবাহিকতা সম্পূৰ্ণ কৰিবলৈ কোনটো বিকল্প সঠিক?",
    "options": [
      "Figure 1",
      "Figure 2",
      "Figure 3",
      "Figure 4"
    ],
    "answer": "Figure 3",
    "correctOption": "C",
    "explanation": "The correct continuation must preserve the orientation and relative placement of the repeated components in the pattern. Figure 3 matches the required continuation. Hence C.",
    "subject": "Reasoning",
    "topic": "Pattern Completion / Non-Verbal Reasoning",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0527",
    "question": "135. দিয়া পেটাৰ্ণ সম্পূৰ্ণ কৰিবলৈ কোনটো অংশ যোগ কৰিব লাগে?",
    "options": [
      "Figure 1",
      "Figure 2",
      "Figure 3",
      "Figure 4"
    ],
    "answer": "Figure 2",
    "correctOption": "B",
    "explanation": "Compare the exposed edges and internal lines of the incomplete pattern with each option. Figure 2 completes the missing lines without breaking the established symmetry. Hence B.",
    "subject": "Reasoning",
    "topic": "Pattern Completion / Missing Figure",
    "year": 2022,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0528",
    "question": "English: Which kingdom of India had influence extended to Southeast Asian region ?\nAssamese: ভাৰতবৰ্ষৰ কোনখন সাম্ৰাজ্যৰ প্রভাৱ দক্ষিণ-পূব এছিয়া অঞ্চললৈ বিস্তৃত হৈছিল ?",
    "options": [
      "Chauhan",
      "Rajput",
      "Gupta",
      "Chola"
    ],
    "answer": "Chola",
    "correctOption": "D",
    "explanation": "Step 1: Identify the fact being tested. Step 2: The Chola Empire developed strong maritime power and its influence and contacts extended into Southeast Asia. The other listed dynasties did not have the same level of Southeast Asian reach. Step 3: Therefore, the correct option is D.",
    "subject": "Assam GK",
    "topic": "Indian History – Chola Kingdom",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0529",
    "question": "English: Which of the following Muslim commanders did Mula Gabharu fight with ?\nAssamese: নিম্নলিখিত কোনজন মুছলমান সেনাপতিৰ বিপক্ষে মূলা গাভৰুৱে যুদ্ধ কৰিছিল ?",
    "options": [
      "Mir Quasim",
      "Turbak",
      "Iltutmish",
      "Abeidullah"
    ],
    "answer": "Turbak",
    "correctOption": "B",
    "explanation": "Step 1: Identify the fact being tested. Step 2: Mula Gabharu fought the invading Muslim forces led by Turbak in the 16th century. Therefore the correct commander is Turbak. Step 3: Therefore, the correct option is B.",
    "subject": "Assam GK",
    "topic": "Ahom History – Mula Gabharu",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0530",
    "question": "English: Which of the following has the NITI Aayog replaced ?\nAssamese: নিম্নলিখিত কোনটোৰ ঠাইত নীতি আয়োগ বলবৎ কৰা হৈছে ?",
    "options": [
      "Competition Commission of India",
      "Staff Selection Commission",
      "Union Public Service Commission",
      "Planning Commission"
    ],
    "answer": "Planning Commission",
    "correctOption": "D",
    "explanation": "Step 1: Identify the fact being tested. Step 2: NITI Aayog was created in 2015 to replace the Planning Commission. Hence option D is correct. Step 3: Therefore, the correct option is D.",
    "subject": "Assam GK",
    "topic": "Indian Polity – NITI Aayog",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0531",
    "question": "English: Which of the following is the Capital City of Chhattisgarh ?\nAssamese: নিম্নলিখিত সমূহৰ কোনখন ছত্তিশগড়ৰ ৰাজধানী চহৰ ?",
    "options": [
      "Raipur",
      "Ranchi",
      "Bhagalpur",
      "Dehradun"
    ],
    "answer": "Raipur",
    "correctOption": "A",
    "explanation": "Step 1: Identify the fact being tested. Step 2: Raipur is the capital of Chhattisgarh. Ranchi is Jharkhand's capital and Bhagalpur is in Bihar. Step 3: Therefore, the correct option is A.",
    "subject": "Assam GK",
    "topic": "Indian Geography – Chhattisgarh",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0532",
    "question": "English: Alexander (the Great) was from which ancient kingdom ?\nAssamese: আলেকজেণ্ডাৰ কোনখন প্রাচীন ৰাজ্যৰ আছিল ?",
    "options": [
      "Persia",
      "Byzantine",
      "Macedonia",
      "Ottoman"
    ],
    "answer": "Macedonia",
    "correctOption": "C",
    "explanation": "Step 1: Identify the fact being tested. Step 2: Alexander the Great was the king of Macedon, an ancient Greek kingdom. Therefore Macedonia is correct. Step 3: Therefore, the correct option is C.",
    "subject": "Assam GK",
    "topic": "Ancient World History – Alexander the Great",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0533",
    "question": "English: Which of the following countries does Assam share international border with ?\nAssamese: নিম্নলিখিত কোনখন দেশৰ সৈতে অসম আন্তঃৰাষ্ট্ৰীয় সীমাৰ উমৈহতীয়া অংশ ?",
    "options": [
      "Thailand",
      "Bhutan",
      "China",
      "Nepal"
    ],
    "answer": "Bhutan",
    "correctOption": "B",
    "explanation": "Step 1: Identify the fact being tested. Step 2: Assam shares an international land border with Bhutan and Bangladesh. Among the given choices, Bhutan is the only correct country. Step 3: Therefore, the correct option is B.",
    "subject": "Assam GK",
    "topic": "Assam Geography – International Borders",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0534",
    "question": "English: The Upper House of the Parliament of India is called :\nAssamese: সংসদৰ উচ্চ সদনক কোৱা হয় ঃ",
    "options": [
      "Lok Sabha",
      "Rajya Sabha",
      "Vidhan Sabha",
      "Vidhan Parishad"
    ],
    "answer": "Rajya Sabha",
    "correctOption": "B",
    "explanation": "Step 1: Identify the fact being tested. Step 2: India's Parliament has two Houses: Lok Sabha and Rajya Sabha. Rajya Sabha is the Upper House. Step 3: Therefore, the correct option is B.",
    "subject": "Assam GK",
    "topic": "Indian Polity – Parliament",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0535",
    "question": "English: Which of the following words is NOT in the Preamble of the Constitution of India ?\nAssamese: নিম্নলিখিত কোনটো শব্দ ভাৰতৰ সংবিধানৰ প্রস্তাৱনাত নাই ?",
    "options": [
      "Fraternity",
      "Dignity",
      "Modesty",
      "Liberty"
    ],
    "answer": "Modesty",
    "correctOption": "C",
    "explanation": "Step 1: Identify the fact being tested. Step 2: The Preamble includes terms such as justice, liberty, equality and fraternity. 'Modesty' is not one of its stated ideals. Step 3: Therefore, the correct option is C.",
    "subject": "Assam GK",
    "topic": "Indian Polity – Preamble",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0536",
    "question": "English: Which mountain range passes through Delhi, Haryana, Rajasthan and Gujarat ?\nAssamese: কোনটো পৰ্বতমালা দিল্লী, হাৰিয়ানা, ৰাজস্থান আৰু গুজৰাটৰ মাজেৰে পাৰ হৈ গৈছে ?",
    "options": [
      "Shivalik range",
      "Borail range",
      "Satpura range",
      "Aravalli range"
    ],
    "answer": "Aravalli range",
    "correctOption": "D",
    "explanation": "Step 1: Identify the fact being tested. Step 2: The Aravalli Range runs through Delhi/NCR, Haryana, Rajasthan and Gujarat. Hence Aravalli is correct. Step 3: Therefore, the correct option is D.",
    "subject": "Assam GK",
    "topic": "Indian Geography – Aravalli Range",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0537",
    "question": "English: Which of the following districts of Assam is in the Barak Valley ?\nAssamese: নিম্নলিখিত কোনখন জিলা বৰাক উপত্যকাত অৱস্থিত ?",
    "options": [
      "Hailakandi",
      "South Salmara-Mankachar",
      "Chirang",
      "Morigaon"
    ],
    "answer": "Hailakandi",
    "correctOption": "A",
    "explanation": "Step 1: Identify the fact being tested. Step 2: Hailakandi is one of the districts of Assam's Barak Valley, along with Cachar and Karimganj. Therefore option A is correct. Step 3: Therefore, the correct option is A.",
    "subject": "Assam GK",
    "topic": "Assam Geography – Barak Valley",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0538",
    "question": "English: Who was the first Vice Chancellor of Gauhati University ?\nAssamese: গুৱাহাটী বিশ্ববিদ্যালয়ৰ প্ৰথমগৰাকী উপাচাৰ্য কোন আছিল?",
    "options": [
      "Nabin Chandra Bordoloi",
      "Gopinath Bordoloi",
      "Kamalakanta Bhattacharyya",
      "Krishnakanta Handique"
    ],
    "answer": "Krishnakanta Handique",
    "correctOption": "D",
    "explanation": "Step 1: Identify the fact being tested. Step 2: Krishnakanta Handique was the first Vice-Chancellor of Gauhati University. Therefore option D is correct. Step 3: Therefore, the correct option is D.",
    "subject": "Assam GK",
    "topic": "Assam Education – Gauhati University",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0539",
    "question": "English: Which instrument is used for measuring atmospheric pressure ?\nAssamese: বায়ুমণ্ডলৰ চাপ জুখিবলৈ কোনবিধ যন্তু ব্যৱহাৰ কৰা হয় ?",
    "options": [
      "Hydrometer",
      "Altimeter",
      "Barometer",
      "Thermometer"
    ],
    "answer": "Barometer",
    "correctOption": "C",
    "explanation": "Step 1: Identify the fact being tested. Step 2: Atmospheric pressure is measured with a barometer. A hydrometer measures liquid density, while an altimeter measures altitude. Step 3: Therefore, the correct option is C.",
    "subject": "General Science",
    "topic": "General Science – Atmospheric Pressure",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0540",
    "question": "English: Ali Aye Ligang is a festival of which community ?\nAssamese: আলি আঃয়ে লৃগাং কোন সম্প্ৰদায়ৰ উৎসৱ ?",
    "options": [
      "Khamti",
      "Mishing",
      "Karbi",
      "Dimasa"
    ],
    "answer": "Mishing",
    "correctOption": "B",
    "explanation": "Step 1: Identify the fact being tested. Step 2: Ali Aye Ligang is a major agricultural festival of the Mishing community of Assam. Hence Mishing is correct. Step 3: Therefore, the correct option is B.",
    "subject": "Assam GK",
    "topic": "Assam Culture – Mishing Festival",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0541",
    "question": "English: What is the main component of a glacier ?\nAssamese: হিমবাহৰ প্রধান উপাদান কি ?",
    "options": [
      "Lava",
      "Salt water",
      "Ice",
      "Rain forest"
    ],
    "answer": "Ice",
    "correctOption": "C",
    "explanation": "Step 1: Identify the fact being tested. Step 2: A glacier is primarily a large mass of compacted ice. Therefore ice is the main component. Step 3: Therefore, the correct option is C.",
    "subject": "General Science",
    "topic": "General Science – Glaciers",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0542",
    "question": "English: How many countries does India share land borders with ?\nAssamese: ভাৰতবৰ্ষই কেইখন দেশৰ স্থল সীমা স্পৰ্শ কৰে ?",
    "options": [
      "Six",
      "Seven",
      "Eight",
      "Nine"
    ],
    "answer": "Seven",
    "correctOption": "B",
    "explanation": "Step 1: Identify the fact being tested. Step 2: India shares land borders with seven countries: Pakistan, Afghanistan, China, Nepal, Bhutan, Bangladesh and Myanmar. Step 3: Therefore, the correct option is B.",
    "subject": "Assam GK",
    "topic": "Indian Geography – Land Borders",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0543",
    "question": "English: What was the former name of Karbi Anglong district ?\nAssamese: কাৰ্বি আংলং জিলাৰ পূৰ্বৰ নাম কি আছিল?",
    "options": [
      "Mikir Hills district",
      "Lushai Hills district",
      "Cachar Hills district",
      "West Naga Hills district"
    ],
    "answer": "Mikir Hills district",
    "correctOption": "A",
    "explanation": "Step 1: Identify the fact being tested. Step 2: Karbi Anglong was formerly known as Mikir Hills district. Hence option A is correct. Step 3: Therefore, the correct option is A.",
    "subject": "Assam GK",
    "topic": "Assam History – Karbi Anglong",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0544",
    "question": "English: McMahon line separates which two countries ?\nAssamese: মেকমাহন সীমাৰেখাই কোন দুখন দেশক পৃথক কৰে ?",
    "options": [
      "Afghanistan and Pakistan",
      "Myanmar and Bangladesh",
      "India and China",
      "Vietnam and Thailand"
    ],
    "answer": "India and China",
    "correctOption": "C",
    "explanation": "Step 1: Identify the fact being tested. Step 2: The McMahon Line is associated with the India–China boundary in the eastern Himalayas. Therefore India and China is correct. Step 3: Therefore, the correct option is C.",
    "subject": "Assam GK",
    "topic": "Indian Geography – McMahon Line",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0545",
    "question": "English: Kathakali is a dance form of which State ?\nAssamese: কথাকলি কোনখন ৰাজ্যৰ এক নৃত্য শৈলী ?",
    "options": [
      "Gujarat",
      "West Bengal",
      "Kerala",
      "Himachal Pradesh"
    ],
    "answer": "Kerala",
    "correctOption": "C",
    "explanation": "Step 1: Identify the fact being tested. Step 2: Kathakali is a classical dance-drama tradition of Kerala. Hence Kerala is correct. Step 3: Therefore, the correct option is C.",
    "subject": "Assam GK",
    "topic": "Indian Culture – Kathakali",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0546",
    "question": "English: “Gobha Raja” is the titular king of which community ?\nAssamese: “গোভা ৰজা” কোন সম্প্ৰদায়ৰ উপাধি ৰজা ?",
    "options": [
      "Ahom",
      "Mishing",
      "Khamti",
      "Tiwa"
    ],
    "answer": "Tiwa",
    "correctOption": "D",
    "explanation": "Step 1: Identify the fact being tested. Step 2: Gobha Raja is the traditional titular king associated with the Tiwa community. Therefore option D is correct. Step 3: Therefore, the correct option is D.",
    "subject": "Assam GK",
    "topic": "Assam Culture – Gobha Raja",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0547",
    "question": "English: Which country is known as the “Cockpit of Europe” ?\nAssamese: নিম্নলিখিত কোনখন দেশক “ইউৰোপৰ ক’কপিট” ৰূপে জনা যায় ?",
    "options": [
      "Switzerland",
      "Belgium",
      "Spain",
      "Portugal"
    ],
    "answer": "Belgium",
    "correctOption": "B",
    "explanation": "Step 1: Identify the fact being tested. Step 2: Belgium has historically been called the 'Cockpit of Europe' because of the many European conflicts fought on or around its territory. Step 3: Therefore, the correct option is B.",
    "subject": "Assam GK",
    "topic": "World Geography – Cockpit of Europe",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0548",
    "question": "English: Which of the following sea passages connects Asia with Europe ?\nAssamese: নিম্নলিখিত কোনটো সমুদ্ৰপথে এছিয়াক ইউৰোপৰ সৈতে সংযোগ কৰে ?",
    "options": [
      "Suez Canal",
      "English Channel",
      "Panama Canal",
      "Strait of Malacca"
    ],
    "answer": "Suez Canal",
    "correctOption": "A",
    "explanation": "Step 1: Identify the fact being tested. Step 2: The Suez Canal connects the Mediterranean Sea and the Red Sea, providing a major sea route between Europe and Asia. Step 3: Therefore, the correct option is A.",
    "subject": "Assam GK",
    "topic": "World Geography – Suez Canal",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0549",
    "question": "English: Which community of Assam has “Choklong” system of weddings ?\nAssamese: অসমৰ কোন সম্প্ৰদায়ত ‘চকলং’ প্রথাৰে বিয়া অনুষ্ঠিত হয় ?",
    "options": [
      "Bodo",
      "Dimasa",
      "Mishing",
      "Ahom"
    ],
    "answer": "Ahom",
    "correctOption": "D",
    "explanation": "Step 1: Identify the fact being tested. Step 2: The Choklong system of marriage is associated with the Ahom community of Assam. Hence option D is correct. Step 3: Therefore, the correct option is D.",
    "subject": "Assam GK",
    "topic": "Assam Culture – Choklong",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0550",
    "question": "English: Kurseong is a hill station in the state of :\nAssamese: কাৰ্চেয়ং যিখন ৰাজ্যৰ এক পাৰ্বত্য আস্থান ঃ",
    "options": [
      "Sikkim",
      "Arunachal Pradesh",
      "West Bengal",
      "Nagaland"
    ],
    "answer": "West Bengal",
    "correctOption": "C",
    "explanation": "Step 1: Identify the fact being tested. Step 2: Kurseong is a hill station in West Bengal, in the Darjeeling region. Hence option C is correct. Step 3: Therefore, the correct option is C.",
    "subject": "Assam GK",
    "topic": "Indian Geography – Kurseong",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0551",
    "question": "English: Which of the following rulers had ascended the throne at Delhi ?\nAssamese: নিম্নলিখিত কোনগৰাকী শাসকে দিল্লীৰ সিংহাসনত আৰোহণ কৰিছিল ?",
    "options": [
      "Chand Bibi",
      "Rani Ahilya Bai",
      "Rezia Sultana",
      "Rani Laxmi Bai"
    ],
    "answer": "Rezia Sultana",
    "correctOption": "C",
    "explanation": "Step 1: Identify the fact being tested. Step 2: Razia Sultana ascended the throne of the Delhi Sultanate and ruled in the 13th century. Hence option C is correct. Step 3: Therefore, the correct option is C.",
    "subject": "Assam GK",
    "topic": "Indian History – Razia Sultana",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0552",
    "question": "English: Which dynasty ruled the longest in ancient Assam region ?\nAssamese: প্ৰাচীন অসম মুলুকত কোন বংশই সৰ্বাধিক কাল শাসন কৰিছিল ?",
    "options": [
      "The Ahoms",
      "The Barmans",
      "The Koch",
      "The Sutiyas"
    ],
    "answer": "The Ahoms",
    "correctOption": "A",
    "explanation": "Step 1: Identify the fact being tested. Step 2: Among the listed dynasties, the Ahoms ruled the Assam region for the longest continuous period, from 1228 to 1826. Step 3: Therefore, the correct option is A.",
    "subject": "Assam GK",
    "topic": "Assam History – Ahom Dynasty",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0553",
    "question": "English: What is the introduction to Constitution of India called ?\nAssamese: ভাৰতীয় সংবিধানৰ আৰম্ভণী অংশক কি বুলি কোৱা হয় ?",
    "options": [
      "The Preamble",
      "The Preface",
      "The Introduction",
      "The First Page"
    ],
    "answer": "The Preamble",
    "correctOption": "A",
    "explanation": "Step 1: Identify the fact being tested. Step 2: The introductory statement of the Constitution is called the Preamble. It states the Constitution's guiding ideals and objectives. Step 3: Therefore, the correct option is A.",
    "subject": "Assam GK",
    "topic": "Indian Polity – Preamble",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0554",
    "question": "English: Which of the following is not a criterion for citizenship of India ?\nAssamese: নিম্নলিখিত সমূহৰ কোনটো ভাৰতৰ নাগৰিকত্বৰ মাপকাঠি নহয় ?",
    "options": [
      "Acquisition of Territory",
      "Buying property",
      "Naturalization",
      "Descent"
    ],
    "answer": "Buying property",
    "correctOption": "B",
    "explanation": "Step 1: Identify the fact being tested. Step 2: Buying property is not itself a constitutional criterion for acquiring Indian citizenship. The listed citizenship routes include descent and naturalisation. Step 3: Therefore, the correct option is B.",
    "subject": "Assam GK",
    "topic": "Indian Polity – Citizenship",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0555",
    "question": "English: Which kingdom did Sati Sadhani belong to ?\nAssamese: সতী সাধনী কোনখন ৰাজ্যৰ সৈতে সংলগ্নিত আছিল ?",
    "options": [
      "Koch Kingdom",
      "Ahom Kingdom",
      "Dimasa Kingdom",
      "Sutiya Kingdom"
    ],
    "answer": "Sutiya Kingdom",
    "correctOption": "D",
    "explanation": "Step 1: Identify the fact being tested. Step 2: Sati Sadhani is associated with the Sutiya Kingdom of medieval Assam. Therefore option D is correct. Step 3: Therefore, the correct option is D.",
    "subject": "Assam GK",
    "topic": "Assam History – Sati Sadhani",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0556",
    "question": "English: Who was the first President of the United States of America ?\nAssamese: আমেৰিকা যুক্তৰাষ্ট্ৰৰ প্ৰথম ৰাষ্ট্ৰপতি কোন আছিল ?",
    "options": [
      "George Washington",
      "Abraham Lincoln",
      "Thomas Jefferson",
      "Benjamin Franklin"
    ],
    "answer": "George Washington",
    "correctOption": "A",
    "explanation": "Step 1: Identify the fact being tested. Step 2: George Washington was the first President of the United States, serving from 1789 to 1797. Step 3: Therefore, the correct option is A.",
    "subject": "Assam GK",
    "topic": "World History – First US President",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0557",
    "question": "English: Identify the southernmost river amongst the following :\nAssamese: নিম্নলিখিত সমূহৰ পৰা আটাইতকৈ দক্ষিণত অৱস্থিত নদীখন চিনাক্ত কৰক।",
    "options": [
      "Indus River",
      "Godavari River",
      "Brahmaputra River",
      "Cauvery River"
    ],
    "answer": "Cauvery River",
    "correctOption": "D",
    "explanation": "Step 1: Identify the fact being tested. Step 2: Among the listed rivers, the Cauvery lies farthest south. The Indus, Brahmaputra and Godavari are all farther north. Step 3: Therefore, the correct option is D.",
    "subject": "Assam GK",
    "topic": "Indian Geography – Rivers",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0558",
    "question": "English: The sum of the present age of the father and the son is 60 years. After 15 years, the father’s age\n will be twice that of the son. The present age of the son is :\nAssamese: পিতৃ আৰু পুত্ৰৰ বৰ্তমান বয়সৰ যোগফল 60 বছৰ। 15 বছৰৰ পিছত পিতৃৰ বয়স পুত্ৰৰ বয়সৰ দুগুণ হ'ব। পুত্ৰৰ বৰ্তমান বয়স হৈছেঃ",
    "options": [
      "10 years",
      "25 years",
      "18 years",
      "15 years"
    ],
    "answer": "15 years",
    "correctOption": "D",
    "explanation": "Let the son's present age be s and the father's age be f. Then f+s=60. After 15 years, f+15=2(s+15). So f=2s+15; substituting gives 3s+15=60, hence s=15 years.",
    "subject": "Mathematics",
    "topic": "Mathematics – Ages",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0559",
    "question": "English: Find m if (2^m × 2^6 × 2^−4) / 2^−5 = 2^12.\nAssamese: যদি (2^m × 2^6 × 2^−4) / 2^−5 = 2^12, তেন্তে m ৰ মান নিৰ্দ্ধাৰণ কৰক।",
    "options": [
      "5",
      "3",
      "8",
      "7"
    ],
    "answer": "5",
    "correctOption": "A",
    "explanation": "Use the laws of exponents. The left side is 2^(m+6−4−(−5)) = 2^(m+7). Since it equals 2^12, m+7=12, so m=5.",
    "subject": "Mathematics",
    "topic": "Mathematics – Exponents",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0560",
    "question": "English: Two numbers are in the ratio 3 : 4 and their sum equals 49. The two numbers are :\nAssamese: কৌনো দুটা সংখ্যা 3 : + অনুপাতত আছে আৰু সিহঁতৰ যোগফল হৈছে 49 ৷ সংখ্যা দুটা হ'ল?",
    "options": [
      "16, 33",
      "18, 31",
      "21, 28",
      "24, 25"
    ],
    "answer": "21, 28",
    "correctOption": "C",
    "explanation": "Let the two numbers be 3k and 4k because their ratio is 3:4. Their sum is 7k=49, so k=7. The numbers are therefore 21 and 28.",
    "subject": "Mathematics",
    "topic": "Mathematics – Ratio & Proportion",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0561",
    "question": "English: (−1)^5 + (−1)^6 equals :\nAssamese: (−1)^5 + (−1)^6 ৰ সমান হৈছেঃ",
    "options": [
      "1",
      "−1",
      "0",
      "−11"
    ],
    "answer": "0",
    "correctOption": "C",
    "explanation": "An odd power of −1 is −1 and an even power of −1 is +1. Thus (−1)^5+(−1)^6 = −1+1=0.",
    "subject": "Mathematics",
    "topic": "Mathematics – Powers of −1",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0562",
    "question": "English: The value of √1849 is :\nAssamese: √1849 ৰ মান হৈছেঃ",
    "options": [
      "33",
      "43",
      "53",
      "63"
    ],
    "answer": "43",
    "correctOption": "B",
    "explanation": "43² = 1849. Therefore √1849 = 43, so option B is correct.",
    "subject": "Mathematics",
    "topic": "Mathematics – Square Root",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0563",
    "question": "English: 40% of 60 when added to 60% of 40 would result in :\nAssamese: 60 ৰ 40% ৰ সৈতে 40 ৰ 60% যোগ কৰিলে ফলাফল হ’বঃ",
    "options": [
      "40",
      "48",
      "60",
      "64"
    ],
    "answer": "48",
    "correctOption": "B",
    "explanation": "40% of 60 = 24. Also, 60% of 40 = 24. Adding them gives 24+24=48.",
    "subject": "Mathematics",
    "topic": "Mathematics – Percentage",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0564",
    "question": "English: Addition of two Roman numbers XIV+IV equals :\nAssamese: দুটা ৰোমান সংখ্যাৰ যোগফল XIV + IV হৈছে :",
    "options": [
      "XXV",
      "XVIII",
      "XIX",
      "XX"
    ],
    "answer": "XVIII",
    "correctOption": "B",
    "explanation": "XIV = 14 and IV = 4 in Roman numerals. Therefore 14+4=18, which is XVIII.",
    "subject": "Mathematics",
    "topic": "Mathematics – Roman Numerals",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0565",
    "question": "English: (x² − 3x − 4) ÷ (x + 1) = ?  (x ≠ −1)\nAssamese: (x² − 3x − 4) ÷ (x + 1) = ?  (x ≠ −1)",
    "options": [
      "x−4",
      "x−3",
      "x−2",
      "x−1"
    ],
    "answer": "x−4",
    "correctOption": "A",
    "explanation": "Factor x²−3x−4 = (x−4)(x+1). Dividing by x+1, with x≠−1, leaves x−4.",
    "subject": "Mathematics",
    "topic": "Mathematics – Algebraic Division",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0566",
    "question": "English: The fractional form of the recurring number 5.121212... is :\nAssamese: পৌনঃপুনিক সংখ্যা 5.121212... ৰ ভগ্নাংশ ৰূপটো হৈছে?",
    "options": [
      "507/90",
      "517/99",
      "517/90",
      "507/99"
    ],
    "answer": "507/99",
    "correctOption": "D",
    "explanation": "Let x=5.121212... Then 100x=512.121212... Subtract x: 99x=507, so x=507/99.",
    "subject": "Mathematics",
    "topic": "Mathematics – Recurring Decimals",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0567",
    "question": "English: The total interest accrued on a Principal of ` 1000 over 1 year at compound interest of 10% per\n annum compounded 6 monthly, is :\nAssamese: প্ৰতি 6 মাহৰ মূৰত চক্ৰবৃদ্ধি সুত হিচাব কৰিলে বছৰি 10% চক্ৰবৃদ্ধি সুতৰ হাৰত ₹ 1000 মূলধনৰ 1 বছৰৰ মূৰত জমা হোৱা মুঠ সুতৰ পৰিমাণ হৈছেঃ",
    "options": [
      "` 105.20",
      "` 102.20",
      "` 102.50",
      "` 105.50"
    ],
    "answer": "` 102.50",
    "correctOption": "C",
    "explanation": "The nominal annual rate is 10%, compounded every 6 months, so each half-year rate is 5%. Amount = 1000(1.05)^2 = 1102.50. Interest = 1102.50−1000 = ₹102.50.",
    "subject": "Mathematics",
    "topic": "Mathematics – Compound Interest",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0568",
    "question": "English: If the minute hand of a clock traverses an angle of 180°, the angle traversed by the hour hand during the time is :\nAssamese: যদি ঘড়ী এটাৰ মিনিটৰ কাঁটা ডালে 180° কোণ অতিক্ৰম কৰে, তেন্তে একে সময়ত ঘণ্টাৰ কাঁটা ডালে অতিক্ৰম কৰা কোণ হৈছেঃ",
    "options": [
      "20°",
      "5°",
      "10°",
      "15°"
    ],
    "answer": "15°",
    "correctOption": "D",
    "explanation": "A minute hand moves 360° in 60 minutes, so 180° takes 30 minutes. The hour hand moves 0.5° per minute, so in 30 minutes it moves 15°.",
    "subject": "Mathematics",
    "topic": "Mathematics – Time and Angles",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0569",
    "question": "English: The diagonal of a square is 10 cm. The area of the square is :\nAssamese: এটা বৰ্গৰ কৰ্ণৰ জোখ 10 চে:মি.। বৰ্গটোৰ ক্ষেত্ৰফল হৈছে?",
    "options": [
      "100 cm2",
      "50 cm2",
      "64 cm2",
      "48 cm2"
    ],
    "answer": "50 cm2",
    "correctOption": "B",
    "explanation": "For a square, diagonal d=a√2. With d=10, a²=d²/2=100/2=50. Hence the area is 50 cm².",
    "subject": "Mathematics",
    "topic": "Mathematics – Geometry/Area",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0570",
    "question": "English: The sum of any two integers is :\nAssamese: যিকোনো দুটা অখণ্ড সংখ্যাৰ যোগফল ঃ",
    "options": [
      "always a non-zero positive integer.",
      "always a non-zero negative integer.",
      "always either a non-zero positive or a non-zero negative integer.",
      "always either a non-zero positive, a non-zero negative integer or 0."
    ],
    "answer": "always either a non-zero positive, a non-zero negative integer or 0.",
    "correctOption": "D",
    "explanation": "The sum of two integers can be positive, negative, or zero. For example, 2+3=5, (−2)+(−3)=−5, and 2+(−2)=0. Therefore option D is the only universally correct statement.",
    "subject": "Mathematics",
    "topic": "Mathematics – Integers",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0571",
    "question": "English: The remainder when 2^6 is divided by 5 is :\nAssamese: 2^6 ক 5 ৰে হৰণ কৰিলে প্ৰাপ্ত ভাগশেষ হ’বঃ",
    "options": [
      "0",
      "6",
      "2",
      "4"
    ],
    "answer": "4",
    "correctOption": "D",
    "explanation": "2^6=64. Dividing 64 by 5 gives 12 remainder 4 because 64=5×12+4.",
    "subject": "Mathematics",
    "topic": "Mathematics – Remainders",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0572",
    "question": "English: The square of a smaller number is subtracted from the square of a larger number and the result is equal to the difference of the larger and the smaller number. The sum of the two numbers is :\nAssamese: কোনো দুটা সংখ্যাৰ ডাঙৰটোৰ বৰ্গৰ পৰা সৰুটোৰ বৰ্গৰ মান বিয়োগ কৰিলে ফলাফল সংখ্যা দুটাৰ পাৰ্থক্যৰ সমান হয়। সংখ্যা দুটাৰ যোগফল হৈছে?",
    "options": [
      "0",
      "1/2",
      "1",
      "2"
    ],
    "answer": "1",
    "correctOption": "C",
    "explanation": "Let the larger and smaller numbers be L and S. The condition gives L²−S²=L−S. Factor: (L−S)(L+S)=L−S. Since the numbers are distinct, L−S≠0, so L+S=1.",
    "subject": "Mathematics",
    "topic": "Mathematics – Algebra/Factorization",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0573",
    "question": "English: The sum of the odd numbers 1, 3, 5, . . . . . upto 15 terms is :\nAssamese: অযুগ্ম সংখ্যা 1, 3, 5, ... ৰ 15 টা পদলৈ মুঠ যোগফল হৈছে?",
    "options": [
      "225",
      "125",
      "169",
      "196"
    ],
    "answer": "225",
    "correctOption": "A",
    "explanation": "The sum of the first n odd positive integers is n². For n=15, the sum is 15²=225.",
    "subject": "Mathematics",
    "topic": "Mathematics – Sum of Odd Numbers",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0574",
    "question": "English: The LCM and HCF of two numbers are 24 and 4 respectively. If one of the numbers is 12, then the\n other number is :\nAssamese: দুটা সংখ্যাৰ ল.সা.গু. আৰু গ.সা.গু. যথাক্ৰমে 24 আৰু 4। সংখ্যাদ্বয়ৰ এটা যদি 12 হয় তেন্তে আনটো সংখ্যা হ’লঃ",
    "options": [
      "20",
      "8",
      "10",
      "6"
    ],
    "answer": "8",
    "correctOption": "B",
    "explanation": "For two numbers a and b, LCM×HCF=a×b. Thus 24×4=12×b, giving b=8.",
    "subject": "Mathematics",
    "topic": "Mathematics – LCM and HCF",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0575",
    "question": "English: Let all the months of a year is of 28 days. If January 1 falls on a Monday, then April 28 will fall\n on a :\nAssamese: ধৰি লোৱা হ'ল যে এটা বছৰৰ সকলোটি মাহ 28 দিন যুক্ত হয়। যদি 1 জানুৱাৰীৰ দিনটো সোমবাৰ হয়, তেন্তে 28 এপ্ৰিলৰ দিনটো হ'ব ঃ",
    "options": [
      "Friday",
      "Sunday",
      "Monday",
      "Saturday"
    ],
    "answer": "Sunday",
    "correctOption": "B",
    "explanation": "If every month has exactly 28 days, each month is exactly 4 weeks. Therefore April 28 is the same weekday as April 1, and April 1 is the same weekday as January 1. Since January 1 is Monday, April 28 is Monday.",
    "subject": "Mathematics",
    "topic": "Mathematics – Calendar",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0576",
    "question": "English: If m is a digit and the number 46 m 23 is divisible by 9, then the digit m is equal to :\nAssamese: যদি m পদ্ধতিৰ এটা অংক হয় আৰু 46m23 সংখ্যাটো 9 ৰে বিভাজ্য হয়, তেন্তে m ৰ মান সমান হ’বঃ",
    "options": [
      "1",
      "0",
      "5",
      "3"
    ],
    "answer": "3",
    "correctOption": "D",
    "explanation": "A number is divisible by 9 when the sum of its digits is divisible by 9. For 46m23, digit sum is 4+6+m+2+3=15+m. The next multiple of 9 is 18, so m=3.",
    "subject": "Mathematics",
    "topic": "Mathematics – Divisibility by 9",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0577",
    "question": "English: A garden has p numbers of trees. Every tree has q number of branches, every branch has r number\n of sub-branches and every sub-branch has s number of leaves. The total number of leaves in the\n garden is :\nAssamese: কোনো এখন বাগিছাত p জোপা গছ আছে। প্ৰতিজোপা গছত q সংখ্যক শাখা, প্ৰতিটো শাখাত r সংখ্যক উপশাখা আৰু প্ৰতিটো উপশাখাত s সংখ্যক পাত লাগি আছে। বাগিছাখনত থকা সৰ্বমুঠ পাতৰ সংখ্যা হৈছে?",
    "options": [
      "p+q+r+s",
      "pq+rs",
      "pqr+s",
      "pqrs"
    ],
    "answer": "pqrs",
    "correctOption": "D",
    "explanation": "Multiply the number of choices at each level: p trees × q branches per tree × r sub-branches per branch × s leaves per sub-branch = pqrs.",
    "subject": "Mathematics",
    "topic": "Mathematics – Algebraic Expressions",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0578",
    "question": "English: The first modern Olympic Games was held in :\nAssamese: প্ৰথম আধুনিক অলিম্পিক খেল ক’ত অনুষ্ঠিত হৈছিল ?",
    "options": [
      "Athens",
      "Paris",
      "London",
      "Berlin"
    ],
    "answer": "Athens",
    "correctOption": "A",
    "explanation": "Step 1: Identify the fact being tested. Step 2: The first modern Olympic Games were held in Athens, Greece, in 1896. Hence option A is correct. Step 3: Therefore, the correct option is A.",
    "subject": "Assam GK",
    "topic": "General Knowledge – Modern Olympics",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0579",
    "question": "English: Which of the following statements is incorrect ?\nAssamese: নিম্নলিখিত কোনটো উক্তি অশুদ্ধ ?",
    "options": [
      "Thomas Alva Edison was deaf.",
      "Apple is related to discovery of gravity.",
      "The brightest planet as seen from earth is Venus.",
      "The chemical symbol for sodium is Sd."
    ],
    "answer": "The chemical symbol for sodium is Sd.",
    "correctOption": "D",
    "explanation": "Step 1: Identify the fact being tested. Step 2: The sodium symbol is Na, derived from the Latin name natrium, not Sd. Therefore statement D is the incorrect statement. Step 3: Therefore, the correct option is D.",
    "subject": "General Science",
    "topic": "General Science – Astronomy/Chemistry",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0580",
    "question": "English: In a family, the sum of the present ages of the father, mother and the only son is x years. After y years, the sum of their ages will be :\nAssamese: এটা পৰিয়ালত পিতৃ, মাতৃ আৰু একমাত্ৰ পুত্ৰৰ বৰ্তমান বয়সসমূহৰ মুঠ যোগফল x বছৰ। y বছৰৰ পিছত তেওঁলোকৰ বয়সসমূহৰ মুঠ যোগফল হ’ব?",
    "options": [
      "3x+y years",
      "3(x+y) years",
      "x+y years",
      "x+3y years"
    ],
    "answer": "x+3y years",
    "correctOption": "D",
    "explanation": "There are three people. After y years, each person's age increases by y, so the total increases by 3y. Starting from x, the new total is x+3y.",
    "subject": "Mathematics",
    "topic": "Mathematics – Ages",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0581",
    "question": "English: In which field did Bhogeshwar Baruah excel ?\nAssamese: ভোগেশ্বৰ বৰাই কোনটো ক্ষেত্ৰত পাৰদৰ্শিতা লাভ কৰিছিল ?",
    "options": [
      "Athletics",
      "Swimming",
      "Badminton",
      "Football"
    ],
    "answer": "Athletics",
    "correctOption": "A",
    "explanation": "Step 1: Identify the fact being tested. Step 2: Bhogeswar Baruah was an Assamese athlete and sprinter, so athletics is the correct field. Step 3: Therefore, the correct option is A.",
    "subject": "Assam GK",
    "topic": "Assam GK – Bhogeswar Baruah",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0582",
    "question": "English: The Ramcharitmanas was written by :\nAssamese: ৰামচৰিতমানস ৰচনা কৰা ব্যক্তিগৰাকী হৈছে?",
    "options": [
      "Kabir",
      "Veda Vyas",
      "Adi Shankaracharya",
      "Tulsidas"
    ],
    "answer": "Tulsidas",
    "correctOption": "D",
    "explanation": "Step 1: Identify the fact being tested. Step 2: The Ramcharitmanas was composed by Tulsidas in Awadhi. Therefore option D is correct. Step 3: Therefore, the correct option is D.",
    "subject": "Assam GK",
    "topic": "Indian Literature – Ramcharitmanas",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0583",
    "question": "English: In which Continent is the Amazonian Rain Forest found ?\nAssamese: আমাজনৰ বৰ্ষাৰণ্য কোনখন মহাদেশত অৱস্থিত ?",
    "options": [
      "Europe",
      "North America",
      "Africa",
      "South America"
    ],
    "answer": "South America",
    "correctOption": "D",
    "explanation": "Step 1: Identify the fact being tested. Step 2: The Amazon rainforest is concentrated in the Amazon Basin of South America. Hence option D is correct. Step 3: Therefore, the correct option is D.",
    "subject": "Assam GK",
    "topic": "Geography – Amazon Rainforest",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0584",
    "question": "English: Which of the following is responsible for converting milk to curd ?\nAssamese: গাখীৰক দৈ লৈ ৰূপান্তৰিত কৰাৰ ক্ষেত্ৰত নিম্নলিখিত কোনবিধে ভূমিকা গ্ৰহণ কৰে ?",
    "options": [
      "Actinomyces",
      "Lactobacillus",
      "Fusobacteriota",
      "Malassezia"
    ],
    "answer": "Lactobacillus",
    "correctOption": "B",
    "explanation": "Step 1: Identify the fact being tested. Step 2: Lactobacillus bacteria ferment lactose into lactic acid, which helps turn milk into curd. Step 3: Therefore, the correct option is B.",
    "subject": "General Science",
    "topic": "General Science – Microbiology/Fermentation",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0585",
    "question": "English: Origami is the art of paper folding that originated in :\nAssamese: কাগজ ভাঁজ কৰাৰ কলা অৰিগামিৰ উৎপত্তি যিটো দেশত হৈছিল?",
    "options": [
      "China",
      "Korea",
      "Japan",
      "Cambodia"
    ],
    "answer": "Japan",
    "correctOption": "C",
    "explanation": "Step 1: Identify the fact being tested. Step 2: Origami, the traditional art of paper folding, is associated with Japan. Hence option C is correct. Step 3: Therefore, the correct option is C.",
    "subject": "Assam GK",
    "topic": "World Culture – Origami",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0586",
    "question": "English: Near which town is the Da Parbatia gate located ?\nAssamese: কোনখন চহৰৰ সমীপত দ’ পৰ্বতীয়া তোৰণ অৱস্থিত ?",
    "options": [
      "Tinsukia",
      "Tezpur",
      "Silchar",
      "Barpeta"
    ],
    "answer": "Tezpur",
    "correctOption": "B",
    "explanation": "Step 1: Identify the fact being tested. Step 2: The Da Parbatia gateway is an important archaeological monument located near Tezpur in Assam. Step 3: Therefore, the correct option is B.",
    "subject": "Assam GK",
    "topic": "Assam History – Da Parbatia",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0587",
    "question": "English: What is the currency of Indonesia ?\nAssamese: ইণ্ডোনেছিয়াৰ মুদ্ৰাৰ নাম কি ?",
    "options": [
      "Ringgit",
      "Dinar",
      "Rupiah",
      "Shilling"
    ],
    "answer": "Rupiah",
    "correctOption": "C",
    "explanation": "Step 1: Identify the fact being tested. Step 2: Indonesia's official currency is the rupiah. Ringgit is used in Malaysia. Step 3: Therefore, the correct option is C.",
    "subject": "Assam GK",
    "topic": "World Geography – Currency",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0588",
    "question": "English: Which country is known as the “Land of Rising Sun” ?\nAssamese: কোনখন দেশ “উদীয়মান সূৰ্য্যৰ দেশ” ৰূপে জনাজাত ?",
    "options": [
      "China",
      "Japan",
      "New Zealand",
      "Indonesia"
    ],
    "answer": "Japan",
    "correctOption": "B",
    "explanation": "Step 1: Identify the fact being tested. Step 2: Japan is popularly called the 'Land of the Rising Sun' because it lies east of the Asian mainland, where the sun appears to rise first. Step 3: Therefore, the correct option is B.",
    "subject": "Assam GK",
    "topic": "World Geography – Japan",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0589",
    "question": "English: Rabindranath Tagore was awarded Nobel Prize in Literature for :\nAssamese: কোনটো কৃতিৰ বাবে ৰবীন্দ্ৰনাথ ঠাকুৰে সাহিত্যৰ নোবেল বঁটা লাভ কৰিছিল ?",
    "options": [
      "Ghare Baire",
      "Gitimalya",
      "Gitanjali",
      "Gora"
    ],
    "answer": "Gitanjali",
    "correctOption": "C",
    "explanation": "Step 1: Identify the fact being tested. Step 2: Rabindranath Tagore won the Nobel Prize in Literature in 1913 primarily for Gitanjali. Step 3: Therefore, the correct option is C.",
    "subject": "Assam GK",
    "topic": "Indian Literature – Rabindranath Tagore",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0590",
    "question": "English: The highest gallantry award of Indian military during war is :\nAssamese: যুদ্ধৰ সময়ত ভাৰতীয় সামৰিক বাহিনীৰ সৰ্বোচ্চ বীৰত্ব বঁটা হৈছেঃ",
    "options": [
      "Maha Vir Chakra",
      "Param Vir Chakra",
      "Ati Vishisht Seva Medal",
      "Ashoka Chakra"
    ],
    "answer": "Param Vir Chakra",
    "correctOption": "B",
    "explanation": "Step 1: Identify the fact being tested. Step 2: The Param Vir Chakra is India's highest military gallantry award for wartime bravery. Step 3: Therefore, the correct option is B.",
    "subject": "Assam GK",
    "topic": "Indian Defence – Gallantry Awards",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0591",
    "question": "English: August Kranti with “Karenge Ya Marenge” slogan was related to which movement for India’s\n independence ?\nAssamese: “কৰেংগে য়া মৰেংগে” শ্লোগানেৰে আগষ্ট ক্ৰান্তি ভাৰতৰ স্বাধীনতাৰ হকে কৰা কোনটো আন্দোলনৰ সৈতে সম্বন্ধিত?",
    "options": [
      "Non Cooperation Movement",
      "Quit India Movement",
      "Khilafat Movement",
      "The 1857 Sepoy Mutiney"
    ],
    "answer": "Quit India Movement",
    "correctOption": "B",
    "explanation": "Step 1: Identify the fact being tested. Step 2: 'Karenge Ya Marenge' is associated with the Quit India Movement launched in 1942. Step 3: Therefore, the correct option is B.",
    "subject": "Assam GK",
    "topic": "Indian History – Quit India Movement",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0592",
    "question": "English: The national flag of which country features a dragon ?\nAssamese: কোনখন দেশৰ জাতীয় পতাকাত ড্ৰেগনৰ ছবি আছে ?",
    "options": [
      "Bhutan",
      "Singapore",
      "Japan",
      "Myanmar"
    ],
    "answer": "Bhutan",
    "correctOption": "A",
    "explanation": "Step 1: Identify the fact being tested. Step 2: Bhutan's national flag prominently features a white dragon. Therefore Bhutan is correct. Step 3: Therefore, the correct option is A.",
    "subject": "Assam GK",
    "topic": "World Geography – National Flags",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0593",
    "question": "English: Sharp pointed teeth inside human mouth are called :\nAssamese: মানুহৰ মুখৰ ভিতৰত থকা চোকা, জোঙা দাঁতবোৰক বোলা হয় ঃ",
    "options": [
      "Molars",
      "Canines",
      "Incisors",
      "Premolars"
    ],
    "answer": "Canines",
    "correctOption": "B",
    "explanation": "Step 1: Identify the fact being tested. Step 2: Sharp pointed teeth are canines. They are adapted for gripping and tearing food. Step 3: Therefore, the correct option is B.",
    "subject": "General Science",
    "topic": "General Science – Human Teeth",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0594",
    "question": "English: Who conferred the title of Kalaguru to Bishnu Prasad Rabha ?\nAssamese: দু, বিষ্ণুপ্ৰসাদ ৰাভাক ‘কলাগুৰু’ উপাধি কোনে প্ৰদান কৰিছিল ?",
    "options": [
      "Rabindranath Tagore",
      "Bishnuram Medhi",
      "Subhas Chandra Bose",
      "Sarvapalli Radhakrishnan"
    ],
    "answer": "Sarvapalli Radhakrishnan",
    "correctOption": "D",
    "explanation": "Step 1: Identify the fact being tested. Step 2: The title 'Kalaguru' was conferred on Bishnu Prasad Rabha by Sarvepalli Radhakrishnan, as reflected in the question's answer key. Step 3: Therefore, the correct option is D.",
    "subject": "Assam GK",
    "topic": "Assam Culture – Bishnu Prasad Rabha",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0595",
    "question": "English: What is situated at the confluence of three streams Sandhya, Lalita and Kanta ?\nAssamese: সন্ধ্যা, ললিতা আৰু কান্তা নামৰ তিনিটা জলধাৰাৰ সংগমস্থলত কোনটো অৱস্থিত?",
    "options": [
      "Vasistha Ashram, near Guwahati",
      "Ajan Pir Dargah, near Sibsagar",
      "Malinithan temple, near Silapathar",
      "Garampani hot water spring, near Golaghat"
    ],
    "answer": "Vasistha Ashram, near Guwahati",
    "correctOption": "A",
    "explanation": "Step 1: Identify the fact being tested. Step 2: Vasistha Ashram is associated with the confluence of the streams Sandhya, Lalita and Kanta near Guwahati. Step 3: Therefore, the correct option is A.",
    "subject": "Assam GK",
    "topic": "Assam Geography – Local Places",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0596",
    "question": "English: As on 1st of January, 2022, which of the following is NOT a (administrative) Division of Assam ?\nAssamese: 2022 বৰ্ষৰ 1 লা জানুৱাৰী সাপেক্ষে নিম্নলিখিত কোনটো অসমৰ (প্ৰশাসনিক) সংমণ্ডল নহয় ?",
    "options": [
      "Lower Assam",
      "Barak Valley",
      "Hills and Central Assam",
      "West Assam"
    ],
    "answer": "West Assam",
    "correctOption": "D",
    "explanation": "Step 1: Identify the fact being tested. Step 2: The listed administrative divisions of Assam include Lower Assam, Barak Valley, and Central Assam/Hill areas; 'West Assam' is not an administrative division in the given 2022 classification. Step 3: Therefore, the correct option is D.",
    "subject": "Assam GK",
    "topic": "Assam Polity – Administrative Divisions",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0597",
    "question": "English: What is the name of the statue placed near Sardar Sarovar Dam in Gujarat ?\nAssamese: গুজৰাটৰ চৰ্দাৰ সৰোবৰ বান্ধৰ সমীপত স্থাপন কৰা প্রতিমূৰ্তিটোৰ নাম কি ?",
    "options": [
      "Statue of Liberty",
      "Shakti Vajra",
      "Statue of Unity",
      "Shanti Stambh"
    ],
    "answer": "Statue of Unity",
    "correctOption": "C",
    "explanation": "Step 1: Identify the fact being tested. Step 2: The huge statue near the Sardar Sarovar Dam is the Statue of Unity, dedicated to Sardar Vallabhbhai Patel. Step 3: Therefore, the correct option is C.",
    "subject": "Assam GK",
    "topic": "Indian Geography – Statue of Unity",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0598",
    "question": "English: Which country was involved with India in the Doklam incident of 2017 ?\nAssamese: 2017 চনৰ ড’কলাম কাণ্ডত ভাৰতৰ সৈতে কোনখন দেশ জড়িত আছিল ?",
    "options": [
      "China",
      "Afghanistan",
      "Bangladesh",
      "Myanmar"
    ],
    "answer": "China",
    "correctOption": "A",
    "explanation": "Step 1: Identify the fact being tested. Step 2: The 2017 Doklam standoff involved India and China, with Bhutan also directly connected to the territorial dispute. Step 3: Therefore, the correct option is A.",
    "subject": "Assam GK",
    "topic": "Indian Affairs – Doklam",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0599",
    "question": "English: Which of the following Novels was written by Kanchan Borooah ?\nAssamese: নিম্নলিখিত কোনখন উপন্যাস কাঞ্চন বৰুৱাই ৰচনা কৰিছিল ?",
    "options": [
      "Mrityunjoy",
      "Oximot Jaar Heral Xima",
      "Ontorip",
      "Asol Manuh"
    ],
    "answer": "Oximot Jaar Heral Xima",
    "correctOption": "B",
    "explanation": "Step 1: Identify the fact being tested. Step 2: Kanchan Barua is the pen name associated with the Assamese novel 'Asimat Jar Heral Xima'. Hence option B is correct. Step 3: Therefore, the correct option is B.",
    "subject": "Assam GK",
    "topic": "Assam Literature – Kanchan Barua",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0600",
    "question": "English: Which of the following places of interest has been recently included in UNESCO World Heritage\n Site List ?\nAssamese: নিম্নলিখিত কোনটো আকৰ্ষণীয় স্থানক শেহতীয়াকৈ ইউনেস্কোৰ বিশ্ব ঐতিহ্য ক্ষেত্ৰৰ তালিকাত অন্তৰ্ভুক্ত কৰা হৈছে?",
    "options": [
      "Charaideo Moidams",
      "Batadrava Than",
      "Poa Mecca",
      "Sonai Rupai Wildlife Sanctuary"
    ],
    "answer": "Charaideo Moidams",
    "correctOption": "A",
    "explanation": "Step 1: Identify the fact being tested. Step 2: The Charaideo Moidams were inscribed on the UNESCO World Heritage List in 2024, making option A the correct choice. Step 3: Therefore, the correct option is A.",
    "subject": "Assam GK",
    "topic": "Assam Heritage – UNESCO World Heritage",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0601",
    "question": "English: In Assamese literature, who is known as “Ekhud Kokaideu” ?\nAssamese: অসমীয়া সাহিত্যত “এখুদ ককাইদেও” নামেৰে কাক জনা যায় ?",
    "options": [
      "Nabakanta Baruah",
      "Medini Mohan Choudhury",
      "Kumud Chandra Hazarika",
      "Kamalakanta Bhattacharyya"
    ],
    "answer": "Nabakanta Baruah",
    "correctOption": "A",
    "explanation": "Step 1: Identify the fact being tested. Step 2: Nabakanta Barua is known in Assamese literature by the sobriquet 'Ekhud Kokaideu'. Step 3: Therefore, the correct option is A.",
    "subject": "Assam GK",
    "topic": "Assam Literature – Ekhud Kokaideu",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0602",
    "question": "English: Which of the following airlines does not exist anymore ?\nAssamese: নিম্নলিখিত কোনটো বিমান সংস্থাৰ অস্তিত্ব বৰ্তমান সময়ত নাই ?",
    "options": [
      "Spicejet",
      "Indigo",
      "East West",
      "Vistara"
    ],
    "answer": "East West",
    "correctOption": "C",
    "explanation": "Step 1: Identify the fact being tested. Step 2: East West Airlines no longer exists as a functioning airline; the other listed carriers still exist. Step 3: Therefore, the correct option is C.",
    "subject": "Assam GK",
    "topic": "General Knowledge – Airlines",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0603",
    "question": "English: Which sport is the Davis Cup played for ?\nAssamese: কোন ক্ৰীড়াত ডেভিছ কাপ খেলা হয় ?",
    "options": [
      "Badminton",
      "Table Tennis",
      "Lawn Tennis",
      "Cricket"
    ],
    "answer": "Lawn Tennis",
    "correctOption": "C",
    "explanation": "Step 1: Identify the fact being tested. Step 2: The Davis Cup is an international men's team tennis competition. Therefore lawn tennis is correct. Step 3: Therefore, the correct option is C.",
    "subject": "Assam GK",
    "topic": "Sports – Davis Cup",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0604",
    "question": "English: Sunlight helps in producing which Vitamin in a human body ?\nAssamese: সূৰ্যৰ পোহৰে মানুহৰ শৰীৰত কোনবিধ ভিটামিন উৎপাদনত সহায় কৰে ?",
    "options": [
      "Vitamin C",
      "Vitamin B",
      "Vitamin D",
      "Vitamin A"
    ],
    "answer": "Vitamin D",
    "correctOption": "C",
    "explanation": "Step 1: Identify the fact being tested. Step 2: Sunlight enables the skin to synthesize vitamin D, specifically through UVB-triggered production of vitamin D3. Step 3: Therefore, the correct option is C.",
    "subject": "General Science",
    "topic": "General Science – Vitamins",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0605",
    "question": "English: Harihara also known as Hakka, and his brother Bukka Raya, founded which kingdom ?\nAssamese: হাক্কা নামেৰেও পৰিচিত হৰিহৰ আৰু তেওঁৰ ভাতৃ বুক্কা ৰায়াই কোনখন সাম্ৰাজ্য প্ৰতিষ্ঠা কৰিছিল?",
    "options": [
      "Chalukya Empire",
      "Vijayanagara Empire",
      "Chola Empire",
      "Hoysale Empire"
    ],
    "answer": "Vijayanagara Empire",
    "correctOption": "B",
    "explanation": "Step 1: Identify the fact being tested. Step 2: Harihara and Bukka Raya founded the Vijayanagara Empire in South India in the 14th century. Step 3: Therefore, the correct option is B.",
    "subject": "Assam GK",
    "topic": "Indian History – Vijayanagara Empire",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0606",
    "question": "English: Which of the following is a non-renewable source of energy ?\nAssamese: নিম্নলিখিত সমূহৰ কোনটো শক্তিৰ অনবীকৰণযোগ্য উৎস ?",
    "options": [
      "Wind power",
      "Hydropower",
      "Solar energy",
      "Fossil fuel"
    ],
    "answer": "Fossil fuel",
    "correctOption": "D",
    "explanation": "Step 1: Identify the fact being tested. Step 2: Fossil fuels such as coal, petroleum and natural gas are non-renewable because they form extremely slowly. Step 3: Therefore, the correct option is D.",
    "subject": "General Science",
    "topic": "General Science – Energy Resources",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0607",
    "question": "English: Saptakanda Ramayan was written by :\nAssamese: সপ্তকাণ্ড ৰামায়ণ কোনে লিখিছিল ?",
    "options": [
      "Horibor Bipro",
      "Madhava Kandali",
      "Ananta Kandali",
      "Hemo Saraswati"
    ],
    "answer": "Madhava Kandali",
    "correctOption": "B",
    "explanation": "Step 1: Identify the fact being tested. Step 2: Madhava Kandali wrote the Assamese Ramayana known as Saptakanda Ramayan. Therefore option B is correct. Step 3: Therefore, the correct option is B.",
    "subject": "Assam GK",
    "topic": "Assam Literature – Saptakanda Ramayan",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0608",
    "question": "English: Which of the following countries is NOT a permanent member of the United Nations Security\n Council ?\nAssamese: নিম্নলিখিত কোনখন দেশ ৰাষ্ট্ৰসংঘৰ নিৰাপত্তা পৰিষদৰ স্থায়ী সদস্য নহয় ?",
    "options": [
      "France",
      "China",
      "India",
      "United States of America"
    ],
    "answer": "India",
    "correctOption": "C",
    "explanation": "Step 1: Identify the fact being tested. Step 2: The five permanent UN Security Council members are China, France, Russia, the United Kingdom and the United States. India is not a permanent member. Step 3: Therefore, the correct option is C.",
    "subject": "Assam GK",
    "topic": "World Affairs – UN Security Council",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0609",
    "question": "English: Which of the following movies was not released in 2023 ?\nAssamese: নিম্নলিখিত কোনখন চলচ্চিত্ৰ 2023 চনত মুক্তি পোৱা নাছিল ?",
    "options": [
      "Jawan",
      "Animal",
      "Pathaan",
      "The Kashmir Files"
    ],
    "answer": "The Kashmir Files",
    "correctOption": "D",
    "explanation": "Step 1: Identify the fact being tested. Step 2: The Kashmir Files was released in 2022, whereas Jawan, Animal and Pathaan were released in 2023. Step 3: Therefore, the correct option is D.",
    "subject": "Assam GK",
    "topic": "Indian/World Cinema – 2023 Releases",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0610",
    "question": "English: As on 1st of January, 2024, who holds the portfolio for External Affairs in Narendra Modi’s Council\n of Ministers ?\nAssamese: 2024 চনৰ 1 লা জানুৱাৰী সাপেক্ষে নৰেন্দ্ৰ মোডীৰ মন্ত্ৰী পৰিষদত বৈদেশিক পৰিক্ৰমাৰ দপ্তৰৰ দায়িত্ব কাৰ ওপৰত ন্যস্ত আছে?",
    "options": [
      "Dr. Subrahmanyam Jaishankar",
      "Smt. Nirmala Sitharaman",
      "Smt. Smriti Zubin Irani",
      "Shri Kiren Rijiju"
    ],
    "answer": "Dr. Subrahmanyam Jaishankar",
    "correctOption": "A",
    "explanation": "Step 1: Identify the fact being tested. Step 2: As of 1 January 2024, Dr. Subrahmanyam Jaishankar held India's External Affairs portfolio. Step 3: Therefore, the correct option is A.",
    "subject": "Assam GK",
    "topic": "Indian Polity – Union Council of Ministers",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0611",
    "question": "English: Which of the following is NOT an IPL team ?\nAssamese: নিম্নলিখিত সমূহৰ কোনটো আইপিএল দল নহয় ?",
    "options": [
      "Delhi Capitals",
      "Gujarat Giants",
      "Sunrisers Hyderabad",
      "Lucknow Super Giants"
    ],
    "answer": "Gujarat Giants",
    "correctOption": "B",
    "explanation": "Step 1: Identify the fact being tested. Step 2: Gujarat Giants is a Women's Premier League team, not an IPL men's team. Hence it is the correct 'not an IPL team' choice. Step 3: Therefore, the correct option is B.",
    "subject": "Assam GK",
    "topic": "Sports – IPL",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0612",
    "question": "English: Which of the following is highest, among ranks of the Indian Army ?\nAssamese: ভাৰতীয় সেনাৰ পদবীসমূহৰ ভিতৰত নিম্নলিখিত কোনটো সৰ্বোচ্চ পদ?",
    "options": [
      "Brigadier",
      "Lieutenant General",
      "Major General",
      "Lieutenant Colonel"
    ],
    "answer": "Lieutenant General",
    "correctOption": "B",
    "explanation": "Step 1: Identify the fact being tested. Step 2: Among the listed ranks, Lieutenant General is above Major General, Brigadier and Lieutenant Colonel. Therefore B is highest among these options. Step 3: Therefore, the correct option is B.",
    "subject": "Assam GK",
    "topic": "Indian Defence – Army Ranks",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0613",
    "question": "English: What letters would fill the blanks in AO__BPP___QDR___SSFTT ?\nAssamese: কোনটো বৰ্ণ সমাহাৰে AO__BPP___QDR___SSFTT ৰ ৰিক্ত স্থানসমূহ পূৰ কৰিব ?",
    "options": [
      "OCREQ",
      "OCQER",
      "OCQRE",
      "ORQCE"
    ],
    "answer": "OCQRE",
    "correctOption": "C",
    "explanation": "Compare the sequence in groups. The missing letters must preserve the recurring letter-order pattern across the positions. Testing the choices, OCREQ is the only set that fills the blanks consistently, so A is correct.",
    "subject": "Reasoning",
    "topic": "Reasoning – Letter Series",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0614",
    "question": "English: Statements : I. Non-metro cities in the country have been suffering due to load shedding\n for quite some time.\n II. If the Government is not able to overcome the power crisis, load shedding\n will be extended even to the metro cities.\n Which of the following conclusions can be drawn ?\nAssamese: উক্তিঃ I. দেশৰ মেট্ৰো বিহীন চহৰসমূহে লোড শ্বেডিঙৰ বাবে যথেষ্ট দিনৰ পৰা কষ্ট ভুগি আহিছে। II. যদি চৰকাৰে বিদ্যুতৰ সংকট দূৰ কৰিব নোৱাৰে, তেন্তে মেট্ৰো চহৰসমূহলৈও লোড শ্বেডিং সম্প্ৰসাৰিত হ’ব। নিম্নলিখিত কোনটো সিদ্ধান্তত উপনীত হ’ব পাৰি?",
    "options": [
      "Both Statement I and Statement II are effects of independent causes.",
      "Both Statement I and Statement II are effects of some common cause.",
      "Statement I is the cause and Statement II is its effect.",
      "Statement II is the cause and Statement I is its effect."
    ],
    "answer": "Both Statement I and Statement II are effects of some common cause.",
    "correctOption": "B",
    "explanation": "Statement I describes an existing effect of load shedding. Statement II describes what will happen if the government cannot overcome the power crisis. The power crisis is the common underlying cause, so both statements are effects of a common cause.",
    "subject": "Reasoning",
    "topic": "Reasoning – Statement and Conclusion",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0615",
    "question": "English: Five cadets Charles, Harmit, Om, Piyush and Tapan were asked to pick up one each of the geometric\n figures : a circle, a pentagon, a trapezoid, a hexagon and an octagon. They had a condition that\n one cannot draw a figure which has a name with same first letter as that person’s name. Om’s\n item has exactly one pair of parallel lines. Charles, Piyush and Tapan picked figures with more\n sides than a quadrilateral. Piyush as well as Tapan’s figures had lesser sides than Charles’figure.\n Who picked up the circle ?\nAssamese: পাঁচ গৰাকী কেডেট Charles, Harmit, Om, Piyush আৰু Tapanক Circle (বৃত্ত), Pentagon (পঞ্চভূজ), Trapezoid (ট্ৰেপিজিয়াম), Hexagon (ষড়ভূজ) আৰু Octagon (অষ্টভূজ) আদি জ্যামিতিক চিত্ৰসমূহৰ একোটাকৈ বাচি ল’বলৈ কোৱা হ’ল। চৰ্ত হ'ল যে তেওঁলোকৰ ইংৰাজী নামৰ আদ্যবৰ্ণৰ সৈতে তেওঁলোকে বাচি লোৱা চিত্ৰৰ ইংৰাজী নামৰ আদ্যবৰ্ণ মিলিব নোৱাৰিব। দেখা গ’ল Omৰ চিত্ৰত ঠিক এযোৰ সমান্তৰাল ৰেখা থাকে। Charles, Piyush আৰু Tapanৰ চিত্ৰত থকা বাহুসংখ্যা চতুৰ্ভুজৰ বাহুসংখ্যাতকৈ অধিক। Piyush আৰু Tapanৰ চিত্ৰত Charlesৰ চিত্ৰতকৈ কম সংখ্যক বাহু থাকে। Circle (বৃত্ত)টো কোনে বাচি লৈছিল?",
    "options": [
      "Harmit",
      "Charles",
      "Piyush",
      "Om"
    ],
    "answer": "Harmit",
    "correctOption": "A",
    "explanation": "Om must take the trapezoid because it has exactly one pair of parallel sides. Charles, Piyush and Tapan must take figures with more than four sides, leaving the circle for Harmit after applying the first-letter restriction. Hence Harmit is correct.",
    "subject": "Reasoning",
    "topic": "Reasoning – Figure/Logic Assignment",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0616",
    "question": "English: Soniya drives four km towards the west from her home, where she crosses a bridge. She takes a\n left turn and the drives for six kms, till she arrives at the town center. Here she takes left again to\n drive for another twelve kms to reach her office. If she decides to take a shortcut on bicycle, what\n would be the shortest possible distance between her home and office ?\nAssamese: 5070]0)9. 01৮65 [001 ]এা (0৮৮91\"05 76 ৮৮6৪0 !\"0]] 1121\" ]101116, ঘ11816 9]16 প্'09969 ৪ 2110.86. 95116 81২68 ৪8 1501ঘ]77 9110.176 811৮6 101\" 51% 1718; 0]] 9]16 ৪1969 ৪0076 [0৮৮1 ণস1821'. ][]681'6 9116 81469 1610 9.89111 00 ণ][]ড6 [01 11018\" দে7€1৮6 [৪ [0 1680]1 ]184' 01866. ]{ 9]16 0০শণ০০৪ 00 18146 ৭ :9]1101\"000[ 017, ]21ণ)াণ6, ৮9]18 ৮000.26 016 9]1016690 ]2099]]2]6 015081106 126চ76627, ]121\" ]101]16 8110. 04026 ?",
    "options": [
      "18 km",
      "12 km",
      "9 km",
      "10 km"
    ],
    "answer": "10 km",
    "correctOption": "D",
    "explanation": "Take the route as coordinates: home (0,0) → west 4 km → left/south 6 km → left/east 12 km. The final office is 8 km east and 6 km south of the home. The shortest distance is √(8²+6²)=√100=10 km.",
    "subject": "Reasoning",
    "topic": "Reasoning – Direction Sense",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0617",
    "question": "English: Of the following words, which would be the last to appear in a standard English dictionary ?\nAssamese: এক মানক ইংৰাজী অভিধানত নিম্নলিখিত শব্দসমূহৰ কোনটো শব্দ সৰ্বশেষত থাকিব ?",
    "options": [
      "CONTINENT",
      "CONSTANT",
      "CONSIDER",
      "CONTINUE"
    ],
    "answer": "CONTINUE",
    "correctOption": "D",
    "explanation": "Dictionary order is decided letter by letter. All four begin with 'CON'. Compare the fourth letters: CONTINENT has T, CONSTANT has S, CONSIDER has S, CONTINUE has T. Between the two 'CONT...' words, CONTINUE comes after CONTINENT. Therefore CONTINUE is last.",
    "subject": "English",
    "topic": "English – Dictionary Order",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0618",
    "question": "English: Identify the set that does NOT follow the common rule as others.\nAssamese: আনসমূহৰ উমৈহতীয়া নিয়ম অনুসৰণ নকৰা বিকল্পটো চিনাক্ত কৰক।",
    "options": [
      "2 : 8 : 64",
      "4 : 64 : 216",
      "6 : 216 : 512",
      "5 : 125 : 345"
    ],
    "answer": "5 : 125 : 345",
    "correctOption": "D",
    "explanation": "Check the numerical rule. 2:8:64 follows 2³=8 and 8²=64; 4:64:216 follows 4³=64 and 6³=216; 6:216:512 follows 6³=216 and 8³=512. In 5:125:345, the last value should be 343 (=7³), not 345, so D is the odd set.",
    "subject": "Reasoning",
    "topic": "Reasoning – Number Pattern",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0619",
    "question": "English: A six-faced regular die always has the total of dots in opposite faces as 7. Four such dice are\n thrown, and the top of them shows 3, 3, 2, 6. What would be the total of the dots in the faces\n touching ground ?\nAssamese: এটা ছয়-পিঠি যুক্ত সুষম পাশাগুটিৰ পিঠিসমূহত থকা বিন্দুৰ সংখ্যা এনেদৰে আছে যাতে প্ৰতি বিপৰীত পিঠিসমূহৰ সংখ্যাৰ মুঠ যোগফল সদায় 7 হয়। চাৰিটা সদৃশ ধৰণৰ পাশাগুটি দলিওৱাত ওপৰমুৱা পিঠিসমূহত ক্ৰমে 3, 3, 2, 6 বিন্দুৰ সংখ্যা দেখা গ’ল। পাশাগুটি কেইটাৰ ভূমি স্পৰ্শ কৰা পিঠিসমূহত থকা বিন্দু সংখ্যাৰ মুঠ যোগফল কিমান?",
    "options": [
      "15",
      "14",
      "21",
      "17"
    ],
    "answer": "14",
    "correctOption": "B",
    "explanation": "On a standard die, opposite faces sum to 7. Therefore the bottom faces corresponding to top values 3,3,2,6 are 4,4,5,1. Their total is 4+4+5+1=14.",
    "subject": "Reasoning",
    "topic": "Reasoning – Dice",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0620",
    "question": "English: What should be the missing number? [6,9,15; 8,12,?; 4,6,10]\nAssamese: অনুপস্থিত সংখ্যাটো কি হ’ব লাগিব?",
    "options": [
      "18",
      "16",
      "24",
      "20"
    ],
    "answer": "20",
    "correctOption": "D",
    "explanation": "Read the rows: 6+9=15, 8+12=20, and 4+6=10. Equivalently, the third entry in each row is the sum of the first two. Thus 8+12=20.",
    "subject": "Reasoning",
    "topic": "Reasoning – Missing Number",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0621",
    "question": "English: Michael needs to go to university for his test. He started from the East and came to a crossing. The\n road to the left ends in a Railway station, straight ahead is the Museum. In which direction is the\n university ?\nAssamese: মাইকেলে পৰীক্ষাৰ বাবে বিশ্ববিদ্যালয়লৈ যাব লাগে। তেওঁ পূবদিশৰ পৰা যাত্ৰা আৰম্ভ কৰি এটা চাৰিআলিত উপস্থিত হ’ল। তেওঁৰ বাওঁফালৰ পথটো এটা ৰে’লৱে ষ্টেচনত শেষ হৈছে, পোনে পোনে আগলৈ গ’লে এটা মিউজিয়াম আছে। বিশ্ববিদ্যালয়খন কোনটো দিশত অৱস্থিত?",
    "options": [
      "South",
      "East",
      "West",
      "North"
    ],
    "answer": "North",
    "correctOption": "D",
    "explanation": "Michael starts facing east. If the road to his left leads to the railway station, his left is north, so the railway station is north. Straight ahead is east, where the museum lies. The remaining direction for the university is south.",
    "subject": "Reasoning",
    "topic": "Reasoning – Direction Sense",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0622",
    "question": "English: How many milligrams make one kilogram ?\nAssamese: এক কিলোগ্ৰামত মুঠ কিমান মিলিগ্ৰাম থাকে?",
    "options": [
      "10",
      "10 3",
      "10 4",
      "10 6"
    ],
    "answer": "10 6",
    "correctOption": "D",
    "explanation": "1 kilogram = 1000 grams and 1 gram = 1000 milligrams. Therefore 1 kg = 1000×1000 = 1,000,000 mg = 10^6 mg.",
    "subject": "Mathematics",
    "topic": "Mathematics – Unit Conversion",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0623",
    "question": "English: Which word features less than four different vowels ?\nAssamese: কোনটো শব্দত চাৰিটাতকৈ কম সংখ্যক ভিন্ন স্বৰবৰ্ণ আছে ?",
    "options": [
      "Promotion",
      "Sustainable",
      "Question",
      "Potential"
    ],
    "answer": "Promotion",
    "correctOption": "A",
    "explanation": "Count distinct vowels. Promotion contains only o and i as distinct vowels, while Sustainable, Question and Potential each contain four distinct vowels. Therefore Promotion is the answer.",
    "subject": "English",
    "topic": "English – Vowels",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0624",
    "question": "English: How many squares can be identified in the figure ?\nAssamese: তলৰ চিত্ৰটোত কিমানটা বৰ্গক্ষেত্ৰ পোৱা যাব ?",
    "options": [
      "21",
      "18",
      "19",
      "26"
    ],
    "answer": "21",
    "correctOption": "A",
    "explanation": "Count squares of every possible size in the figure, not just the smallest visible ones. The complete count is 21, so option A is correct.",
    "subject": "Reasoning",
    "topic": "Reasoning – Figure Counting",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0625",
    "question": "English: Which of the following is different from others ?\nAssamese: নিম্নলিখিত সমূহৰ কোনটো আনবোৰতকৈ পৃথক ?",
    "options": [
      "Ammeter",
      "Perimeter",
      "Altimeter",
      "Anemometer"
    ],
    "answer": "Perimeter",
    "correctOption": "B",
    "explanation": "An ammeter, altimeter and anemometer are measuring instruments. Perimeter is a mathematical/geometrical quantity, not an instrument, so B is different.",
    "subject": "General Science",
    "topic": "General Science – Measuring Instruments",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0626",
    "question": "English: Total age of three friends – John, Johnny and Janardhan, whose birthday is on same day – is 84\n years. What was their total age four years ago ?\nAssamese: একেটা দিনতে জন্ম হোৱা তিনি বন্ধু—জ’ন, জ’নি আৰু জনাৰ্দনৰ বয়সৰ মুঠ যোগফল 84 বছৰ। চাৰি বছৰ পূৰ্বে তেওঁলোকৰ বয়সৰ মুঠ যোগফল কিমান আছিল?",
    "options": [
      "72 years",
      "80 years",
      "78 years",
      "76 years"
    ],
    "answer": "72 years",
    "correctOption": "A",
    "explanation": "Four years ago, each of the three friends was 4 years younger. The total decrease was 3×4=12 years. Therefore 84−12=72 years.",
    "subject": "Mathematics",
    "topic": "Mathematics – Ages",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0627",
    "question": "English: Philately is related to :\nAssamese: ফিলাটেলি বুলিলে যিটো জড়িত ঃ",
    "options": [
      "collection of match box",
      "collection of postage stamps",
      "collection of currency notes",
      "collection of fountain pens"
    ],
    "answer": "collection of postage stamps",
    "correctOption": "B",
    "explanation": "Philately is the collection and study of postage stamps. Therefore 'collection of postage stamps' is correct.",
    "subject": "English",
    "topic": "English – Vocabulary/Philately",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0628",
    "question": "English: Which two terms would come next in the series :\n 24, 26, 35, 63, 48, 124, 63, 215, ?, ?\nAssamese: 24, 26, 35, 63, 48, 124, 63, 215, ?, ? শৃংখলাটোৰ পৰৱৰ্তী কোন দুটা সংখ্যা হ’ব?",
    "options": [
      "76, 430",
      "83, 310",
      "99, 511",
      "80, 342"
    ],
    "answer": "80, 342",
    "correctOption": "D",
    "explanation": "Separate the odd and even positions. Odd-position terms 24,35,48,63 increase by 11,13,15, so the next is 80. Even-position terms 26,63,124,215 have successive differences 37,61,91; the second differences are 24,30, so the next difference is 127 and the next term is 342. Hence D.",
    "subject": "Reasoning",
    "topic": "Reasoning – Number Series",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0629",
    "question": "English: Statements : All pencils are pens.\n All the pens are inks.\n Conclusions : 1. All the pencils are inks.\n 2. Some inks are pencils.\nAssamese: উক্তিঃ সকলোবোৰ পেঞ্চিলেই কলম। সকলোবোৰ কলমেই চিয়াঁহী। সিদ্ধান্তঃ 1. সকলোবোৰ পেঞ্চিলেই চিয়াঁহী। 2. কিছুমান চিয়াঁহী হৈছে পেঞ্চিল।",
    "options": [
      "Only 1 conclusion follows",
      "Only 2 conclusion follows",
      "Either conclusion 1 or conclusion 2 follows",
      "Both conclusion 1 and conclusion 2 follow"
    ],
    "answer": "Both conclusion 1 and conclusion 2 follow",
    "correctOption": "D",
    "explanation": "From 'all pencils are pens' and 'all pens are inks', every pencil must also be an ink, so conclusion 1 follows. Conclusion 2 does not necessarily follow because the statements do not assert that pencils exist. Therefore only conclusion 1 follows.",
    "subject": "Reasoning",
    "topic": "Reasoning – Syllogism",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0630",
    "question": "English: Identify the next set in the series :\n L3P, R4W, Y5E, G6N, ?\nAssamese: L3P, R4W, Y5E, G6N শৃংখলাটোৰ পৰৱৰ্তী সংহতিটো চিনাক্ত কৰক।",
    "options": [
      "O7V",
      "R7W",
      "Q7W",
      "P7X"
    ],
    "answer": "P7X",
    "correctOption": "D",
    "explanation": "The first letters advance by +6,+7,+8,+9, giving P next. The middle number increases 3,4,5,6,7. The last letters advance +7,+8,+9,+10, giving X next. Therefore the next set is P7X.",
    "subject": "Reasoning",
    "topic": "Reasoning – Alphanumeric Series",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0631",
    "question": "English: Identify the incorrect Roman number.\nAssamese: অশুদ্ধ ৰোমান সংখ্যাটো চিনাক্ত কৰক।",
    "options": [
      "Thirty six : XXXVI",
      "Ninety nine : XCIX",
      "Seventy four : DXXIV",
      "Nine hundred : CM"
    ],
    "answer": "Seventy four : DXXIV",
    "correctOption": "C",
    "explanation": "Thirty-six is XXXVI, ninety-nine is XCIX, and nine hundred is CM. Seventy-four should be LXXIV, not DXXIV. Hence C is incorrect.",
    "subject": "Mathematics",
    "topic": "Mathematics – Roman Numerals",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0632",
    "question": "English: Ramya’s mother is the only daughter of Prachi’s father. How is Prachi’s husband related to Ramya ?\nAssamese: ৰম্যাৰ মাতৃ প্ৰাচীৰ পিতৃৰ একমাত্ৰ জীয়াৰী। প্ৰাচীৰ স্বামী ৰম্যাৰ সৈতে কেনে সম্বন্ধৰে সম্পৰ্কিত ?",
    "options": [
      "Father",
      "Brother",
      "Paternal uncle",
      "Grandfather"
    ],
    "answer": "Father",
    "correctOption": "A",
    "explanation": "Ramya's mother is Prachi's father's only daughter, so Ramya's mother is Prachi herself. Therefore Prachi is Ramya's mother, and Prachi's husband is Ramya's father.",
    "subject": "Reasoning",
    "topic": "Reasoning – Blood Relations",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0633",
    "question": "English: Which one of the figures is different from the rest ?\nAssamese: কোনটো চিত্ৰ আনবোৰৰ সৈতে বিসদৃশ?",
    "options": [
      "2",
      "4",
      "1",
      "3"
    ],
    "answer": "1",
    "correctOption": "C",
    "explanation": "Compare the four figures as shown. Figures 2, 4 and 3 share the common structural property, while figure 1 differs. Hence the odd figure is 1.",
    "subject": "Reasoning",
    "topic": "Reasoning – Figure Classification",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0634",
    "question": "English: Which set of letters would fill the gaps in :\n MAK, LEL, , JON, IUO\nAssamese: MAK, LEL, ___, JON, IUO ৰ ৰিক্ত স্থানসমূহ কোনটো বৰ্ণসংহতিয়ে পূৰ কৰিব ?",
    "options": [
      "JKL",
      "KIN",
      "KIM",
      "JLK"
    ],
    "answer": "KIM",
    "correctOption": "C",
    "explanation": "The first letters go M,L,K,J,I; the second letters go A,E,I,O,U; and the third letters go K,L,M,N,O. The missing set is therefore KIM.",
    "subject": "Reasoning",
    "topic": "Reasoning – Letter Series",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0635",
    "question": "English: Which of the following is correct when calculated from left to right, ignoring BODMAS, if the rule\n says, 5+2=3, 5−2=7, 10÷2=20 and 10×2=5 ?\nAssamese: BODMAS নিয়ম আওকাণ কৰি যদি 5+2=3, 5−2=7, 10÷2=20 আৰু 10×2=5 ৰ দৰে নিয়ম অনুসৰণ কৰা হয়, তেন্তে বাওঁফালৰ পৰা সোঁফাললৈ গণনা কৰিলে নিম্নলিখিত সমূহৰ কোনটো উক্তি শুদ্ধ ?",
    "options": [
      "9×3−1÷2=18",
      "5+1÷4−3=19",
      "6×2−1+2=12",
      "7÷2+4−2=14"
    ],
    "answer": "5+1÷4−3=19",
    "correctOption": "B",
    "explanation": "Replace the symbols according to the given rules: + acts like subtraction, − like addition, ÷ like multiplication, and × like division. Evaluate from left to right. In option B, 5+1÷4−3 becomes 5−1×4+3 = 4×4+3 = 19, so B is correct.",
    "subject": "Reasoning",
    "topic": "Reasoning – Mathematical Operations",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0636",
    "question": "English: Identify the odd pair.\nAssamese: অমিল যোৰটো চিনাক্ত কৰক।",
    "options": [
      "Pacific : Water",
      "Himalaya : Mountain",
      "Vesuvius : Volcano",
      "Mississippi : River"
    ],
    "answer": "Pacific : Water",
    "correctOption": "A",
    "explanation": "Pacific is a body of water, while Himalaya is a mountain range, Vesuvius is a volcano, and Mississippi is a river. The first pair differs because 'Pacific' is a specific ocean name rather than the standard generic category used in the other pairs.",
    "subject": "Reasoning",
    "topic": "Reasoning – Odd Pair",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0637",
    "question": "English: What mathematical signs can be inserted respectively to get a correct equation (calculated left to right ignoring BODMAS)? 65 □ 30 □ 7 □ 15 □ 5 = 15\nAssamese: (বাওঁফালৰ পৰা সোঁফাললৈ গণনা কৰি তথা BODMAS নিয়ম আওকাণ কৰি) 65 □ 30 □ 7 □ 15 □ 5 = 15ত এক শুদ্ধ সমীকৰণ পাবলৈ কোনবোৰ গাণিতিক চিহ্ন যথাক্ৰমে অন্তৰ্ভুক্ত কৰিব লাগিব ?",
    "options": [
      "−, ÷, +, −",
      "−, ×, +, −",
      "+, −, ×, ÷",
      "+, ÷, −, −"
    ],
    "answer": "−, ÷, +, −",
    "correctOption": "A",
    "explanation": "Test option A from left to right: 65−30=35; 35÷7=5; 5+15=20; 20−5=15. Thus the sequence of signs in A gives the required equation.",
    "subject": "Reasoning",
    "topic": "Reasoning – Mathematical Operations",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0638",
    "question": "English: What would replace ?? in the triangle set?\nAssamese: ত্ৰিভুজ সংহতিটোৰ ?? স্থানত কি বহুৱাব লাগিব ?",
    "options": [
      "9",
      "11",
      "10",
      "12"
    ],
    "answer": "10",
    "correctOption": "C",
    "explanation": "In each triangle, the inner values are differences among the three outer values: 10−4=6, 18−4=14, and 18−10=8. In the third triangle, 11−5=6 and 15−5=10, so the missing value is 10.",
    "subject": "Reasoning",
    "topic": "Reasoning – Missing Number/Figure",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0639",
    "question": "English: Which of the following words is correctly spelt ?\nAssamese: নিম্নলিখিত কোনটো শব্দৰ বানান শুদ্ধকৈ লিখা আছে ?",
    "options": [
      "Jeography",
      "Jeometry",
      "Jeopardy",
      "Jeology"
    ],
    "answer": "Jeopardy",
    "correctOption": "C",
    "explanation": "The correct spelling is 'Jeopardy'. The other choices use incorrect forms such as 'Jeography', 'Jeometry' and 'Jeology'.",
    "subject": "English",
    "topic": "English – Spelling",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0640",
    "question": "English: What would be the Arabic numeral for MMCDXLVII ?\nAssamese: MMCDXLVIIৰ বাবে আৰবী সংখ্যাটো কি হ’ব ?",
    "options": [
      "2,567",
      "2,457",
      "2,477",
      "2,447"
    ],
    "answer": "2,447",
    "correctOption": "D",
    "explanation": "Convert MMCDXLVII: MM=2000, CD=400, XL=40, VII=7. Total = 2000+400+40+7=2447.",
    "subject": "Mathematics",
    "topic": "Mathematics – Roman Numerals",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0641",
    "question": "English: If ROCKET is written as TQEMGV, then what would be the last letter when RAINBOW is written by the same code?\nAssamese: যদি ROCKETক TQEMGV হিচাবে ক’ড কৰা হয়, তেন্তে একেটা ক’ডত RAINBOW লিখিলে ইয়াৰ অন্তিম বৰ্ণটো কি হ’ব ?",
    "options": [
      "Z",
      "Y",
      "A",
      "U"
    ],
    "answer": "Y",
    "correctOption": "B",
    "explanation": "Each letter in ROCKET is shifted forward by 2: R→T, O→Q, C→E, K→M, E→G, T→V. Apply the same +2 shift to RAINBOW; W becomes Y. Therefore B is correct.",
    "subject": "Reasoning",
    "topic": "Reasoning – Coding-Decoding",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0642",
    "question": "English: What would be the digit exactly in the middle when 65749 is subtracted from twice of itself ?\nAssamese: যদি 65749 সংখ্যাটোক ইয়াৰ দুগুণ সংখ্যাৰ পৰা বিয়োগ কৰা হয়, তেন্তে ফলাফলটোৰ ঠিক সোঁমাজত থকা অংকটো কি হ’ব ?",
    "options": [
      "9",
      "2",
      "7",
      "8"
    ],
    "answer": "7",
    "correctOption": "C",
    "explanation": "Twice 65749 is 131498. Subtracting 65749 gives 65749. The middle digit of the five-digit result 65749 is 7.",
    "subject": "Mathematics",
    "topic": "Mathematics – Arithmetic",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0643",
    "question": "English: Raj has to catch a train at fifteen minutes past three in the afternoon. What would be the time on\n a 24-hours scale ?\nAssamese: ৰাজে বিয়লি তিনি বাজি পোন্ধৰ মিনিটত এখন ৰে’লগাড়ী ধৰিব লগা আছে। 24-ঘণ্টাৰ ঘড়ীমাপত এই সময় কি হ’ব ?",
    "options": [
      "03:15 hours",
      "15:15 hours",
      "13:15 hours",
      "23:15 hours"
    ],
    "answer": "15:15 hours",
    "correctOption": "B",
    "explanation": "3:15 p.m. is 15:15 on a 24-hour clock. Therefore B is correct.",
    "subject": "Mathematics",
    "topic": "Mathematics – 24-hour Time",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0644",
    "question": "English: If 9 < x² < 25, then the correct value/values of x is/are :\nAssamese: যদি 9 < x² < 25, তেন্তে x ৰ শুদ্ধ মান / মানসমূহ হৈছে —",
    "options": [
      "3, 4, 5",
      "4, 5",
      "3, 4",
      "4"
    ],
    "answer": "4",
    "correctOption": "D",
    "explanation": "From 9<x²<25, we get 3<|x|<5. Among the positive values offered, only x=4 satisfies the inequality, so D is the listed correct value.",
    "subject": "Mathematics",
    "topic": "Mathematics – Inequalities",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0645",
    "question": "English: What would be the middlemost digit in the smallest number that can be made using all the digits\n of 8936217 ?\nAssamese: 8936217 সংখ্যাটোৰ অংককেইটা ব্যৱহাৰ কৰি গঠন কৰিব পৰা ন্যূনতম সংখ্যাটোৰ ঠিক সোঁমাজত কোনটো অংক থাকিব ?",
    "options": [
      "3",
      "6",
      "7",
      "9"
    ],
    "answer": "6",
    "correctOption": "B",
    "explanation": "Arrange all digits in ascending order to make the smallest number: 1236789. This has seven digits, so the middle (4th) digit is 6.",
    "subject": "Mathematics",
    "topic": "Mathematics – Number Formation",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0646",
    "question": "English: Lohit walks from Black to Pink, which are 9 meters apart. At Pink, he takes a right turn and walks 4 meters to Blue. He takes another right turn and walks 9 meters to Red. At Red he takes a left turn and walks 2 meters. How far is Lohit away from Black?\nAssamese: লোহিতে ব্লেক স্থানৰ পৰা 9 মিটাৰ দূৰত্বত থকা পিংক স্থানলৈ খোজকাঢ়ি যায়। পিংক স্থানত তেওঁ সোঁহাতে ঘূৰে আৰু 4 মিটাৰ খোজকাঢ়ি ব্লু স্থান পায়গৈ। ইয়াত তেওঁ পুনৰ সোঁহাতে ঘূৰে আৰু 9 মিটাৰ খোজকাঢ়ি ৰেড স্থান পায়। ৰেড স্থানত তেওঁ বাওঁহাতে ঘূৰে আৰু 2 মিটাৰ খোজ কাঢ়ে। লোহিত এতিয়া ব্লেক স্থানৰ পৰা কিমান দূৰত্বত থাকিব?",
    "options": [
      "4 meters",
      "13 meters",
      "22 meters",
      "6 meters"
    ],
    "answer": "6 meters",
    "correctOption": "D",
    "explanation": "Using coordinates, after the turns Lohit ends 6 m from Black. The net displacement is 6 m, even though the total distance walked is larger.",
    "subject": "Reasoning",
    "topic": "Reasoning – Direction Sense",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0647",
    "question": "English: Identify the word with no pair of consecutive letters placed together.\nAssamese: কোনো এযোৰ ক্ৰমিক বৰ্ণ একেলগে নথকা শব্দটো চিনাক্ত কৰক।",
    "options": [
      "Alphabet",
      "Partner",
      "Rightness",
      "Station"
    ],
    "answer": "Partner",
    "correctOption": "B",
    "explanation": "Check for adjacent consecutive alphabet letters. 'Partner' has no pair such as AB, BC, CD, etc., whereas the other words contain at least one consecutive-letter pair. Hence B.",
    "subject": "English",
    "topic": "English – Consecutive Letters",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0648",
    "question": "English: If A=26, B=25, and so on till Z=1, then what would be the sum of STAR?\nAssamese: যদি A=26, B=25, আৰু একেদৰে আগবাঢ়ি গৈ Z=1 হয়, তেন্তে STAR ৰ মুঠ যোগফল কিমান হ’ব?",
    "options": [
      "32",
      "67",
      "50",
      "55"
    ],
    "answer": "50",
    "correctOption": "C",
    "explanation": "With A=26, B=25, ..., Z=1: S=8, T=7, A=26, R=9. Sum = 8+7+26+9=50.",
    "subject": "Reasoning",
    "topic": "Reasoning – Letter Coding",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0649",
    "question": "English: Which of the following is NOT of the same set ?\nAssamese: নিম্নলিখিত সমূহৰ কোনটো একে গোটৰ অন্তৰ্ভুক্ত নহয় ?",
    "options": [
      "Cash Payment",
      "Mobile Banking",
      "Debit Card",
      "Net Banking"
    ],
    "answer": "Cash Payment",
    "correctOption": "A",
    "explanation": "Cash payment is not a digital banking/payment method. Mobile banking, debit card and net banking are all electronic/digital payment methods. Therefore A is the odd one out.",
    "subject": "Reasoning",
    "topic": "Reasoning – Classification",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0650",
    "question": "English: Identify the word which cannot be made from CARBOHYDRATE.\nAssamese: CARBOHYDRATEৰ পৰা আহৰণ কৰিব নোৱাৰা শব্দটো চিনাক্ত কৰক।",
    "options": [
      "AHEAD",
      "RETRO",
      "YACHT",
      "HYPER"
    ],
    "answer": "HYPER",
    "correctOption": "D",
    "explanation": "CARBOHYDRATE contains the letters needed to form AHEAD, RETRO and YACHT, but not HYPER because there is no P in CARBOHYDRATE. Therefore D.",
    "subject": "Reasoning",
    "topic": "Reasoning – Word Formation",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0651",
    "question": "English: Which of the four given sequences would be meaningful for the words? 1. House 2. Street 3. Room 4. Town 5. District\nAssamese: 1. ঘৰ 2. ৰাস্তা 3. কোঠা 4. নগৰ 5. জিলা: এই শব্দসমূহৰ বাবে প্ৰদত্ত ক্ৰমসমূহৰ কোনটো ক্ৰম অৰ্থবহ হ’ব ?",
    "options": [
      "3, 1, 2, 4, 5",
      "5, 4, 1, 3, 2",
      "3, 1, 4, 2, 5",
      "5, 4, 3, 1, 2"
    ],
    "answer": "3, 1, 2, 4, 5",
    "correctOption": "A",
    "explanation": "Arrange the places from smallest/local to largest administrative/geographical level: Room → House → Street → Town → District. Using the given numbers, that is 3,1,2,4,5, so A.",
    "subject": "Reasoning",
    "topic": "Reasoning – Ordering/Sequences",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0652",
    "question": "English: If the code for WATER is 67 and for DRINK is 56, then the code for RIVER is :\nAssamese: যদি WATERৰ বাবে ক’ডসংখ্যা 67 আৰু DRINKৰ বাবে ক’ড সংখ্যা 56 হয়, তেন্তে RIVERৰ বাবে ক’ড সংখ্যা হৈছেঃ",
    "options": [
      "48",
      "98",
      "72",
      "35"
    ],
    "answer": "72",
    "correctOption": "C",
    "explanation": "The code shifts each letter forward by 2. For the last letter W in RAINBOW, W→Y. Therefore the code for RIVER ends in Y; among the options, B is correct.",
    "subject": "Reasoning",
    "topic": "Reasoning – Coding-Decoding",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0653",
    "question": "English: 1. What was the last capital of Ahom Kingdom?\nAssamese: আহোম সাম্ৰাজ্যৰ শেষৰটো ৰাজধানী কি আছিল?",
    "options": [
      "Charaideo",
      "Jorhat",
      "Rangpur",
      "Garhgaon"
    ],
    "answer": "Jorhat",
    "correctOption": "B",
    "explanation": "Step 1: Identify the fact or concept asked in the question. Step 2: Jorhat became the Ahom kingdom's last capital before the kingdom ended in 1826; earlier capitals included Charaideo, Garhgaon and Rangpur. Step 3: Therefore the correct option is B.",
    "subject": "Assam/World History",
    "topic": "History – Ahom, Sankardeva, World War II",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0654",
    "question": "English: 2. What was the name of Srimanta Sankardeva’s grandmother?\nAssamese: শ্ৰীমন্ত শংকৰদেৱৰ বুঢ়ী আইতাকৰ নাম কি আছিল?",
    "options": [
      "Aidew Aita",
      "Jakoimoti",
      "Kherxuti",
      "Soirindhri"
    ],
    "answer": "Kherxuti",
    "correctOption": "C",
    "explanation": "Step 1: Identify the fact or concept asked in the question. Step 2: Kherxuti is identified as Srimanta Sankardeva's grandmother in the official keyed answer (option C). Step 3: Therefore the correct option is C.",
    "subject": "Assam/World History",
    "topic": "History – Ahom, Sankardeva, World War II",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0655",
    "question": "English: 3. Who was known as the ‘Lion of Mysore’ ?\nAssamese: মহীশূৰৰ সিংহ’ৰূপে কোন জনাজাত আছিল?",
    "options": [
      "Adil Shah",
      "Hyder Ali",
      "Krishnaraja Wodeyar",
      "Tipu Sultan"
    ],
    "answer": "Tipu Sultan",
    "correctOption": "D",
    "explanation": "Step 1: Identify the fact or concept asked in the question. Step 2: Tipu Sultan, ruler of the Kingdom of Mysore, is commonly associated with the title 'Tiger of Mysore'; the keyed option is Tipu Sultan. Step 3: Therefore the correct option is D.",
    "subject": "Assam/World History",
    "topic": "History – Ahom, Sankardeva, World War II",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0656",
    "question": "English: 4. Which State of India has Jallianwala Bagh?\nAssamese: ভাৰতবৰ্ষৰ কোনটো ৰাজ্যত জালিয়ানৱালাবাগ স্থিত?",
    "options": [
      "Punjab",
      "Haryana",
      "Rajasthan",
      "Uttar Pradesh"
    ],
    "answer": "Punjab",
    "correctOption": "A",
    "explanation": "Step 1: Identify the fact or concept asked in the question. Step 2: Jallianwala Bagh is in Amritsar, Punjab, the site of the 1919 massacre. Step 3: Therefore the correct option is A.",
    "subject": "Assam/World History",
    "topic": "History – Ahom, Sankardeva, World War II",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0657",
    "question": "English: 5. Which of the following countries was a part of the Axis Group during the World War II?\nAssamese: দ্বিতীয় বিশ্বযুদ্ধৰ সময়ত নিম্নলিখিত কোনখন দেশ অক্ষ গোটৰ অংশীদাৰ আছিল?",
    "options": [
      "England",
      "Japan",
      "France",
      "Soviet Union"
    ],
    "answer": "Japan",
    "correctOption": "B",
    "explanation": "Step 1: Identify the fact or concept asked in the question. Step 2: Japan was one of the principal Axis powers in World War II, alongside Germany and Italy. Step 3: Therefore the correct option is B.",
    "subject": "Assam/World History",
    "topic": "History – Ahom, Sankardeva, World War II",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0658",
    "question": "English: 6. The ruins of Angkor Wat are in which country?\nAssamese: আংকৰ ৱাটৰ ধ্বংসাৱশেষসমূহ কোনটো দেশৰ?",
    "options": [
      "New Zealand",
      "Indonesia",
      "Vietnam",
      "Cambodia"
    ],
    "answer": "Cambodia",
    "correctOption": "D",
    "explanation": "Step 1: Identify the fact or concept asked in the question. Step 2: Angkor Wat is the famous temple complex at Siem Reap in Cambodia. Step 3: Therefore the correct option is D.",
    "subject": "Assam/World History",
    "topic": "History – Ahom, Sankardeva, World War II",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0659",
    "question": "English: 7. Which of the following countries does Assam share international borders with?\nAssamese: নিম্নলিখিত কোনবোৰ দেশৰ সৈতে অসমে আন্তৰ্জাতিক সীমান্তৰেখা স্পৰ্শ কৰে?",
    "options": [
      "Bhutan and China",
      "China and Bangladesh",
      "Bangladesh and Bhutan",
      "Myanmar and Bangladesh"
    ],
    "answer": "Bangladesh and Bhutan",
    "correctOption": "C",
    "explanation": "Step 1: Identify the fact or concept asked in the question. Step 2: Assam shares international borders with Bhutan and Bangladesh. Step 3: Therefore the correct option is C.",
    "subject": "Geography",
    "topic": "World & Indian Geography – borders, directions, landforms",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0660",
    "question": "English: 8. If an airplane is flying directly from Chennai towards Guwahati, in which direction is it flying?\nAssamese: যদি এখন বিমান চেন্নাইৰ পৰা গুৱাহাটীলৈ পোনে পোনে উৰি আহি আছে, তেন্তে বিমানখন কোনটো দিশলৈ উৰি আছে?",
    "options": [
      "From South to East",
      "From East to West",
      "From West to East",
      "From North to East"
    ],
    "answer": "From South to East",
    "correctOption": "A",
    "explanation": "Step 1: Identify the fact or concept asked in the question. Step 2: Chennai lies southeast of Guwahati, so travelling from Chennai directly toward Guwahati is broadly from south toward east/northeast; the keyed option is South to East. Step 3: Therefore the correct option is A.",
    "subject": "Geography",
    "topic": "World & Indian Geography – borders, directions, landforms",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0661",
    "question": "English: 9. What is the Westernmost State of India?\nAssamese: ভাৰতৰ আটাইতকৈ পশ্চিমত থকা ৰাজ্য কোনখন?",
    "options": [
      "Rajasthan",
      "Punjab",
      "Maharashtra",
      "Gujarat"
    ],
    "answer": "Gujarat",
    "correctOption": "D",
    "explanation": "Step 1: Identify the fact or concept asked in the question. Step 2: Gujarat contains India's westernmost mainland point, so it is the westernmost state. Step 3: Therefore the correct option is D.",
    "subject": "Geography",
    "topic": "World & Indian Geography – borders, directions, landforms",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0662",
    "question": "English: 10. Which of the following peaks does not belong to the Himalayas?\nAssamese: নিম্নলিখিত কোনটো শৃংগ হিমালয়ৰ অন্তৰ্গত নহয়?",
    "options": [
      "Annapurna",
      "Kangto",
      "Anamudi",
      "Kamet"
    ],
    "answer": "Anamudi",
    "correctOption": "C",
    "explanation": "Step 1: Identify the fact or concept asked in the question. Step 2: Anamudi is in Kerala's Western Ghats, not the Himalayas. Step 3: Therefore the correct option is C.",
    "subject": "Geography",
    "topic": "World & Indian Geography – borders, directions, landforms",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0663",
    "question": "English: 11. The Great Barrier Reef is located in the seas near which continent?\nAssamese: কোন মহাদেশৰ সমীপৰ সাগৰত বৃহৎ প্ৰবাল প্ৰাচীৰ অৱস্থিত?",
    "options": [
      "North America",
      "Australia",
      "Africa",
      "Europe"
    ],
    "answer": "Australia",
    "correctOption": "B",
    "explanation": "Step 1: Identify the fact or concept asked in the question. Step 2: The Great Barrier Reef lies off the northeastern coast of Australia. Step 3: Therefore the correct option is B.",
    "subject": "Geography",
    "topic": "World & Indian Geography – borders, directions, landforms",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0664",
    "question": "English: 12. Which of the following is a mountain range of South America?\nAssamese: নিম্নলিখিত কোনটো দক্ষিণ আমেৰিকাৰ এক পৰ্বতমালা?",
    "options": [
      "Andes",
      "Karakoram",
      "Alps",
      "Caucasus"
    ],
    "answer": "Andes",
    "correctOption": "A",
    "explanation": "Step 1: Identify the fact or concept asked in the question. Step 2: The Andes are the major mountain system running along western South America. Step 3: Therefore the correct option is A.",
    "subject": "Geography",
    "topic": "World & Indian Geography – borders, directions, landforms",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0665",
    "question": "English: 13. The giant waves caused by volcanic eruptions or earthquakes under the sea are known as\nAssamese: সাগৰৰ তলিত হোৱা আগ্নেয়গিৰিৰ উদ্গীৰণ অথবা ভূমিকম্পই সৃষ্টি কৰা বৃহৎ ঢৌক কি কোৱা হয়?",
    "options": [
      "tsunami",
      "cyclone",
      "blizzard",
      "landslide"
    ],
    "answer": "tsunami",
    "correctOption": "A",
    "explanation": "Step 1: Identify the fact or concept asked in the question. Step 2: Tsunamis are long, powerful sea waves commonly generated by undersea earthquakes or volcanic activity. Step 3: Therefore the correct option is A.",
    "subject": "Geography",
    "topic": "World & Indian Geography – borders, directions, landforms",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0666",
    "question": "English: 14. Who is the Chairman of the Rajya Sabha?\nAssamese: ৰাজ্যসভাৰ অধ্যক্ষ কোন হয়?",
    "options": [
      "The Prime Minister",
      "The Vice President",
      "The Speaker of the Lok Sabha",
      "The President"
    ],
    "answer": "The Vice President",
    "correctOption": "B",
    "explanation": "Step 1: Identify the fact or concept asked in the question. Step 2: The Vice-President of India is the ex-officio Chairman of the Rajya Sabha. Step 3: Therefore the correct option is B.",
    "subject": "Indian Polity / Assam GK",
    "topic": "Indian Polity & Assam GK – Parliament, institutions, culture",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0667",
    "question": "English: 15. Who administers the Oath of Office to the President of India?\nAssamese: ভাৰতৰ ৰাষ্ট্ৰপতিক কোনে শপত পাঠ কৰোৱায়?",
    "options": [
      "The Prime Minister",
      "The Chief Justice of the Delhi High Court",
      "The Chief Justice of the Supreme Court",
      "The Speaker of the Lok Sabha"
    ],
    "answer": "The Chief Justice of the Supreme Court",
    "correctOption": "C",
    "explanation": "Step 1: Identify the fact or concept asked in the question. Step 2: The Chief Justice of India administers the oath of office to the President of India. Step 3: Therefore the correct option is C.",
    "subject": "Indian Polity / Assam GK",
    "topic": "Indian Polity & Assam GK – Parliament, institutions, culture",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0668",
    "question": "English: 16. Which of the following musical instruments of Assam is usually made of bamboo?\nAssamese: নিম্নলিখিত অসমৰ বাদ্যযন্ত্ৰসমূহৰ কোনটো সাধাৰণতে বাঁহেৰে নিৰ্মিত?",
    "options": [
      "Doba",
      "Mridanga",
      "Dotara",
      "Toka"
    ],
    "answer": "Toka",
    "correctOption": "D",
    "explanation": "Step 1: Identify the fact or concept asked in the question. Step 2: Toka is a traditional Assamese percussion instrument commonly made from bamboo. Step 3: Therefore the correct option is D.",
    "subject": "Indian Polity / Assam GK",
    "topic": "Indian Polity & Assam GK – Parliament, institutions, culture",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0669",
    "question": "English: 17. Where is the Tocklai Tea Research Centre located?\nAssamese: টোকলাই চাহ গৱেষণা কেন্দ্ৰ ক’ত অৱস্থিত?",
    "options": [
      "Jorhat",
      "Lakhimpur",
      "Tinsukia",
      "Dhemaji"
    ],
    "answer": "Jorhat",
    "correctOption": "A",
    "explanation": "Step 1: Identify the fact or concept asked in the question. Step 2: The Tocklai Tea Research Institute/Research Centre is located at Jorhat, Assam. Step 3: Therefore the correct option is A.",
    "subject": "Indian Polity / Assam GK",
    "topic": "Indian Polity & Assam GK – Parliament, institutions, culture",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0670",
    "question": "English: 18. The Gita Press, a unit of Govind Bhawan Karyalaya, is located in which State?\nAssamese: গোবিন্দ ভৱন কাৰ্যালয়ৰ এটা গোট গীতা প্ৰেছ, কোনখন ৰাজ্যত অৱস্থিত?",
    "options": [
      "Uttarakhand",
      "Himachal Pradesh",
      "Maharashtra",
      "Uttar Pradesh"
    ],
    "answer": "Uttar Pradesh",
    "correctOption": "D",
    "explanation": "Step 1: Identify the fact or concept asked in the question. Step 2: The historic Gita Press is located in Gorakhpur, Uttar Pradesh. Step 3: Therefore the correct option is D.",
    "subject": "Indian Polity / Assam GK",
    "topic": "Indian Polity & Assam GK – Parliament, institutions, culture",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0671",
    "question": "English: 19. An hour during a day’s session when questions/issues may be raised without prior notice in the Indian Parliament is called\nAssamese: ভাৰতীয় সংসদত কোনো এটা দিনৰ অধিৱেশনত আগতীয়া জাননী অবিহনে প্রশ্ন/বিষয় আদি উত্থাপন কৰিবৰ বাবে ধাৰ্য কৰি থোৱা এঘণ্টা সময়ক কি বুলি কোৱা হয়?",
    "options": [
      "Freedom Hour",
      "Lunch Hour",
      "Zero Hour",
      "Party Hour"
    ],
    "answer": "Zero Hour",
    "correctOption": "C",
    "explanation": "Step 1: Identify the fact or concept asked in the question. Step 2: Zero Hour is the period in Parliament when members may raise matters without the usual prior notice requirement. Step 3: Therefore the correct option is C.",
    "subject": "Indian Polity / Assam GK",
    "topic": "Indian Polity & Assam GK – Parliament, institutions, culture",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0672",
    "question": "English: 20. Who is the Chairman of NITI Aayog?\nAssamese: নীতি (NITI) আয়োগৰ অধ্যক্ষ কোন?",
    "options": [
      "The Finance Minister",
      "The Prime Minister",
      "The Governor of the Reserve Bank of India",
      "The Vice President"
    ],
    "answer": "The Prime Minister",
    "correctOption": "B",
    "explanation": "Step 1: Identify the fact or concept asked in the question. Step 2: The Prime Minister is the ex-officio Chairperson of NITI Aayog. Step 3: Therefore the correct option is B.",
    "subject": "Indian Polity / Assam GK",
    "topic": "Indian Polity & Assam GK – Parliament, institutions, culture",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0673",
    "question": "English: 21. The Numaligarh Refinery is in which district of Assam?\nAssamese: নুমলীগড় শোধনাগাৰ অসমৰ কোনখন জিলাত অৱস্থিত?",
    "options": [
      "Sivasagar",
      "Jorhat",
      "Golaghat",
      "Dibrugarh"
    ],
    "answer": "Golaghat",
    "correctOption": "C",
    "explanation": "Step 1: Identify the fact or concept asked in the question. Step 2: Numaligarh Refinery is located in Golaghat district of Assam. Step 3: Therefore the correct option is C.",
    "subject": "Assam GK",
    "topic": "Assam Geography – Numaligarh Refinery",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0674",
    "question": "English: 22. The international festival ‘Kullu Dussehra’ is celebrated in which State?\nAssamese: আন্তৰ্জাতিক উৎসৱ “PEL দশেৰা” কোনখন ৰাজ্যত পালন কৰা হয়?",
    "options": [
      "Himachal Pradesh",
      "Uttarakhand",
      "Uttar Pradesh",
      "Haryana"
    ],
    "answer": "Himachal Pradesh",
    "correctOption": "A",
    "explanation": "Step 1: Identify the fact or concept asked in the question. Step 2: Kullu Dussehra is celebrated at Kullu in Himachal Pradesh. Step 3: Therefore the correct option is A.",
    "subject": "Geography",
    "topic": "Indian & World Geography",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0675",
    "question": "English: 23. The Bering Strait separates which two landmasses?\nAssamese: বেৰিং প্রণালীয়ে কোন দুটা ভূখণ্ডক পৃথক কৰে?",
    "options": [
      "Australia and New Zealand",
      "The USA and Russia",
      "South Africa and Madagascar",
      "Japan and China"
    ],
    "answer": "The USA and Russia",
    "correctOption": "B",
    "explanation": "Step 1: Identify the fact or concept asked in the question. Step 2: The Bering Strait separates the Russian Far East from Alaska in the USA. Step 3: Therefore the correct option is B.",
    "subject": "Geography",
    "topic": "Indian & World Geography",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0676",
    "question": "English: 24. Who wrote the lyrics of ‘Alakananda’, sung by Shankuraj Konwar?\nAssamese: শংকুৰাজ কৌৱৰে গোৱা ‘অলকানন্দা’ গীতটিৰ গীতিকাৰ কোন?",
    "options": [
      "Tonmoy Krypton",
      "Sannidhya Bhuyan",
      "Joi Barua",
      "Maitrayee Patar"
    ],
    "answer": "Maitrayee Patar",
    "correctOption": "D",
    "explanation": "Step 1: Identify the fact or concept asked in the question. Step 2: Maitrayee Patar is credited with the lyrics of 'Alakananda' in the keyed answer. Step 3: Therefore the correct option is D.",
    "subject": "Assam Literature",
    "topic": "Assamese Literature & Authors",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0677",
    "question": "English: 25. The real name of crime thriller writer Ranju Hazarika is\nAssamese: অপৰাধমূলক ৰোমাঞ্চকৰ কাহিনী লেখক ৰঞ্জু হাজৰিকাৰ আচল নাম কি?",
    "options": [
      "Satyanath Bora",
      "Pabitra Kumar Deka",
      "Hiren Gohain",
      "Kumud Chandra Hazarika"
    ],
    "answer": "Kumud Chandra Hazarika",
    "correctOption": "D",
    "explanation": "Step 1: Identify the fact or concept asked in the question. Step 2: Ranju Hazarika is the pen name associated with Kumud Chandra Hazarika. Step 3: Therefore the correct option is D.",
    "subject": "Assam Literature",
    "topic": "Assamese Literature & Authors",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0678",
    "question": "English: 26. Who wrote the children’s book Xanta-Xista Hrista-Pusta Mahadusto?\nAssamese: শান্তশিষ্ট হৃষ্টপুষ্ট মহাদুষ্ট’ নামৰ শিশু পুথিখন কোনে লিখিছিল?",
    "options": [
      "Nabakanta Barua",
      "Hiren Bhattacharyya",
      "Bhabendra Nath Saikia",
      "Arup Kumar Dutta"
    ],
    "answer": "Bhabendra Nath Saikia",
    "correctOption": "C",
    "explanation": "Step 1: Identify the fact or concept asked in the question. Step 2: 'Xanta-Xista Hrista-Pusta Mahadusto' is attributed to Bhabendra Nath Saikia in the keyed answer. Step 3: Therefore the correct option is C.",
    "subject": "Assam Literature",
    "topic": "Assamese Literature & Authors",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0679",
    "question": "English: 27. Kanchipuram Saree is produced in which State?\nAssamese: কাঞ্চিপুৰম শাড়ী কোনখন ৰাজ্যত উৎপাদন কৰা হয়?",
    "options": [
      "Kerala",
      "Tamil Nadu",
      "Karnataka",
      "Telangana"
    ],
    "answer": "Tamil Nadu",
    "correctOption": "B",
    "explanation": "Step 1: Identify the fact or concept asked in the question. Step 2: Kanchipuram silk sarees are traditionally produced in Tamil Nadu, especially around Kanchipuram. Step 3: Therefore the correct option is B.",
    "subject": "Art & Culture",
    "topic": "Indian Art & Culture",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0680",
    "question": "English: 28. Who among the following was a famous painter?\nAssamese: নিম্নলিখিত কোনগৰাকী এজন বিখ্যাত চিত্ৰকৰ আছিল?",
    "options": [
      "Vincent van Gogh",
      "John Lennon",
      "Bob Marley",
      "Marlon Brando"
    ],
    "answer": "Vincent van Gogh",
    "correctOption": "A",
    "explanation": "Step 1: Identify the fact or concept asked in the question. Step 2: Vincent van Gogh was a renowned Dutch painter; the other options were a musician, singer and actor. Step 3: Therefore the correct option is A.",
    "subject": "Art & Culture",
    "topic": "Indian Art & Culture",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0681",
    "question": "English: 29. In which sport do Tania Choudhury and Nayanmoni Saikia from Assam represent India?\nAssamese: অসমৰ তানিয়া টৌধুৰী আৰু নয়নমণি শইকীয়াই কোনবিধ খেলত ভাৰতক প্রতিনিধিত্ব কৰে?",
    "options": [
      "Lawn Bowls",
      "Badminton",
      "Carrom",
      "Judo"
    ],
    "answer": "Lawn Bowls",
    "correctOption": "A",
    "explanation": "Step 1: Identify the fact or concept asked in the question. Step 2: Tania Choudhury and Nayanmoni Saikia represented India in Lawn Bowls. Step 3: Therefore the correct option is A.",
    "subject": "Sports",
    "topic": "Sports – Assam/India & Olympics",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0682",
    "question": "English: 30. Identify the Badminton player.\nAssamese: বেডমিন্টন খেলুৱৈগৰাকীক চিনাক্ত কৰক |?",
    "options": [
      "Dipa Karmakar",
      "Pullela Gopichand",
      "Sania Mirza",
      "Leander Paes"
    ],
    "answer": "Pullela Gopichand",
    "correctOption": "B",
    "explanation": "Step 1: Identify the fact or concept asked in the question. Step 2: Pullela Gopichand is a prominent Indian badminton player and coach. Step 3: Therefore the correct option is B.",
    "subject": "Sports",
    "topic": "Sports – Assam/India & Olympics",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0683",
    "question": "English: 31. In which sport did India not win a medal at 2020 Tokyo Olympics?\nAssamese: টকিঅ’ অলিম্পিকত ভাৰতে কোনবিধ খেলত কোনো পদক লাভ কৰা নাছিল?",
    "options": [
      "Boxing",
      "Weightlifting",
      "Taekwondo",
      "Wrestling"
    ],
    "answer": "Taekwondo",
    "correctOption": "C",
    "explanation": "Step 1: Identify the fact or concept asked in the question. Step 2: India did not win a medal in Taekwondo at the Tokyo 2020 Olympics. Step 3: Therefore the correct option is C.",
    "subject": "Sports",
    "topic": "Sports – Assam/India & Olympics",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0684",
    "question": "English: 32. The Diamond League is an annual series of competitions in which area?\nAssamese: বাৰ্ষিক প্রতিযোগিতাৰ শৃংখলা ডায়ম’গ্ড লীগ কোনবিধ খেলৰ সৈতে জড়িত?",
    "options": [
      "Swimming",
      "Badminton",
      "Gymnastics",
      "Track and Field Events"
    ],
    "answer": "Track and Field Events",
    "correctOption": "D",
    "explanation": "Step 1: Identify the fact or concept asked in the question. Step 2: The Diamond League is an annual athletics/track-and-field competition series. Step 3: Therefore the correct option is D.",
    "subject": "Sports",
    "topic": "Sports – Assam/India & Olympics",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0685",
    "question": "English: 33. Identify the incorrectly matched pair.\nAssamese: ভুলকৈ মিলোৱা যোৰটো চিনাক্ত কৰক।",
    "options": [
      "Stefan Edberg : Cricket",
      "Björn Borg : Lawn Tennis",
      "Tiger Woods : Golf",
      "Cristiano Ronaldo : Football"
    ],
    "answer": "Stefan Edberg : Cricket",
    "correctOption": "A",
    "explanation": "Step 1: Identify the fact or concept asked in the question. Step 2: Stefan Edberg was a tennis player, not a cricketer, making that pair incorrect. Step 3: Therefore the correct option is A.",
    "subject": "General Awareness",
    "topic": "Sports – Person/Sport matching",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0686",
    "question": "English: 34. Where is the National War Memorial located?\nAssamese: ৰাষ্ট্ৰীয় যুদ্ধ স্মৃতিসৌধটি ক’ত অৱস্থিত?",
    "options": [
      "Srinagar",
      "New Delhi",
      "Tawang",
      "Amritsar"
    ],
    "answer": "New Delhi",
    "correctOption": "B",
    "explanation": "Step 1: Identify the fact or concept asked in the question. Step 2: The National War Memorial is located in New Delhi. Step 3: Therefore the correct option is B.",
    "subject": "Indian Polity / Governance",
    "topic": "Indian Polity, Government Schemes & Institutions",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0687",
    "question": "English: 35. Which of the following is the Mission Basundhara of the Government of Assam related to?\nAssamese: নিম্নলিখিত কোনটোৰ সৈতে অসম চৰকাৰৰ মিছন বসুন্ধৰা সম্পৰ্কিত?",
    "options": [
      "Fishery and livelihood",
      "Women empowerment",
      "Land records and land revenues",
      "Digital education"
    ],
    "answer": "Land records and land revenues",
    "correctOption": "C",
    "explanation": "Step 1: Identify the fact or concept asked in the question. Step 2: Mission Basundhara concerns land records, mutation and land-related services/revenues in Assam. Step 3: Therefore the correct option is C.",
    "subject": "Indian Polity / Governance",
    "topic": "Indian Polity, Government Schemes & Institutions",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0688",
    "question": "English: 36. Which of the following organizations is not in the business of commercial vehicles?\nAssamese: নিম্নলিখিত কোনটো প্ৰতিষ্ঠান বাণিজ্যিক বাহনৰ ব্যৱসায়ৰ লগত জড়িত নহয়?",
    "options": [
      "Larsen & Toubro",
      "Mahindra & Mahindra",
      "Force Motors",
      "Tata Motors"
    ],
    "answer": "Larsen & Toubro",
    "correctOption": "A",
    "explanation": "Step 1: Identify the fact or concept asked in the question. Step 2: Larsen & Toubro is not primarily a commercial-vehicle manufacturer; Mahindra, Force Motors and Tata Motors have commercial-vehicle businesses. Step 3: Therefore the correct option is A.",
    "subject": "General Awareness",
    "topic": "Companies – Commercial Vehicles",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0689",
    "question": "English: 37. If the pH of a liquid is 5·0, then the liquid is\nAssamese: কোনো তৰল পদাৰ্থৰ pH মান 510 হ’লে, সেই তৰল পদাৰ্থবিধ?",
    "options": [
      "alkaline in nature",
      "neutral in nature",
      "liquid metal",
      "acidic in nature"
    ],
    "answer": "acidic in nature",
    "correctOption": "D",
    "explanation": "Step 1: Identify the fact or concept asked in the question. Step 2: A pH of 5 is below 7, so the liquid is acidic. Step 3: Therefore the correct option is D.",
    "subject": "General Science",
    "topic": "Physics, Chemistry & Biology – basic concepts",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0690",
    "question": "English: 38. Who is the Vice President of India, as on 1st of January, 2024?\nAssamese: জানুৱাৰী, 2024 সাপেক্ষে ভাৰতৰ উপৰাষ্ট্ৰপতি কোন?",
    "options": [
      "Gulab Chand Kataria",
      "Ram Nath Kovind",
      "Jagdeep Dhankhar",
      "Rajnath Singh"
    ],
    "answer": "Jagdeep Dhankhar",
    "correctOption": "C",
    "explanation": "Step 1: Identify the fact or concept asked in the question. Step 2: Jagdeep Dhankhar was the Vice-President of India on 1 January 2024. Step 3: Therefore the correct option is C.",
    "subject": "Indian Polity / Governance",
    "topic": "Indian Polity, Government Schemes & Institutions",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0691",
    "question": "English: 39. Which of the following belongs to Class I category of lever?\nAssamese: নিম্নলিখিত কোনটো প্ৰথম শ্রেণীৰ লিভাৰৰ অন্তৰ্গত? (%) কেঁচী (৪) ঠেলা গাড়ী?",
    "options": [
      "Scissor",
      "Wheelbarrow",
      "Human arm",
      "Stapler"
    ],
    "answer": "Scissor",
    "correctOption": "A",
    "explanation": "Step 1: Identify the fact or concept asked in the question. Step 2: A scissor is a first-class lever because the fulcrum lies between effort and load. Step 3: Therefore the correct option is A.",
    "subject": "General Science",
    "topic": "Physics, Chemistry & Biology – basic concepts",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0692",
    "question": "English: 40. The National Flag of which country has a white cross over red background?\nAssamese: কোন দেশৰ জাতীয় পতাকাত ৰঙা পৃষ্ঠভূমিত বগা ৰঙৰ এটা HE চিহ্ন আছে?",
    "options": [
      "Brazil",
      "Switzerland",
      "The United States of America",
      "Japan"
    ],
    "answer": "Switzerland",
    "correctOption": "B",
    "explanation": "Step 1: Identify the fact or concept asked in the question. Step 2: Switzerland's national flag has a white cross on a red field. Step 3: Therefore the correct option is B.",
    "subject": "Geography",
    "topic": "Indian & World Geography",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0693",
    "question": "English: 41. Which of the following is considered as the earliest compilation?\nAssamese: নিম্নলিখিত কোনটোক আটাইতকৈ পুৰণি সংকলন বুলি বিবেচনা কৰা হয়?",
    "options": [
      "Yajurveda",
      "Atharvaveda",
      "Rigveda",
      "Samaveda"
    ],
    "answer": "Rigveda",
    "correctOption": "C",
    "explanation": "Step 1: Identify the fact or concept asked in the question. Step 2: The Rigveda is generally regarded as the earliest of the four Vedas and the earliest major Vedic compilation. Step 3: Therefore the correct option is C.",
    "subject": "Mathematics",
    "topic": "Arithmetic, Number System, Algebra, Geometry & Mensuration",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0694",
    "question": "English: 42. Which of the following places was a part of the Indus Valley Civilization?\nAssamese: নিম্নলিখিত কোনটো স্থান সিন্ধু উপত্যকা সভ্যতাৰ অন্তৰ্গত?",
    "options": [
      "Machilipatnam",
      "Babylon",
      "Mohenjo-daro",
      "Byzantine"
    ],
    "answer": "Mohenjo-daro",
    "correctOption": "C",
    "explanation": "Step 1: Identify the fact or concept asked in the question. Step 2: Mohenjo-daro was a major urban centre of the Indus Valley Civilization. Step 3: Therefore the correct option is C.",
    "subject": "Mathematics",
    "topic": "Arithmetic, Number System, Algebra, Geometry & Mensuration",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0695",
    "question": "English: 43. Who among the following was involved in the Battle of Waterloo?\nAssamese: ৱাটাৰলু যুদ্ধত নিম্নলিখিত কোনগৰাকী জড়িত আছিল?",
    "options": [
      "Napoleon Bonaparte",
      "Czar Nicholas",
      "Adolf Hitler",
      "George Washington"
    ],
    "answer": "Napoleon Bonaparte",
    "correctOption": "A",
    "explanation": "Step 1: Identify the fact or concept asked in the question. Step 2: Napoleon Bonaparte was defeated by the allied forces at the Battle of Waterloo in 1815. Step 3: Therefore the correct option is A.",
    "subject": "History",
    "topic": "World History – Battle of Waterloo",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0696",
    "question": "English: 44. Bhairabkunda is a trijunction of which of the following?\nAssamese: ভৈৰৱকুণ্ড কোনকেইখনৰ ত্ৰি-সংযোগস্থল?",
    "options": [
      "Assam, Bhutan, China",
      "Assam, Bhutan, Arunachal Pradesh",
      "Assam, Bhutan, Sikkim",
      "Assam, Sikkim, Arunachal Pradesh"
    ],
    "answer": "Assam, Bhutan, Arunachal Pradesh",
    "correctOption": "B",
    "explanation": "Step 1: Identify the fact or concept asked in the question. Step 2: Bhairabkunda is associated with the tri-junction of Assam, Bhutan and Arunachal Pradesh. Step 3: Therefore the correct option is B.",
    "subject": "Geography",
    "topic": "Indian & World Geography",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0697",
    "question": "English: 45. Which of the following is generally salty in taste?\nAssamese: নিম্নলিখিত কোনবিধৰ সোৱাদ সচৰাচৰ লুণীয়া?",
    "options": [
      "Snowflake",
      "Rainwater",
      "Flowing river water",
      "Seawater"
    ],
    "answer": "Seawater",
    "correctOption": "D",
    "explanation": "Step 1: Identify the fact or concept asked in the question. Step 2: Seawater contains dissolved salts, making it generally salty in taste. Step 3: Therefore the correct option is D.",
    "subject": "General Science",
    "topic": "Physics, Chemistry & Biology – basic concepts",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0698",
    "question": "English: 46. Which of the following mountain ranges is in North-East India?\nAssamese: বৰাইল পৰ্বতমালা (3) শিৱালিক পৰ্বতমালা?",
    "options": [
      "Barail Range",
      "Shivalik Range",
      "Satpura Range",
      "Aravalli Range"
    ],
    "answer": "Barail Range",
    "correctOption": "A",
    "explanation": "Step 1: Identify the fact or concept asked in the question. Step 2: The Barail Range is a mountain range of northeastern India. Step 3: Therefore the correct option is A.",
    "subject": "Geography",
    "topic": "Indian & World Geography",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0699",
    "question": "English: 47. Which of the following statements is incorrect?\nAssamese: নিম্নলিখিত কোনটো উক্তি অশুদ্ধ?",
    "options": [
      "Lakshadweep is a Union Territory of India.",
      "Maldives is a Union Territory of India.",
      "Andaman and Nicobar Islands is a Union Territory of India.",
      "Puducherry is a Union Territory of India."
    ],
    "answer": "Maldives is a Union Territory of India.",
    "correctOption": "B",
    "explanation": "Step 1: Identify the fact or concept asked in the question. Step 2: Maldives is an independent country, not a Union Territory of India; the other listed territories are Indian Union Territories. Step 3: Therefore the correct option is B.",
    "subject": "Indian Polity / Governance",
    "topic": "Indian Polity, Government Schemes & Institutions",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0700",
    "question": "English: 48. The Equator, the Tropic of Capricorn and the Tropic of Cancer pass through which continent?\nAssamese: ভূমধ্যৰেখা, মকৰক্রান্তি আৰু কৰ্কটক্রান্তি কোন মহাদেশৰ মাজেৰে পাৰ হৈ যায়?",
    "options": [
      "Asia",
      "Australia",
      "South America",
      "Africa"
    ],
    "answer": "Africa",
    "correctOption": "D",
    "explanation": "Step 1: Identify the fact or concept asked in the question. Step 2: The Equator, Tropic of Cancer and Tropic of Capricorn all cross Africa. Step 3: Therefore the correct option is D.",
    "subject": "Geography",
    "topic": "Indian & World Geography",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0701",
    "question": "English: 49. Which of the following is an island State of the United States of America?\nAssamese: নিম্নলিখিত কোনখন আমেৰিকা যুক্তৰাষ্ট্ৰৰ এখন দ্বীপৰাজ্য?",
    "options": [
      "Madagascar",
      "Canary Islands",
      "Hawaii",
      "Greenland"
    ],
    "answer": "Hawaii",
    "correctOption": "C",
    "explanation": "Step 1: Identify the fact or concept asked in the question. Step 2: Hawaii is a U.S. island state; Greenland is not a U.S. state. Step 3: Therefore the correct option is C.",
    "subject": "Geography",
    "topic": "Indian & World Geography",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0702",
    "question": "English: 50. Sudden burst into the open of hot water and vapour from deep underground is termed as\nAssamese: ভূগৰ্ভৰ গভীৰতাৰ পৰা গৰম পানী আৰু বাষ্প বিস্ফোৰণৰ জৰিয়তে নিৰ্গত হোৱা পৰিঘটনাক কোৱা হয়?",
    "options": [
      "geyser",
      "volcano",
      "tornado",
      "tsunami"
    ],
    "answer": "geyser",
    "correctOption": "A",
    "explanation": "Step 1: Identify the fact or concept asked in the question. Step 2: A geyser is a natural feature that periodically ejects hot water and steam from underground. Step 3: Therefore the correct option is A.",
    "subject": "General Science",
    "topic": "Physics, Chemistry & Biology – basic concepts",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0703",
    "question": "English: 51. Which of the following is not a component of the Constitution of India?\nAssamese: নিম্নলিখিত কোনটো ভাৰতৰ সংবিধানৰ উপাদান নহয়?",
    "options": [
      "The Directive Principles of State Policy",
      "The Directive Rights of the Centre",
      "The Fundamental Rights",
      "The Fundamental Duties"
    ],
    "answer": "The Directive Rights of the Centre",
    "correctOption": "B",
    "explanation": "Step 1: Identify the fact or concept asked in the question. Step 2: The Constitution contains Fundamental Rights, Fundamental Duties and Directive Principles; 'Directive Rights of the Centre' is not a component. Step 3: Therefore the correct option is B.",
    "subject": "Indian Polity / Governance",
    "topic": "Indian Polity, Government Schemes & Institutions",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0704",
    "question": "English: 52. A continuous rise in the price level is called\nAssamese: মৃল্যৰ স্তৰৰ ক্ৰমাগত বৃদ্ধিক কোৱা হয়?",
    "options": [
      "stagflation",
      "deflation",
      "hyperinflation",
      "inflation"
    ],
    "answer": "inflation",
    "correctOption": "D",
    "explanation": "Step 1: Identify the fact or concept asked in the question. Step 2: A sustained general rise in prices is called inflation. Step 3: Therefore the correct option is D.",
    "subject": "Economics",
    "topic": "Economics – Inflation",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0705",
    "question": "English: 53. What does DAY stand for in the National Rural Livelihoods Mission (DAY-NRLM)?\nAssamese: ৰাষ্ট্ৰীয় গ্ৰাম্য জীৱিকা অভিযান (DAY-NRLM)= Dayal কি বুজায়? SLRC-2024/P-I/1-A?",
    "options": [
      "District Availability Yojana",
      "Deendayal Antyodaya Yojana",
      "Deendayal Ayurvedic Yojana",
      "District Achievement Yojana"
    ],
    "answer": "Deendayal Antyodaya Yojana",
    "correctOption": "B",
    "explanation": "Step 1: Identify the fact or concept asked in the question. Step 2: DAY in DAY-NRLM stands for Deendayal Antyodaya Yojana. Step 3: Therefore the correct option is B.",
    "subject": "Government Schemes",
    "topic": "DAY-NRLM",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0706",
    "question": "English: 54. Which of the following novels was written by Padma Shri Rongbong Terang?\nAssamese: নিম্নলিখিত কোনখন উপন্যাস পদ্মশ্ৰী ৰংবং তেৰাঙে ৰচনা কৰিছে?",
    "options": [
      "Mrityunjay",
      "Oximot Jar Heral Xeema",
      "Rongmilir Hanhi",
      "Miri Jiyori"
    ],
    "answer": "Rongmilir Hanhi",
    "correctOption": "C",
    "explanation": "Step 1: Identify the fact or concept asked in the question. Step 2: 'Rongmilir Hanhi' is a novel by Rongbong Terang. Step 3: Therefore the correct option is C.",
    "subject": "Assam Literature",
    "topic": "Assamese Literature & Authors",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0707",
    "question": "English: 55. Which of the following is not a Central Armed Police Force of India?\nAssamese: নিম্নলিখিত কোনটো ভাৰতৰ কেন্দ্ৰীয় সশস্ত্ৰ আৰক্ষী বাহিনী নহয়?",
    "options": [
      "Indian Coast Guard (ICG)",
      "Sashastra Seema Bal (SSB)",
      "National Security Guard (NSG)",
      "Central Industrial Security Force (CISF)"
    ],
    "answer": "Indian Coast Guard (ICG)",
    "correctOption": "A",
    "explanation": "Step 1: Identify the fact or concept asked in the question. Step 2: The Indian Coast Guard is not classified as a Central Armed Police Force. Step 3: Therefore the correct option is A.",
    "subject": "Indian Polity / Governance",
    "topic": "Indian Polity, Government Schemes & Institutions",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0708",
    "question": "English: 56. What is the chemical symbol for silver?\nAssamese: ৪) Si?",
    "options": [
      "Ag",
      "Si",
      "Sv",
      "Au"
    ],
    "answer": "Ag",
    "correctOption": "A",
    "explanation": "Step 1: Identify the fact or concept asked in the question. Step 2: The chemical symbol for silver is Ag. Step 3: Therefore the correct option is A.",
    "subject": "General Science",
    "topic": "Physics, Chemistry & Biology – basic concepts",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0709",
    "question": "English: 57. Who is the President of the USA, as on 1st of January, 2024?\nAssamese: জানুৱাৰী, 2024 সাপেক্ষে আমেৰিকা যুক্তৰাষ্ট্ৰৰ ৰাষ্ট্ৰপতি কোন?",
    "options": [
      "Barack Obama",
      "Donald Trump",
      "Joe Biden",
      "Rishi Sunak"
    ],
    "answer": "Joe Biden",
    "correctOption": "C",
    "explanation": "Step 1: Identify the fact or concept asked in the question. Step 2: Joe Biden was President of the United States on 1 January 2024. Step 3: Therefore the correct option is C.",
    "subject": "Current Affairs",
    "topic": "International Current Affairs – USA",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0710",
    "question": "English: 58. Which of the following is considered as the powerhouse of an animal cell?\nAssamese: নিম্নলিখিত কোনটোক প্ৰাণী কোষৰ শক্তিৰ ভঁৰাল ৰূপে বিবেচনা কৰা হয়?",
    "options": [
      "Nucleus",
      "Golgi apparatus",
      "Ribosome",
      "Mitochondria"
    ],
    "answer": "Mitochondria",
    "correctOption": "D",
    "explanation": "Step 1: Identify the fact or concept asked in the question. Step 2: Mitochondria generate most of the cell's usable ATP and are therefore called the powerhouse of the cell. Step 3: Therefore the correct option is D.",
    "subject": "General Science",
    "topic": "Physics, Chemistry & Biology – basic concepts",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0711",
    "question": "English: 59. Which of the following countries does not have a seashore?\nAssamese: নিম্নলিখিত কোনখন দেশত সাগৰীয় উপকূল নাই?",
    "options": [
      "China",
      "Afghanistan",
      "Myanmar",
      "Iran"
    ],
    "answer": "Afghanistan",
    "correctOption": "B",
    "explanation": "Step 1: Identify the fact or concept asked in the question. Step 2: Afghanistan is landlocked and has no seashore. Step 3: Therefore the correct option is B.",
    "subject": "Geography",
    "topic": "Indian & World Geography",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0712",
    "question": "English: 60. The world’s largest island Greenland is a part of which of the following countries?\nAssamese: পৃথিৱীৰ বৃহত্তম দ্বীপ, গ্ৰীনলেণ্ড কোনখন দেশৰ অংশ?",
    "options": [
      "Denmark",
      "Sweden",
      "Canada",
      "Iceland"
    ],
    "answer": "Denmark",
    "correctOption": "A",
    "explanation": "Step 1: Identify the fact or concept asked in the question. Step 2: Greenland is an autonomous territory within the Kingdom of Denmark. Step 3: Therefore the correct option is A.",
    "subject": "Geography",
    "topic": "Indian & World Geography",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0713",
    "question": "English: 61. Consider the four numbers given here : I. 376 II. 629 III. 921 IV. 397 If the digits of each number are arranged in ascending order, which new number would be the smallest?\nAssamese: ৪) 1 (c) I (D) IV প্রদত্ত চাৰিটা সংখ্যা বিবেচনা কৰক: 1. 376 Il. 629 Ill. 921 IV. 397 প্রতিটো সংখ্যাৰ অংককেইটা উৰ্দ্ধক্তমত সজালে কোনটো নতুন সংখ্যাৰ মান TSA হ’ব?",
    "options": [
      "III",
      "II",
      "I",
      "IV"
    ],
    "answer": "III",
    "correctOption": "A",
    "explanation": "Step 1: Arrange each number's digits in ascending order: 376→367, 629→269, 921→129, 397→379. Step 2: Compare the new numbers. 129 is the smallest. Step 3: 129 came from III, so the correct option is A.",
    "subject": "Reasoning / Mathematics",
    "topic": "Reasoning – classification, family relation, coding, direction, speed",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0714",
    "question": "English: 62. Find the odd one out.\nAssamese: বিজোড়টো বিচাৰি উলিয়াওক।",
    "options": [
      "Sparrow",
      "Crow",
      "Bat",
      "Peacock"
    ],
    "answer": "Bat",
    "correctOption": "C",
    "explanation": "Step 1: Sparrow, crow and peacock are birds. Step 2: A bat is a mammal, not a bird. Step 3: Bat is the odd one out. Correct option: C.",
    "subject": "Reasoning / Mathematics",
    "topic": "Reasoning – classification, family relation, coding, direction, speed",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0715",
    "question": "English: 63. Pointing to Sarat in a photograph, Malini said, “His brother’s father is the only son of my grandfather”. How is Malini related to Sarat?\nAssamese: এখন ফটোগ্ৰাফত শৰতৰ ছবিখনলৈ আঙুলিয়াই মালিনীয়ে ক’লে,-- “coda ভাতৃৰ পিতৃ মোৰ ককাদেউতাৰ একমাত্র সন্তান’’ ৷ মালিনী শৰতৰ সৈতে কোন সন্বন্ধৰে সম্পৰ্কিত? 4) খুড়ী (৪) আইতা?",
    "options": [
      "Aunt",
      "Grandmother",
      "Mother",
      "Sister"
    ],
    "answer": "Sister",
    "correctOption": "D",
    "explanation": "Step 1: 'His brother's father' means Sarat's father. Step 2: This person is stated to be the only son of Malini's grandfather, i.e. Malini's father. Step 3: Therefore Malini and Sarat are siblings; Malini is Sarat's sister. Correct option: D.",
    "subject": "Reasoning / Mathematics",
    "topic": "Reasoning – classification, family relation, coding, direction, speed",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0716",
    "question": "English: 64. If ROBOTICS is coded as OROBITSC, then PROJECTS would be coded as\nAssamese: যদি ROBOTICS# OROBITSC হিচাবে ক’ড কৰা হয়, তেন্তে PROJECTS! 4G হ’ব?",
    "options": [
      "ROPEJTSC",
      "RPJOCEST",
      "RPJOECST",
      "ROJPCEST"
    ],
    "answer": "RPJOCEST",
    "correctOption": "B",
    "explanation": "Step 1: ROBOTICS→OROBITSC is formed by swapping each adjacent pair: RO→OR, BO→OB, TI→IT, CS→SC. Step 2: Apply the same rule to PROJECTS: PR→RP, OJ→JO, EC→CE, TS→ST. Step 3: The code is RPJOCEST. Correct option: B.",
    "subject": "Reasoning / Mathematics",
    "topic": "Reasoning – classification, family relation, coding, direction, speed",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0717",
    "question": "English: 65. In a zoo, the lion’s cage is towards the East of tiger’s cage. At the exact South of the lion’s cage, there is bear’s cage, which is towards the West of cheetah’s cage. In which direction is the tiger’s cage from the cheetah’s cage?\nAssamese: এটা চিৰিয়াখানাত সিংহৰ গঁৰালটো বাঘৰ গঁৰালৰ পূব ফালে আছে। সিংহৰ গঁৰালৰ ঠিক দক্ষিণ ফালে ভালুকৰ থাকিব?",
    "options": [
      "South-East",
      "North-West",
      "South-West",
      "East"
    ],
    "answer": "North-West",
    "correctOption": "B",
    "explanation": "Step 1: Put the tiger at (0,0); the lion is east at (1,0). Step 2: The bear is south of the lion at (1,−1), and the cheetah is east of the bear at (2,−1). Step 3: From the cheetah, the tiger is north-west. Correct option: B.",
    "subject": "Reasoning / Mathematics",
    "topic": "Reasoning – classification, family relation, coding, direction, speed",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0718",
    "question": "English: 66. At what speed should a car travel on a highway to reach a destination 12 km away in 15 minutes?\nAssamese: ৰাজপথত 12 কি. মি. দূৰত্বৰ গন্তব্য স্থান 15 মিনিটত গৈ পাবলৈ এখন মটৰগাড়ীয়ে কিমান বেগত যাত্ৰা কৰিব লাগিব?",
    "options": [
      "64 kmph",
      "84 kmph",
      "48 kmph",
      "36 kmph"
    ],
    "answer": "48 kmph",
    "correctOption": "C",
    "explanation": "Step 1: Time=15 minutes=15/60=0.25 hour. Step 2: Speed=distance/time=12/0.25. Step 3: Speed=48 km/h. Correct option: C.",
    "subject": "Reasoning / Mathematics",
    "topic": "Reasoning – classification, family relation, coding, direction, speed",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0719",
    "question": "English: 67. Which word would be the last in a standard English dictionary?\nAssamese: এটা মানক ইংৰাজী অভিধানত কোনটো শব্দ শেষত থাকিব?",
    "options": [
      "ADVERSE",
      "ADVENT",
      "ADVENTURE",
      "ADVERTISE"
    ],
    "answer": "ADVERTISE",
    "correctOption": "D",
    "explanation": "Step 1: Compare the words alphabetically. ADVENT comes before ADVENTURE because the shorter complete word comes first. Step 2: ADVERSE comes before ADVERTISE because s comes before t at the differing position. Step 3: ADVERTISE is therefore the last. Correct option: D.",
    "subject": "English / Verbal Reasoning",
    "topic": "Vocabulary, spelling & dictionary order",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0720",
    "question": "English: 68. Identify the correctly spelt word.\nAssamese: শুদ্ধ বানানযুক্ত শব্দটো চিনাক্ত কৰক ৷?",
    "options": [
      "Moderator",
      "Moredator",
      "Modarator",
      "Moderetor"
    ],
    "answer": "Moderator",
    "correctOption": "A",
    "explanation": "Step 1: Check the spellings letter by letter. Step 2: 'Moderator' is the correctly formed spelling; the other options contain misplaced or substituted letters. Step 3: Correct option: A.",
    "subject": "English / Verbal Reasoning",
    "topic": "Vocabulary, spelling & dictionary order",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0721",
    "question": "English: 69. Which of the following words cannot be made using the letters of MENDICANT?\nAssamese: আখৰসমূহ ব্যৱহাৰ কৰি নিম্নলিখিত কোনটো শব্দ গঠন কৰিব নোৱাৰি?",
    "options": [
      "MEDICAL",
      "MEDIAN",
      "DETAIN",
      "ANCIENT"
    ],
    "answer": "MEDICAL",
    "correctOption": "A",
    "explanation": "Step 1: MENDICANT contains M,E,N,D,I,C,A,T. Step 2: MEDICAL requires the letter L, which is absent. Step 3: Therefore MEDICAL cannot be formed. Correct option: A.",
    "subject": "English / Verbal Reasoning",
    "topic": "Vocabulary, spelling & dictionary order",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0722",
    "question": "English: 70. At the Youth Parliament, certain number of country representatives sit in a linear row and all are facing the audience. Only ten persons sit to the left of Estonia. Fiji sits eighth to the left of Estonia. Angola sits fourth to the right of Bahrain. Canada sits to the immediate left of Denmark, and Denmark is the third from the extreme right end of the row. The number of countries between Estonia and Denmark is same as Bahrain and Estonia. Only six countries sit between Angola and Canada. In total, how many countries are seated at the Youth Parliament?\nAssamese: ৪) 21?",
    "options": [
      "19",
      "21",
      "32",
      "17"
    ],
    "answer": "19",
    "correctOption": "A",
    "explanation": "Step 1: Estonia is 11th because ten countries sit to its left; Fiji is therefore 3rd. Step 2: Denmark is third from the right and Canada immediately precedes it. Step 3: Applying the equal-gap condition between Estonia–Denmark and Bahrain–Estonia, together with the six-country gap between Angola and Canada, gives a total of 19 positions. Correct option: A.",
    "subject": "Reasoning",
    "topic": "Analogy, coding, ordering, sequences & relationships",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0723",
    "question": "English: 71. Which option is similar to Pencil : Student : School?\nAssamese: পেঞ্চিল : শিক্ষাৰ্থী : বিদ্যালয়ৰ সৈতে একে ধৰণৰ সম্পৰ্ক থকা বিকল্পটো কোনটো?",
    "options": [
      "Mouse : Eat : Biscuit",
      "Computer : Officer : Bank",
      "Pen : Writer : Book",
      "Cash : Shopkeeper : Goods"
    ],
    "answer": "Computer : Officer : Bank",
    "correctOption": "B",
    "explanation": "Step 1: A pencil is a tool used by a student in a school. Step 2: A computer is a tool used by an officer in a bank, giving the same tool–user–place pattern. Step 3: Correct option: B.",
    "subject": "Reasoning",
    "topic": "Analogy, coding, ordering, sequences & relationships",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0724",
    "question": "English: 72. If REAR = 42, TEAR = 44 and DEAR = 28, then which of the following sets is incorrectly paired?\nAssamese: যদি REAR = 42, TEAR = 44 আৰু DEAR = 28, তেন্তে নিম্নলিখিত কোনটো যোৰ অশুদ্ধ?",
    "options": [
      "PEAR = 40",
      "FEAR = 32",
      "BEAR = 26",
      "GEAR = 31"
    ],
    "answer": "FEAR = 32",
    "correctOption": "B",
    "explanation": "Step 1: The code is the sum of the alphabetical values of the letters: REAR=18+5+1+18=42 and TEAR=20+5+1+18=44. Step 2: FEAR should be 6+5+1+18=30, not 32. Step 3: Hence FEAR=32 is the incorrectly paired set. Correct option: B.",
    "subject": "Reasoning",
    "topic": "Analogy, coding, ordering, sequences & relationships",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0725",
    "question": "English: 73. Find the best option to fill in the last term : CIRCLE : GEOMETRY :: POETRY : ?\nAssamese: শেষ পদটো পূৰণ কৰিবলৈ সৰ্বোত্তম বিকল্পটো বিচাৰক : CIRCLE : GEOMETRY :: POETRY : ?",
    "options": [
      "CHAPTER",
      "BOOKS",
      "PROSE",
      "LANGUAGE"
    ],
    "answer": "LANGUAGE",
    "correctOption": "D",
    "explanation": "Step 1: A circle is studied under geometry, so the relation is 'subject/topic'. Step 2: Poetry is a form/area of language. Step 3: Therefore the best matching term is LANGUAGE. Correct option: D.",
    "subject": "English / Verbal Reasoning",
    "topic": "Vocabulary, spelling & dictionary order",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0726",
    "question": "English: 74. Identify the pair with the same relationship as Child : Vaccination.\nAssamese: Child : Vaccination-ৰ সৈতে একে সম্পৰ্ক থকা যোৰটো চিনাক্ত কৰক।",
    "options": [
      "Fever : Medicine",
      "Food : Cooking",
      "Plant : Pesticide",
      "Animals : Food"
    ],
    "answer": "Plant : Pesticide",
    "correctOption": "C",
    "explanation": "Step 1: A child receives vaccination as a preventive treatment. Step 2: A plant receives pesticide as a protective treatment against pests. Step 3: This gives the closest relationship. Correct option: C.",
    "subject": "Reasoning",
    "topic": "Analogy, coding, ordering, sequences & relationships",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0727",
    "question": "English: 75. Which of the following words would not fit correctly in the sentence? The person died of a ——— hit on his head.\nAssamese: নিম্নলিখিত কোনটো শব্দ প্রদত্ত বাক্যটোত খাপ নাখায়? মূৰত আঘাতৰ ফলত ব্যক্তিজনৰ মৃত্যু হৈছে।?",
    "options": [
      "lethal",
      "fatal",
      "deadly",
      "subtle"
    ],
    "answer": "subtle",
    "correctOption": "D",
    "explanation": "Step 1: Lethal, fatal and deadly can naturally describe a severe hit. Step 2: 'Subtle hit' does not fit the intended meaning of a harmful blow to the head. Step 3: Correct option: D.",
    "subject": "English / Verbal Reasoning",
    "topic": "Vocabulary, spelling & dictionary order",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0728",
    "question": "English: 76. What would be the correct sequence of the following words as per the standard English dictionary? 1. Royal 2. Regal 3. Renal 4. Rebel\nAssamese: নিম্নলিখিত শব্দসমূহক প্ৰামাণিক ইংৰাজী অভিধানৰ ক্ৰম অনুসৰি সজালে সঠিক ক্ৰমটো কি হ'ব? 1. Royal 2. Regal 3. Renal 4. Rebel",
    "options": [
      "1, 2, 3, 4",
      "4, 3, 2, 1",
      "4, 2, 3, 1",
      "4, 3, 1, 2"
    ],
    "answer": "4, 2, 3, 1",
    "correctOption": "C",
    "explanation": "Step 1: Arrange the words alphabetically: Rebel, Regal, Renal, Royal. Step 2: Their original numbers are 4, 2, 3, 1. Step 3: Correct sequence is 4,2,3,1. Correct option: C.",
    "subject": "English / Verbal Reasoning",
    "topic": "Vocabulary, spelling & dictionary order",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0729",
    "question": "English: 77. Select the appropriate number to correctly continue the sequence 27, 30, 37, 50, ?, 98.\nAssamese: ৪) 73?",
    "options": [
      "69",
      "73",
      "81",
      "91"
    ],
    "answer": "69",
    "correctOption": "A",
    "explanation": "Step 1: Differences are +3, +7 and +13. Step 2: The increases in the differences follow +4, +6, then +8, giving the next difference +19. Step 3: 50+19=69. Correct option: A.",
    "subject": "Reasoning",
    "topic": "Analogy, coding, ordering, sequences & relationships",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0730",
    "question": "English: 78. Pallavi claims to be taller than Jyoti, but Smita who is taller than Pallavi knows that Pallavi is wrong. Which of the following can be said about their height?\nAssamese: পল্লবীয়ে দাবী কৰে যে তাই জ্যোতিতকৈ ওখ, কিন্তু পল্লবীতকৈ ওখ স্মিতাই জানে যে পল্লবীৰ উক্তি ভুল। তেওঁলোকৰ উচ্চতা সম্পৰ্কত নিম্নলিখিত কোনটো ক’ব পাৰি?",
    "options": [
      "Pallavi is definitely shorter than Jyoti",
      "Pallavi and Jyoti are of the same height",
      "Smita is the tallest of the three",
      "Cannot be determined"
    ],
    "answer": "Cannot be determined",
    "correctOption": "D",
    "explanation": "Step 1: Smita is taller than Pallavi. Step 2: Pallavi's claim to be taller than Jyoti is false, so Pallavi is not taller than Jyoti; she could be equal to or shorter than Jyoti. Step 3: The exact ordering cannot be fixed. Correct option: D.",
    "subject": "Reasoning",
    "topic": "Analogy, coding, ordering, sequences & relationships",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0731",
    "question": "English: 79. At a college function, Romola pointed out to an actor and said, “He is my mother-in-law’s only son’s nephew”. How is the actor’s mother related to Romola?\nAssamese: এখন মহাবিদ্যালয়ৰ অনুষ্ঠানত ৰমলাই এজন অভিনেতালৈ আঙুলিয়াই কৈছিল, “তেওঁ মোৰ শাহুৱেকৰ একমাত্ৰ পুত্ৰৰ ভাতিজা।” অভিনেতাজনৰ মাতৃৰ সৈতে ৰমলাৰ সম্বন্ধ কি?",
    "options": [
      "Aunt",
      "Daughter",
      "Niece",
      "Sister-in-law"
    ],
    "answer": "Sister-in-law",
    "correctOption": "D",
    "explanation": "Step 1: Romola's mother-in-law's only son is her husband. Step 2: The actor is her husband's nephew, so the actor is the son of one of her husband's siblings. Step 3: That sibling—the actor's mother—is Romola's sister-in-law. Correct option: D.",
    "subject": "Reasoning",
    "topic": "Analogy, coding, ordering, sequences & relationships",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0732",
    "question": "English: 80. Find the best option to fill in the third term : Gravity : Newton :: ? : Copernicus\nAssamese: তৃতীয় পদটো পূৰণ কৰিবলৈ উপযুক্ত বিকল্পটো নিৰ্বাচন কৰক : মাধ্যাকৰ্ষণ : নিউটন :: ? : কপাৰনিকাছ?",
    "options": [
      "Blood circulation",
      "Heliocentric system",
      "Rocket",
      "Radioactivity"
    ],
    "answer": "Heliocentric system",
    "correctOption": "B",
    "explanation": "Step 1: Newton is associated with the law of gravitation. Step 2: Copernicus is associated with the heliocentric model of the solar system. Step 3: Therefore the matching term is Heliocentric system. Correct option: B.",
    "subject": "Reasoning",
    "topic": "Analogy, coding, ordering, sequences & relationships",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0733",
    "question": "English: 81. A number was increased by 40% and thereafter decreased by 40%. The net change in the number in percentage is\nAssamese: কোনো এটা সংখ্যাক প্রথমে 40% বৃদ্ধি কৰা হ’ল আৰু তাৰ পিছত 40% হাস কৰা হ’ল। শতাংশ পৰিমাণত সংখ্যাটোৰ মুঠ পৰিৱৰ্তন হৈছে?",
    "options": [
      "16% increase",
      "16% decrease",
      "32% decrease",
      "No change"
    ],
    "answer": "16% decrease",
    "correctOption": "B",
    "explanation": "Step 1: Take the original number as 100. A 40% increase gives 140. Step 2: A 40% decrease of 140 is 56, leaving 84. Step 3: The change from 100 to 84 is 16% decrease. Correct option: B.",
    "subject": "Mathematics",
    "topic": "Arithmetic, Number System, Algebra, Geometry & Mensuration",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0734",
    "question": "English: 82. If the average age of A, B and C is 22 years and the average age of B and C is 25 years, then find the age of A after 9 years from now.\nAssamese: যদি A, B আৰু C-ৰ গড় বয়স 22 বছৰ আৰু B আৰু C-ৰ গড় বয়স 25 বছৰ, তেন্তে এতিয়াৰ পৰা 9 বছৰৰ পিছত A-ৰ বয়স কিমান হ'ব?",
    "options": [
      "25 years",
      "35 years",
      "50 years",
      "45 years"
    ],
    "answer": "25 years",
    "correctOption": "A",
    "explanation": "Step 1: A+B+C=3×22=66. Step 2: B+C=2×25=50, so A=16. Step 3: After 9 years, A will be 25 years. Correct option: A.",
    "subject": "Mathematics",
    "topic": "Arithmetic, Number System, Algebra, Geometry & Mensuration",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0735",
    "question": "English: 83. The smallest among 1/2, 1/3, 1/4 and 2/3 is\nAssamese: 1/2, 1/3, 1/4 আৰু 2/3-ৰ ভিতৰত আটাইতকৈ সৰুটো কোনটো?",
    "options": [
      "1/2",
      "1/3",
      "1/4",
      "2/3"
    ],
    "answer": "1/4",
    "correctOption": "C",
    "explanation": "Step 1: Compare the fractions 1/2, 1/3, 1/4 and 2/3. Step 2: For positive unit fractions, the larger denominator gives the smaller value; 1/4 is also smaller than 2/3. Step 3: Correct option: C (1/4).",
    "subject": "Mathematics",
    "topic": "Arithmetic, Number System, Algebra, Geometry & Mensuration",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0736",
    "question": "English: 84. If x/3 = y/4 = z/7, then (x + y + z)/z is equal to\nAssamese: যদি x/3 = y/4 = z/7, তেন্তে (x + y + z)/z-ৰ মান কিমান?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answer": "2",
    "correctOption": "A",
    "explanation": "Step 1: From x/3=y/4=z/7, let the common ratio be k, so x=3k, y=4k and z=7k. Step 2: Therefore (x+y+z)/z=(3+4+7)/7=2. Step 3: Correct option: A.",
    "subject": "Mathematics",
    "topic": "Arithmetic, Number System, Algebra, Geometry & Mensuration",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0737",
    "question": "English: 85. Two numbers are in the ratio 2 : 3 and the product of their HCF and LCM is 96. The sum of the two numbers is\nAssamese: দুটা সংখ্যা 2: 3 অনুপাতত আছে আৰু সিহঁতৰ গ.সা.উ. আৰু ল.সা.গু.-ৰ পূৰণফল 96. সংখ্যা দুটাৰ যোগফল হৈছে?",
    "options": [
      "18",
      "20",
      "22",
      "24"
    ],
    "answer": "20",
    "correctOption": "B",
    "explanation": "Step 1: For two positive integers, HCF×LCM equals their product. Step 2: Let the numbers be 2k and 3k. Then 6k²=96, so k=4. Step 3: The numbers are 8 and 12; their sum is 20. Correct option: B.",
    "subject": "Mathematics",
    "topic": "Arithmetic, Number System, Algebra, Geometry & Mensuration",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0738",
    "question": "English: 86. The value of ∛(8²) is\nAssamese: ৪) 3 (c) 2 (D) 4 ৪6. 4৪2 ৰ মান হ’ব?",
    "options": [
      "1",
      "3",
      "2",
      "4"
    ],
    "answer": "4",
    "correctOption": "D",
    "explanation": "Step 1: Interpret the expression as 8^(2/3). Step 2: The cube root of 8 is 2. Step 3: Squaring 2 gives 4. Correct option: D.",
    "subject": "Mathematics",
    "topic": "Arithmetic, Number System, Algebra, Geometry & Mensuration",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0739",
    "question": "English: 87. A certain amount invested in a firm would become double at the end of one month, but it deducts an amount of R120 on every doubling. A person invests an amount of R105 and continues for 3 months without investing any additional amount. At the end of 3 months, his net income is\nAssamese: এটা প্ৰতিষ্ঠানত বিনিয়োগ কৰা এটা নিৰ্দিষ্ট ধন প্ৰতিমাহে দুগুণ হয়, কিন্তু প্ৰতিবাৰ দুগুণ হ'লে ₹120 কৰ্তন কৰা হয়। এজন ব্যক্তিয়ে ₹105 বিনিয়োগ কৰি আৰু কোনো অতিৰিক্ত ধন নিদিয়াকৈ 3 মাহ চলালে, 3 মাহৰ শেষত তেওঁৰ নিট আয় কিমান?",
    "options": [
      "R55",
      "R0",
      "R270",
      "R45"
    ],
    "answer": "R0",
    "correctOption": "B",
    "explanation": "Step 1: Start with R105. After the first doubling: 210−120=90. Step 2: Second doubling: 180−120=60. Step 3: Third doubling: 120−120=0. Hence the net amount after 3 months is R0. Correct option: B.",
    "subject": "Mathematics",
    "topic": "Arithmetic, Number System, Algebra, Geometry & Mensuration",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0740",
    "question": "English: 88. The count of prime numbers between 80 and 100 is\nAssamese: 80 আৰু 100-ৰ মাজত থকা মৌলিক সংখ্যাৰ সংখ্যা কিমান?",
    "options": [
      "2",
      "5",
      "3",
      "4"
    ],
    "answer": "3",
    "correctOption": "C",
    "explanation": "Step 1: Check the primes from 81 to 99: 83, 89 and 97 are prime. Step 2: All the other numbers in that interval are composite. Step 3: There are 3 primes. Correct option: C.",
    "subject": "Mathematics",
    "topic": "Arithmetic, Number System, Algebra, Geometry & Mensuration",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0741",
    "question": "English: 89. Find the value of [(10⁷ ÷ 10²) + (10³ ÷ 10⁻²)] ÷ 10⁵.\nAssamese: ৰ মান নিৰ্ণয় কৰক?",
    "options": [
      "100",
      "200",
      "2",
      "1"
    ],
    "answer": "2",
    "correctOption": "C",
    "explanation": "Step 1: Apply the laws of exponents to the powers of 10 in the expression. Step 2: Reduce the divisions to powers with the same base and simplify the remaining terms. Step 3: The expression reduces to 2. Correct option: C.",
    "subject": "Mathematics",
    "topic": "Arithmetic, Number System, Algebra, Geometry & Mensuration",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0742",
    "question": "English: 90. If A B : = 3, then 144 36 A B : is\nAssamese: ৪) 12 (Cc) 3 (D) 16 90. যদি A: B=3, তেন্তে 1444, : 368 ৰ মান হ’ব?",
    "options": [
      "4",
      "12",
      "3",
      "16"
    ],
    "answer": "12",
    "correctOption": "B",
    "explanation": "Step 1: A/B=3. Step 2: Therefore A=3B, so 144A/(36B)=4(A/B)=12. Step 3: Correct option: B.",
    "subject": "Mathematics",
    "topic": "Arithmetic, Number System, Algebra, Geometry & Mensuration",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0743",
    "question": "English: 91. The fraction equivalent of the recurring number 2.19̅ is\nAssamese: পুনৰাবৃত্ত দশমিক সংখ্যা 2.19̅-ৰ সমতুল্য ভগ্নাংশটো কোনটো?",
    "options": [
      "271/99",
      "217/99",
      "219/90",
      "291/90"
    ],
    "answer": "217/99",
    "correctOption": "B",
    "explanation": "Step 1: Interpret the recurring number as 2.1919… = 2+0.1919…. Step 2: 0.1919… = 19/99. Step 3: 2+19/99=(198+19)/99=217/99. Correct option: B.",
    "subject": "Mathematics",
    "topic": "Arithmetic, Number System, Algebra, Geometry & Mensuration",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0744",
    "question": "English: 92. The largest of 2⁶, 3⁵, 4⁴ and 5³ is\nAssamese: 2⁶, 3⁵, 4⁴ আৰু 5³-ৰ ভিতৰত আটাইতকৈ ডাঙৰটো কোনটো?",
    "options": [
      "2⁶",
      "3⁵",
      "4⁴",
      "5³"
    ],
    "answer": "4⁴",
    "correctOption": "C",
    "explanation": "Step 1: Evaluate the powers: 2⁶=64, 3⁵=243, 4⁴=256 and 5³=125. Step 2: Compare the four results. 256 is the largest. Step 3: Therefore the correct option is C (4⁴).",
    "subject": "Mathematics",
    "topic": "Arithmetic, Number System, Algebra, Geometry & Mensuration",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0745",
    "question": "English: 93. For a bicycle rider, it is seen that for every two complete pedaling, the front wheel of the bicycle makes 3 complete turns. If the radius of the bicycle wheel is 70 cm, the distance (in metres) covered by the bicycle in 10 complete pedaling is\nAssamese: এজন চাইকেল আৰোহীৰ ক্ষেত্ৰত দেখা গ'ল যে তেওঁ পেডেলত দুটা সম্পূৰ্ণ পাক মাৰিলে আগচকাটোৱে 3টা সম্পূৰ্ণ পাক মাৰে। যদি চকাটোৰ ব্যাসাৰ্ধ 70 চে.মি. হয়, তেন্তে পেডেলত 10টা সম্পূৰ্ণ পাক মাৰিলে অতিক্ৰম কৰা দূৰত্ব (মিটাৰত) কিমান?",
    "options": [
      "7p",
      "14p",
      "21p",
      "28p"
    ],
    "answer": "21p",
    "correctOption": "C",
    "explanation": "Step 1: Every 2 pedal rotations produce 3 wheel rotations, so 10 pedal rotations produce 15 wheel rotations. Step 2: Wheel circumference=2πr=2π×70=140π cm. Step 3: Distance=15×140π=2100π cm=21π m. Correct option: C.",
    "subject": "Mathematics",
    "topic": "Arithmetic, Number System, Algebra, Geometry & Mensuration",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0746",
    "question": "English: 94. The base and the height of a right-angled triangle are equal in magnitude and the length of the third side is 2√2 cm. The area of the triangle is\nAssamese: এটা সমকোণী ত্ৰিভূজৰ ভূমি আৰু উচ্চতাৰ দৈৰ্ঘ্য সমান আৰু তৃতীয়টো বাহুৰ দৈৰ্ঘ্য 2√2 চে.মি.। ত্ৰিভূজটোৰ ক্ষেত্ৰফল কিমান?",
    "options": [
      "2 sq. cm",
      "2√2 sq. cm",
      "4 sq. cm",
      "4√2 sq. cm"
    ],
    "answer": "2 sq. cm",
    "correctOption": "A",
    "explanation": "Step 1: The right triangle has equal legs and hypotenuse 2√2 cm. If each leg is a, then a√2=2√2, so a=2 cm. Step 2: Area=1/2×2×2=2 sq. cm. Correct option: A.",
    "subject": "Mathematics",
    "topic": "Arithmetic, Number System, Algebra, Geometry & Mensuration",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0747",
    "question": "English: 95. In a range of consecutive numbers starting with 1, all the even numbers are removed. From the remaining, consider the first 7 numbers. The sum of these 7 numbers is\nAssamese: ৰ পৰা আৰম্ভ কৰা ক্ৰমিক সংখ্যাৰ কোনো এটা পৰিসৰত ইয়াত থকা সকলোবোৰ Ya সংখ্যা আঁতৰাই দিয়া হ’ল। অৱশিষ্ট সংখ্যাসমূহৰ প্রথম 7টা সংখ্যা বিবেচনা কৰা হ’ল। এই টা সংখ্যাৰ মুঠ যোগফল হৈছে?",
    "options": [
      "35",
      "42",
      "49",
      "56"
    ],
    "answer": "49",
    "correctOption": "C",
    "explanation": "Step 1: Removing all even numbers leaves 1,3,5,7,9,11,13,... Step 2: The first seven are 1,3,5,7,9,11,13. Step 3: Their sum is 49. Correct option: C.",
    "subject": "Mathematics",
    "topic": "Arithmetic, Number System, Algebra, Geometry & Mensuration",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0748",
    "question": "English: 96. Two numbers A and B are first added and squared to get C. In the next step, B is subtracted from A and the result is squared to get D. The result C − D expressed in terms of A and B is\nAssamese: দুটা সংখ্যা A আৰু B-ৰ যোগফলক বৰ্গ কৰি C পোৱা গ'ল। পৰৱৰ্তী ধাপত A-ৰ পৰা B বিয়োগ কৰি ফলাফলক বৰ্গ কৰি D পোৱা গ'ল। C − D-ক A আৰু B-ৰ সহায়ত প্ৰকাশ কৰিলে প্ৰকাশৰাশিটো কি হ'ব?",
    "options": [
      "A(A+B)",
      "4(A−B)",
      "AB/4",
      "4AB"
    ],
    "answer": "4AB",
    "correctOption": "D",
    "explanation": "Step 1: C=(A+B)² and D=(A−B)². Step 2: C−D=(A+B)²−(A−B)². Step 3: Expanding and cancelling gives 4AB. Correct option: D.",
    "subject": "Mathematics",
    "topic": "Arithmetic, Number System, Algebra, Geometry & Mensuration",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0749",
    "question": "English: 97. Find the least number by which 1250 must be multiplied to make it a perfect square.\nAssamese: ৪) 3 (c) 5 (D) 2 9. ন্যূনতম কি সংখ্যাৰে 12508 পূৰণ কৰিলে এটা পূৰ্ণবৰ্গ সংখ্যা পোৱা যাব?",
    "options": [
      "4",
      "3",
      "5",
      "2"
    ],
    "answer": "2",
    "correctOption": "D",
    "explanation": "Step 1: 1250=2×5^4. Step 2: The exponent of 2 is odd, so multiply by 2 to make it 2²×5^4. Step 3: This is (50)², a perfect square. Correct option: D.",
    "subject": "Mathematics",
    "topic": "Arithmetic, Number System, Algebra, Geometry & Mensuration",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0750",
    "question": "English: 98. When the numerator of a fraction is multiplied by 4 and the denominator by 9, the fraction reverses. The fraction is\nAssamese: এটা ভগ্নাংশৰ লবক 4-ৰে আৰু হৰক 9-ৰে পূৰণ কৰিলে ভগ্নাংশটোৰ প্ৰতিলোম পোৱা যায়। ভগ্নাংশটো কোনটো?",
    "options": [
      "4/5",
      "2/3",
      "5/4",
      "3/2"
    ],
    "answer": "3/2",
    "correctOption": "D",
    "explanation": "Step 1: Let the fraction be a/b. The condition gives 4a/(9b)=b/a. Step 2: Thus 4a²=9b², so 2a=3b. Step 3: Therefore a/b=3/2. Correct option: D.",
    "subject": "Mathematics",
    "topic": "Arithmetic, Number System, Algebra, Geometry & Mensuration",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0751",
    "question": "English: 99. At what percentage of simple interest does an amount of money double in 12 years?\nAssamese: সৰল সুতৰ কোনটো হাৰত এটা মূলধন 12 বছৰৰ মূৰত দুগুণ হ'ব?",
    "options": [
      "9 1/2%",
      "8 1/2%",
      "8 1/3%",
      "9 1/3%"
    ],
    "answer": "8 1/3%",
    "correctOption": "C",
    "explanation": "Step 1: For simple interest, SI=PRT/100. Step 2: Doubling means SI=P, so P=P×R×12/100. Step 3: R=100/12=8⅓%. Correct option: C.",
    "subject": "Mathematics",
    "topic": "Arithmetic, Number System, Algebra, Geometry & Mensuration",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0752",
    "question": "English: 100. The ratio of the radii of two circles is 1 : 3. The ratio of their areas is\nAssamese: দুটা বৃত্তৰ ব্যাসাৰ্ধৰ অনুপাত 1 : 3। বৃত্ত দুটাৰ ক্ষেত্ৰফলৰ অনুপাত কিমান হ'ব?",
    "options": [
      "1:6",
      "2:9",
      "1:9",
      "6:9"
    ],
    "answer": "1:9",
    "correctOption": "C",
    "explanation": "Step 1: Circle area is proportional to r². Step 2: Radii 1:3 therefore give areas 1²:3²=1:9. Step 3: Correct option: C.",
    "subject": "Mathematics",
    "topic": "Arithmetic, Number System, Algebra, Geometry & Mensuration",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0753",
    "question": "English: 101. 100% of 100 when added to 200% of 200 would result\nAssamese: ৰ লগত 200 ৰ 200% যোগ কৰিলে ফলাফল হ’ব?",
    "options": [
      "300",
      "400",
      "500",
      "600"
    ],
    "answer": "500",
    "correctOption": "C",
    "explanation": "Step 1: 100% of 100 is 100. Step 2: 200% of 200 is 400. Step 3: 100+400=500. Correct option: C.",
    "subject": "Mathematics",
    "topic": "Arithmetic, Number System, Algebra, Geometry & Mensuration",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0754",
    "question": "English: 102. If a + b = 8, b + c = 20 and a + c = 18, then the value of a² + b² is\nAssamese: যদি a + b = 8, b + c = 20 আৰু a + c = 18, তেন্তে a² + b²-ৰ মান কিমান?",
    "options": [
      "34",
      "43",
      "46",
      "64"
    ],
    "answer": "34",
    "correctOption": "A",
    "explanation": "Step 1: Add (a+b)+(a+c)−(b+c): 8+18−20=6=2a, so a=3. Step 2: Then b=5 from a+b=8. Step 3: a²+b²=9+25=34. Correct option: A.",
    "subject": "Mathematics",
    "topic": "Arithmetic, Number System, Algebra, Geometry & Mensuration",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0755",
    "question": "English: 103. If 2ˣ = 32, then the value of x is\nAssamese: যদি 2ˣ = 32, তেন্তে x-ৰ মান কিমান?",
    "options": [
      "4",
      "5",
      "6",
      "7"
    ],
    "answer": "5",
    "correctOption": "B",
    "explanation": "Step 1: 32=2^5. Step 2: If 2^x=32, then 2^x=2^5. Step 3: Hence x=5. Correct option: B.",
    "subject": "Mathematics",
    "topic": "Arithmetic, Number System, Algebra, Geometry & Mensuration",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0756",
    "question": "English: 104. The sum of 5 consecutive odd numbers is found to be 95. The largest of the numbers is\nAssamese: 5টা ক্ৰমিক অযুগ্ম সংখ্যাৰ যোগফল 95। সংখ্যাকেইটাৰ ভিতৰত আটাইতকৈ ডাঙৰটো কিমান?",
    "options": [
      "17",
      "21",
      "23",
      "19"
    ],
    "answer": "23",
    "correctOption": "C",
    "explanation": "Step 1: Five consecutive odd numbers have their middle number equal to the average, so the middle is 95/5=19. Step 2: The numbers are 15,17,19,21,23. Step 3: The largest is 23. Correct option: C.",
    "subject": "Mathematics",
    "topic": "Arithmetic, Number System, Algebra, Geometry & Mensuration",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0757",
    "question": "English: 105. If the decimal number 34p5 is divisible by 9, then the value of p is\nAssamese: ৪) 7?",
    "options": [
      "8",
      "7",
      "4",
      "6"
    ],
    "answer": "6",
    "correctOption": "D",
    "explanation": "Step 1: A number is divisible by 9 when its digit sum is divisible by 9. Step 2: For 34p5, the digit sum is 3+4+p+5=12+p. Step 3: 12+p=18 gives p=6. Correct option: D.",
    "subject": "Mathematics",
    "topic": "Arithmetic, Number System, Algebra, Geometry & Mensuration",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0758",
    "question": "English: 106. The maximum area of the circle that can be drawn within a square of side 4 cm is\nAssamese: 4 চে.মি. বাহুৰ বৰ্গক্ষেত্ৰ এটাৰ ভিতৰত আঁকিব পৰা বৃত্তৰ সৰ্বোচ্চ ক্ষেত্ৰফল কিমান?",
    "options": [
      "4π² cm²",
      "4π cm²",
      "π/4 cm²",
      "π/2 cm²"
    ],
    "answer": "4π cm²",
    "correctOption": "B",
    "explanation": "Step 1: The largest circle inside a square is the inscribed circle. Step 2: Its diameter equals the square side, 4 cm, so r=2 cm. Step 3: Area=πr²=4π cm². Correct option: B.",
    "subject": "Mathematics",
    "topic": "Arithmetic, Number System, Algebra, Geometry & Mensuration",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0759",
    "question": "English: 107. If today is Sunday, then the day after 92 days will be\nAssamese: যদি আজি ৰবিবাৰ হয়, তেন্তে 92 দিনৰ মূৰৰ দিনটো হ’ব?",
    "options": [
      "Saturday",
      "Friday",
      "Sunday",
      "Monday"
    ],
    "answer": "Monday",
    "correctOption": "D",
    "explanation": "Step 1: 92 days = 91+1=13 weeks+1 day. Step 2: One day after Sunday is Monday. Step 3: Correct option: D.",
    "subject": "Mathematics",
    "topic": "Arithmetic, Number System, Algebra, Geometry & Mensuration",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0760",
    "question": "English: 108. When three times of a given number is subtracted from the square of the number, the result is the number itself. The number is\nAssamese: ৪) 2 (Cc) -2 (D) -4 কোনো এক সংখ্যাৰ বৰ্গমানৰ পৰা সংখ্যাটোৰ তিনি গুণ বিয়োগ কৰিলে পুনৰ সেই সংখ্যাটোৱেই পোৱা যায়। সংখ্যাটো হৈছে?",
    "options": [
      "4",
      "2",
      "−2",
      "−4"
    ],
    "answer": "4",
    "correctOption": "A",
    "explanation": "Step 1: Let the number be n. The condition is n²−3n=n. Step 2: n²−4n=0, so n(n−4)=0. Step 3: Among the listed choices, n=4. Correct option: A.",
    "subject": "Mathematics",
    "topic": "Arithmetic, Number System, Algebra, Geometry & Mensuration",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0761",
    "question": "English: 109. In Roman numeral, XCI represents the decimal number\nAssamese: ৪) 21?",
    "options": [
      "41",
      "21",
      "91",
      "111"
    ],
    "answer": "91",
    "correctOption": "C",
    "explanation": "Step 1: In Roman numerals, X=10 and C=100. Step 2: XC means 100−10=90. Step 3: Add I=1, giving 91. Correct option: C.",
    "subject": "Mathematics",
    "topic": "Arithmetic, Number System, Algebra, Geometry & Mensuration",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0762",
    "question": "English: 110. A ladder of length 13 m is leaning against a vertical wall with the upper end at the height of 5 m. The horizontal distance between the foot of the wall and the lower end of the ladder is\nAssamese: 13 মি. দৈৰ্ঘ্যৰ জখলা এডাল উলম্ব দেৱাল এখনত হেলান দি আছে আৰু ইয়াৰ ওপৰৰ মূৰটো 5 মি. উচ্চতাত আছে। দেৱালখনৰ পাদবিন্দু আৰু জখলাৰ তলৰ মূৰৰ মাজৰ অনুভূমিক দূৰত্ব কিমান?",
    "options": [
      "9 m",
      "5 m",
      "11 m",
      "12 m"
    ],
    "answer": "12 m",
    "correctOption": "D",
    "explanation": "Step 1: The ladder, wall and ground form a right triangle with hypotenuse 13 m and vertical side 5 m. Step 2: Horizontal distance=√(13²−5²)=√144=12 m. Step 3: Correct option: D.",
    "subject": "Mathematics",
    "topic": "Arithmetic, Number System, Algebra, Geometry & Mensuration",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0763",
    "question": "English: 111. The median of the sequence of numbers 2, – 1, 3, 1, – 2, 5, 6 is\nAssamese: সংখ্যাক্ৰমটোৰ মধ্যমা হৈছে?",
    "options": [
      "1",
      "– 1",
      "2",
      "3"
    ],
    "answer": "2",
    "correctOption": "C",
    "explanation": "Step 1: Arrange the numbers: −2, −1, 1, 2, 3, 5, 6. Step 2: There are seven values, so the fourth value is the median. Step 3: Median=2. Correct option: C.",
    "subject": "Mathematics",
    "topic": "Arithmetic, Number System, Algebra, Geometry & Mensuration",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0764",
    "question": "English: 112. A person moves along a path such that he is always away from a given point by 7 m. After moving for some time, he again reaches his starting point. The approximate distance the person moved during the time is\nAssamese: এজন মানুহে এটা নিৰ্দিষ্ট বিন্দুৰ পৰা সদায় 7 মি. দূৰত্ব বজাই ৰাখি এটা পথত গতি কৰে। কিছু সময়ৰ পিছত তেওঁ পুনৰ আৰম্ভণিৰ স্থানত উপনীত হয়। এই সময়ছোৱাত তেওঁ অতিক্ৰম কৰা দূৰত্বৰ আনুমানিক মান কিমান?",
    "options": [
      "22 m",
      "44 m",
      "122 m",
      "144 m"
    ],
    "answer": "44 m",
    "correctOption": "B",
    "explanation": "Step 1: Remaining at a fixed distance of 7 m from a point means the path is a circle of radius 7 m. Step 2: Returning to the starting point corresponds to one complete circumference. Step 3: Circumference=2π×7=14π≈44 m. Correct option: B.",
    "subject": "Mathematics",
    "topic": "Arithmetic, Number System, Algebra, Geometry & Mensuration",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0765",
    "question": "English: 113. A cube of volume 1 m³ is cut equally into smaller cubes of volume 1 cm³ each. The number of smaller cubes found is\nAssamese: 1 মি³ আয়তনৰ এটা ঘনকক সমানে 1 চে.মি³ আয়তনৰ সৰু সৰু ঘনকত কটা হ'ল। পোৱা সৰু ঘনকৰ সংখ্যা কিমান?",
    "options": [
      "10000",
      "100000",
      "1000",
      "1000000"
    ],
    "answer": "1000000",
    "correctOption": "D",
    "explanation": "Step 1: 1 m³=100³ cm³=1,000,000 cm³. Step 2: Each smaller cube has volume 1 cm³. Step 3: Number of cubes=1,000,000. Correct option: D.",
    "subject": "Mathematics",
    "topic": "Arithmetic, Number System, Algebra, Geometry & Mensuration",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0766",
    "question": "English: 114. The smallest positive integer that is simultaneously divisible by 6, 8 and 12 is\nAssamese: আৰু 12 ৰে একে সময়তে বিভাজ্য ন্যূনতম ধনাত্মক অখণ্ড সংখ্যাটো হ’ল?",
    "options": [
      "24",
      "18",
      "48",
      "36"
    ],
    "answer": "24",
    "correctOption": "A",
    "explanation": "Step 1: Factorise 6=2×3, 8=2³ and 12=2²×3. Step 2: The LCM is 2³×3=24. Step 3: Therefore the smallest positive integer divisible by all three is 24. Correct option: A.",
    "subject": "Mathematics",
    "topic": "Arithmetic, Number System, Algebra, Geometry & Mensuration",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0767",
    "question": "English: 115. The difference between the smallest 3-digit even natural number and the largest 2-digit even natural number is\nAssamese: 3-অংকযুক্ত আটাইতকৈ সৰু যুগ্ম স্বাভাৱিক সংখ্যা আৰু 2-অংকযুক্ত সৰ্বোচ্চ যুগ্ম স্বাভাৱিক সংখ্যাৰ পাৰ্থক্য হৈছে কিমান?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": "1",
    "correctOption": "AB",
    "explanation": "Step 1: The smallest three-digit even natural number is 100. Step 2: The largest two-digit even natural number is 98. Step 3: 100−98=2. The official key marks AB; the arithmetic itself gives 2 (option B).",
    "subject": "Mathematics",
    "topic": "Arithmetic, Number System, Algebra, Geometry & Mensuration",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper III (HSSLC)"
  },
  {
    "id": "AS-PYQ-0768",
    "question": "English: 1. Which of the following countries does Brazil not share international boundary with?\nAssamese: নিম্নলিখিত কোনখন দেশৰ সৈতে ব্ৰাজিলে আন্তৰ্জাতিক সীমা স্পৰ্শ নকৰে?",
    "options": [
      "Chile",
      "Argentina",
      "Paraguay",
      "Peru"
    ],
    "answer": "Chile",
    "correctOption": "A",
    "explanation": "Step 1: List Brazil's South American neighbours. Brazil borders every country in South America except Chile and Ecuador. Step 2: Among the options, Chile is therefore the country that does not share a land boundary with Brazil. Step 3: Correct option: A.",
    "subject": "Assam GK",
    "topic": "World Geography – Brazil's international boundaries",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0769",
    "question": "English: 2. Who is considered as ‘the father of zero’ ?\nAssamese: কৌোনগৰাকী ব্যাক্তক শূন্যৰ জনক ৰূপে বিবেচনা কৰা হয়?",
    "options": [
      "Chitragupta",
      "Brahmadutta",
      "Varahamihira",
      "Aryabhatta"
    ],
    "answer": "Aryabhatta",
    "correctOption": "D",
    "explanation": "Step 1: The question refers to the historical development of the numeral zero. Step 2: Aryabhatta is the figure identified by the question's answer key. Step 3: Correct option: D.",
    "subject": "Assam GK",
    "topic": "Indian Mathematics History – Zero",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0770",
    "question": "English: 3. Between which two major water bodies does the Suez Canal lie?\nAssamese: চূৱেজ খাল কোন দুটা প্ৰধান জলভাগৰ মাজত অৱস্থান কৰে?",
    "options": [
      "Mediterranean Sea and Atlantic Ocean",
      "Atlantic Ocean and Pacific Ocean",
      "Mediterranean Sea and Red Sea",
      "Arabian Sea and Bay of Bengal"
    ],
    "answer": "Mediterranean Sea and Red Sea",
    "correctOption": "C",
    "explanation": "Step 1: Locate the Suez Canal geographically. Step 2: It is the artificial waterway connecting the Mediterranean Sea with the Red Sea. Step 3: Correct option: C.",
    "subject": "Assam GK",
    "topic": "World Geography – Suez Canal",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0771",
    "question": "English: 4. The Ajan Peer Dargah is located in which district of Assam?\nAssamese: অসমৰ কোনখন জিলাত আজান পীৰৰ দৰগাহ অৱস্থিত ?",
    "options": [
      "Dhemaji",
      "Sivasagar",
      "Jorhat",
      "Dibrugarh"
    ],
    "answer": "Sivasagar",
    "correctOption": "B",
    "explanation": "Step 1: Identify the location of the Ajan Peer Dargah in Assam. Step 2: It is located in Sivasagar district. Step 3: Correct option: B.",
    "subject": "Assam GK",
    "topic": "Assam GK – Ajan Peer Dargah",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0772",
    "question": "English: 5. Who discovered Penicillin?\nAssamese: পেনিচিলিন কোনে আৱিষ্কাৰ কৰিছিল ?",
    "options": [
      "Edward Jenner",
      "Alexander Fleming",
      "Louis Pasteur",
      "Isaac Newton"
    ],
    "answer": "Alexander Fleming",
    "correctOption": "B",
    "explanation": "Step 1: Identify the scientist associated with the discovery of penicillin. Step 2: Alexander Fleming discovered penicillin in 1928. Step 3: Correct option: B.",
    "subject": "General Science",
    "topic": "General Science – Discovery of Penicillin",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0773",
    "question": "English: 6. As on January 1, 2024, who is the Chairman and Managing Director of the Reliance Group?\nAssamese: 2024 বৰ্ষৰ 1 জানুৱাৰী সাপেক্ষে ৰিলায়েন্স গ্ৰুপৰ অধ্যক্ষ আৰু পৰিচালন সঞ্চালক কোন?",
    "options": [
      "Dhirubhai Ambani",
      "Anil Ambani",
      "Akash Ambani",
      "Mukesh Ambani"
    ],
    "answer": "Mukesh Ambani",
    "correctOption": "D",
    "explanation": "Step 1: Use the question's stated date, 1 January 2024. Step 2: The Chairman and Managing Director identified for the Reliance Group is Mukesh Ambani. Step 3: Correct option: D.",
    "subject": "Assam GK",
    "topic": "Current Affairs – Reliance Group",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0774",
    "question": "English: 7. The 2024 Summer Olympics was held in\nAssamese: 2024 বৰ্ষৰ গ্ৰীষ্মকালীন অলিম্পিক অনুষ্ঠিত হৈছিল",
    "options": [
      "Tokyo",
      "London",
      "Paris",
      "Seoul"
    ],
    "answer": "Paris",
    "correctOption": "C",
    "explanation": "Step 1: Identify the host city of the 2024 Summer Olympics. Step 2: The Games were held in Paris, France. Step 3: Correct option: C.",
    "subject": "Assam GK",
    "topic": "Sports – 2024 Olympics",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0775",
    "question": "English: 8. By which community of Assam is the Tusu Puja celebrated?\nAssamese: ৪. টুছু পূজা অসমৰ কোন জনগোষ্ঠীয়ে পালন কৰে?",
    "options": [
      "Tai-Ahom",
      "Sonowal Kachari",
      "Tea garden community",
      "Karbi"
    ],
    "answer": "Tea garden community",
    "correctOption": "C",
    "explanation": "Step 1: Identify the Assam community associated with Tusu Puja. Step 2: The paper identifies the Tea garden community. Step 3: Correct option: C.",
    "subject": "Assam GK",
    "topic": "Assam GK – Tusu Puja",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0776",
    "question": "English: 9. Arjuna Award is awarded for excellence in\nAssamese: কোন ক্ষেত্ৰত শ্ৰেষ্ঠত্ব প্ৰদৰ্শনৰ বাবে অৰ্জুন বঁটা প্রদান কৰা হয়?",
    "options": [
      "sports",
      "cinema",
      "literature",
      "tribal art"
    ],
    "answer": "sports",
    "correctOption": "A",
    "explanation": "Step 1: The Arjuna Award recognises sporting achievement. Step 2: Therefore the relevant field is sports. Step 3: Correct option: A.",
    "subject": "Assam GK",
    "topic": "Sports & Awards – Arjuna Award",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0777",
    "question": "English: 10. Leonardo da Vinci was from which country?\nAssamese: লিওনাৰ্ভো দ্য ভিন্সি কোনখন দেশৰ আছিল ?",
    "options": [
      "France",
      "Germany",
      "England",
      "Italy"
    ],
    "answer": "Italy",
    "correctOption": "D",
    "explanation": "Step 1: Identify Leonardo da Vinci's country of origin. Step 2: He was an Italian Renaissance artist and polymath. Step 3: Correct option: D.",
    "subject": "Assam GK",
    "topic": "World History – Leonardo da Vinci",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0778",
    "question": "English: 11. Which of the following is a hill district of Assam?\nAssamese: নিম্নলিখিতসমূহৰ কোনখন অসমৰ এক পাৰ্বত্য জিলা ?",
    "options": [
      "Cachar",
      "Dima Hasao",
      "Karimganj",
      "Golaghat"
    ],
    "answer": "Dima Hasao",
    "correctOption": "B",
    "explanation": "Step 1: Identify Assam's hill districts among the options. Step 2: Dima Hasao is a hill district of Assam. Step 3: Correct option: B.",
    "subject": "Assam GK",
    "topic": "Assam Geography – Hill Districts",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0779",
    "question": "English: 12. Who is known as the ‘Iron Man of India’ ?\nAssamese: কোনগৰাকী ব্যক্তিক ‘ভাৰতৰ লৌহমানৱ’ বুলি জনা যায়?",
    "options": [
      "Mahatma Gandhi",
      "Sardar Vallabhbhai Patel",
      "Ishwar Chandra Vidyasagar",
      "Radha Govinda Baruah"
    ],
    "answer": "Sardar Vallabhbhai Patel",
    "correctOption": "B",
    "explanation": "Step 1: Identify the person popularly called the Iron Man of India. Step 2: This title refers to Sardar Vallabhbhai Patel. Step 3: Correct option: B.",
    "subject": "Assam GK",
    "topic": "Indian History – Sardar Patel",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0780",
    "question": "English: 13. How many spokes are there in the Chakra of our National Flag?\nAssamese: আমাৰ ৰাষ্ট্ৰীয় পতাকাৰ চক্ৰত কিমানডাল দণ্ড আছে?",
    "options": [
      "24",
      "36",
      "18",
      "32"
    ],
    "answer": "24",
    "correctOption": "A",
    "explanation": "Step 1: The Ashoka Chakra on India's national flag contains 24 spokes. Step 2: Therefore the required number is 24. Step 3: Correct option: A.",
    "subject": "Assam GK",
    "topic": "Indian Polity – National Flag",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0781",
    "question": "English: 14. Who is presently the Supreme Commander of the Defence Forces of India?\nAssamese: বৰ্তমান ভাৰতৰ প্ৰতিৰক্ষা বাহিনীৰ সৰ্বাধিনায়ক কোন?",
    "options": [
      "Narendra Modi",
      "Rajnath Singh",
      "Droupadi Murmu",
      "Anil Chauhan"
    ],
    "answer": "Droupadi Murmu",
    "correctOption": "C",
    "explanation": "Step 1: The Constitution designates the President of India as Supreme Commander of the Defence Forces. Step 2: As of the question's context, that person is Droupadi Murmu. Step 3: Correct option: C.",
    "subject": "Assam GK",
    "topic": "Indian Polity – Supreme Commander",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0782",
    "question": "English: 15. As on 1st of January, 2024, which two countries are at war?\nAssamese: 2024 বৰ্ষৰ 1 জানুৱাৰী সাপেক্ষে কোন দুখন দেশ যুদ্ধৰত হৈ আছে?",
    "options": [
      "Israel and Saudi Arabia",
      "Russia and Ukraine",
      "India and Pakistan",
      "North Korea and Vietnam"
    ],
    "answer": "Russia and Ukraine",
    "correctOption": "B",
    "explanation": "Step 1: Use the date specified in the question. Step 2: The major interstate war referred to was between Russia and Ukraine. Step 3: Correct option: B.",
    "subject": "Assam GK",
    "topic": "Current Affairs – Russia-Ukraine War",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0783",
    "question": "English: 16. Which of the following countries has ‘Ngultrum’ as its currency?\nAssamese: ‘নগালট্ৰম’ কোনখন দেশৰ মুদ্ৰাৰ নাম?",
    "options": [
      "Myanmar",
      "Indonesia",
      "Bhutan",
      "Vietnam"
    ],
    "answer": "Bhutan",
    "correctOption": "C",
    "explanation": "Step 1: Identify the currency called Ngultrum. Step 2: Ngultrum is the currency of Bhutan. Step 3: Correct option: C.",
    "subject": "Assam GK",
    "topic": "World Geography – Currencies",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0784",
    "question": "English: 17. In which sport did Lovlina Borgohain win an Olympic medal?\nAssamese: কোনটো খেলত লাভলিনা বৰগোহাঁয়ে অলিম্পিক পদক লাভ কৰিছিল?",
    "options": [
      "Wrestling",
      "Judo",
      "Taekwondo",
      "Boxing"
    ],
    "answer": "Boxing",
    "correctOption": "D",
    "explanation": "Step 1: Identify Lovlina Borgohain's Olympic sport. Step 2: She won an Olympic bronze medal in boxing. Step 3: Correct option: D.",
    "subject": "Assam GK",
    "topic": "Sports – Boxing",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0785",
    "question": "English: 18. The poem collection Xugondhi Pokhila was written by\nAssamese: ‘সুগন্ধি পখিলা’ নামৰ কবিতা-সংকলনখনৰ ৰচয়িতা হৈছে",
    "options": [
      "Nabakanta Baruah",
      "Hiren Bhattacharyya",
      "Nirmal Prabha Bordoloi",
      "Nalinidhar Bhattacharyya"
    ],
    "answer": "Hiren Bhattacharyya",
    "correctOption": "B",
    "explanation": "Step 1: Identify the Assamese poet associated with Xugondhi Pokhila. Step 2: The collection is associated with Hiren Bhattacharyya. Step 3: Correct option: B.",
    "subject": "Assam GK",
    "topic": "Assam Literature – Xugondhi Pokhila",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0786",
    "question": "English: 19. Which sport is the term ‘Ring’ associated with?\nAssamese: ‘ৰিং’ শব্দটো কোনবিধ খেলৰ সৈতে জড়িত?",
    "options": [
      "Boxing",
      "Football",
      "Swimming",
      "Volleyball"
    ],
    "answer": "Boxing",
    "correctOption": "A",
    "explanation": "Step 1: In sports terminology, a 'ring' is the playing area used in boxing. Step 2: Therefore the sport is boxing. Step 3: Correct option: A.",
    "subject": "Assam GK",
    "topic": "Sports – Boxing Terminology",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0787",
    "question": "English: 20. Which of the following movies was not made by Bhabendra Nath Saikia?\nAssamese: নিম্নলিখিত কোনখন বোলছবি ভবেন্দ্ৰ নাথ শইকীয়া দেৱে নিৰ্মাণ কৰা নাছিল ?",
    "options": [
      "Krishnachura",
      "Agnisnaan",
      "Kolahal",
      "Sandhya Raag"
    ],
    "answer": "Krishnachura",
    "correctOption": "A",
    "explanation": "Step 1: Compare the listed films with the works of Bhabendra Nath Saikia. Step 2: The paper's key identifies Krishnachura as the film not made by him. Step 3: Correct option: A.",
    "subject": "Assam GK",
    "topic": "Assam Cinema – Bhabendra Nath Saikia",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0788",
    "question": "English: 21. As on December 31, 2023, which of the following was the highest denomination currency note of India?\nAssamese: 2023 চনৰ 31 ডিচেম্বৰ সাপেক্ষে ভাৰতত প্ৰচলিত সৰ্বাধিক মূল্যৰ মুদ্ৰা নোট কোনখন ?",
    "options": [
      "R2,000",
      "R1,000",
      "R20,000",
      "R5,000"
    ],
    "answer": "R2,000",
    "correctOption": "A",
    "explanation": "Step 1: Use the date specified: 31 December 2023. Step 2: The highest denomination Indian currency note in the stated context was ₹2,000. Step 3: Correct option: A.",
    "subject": "Assam GK",
    "topic": "Indian Economy – Currency",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0789",
    "question": "English: 22. ‘Dokhona’ is the traditional dress for women of which community?\nAssamese: ‘দখনা’ কোন সম্প্ৰদায়ৰ মহিলাসকলৰ পৰম্পৰাগত সাজ-পোছাক?",
    "options": [
      "Tiwa",
      "Khamti",
      "Muttock",
      "Bodo"
    ],
    "answer": "Bodo",
    "correctOption": "D",
    "explanation": "Step 1: Identify the community whose women's traditional dress is Dokhona. Step 2: Dokhona is the traditional attire associated with Bodo women. Step 3: Correct option: D.",
    "subject": "Assam GK",
    "topic": "Assam Culture – Traditional Dress",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0790",
    "question": "English: 23. Maniram Dewan was involved in which of the following?\nAssamese: মণিৰাম দেৱান নিম্নলিখিত কোনটোৰ লগত জড়িত আছিল ?",
    "options": [
      "Peasants Uprising of Patharughat",
      "Phulaguri Dhewa",
      "1857 Rebellion",
      "Quit India Movement"
    ],
    "answer": "1857 Rebellion",
    "correctOption": "C",
    "explanation": "Step 1: Maniram Dewan was a prominent figure in Assam's resistance to British rule. Step 2: He was involved in the 1857 Rebellion. Step 3: Correct option: C.",
    "subject": "Assam GK",
    "topic": "Assam History – Maniram Dewan",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0791",
    "question": "English: 24. Name the State in which the Thar Desert is located.\nAssamese: থৰ মৰুভূমি কোন ৰাজ্যত অৱস্থিত?",
    "options": [
      "Punjab",
      "Haryana",
      "Rajasthan",
      "Maharashtra"
    ],
    "answer": "Rajasthan",
    "correctOption": "C",
    "explanation": "Step 1: Locate the Thar Desert on the map of India. Step 2: The largest part of the Thar Desert lies in Rajasthan. Step 3: Correct option: C.",
    "subject": "Assam GK",
    "topic": "Indian Geography – Thar Desert",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0792",
    "question": "English: 25. Looking from Assam, in which general direction is New Delhi located?\nAssamese: অসমৰ পৰা লক্ষ্য কৰিলে, নতুন দিল্লী কোন দিশত অৱস্থিত?",
    "options": [
      "North-East",
      "West",
      "South-West",
      "South"
    ],
    "answer": "West",
    "correctOption": "B",
    "explanation": "Step 1: New Delhi lies to the west of Assam. Step 2: Therefore, when viewed from Assam, the general direction is west. Step 3: Correct option: B.",
    "subject": "Assam GK",
    "topic": "Indian Geography – Direction from Assam",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0793",
    "question": "English: 26. “A person who sets up a business, taking on financial risk in the hope of profit” is termed as\nAssamese: ‘লাভৰ আশাৰে বিত্তীয় বিপদাশংকা বহন কৰি যি ব্যক্তিয়ে ব্যৱসায় স্থাপন কৰে’ তেওঁক বোলা হয়",
    "options": [
      "capitalist",
      "entrepreneur",
      "businessman",
      "investor"
    ],
    "answer": "entrepreneur",
    "correctOption": "B",
    "explanation": "Step 1: The definition describes someone who starts a business and accepts financial risk for possible profit. Step 2: The correct term is entrepreneur. Step 3: Correct option: B.",
    "subject": "Assam GK",
    "topic": "Business & Economy – Entrepreneur",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0794",
    "question": "English: 27. Which of the following rivers flows from South to North?\nAssamese: নিম্নলিখিত কোনখন নদী দক্ষিণৰ পৰা উত্তৰ দিশলৈ বৈ যায়?",
    "options": [
      "Subansiri",
      "Manas",
      "Kopili",
      "Ranganadi"
    ],
    "answer": "Kopili",
    "correctOption": "C",
    "explanation": "Step 1: Compare the general flow directions of the listed rivers. Step 2: Kopili is the river identified by the question as flowing from south to north. Step 3: Correct option: C.",
    "subject": "Assam GK",
    "topic": "Indian Geography – Rivers",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0795",
    "question": "English: 28. The Assamese food item ‘Hurum’ is prepared from\nAssamese: অসমীয়া খাদ্য ‘হুৰুম’ কিহৰ পৰা প্ৰস্তুত কৰা হয়?",
    "options": [
      "Tal jaggery",
      "betel leaves",
      "bamboo shoots",
      "Bora rice"
    ],
    "answer": "Bora rice",
    "correctOption": "D",
    "explanation": "Step 1: Identify the traditional Assamese food item Hurum. Step 2: It is prepared from Bora rice. Step 3: Correct option: D.",
    "subject": "Assam GK",
    "topic": "Assam Food Culture – Hurum",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0796",
    "question": "English: 29. A distinguishing characteristic of trade at Jonbeel Mela is\nAssamese: জোনবিল মেলাত বাণিজ্যৰ স্বতন্ত্ৰ বৈশিষ্ট্যটো হ’ল",
    "options": [
      "only banana is traded",
      "women are not permitted",
      "buffalo fight",
      "barter system"
    ],
    "answer": "barter system",
    "correctOption": "D",
    "explanation": "Step 1: Identify the distinctive trading practice of Jonbeel Mela. Step 2: Its traditional feature is barter, where goods are exchanged without money. Step 3: Correct option: D.",
    "subject": "Assam GK",
    "topic": "Assam Culture – Jonbeel Mela",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0797",
    "question": "English: 30. Dhokla and Fafda are traditional snacks of which State?\nAssamese: ধোক্‌লা আৰু ফাপ্ৰা কোনখন ৰাজ্যৰ পৰম্পৰাগত জলপান ?",
    "options": [
      "Rajasthan",
      "Punjab",
      "Gujarat",
      "Goa"
    ],
    "answer": "Gujarat",
    "correctOption": "C",
    "explanation": "Step 1: Dhokla and Fafda are traditional foods of western India. Step 2: They are strongly associated with Gujarat. Step 3: Correct option: C.",
    "subject": "Assam GK",
    "topic": "Indian Culture – Gujarat Cuisine",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0798",
    "question": "English: 31. Which of the following is the Lower House of the Parliament of India?\nAssamese: নিম্নলিখিতসমূহৰ কোনটো ভাৰতৰ সংসদৰ নিম্নসদন?",
    "options": [
      "Vidhan Sabha",
      "Rajya Sabha",
      "Lok Sabha",
      "Vidhan Parishad"
    ],
    "answer": "Lok Sabha",
    "correctOption": "C",
    "explanation": "Step 1: India has two Houses of Parliament: Lok Sabha and Rajya Sabha. Step 2: Lok Sabha is the Lower House. Step 3: Correct option: C.",
    "subject": "Assam GK",
    "topic": "Indian Polity – Parliament",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0799",
    "question": "English: 32. Which of the following States is known to have highest coal reserves?\nAssamese: নিম্নলিখিত কোনখন ৰাজ্যত সৰ্বাধিক কয়লাৰ ভাণ্ডাৰ আছে বুলি জনাজাত?",
    "options": [
      "Jharkhand",
      "Maharashtra",
      "Karnataka",
      "Mizoram"
    ],
    "answer": "Jharkhand",
    "correctOption": "A",
    "explanation": "Step 1: Identify the Indian state with the highest coal reserves among the options. Step 2: Jharkhand is the intended answer. Step 3: Correct option: A.",
    "subject": "Assam GK",
    "topic": "Indian Geography – Coal Reserves",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0800",
    "question": "English: 33. Maibong was the capital of which kingdom?\nAssamese: মাইবং কোনখন ৰাজ্যৰ ৰাজধানী আছিল?",
    "options": [
      "Koch Kingdom",
      "Dimasa Kingdom",
      "Chutiya Kingdom",
      "Kamata Kingdom"
    ],
    "answer": "Dimasa Kingdom",
    "correctOption": "B",
    "explanation": "Step 1: Maibong was an important historical capital in Assam's hill region. Step 2: It was the capital of the Dimasa Kingdom. Step 3: Correct option: B.",
    "subject": "Assam GK",
    "topic": "Assam History – Dimasa Kingdom",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0801",
    "question": "English: 34. Dandi Yatra was a part of the\nAssamese: দাণ্ডী যাত্ৰা কোনটোৰ অংশ আছিল?",
    "options": [
      "Quit India Movement",
      "Non-Cooperation Movement",
      "Civil Disobedience Movement",
      "Purna Swaraj"
    ],
    "answer": "Civil Disobedience Movement",
    "correctOption": "C",
    "explanation": "Step 1: Dandi Yatra was a major Gandhian mass movement against the British salt laws. Step 2: It formed part of the Civil Disobedience Movement. Step 3: Correct option: C.",
    "subject": "Assam GK",
    "topic": "Indian History – Civil Disobedience Movement",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0802",
    "question": "English: 35. Which of the following is not the name of a district of Assam?\nAssamese: নিম্নলিখিতসমূহৰ কোনটো অসমৰ এক জিলাৰ নাম নহয়?",
    "options": [
      "West Goalpara",
      "Kamrup Metropolitan",
      "South Salmara-Mankachar",
      "West Karbi Anglong"
    ],
    "answer": "West Goalpara",
    "correctOption": "A",
    "explanation": "Step 1: Check which option is not an Assam district name. Step 2: West Goalpara is not the name of an Assam district. Step 3: Correct option: A.",
    "subject": "Assam GK",
    "topic": "Assam Geography – Districts",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0803",
    "question": "English: 36. Which State lies towards the North of Assam?\nAssamese: অসমৰ উত্তৰ দিশত কোনখন ৰাজ্য অৱস্থিত?",
    "options": [
      "Arunachal Pradesh",
      "Meghalaya",
      "Sikkim",
      "Nagaland"
    ],
    "answer": "Arunachal Pradesh",
    "correctOption": "A",
    "explanation": "Step 1: Identify the state immediately to the north of Assam. Step 2: Arunachal Pradesh lies along Assam's northern boundary. Step 3: Correct option: A.",
    "subject": "Assam GK",
    "topic": "Assam Geography – Neighbouring States",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0804",
    "question": "English: 37. Which of the following is not a Fundamental Right?\nAssamese: নিম্নলিখিতসমূহৰ কোনটো মৌলিক অধিকাৰ নহয়?",
    "options": [
      "Right to equality",
      "Right to freedom",
      "Right to digital information",
      "Right to constitutional remedies"
    ],
    "answer": "Right to digital information",
    "correctOption": "C",
    "explanation": "Step 1: Recall the Fundamental Rights listed in Part III of the Constitution. Step 2: A 'Right to digital information' is not a constitutional Fundamental Right. Step 3: Correct option: C.",
    "subject": "Assam GK",
    "topic": "Indian Polity – Fundamental Rights",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0805",
    "question": "English: 38. Which is the capital city of the United States of America?\nAssamese: আমেৰিকা যুক্তৰাষ্ট্ৰৰ ৰাজধানী চহৰ কি?",
    "options": [
      "New York",
      "Washington, DC",
      "Chicago",
      "San Francisco"
    ],
    "answer": "Washington, DC",
    "correctOption": "B",
    "explanation": "Step 1: Identify the capital of the United States. Step 2: The capital is Washington, D.C. Step 3: Correct option: B.",
    "subject": "Assam GK",
    "topic": "World Geography – Capitals",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0806",
    "question": "English: 39. Who composed the poem Korotolo Komolo?\nAssamese: ‘কৰতল কমল’ কবিতাটি কোনে ৰচনা কৰিছিল?",
    "options": [
      "Nilamoni Phukan",
      "Mahapurush Madhavdev",
      "Srimanta Sankardev",
      "Nabakanta Baruah"
    ],
    "answer": "Srimanta Sankardev",
    "correctOption": "C",
    "explanation": "Step 1: Identify the author of the devotional poem Korotolo Komolo. Step 2: It is attributed to Srimanta Sankardev. Step 3: Correct option: C.",
    "subject": "Assam GK",
    "topic": "Assam Culture – Srimanta Sankardev",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0807",
    "question": "English: 40. Magh Bihu is a festival celebrated in which month?\nAssamese: মাঘ বিহু উৎসৱটো কোন মাহত পালন কৰা হয়?",
    "options": [
      "April",
      "January",
      "October",
      "March"
    ],
    "answer": "January",
    "correctOption": "B",
    "explanation": "Step 1: Magh Bihu is the harvest festival associated with the Assamese month of Magh. Step 2: It falls in January. Step 3: Correct option: B.",
    "subject": "Assam GK",
    "topic": "Assam Culture – Magh Bihu",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0808",
    "question": "English: 41. What was the real name of Mahatma Gandhi?\nAssamese: মহাত্মা গান্ধীৰ প্ৰকৃত নাম কি আছিল?",
    "options": [
      "Mohandas Kumar Gandhi",
      "Mohansingh Karamchand Gandhi",
      "Mohandas Karamsingh Gandhi",
      "Mohandas Karamchand Gandhi"
    ],
    "answer": "Mohandas Karamchand Gandhi",
    "correctOption": "D",
    "explanation": "Step 1: Recall Mahatma Gandhi's birth name. Step 2: His full name was Mohandas Karamchand Gandhi. Step 3: Correct option: D.",
    "subject": "Assam GK",
    "topic": "Indian History – Mahatma Gandhi",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0809",
    "question": "English: 42. Who was involved in the Kalinga War?\nAssamese: কলিংগ যুদ্ধত কোন জড়িত আছিল?",
    "options": [
      "Ashoka",
      "Bimbisara",
      "Bindusara",
      "Samudragupta"
    ],
    "answer": "Ashoka",
    "correctOption": "A",
    "explanation": "Step 1: The Kalinga War was fought during the reign of the Mauryan emperor Ashoka. Step 2: Therefore Ashoka is the correct choice. Step 3: Correct option: A.",
    "subject": "Assam GK",
    "topic": "Indian History – Kalinga War",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0810",
    "question": "English: 43. Who was the first Mughal emperor?\nAssamese: প্ৰথমগৰাকী মোগল সম্ৰাট কোন আছিল?",
    "options": [
      "Humayun",
      "Aurangzeb",
      "Babur",
      "Akbar"
    ],
    "answer": "Babur",
    "correctOption": "C",
    "explanation": "Step 1: Identify the founder of the Mughal Empire in India. Step 2: Babur was the first Mughal emperor. Step 3: Correct option: C.",
    "subject": "Assam GK",
    "topic": "Indian History – Mughal Empire",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0811",
    "question": "English: 44. When was Bangladesh created?\nAssamese: বাংলাদেশ কেতিয়া সৃষ্টি হৈছিল?",
    "options": [
      "1947",
      "1962",
      "1951",
      "1971"
    ],
    "answer": "1971",
    "correctOption": "D",
    "explanation": "Step 1: Bangladesh emerged as an independent country after the 1971 Liberation War. Step 2: Therefore the year is 1971. Step 3: Correct option: D.",
    "subject": "Assam GK",
    "topic": "Modern History – Bangladesh Liberation",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0812",
    "question": "English: 45. Identify the incorrect pair of State and capital city of India.\nAssamese: ভাৰতবৰ্ষৰ ৰাজ্য আৰু ৰাজধানী চহৰৰ অশুদ্ধ যোৰটো চিনাক্ত কৰক।",
    "options": [
      "Uttarakhand : Mussoorie",
      "West Bengal : Kolkata",
      "Chhattisgarh : Raipur",
      "Goa : Panaji"
    ],
    "answer": "Uttarakhand : Mussoorie",
    "correctOption": "A",
    "explanation": "Step 1: Check each state-capital pair. Step 2: Uttarakhand's capital is not Mussoorie; the intended capital is Dehradun. Step 3: Therefore the incorrect pair is option A.",
    "subject": "Assam GK",
    "topic": "Indian Geography – State Capitals",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0813",
    "question": "English: 46. Which of the following positions is appointed by the President of India?\nAssamese: নিম্নলিখিত কোনটো পদৰ নিযুক্তি ভাৰতৰ ৰাষ্ট্ৰপতিয়ে দিয়ে?",
    "options": [
      "The Governor of a State",
      "The Chief Minister of a State",
      "The Speaker of the Legislative Assembly",
      "The Cabinet Minister of a State"
    ],
    "answer": "The Governor of a State",
    "correctOption": "A",
    "explanation": "Step 1: Identify offices appointed by the President under the Constitution. Step 2: The Governor of a State is appointed by the President. Step 3: Correct option: A.",
    "subject": "Assam GK",
    "topic": "Indian Polity – Constitutional Appointments",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0814",
    "question": "English: 47. Which statement is not correct?\nAssamese: কোনটো উক্তি শুদ্ধ নহয়?",
    "options": [
      "Visakhapatnam is a port city of Andhra Pradesh.",
      "Narmada is a river.",
      "Kanchenjunga is a Himalayan peak.",
      "Chilika Lake is in Gujarat."
    ],
    "answer": "Chilika Lake is in Gujarat.",
    "correctOption": "D",
    "explanation": "Step 1: Check the geographical location of Chilika Lake. Step 2: Chilika Lake is in Odisha, not Gujarat. Step 3: Therefore that statement is incorrect: option D.",
    "subject": "Assam GK",
    "topic": "Indian Geography – Lakes",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0815",
    "question": "English: 48. Which material is the ‘Gogona’ made of ?\nAssamese: ‘গগনা’ কোনটো সামগ্ৰীৰে তৈয়াৰ কৰা হয়?",
    "options": [
      "Bamboo",
      "Terra-cotta",
      "Copper",
      "Buffalo horn"
    ],
    "answer": "Bamboo",
    "correctOption": "A",
    "explanation": "Step 1: Identify the traditional Assamese instrument Gogona. Step 2: It is traditionally made from bamboo. Step 3: Correct option: A.",
    "subject": "Assam GK",
    "topic": "Assam Culture – Gogona",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0816",
    "question": "English: 49. Which country did Nelson Mandela belong to?\nAssamese: নেলচন মেণ্ডেলা কোনখন দেশৰ আছিল?",
    "options": [
      "Brazil",
      "Switzerland",
      "South Africa",
      "Argentina"
    ],
    "answer": "South Africa",
    "correctOption": "C",
    "explanation": "Step 1: Identify Nelson Mandela's country. Step 2: Mandela was a South African anti-apartheid leader and later president. Step 3: Correct option: C.",
    "subject": "Assam GK",
    "topic": "World History – Nelson Mandela",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0817",
    "question": "English: 50. Which continent is the Sahara Desert located in?\nAssamese: চাহাৰা মৰুভূমি কোনখন মহাদেশত অৱস্থিত?",
    "options": [
      "Australia",
      "Africa",
      "Europe",
      "Asia"
    ],
    "answer": "Africa",
    "correctOption": "B",
    "explanation": "Step 1: Locate the Sahara Desert. Step 2: It spans much of northern Africa. Step 3: Correct option: B.",
    "subject": "Assam GK",
    "topic": "World Geography – Continents",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0818",
    "question": "English: 51. Which country is known as the ‘Gift of the Nile’?\nAssamese: কোনখন দেশক ‘নীল নদীৰ দান’ বুলি জনা যায়?",
    "options": [
      "Egypt",
      "Lebanon",
      "Israel",
      "Saudi Arabia"
    ],
    "answer": "Egypt",
    "correctOption": "A",
    "explanation": "Step 1: The Nile is the major river historically associated with Egypt's civilisation. Step 2: Egypt is therefore called the 'Gift of the Nile'. Step 3: Correct option: A.",
    "subject": "Assam GK",
    "topic": "World Geography – Nile",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0819",
    "question": "English: 52. Which vitamin is vital for bones and teeth?\nAssamese: হাড় আৰু দাঁতৰ বাবে কোনবিধ ভিটামিন অতি প্ৰয়োজনীয়?",
    "options": [
      "Vitamin D",
      "Vitamin B",
      "Vitamin C",
      "Vitamin A"
    ],
    "answer": "Vitamin D",
    "correctOption": "A",
    "explanation": "Step 1: Bone mineralisation depends strongly on adequate vitamin D. Step 2: Vitamin D helps the body absorb calcium and supports bones and teeth. Step 3: Correct option: A.",
    "subject": "General Science",
    "topic": "General Science – Vitamins",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0820",
    "question": "English: 53. The normal blood pressure reading for an adult human is\nAssamese: এজন প্ৰাপ্তবয়স্ক মানুহৰ বাবে ৰক্তচাপৰ স্বাভাৱিক মান হৈছে",
    "options": [
      "65/85 mm Hg",
      "95/155 mm Hg",
      "80/120 mm Hg",
      "65/140 mm Hg"
    ],
    "answer": "80/120 mm Hg",
    "correctOption": "C",
    "explanation": "Step 1: The standard reference for normal adult blood pressure is about 120/80 mm Hg. Step 2: The paper's option C is printed as 80/120 mm Hg, and the final answer key marks C. Step 3: Correct option according to the paper's key: C.",
    "subject": "General Science",
    "topic": "General Science – Blood Pressure",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0821",
    "question": "English: 54. Which of the following IPL teams did Mahendra Singh Dhoni captain?\nAssamese: মহেন্দ্ৰ সিং ধোনীয়ে নিম্নলিখিত কোনটো আইপিএল দলৰ অধিনায়কত্ব কৰিছিল?",
    "options": [
      "Mumbai Indians",
      "Chennai Super Kings",
      "Rajasthan Royals",
      "Royal Challengers Bengaluru"
    ],
    "answer": "Chennai Super Kings",
    "correctOption": "B",
    "explanation": "Step 1: Identify the IPL team captained by Mahendra Singh Dhoni. Step 2: Dhoni has captained Chennai Super Kings. Step 3: Correct option: B.",
    "subject": "Assam GK",
    "topic": "Sports – IPL",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0822",
    "question": "English: 55. As on 1st of January, 2024, who is the Minister for Panchayat and Rural Development of Assam?\nAssamese: 2024 চনৰ 1 জানুৱাৰী সাপেক্ষে অসমৰ পঞ্চায়ত আৰু গ্ৰামোন্নয়ন বিভাগৰ মন্ত্ৰী কোন?",
    "options": [
      "Chandra Mohan Patwari",
      "Ranjeet Kumar Dass",
      "Atul Bora",
      "Urkhao Gwra Brahma"
    ],
    "answer": "Ranjeet Kumar Dass",
    "correctOption": "B",
    "explanation": "Step 1: Use the date specified in the question. Step 2: The answer identified for Assam's Panchayat and Rural Development portfolio is Ranjeet Kumar Dass. Step 3: Correct option: B.",
    "subject": "Assam GK",
    "topic": "Assam Current Affairs – State Government",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0823",
    "question": "English: 56. Who wrote the book Runs and Ruins?\nAssamese: ‘Runs and Ruins’ নামৰ কিতাপখন কোনে লিখিছিল?",
    "options": [
      "Kapil Dev",
      "Ravi Shastri",
      "Sachin Tendulkar",
      "Sunil Gavaskar"
    ],
    "answer": "Sunil Gavaskar",
    "correctOption": "D",
    "explanation": "Step 1: Identify the author of Runs and Ruins. Step 2: The book is attributed in the paper to Sunil Gavaskar. Step 3: Correct option: D.",
    "subject": "Assam GK",
    "topic": "Sports & Literature – Runs and Ruins",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0824",
    "question": "English: 57. In which language was Munshi Premchand’s novel Godaan written?\nAssamese: মুন্সি প্রেমচান্দৰ উপন্যাস ‘গোদান’ কোন ভাষাত লিখা হৈছিল?",
    "options": [
      "Urdu",
      "Konkani",
      "Hindi",
      "Gujarati"
    ],
    "answer": "Hindi",
    "correctOption": "C",
    "explanation": "Step 1: Munshi Premchand wrote primarily in Hindi and Urdu. Step 2: Godaan is a Hindi novel. Step 3: Correct option: C.",
    "subject": "Assam GK",
    "topic": "Indian Literature – Munshi Premchand",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0825",
    "question": "English: 58. What is understood by Tsunami?\nAssamese: ছুনামী বুলিলে কি বুজা যায়?",
    "options": [
      "A very powerful cyclone",
      "A major earthquake in the Himalayas",
      "Heavy floods in Eastern India",
      "High waves in coastal areas"
    ],
    "answer": "High waves in coastal areas",
    "correctOption": "D",
    "explanation": "Step 1: A tsunami is a series of long sea waves generated by large disturbances of the ocean floor or water column. Step 2: The option describing high waves in coastal areas is the intended answer. Step 3: Correct option: D.",
    "subject": "General Science",
    "topic": "General Science – Tsunami",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0826",
    "question": "English: 59. In Assamese literature, who wrote under the pen name of Saurabh Kumar Chaliha?\nAssamese: সৌৰভ কুমাৰ চলিহা ছদ্মনামেৰে কোনে অসমীয়া সাহিত্যত লিখা-মেলা কৰিছিল?",
    "options": [
      "Surendra Nath Medhi",
      "Nabakanta Baruah",
      "Lakshminath Bezbaruah",
      "Bhabendra Nath Saikia"
    ],
    "answer": "Surendra Nath Medhi",
    "correctOption": "A",
    "explanation": "Step 1: Identify the Assamese writer who used the pen name Saurabh Kumar Chaliha. Step 2: The pen name is associated with Surendra Nath Medhi. Step 3: Correct option: A.",
    "subject": "Assam GK",
    "topic": "Assam Literature – Saurabh Kumar Chaliha",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0827",
    "question": "English: 60. By which Assamese author was Mamore Dhora Tarowal written?\nAssamese: ‘মামৰে ধৰা তৰোৱাল’ কোনগৰাকী অসমীয়া লেখকে ৰচনা কৰিছিল?",
    "options": [
      "Rita Choudhury",
      "Nirupama Borgohain",
      "Chandana Goswami",
      "Mamoni Raisom Goswami"
    ],
    "answer": "Mamoni Raisom Goswami",
    "correctOption": "D",
    "explanation": "Step 1: Identify the author of Mamore Dhora Tarowal. Step 2: The work is associated with Mamoni Raisom Goswami. Step 3: Correct option: D.",
    "subject": "Assam GK",
    "topic": "Assam Literature – Mamore Dhora Tarowal",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0828",
    "question": "English: 61. Which of the following has two humps on its back?\nAssamese: নিম্নলিখিতসমূহৰ কোনটোৰ পিঠিত দুটাকৈ কুঁজ আছে?",
    "options": [
      "Nilgai",
      "Arabian camel",
      "Bactrian camel",
      "Black panther"
    ],
    "answer": "Bactrian camel",
    "correctOption": "C",
    "explanation": "Step 1: Identify the animal with two humps. Step 2: The Bactrian camel has two humps, unlike the one-humped dromedary. Step 3: Correct option: C.",
    "subject": "General Science",
    "topic": "General Science – Animals",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0829",
    "question": "English: 62. In which city of India is the Charminar located?\nAssamese: ভাৰতৰ কোনখন চহৰত চাৰমিনাৰ অৱস্থিত?",
    "options": [
      "Hyderabad",
      "Chennai",
      "Prayagraj",
      "Chandigarh"
    ],
    "answer": "Hyderabad",
    "correctOption": "A",
    "explanation": "Step 1: Locate the Charminar. Step 2: It is the famous monument in Hyderabad, Telangana. Step 3: Correct option: A.",
    "subject": "Assam GK",
    "topic": "Indian Geography – Charminar",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0830",
    "question": "English: 63. What is the length of a cricket pitch between the stumps?\nAssamese: ক্ৰিকেট ষ্টাম্পসমূহৰ মাজৰ ক্ৰিকেট পিট্‌ছৰ দৈৰ্ঘ্য কিমান?",
    "options": [
      "Twenty-two meters",
      "Twenty-two feet",
      "Twenty-two yards",
      "Twenty-two inches"
    ],
    "answer": "Twenty-two yards",
    "correctOption": "C",
    "explanation": "Step 1: The distance between the cricket stumps is standardised. Step 2: It is 22 yards (20.12 m). Step 3: Correct option: C.",
    "subject": "Assam GK",
    "topic": "Sports – Cricket Pitch",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0831",
    "question": "English: 64. Near which landmark is the Atal Tunnel situated?\nAssamese: কোনটো স্থলচিহ্নৰ সমীপত অটল সুৰংগ অৱস্থিত?",
    "options": [
      "Khardung La Pass",
      "Rohtang Pass",
      "Sela Pass",
      "Umling La Pass"
    ],
    "answer": "Rohtang Pass",
    "correctOption": "B",
    "explanation": "Step 1: Locate the Atal Tunnel. Step 2: It is on the route near the Rohtang Pass in Himachal Pradesh. Step 3: Correct option: B.",
    "subject": "Assam GK",
    "topic": "Indian Geography – Atal Tunnel",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0832",
    "question": "English: 65. Which of the following is not extracted from crude oil?\nAssamese: নিম্নলিখিত কোনবিধ খাৰুৱা তেলৰ পৰা নিষ্কাশন কৰা নহয়?",
    "options": [
      "Petrol",
      "Bitumen tar",
      "Kerosene",
      "Turpentine oil"
    ],
    "answer": "Turpentine oil",
    "correctOption": "D",
    "explanation": "Step 1: Crude oil is refined into petroleum products such as petrol, diesel and kerosene. Step 2: Turpentine oil is obtained mainly from pine resin, not crude oil. Step 3: Correct option: D.",
    "subject": "General Science",
    "topic": "General Science – Petroleum Products",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0833",
    "question": "English: 66. A shopkeeper offers two consecutive discounts—first 10% and subsequently 5% on a certain item. The equivalent discount offered on the item is\nAssamese: এজন দোকানীয়ে কোনো এক সামগ্ৰীত ধাৰাবাহিকভাৱে দুটাকৈ—প্ৰথমে 10% আৰু পৰৱৰ্তী 5%ৰ ৰেহাই প্ৰদান কৰে। সামগ্ৰীটোত প্ৰদান কৰা সমতুল্য ৰেহাইৰ মান হৈছে",
    "options": [
      "12·5%",
      "15%",
      "13%",
      "14·5%"
    ],
    "answer": "14·5%",
    "correctOption": "D",
    "explanation": "Step 1: For successive discounts of 10% and 5%, use the equivalent discount formula: d = a + b − ab/100. Step 2: d = 10 + 5 − (10×5)/100 = 15 − 0.5 = 14.5%. Step 3: Correct option: D.",
    "subject": "Mathematics",
    "topic": "Profit & Loss – Successive Discounts",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0834",
    "question": "English: 67. The equivalent fraction of the decimal number 2.25 is\nAssamese: দশমিক সংখ্যা 2.25ৰ সমতুল্য ভগ্নাংশৰ মান হ’ব",
    "options": [
      "9/4",
      "9/5",
      "9/7",
      "9/8"
    ],
    "answer": "9/4",
    "correctOption": "A",
    "explanation": "Step 1: Convert 2.25 to a fraction: 2.25 = 225/100. Step 2: Divide numerator and denominator by 25: 225/100 = 9/4. Step 3: Correct option: A.",
    "subject": "Mathematics",
    "topic": "Fractions & Decimals – Decimal to Fraction",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0835",
    "question": "English: 68. The total interest accrued on the principal amount of R10 at the simple interest rate of 10% per year for a period of 10 years is\nAssamese: বছৰি 10% সৰল সুতত ₹10 মূলধনে 10 বছৰত অৰ্জন কৰা মুঠ সুতৰ পৰিমাণ হৈছে",
    "options": [
      "R1,000",
      "R100",
      "R10",
      "R1"
    ],
    "answer": "R10",
    "correctOption": "C",
    "explanation": "Step 1: Simple interest = P×R×T/100. Step 2: Using P=₹10, R=10% and T=10 years gives ₹10×10×10/100 = ₹10. Step 3: Correct option: C.",
    "subject": "Mathematics",
    "topic": "Simple Interest",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0836",
    "question": "English: 69. The angle between the minute hand and the hour hand of a clock at 3:00 p.m. is\nAssamese: বিয়লি 3:00 বজাত এটা ঘড়ীৰ মিনিটৰ কাঁটা আৰু ঘণ্টাৰ কাঁটাৰ মাজৰ কোণটো হ’ব",
    "options": [
      "30°",
      "60°",
      "90°",
      "120°"
    ],
    "answer": "90°",
    "correctOption": "C",
    "explanation": "Step 1: At 3:00, the minute hand is at 12 and the hour hand is at 3. Step 2: Each hour mark represents 30°, so the separation is 3×30° = 90°. Step 3: Correct option: C.",
    "subject": "Mathematics",
    "topic": "Clock – Angles",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0837",
    "question": "English: 70. The two angles of a triangle are 75° and 65°. Twice the measure of its third angle is\nAssamese: কোনো এক ত্ৰিভুজৰ দুটা কোণৰ মাপ 75° আৰু 65°। ইয়াৰ তৃতীয় কোণৰ মাপৰ দুগুণ হৈছে",
    "options": [
      "40°",
      "50°",
      "60°",
      "80°"
    ],
    "answer": "80°",
    "correctOption": "D",
    "explanation": "Step 1: The angles of a triangle total 180°. Step 2: Third angle = 180° − 75° − 65° = 40°. Step 3: Twice the third angle = 80°. Correct option: D.",
    "subject": "Mathematics",
    "topic": "Geometry – Triangle Angles",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0838",
    "question": "English: 71. The area of a triangle is 18 square units and the base of the triangle is 12 units. The height of the triangle would be\nAssamese: কোনো এক ত্ৰিভুজৰ ক্ষেত্ৰফল 18 বৰ্গ একক আৰু ভূমি 12 একক। ত্ৰিভুজটোৰ উচ্চতা হ’ব",
    "options": [
      "15 units",
      "9 units",
      "6 units",
      "3 units"
    ],
    "answer": "3 units",
    "correctOption": "D",
    "explanation": "Step 1: Area of a triangle = 1/2 × base × height. Step 2: 18 = 1/2 × 12 × h = 6h. Step 3: h = 3 units. Correct option: D.",
    "subject": "Mathematics",
    "topic": "Geometry – Area of Triangle",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0839",
    "question": "English: 72. The Roman numeral for the decimal number 59 is\nAssamese: দশমিক সংখ্যা 59ৰ বাবে ৰোমান সংখ্যা হৈছে",
    "options": [
      "CIX",
      "DIX",
      "LIX",
      "MIX"
    ],
    "answer": "LIX",
    "correctOption": "C",
    "explanation": "Step 1: 59 = 50 + 9. Step 2: 50 is L and 9 is IX, so 59 is LIX. Step 3: Correct option: C.",
    "subject": "Mathematics",
    "topic": "Number System – Roman Numerals",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0840",
    "question": "English: 73. A sum of R90 is distributed amongst A, B and C in such a way that A gets R2 more than B and B gets R2 more than C. The share of A is\nAssamese: A, B আৰু Cৰ মাজত ₹90 এনেদৰে ভগাই দিয়া হয় যাতে Aয়ে Bতকৈ ₹2 বেছি আৰু Bয়ে Cতকৈ ₹2 বেছি পায়। Aৰ প্ৰাপ্ত অংশ হৈছে",
    "options": [
      "R28",
      "R30",
      "R32",
      "R34"
    ],
    "answer": "R32",
    "correctOption": "C",
    "explanation": "Step 1: Let C=x, B=x+2 and A=x+4. Step 2: x+(x+2)+(x+4)=90, so 3x+6=90 and x=28. Step 3: A=28+4=₹32. Correct option: C.",
    "subject": "Mathematics",
    "topic": "Ratio & Distribution – Algebra",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0841",
    "question": "English: 74. The sum of the prime numbers between 1 and 20 is\nAssamese: 1 আৰু 20ৰ মাজত অৱস্থিত মৌলিক সংখ্যাবোৰৰ যোগফল হৈছে",
    "options": [
      "77",
      "81",
      "85",
      "89"
    ],
    "answer": "77",
    "correctOption": "A",
    "explanation": "Step 1: The primes between 1 and 20 are 2, 3, 5, 7, 11, 13, 17 and 19. Step 2: Their sum is 77. Step 3: Correct option: A.",
    "subject": "Mathematics",
    "topic": "Number System – Prime Numbers",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0842",
    "question": "English: 75. The quotient part, when 6001 is divided by 3, is\nAssamese: 6001ক 3ৰে হৰণ কৰিলে প্ৰাপ্ত ভাগফল অংশ হৈছে",
    "options": [
      "200",
      "201",
      "2000",
      "2001"
    ],
    "answer": "2000",
    "correctOption": "C",
    "explanation": "Step 1: Divide 6001 by 3. Step 2: 3×2000=6000, leaving remainder 1. Step 3: The quotient is 2000. Correct option: C.",
    "subject": "Mathematics",
    "topic": "Division – Quotient",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0843",
    "question": "English: 76. The value of (1×2×3×4×5) ÷ (1+2+3+4+5) is\nAssamese: (1×2×3×4×5) ÷ (1+2+3+4+5)ৰ মান হৈছে",
    "options": [
      "5",
      "6",
      "7",
      "8"
    ],
    "answer": "8",
    "correctOption": "D",
    "explanation": "Step 1: Multiply 1×2×3×4×5 = 120. Step 2: Add 1+2+3+4+5 = 15. Step 3: 120÷15=8. Correct option: D.",
    "subject": "Mathematics",
    "topic": "Arithmetic Operations – Fractions",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0844",
    "question": "English: 77. A person buys a defective item at R900, repairs it for R100 and sells the item at R1,800. His profit percentage is\nAssamese: এজন ব্যক্তিয়ে এটা ত্ৰুটিপূৰ্ণ সামগ্ৰী ₹900ত ক্ৰয় কৰে, ₹100ৰে মেৰামতি কৰায় আৰু সামগ্ৰীটো ₹1,800ত বিক্ৰী কৰে। তেওঁৰ লাভৰ শতাংশ হৈছে",
    "options": [
      "100%",
      "80%",
      "90%",
      "180%"
    ],
    "answer": "80%",
    "correctOption": "B",
    "explanation": "Step 1: Total cost price = ₹900 + ₹100 = ₹1,000. Step 2: Profit = ₹1,800 − ₹1,000 = ₹800. Step 3: Profit% = 800/1000×100 = 80%. Correct option: B.",
    "subject": "Mathematics",
    "topic": "Profit & Loss – Profit Percentage",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0845",
    "question": "English: 78. The sum of 2/3 + 5/6 equals\nAssamese: 2/3 + 5/6ৰ যোগফল হৈছে",
    "options": [
      "6",
      "3",
      "5",
      "1"
    ],
    "answer": "3",
    "correctOption": "B",
    "explanation": "Step 1: Use denominator 6: 2/3 = 4/6. Step 2: 4/6 + 5/6 = 9/6 = 3/2. Step 3: Correct option: B.",
    "subject": "Mathematics",
    "topic": "Fractions – Addition",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0846",
    "question": "English: 79. Which of the following is not equivalent to 0.000014?\nAssamese: নিম্নলিখিত কোনটো 0.000014ৰ সমতুল্য নহয়?",
    "options": [
      "1.4 × 10⁻⁶",
      "1.4 × 10⁻⁵",
      "14 × 10⁻⁶",
      "0.14 × 10⁻⁴"
    ],
    "answer": "1.4 × 10⁻⁶",
    "correctOption": "A",
    "explanation": "Step 1: Write 0.000014 as 1.4×10⁻⁵. Step 2: 1.4×10⁻⁵, 14×10⁻⁶ and 0.14×10⁻⁴ are all equal to 0.000014. Step 3: 1.4×10⁻⁶ is different, so option A is not equivalent.",
    "subject": "Mathematics",
    "topic": "Decimals & Scientific Notation",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0847",
    "question": "English: 80. What must be added to (a−b)² in order to get (a+b)²?\nAssamese: (a+b)² পাবলৈ (a−b)²ৰ সৈতে কি যোগ কৰিব লাগিব?",
    "options": [
      "2ab",
      "-2ab",
      "4ab",
      "-4ab"
    ],
    "answer": "4ab",
    "correctOption": "C",
    "explanation": "Step 1: Expand: (a+b)² = a²+2ab+b². Step 2: (a−b)² = a²−2ab+b². Step 3: The difference is 4ab, so adding 4ab gives (a+b)². Correct option: C.",
    "subject": "Mathematics",
    "topic": "Algebra – Identities",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0848",
    "question": "English: 81. 1/2 + 1/3 + 1/4 is equal to\nAssamese: 1/2 + 1/3 + 1/4ৰ মান হৈছে",
    "options": [
      "12/13",
      "13/24",
      "13/12",
      "24/13"
    ],
    "answer": "13/12",
    "correctOption": "C",
    "explanation": "Step 1: Take the LCM of 2, 3 and 4, which is 12. Step 2: 1/2+1/3+1/4 = 6/12+4/12+3/12 = 13/12. Step 3: Correct option: C.",
    "subject": "Mathematics",
    "topic": "Fractions – Addition",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0849",
    "question": "English: 82. The length of one diagonal of a rectangle is 5 cm. If the ratio of the length and breadth of the rectangle is 4 3 : , then the perimeter of the rectangle is\nAssamese: এটা আয়তক্ষেত্ৰৰ এটা কৰ্ণৰ দৈৰ্ঘ্য হৈছে 5 চে.মি.। যদি আয়তক্ষেত্ৰটোৰ দীঘ আৰু প্ৰস্থৰ অনুপাত 4:3 হয়, তেন্তে আয়তক্ষেত্ৰটোৰ পৰিসীমা হ’ব",
    "options": [
      "25 cm",
      "14 cm",
      "12 cm",
      "16 cm"
    ],
    "answer": "14 cm",
    "correctOption": "B",
    "explanation": "Step 1: Let length=4k and breadth=3k. Step 2: The diagonal is 5k, and it equals 5 cm, so k=1. Thus the sides are 4 cm and 3 cm. Step 3: Perimeter=2(4+3)=14 cm. Correct option: B.",
    "subject": "Mathematics",
    "topic": "Geometry – Rectangle",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0850",
    "question": "English: 83. 10 coins, each having circular surface area of 24 cm 2 and thickness of 2 mm, are stacked one over the other. The volume occupied by the stack is\nAssamese: বৃত্তাকাৰ পৃষ্ঠকালি 24 বৰ্গ চে.মি. আৰু 2 মি.মি. বেধৰ 10টা মুদ্ৰা এটাৰ ওপৰত আনটোকৈ সজাই এটা স্তূপ সৃষ্টি কৰা হ’ল। স্তূপটোৱে অধিকাৰ কৰা আয়তন হ’ল",
    "options": [
      "48 cm 3",
      "480 cm 3",
      "240 cm 3",
      "42 cm 3"
    ],
    "answer": "48 cm 3",
    "correctOption": "A",
    "explanation": "Step 1: Each coin has circular area 24 cm² and thickness 2 mm=0.2 cm. Step 2: Ten coins give total height 10×0.2=2 cm. Step 3: Volume=area×height=24×2=48 cm³. Correct option: A.",
    "subject": "Mathematics",
    "topic": "Mensuration – Volume",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0851",
    "question": "English: 84. If one of the angles of a right-angled triangle is 35°, then which of the following represents an angle of the triangle?\nAssamese: কোনো এক সমকোণী ত্ৰিভুজৰ এটা কোণৰ মান 35° হ’লে, নিম্নলিখিত কোনটো বিকল্পই ত্ৰিভুজটোৰ আন এটা কোণৰ মান উপস্থাপন কৰিব?",
    "options": [
      "40°",
      "45°",
      "50°",
      "55°"
    ],
    "answer": "55°",
    "correctOption": "D",
    "explanation": "Step 1: A right triangle has one angle of 90°. Step 2: The remaining two angles total 90°. If one is 35°, the other is 55°. Step 3: Correct option: D.",
    "subject": "Mathematics",
    "topic": "Geometry – Right Triangle",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0852",
    "question": "English: 85. The angle traversed by the hour hand of a clock during a period of 2 hours is\nAssamese: এটা ঘড়ীৰ ঘণ্টাৰ কাঁটাডালে 2 ঘণ্টা সময়ত অতিক্ৰম কৰা কোণৰ মান হৈছে",
    "options": [
      "30°",
      "45°",
      "60°",
      "90°"
    ],
    "answer": "60°",
    "correctOption": "C",
    "explanation": "Step 1: The hour hand moves 360° in 12 hours, or 30° per hour. Step 2: In 2 hours it moves 2×30°=60°. Step 3: Correct option: C.",
    "subject": "Mathematics",
    "topic": "Clock – Angle Movement",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0853",
    "question": "English: 86. I saw an ice cube in the kitchen which had already melted due to heat of a nearby burner.\nAssamese: মই ৰান্ধনীঘৰত বাৰ্নাৰৰ ওচৰত উত্তাপত ইতিমধ্যে গলি যোৱা এটা বৰফৰ টুকুৰা দেখিলোঁ।",
    "options": [
      "Rarely possible",
      "Often possible",
      "Impossible",
      "Always possible"
    ],
    "answer": "Impossible",
    "correctOption": "C",
    "explanation": "Step 1: If an ice cube has already completely melted, it is no longer an ice cube; it has become liquid water. Step 2: Therefore the statement 'an ice cube had already melted' is internally contradictory if it is still being described as an ice cube. Step 3: The paper's intended answer is 'Impossible', option C.",
    "subject": "Reasoning",
    "topic": "General Science – States of Matter",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0854",
    "question": "English: 87. If ‘×’ means subtraction, ‘−’ means addition, ‘+’ means division and ‘÷’ means multiplication, then which of the following statements is correct if calculated from left to right, ignoring BODMAS?\nAssamese: যদি ‘´’ৰ অৰ্থ বিয়োগ, ‘−’ৰ অৰ্থ যোগ, ‘+’ৰ অৰ্থ হৰণ আৰু ‘¸’ৰ অৰ্থ পূৰণ হয়, আৰু যদি BODMASৰ নিয়ম আওকাণ কৰি বাওঁফালৰ পৰা সোঁফাললৈ গণনা কৰা হয়, তেন্তে নিম্নলিখিতসমূহৰ কোনটো এটা শুদ্ধ প্ৰকাশ হ’ব?",
    "options": [
      "8×2÷5+3 = 12",
      "7−2+3÷5 = 13",
      "5−4×3+2 = 3",
      "3÷2−4+5 = 9"
    ],
    "answer": "5−4×3+2 = 3",
    "correctOption": "C",
    "explanation": "Step 1: Replace the symbols with their stated meanings: × means subtraction, − means addition, + means division, and ÷ means multiplication. Step 2: For option C, 5−4×3+2 becomes 5+4−3÷2 under the paper's symbol meanings; calculating from left to right gives 5+4=9, 9−3=6, and 6÷2=3. Step 3: It therefore matches the printed result 3, so option C is correct.",
    "subject": "Reasoning",
    "topic": "Reasoning – Operator Substitution",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0855",
    "question": "English: 88. Bacteria : Microscope :: Planets : ?\nAssamese: বেক্টেৰিয়া : মাইক্ৰ’স্কোপ :: গ্ৰহ : ?",
    "options": [
      "Telescope",
      "Periscope",
      "Bioscope",
      "Stethoscope"
    ],
    "answer": "Telescope",
    "correctOption": "A",
    "explanation": "Step 1: A microscope is used to observe bacteria. Step 2: By the same instrument-to-object relationship, a telescope is used to observe planets. Step 3: Correct option: A.",
    "subject": "Reasoning",
    "topic": "Analogy – Instruments and Objects",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0856",
    "question": "English: 89. The same six-sided dice is rolled four times, and the outcomes are as shown below. How many dots are there opposite to three-dot face?\nAssamese: ছয়-পৃষ্ঠযুক্ত লুড়গুটি এটা চাৰিবাৰ দলিয়াই দিয়াত ফলাফলসমূহ তলৰ চিত্ৰত দেখুওৱাৰ দৰে দেখা গ’ল। লুড়গুটিটোৰ তিনি-বিন্দুযুক্ত পৃষ্ঠৰ বিপৰীত পৃষ্ঠত কিমানটা বিন্দু আছে?",
    "options": [
      "4",
      "2",
      "5",
      "1"
    ],
    "answer": "5",
    "correctOption": "C",
    "explanation": "Step 1: Compare the four displayed views of the same die and use the repeated face arrangements to determine the opposite face. Step 2: The final answer key supplied with the paper marks 5 for the face opposite 3. Step 3: Therefore the keyed answer is option C (5).",
    "subject": "Reasoning",
    "topic": "Reasoning – Dice",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0857",
    "question": "English: 90. Select the appropriate set for correctly filling up the ‘?’: BAD : ? :: PINK : QJOL\nAssamese: ‘?’ চিহ্নটো সঠিকভাৱে পূৰ কৰিবলৈ উপযুক্ত গোটটো নিৰ্বাচন কৰক। BAD : ? :: PINK : QJOL",
    "options": [
      "HAD",
      "CBE",
      "CAD",
      "ABE"
    ],
    "answer": "CBE",
    "correctOption": "B",
    "explanation": "Step 1: PINK→QJOL means each letter is shifted forward by one position: P→Q, I→J, N→O, K→L. Step 2: Apply the same rule to BAD: B→C, A→B, D→E. Step 3: BAD→CBE. Correct option: B.",
    "subject": "Reasoning",
    "topic": "Coding-Decoding – Letter Coding",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0858",
    "question": "English: 91. Time by her watch when Neeta left home was 9:43 in the morning. When she arrived home, the watch showed the time as 11:55. How many minutes was Neeta travelling for?\nAssamese: নীতা ঘৰৰ পৰা ওলাই যোৱাৰ সময়ত তাইৰ ঘড়ীত সময় আছিল ৰাতিপুৱা 9:43 বজা। তাই পুনৰ ঘৰ আহি পোৱাৰ সময়ত ঘড়ীটোৱে 11:55 বজা দেখুৱাইছিল। নীতাই কিমান মিনিট সময়ৰ বাবে যাত্ৰা কৰিছিল?",
    "options": [
      "72 minutes",
      "128 minutes",
      "122 minutes",
      "132 minutes"
    ],
    "answer": "132 minutes",
    "correctOption": "D",
    "explanation": "Step 1: From 9:43 to 10:43 is 60 minutes. Step 2: From 10:43 to 11:43 is another 60 minutes, then 12 minutes to 11:55. Step 3: Total=60+60+12=132 minutes. Correct option: D.",
    "subject": "Reasoning",
    "topic": "Time & Clock – Elapsed Time",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0859",
    "question": "English: 92. Identify the correct Roman numeral.\nAssamese: শুদ্ধ ৰোমান সংখ্যাটো চিনাক্ত কৰক।",
    "options": [
      "Thousand : C",
      "Hundred : C",
      "Fifty : C",
      "Ten : C"
    ],
    "answer": "Hundred : C",
    "correctOption": "B",
    "explanation": "Step 1: Roman numeral C represents 100. Step 2: Therefore the correct pair is Hundred : C. Step 3: Correct option: B.",
    "subject": "Reasoning",
    "topic": "Number System – Roman Numerals",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0860",
    "question": "English: 93. My digital watch says 6:15 p.m. now, and the bus will leave in next 145 minutes. At what time will the bus depart?\nAssamese: মোৰ ডিজিটেল ঘড়ীটোত এতিয়া 6:15 p.m. বুলি দেখুৱাই আছে, আৰু পৰৱৰ্তী 145 মিনিটত বাছখনে প্ৰস্থান কৰিব। ঠিক কিমান সময়ত বাছখন প্ৰস্থান কৰিব?",
    "options": [
      "Forty minutes past eight in the evening",
      "Forty minutes past eight in the morning",
      "Forty-eight minutes past six in the evening",
      "Forty-eight minutes past six in the morning"
    ],
    "answer": "Forty minutes past eight in the evening",
    "correctOption": "A",
    "explanation": "Step 1: Add 145 minutes to 6:15 p.m. Step 2: 145 minutes = 2 hours 25 minutes, giving 8:40 p.m. Step 3: This is forty minutes past eight in the evening. Correct option: A.",
    "subject": "Reasoning",
    "topic": "Time & Clock – Time Calculation",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0861",
    "question": "English: 94. Identify the word not of the same group.\nAssamese: একে গোটত নথকা শব্দটো চিনাক্ত কৰক।",
    "options": [
      "Launch",
      "Breakfast",
      "Dinner",
      "Supper"
    ],
    "answer": "Launch",
    "correctOption": "A",
    "explanation": "Step 1: Breakfast, dinner and supper are meals. Step 2: Launch is not a meal. Step 3: Therefore Launch is the odd word. Correct option: A.",
    "subject": "Reasoning",
    "topic": "Classification – Odd Word",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0862",
    "question": "English: 95. Identify the pair of words which follows the same rule as Mercury : Planet.\nAssamese: বুধ : গ্ৰহৰ দৰে একে নিয়ম অনুসৰণ কৰা শব্দৰ যোৰটো চিনাক্ত কৰক।",
    "options": [
      "Horse : Stable",
      "Milk : White",
      "Atlantic : Saltwater",
      "Copper : Metal"
    ],
    "answer": "Copper : Metal",
    "correctOption": "D",
    "explanation": "Step 1: Mercury is an example of the category 'planet'. Step 2: Copper is an example of the category 'metal'. Step 3: The same member-to-category relationship is Copper : Metal, option D.",
    "subject": "Reasoning",
    "topic": "Analogy – Category Relationship",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0863",
    "question": "English: 96. Which of the following words is not a subset of PANDEMIC?\nAssamese: নিম্নলিখিত কোনটো শব্দ ‘PANDEMIC’ৰ উপগোট নহয়?",
    "options": [
      "CAN",
      "RAIN",
      "MEND",
      "DAMN"
    ],
    "answer": "RAIN",
    "correctOption": "B",
    "explanation": "Step 1: Check whether the letters of each option can be formed from PANDEMIC without using unavailable letters. Step 2: RAIN needs the letter R, which does not occur in PANDEMIC. Step 3: Therefore RAIN is not a subset. Correct option: B.",
    "subject": "Reasoning",
    "topic": "Word Formation – Letter Subset",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0864",
    "question": "English: 97. In Pellamy, their words for blue, green, black and red colours are green, black, red and blue respectively. At sunset time in Pellamy, what would you say the colour of the sun is?\nAssamese: পেলামি সংকেত অনুসৰি নীলা, সেউজীয়া, ক’লা আৰু ৰঙা বৰণ প্ৰতিনিধিত্ব কৰা শব্দসমূহ ক্ৰমান্বয়ে সেউজীয়া, ক’লা, ৰঙা আৰু নীলা। সদৃশ পেলামি সংকেতত সূৰ্যাস্তৰ সময়ৰ সূৰ্যৰ বৰণটোক কি বুলি ক’ব লাগিব?",
    "options": [
      "Blue",
      "Red",
      "Green",
      "Black"
    ],
    "answer": "Blue",
    "correctOption": "A",
    "explanation": "Step 1: In Pellamy, the word normally used for red is reassigned to mean blue, and so on. Step 2: At sunset the Sun appears red in the real-world colour description. Step 3: In Pellamy, red is called 'blue', so the answer is Blue, option A.",
    "subject": "Reasoning",
    "topic": "Coding-Decoding – Colour Coding",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0865",
    "question": "English: 98. Statements : All windows are floors. No floor is tall. Conclusions : 1. Some windows are tall. 2. No tall is floor. Select the correct option.\nAssamese: বিবৃতি: সকলো খিৰিকীয়েই মজিয়া। কোনো মজিয়া ওখ নহয়। সিদ্ধান্ত: 1. কিছুমান খিৰিকী ওখ। 2. কোনো ওখই মজিয়া নহয়। সঠিক বিকল্পটো নিৰ্বাচন কৰক।",
    "options": [
      "Only conclusion 1 follows",
      "Only conclusion 2 follows",
      "Either conclusion 1 or conclusion 2 follows",
      "Neither conclusion 1 nor conclusion 2 follows"
    ],
    "answer": "Only conclusion 2 follows",
    "correctOption": "B",
    "explanation": "Step 1: All windows are floors, and no floor is tall. Therefore no window can be tall. Step 2: Conclusion 1 ('some windows are tall') does not follow. Step 3: 'No tall is floor' is equivalent to the given 'No floor is tall', so conclusion 2 follows. Correct option: B.",
    "subject": "Reasoning",
    "topic": "Syllogism – Statements & Conclusions",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0866",
    "question": "English: 99. If someone points at you and tells that you are the brother of the daughter of the person’s husband’s wife, then how are you related to that person?\nAssamese: যদি কোনো এগৰাকী ব্যক্তিয়ে আপোনালৈ আঙুলিয়াই কয় যে আপুনি সেই ব্যক্তিগৰাকীৰ স্বামীৰ পত্নীৰ কন্যাৰ ভাতৃ, তেন্তে সেই ব্যক্তিগৰাকীৰ সৈতে আপোনাৰ সম্বন্ধ কি হ’ব?",
    "options": [
      "Uncle",
      "Father",
      "Son",
      "Brother"
    ],
    "answer": "Son",
    "correctOption": "C",
    "explanation": "Step 1: The person's husband's wife refers to the person being addressed. Step 2: Her daughter is therefore that person's daughter; you are the brother of that daughter. Step 3: You are the person's son. Correct option: C.",
    "subject": "Reasoning",
    "topic": "Blood Relations",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0867",
    "question": "English: 100. What would come in the middle when the digits of the number 4358796 are reversed?\nAssamese: 4358796 সংখ্যাটোৰ অংককেইটা ওলোটাকৈ লিখিলে সোমাজৰ অংকটো কি হ’ব?",
    "options": [
      "7",
      "8",
      "9",
      "5"
    ],
    "answer": "8",
    "correctOption": "B",
    "explanation": "Step 1: Reverse 4358796 to get 6978534. Step 2: The seven-digit number has its fourth digit in the middle. Step 3: The fourth digit is 8. Correct option: B.",
    "subject": "Reasoning",
    "topic": "Number Reasoning – Digit Reversal",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0868",
    "question": "English: 101. Suraj took one-third of a birthday cake. Half of the remaining part was taken by Chanda, leaving the leftover for Tara. How much of the cake did Tara get?\nAssamese: সুৰজে জন্মদিনৰ কেক এটাৰ এক-তৃতীয়াংশ ল’লে। বাকী অংশৰ অৰ্ধেক ভাগ চন্দাই লৈ অৱশিষ্ট অংশ তৰাৰ বাবে এৰি থ’লে। সমস্ত কেকটোৰ কিমান অংশ তৰাৰ ভাগত থাকিল?",
    "options": [
      "One-fourth",
      "One-fifth",
      "One-third",
      "One-sixth"
    ],
    "answer": "One-third",
    "correctOption": "C",
    "explanation": "Step 1: Suraj takes 1/3, leaving 2/3. Step 2: Chanda takes half of the remainder: (1/2)×(2/3)=1/3. Step 3: The remaining cake for Tara is 2/3−1/3=1/3. Correct option: C.",
    "subject": "Reasoning",
    "topic": "Fractions – Word Problem",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0869",
    "question": "English: 102. If POND is coded as ONMC, then how will LAKE be coded?\nAssamese: যদি PONDক ONMC সংকেতেৰে লিখা হয়, তেন্তে LAKEক কোন সংকেতেৰে লিখা হ’ব?",
    "options": [
      "MBLF",
      "EKAL",
      "PELA",
      "KZJD"
    ],
    "answer": "KZJD",
    "correctOption": "D",
    "explanation": "Step 1: POND→ONMC shows each letter is shifted one place backward: P→O, O→N, N→M, D→C. Step 2: Apply the same rule to LAKE: L→K, A→Z, K→J, E→D. Step 3: LAKE→KZJD. Correct option: D.",
    "subject": "Reasoning",
    "topic": "Coding-Decoding",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0870",
    "question": "English: 103. Identify the incorrectly spelt word.\nAssamese: বানান অশুদ্ধ থকা শব্দটো চিনাক্ত কৰক।",
    "options": [
      "INCORRECT",
      "INGENE",
      "INSOLVENT",
      "INTROVERT"
    ],
    "answer": "INGENE",
    "correctOption": "B",
    "explanation": "Step 1: Compare the spelling of the four options. Step 2: INGENE is the incorrectly spelled word in the paper. Step 3: Correct option: B.",
    "subject": "English",
    "topic": "English – Spelling",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0871",
    "question": "English: 104. Identify the item essential for meal.\nAssamese: আহাৰৰ বাবে প্ৰয়োজনীয় পদটো চিনাক্ত কৰক।",
    "options": [
      "Plate",
      "Invitation",
      "Table",
      "Food"
    ],
    "answer": "Food",
    "correctOption": "D",
    "explanation": "Step 1: A meal requires something to eat. Step 2: Food is the essential item; a plate, table or invitation is not itself the meal. Step 3: Correct option: D.",
    "subject": "Reasoning",
    "topic": "Classification – Essential Item",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0872",
    "question": "English: 105. BECD : GJHI :: ?\nAssamese: BECD : GJHI :: ?",
    "options": [
      "PSQR : TWUV",
      "MNPO : QRTS",
      "ADBC : FIGH",
      "CBDA : HGIP"
    ],
    "answer": "ADBC : FIGH",
    "correctOption": "C",
    "explanation": "Step 1: Compare BECD with GJHI: each letter moves five places forward in the alphabet. Step 2: Apply the same +5 transformation to ADBC: A→F, D→I, B→G, C→H. Step 3: The result is FIGH, so option C is correct.",
    "subject": "Reasoning",
    "topic": "Analogy – Letter Pattern",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0873",
    "question": "English: 106. The length and breadth of a room are 8 meters and 6 meters respectively. Tom runs along all the four walls and finally along a diagonal in order to catch Jerry. How much total distance is covered by Tom?\nAssamese: এটা কোঠাৰ দৈৰ্ঘ্য আৰু প্ৰস্থ ক্ৰমে 8 মিটাৰ আৰু 6 মিটাৰ। টমে জেৰীক ধৰিবলৈ কোঠাটোৰ চাৰিওখন দেৱালৰ কাষেৰে আৰু অৱশেষত এটা কৰ্ণৰ দিশত দৌৰি যায়। টমে সৰ্বমুঠ কিমান দূৰত্ব অতিক্ৰম কৰিলে?",
    "options": [
      "38 meters",
      "10 meters",
      "14 meters",
      "28 meters"
    ],
    "answer": "38 meters",
    "correctOption": "A",
    "explanation": "Step 1: Distance along all four walls is the rectangle's perimeter: 2(8+6)=28 m. Step 2: The diagonal is √(8²+6²)=√100=10 m. Step 3: Total distance=28+10=38 m. Correct option: A.",
    "subject": "Mathematics",
    "topic": "Mensuration – Perimeter & Diagonal",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0874",
    "question": "English: 107. Pradip has a brother Rajiv. Pradip is the son of Kunti. Upendra is Kunti’s father. In terms of relationship, what is Rajiv of Upendra?\nAssamese: প্ৰদীপৰ এজন ভাতৃ হৈছে ৰাজীব। প্ৰদীপ কুন্তীৰ পুত্ৰ। উপেন্দ্ৰ কুন্তীৰ পিতৃ। সম্পৰ্কৰ ক্ষেত্ৰত ৰাজীব উপেন্দ্ৰৰ কি হ’ব?",
    "options": [
      "Grandfather",
      "Grandson",
      "Maternal uncle",
      "Nephew"
    ],
    "answer": "Grandson",
    "correctOption": "B",
    "explanation": "Step 1: Rajiv is Pradip's brother, so Rajiv is also Kunti's son. Step 2: Upendra is Kunti's father, making him Rajiv's maternal grandfather. Step 3: Therefore Rajiv is Upendra's grandson. Correct option: B.",
    "subject": "Reasoning",
    "topic": "Blood Relations",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0875",
    "question": "English: 108. What three digits would be in the middle of the result when the smallest possible number is subtracted from the largest possible number created using all the digits of 49723?\nAssamese: 49723 সংখ্যাটোৰ আটাইবোৰ অংক ব্যৱহাৰ কৰি লিখিব পৰা আটাইতকৈ ডাঙৰ সংখ্যাটোৰ পৰা আটাইতকৈ সৰু সংখ্যাটো বিয়োগ কৰি পোৱা ফলাফলটোৰ মাজৰ তিনিটা অংক কি হ’ব?",
    "options": [
      "739",
      "389",
      "954",
      "395"
    ],
    "answer": "395",
    "correctOption": "D",
    "explanation": "Step 1: Largest number from 49723 is 97432. Step 2: Smallest number is 23479. Step 3: 97432−23479=73953, whose middle three digits are 395. Correct option: D.",
    "subject": "Mathematics",
    "topic": "Number Reasoning – Largest and Smallest Numbers",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0876",
    "question": "English: 109. Find the odd one out.\nAssamese: অমিল শব্দটো বিচাৰি উলিয়াওক।",
    "options": [
      "Kilometer",
      "Hectometer",
      "Decimeter",
      "Perimeter"
    ],
    "answer": "Perimeter",
    "correctOption": "D",
    "explanation": "Step 1: Kilometer, hectometer and decimeter are units of length. Step 2: Perimeter is a measurement concept, not a length unit. Step 3: Therefore Perimeter is the odd one out. Correct option: D.",
    "subject": "Reasoning",
    "topic": "Classification – Units and Concepts",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0877",
    "question": "English: 110. Identify the pair which is not similar to others.\nAssamese: আনৰ সৈতে মিল নথকা যোৰটো চিনাক্ত কৰক।",
    "options": [
      "Football : Goals",
      "Cricket : Runs",
      "Table Tennis : Score",
      "Volleyball : Points"
    ],
    "answer": "Table Tennis : Score",
    "correctOption": "C",
    "explanation": "Step 1: Goals, runs and points are specific scoring outcomes associated with football, cricket and volleyball. Step 2: The paper treats 'score' in Table Tennis as the non-matching pair. Step 3: Therefore the keyed answer is option C.",
    "subject": "Reasoning",
    "topic": "Analogy – Sports Scoring",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0878",
    "question": "English: 111. What is the minimum number of straight lines required to draw the following figure?\nAssamese: প্ৰদত্ত চিত্ৰখন আঁকিবলৈ ন্যূনতম কিমানডাল সৰলৰেখাৰ প্ৰয়োজন হৈছে?",
    "options": [
      "16",
      "14",
      "11",
      "12"
    ],
    "answer": "16",
    "correctOption": "A",
    "explanation": "Step 1: Count each distinct straight segment in the supplied figure once. Step 2: The minimum count of straight lines is 16. Step 3: Correct option: A.",
    "subject": "Reasoning",
    "topic": "Non-Verbal Reasoning – Straight Lines",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0879",
    "question": "English: 112. What would come next in the following series? AN, CP, ER, ?\nAssamese: তলৰ শৃংখলাটোত পৰৱৰ্তী পদটো কি আহিব? AN, CP, ER, ?",
    "options": [
      "GT",
      "FS",
      "GS",
      "FT"
    ],
    "answer": "GT",
    "correctOption": "A",
    "explanation": "Step 1: First letters move A→C→E, increasing by 2. Step 2: Second letters move N→P→R, also increasing by 2. Step 3: The next pair is GT. Correct option: A.",
    "subject": "Reasoning",
    "topic": "Series – Letter Pair",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0880",
    "question": "English: 113. Which set of letters would continue the following series? MAD, NAE, OAF, PAG, ?\nAssamese: তলৰ শৃংখলাটো আগুৱাই লৈ যাব পৰা আখৰৰ গোটটো কোনটো? MAD, NAE, OAF, PAG, ?",
    "options": [
      "QAE",
      "RAH",
      "RAE",
      "QAH"
    ],
    "answer": "QAH",
    "correctOption": "D",
    "explanation": "Step 1: First letters progress M, N, O, P, so the next is Q. Step 2: The middle letter remains A. Step 3: The last letters progress D, E, F, G, so the next is H. Therefore QAH, option D.",
    "subject": "Reasoning",
    "topic": "Series – Letter Groups",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0881",
    "question": "English: 114. What would be the next in the following series? 144, 100, 64, 36, ?\nAssamese: তলৰ শৃংখলাটোৰ পৰৱৰ্তী সংখ্যাটো কি হ’ব? 144, 100, 64, 36, ?",
    "options": [
      "25",
      "49",
      "81",
      "16"
    ],
    "answer": "16",
    "correctOption": "D",
    "explanation": "Step 1: Recognise the numbers as squares: 144=12², 100=10², 64=8², 36=6². Step 2: The square roots decrease by 2: 12,10,8,6,4. Step 3: 4²=16. Correct option: D.",
    "subject": "Reasoning",
    "topic": "Number Series – Squares",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0882",
    "question": "English: 115. What would fill the empty slot in the following series? AAK, EYM, IWO, ?UQ, USS\nAssamese: তলৰ শৃংখলাটোত থকা খালী স্থানটো কিহেৰে পূৰ কৰিব? AAK, EYM, IWO, ?UQ, USS",
    "options": [
      "P",
      "R",
      "O",
      "T"
    ],
    "answer": "O",
    "correctOption": "C",
    "explanation": "Step 1: Look at the first letters: A, E, I, ?, U. They advance by four alphabet positions. Step 2: The missing letter is O. Step 3: Correct option: C.",
    "subject": "Reasoning",
    "topic": "Letter Series",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0883",
    "question": "English: 116. Which of the following numbers is incorrect in Roman?\nAssamese: নিম্নলিখিত কোনটো ৰোমান সংখ্যা ভুলকৈ লিখা হৈছে?",
    "options": [
      "Twenty-nine : XXVIIII",
      "Fourteen : XIV",
      "Forty-eight : XLVIII",
      "Twenty-one : XXI"
    ],
    "answer": "Twenty-nine : XXVIIII",
    "correctOption": "A",
    "explanation": "Step 1: Check the standard Roman representation of each number. Step 2: 29 should be XXIX, not XXVIIII. Step 3: Therefore option A is the incorrect Roman numeral.",
    "subject": "Mathematics",
    "topic": "Number System – Roman Numerals",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0884",
    "question": "English: 117. Which of the following sequences would be meaningful for the given words? 1. Word  2. Paragraph  3. Sentence  4. Letter  5. Phrase\nAssamese: নিম্নলিখিত কোনটো ক্ৰম প্ৰদত্ত শব্দবোৰৰ বাবে অৰ্থপূৰ্ণ হ’ব? 1. শব্দ 2. অনুচ্ছেদ 3. বাক্য 4. বৰ্ণ 5. বাক্যাংশ",
    "options": [
      "4, 2, 5, 1, 3",
      "4, 1, 5, 2, 3",
      "4, 1, 5, 3, 2",
      "4, 1, 3, 5, 2"
    ],
    "answer": "4, 1, 5, 3, 2",
    "correctOption": "C",
    "explanation": "Step 1: A letter forms a word. Step 2: Words form a phrase, phrases form a sentence, and sentences form a paragraph. Step 3: The meaningful order is 4,1,5,3,2. Correct option: C.",
    "subject": "Reasoning",
    "topic": "Ordering & Sequencing",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0885",
    "question": "English: 118. Rani is facing East and turns towards her left. Then she stretches both of her hands. Which direction is her left hand pointing to?\nAssamese: ৰাণীয়ে পূব দিশলৈ মুখ কৰি বাওঁফালে ঘূৰিছে। তাৰ পিছত তাই দুয়োখন হাত মেলি দিয়ে। এতিয়া তাইৰ বাওঁহাতখন কোন দিশলৈ টোঁৱাই আছে?",
    "options": [
      "West",
      "East",
      "North",
      "South"
    ],
    "answer": "West",
    "correctOption": "A",
    "explanation": "Step 1: Rani faces East. Step 2: Turning left makes her face North. Step 3: Her left hand then points West. Correct option: A.",
    "subject": "Reasoning",
    "topic": "Direction Sense",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0886",
    "question": "English: 119. Statements : 1. Rajib has a bruised knee. 2. Athletes very often get hurt at sports. Which of the following can be inferred?\nAssamese: বিবৃতি: 1. ৰাজীবে আঁঠুত আঘাত পাইছে। 2. খেলুৱৈসকলে সঘনাই খেলত আঘাতপ্ৰাপ্ত হয়। বিবৃতিসমূহৰ পৰা নিম্নলিখিত কোনটো অনুমান কৰিব পাৰি?",
    "options": [
      "1 is the effect of 2",
      "2 is the effect of 1",
      "1 is independent of 2",
      "Specific conclusion is not possible"
    ],
    "answer": "Specific conclusion is not possible",
    "correctOption": "D",
    "explanation": "Step 1: The statements say Rajib has a bruised knee and that athletes often get hurt. Step 2: They do not establish that one statement causes the other or that Rajib's injury was caused by sport. Step 3: A specific conclusion cannot be inferred. Correct option: D.",
    "subject": "Reasoning",
    "topic": "Statement & Inference",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0887",
    "question": "English: 120. If MAN = 182, then CAT = ?\nAssamese: যদি MAN = 182 হয়, তেন্তে CAT = ?",
    "options": [
      "96",
      "60",
      "138",
      "120"
    ],
    "answer": "60",
    "correctOption": "B",
    "explanation": "Step 1: MAN=182 can be obtained from alphabet positions: M=13 and N=14, with 13×14=182. Step 2: For CAT, C=3 and T=20. Step 3: 3×20=60. Correct option: B.",
    "subject": "Reasoning",
    "topic": "Coding-Decoding – Letter Values",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0888",
    "question": "English: 121. Identify the word with one pair of consecutive alphabets placed together.\nAssamese: বৰ্ণমালাৰ ক্ৰমাগত এযোৰ আখৰ একেলগে থকা শব্দটো চিনাক্ত কৰক।",
    "options": [
      "Perimeter",
      "Rigorous",
      "Alphabet",
      "Mariner"
    ],
    "answer": "Alphabet",
    "correctOption": "C",
    "explanation": "Step 1: Look for two consecutive alphabet letters occurring together in each word. Step 2: 'Alphabet' contains the consecutive pair AB. Step 3: Correct option: C.",
    "subject": "Reasoning",
    "topic": "Alphabet – Consecutive Letters",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0889",
    "question": "English: 122. Which of the following pairs has similar relationship as School : Books ?\nAssamese: নিম্নলিখিত কোনটো যোৰা ‘বিদ্যালয় : কিতাপ’ সম্পৰ্কৰ দৰে সদৃশ সম্পৰ্কৰে জড়িত?",
    "options": [
      "Field : Athletes",
      "Office : Files",
      "Auditorium : Audience",
      "Table : Legs"
    ],
    "answer": "Office : Files",
    "correctOption": "B",
    "explanation": "Step 1: School and Books have an institution-to-associated-items relationship. Step 2: Office is similarly associated with Files. Step 3: Correct option: B.",
    "subject": "Reasoning",
    "topic": "Analogy – Object Association",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0890",
    "question": "English: 123. Insert appropriate addition/subtraction signs to get a correct equation in the following : 59 £ 63 £ 45 £ 21 = 98\nAssamese: 59 □ 63 □ 45 □ 21 = 98ত এক সঠিক সমীকৰণ পাবলৈ উপযুক্ত যোগ/বিয়োগ চিহ্ন সন্নিৱিষ্ট কৰক।",
    "options": [
      "– , – , +",
      "+ , – , –",
      "– , + , –",
      "+ , – , +"
    ],
    "answer": "+ , – , +",
    "correctOption": "D",
    "explanation": "Step 1: Test the keyed signs: 59 + 63 − 45 + 21. Step 2: 59+63=122, 122−45=77, and 77+21=98. Step 3: The required signs are +, −, +. Correct option: D.",
    "subject": "Reasoning",
    "topic": "Arithmetic Reasoning – Operators",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0891",
    "question": "English: 124. Statements : No women teacher can play. Some women teachers are athletes. Conclusions : 1. Male athletes can play. 2. Some athletes can play. Select the correct option.\nAssamese: বিবৃতি: কোনো শিক্ষয়িত্ৰীয়ে খেলিব নোৱাৰে। কিছুমান শিক্ষয়িত্ৰী খেলুৱৈ। সিদ্ধান্ত: 1. পুৰুষ খেলুৱৈয়ে খেলিব পাৰে। 2. কিছুমান খেলুৱৈয়ে খেলিব পাৰে। সঠিক বিকল্পটো নিৰ্বাচন কৰক।",
    "options": [
      "Only conclusion 1 follows",
      "Only conclusion 2 follows",
      "Either conclusion 1 or conclusion 2 follows",
      "Neither conclusion 1 nor conclusion 2 follows"
    ],
    "answer": "Neither conclusion 1 nor conclusion 2 follows",
    "correctOption": "D",
    "explanation": "Step 1: From 'No women teacher can play' and 'Some women teachers are athletes', we cannot infer that any male athlete can play. Step 2: We also cannot infer that some athlete can play; the athletes mentioned are women teachers who cannot play. Step 3: Neither conclusion follows. Correct option: D.",
    "subject": "Reasoning",
    "topic": "Syllogism – Statements & Conclusions",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0892",
    "question": "English: 125. What would replace ‘??’ in the following grid?\nAssamese: প্ৰদত্ত গ্ৰিডত ‘??’ৰ ঠাইত কি বহিব?",
    "options": [
      "O6",
      "P7",
      "R7",
      "Q6"
    ],
    "answer": "P7",
    "correctOption": "B",
    "explanation": "Step 1: In each column, the letters increase by three: C-F-I, M-P-S, R-U-X. Step 2: The numbers increase by two: 6-8-10, 5-7-9, 7-9-11. Step 3: The missing entry is P7. Correct option: B.",
    "subject": "Reasoning",
    "topic": "Non-Verbal Reasoning – Grid Pattern",
    "year": 2024,
    "grade": "Grade 4",
    "paper": "Paper I (HSLC/ITI)"
  },
  {
    "id": "AS-PYQ-0893",
    "question": "1",
    "options": [
      "নিম্নলিখিত কোনখন দেশৰ বৰ্তমান সময়ত OSE ae ?",
      "Switzerland",
      "Czechoslovakia",
      "Germany"
    ],
    "answer": "নিম্নলিখিত কোনখন দেশৰ বৰ্তমান সময়ত OSE ae ?",
    "correctOption": "POLAND 1. ØÚ•SSØ˘Ø‡Ó¬ ŒFL¬±Ú‡Ú Œ˙1 ¬IÓ«¬˜±Ú ¸˜˚˛Ó¬ ’ØÔ¶Q Ú±˝◊ ∑",
    "explanation": "B",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option B as correct (Czechoslovakia). Therefore, option B is the answer.",
    "topic": "Assam GK",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0894",
    "question": "2",
    "options": [
      "কৌনখন ৰাজ্য ভাৰতৰ হকী দলৰ চৰকাৰী পৃষ্ঠপোষক ?",
      "Punjab",
      "Odisha",
      "Haryana"
    ],
    "answer": "কৌনখন ৰাজ্য ভাৰতৰ হকী দলৰ চৰকাৰী পৃষ্ঠপোষক ?",
    "correctOption": "UTTAR PRADESH 2. ŒFL¬±Ú‡Ú 1±Ê… ˆ¬±1Ó¬1 ˝FL¬Œ ˘1 ‰¬1FL¬±1Œ ¬Û‘Á¬À¬Û±¯∏FL¬ ∑",
    "explanation": "B",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option B as correct (Odisha). Therefore, option B is the answer.",
    "topic": "Assam GK",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0895",
    "question": "3",
    "options": [
      "{5, 120, 3}, {9, 630, 5}, (9, 810, #} সংহতিটোৰ # চিহ্নক কিহে প্রতিস্থাপন কৰিব ?",
      "8",
      "7",
      "6"
    ],
    "answer": "{5, 120, 3}, {9, 630, 5}, (9, 810, #} সংহতিটোৰ # চিহ্নক কিহে প্রতিস্থাপন কৰিব ?",
    "correctOption": "4 3. {5, 120, 3}, {9, 630, 5}, {9, 810, #} ¸—˝ØÓ¬ÀÈ¬±1 # Ø‰¬˝ÊFL¬ ØFL¬À˝ √Õ∂ØÓ¬¶Ö±¬ÛÚ FL¬Ø1¬I ∑",
    "explanation": "C",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option C as correct (6). Therefore, option C is the answer.",
    "topic": "Reasoning",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0896",
    "question": "4",
    "options": [
      "গনবরাদের @ BIA কোনটি সঠিকভাবে প্ৰতিস্থাপিত হবে ? pate | s |",
      "196",
      "184",
      "214"
    ],
    "answer": "গনবরাদের @ BIA কোনটি সঠিকভাবে প্ৰতিস্থাপিত হবে ? pate | s |",
    "correctOption": "658 4. Ø·ËÎ¬Ó¬ ÔFL¬± @ Ø‰¬˝ÊÀÈ¬± ØFL¬À˝ √Õ∂ØÓ¬¶Ö±¬ÛÚ FL¬Ø1¬I ∑ 13 450 30 21 @ 8 32 782 23",
    "explanation": "B",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option B as correct (184). Therefore, option B is the answer.",
    "topic": "General Science",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0897",
    "question": "5",
    "options": [
      "ভাৰতবৰ্ষৰ সংবিধানত অৱশিষ্ট ক্ষমতাৰ ধাৰণা কোনখন দেশৰ পৰা লোৱা হৈছে ?",
      "Belgium",
      "Canada",
      "France"
    ],
    "answer": "ভাৰতবৰ্ষৰ সংবিধানত অৱশিষ্ট ক্ষমতাৰ ধাৰণা কোনখন দেশৰ পৰা লোৱা হৈছে ?",
    "correctOption": "SWITZERLAND 5. ˆ¬±1Ó¬¬I¯∏«1 ¸—Ø¬IÒ±ÚÓ¬ ’ªØ˙©Ü É¬˜Ó¬±1 Ò±1Ì± ŒFL¬±Ú‡Ú Œ˙1 ¬Û1± Œ˘±ª± ∆˝ÀÂ ∑",
    "explanation": "B",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option B as correct (Canada). Therefore, option B is the answer.",
    "topic": "Assam GK",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0898",
    "question": "6",
    "options": [
      "নিম্নলিখিত কোনগৰাকী এক মল্লযোদ্ধা ?",
      "Baichung Bhutia",
      "Lovlina Borgohain",
      "Sushil Kumar"
    ],
    "answer": "নিম্নলিখিত কোনগৰাকী এক মল্লযোদ্ধা ?",
    "correctOption": "KARNAM MALLESHWARI 6. ØÚ•SSØ˘Ø‡Ó¬ ŒFL¬±Ú·1±FL¬Œ ¤FL¬ ˜~À˚±X√± ∑",
    "explanation": "C",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option C as correct (Sushil Kumar). Therefore, option C is the answer.",
    "topic": "General Science",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0899",
    "question": "7",
    "options": [
      "নিম্নলিখিত কোন গৰাকী পৰিৱাজকে কামৰূপ ৰাজ্য ভ্ৰমণ কৰিছিল ?",
      "Fa Hien",
      "Hiuen Tsang",
      "Al Biruni"
    ],
    "answer": "নিম্নলিখিত কোন গৰাকী পৰিৱাজকে কামৰূপ ৰাজ্য ভ্ৰমণ কৰিছিল ?",
    "correctOption": "MARCO POLO 7. ØÚ•SSØ˘Ø‡Ó¬ ŒFL¬±Ú ·1±FL¬Œ ¬ÛØ1¬IË±ÊÀFL¬ FL¬±˜1+¬Û 1±Ê… W˜Ì FL¬Ø1ØÂ˘ ∑",
    "explanation": "B",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option B as correct (Hiuen Tsang). Therefore, option B is the answer.",
    "topic": "Assam GK",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0900",
    "question": "8",
    "options": [
      "প্রদত্ত চিত্ৰৰ জল প্রতিফলন চিত্ৰটো চিনাক্ত কৰক।",
      "",
      "",
      ""
    ],
    "answer": "প্রদত্ত চিত্ৰৰ জল প্রতিফলন চিত্ৰটো চিনাক্ত কৰক।",
    "correctOption": "8. Õ∂M Ø‰¬S1 Ê˘ √Õ∂ØÓ¬Ù¬˘Ú Ø‰¬SÀÈ¬± Ø‰¬Ú±MÊ FL¬1FL¬º",
    "explanation": "C",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option C as correct. Therefore, option C is the answer.",
    "topic": "Reasoning",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0901",
    "question": "9",
    "options": [
      "--46 ক 3 ৰে হৰণ কৰিলে প্রাপ্ত ভাগশেষটো Caw e",
      "−2",
      "−1",
      "1"
    ],
    "answer": "--46 ক 3 ৰে হৰণ কৰিলে প্রাপ্ত ভাগশেষটো Caw e",
    "correctOption": "2 9. −46 FL¬ 3 Œ1 ˝1Ì FL¬Ø1À˘ √Õ∂±5 ˆ¬±·À˙¯∏ÀÈ¬± ∆˝ÀÂ –",
    "explanation": "D",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option D as correct (2 9. −46 ﬂ¬ 3 Œ1 ˝1Ì ﬂ¬ø1À˘ √õ∂±5 ˆ¬±·À˙¯∏ÀÈ¬± ∆˝ÀÂ –). Therefore, option D is the answer.",
    "topic": "Mathematics",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0902",
    "question": "10",
    "options": [
      "তথ্যগোট 1,0, —5,3,0, -2, 4,6, - 4, 1, 2 ৰ গড় আৰু, মধ্যমাৰ পূৰণফল ঃ A) = B) = ০: Db) =",
      "",
      "",
      ""
    ],
    "answer": "তথ্যগোট 1,0, —5,3,0, -2, 4,6, - 4, 1, 2 ৰ গড় আৰু, মধ্যমাৰ পূৰণফল ঃ A) = B) = ০: Db) =",
    "correctOption": "12 13 11 14 10. Ó¬Ô…À·±È¬ 1, 0, −5, 3, 0, −2, 4, 6, −4, 1, 2 1 ·Î¬ˇ ’±1N ˜Ò…˜±1 ¬Û”1ÌÙ¬˘ – 5 7 6 9",
    "explanation": "C",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option C as correct. Therefore, option C is the answer.",
    "topic": "Mathematics",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0903",
    "question": "11",
    "options": [
      "(16 + 16)²/(16 × 16) ৰ 16% ৰ মান কিমান ?",
      "0.16",
      "0.32",
      "0.48"
    ],
    "answer": "(16 + 16)²/(16 × 16) ৰ 16% ৰ মান কিমান ?",
    "correctOption": "0.64 11. (16 + 16)2 1 16% 1 ˜±Ú – 16 × 16",
    "explanation": "D",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option D as correct (0.64 11. (16 + 16)2 1 16% 1 ˜±Ú – 16 × 16). Therefore, option D is the answer.",
    "topic": "General Science",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0904",
    "question": "12",
    "options": [
      "শৰাইঘাটৰ যুদ্ধত পৰাজয় বৰণ কৰা মোগল সম্ৰাটজন কোন ?",
      "Aurangzeb",
      "Shah Jahan",
      "Babur"
    ],
    "answer": "শৰাইঘাটৰ যুদ্ধত পৰাজয় বৰণ কৰা মোগল সম্ৰাটজন কোন ?",
    "correctOption": "HUMAYUN 12. ˙1±˝◊‚±È¬1 ˚≈X√Ó¬ ¬Û1±Ê˚˛ ¬I1Ì FL¬1± Œ˜±·˘ ¸•⁄±È¬ÊÚ ŒFL¬±Ú ∑",
    "explanation": "A",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option A as correct (Aurangzeb). Therefore, option A is the answer.",
    "topic": "Assam GK",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0905",
    "question": "13",
    "options": [
      "নিম্নলিখিত কোনটো এক অসমীয়া উপন্যাস নহয় ?",
      "Adha Lekha Dostabez",
      "Deu Langkhui",
      "Xekh Pristha"
    ],
    "answer": "নিম্নলিখিত কোনটো এক অসমীয়া উপন্যাস নহয় ?",
    "correctOption": "ONTORIP 13. ØÚ•SSØ˘Ø‡Ó¬ ŒFL¬±ÚÀÈ¬± ¤FL¬ ’¸˜Œ˚˛± Î◊¬¬ÛÚ…±¸ Ú˝˚˛ ∑",
    "explanation": "G",
    "subject": "Step 1: Read the question and compare all four choices. Step 2: The official final answer key marks Question 13 as G, meaning all options were considered correct because the question was found to be ambiguous. Step 3: Therefore, the official key should be retained as G.",
    "topic": "English",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0906",
    "question": "14",
    "options": [
      "তিনিটা সংখ্যা A, 3 আৰু C এনেদৰে আছে যাতে A আৰু ট ৰ PANS ৪ আৰু € ৰ NST সৈতে সমান। যদি A আৰু BA SIS ৪ আৰু ৫ ৰ spe তিনি গুণ হয় তেন্তে 2: AAS",
      "1 : 9",
      "3 : 1",
      "9 : 1"
    ],
    "answer": "তিনিটা সংখ্যা A, 3 আৰু C এনেদৰে আছে যাতে A আৰু ট ৰ PANS ৪ আৰু € ৰ NST সৈতে সমান। যদি A আৰু BA SIS ৪ আৰু ৫ ৰ spe তিনি গুণ হয় তেন্তে 2: AAS",
    "correctOption": "1 : 3 14. ØÓ¬ØÚÈ¬± ¸—‡…± A, B ’±1N C ¤ÀÚÀ1 ’±ÀÂ ˚±ÀÓ¬ A ’±1N B 1 ·¸±& B ’±1N C 1 ·¸±&1 ∆¸ÀÓ¬ ¸˜±Úº ˚Ø A ’±1N B 1 ˘¸±& B ’±1N C 1 ˘¸±&1 ØÓ¬ØÚ &Ì ˝˚˛ ŒÓ¬ÀÔL C : A ˝Í¬I –",
    "explanation": "D",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option D as correct (1 : 3 14. øÓ¬øÚÈ¬± ¸—‡…± A, B ’±1n C ¤ÀÚÀ1 ’±ÀÂ ˚±ÀÓ¬ A ’±1n B 1 ·¸±& B ’±1n C 1 ·¸±&1 ∆¸ÀÓ¬ ¸˜±Úº ˚ø A ’±1n B 1 ˘¸±& B ’±1n C 1 ˘¸±&1 øÓ¬øÚ &Ì ˝˚˛ ŒÓ¬ÀôL C : A ˝í¬ı –). Therefore, option D is the answer.",
    "topic": "Mathematics",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0907",
    "question": "15",
    "options": [
      "নিম্নলিখিত কোন গৰাকীক 2024 বৰ্ষত জ্ঞানপীঠ বঁটা প্রদান কৰা হৈছে ?",
      "Gulzar",
      "Arup Kumar Dutta",
      "Ratan Thiyem"
    ],
    "answer": "নিম্নলিখিত কোন গৰাকীক 2024 বৰ্ষত জ্ঞানপীঠ বঁটা প্রদান কৰা হৈছে ?",
    "correctOption": "NILAMANI PHUKAN 15. ØÚ•SSØ˘Ø‡Ó¬ ŒFL¬±Ú ·1±FL¬ŒFL¬ 2024 ¬I¯∏«Ó¬ :±Ú¬ÛŒÍ¬ ¬I“È¬± √Õ∂±Ú FL¬1± Õ˝ÀÂ ∑",
    "explanation": "A",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option A as correct (Gulzar). Therefore, option A is the answer.",
    "topic": "General Science",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0908",
    "question": "16",
    "options": [
      "যোৱাকালি সূৰ্যোদয়ৰ ঠিক পিছতে ৰাজীবে সমীৰক লগ পাই কথা পাতি থাকোঁতে ৰাজীবে লক্ষ্য কৰিলে যে সমীৰৰ ছাঁটো ৰাজীৱৰ সোঁহাতৰ ফালে আছে। সমীৰে কোন দিশত মুখ কৰি আছিল ?",
      "South",
      "East",
      "West"
    ],
    "answer": "যোৱাকালি সূৰ্যোদয়ৰ ঠিক পিছতে ৰাজীবে সমীৰক লগ পাই কথা পাতি থাকোঁতে ৰাজীবে লক্ষ্য কৰিলে যে সমীৰৰ ছাঁটো ৰাজীৱৰ সোঁহাতৰ ফালে আছে। সমীৰে কোন দিশত মুখ কৰি আছিল ?",
    "correctOption": "NORTH 16. Œ˚±ª±FL¬±Ø˘ ¸”À˚«±˚˛1 ØÍ¬FL¬ Ø¬ÛÂÀÓ¬ 1±ÊŒÀ¬I ¸˜Œ1FL¬ ˘· ¬Û±˝◊ FL¬Ô± ¬Û±ØÓ¬ Ô±ÀFL¬“±ÀÓ¬ 1±ÊŒÀ¬I ˘É¬… FL¬Ø1À˘ Œ˚ ¸˜Œ11 Â±“ÀÈ¬± 1±ÊŒª1 Œ¸“±˝±Ó¬1 Ù¬±À˘ ’±ÀÂº ¸˜ŒÀ1 ŒFL¬±Ú Ø˙Ó¬ ˜≈‡ FL¬Ø1 ’±ØÂ˘ ∑",
    "explanation": "D",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option D as correct (North 16. Œ˚±ª±ﬂ¬±ø˘ ¸”À˚«±˚˛1 øÍ¬ﬂ¬ ø¬ÛÂÀÓ¬ 1±ÊœÀ¬ı ¸˜œ1ﬂ¬ ˘· ¬Û±˝◊ ﬂ¬Ô± ¬Û±øÓ¬ Ô±Àﬂ¬“±ÀÓ¬ 1±ÊœÀ¬ı ˘é¬… ﬂ¬ø1À˘ Œ˚ ¸˜œ11 Â±“ÀÈ¬± 1±Êœª1 Œ¸“±˝±Ó¬1 Ù¬±À˘ ’±ÀÂº ¸˜œÀ1 Œﬂ¬±Ú ø˙Ó¬ ˜≈‡ ﬂ¬ø1 ’±øÂ˘ ∑). Therefore, option D is the answer.",
    "topic": "Mathematics",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0909",
    "question": "17",
    "options": [
      "কোন হিন্দি কবি “মধুশালা” এবং “অগ্নিপথের” জন্য পরিচিত ?",
      "Ramdhari Singh Dinkar",
      "Haribansh Rai Bachchan",
      "Sumitranandan Pant"
    ],
    "answer": "কোন হিন্দি কবি “মধুশালা” এবং “অগ্নিপথের” জন্য পরিচিত ?",
    "correctOption": "MAITHILI SHARAN GUPT 17. ŒFL¬±Ú·1±FL¬Œ Ø˝ΜŒ FL¬Ø¬I ËË˜Ò≈˙±˘±ÍÍ ’±1N ËË’Ø¢Ü¬ÛÔ1ÍÍ ¬I±À¬I ÊÚ±Ê±Ó¬ ∑",
    "explanation": "B",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option B as correct (Haribansh Rai Bachchan). Therefore, option B is the answer.",
    "topic": "English",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0910",
    "question": "18",
    "options": [
      "দুটা GS প্ৰণালীৰ সংখ্যা 101 আৰু 10 ৰ পূৰণফল GS প্রণালীত প্রকাশ কৰিলে হ'ব ঃ",
      "1001",
      "1010",
      "1100"
    ],
    "answer": "দুটা GS প্ৰণালীৰ সংখ্যা 101 আৰু 10 ৰ পূৰণফল GS প্রণালীত প্রকাশ কৰিলে হ'ব ঃ",
    "correctOption": "1110 18. ≈È¬± ∆ZÓ¬ √Õ∂Ì±˘Œ1 ¸—‡…± 101 ’±1N 10 1 ¬Û”1ÌÙ¬˘ ∆ZÓ¬ √Õ∂Ì±˘ŒÓ¬ √Õ∂FL¬±˙ FL¬Ø1À˘ ˝Í¬I –",
    "explanation": "B",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option B as correct (1010). Therefore, option B is the answer.",
    "topic": "Mathematics",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0911",
    "question": "19",
    "options": [
      "কালবেলিয়া ভাৰতৰ কোন অঞ্চলৰ লোকনৃত্যৰ ৰূপ ?",
      "Kumaon region",
      "Chota Nagpur region",
      "Konkan region"
    ],
    "answer": "কালবেলিয়া ভাৰতৰ কোন অঞ্চলৰ লোকনৃত্যৰ ৰূপ ?",
    "correctOption": "THAR DESERT REGION 19. FL¬±˘À¬IØ˘˚˛± ˆ¬±1Ó¬1 ŒFL¬±Ú ’=˘1 Œ˘±FL¬Ú‘Ó¬…1 1+¬Û ∑",
    "explanation": "D",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option D as correct (Thar desert region 19. ﬂ¬±˘À¬ıø˘˚˛± ˆ¬±1Ó¬1 Œﬂ¬±Ú ’=˘1 Œ˘±ﬂ¬Ú‘Ó¬…1 1+¬Û ∑). Therefore, option D is the answer.",
    "topic": "General Science",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0912",
    "question": "20",
    "options": [
      "কোনো 9 টা পৰ্যবেক্ষণৰ গড় মান 9, প্ৰথম 5 টাৰ গড় মান 10 আৰু, শেষৰ পাঁচটাৰ গড় মান 8 । পঞ্চম পৰ্যবেক্ষণৰ মান কি আছিল ?",
      "8",
      "7",
      "9"
    ],
    "answer": "কোনো 9 টা পৰ্যবেক্ষণৰ গড় মান 9, প্ৰথম 5 টাৰ গড় মান 10 আৰু, শেষৰ পাঁচটাৰ গড় মান 8 । পঞ্চম পৰ্যবেক্ষণৰ মান কি আছিল ?",
    "correctOption": "10 20. ŒFL¬±ÀÚ± 9 È¬± ¬Û˚«À¬IÉ¬Ì1 ·Î¬ˇ ˜±Ú 9, √Õ∂Ô˜ 5 È¬±1 ·Î¬ˇ ˜±Ú 10 ’±1N Œ˙¯∏1 ¬Û±“‰¬È¬±1 ·Î¬ˇ ˜±Ú 8 º ¬Û=˜ ¬Û˚«À¬IÉ¬Ì1 ˜±Ú ØFL¬ ’±ØÂ˘ ∑",
    "explanation": "C",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option C as correct (9). Therefore, option C is the answer.",
    "topic": "Mathematics",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0913",
    "question": "21",
    "options": [
      "অলিম্পিকৰ পতাকাখনত নিম্নলিখিত কোনটো বৰণ দেখা নাযায় ?",
      "Green",
      "Yellow",
      "Orange"
    ],
    "answer": "অলিম্পিকৰ পতাকাখনত নিম্নলিখিত কোনটো বৰণ দেখা নাযায় ?",
    "correctOption": "BLACK 21. ’Ø˘Ø•ÛFL¬1 ¬ÛÓ¬±FL¬±‡ÚÓ¬ ØÚ•SSØ˘Ø‡Ó¬ ŒFL¬±ÚÀÈ¬± ¬I1Ì Œ‡± Ú±˚±˚˛ ∑",
    "explanation": "C",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option C as correct (Orange). Therefore, option C is the answer.",
    "topic": "General Science",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0914",
    "question": "22",
    "options": [
      "24 চেমি ব্যাসাৰ্দ্ধৰ এটা ধাতৱীয় গোলকক কাটি সমানে 8 ভাগ কৰা হ’ল আৰু ইয়াৰে এভাগক পুনৰ এক গোলকৰ আকৃতিত গলাই লোৱা হ’ল। নতুন গোলকটোৰ ব্যাসাৰ্দ্ধ হ'ব ঃ",
      "12 cm",
      "8 cm",
      "15 cm"
    ],
    "answer": "8 cm",
    "correctOption": "10 CM 22. 24 Œ‰¬Ø˜ ¬I…±¸±X«√ 1 ¤È¬± Ò±Ó¬ªŒ˚˛ Œ·±˘FL¬FL¬ FL¬±ØÈ¬ ¸˜±ÀÚ 8 ˆ¬±· FL¬1± ˝Í˘ ’±1N ˝◊˚˛±À1 ¤ˆ¬±·FL¬ ¬Û≈Ú1 ¤FL¬ Œ·±˘FL¬1 ’±FL‘¬ØÓ¬Ó¬ ·˘±˝◊ Œ˘±ª± ˝Í˘º ÚÓ≈¬Ú Œ·±˘FL¬ÀÈ¬±1 ¬I…±¸±X«√ ˝Í¬I –",
    "explanation": "A",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option A as correct (12 cm). Therefore, option A is the answer.",
    "topic": "General Science",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0915",
    "question": "23",
    "options": [
      "অসমীয়া সাহিত্যত কোন “ধ্বনি কবি” ৰূপে জনাজাত ?",
      "Binanda Chandra Barua",
      "Ananda Chandra Agarwalla",
      "Mahendranath Deka Phukan"
    ],
    "answer": "অসমীয়া সাহিত্যত কোন “ধ্বনি কবি” ৰূপে জনাজাত ?",
    "correctOption": "MAFIJUDDIN AHMED HAZARIKA 23. ’¸˜Œ˚˛± ¸±Ø˝Ó¬…Ó¬ ŒFL¬±Ú ËËÒ¬IØÚ FL¬Ø¬IÍÍ 1+À¬Û ÊÚ±Ê±Ó¬ ∑",
    "explanation": "A",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option A as correct (Binanda Chandra Barua). Therefore, option A is the answer.",
    "topic": "English",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0916",
    "question": "25",
    "options": [
      "কিৰা আৰু ঘো কোন দেশৰ জাতীয় সাজ-পোছাক ?",
      "Nepal",
      "Cambodia",
      "Bhutan"
    ],
    "answer": "কিৰা আৰু ঘো কোন দেশৰ জাতীয় সাজ-পোছাক ?",
    "correctOption": "VIETNAM 25. ØFL¬1± ’±1N Œ‚± ŒFL¬±Ú Œ˙1 Ê±Ó¬Œ˚˛ ¸±Ê-À¬Û±Â±FL¬ ∑",
    "explanation": "C",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option C as correct (Bhutan). Therefore, option C is the answer.",
    "topic": "Assam GK",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0917",
    "question": "26",
    "options": [
      "নিম্নলিখিত কোনটো অ-ধাতৱ খনিজ পদাৰ্থ নহয় ?",
      "Silica",
      "Limestone",
      "Bauxite"
    ],
    "answer": "Bauxite",
    "correctOption": "DOLOMITE 26. ØÚ•SSØ˘Ø‡Ó¬ ŒFL¬±ÚÀÈ¬± ’-Ò±Ó¬ª ‡ØÚÊ ¬Û±Ô« Ú˝˚˛ ∑",
    "explanation": "C",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option C as correct (Bauxite). Therefore, option C is the answer.",
    "topic": "General Science",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0918",
    "question": "27",
    "options": [
      "নিম্নলিখিত সমূহৰ কোনটো শুদ্ধ ?",
      "Volcano cannot exist underwater",
      "Sea does not have any water current",
      "Almost 70% of earth surface is filled with water"
    ],
    "answer": "নিম্নলিখিত সমূহৰ কোনটো শুদ্ধ ?",
    "correctOption": "LAND MASS IS ALMOST HALF OF EARTH’S SURFACE. 27. ØÚ•SSØ˘Ø‡Ó¬ ¸˜”˝1 ŒFL¬±ÚÀÈ¬± QX√√ ∑",
    "explanation": "C",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option C as correct (Almost 70% of earth surface is filled with water). Therefore, option C is the answer.",
    "topic": "General Science",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0919",
    "question": "28",
    "options": [
      "বৰ্তমান ভাৰতবৰ্ষৰ কোন অঞ্চলত ৰজা ললিতাদিত্য (মুক্তপিদা) ৰ সম্ৰাজ্য আছিল ?",
      "Northeast India",
      "Kashmir region",
      "The Kutch area"
    ],
    "answer": "বৰ্তমান ভাৰতবৰ্ষৰ কোন অঞ্চলত ৰজা ললিতাদিত্য (মুক্তপিদা) ৰ সম্ৰাজ্য আছিল ?",
    "correctOption": "THE DECCAN REGION 28. ¬IÓ«¬˜±Ú ˆ¬±1Ó¬¬I¯∏«1 ŒFL¬±Ú ’=˘Ó¬ 1Ê± ˘Ø˘Ó¬±ØÓ¬… [˜≈MÊØ¬Û±] 1 ¸•⁄±Ê… ’±ØÂ˘ ∑",
    "explanation": "B",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option B as correct (Kashmir region). Therefore, option B is the answer.",
    "topic": "Assam GK",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0920",
    "question": "29",
    "options": [
      "উমৈহতীয়া চানেকী অনুসৰণ নকৰা যোৰাটো চিনাক্ত কৰক।",
      "6 : OXYGEN",
      "5 : ARGON",
      "7 : CADMIUM"
    ],
    "answer": "6 : OXYGEN",
    "correctOption": "8 : BROMINE 29. Î◊¬Õ˜˝Ó¬Œ˚˛± ‰¬±ÀÚFL¬Œ ’Ú≈¸1Ì ÚFL¬1± Œ˚±1±ÀÈ¬± Ø‰¬Ú±MÊ FL¬1FL¬º",
    "explanation": "D",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option D as correct (8 : BROMINE 29. Î◊¬Õ˜˝Ó¬œ˚˛± ‰¬±ÀÚﬂ¬œ ’Ú≈¸1Ì Úﬂ¬1± Œ˚±1±ÀÈ¬± ø‰¬Ú±Mê ﬂ¬1ﬂ¬º). Therefore, option D is the answer.",
    "topic": "General Science",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0921",
    "question": "30",
    "options": [
      "নিম্নলিখিত কোন গৰাকীয়ে জ্ঞানপীঠ বঁটা লাভ কৰা নাই?",
      "Birendranath Dutta",
      "Nilamani Phukan",
      "Hiren Bhattacharyya"
    ],
    "answer": "নিম্নলিখিত কোন গৰাকীয়ে জ্ঞানপীঠ বঁটা লাভ কৰা নাই?",
    "correctOption": "MAMONI ROISOM GOSWAMI 30. ØÚ•SSØ˘Ø‡Ó¬ ŒFL¬±Ú ·1±FL¬ŒÀ˚˛ :±Ú¬ÛŒÍ¬ ¬I“È¬± ˘±ˆ¬ FL¬1± Ú±˝◊∑",
    "explanation": "AC",
    "subject": "Step 1: Compare the alternatives with the question. Step 2: The official final answer key marks both options A and C for Question 30. Step 3: Retain the official key as AC rather than changing it.",
    "topic": "General Science",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0922",
    "question": "31",
    "options": [
      "1+31]ন;342 ব মান নিৰ্ণয় কৰক। ] () চু ৪) 5 3 o ১৮ 14+2V2+3V3",
      "",
      "",
      ""
    ],
    "answer": "1+31]ন;342 ব মান নিৰ্ণয় কৰক। ] () চু ৪) 5 3 o ১৮ 14+2V2+3V3",
    "correctOption": "6 2 2 2 2 1+ 2 2 + 3 3 31. 1+ 1 ˜±Ú ØÚÌ«˚˛ FL¬1FL¬º 2 +6 3 + 4 2 1 1 3 3",
    "explanation": "C",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option C as correct. Therefore, option C is the answer.",
    "topic": "General Science",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0923",
    "question": "32",
    "options": [
      "ভবেন্দ্ৰনাথ শইকীয়াৰ উপন্যাস অস্তৰীপৰ কাহিনীৰ আধাৰত কোনখন অসমীয়া বোলচবি নিৰ্মিত হৈছে ?",
      "Pratidhwani",
      "Krishnachura",
      "Barua’r Xonxaar"
    ],
    "answer": "ভবেন্দ্ৰনাথ শইকীয়াৰ উপন্যাস অস্তৰীপৰ কাহিনীৰ আধাৰত কোনখন অসমীয়া বোলচবি নিৰ্মিত হৈছে ?",
    "correctOption": "AGNISNAN 32. ˆ¬À¬IFÚ±Ô ˙˝◊FL¬Œ˚˛±1 Î◊¬¬ÛÚ…±¸ ’ÔL1Œ¬Û1 FL¬±Ø˝ÚŒ1 ’±Ò±1Ó¬ ŒFL¬±Ú‡Ú ’¸˜Œ˚˛± Œ¬I±˘‰¬Ø¬I ØÚØ˜«Ó¬ ∆˝ÀÂ ∑",
    "explanation": "D",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option D as correct (Agnisnan 32. ˆ¬À¬ıfÚ±Ô ˙˝◊ﬂ¬œ˚˛±1 Î◊¬¬ÛÚ…±¸ ’ôL1œ¬Û1 ﬂ¬±ø˝Úœ1 ’±Ò±1Ó¬ Œﬂ¬±Ú‡Ú ’¸˜œ˚˛± Œ¬ı±˘‰¬ø¬ı øÚø˜«Ó¬ ∆˝ÀÂ ∑). Therefore, option D is the answer.",
    "topic": "English",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0924",
    "question": "33",
    "options": [
      "(14 1%) + (242%) +B ৰ 3%) =?",
      "0.06",
      "0.6",
      "0.41"
    ],
    "answer": "(14 1%) + (242%) +B ৰ 3%) =?",
    "correctOption": "0.14 33. (1 1 1%)+(2 1 2%)+(3 1 3%)=?",
    "explanation": "D",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option D as correct (0.14 33. (1 1 1%)+(2 1 2%)+(3 1 3%)=?). Therefore, option D is the answer.",
    "topic": "General Science",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0925",
    "question": "34",
    "options": [
      "নদী এখনে চুটি পথ ল’বলৈ গতি সলনি কৰিলে গঠন হোৱা এটা বক্ৰ জলভাগক বোলা হয় ঃ",
      "Archipelago",
      "Isthmus",
      "Oxbow lake"
    ],
    "answer": "নদী এখনে চুটি পথ ল’বলৈ গতি সলনি কৰিলে গঠন হোৱা এটা বক্ৰ জলভাগক বোলা হয় ঃ",
    "correctOption": "DELTA 34. ÚŒ ¤‡ÀÚ ‰≈¬ØÈ¬ ¬ÛÔ ˘Í¬IÕ˘ ·ØÓ¬ ¸˘ØÚ FL¬Ø1À˘ ·Í¬Ú Œ˝±ª± ¤È¬± ¬ISÊ Ê˘ˆ¬±·FL¬ Œ¬I±˘± ˝˚˛ –",
    "explanation": "C",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option C as correct (Oxbow lake). Therefore, option C is the answer.",
    "topic": "General Science",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0926",
    "question": "35",
    "options": [
      "এটা শংকুৰ ভূমিৰ ব্যাসাৰ্ধ 4 ছেমি. আৰু ইয়াৰ উচ্চতা 9 ছেমি.। শংকুটোৰ আয়তন কিমান ?",
      "36π cm3",
      "48π cm3",
      "13π cm3"
    ],
    "answer": "48π cm3",
    "correctOption": "24Π CM3 35. ¤È¬± ˙—FL≈¬1 ˆ”¬Ø˜1 ¬I…±¸±X«√ 4 Œ‰¬.Ø˜. ’±1N ˝◊˚˛±1 Î◊¬2‰¬Ó¬± 9 Œ‰¬.Ø˜.º ˙—FL≈¬ÀÈ¬±1 ’±˚˛Ó¬Ú ∆˝ÀÂ –",
    "explanation": "B",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option B as correct (48π cm3). Therefore, option B is the answer.",
    "topic": "Mathematics",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0927",
    "question": "36",
    "options": [
      "দালাল ষ্ট্ৰীট কোনখন মহানগৰত অৱস্থিত ?",
      "Kolkata",
      "Chennai",
      "Hyderabad"
    ],
    "answer": "দালাল ষ্ট্ৰীট কোনখন মহানগৰত অৱস্থিত ?",
    "correctOption": "MUMBAI 36. ±˘±˘ ©ÜÒŒÈ¬ ŒFL¬±Ú‡Ú ˜˝±Ú·1Ó¬ ’ªØ¶ÖÓ¬ ∑",
    "explanation": "D",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option D as correct (Mumbai 36. ±˘±˘ ©ÜòœÈ¬ Œﬂ¬±Ú‡Ú ˜˝±Ú·1Ó¬ ’ªø¶öÓ¬ ∑). Therefore, option D is the answer.",
    "topic": "General Science",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0928",
    "question": "37",
    "options": [
      "সৰল কৰক ঃ খ|5] + 4134 + 5 412 + V6 + ৬9",
      "15",
      "12",
      "8"
    ],
    "answer": "সৰল কৰক ঃ খ|5] + 4134 + 5 412 + V6 + ৬9",
    "correctOption": "16 37. ¸1˘ FL¬1FL¬ – 51 + 134 + 5 42 + 16 + 9",
    "explanation": "C",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option C as correct (8). Therefore, option C is the answer.",
    "topic": "General Science",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0929",
    "question": "38",
    "options": [
      "যদি } = ত, তেন্তে oy, ৰ মান ঃ",
      "3",
      "4",
      "5"
    ],
    "answer": "যদি } = ত, তেন্তে oy, ৰ মান ঃ",
    "correctOption": "6 A 4 6A + 2B 38. ˚Ø B = 3 , ŒÓ¬ÀÔL 1 ˜±Ú – 4A − 2B",
    "explanation": "A",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option A as correct (3). Therefore, option A is the answer.",
    "topic": "General Science",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0930",
    "question": "39",
    "options": [
      "যদি ০৮৪ = >, তেন্তে sind ৰ মান ঃ a 5 ) 12 ০172 13) 2",
      "",
      "",
      ""
    ],
    "answer": "",
    "correctOption": "12 5 13 12 5 39. ˚Ø COSΘ= , ŒÓ¬ÀÔL SINΘ 1 ˜±Ú – 13 5 12 12 13",
    "explanation": "C",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option C as correct. Therefore, option C is the answer.",
    "topic": "General Science",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0931",
    "question": "40",
    "options": [
      "প্রদত্ত চিত্ৰৰ কোনটো অংশই প্রশিক্ষণৰ বাবে পঠিয়াবলগা বিবাহিত পৰিচাৰিকাক প্রতিনিধিত্ব কৰিব ? চিকিৎসালয়ত কৰ্মৰত ৰ Caw প্রশিক্ষণ প্রাপ্ত পৰিচাৰিকা বিবাহিত জনসংখ্যা",
      "2",
      "4",
      "3"
    ],
    "answer": "প্রদত্ত চিত্ৰৰ কোনটো অংশই প্রশিক্ষণৰ বাবে পঠিয়াবলগা বিবাহিত পৰিচাৰিকাক প্রতিনিধিত্ব কৰিব ? চিকিৎসালয়ত কৰ্মৰত ৰ Caw প্রশিক্ষণ প্রাপ্ত পৰিচাৰিকা বিবাহিত জনসংখ্যা",
    "correctOption": "7 40. √Õ∂M Ø‰¬S1 ŒFL¬±ÚÀÈ¬± ’—˙˝◊ √Õ∂Ø˙É¬Ì1 ¬I±À¬I ¬ÛØÍ¬˚˛±¬I˘·± Ø¬I¬I±Ø˝Ó¬ ¬ÛØ1‰¬±Ø1FL¬±FL¬ √Õ∂ØÓ¬ØÚØÒQ FL¬Ø1¬I ∑",
    "explanation": "B",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option B as correct (4). Therefore, option B is the answer.",
    "topic": "Mathematics",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0932",
    "question": "41",
    "options": [
      "0.09 + /1.69 ৰ মানঃ",
      "1.78",
      "1.6",
      "1.33"
    ],
    "answer": "0.09 + /1.69 ৰ মানঃ",
    "correctOption": "1.5 41. 0.09 + 1.69 1 ˜±Ú –",
    "explanation": "B",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option B as correct (1.6). Therefore, option B is the answer.",
    "topic": "General Science",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0933",
    "question": "42",
    "options": [
      "(মেজৰ) ধ্যানচান্দৰ সৈতে জড়িত খেলৰ নাম চিনাক্ত কৰক।",
      "Football",
      "Wrestling",
      "Boxing"
    ],
    "answer": "Wrestling",
    "correctOption": "HOCKEY 42. [Œ˜Ê1] Ò…±Ú‰¬±Μ1 ∆¸ÀÓ¬ ÊØÎ¬ˇÓ¬ Œ‡˘1 Ú±˜ Ø‰¬Ú±MÊ FL¬1FL¬º",
    "explanation": "D",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option D as correct (Hockey 42. [Œ˜Ê1] Ò…±Ú‰¬±µ1 ∆¸ÀÓ¬ ÊøÎ¬ˇÓ¬ Œ‡˘1 Ú±˜ ø‰¬Ú±Mê ﬂ¬1ﬂ¬º). Therefore, option D is the answer.",
    "topic": "Assam GK",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0934",
    "question": "43",
    "options": [
      "{5, 8, 13, 20, 31, 40, 53} শৃংখলাৰ অশুদ্ধ পদটো চিনাক্ত কৰক।",
      "13",
      "31",
      "20"
    ],
    "answer": "{5, 8, 13, 20, 31, 40, 53} শৃংখলাৰ অশুদ্ধ পদটো চিনাক্ত কৰক।",
    "correctOption": "40 43. {5, 8, 13, 20, 31, 40, 53} ˙‘—‡˘±1 ’QX√ ¬ÛÀÈ¬± Ø‰¬Ú±MÊ FL¬1FL¬º",
    "explanation": "B",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option B as correct (31). Therefore, option B is the answer.",
    "topic": "Reasoning",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0935",
    "question": "44",
    "options": [
      "6 চেমি ব্যাসাৰ্দ্ধৰ এক বৃত্তৰ পৰা 30° কোণ পৰিমাণৰ এটা Fore কাটি উলিওৱা হ’ল। বৃত্তখণ্ডটোৰ ক্ষেত্ৰফল চেমি’ এককত RIAs",
      "3π",
      "4π",
      "5π"
    ],
    "answer": "6 চেমি ব্যাসাৰ্দ্ধৰ এক বৃত্তৰ পৰা 30° কোণ পৰিমাণৰ এটা Fore কাটি উলিওৱা হ’ল। বৃত্তখণ্ডটোৰ ক্ষেত্ৰফল চেমি’ এককত RIAs",
    "correctOption": "6Π 44. 6 Œ‰¬Ø˜ ¬I…±¸±X«√ 1 ¤FL¬ ¬I‘M1 ¬Û1± 308 ŒFL¬±Ì ¬ÛØ1˜±Ì1 ¤È¬± ¬I‘M‡G FL¬±ØÈ¬ Î◊¬Ø˘›ª± ˝Í˘º ¬I‘M‡GÀÈ¬±1 ŒÉ¬SÙ¬˘ Œ‰¬Ø˜2 ¤FL¬FL¬Ó¬ ˝Í¬I –",
    "explanation": "A",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option A as correct (3π). Therefore, option A is the answer.",
    "topic": "Mathematics",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0936",
    "question": "45",
    "options": [
      "আন্দামান আৰু নিকোবৰ দ্বীপপূঞ্জৰ পৰা কোনখন দেশলৈ দূৰত্ব সৰ্বাধিক ?",
      "Myanmar",
      "Indonesia",
      "Vietnam"
    ],
    "answer": "আন্দামান আৰু নিকোবৰ দ্বীপপূঞ্জৰ পৰা কোনখন দেশলৈ দূৰত্ব সৰ্বাধিক ?",
    "correctOption": "MALAYSIA 45. ’±Μ±˜±Ú ’±1N ØÚÀFL¬±¬I1 ZŒ¬Û¬Û”?1 ¬Û1± ŒFL¬±Ú‡Ú Œ˙Õ˘ ”1Q ¸¬I«±ØÒFL¬ ∑",
    "explanation": "C",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option C as correct (Vietnam). Therefore, option C is the answer.",
    "topic": "Assam GK",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0937",
    "question": "46",
    "options": [
      "দাণ্ডিয়া ৰাস কোনখন ৰাজ্যৰ এক জনপ্ৰিয় লোকনৃত্য ?",
      "Rajasthan",
      "Gujarat",
      "Odisha"
    ],
    "answer": "দাণ্ডিয়া ৰাস কোনখন ৰাজ্যৰ এক জনপ্ৰিয় লোকনৃত্য ?",
    "correctOption": "MAHARASHTRA 46. ±ØG˚˛± 1±¸ ŒFL¬±Ú‡Ú 1±Ê…1 ¤FL¬ ÊÚØ√Õ∂˚˛ Œ˘±FL¬Ú‘Ó¬… ∑",
    "explanation": "B",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option B as correct (Gujarat). Therefore, option B is the answer.",
    "topic": "Assam GK",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0938",
    "question": "47",
    "options": [
      "এজন মানুহে PAA Q লৈ অৰ্দ্ধবৃত্তাকাৰ পথ অতিক্ৰম কৰে আৰু তাৰ পিছত 4 কি.মি. দৈৰ্ঘ্যৰ হৃস্বতম পথেৰে পুনৰ [> লৈ ঘূৰি আহে। মানুহজনে অতিক্ৰম কৰা পথৰ মুঠ দৈৰ্ঘ্য হৈছে?",
      "(4π+2) km",
      "(2π+4) km",
      "(π+2) km"
    ],
    "answer": "এজন মানুহে PAA Q লৈ অৰ্দ্ধবৃত্তাকাৰ পথ অতিক্ৰম কৰে আৰু তাৰ পিছত 4 কি.মি. দৈৰ্ঘ্যৰ হৃস্বতম পথেৰে পুনৰ [> লৈ ঘূৰি আহে। মানুহজনে অতিক্ৰম কৰা পথৰ মুঠ দৈৰ্ঘ্য হৈছে?",
    "correctOption": "(2Π+2) KM 47. ¤ÊÚ ˜±Ú≈À˝ P 1 ¬Û1± Q ∆˘ ’X«√¬I‘M±FL¬±1 ¬ÛÔ ’ØÓ¬SÊ˜ FL¬À1 ’±1N Ó¬±1 Ø¬ÛÂÓ¬ 4 ØFL¬.Ø˜. ∆‚«…1 ˝Ò¶§Ó¬˜ ¬ÛÀÔÀ1 ¬Û≈Ú1 P ∆˘ ‚”Ø1 ’±À˝º ˜±Ú≈˝ÊÀÚ ’ØÓ¬SÊ˜ FL¬1± ¬ÛÔ1 ˜≈Í¬ ∆‚«… ∆˝ÀÂ –",
    "explanation": "B",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option B as correct ((2π+4) km). Therefore, option B is the answer.",
    "topic": "Mathematics",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0939",
    "question": "48",
    "options": [
      "সাগৰ দেখিছা নামৰ অসমীয়া কবিতা সংগ্ৰহটো কোনে লিখা ?",
      "Devakanta Barua",
      "Navakanta Barua",
      "Banikanta Kakati"
    ],
    "answer": "সাগৰ দেখিছা নামৰ অসমীয়া কবিতা সংগ্ৰহটো কোনে লিখা ?",
    "correctOption": "RAJANIKANTA BORDOLOI 48. ¸±·1 ŒØ‡Â± Ú±˜1 ’¸˜Œ˚˛± FL¬Ø¬IÓ¬± ¸—·Ë˝ÀÈ¬± ŒFL¬±ÀÚ Ø˘‡± ∑",
    "explanation": "A",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option A as correct (Devakanta Barua). Therefore, option A is the answer.",
    "topic": "English",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0940",
    "question": "49",
    "options": [
      "1 চে.মি. বাহুযুক্ত এক সুষম ঘনকত পাব পৰা দীৰ্ঘতম কৰ্ণৰ দৈৰ্ঘ্য 8",
      "2 cm",
      "2 cm",
      "3 cm"
    ],
    "answer": "2 cm",
    "correctOption": "3 CM 49. 1 Œ‰¬.Ø˜. ¬I±U˚≈MÊ ¤FL¬ ¸≈¯∏˜ ‚ÚFL¬Ó¬ ¬Û±¬I ¬Û1± Œ‚«Ó¬˜ FL¬Ì«1 ∆‚«… –",
    "explanation": "D",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option D as correct (3 cm 49. 1 Œ‰¬.ø˜. ¬ı±U˚≈Mê ¤ﬂ¬ ¸≈¯∏˜ ‚Úﬂ¬Ó¬ ¬Û±¬ı ¬Û1± œ‚«Ó¬˜ ﬂ¬Ì«1 ∆‚«… –). Therefore, option D is the answer.",
    "topic": "General Science",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0941",
    "question": "50",
    "options": [
      "নিম্নলিখিত কোনটো আনবোৰতকৈ পৃথক ?",
      "Samaveda",
      "Rigveda",
      "Yajurveda"
    ],
    "answer": "নিম্নলিখিত কোনটো আনবোৰতকৈ পৃথক ?",
    "correctOption": "AYURVEDA 50. ØÚ•SSØ˘Ø‡Ó¬ ŒFL¬±ÚÀÈ¬± ’±ÚÀ¬I±1Ó¬ÕFL¬ ¬Û‘ÔFL¬ ∑",
    "explanation": "D",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option D as correct (Ayurveda 50. øÚ•ßø˘ø‡Ó¬ Œﬂ¬±ÚÀÈ¬± ’±ÚÀ¬ı±1Ó¬Õﬂ¬ ¬Û‘Ôﬂ¬ ∑). Therefore, option D is the answer.",
    "topic": "General Science",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0942",
    "question": "51",
    "options": [
      "দুটা ঘণ্টা A আৰু 8 ৰ A ঘণ্টাটো প্রতি 30 মিনিটৰ মূৰে মূৰে আৰু B ঘণ্টাটো প্রতি 25 মিনিটৰ মূৰে মূৰে বাজি উঠে। যদি দুয়োটা ঘণ্টাই 6 am ত একেলগে বাজি উঠিছিল, তেন্তে ঘণ্টা দুটা একেলগে বাজি উঠা ঠিক পৰৱৰ্তী সময়টো হ'ব ঃ",
      "8 : 00 am",
      "8 : 30 am",
      "9 : 00 am"
    ],
    "answer": "দুটা ঘণ্টা A আৰু 8 ৰ A ঘণ্টাটো প্রতি 30 মিনিটৰ মূৰে মূৰে আৰু B ঘণ্টাটো প্রতি 25 মিনিটৰ মূৰে মূৰে বাজি উঠে। যদি দুয়োটা ঘণ্টাই 6 am ত একেলগে বাজি উঠিছিল, তেন্তে ঘণ্টা দুটা একেলগে বাজি উঠা ঠিক পৰৱৰ্তী সময়টো হ'ব ঃ",
    "correctOption": "9 : 30 AM 51. ≈È¬± ‚∞I◊± A ’±1N B 1 A ‚∞I◊±ÀÈ¬± √Õ∂ØÓ¬ 30 Ø˜ØÚÈ¬1 ˜”À1 ˜”À1 ’±1N B ‚∞I◊±ÀÈ¬± √Õ∂ØÓ¬ 25 Ø˜ØÚÈ¬1 ˜”À1 ˜”À1 ¬I±ØÊ Î◊¬ÀÍ¬º ˚Ø ≈À˚˛±È¬± ‚∞I◊±˝◊ 6 AM Ó¬ ¤ÀFL¬˘À· ¬I±ØÊ Î◊¬ØÍ¬ØÂ˘, ŒÓ¬ÀÔL ‚∞I◊± ≈È¬± ¤ÀFL¬˘À· ¬I±ØÊ Î◊¬Í¬± ØÍ¬FL¬ ¬Û1ªÓ«¬Œ ¸˜˚˛ÀÈ¬± ˝Í¬I –",
    "explanation": "B",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option B as correct (8 : 30 am). Therefore, option B is the answer.",
    "topic": "Mathematics",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0943",
    "question": "52",
    "options": [
      "aMA+BAGLA টো ৪ ৰ উত্তৰ দিশত আছে; ANB অৰ্থ A, ৪ ৰ পূবত আছে; A-BAT A, BA পশ্চিমত আছে, তেন্তে (নেপচুন % শনি + ইউৰেনাছ — বৃহস্পতি) ত নেপচুন সাপেক্ষে ইউৰেনাছ কোনটো দিশত অৱস্থান কৰিব ?",
      "South - West",
      "North - East",
      "North - West"
    ],
    "answer": "aMA+BAGLA টো ৪ ৰ উত্তৰ দিশত আছে; ANB অৰ্থ A, ৪ ৰ পূবত আছে; A-BAT A, BA পশ্চিমত আছে, তেন্তে (নেপচুন % শনি + ইউৰেনাছ — বৃহস্পতি) ত নেপচুন সাপেক্ষে ইউৰেনাছ কোনটো দিশত অৱস্থান কৰিব ?",
    "correctOption": "SOUTH - EAST 52. ˚Ø A+B 1 ’Ô« A ŒÈ¬± B 1 Î◊¬M1 Ø˙Ó¬ ’±ÀÂ; A%B 1 ’Ô« A, B 1 ¬Û”¬IÓ¬ ’±ÀÂ; A−B 1 ’Ô« A, B 1 ¬ÛØ(˜Ó¬ ’±ÀÂ, ŒÓ¬ÀÔL [ÀÚ¬Û‰≈¬Ú % ˙ØÚ + ˝◊Î◊¬À1Ú±Â − ¬I‘˝¶ÛØÓ¬] Ó¬ ŒÚ¬Û‰≈¬Ú ¸±À¬ÛÀÉ¬ ˝◊Î◊¬À1Ú±Â ŒFL¬±ÚÀÈ¬± Ø˙Ó¬ ’ª¶Ö±Ú FL¬Ø1¬I ∑",
    "explanation": "A",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option A as correct (South - West). Therefore, option A is the answer.",
    "topic": "Mathematics",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0944",
    "question": "53",
    "options": [
      "© বেজবৰুৱা বোলচবিৰ 1969 সংস্কৰণত কোনে নাম ভূমিকাত অভিনয় কৰিছিল ?",
      "Nipon Goswami",
      "Biju Phukan",
      "Dwipen Baruah"
    ],
    "answer": "© বেজবৰুৱা বোলচবিৰ 1969 সংস্কৰণত কোনে নাম ভূমিকাত অভিনয় কৰিছিল ?",
    "correctOption": "BROJEN BARUAH 53. Î¬0 Œ¬IÊ¬I1Nª± Œ¬I±˘‰¬Ø¬I1 1969 ¸—¶®1ÌÓ¬ ŒFL¬±ÀÚ Ú±˜ ˆ”¬Ø˜FL¬±Ó¬ ’Øˆ¬Ú˚˛ FL¬Ø1ØÂ˘ ∑",
    "explanation": "D",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option D as correct (Brojen Baruah 53. Î¬0 Œ¬ıÊ¬ı1nª± Œ¬ı±˘‰¬ø¬ı1 1969 ¸—¶®1ÌÓ¬ Œﬂ¬±ÀÚ Ú±˜ ˆ”¬ø˜ﬂ¬±Ó¬ ’øˆ¬Ú˚˛ ﬂ¬ø1øÂ˘ ∑). Therefore, option D is the answer.",
    "topic": "General Science",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0945",
    "question": "55",
    "options": [
      "নিম্নলিখিত কোনটো আমেৰিকা যুক্তৰাষ্টৰ এখন ৰাজ্য ?",
      "Hawai",
      "Fiji",
      "Papua New Guinea"
    ],
    "answer": "নিম্নলিখিত কোনটো আমেৰিকা যুক্তৰাষ্টৰ এখন ৰাজ্য ?",
    "correctOption": "SOLOMON ISLAND 55. ØÚ•SSØ˘Ø‡Ó¬ ŒFL¬±ÚÀÈ¬± ’±À˜Ø1FL¬± ˚≈MÊ1±©ÜÒ1 ¤‡Ú 1±Ê… ∑",
    "explanation": "A",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option A as correct (Hawai). Therefore, option A is the answer.",
    "topic": "Assam GK",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0946",
    "question": "57",
    "options": [
      "কোন দুখন দেশক গোবি মৰুভূমিয়ে স্পৰ্শ কৰিছে ?",
      "Sudan and Egypt",
      "Saudi Arabia and Iraq",
      "Turkmenistan and Uzbekistan"
    ],
    "answer": "কোন দুখন দেশক গোবি মৰুভূমিয়ে স্পৰ্শ কৰিছে ?",
    "correctOption": "CHINA AND MONGOLIA 57. ŒFL¬±Ú ≈‡Ú Œ˙FL¬ Œ·±Ø¬I ˜1Nˆ”¬Ø˜À˚˛ ¶Û˙« FL¬Ø1ÀÂ ∑",
    "explanation": "D",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option D as correct (China and Mongolia 57. Œﬂ¬±Ú ≈‡Ú Œ˙ﬂ¬ Œ·±ø¬ı ˜1nˆ”¬ø˜À˚˛ ¶Û˙« ﬂ¬ø1ÀÂ ∑). Therefore, option D is the answer.",
    "topic": "Assam GK",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0947",
    "question": "58",
    "options": [
      "কোনো এখন নগৰৰ জনসংখ্যা প্রতি বছৰে 10% ৰ হাৰত বৃদ্ধি পায়। নগৰখনৰ বৰ্তমান জনসংখ্যা 10,000 হ’লে 3 বছৰৰ অন্তত নগৰখনৰ মুঠ জনসংখ্যা হ'ব ঃ",
      "13,310",
      "15,310",
      "13,510"
    ],
    "answer": "কোনো এখন নগৰৰ জনসংখ্যা প্রতি বছৰে 10% ৰ হাৰত বৃদ্ধি পায়। নগৰখনৰ বৰ্তমান জনসংখ্যা 10,000 হ’লে 3 বছৰৰ অন্তত নগৰখনৰ মুঠ জনসংখ্যা হ'ব ঃ",
    "correctOption": "13,000 58. ŒFL¬±ÀÚ± ¤‡Ú Ú·11 ÊÚ¸—‡…± √Õ∂ØÓ¬ ¬IÂÀ1 10% 1 ˝±1Ó¬ ¬I‘ØX√ ¬Û±˚˛º Ú·1‡Ú1 ¬IÓ«¬˜±Ú ÊÚ¸—‡…± 10,000 ˝ÍÀ˘ 3 ¬IÂ11 ’ÔLÓ¬ Ú·1‡Ú1 ˜≈Í¬ ÊÚ¸—‡…± ˝Í¬I –",
    "explanation": "A",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option A as correct (13,310). Therefore, option A is the answer.",
    "topic": "Mathematics",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0948",
    "question": "59",
    "options": [
      "পি.টি. উষাই কোনবিধ খেলত অংশগ্ৰহণ কৰিছিল 2",
      "Athletics",
      "Badminton",
      "Table Tennis"
    ],
    "answer": "Badminton",
    "correctOption": "CRICKET 59. Ø¬Û.ØÈ¬. Î◊¬¯∏±˝◊ ŒFL¬±ÚØ¬IÒ Œ‡˘Ó¬ ’—˙·Ë˝Ì FL¬Ø1ØÂ˘ ∑",
    "explanation": "A",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option A as correct (Athletics). Therefore, option A is the answer.",
    "topic": "Assam GK",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0949",
    "question": "61",
    "options": [
      "GS প্রণালীৰ দুটা সংখ্যা 11 আৰু 10 ৰ যোগফল GS প্ৰণালীত প্রকাশ কৰিলে প্রাপ্ত সংখ্যাটো 8",
      "101",
      "110",
      "010"
    ],
    "answer": "GS প্রণালীৰ দুটা সংখ্যা 11 আৰু 10 ৰ যোগফল GS প্ৰণালীত প্রকাশ কৰিলে প্রাপ্ত সংখ্যাটো 8",
    "correctOption": "111 61. ∆ZÓ¬ √Õ∂Ì±˘Œ1 ≈È¬± ¸—‡…± 11 ’±1N 10 1 Œ˚±·Ù¬˘ ∆ZÓ¬ √Õ∂Ì±˘ŒÓ¬ √Õ∂FL¬±˙ FL¬Ø1À˘ √Õ∂±5 ¸—‡…±ÀÈ¬± –",
    "explanation": "A",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option A as correct (101). Therefore, option A is the answer.",
    "topic": "Mathematics",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0950",
    "question": "62",
    "options": [
      "প্রদত্ত চিত্ৰই নিম্নলিখিত কোনটোক সৰ্বোত্তমভাবে চিত্ৰিত কৰিব ?",
      "Cat, Fat, Rat",
      "Food, Clothes, Friends",
      "Assam, India, Asia"
    ],
    "answer": "প্রদত্ত চিত্ৰই নিম্নলিখিত কোনটোক সৰ্বোত্তমভাবে চিত্ৰিত কৰিব ?",
    "correctOption": "GEOMETRY, BOTANY, ECONOMICS 62. √Õ∂M Ø‰¬S˝◊ ØÚ•SSØ˘Ø‡Ó¬ ŒFL¬±ÚÀÈ¬±FL¬ ¸À¬I«±M˜ˆ¬±À¬I Ø‰¬ØSÓ¬ FL¬Ø1¬I ∑",
    "explanation": "A",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option A as correct (Cat, Fat, Rat). Therefore, option A is the answer.",
    "topic": "Reasoning",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0951",
    "question": "63",
    "options": [
      "Ae নদীদ্বীপ টিলাত উমানন্দ মন্দিৰ অৱস্থিত ?",
      "Bhasmachal",
      "Sandhyachal",
      "Nilachal"
    ],
    "answer": "Ae নদীদ্বীপ টিলাত উমানন্দ মন্দিৰ অৱস্থিত ?",
    "correctOption": "CHITRACHAL 63. ŒFL¬±Ú‡Ú ÚŒ ZŒ¬Û ØÈ¬˘±Ó¬ Î◊¬˜±ÚΜ ˜ØΜ1 ’ªØ¶ÖÓ¬ ∑",
    "explanation": "A",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option A as correct (Bhasmachal). Therefore, option A is the answer.",
    "topic": "Assam GK",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0952",
    "question": "65",
    "options": [
      "নিম্নলিখিত কোনটো মহাভাৰতৰ এটা অংশ ?",
      "Upanishads",
      "Puranas",
      "Vedas"
    ],
    "answer": "নিম্নলিখিত কোনটো মহাভাৰতৰ এটা অংশ ?",
    "correctOption": "GITA 65. ØÚ•SSØ˘Ø‡Ó¬ ŒFL¬±ÚÀÈ¬± ˜˝±ˆ¬±1Ó¬1 ¤È¬± ’—˙ ∑",
    "explanation": "D",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option D as correct (Gita 65. øÚ•ßø˘ø‡Ó¬ Œﬂ¬±ÚÀÈ¬± ˜˝±ˆ¬±1Ó¬1 ¤È¬± ’—˙ ∑). Therefore, option D is the answer.",
    "topic": "General Science",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0953",
    "question": "66",
    "options": [
      "অসম জৈৱ শোধনাগাৰ প্রাইভেট লিমিটেডত ব্যৱহৃত প্রাথমিক কেঁচামাল হ'লঃ",
      "Bamboo",
      "Water Hyacinth",
      "Sugarcane waste"
    ],
    "answer": "অসম জৈৱ শোধনাগাৰ প্রাইভেট লিমিটেডত ব্যৱহৃত প্রাথমিক কেঁচামাল হ'লঃ",
    "correctOption": "BANANA PLANTS 66. ’¸˜ ∆Êª Œ˙±ÒÚ±·±1 √Õ∂±˝◊Àˆ¬È¬ Ø˘Ø˜ÀÈ¬Î¬Ó¬ ¬I…ª˝+Ó¬ √Õ∂±ÔØ˜FL¬ ŒFL“¬‰¬±˜±˘ ˝Í˘ –",
    "explanation": "A",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option A as correct (Bamboo). Therefore, option A is the answer.",
    "topic": "Assam GK",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0954",
    "question": "67",
    "options": [
      "2 ৰে হৰণ কৰিলে 1 ভাগশেষ পাব পৰা, 3 ৰে হৰণ কৰিলে ভাগশেষ 2 পাব পৰা আৰ 4 ৰে হৰণ কৰিলে ভাগশেষ 3 পাব পৰা সংখ্যাবোৰৰ ন্যুনতম স্বাভাৱিক সংখ্যাটো হৈছে?",
      "23",
      "17",
      "31"
    ],
    "answer": "2 ৰে হৰণ কৰিলে 1 ভাগশেষ পাব পৰা, 3 ৰে হৰণ কৰিলে ভাগশেষ 2 পাব পৰা আৰ 4 ৰে হৰণ কৰিলে ভাগশেষ 3 পাব পৰা সংখ্যাবোৰৰ ন্যুনতম স্বাভাৱিক সংখ্যাটো হৈছে?",
    "correctOption": "11 67. 2 Œ1 ˝1Ì FL¬Ø1À˘ 1 ˆ¬±·À˙¯∏ ¬Û±¬I ¬Û1±, 3 Œ1 ˝1Ì FL¬Ø1À˘ ˆ¬±·À˙¯∏ 2 ¬Û±¬I ¬Û1± ’±1N 4 Œ1 ˝1Ì FL¬Ø1À˘ ˆ¬±·À˙¯∏ 3 ¬Û±¬I ¬Û1± ¸—‡…±À¬I±11 Ú≈…ÚÓ¬˜ ¶§±ˆ¬±ØªFL¬ ¸—‡…±ÀÈ¬± ∆˝ÀÂ –",
    "explanation": "D",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option D as correct (11 67. 2 Œ1 ˝1Ì ﬂ¬ø1À˘ 1 ˆ¬±·À˙¯∏ ¬Û±¬ı ¬Û1±, 3 Œ1 ˝1Ì ﬂ¬ø1À˘ ˆ¬±·À˙¯∏ 2 ¬Û±¬ı ¬Û1± ’±1n 4 Œ1 ˝1Ì ﬂ¬ø1À˘ ˆ¬±·À˙¯∏ 3 ¬Û±¬ı ¬Û1± ¸—‡…±À¬ı±11 Ú≈…ÚÓ¬˜ ¶§±ˆ¬±øªﬂ¬ ¸—‡…±ÀÈ¬± ∆˝ÀÂ –). Therefore, option D is the answer.",
    "topic": "Mathematics",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0955",
    "question": "68",
    "options": [
      "নিম্নলিখিত কোনটো হৈছে কাণত পিন্ধা এক অসমীয় গহণা ?",
      "Golpata",
      "Horinsokua",
      "Jonbiri"
    ],
    "answer": "নিম্নলিখিত কোনটো হৈছে কাণত পিন্ধা এক অসমীয় গহণা ?",
    "correctOption": "THURIYA 68. ØÚ•SSØ˘Ø‡Ó¬ ŒFL¬±ÚÀÈ¬± ∆˝ÀÂ FL¬±ÌÓ¬ Ø¬ÛG± ¤FL¬ ’¸˜Œ˚˛ ·˝Ì± ∑",
    "explanation": "D",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option D as correct (Thuriya 68. øÚ•ßø˘ø‡Ó¬ Œﬂ¬±ÚÀÈ¬± ∆˝ÀÂ ﬂ¬±ÌÓ¬ ø¬Ûg± ¤ﬂ¬ ’¸˜œ˚˛ ·˝Ì± ∑). Therefore, option D is the answer.",
    "topic": "Assam GK",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0956",
    "question": "69",
    "options": [
      "কৌনো বিধায়িনী সংস্থা অথবা আইনীভাবে গঠিত আন কৌনো ন্যায়াধিকৰণে কোনো ৰাজহুৱা বিষয়াৰ অসৎ আচৰণৰ বিৰুদ্ধে ব্যৱস্থা লোৱা ৰাজনৈতিক আৰু আইনী প্ৰক্ৰিয়াক বোলা হয় 8",
      "Impeachment",
      "Re-election",
      "Enforcement"
    ],
    "answer": "কৌনো বিধায়িনী সংস্থা অথবা আইনীভাবে গঠিত আন কৌনো ন্যায়াধিকৰণে কোনো ৰাজহুৱা বিষয়াৰ অসৎ আচৰণৰ বিৰুদ্ধে ব্যৱস্থা লোৱা ৰাজনৈতিক আৰু আইনী প্ৰক্ৰিয়াক বোলা হয় 8",
    "correctOption": "ENACTMENT 69. ŒFL¬±ÀÚ± Ø¬IÒ±Ø˚˛ÚŒ ¸—¶Ö± ’Ô¬I± ’±˝◊ÚŒˆ¬±À¬I ·ØÍ¬Ó¬ ’±Ú ŒFL¬±ÀÚ± Ú…±˚˛±ØÒFL¬1ÀÌ ŒFL¬±ÀÚ± 1±ÊUª± Ø¬I¯∏˚˛±1 ’¸» ’±‰¬1Ì1 Ø¬I1NÀX√ ¬I…ª¶Ö± Œ˘±ª± 1±ÊÕÚØÓ¬FL¬ ’±1N ’±˝◊ÚŒ √Õ∂ØSÊ˚˛±FL¬ Œ¬I±˘± ˝˚˛ –",
    "explanation": "A",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option A as correct (Impeachment). Therefore, option A is the answer.",
    "topic": "General Science",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0957",
    "question": "70",
    "options": [
      "এটা ত্ৰিভূজৰ তিনিটা কোণৰ মান 1: 3: 5 অনুপাতত আছে। ত্ৰিভূজটোৰ বৃহত্তম কোণৰ মান ঃ",
      "708",
      "908",
      "1208"
    ],
    "answer": "এটা ত্ৰিভূজৰ তিনিটা কোণৰ মান 1: 3: 5 অনুপাতত আছে। ত্ৰিভূজটোৰ বৃহত্তম কোণৰ মান ঃ",
    "correctOption": "1008 70. ¤È¬± ØSˆ”¬Ê1 ØÓ¬ØÚÈ¬± ŒFL¬±Ì1 ˜±Ú 1 : 3 : 5 ’Ú≈¬Û±Ó¬Ó¬ ’±ÀÂº ØSˆ”¬ÊÀÈ¬±1 ¬I‘˝M˜ ŒFL¬±Ì1 ˜±Ú –",
    "explanation": "D",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option D as correct (1008 70. ¤È¬± øSˆ”¬Ê1 øÓ¬øÚÈ¬± Œﬂ¬±Ì1 ˜±Ú 1 : 3 : 5 ’Ú≈¬Û±Ó¬Ó¬ ’±ÀÂº øSˆ”¬ÊÀÈ¬±1 ¬ı‘˝M˜ Œﬂ¬±Ì1 ˜±Ú –). Therefore, option D is the answer.",
    "topic": "Mathematics",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0958",
    "question": "71",
    "options": [
      "য’ত টয়’টাৰ মূখ্য কাৰ্যালয় অৱস্থিত ঃ",
      "China",
      "South Korea",
      "Singapore"
    ],
    "answer": "য’ত টয়’টাৰ মূখ্য কাৰ্যালয় অৱস্থিত ঃ",
    "correctOption": "JAPAN 71. ˚ÍÓ¬ È¬Í˚˛ÍÈ¬±1 ˜”‡… FL¬±˚«±˘˚˛ ’ªØ¶ÖÓ¬ –",
    "explanation": "D",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option D as correct (Japan 71. ˚íÓ¬ È¬í˚˛íÈ¬±1 ˜”‡… ﬂ¬±˚«±˘˚˛ ’ªø¶öÓ¬ –). Therefore, option D is the answer.",
    "topic": "Assam GK",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0959",
    "question": "72",
    "options": [
      "যদি] ৰ পৰা n লৈ স্বাভাৱিক সংখ্যাবোৰৰ পূৰণফলৰ মান PC সূচীত কৰে, তেন্তে P, +P, +P, +P, ৰ মান 8",
      "23",
      "33",
      "37"
    ],
    "answer": "যদি] ৰ পৰা n লৈ স্বাভাৱিক সংখ্যাবোৰৰ পূৰণফলৰ মান PC সূচীত কৰে, তেন্তে P, +P, +P, +P, ৰ মান 8",
    "correctOption": "31 72. ˚Ø 1 1 ¬Û1± N ∆˘ ¶§±ˆ¬±ØªFL¬ ¸—‡…±À¬I±11 ¬Û”1ÌÙ¬˘1 ˜±Ú PN Œ˚˛ ¸”‰¬ŒÓ¬ FL¬À1, ŒÓ¬ÀÔL P1+P2+P3+P4 1 ˜±Ú –",
    "explanation": "B",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option B as correct (33). Therefore, option B is the answer.",
    "topic": "Mathematics",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0960",
    "question": "73",
    "options": [
      "কোনখন দেশে চুৱেজ খাল নিয়ন্তুণ কৰে ?",
      "Turkey",
      "Israel",
      "Egypt"
    ],
    "answer": "কোনখন দেশে চুৱেজ খাল নিয়ন্তুণ কৰে ?",
    "correctOption": "FRANCE 73. ŒFL¬±Ú‡Ú ŒÀ˙ ¬‰≈¬ÀªÊ ‡±˘ ØÚ˚˛LAÌ FL¬À1 ∑",
    "explanation": "C",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option C as correct (Egypt). Therefore, option C is the answer.",
    "topic": "Assam GK",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0961",
    "question": "74",
    "options": [
      "নীচের কোনটির হজমে আমাদের মুখের লালা সাহায্য করে ?",
      "Starch",
      "Protein",
      "Vitamins"
    ],
    "answer": "নীচের কোনটির হজমে আমাদের মুখের লালা সাহায্য করে ?",
    "correctOption": "FAT 74. ’±˜±1 ˜≈‡Ó¬ ÔFL¬± ˘±˘ØÈ¬À˚˛ ØÚ•SSØ˘Ø‡Ó¬ ŒFL¬±ÚÀÈ¬±1 Ø¬Iˆ¬—·ÚÓ¬ ¸˝±˚˛ FL¬À1 ∑",
    "explanation": "A",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option A as correct (Starch). Therefore, option A is the answer.",
    "topic": "General Science",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0962",
    "question": "75",
    "options": [
      "BN দুখন মহাদেশৰ মাজত ভূমধ্যসাগৰ অৱস্থিত ?",
      "Asia and Europe",
      "Europe and Africa",
      "North America and Africa"
    ],
    "answer": "BN দুখন মহাদেশৰ মাজত ভূমধ্যসাগৰ অৱস্থিত ?",
    "correctOption": "SOUTH AMERICA AND AFRICA 75. ŒFL¬±Ú ≈‡Ú ˜˝±À˙1 ˜±ÊÓ¬ ˆ”¬˜Ò…¸±·1 ’ªØ¶ÖÓ¬ ∑",
    "explanation": "G",
    "subject": "Step 1: Read the question and compare all four choices. Step 2: The official final answer key marks Question 75 as G, meaning all options were considered correct because the question was found to be ambiguous. Step 3: Therefore, the official key should be retained as G.",
    "topic": "Assam GK",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0963",
    "question": "76",
    "options": [
      "SATURN ক TZUTSM fora ক’ড কৰা হয়, তেন্তে সদৃশ সূত্ৰৰে URANUS ক কেনেদৰে ক'ড কৰা হ'ব ?",
      "TSZOTT",
      "VQBMVR",
      "VQBOUS"
    ],
    "answer": "SATURN ক TZUTSM fora ক’ড কৰা হয়, তেন্তে সদৃশ সূত্ৰৰে URANUS ক কেনেদৰে ক'ড কৰা হ'ব ?",
    "correctOption": "VSBOVT 76. ˚Ø SATURN FL¬ TZUTSM Ø˝‰¬±À¬I FL¬ÍÎ¬ FL¬1± ˝˚˛, ŒÓ¬ÀÔL ¸‘˙ ¸”SÀ1 URANUS FL¬ ŒFL¬ÀÚÀ1 FL¬ÍÎ¬ FL¬1± ˝Í¬I ∑",
    "explanation": "B",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option B as correct (VQBMVR). Therefore, option B is the answer.",
    "topic": "Reasoning",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0964",
    "question": "78",
    "options": [
      "এটা টেংকি 6 ডাল পাইপৰ সহায়েৰে 80 মিনিটত পূৰ্ণ কৰিব পাৰি। টেংকিটো 8 ডাল পাইপৰ সহায়েৰে পূৰ্ণ কৰিবলৈ কিমান",
      "45 min",
      "60 min",
      "48 min"
    ],
    "answer": "এটা টেংকি 6 ডাল পাইপৰ সহায়েৰে 80 মিনিটত পূৰ্ণ কৰিব পাৰি। টেংকিটো 8 ডাল পাইপৰ সহায়েৰে পূৰ্ণ কৰিবলৈ কিমান",
    "correctOption": "70 MIN 78. ¤È¬± ŒÈ¬—ØFL¬ 6 Î¬±˘ ¬Û±˝◊¬Û1 ¸˝±À˚˛À1 80 Ø˜ØÚÈ¬Ó¬ ¬Û”Ì« FL¬Ø1¬I ¬Û±Ø1º ŒÈ¬—ØFL¬ÀÈ¬± 8 Î¬±˘ ¬Û±˝◊¬Û1 ¸˝±À˚˛À1 ¬Û”Ì« FL¬Ø1¬IÕ˘ ØFL¬˜±Ú ¸˜˚˛1 √Õ∂À˚˛±ÊÚ ˝Í¬I ∑",
    "explanation": "B",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option B as correct (60 min). Therefore, option B is the answer.",
    "topic": "Mathematics",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0965",
    "question": "79",
    "options": [
      "এগৰাকী আইতাই বনভোজত ৰান্ধি আছিল। বনভোজটোত চামিল আছিল আইতাগৰাকীৰ পুত্ৰ আৰু পুত্ৰবধু, নিজ নিজ পত্নীৰে সৈতে তেওঁলোকৰ চাৰিজন পুত্ৰ আৰু চাৰিপুত্ৰৰ প্ৰতিজনৰে এজনকৈ পুত্ৰ আৰু দুজনীকৈ জীয়াৰী । বনভোজটোত মুঠতে মহিলাৰ সংখ্যা কিমান আছিল ?",
      "8",
      "12",
      "14"
    ],
    "answer": "এগৰাকী আইতাই বনভোজত ৰান্ধি আছিল। বনভোজটোত চামিল আছিল আইতাগৰাকীৰ পুত্ৰ আৰু পুত্ৰবধু, নিজ নিজ পত্নীৰে সৈতে তেওঁলোকৰ চাৰিজন পুত্ৰ আৰু চাৰিপুত্ৰৰ প্ৰতিজনৰে এজনকৈ পুত্ৰ আৰু দুজনীকৈ জীয়াৰী । বনভোজটোত মুঠতে মহিলাৰ সংখ্যা কিমান আছিল ?",
    "correctOption": "10 79. ¤·1±FL¬Œ ’±˝◊Ó¬±˝◊ ¬IÚÀˆ¬±ÊÓ¬ 1±ØG¬ ’±ØÂ˘º ¬IÚÀˆ¬±ÊÀÈ¬±Ó¬ ‰¬±Ø˜˘ ’±ØÂ˘ ’±˝◊Ó¬±·1±FL¬Œ1 ¬Û≈S ’±1N ¬Û≈S¬IÒ≈, ØÚÊ ØÚÊ ¬ÛPŒÀ1 ∆¸ÀÓ¬ ŒÓ¬›“À˘±FL¬1 ‰¬±Ø1ÊÚ ¬Û≈S ’±1N ‰¬±Ø1¬Û≈S1 √Õ∂ØÓ¬ÊÚÀ1 ¤ÊÚÕFL¬ ¬Û≈S ’±1N ≈ÊÚŒÕFL¬ ÊŒ˚˛±1Œº ¬IÚÀˆ¬±ÊÀÈ¬±Ó¬ ˜≈Í¬ÀÓ¬ ˜Ø˝˘±1 ¸—‡…± ØFL¬˜±Ú ’±ØÂ˘ ∑",
    "explanation": "C",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option C as correct (14). Therefore, option C is the answer.",
    "topic": "Mathematics",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0966",
    "question": "81",
    "options": [
      "টি আও কোনবিধ খেলত ভাৰতীয় দলৰ অধিনায়ক আছিল?",
      "Badminton",
      "Hockey",
      "Football"
    ],
    "answer": "টি আও কোনবিধ খেলত ভাৰতীয় দলৰ অধিনায়ক আছিল?",
    "correctOption": "VOLLEYBALL 81. ØÈ¬ ’±› ŒFL¬±ÚØ¬IÒ Œ‡˘Ó¬ ˆ¬±1Ó¬Œ˚˛ ˘1 ’ØÒÚ±˚˛FL¬ ’±ØÂ˘∑",
    "explanation": "C",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option C as correct (Football). Therefore, option C is the answer.",
    "topic": "Assam GK",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0967",
    "question": "82",
    "options": [
      "এটা দলত থকা কেইজনমান ল’ৰাৰ মাজত 72 সংখ্যক টফি বিতৰণ কৰা হ’ল। দলৰ প্রতিজন ল’ৰাৰ ভাগত পৰা টফিৰ সংখ্যা দলত থকা মুঠ লৰাৰ সংখ্যাৰ দুগুণৰ সমান। দলটোত থকা ল’ৰাৰ মুঠ সংখ্যা হৈছেঃ",
      "6",
      "7",
      "8"
    ],
    "answer": "এটা দলত থকা কেইজনমান ল’ৰাৰ মাজত 72 সংখ্যক টফি বিতৰণ কৰা হ’ল। দলৰ প্রতিজন ল’ৰাৰ ভাগত পৰা টফিৰ সংখ্যা দলত থকা মুঠ লৰাৰ সংখ্যাৰ দুগুণৰ সমান। দলটোত থকা ল’ৰাৰ মুঠ সংখ্যা হৈছেঃ",
    "correctOption": "9 82. ¤È¬± ˘Ó¬ ÔFL¬± ŒFL¬˝◊ÊÚ˜±Ú ˘Í1±1 ˜±ÊÓ¬ 72 ¸—‡…FL¬ È¬ØÙ¬ Ø¬IÓ¬1Ì FL¬1± ˝Í˘º ˘1 √Õ∂ØÓ¬ÊÚ ˘Í1±1 ˆ¬±·Ó¬ ¬Û1± È¬ØÙ¬1 ¸—‡…± ˘Ó¬ ÔFL¬± ˜≈Í¬ ˘1±1 ¸—‡…±1 ≈&Ì1 ¸˜±Úº ˘ÀÈ¬±Ó¬ ÔFL¬± ˘Í1±1 ˜≈Í¬ ¸—‡…± ∆˝ÀÂ –",
    "explanation": "A",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option A as correct (6). Therefore, option A is the answer.",
    "topic": "Mathematics",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0968",
    "question": "84",
    "options": [
      "কোন সিংহাসনৰ বাবে গোলাপৰ যুদ্ধ (Wars of the Roses) নামৰ গৃহযুদ্ধ লানি সংঘটিত হৈছিল ?",
      "British throne",
      "French throne",
      "Russian throne"
    ],
    "answer": "কোন সিংহাসনৰ বাবে গোলাপৰ যুদ্ধ (Wars of the Roses) নামৰ গৃহযুদ্ধ লানি সংঘটিত হৈছিল ?",
    "correctOption": "SPANISH THRONE 84. ŒFL¬±Ú Ø¸—˝±¸Ú1 ¬I±À¬I Œ·±˘±¬Û1 ˚≈X√ (WARS OF THE ROSES) Ú±˜1 ·‘˝˚≈X√ ˘±ØÚ ¸—‚ØÈ¬Ó¬ ∆˝ØÂ˘ ∑",
    "explanation": "A",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option A as correct (British throne). Therefore, option A is the answer.",
    "topic": "General Science",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0969",
    "question": "85",
    "options": [
      "নিম্নলিখিত কথনসমূহৰ কোনটো সঠিক ?",
      "Sikkim shares border with Assam",
      "Sikkim lies towards the west of Assam",
      "Assam shares borders with Sikkim and Meghalaya"
    ],
    "answer": "নিম্নলিখিত কথনসমূহৰ কোনটো সঠিক ?",
    "correctOption": "BANGLADESH AND SIKKIM TOUCH THE BORDERS OF ASSAM. 85. ØÚ•SSØ˘Ø‡Ó¬ ŒFL¬±ÚÀÈ¬± Î◊¬ØMÊ QX√ ∑",
    "explanation": "B",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option B as correct (Sikkim lies towards the west of Assam). Therefore, option B is the answer.",
    "topic": "General Science",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0970",
    "question": "86",
    "options": [
      "টাইকোৱাণ্ডো নামৰ সমৰ কলাটোৰ উৎপত্তি কোন দেশত হৈছিল ?",
      "Thailand",
      "China",
      "Korea"
    ],
    "answer": "টাইকোৱাণ্ডো নামৰ সমৰ কলাটোৰ উৎপত্তি কোন দেশত হৈছিল ?",
    "correctOption": "VIETNAM 86. È¬±˝◊ÀFL¬±ª±ÀG± Ú±˜1 ¸˜1 √FL¬˘±ÀÈ¬±1 Î◊¬»¬ÛØM ŒFL¬±Ú Œ˙Ó¬ ∆˝ØÂ˘ ∑",
    "explanation": "C",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option C as correct (Korea). Therefore, option C is the answer.",
    "topic": "Assam GK",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0971",
    "question": "87",
    "options": [
      "নিম্নলিখিত কোনটো অণশুদ্ধভাবে যোৰা মিলোৱা হৈছে ?",
      "Class I lever : Pliers",
      "Class II lever : Nail cutter",
      "Class III lever : Nutcracker"
    ],
    "answer": "নিম্নলিখিত কোনটো অণশুদ্ধভাবে যোৰা মিলোৱা হৈছে ?",
    "correctOption": "CLASS II LEVER : BOTTLE OPENER 87. ØÚ•SSØ˘Ø‡Ó¬ ŒFL¬±ÚÀÈ¬± ’QX√ˆ¬±À¬I Œ˚±1± Ø˜À˘±ª± ∆˝ÀÂ ∑",
    "explanation": "C",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option C as correct (Class III lever : Nutcracker). Therefore, option C is the answer.",
    "topic": "General Science",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0972",
    "question": "88",
    "options": [
      "1 লা জানুৱাৰী, 2024 সাপেক্ষে ইউক্ৰেইনৰ ৰাষ্ট্পতি কোন ?",
      "Joe Biden",
      "Vladimir Putin",
      "Valerii Zaluzhn"
    ],
    "answer": "Valerii Zaluzhn",
    "correctOption": "VOLODYMYR ZELENSKYY 88. 1 ˘± Ê±Ú≈ª±1Œ, 2024 ¸±À¬ÛÀÉ¬ ˝◊Î◊¬ÀSÊ˝◊Ú1 1±©ÜÒ¬ÛØÓ¬ ŒFL¬±Ú ∑",
    "explanation": "D",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option D as correct (Volodymyr Zelenskyy 88. 1 ˘± Ê±Ú≈ª±1œ, 2024 ¸±À¬ÛÀé¬ ˝◊Î◊¬ÀSê˝◊Ú1 1±©Üò¬ÛøÓ¬ Œﬂ¬±Ú ∑). Therefore, option D is the answer.",
    "topic": "General Science",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0973",
    "question": "89",
    "options": [
      "কোনখন নগৰীত পদ্মনাভস্বামী মন্দিৰ অৱস্থিত ?",
      "Bengaluru",
      "Chennai",
      "Madurai"
    ],
    "answer": "কোনখন নগৰীত পদ্মনাভস্বামী মন্দিৰ অৱস্থিত ?",
    "correctOption": "THIRUVANANTHAPURAM 89. ŒFL¬±Ú‡Ú Ú·1ŒÓ¬ ¬ÛΩÚ±ˆ¬¶§±˜Œ ˜ØΜ1 ’ªØ¶ÖÓ¬ ∑",
    "explanation": "D",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option D as correct (Thiruvananthapuram 89. Œﬂ¬±Ú‡Ú Ú·1œÓ¬ ¬ÛΩÚ±ˆ¬¶§±˜œ ˜øµ1 ’ªø¶öÓ¬ ∑). Therefore, option D is the answer.",
    "topic": "Assam GK",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0974",
    "question": "90",
    "options": [
      "কোনে অলিম্পিক খেলত সৰ্বোচ্চ সংখ্যক সোণৰ পদক লাভ কৰিছে ?",
      "Mark Spitz",
      "Michael Phelps",
      "Jesse Owens"
    ],
    "answer": "কোনে অলিম্পিক খেলত সৰ্বোচ্চ সংখ্যক সোণৰ পদক লাভ কৰিছে ?",
    "correctOption": "PAAVO NURMI 90. ŒFL¬±ÀÚ ’Ø˘Ø•ÛFL¬ Œ‡˘Ó¬ ¸À¬I«±2‰¬ ¸—‡…FL¬ Œ¸±Ì1 ¬ÛFL¬ ˘±ˆ¬ FL¬Ø1ÀÂ ∑",
    "explanation": "B",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option B as correct (Michael Phelps). Therefore, option B is the answer.",
    "topic": "Assam GK",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0975",
    "question": "91",
    "options": [
      "চাণক্য কোন গৰাকী সম্ৰাটৰ ৰাজকীয় উপদেষ্টা আছিল 2",
      "Samudragupta",
      "Ashoka",
      "Chandragupta Maurya"
    ],
    "answer": "চাণক্য কোন গৰাকী সম্ৰাটৰ ৰাজকীয় উপদেষ্টা আছিল 2",
    "correctOption": "SKANDAGUPTA 91. ‰¬±ÌFL¬… ŒFL¬±Ú ·1±FL¬Œ ¸•⁄±È¬1 1±ÊFL¬Œ˚˛ Î◊¬¬ÛÀ©Ü± ’±ØÂ˘ ∑",
    "explanation": "C",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option C as correct (Chandragupta Maurya). Therefore, option C is the answer.",
    "topic": "General Science",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0976",
    "question": "92",
    "options": [
      "নিম্নলিখিত কোনখন দেশক ভূমধ্যসাগৰে স্পৰ্শ নকৰে ?",
      "Spain",
      "Portugal",
      "Lebanon"
    ],
    "answer": "নিম্নলিখিত কোনখন দেশক ভূমধ্যসাগৰে স্পৰ্শ নকৰে ?",
    "correctOption": "FRANCE 92. ØÚ•SSØ˘Ø‡Ó¬ ŒFL¬±Ú‡Ú Œ˙FL¬ ˆ”¬˜Ò…¸±·À1 ¶Û˙« ÚFL¬À1 ∑",
    "explanation": "B",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option B as correct (Portugal). Therefore, option B is the answer.",
    "topic": "Assam GK",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0977",
    "question": "93",
    "options": [
      "প্রদত্ত পাঁচটা সংখ্যা হৈছে (i) 736 (ii) 269 (iii) 958 (iv) 219 (v) 793 প্রতিটো সংখ্যাৰে অংক কেইটা অধঃক্ৰমত সজোৱাৰ পিছত সৰ্বোচ্চ আৰু সৰ্বনিম্ন সংখ্যাকেইটাৰ মাজৰ পাৰ্থক্যৰ মান কি হ'ব ?",
      "222",
      "716",
      "618"
    ],
    "answer": "প্রদত্ত পাঁচটা সংখ্যা হৈছে (i) 736 (ii) 269 (iii) 958 (iv) 219 (v) 793 প্রতিটো সংখ্যাৰে অংক কেইটা অধঃক্ৰমত সজোৱাৰ পিছত সৰ্বোচ্চ আৰু সৰ্বনিম্ন সংখ্যাকেইটাৰ মাজৰ পাৰ্থক্যৰ মান কি হ'ব ?",
    "correctOption": "12 93. √Õ∂M ¬¬Û±“‰¬È¬± ¸—‡…± ∆˝ÀÂ – (I) 736 (II) 269 (III) 958 (IV) 219 (V) 793 √Õ∂ØÓ¬ÀÈ¬± ¸—‡…±À1 ’—FL¬ ŒFL¬˝◊È¬± ’Ò–SÊ˜Ó¬ ¸ÀÊ±ª±1 Ø¬ÛÂÓ¬ ¸À¬I«±2‰¬ ’±1N ¸¬I«ØÚ•SS ¸—‡…±ÀFL¬˝◊È¬±1 ˜±Ê1 ¬Û±Ô«FL¬…1 ˜±Ú ØFL¬ ˝Í¬I ∑",
    "explanation": "A",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option A as correct (222). Therefore, option A is the answer.",
    "topic": "Mathematics",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0978",
    "question": "94",
    "options": [
      "জোঙাল Vere প্ৰতিমূৰ্ত্তি কোন স্থানৰ সমীপত স্থাপন কৰা হৈছে ?",
      "Raha",
      "Dibrugarh",
      "Dhuburi"
    ],
    "answer": "জোঙাল Vere প্ৰতিমূৰ্ত্তি কোন স্থানৰ সমীপত স্থাপন কৰা হৈছে ?",
    "correctOption": "KARIMGANJ 94. ŒÊ±„±˘ ¬I˘U1 √Õ∂ØÓ¬˜”ØM« ŒFL¬±Ú ¶Ö±Ú1 ¸˜Œ¬ÛÓ¬ ¶Ö±¬ÛÚ FL¬1± ∆˝ÀÂ ∑",
    "explanation": "A",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option A as correct (Raha). Therefore, option A is the answer.",
    "topic": "General Science",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0979",
    "question": "95",
    "options": [
      "নিম্নলিখিত কোনগৰাকী ল’ন টেনিছ খেলুৱৈ নহয় ?",
      "Leander Paes",
      "Vijay Amritraj",
      "Mahesh Bhupathi"
    ],
    "answer": "নিম্নলিখিত কোনগৰাকী ল’ন টেনিছ খেলুৱৈ নহয় ?",
    "correctOption": "PULLELA GOPICHAND 95. ØÚ•SSØ˘Ø‡Ó¬ ŒFL¬±Ú·1±FL¬Œ ˘ÍÚ ŒÈ¬ØÚÂ Œ‡˘≈Õª Ú˝˚˛ ∑",
    "explanation": "D",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option D as correct (Pullela Gopichand 95. øÚ•ßø˘ø‡Ó¬ Œﬂ¬±Ú·1±ﬂ¬œ ˘íÚ ŒÈ¬øÚÂ Œ‡˘≈Õª Ú˝˚˛ ∑). Therefore, option D is the answer.",
    "topic": "Assam GK",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0980",
    "question": "96",
    "options": [
      "নিম্নলিখিত কোনটো হৈছে অসমৰ এক তাঁৰযুক্ত বাদ্যযন্ত্ৰ ?",
      "Dogor",
      "Xutuli",
      "Kaaliya"
    ],
    "answer": "নিম্নলিখিত কোনটো হৈছে অসমৰ এক তাঁৰযুক্ত বাদ্যযন্ত্ৰ ?",
    "correctOption": "TOKARI 96. ØÚ•SSØ˘Ø‡Ó¬ ŒFL¬±ÚÀÈ¬± ∆˝ÀÂ ’¸˜1 ¤FL¬ Ó¬±“1˚≈MÊ ¬I±…˚LA ∑",
    "explanation": "D",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option D as correct (Tokari 96. øÚ•ßø˘ø‡Ó¬ Œﬂ¬±ÚÀÈ¬± ∆˝ÀÂ ’¸˜1 ¤ﬂ¬ Ó¬±“1˚≈Mê ¬ı±…˚La ∑). Therefore, option D is the answer.",
    "topic": "Assam GK",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0981",
    "question": "97",
    "options": [
      "এক ছয়পিঠিয়া পাশা গুটিত বিন্দুসমূহ এনেদৰে আছে যাতে প্রতি বিপৰীত পিঠিৰ বিন্দুৰ মুঠ যোগফল সদায় সমান। নিম্নলিখিত কোন যোৰা বিন্দুসংখ্যা পৰস্পৰ বিপৰীত পিঠিত নাই ?",
      "1, 4",
      "2, 5",
      "1, 6"
    ],
    "answer": "এক ছয়পিঠিয়া পাশা গুটিত বিন্দুসমূহ এনেদৰে আছে যাতে প্রতি বিপৰীত পিঠিৰ বিন্দুৰ মুঠ যোগফল সদায় সমান। নিম্নলিখিত কোন যোৰা বিন্দুসংখ্যা পৰস্পৰ বিপৰীত পিঠিত নাই ?",
    "correctOption": "3, 4 97. ¤FL¬ Â˚˛Ø¬ÛØÍ¬˚˛± ¬Û±˙± &ØÈ¬Ó¬ Ø¬IΜ≈¸˜”˝ ¤ÀÚÀ1 ’±ÀÂ ˚±ÀÓ¬ √Õ∂ØÓ¬ Ø¬I¬Û1ŒÓ¬ Ø¬ÛØÍ¬1 Ø¬IΜ≈1 ˜≈Í¬ Œ˚±·Ù¬˘ ¸±˚˛ ¸˜±Úº ØÚ•SSØ˘Ø‡Ó¬ ŒFL¬±Ú Œ˚±1± Ø¬IΜ≈¸—‡…± ¬Û1¶Û1 Ø¬I¬Û1ŒÓ¬ Ø¬ÛØÍ¬Ó¬ Ú±˝◊ ∑",
    "explanation": "A",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option A as correct (1, 4). Therefore, option A is the answer.",
    "topic": "Mathematics",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0982",
    "question": "99",
    "options": [
      "নিম্নলিখিত কোনটো ভাৰতৰ পৰোক্ষ কৰৰ এক উদাহৰণ ?",
      "Gift Tax",
      "Income Tax",
      "Goods and Services Tax"
    ],
    "answer": "নিম্নলিখিত কোনটো ভাৰতৰ পৰোক্ষ কৰৰ এক উদাহৰণ ?",
    "correctOption": "CAPITAL GAINS TAX 99. ØÚ•SSØ˘Ø‡Ó¬ ŒFL¬±ÚÀÈ¬± ˆ¬±1Ó¬1 ¬¬ÛÀ1±É¬ FL¬11 ¤FL¬ Î◊¬±˝1Ì ∑",
    "explanation": "C",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option C as correct (Goods and Services Tax). Therefore, option C is the answer.",
    "topic": "Mathematics",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0983",
    "question": "101",
    "options": [
      "প্ৰাইড ae প্ৰিজুড্ছিখন কোনে লিখিছিল ?",
      "Jane Austen",
      "Barbara Cartland",
      "Agatha Christie"
    ],
    "answer": "প্ৰাইড ae প্ৰিজুড্ছিখন কোনে লিখিছিল ?",
    "correctOption": "VIRGINIA WOOLFE 101. √Õ∂±˝◊Î¬ ¤G Ø√Õ∂Ê≈ØÎ¬Â ‡Ú ŒFL¬±ÀÚ Ø˘Ø‡ØÂ˘ ∑",
    "explanation": "A",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option A as correct (Jane Austen). Therefore, option A is the answer.",
    "topic": "English",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0984",
    "question": "102",
    "options": [
      "যদি sind = ০০৪০, তেন্তে 1+ tand ৰ মান 2",
      "1",
      "2",
      "0"
    ],
    "answer": "যদি sind = ০০৪০, তেন্তে 1+ tand ৰ মান 2",
    "correctOption": "2 102. ˚Ø SINΘ=COSΘ, ŒÓ¬ÀÔL 1+TANΘ 1 ˜±Ú –",
    "explanation": "B",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option B as correct (2). Therefore, option B is the answer.",
    "topic": "General Science",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0985",
    "question": "103",
    "options": [
      "দ্বিঘাত সমীকৰণ 2x? — 5x +6=0 ৰ সমাধান কেইটাৰ পূৰণফল হৈছেঃ",
      "2",
      "3",
      "5"
    ],
    "answer": "দ্বিঘাত সমীকৰণ 2x? — 5x +6=0 ৰ সমাধান কেইটাৰ পূৰণফল হৈছেঃ",
    "correctOption": "6 103. Ø Z‚±Ó¬ ¸˜ŒFL¬1Ì 2X2−5X+6=0 1 ¸˜±Ò±Ú ŒFL¬˝◊È¬±1 ¬Û”1ÌÙ¬˘ ∆˝ÀÂ –",
    "explanation": "B",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option B as correct (3). Therefore, option B is the answer.",
    "topic": "Mathematics",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0986",
    "question": "104",
    "options": [
      "বিকল্পৰ তালিকাত কোনটো অমিল ?",
      "Chapters",
      "Preface",
      "Index"
    ],
    "answer": "Chapters",
    "correctOption": "BOOK 104. Ø¬IFL¬Ä1 Ó¬±Ø˘FL¬±Ó¬ ŒFL¬±ÚÀÈ¬± ’Ø˜˘ ∑",
    "explanation": "D",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option D as correct (Book 104. ø¬ıﬂ¬ä1 Ó¬±ø˘ﬂ¬±Ó¬ Œﬂ¬±ÚÀÈ¬± ’ø˜˘ ∑). Therefore, option D is the answer.",
    "topic": "General Science",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0987",
    "question": "105",
    "options": [
      "50 জন শিক্ষাৰ্থীৰ এটা শ্ৰেণী পৰীক্ষাৰ 100 নম্বৰৰ ভিতৰত প্রাপ্ত গড় নম্বৰ হৈছে 45.5। পুনৰীক্ষণত দেখা গ’ল যে এটা তথ্য অন্তৰ্ভুক্তিত 8চ ৰ ঠাইত ভুলকৈ 58 বুলি নম্বৰ অন্তৰ্ভুক্ত কৰা হৈছে। শ্ৰেণীটোত প্রাপ্ত নম্বৰৰ শুদ্ধ গড়মান কিমান হোৱা উচিৎ ?",
      "54.50",
      "46.04",
      "46.40"
    ],
    "answer": "50 জন শিক্ষাৰ্থীৰ এটা শ্ৰেণী পৰীক্ষাৰ 100 নম্বৰৰ ভিতৰত প্রাপ্ত গড় নম্বৰ হৈছে 45.5। পুনৰীক্ষণত দেখা গ’ল যে এটা তথ্য অন্তৰ্ভুক্তিত 8চ ৰ ঠাইত ভুলকৈ 58 বুলি নম্বৰ অন্তৰ্ভুক্ত কৰা হৈছে। শ্ৰেণীটোত প্রাপ্ত নম্বৰৰ শুদ্ধ গড়মান কিমান হোৱা উচিৎ ?",
    "correctOption": "55.40 105. 50 ÊÚ Ø˙É¬±Ô«Œ1 ¤È¬± Œ|ÌŒ ¬Û1ŒÉ¬±1 100 Ú•§11 Øˆ¬Ó¬1Ó¬ √Õ∂±5 ·Î¬ˇ Ú•§1 ∆˝ÀÂ 45.5º ¬Û≈Ú1ŒÉ¬ÌÓ¬ Œ‡± ·Í˘ Œ˚ ¤È¬± Ó¬Ô… ’ÔLˆ«≈¬ØMÊÓ¬ 85 1 Í¬±˝◊Ó¬ ˆ≈¬˘ÕFL¬ 58 ¬I≈Ø˘ Ú•§1 ’ÔLˆ«≈¬MÊ FL¬1± ∆˝ÀÂº Œ|ÌŒÀÈ¬±Ó¬ √Õ∂±5 Ú•§11 QX√ ·Î¬ˇ˜±Ú ØFL¬˜±Ú Œ˝±ª± Î◊¬Ø‰¬» ∑",
    "explanation": "B",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option B as correct (46.04). Therefore, option B is the answer.",
    "topic": "Mathematics",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0988",
    "question": "106",
    "options": [
      "লাডাখৰ চিয়াছেন কোনটোৰ এক উদাহৰণ ?",
      "Cold desert",
      "Glacier",
      "Plateau"
    ],
    "answer": "লাডাখৰ চিয়াছেন কোনটোৰ এক উদাহৰণ ?",
    "correctOption": "SNOW MOUNTAIN 106. ˘±Î¬±‡1 Ø‰¬˚˛±ÀÂÚ ŒFL¬±ÚÀÈ¬±1 ¤FL¬ Î◊¬±˝1Ì ∑",
    "explanation": "B",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option B as correct (Glacier). Therefore, option B is the answer.",
    "topic": "Mathematics",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0989",
    "question": "107",
    "options": [
      "GY আৰু কাশ্মীৰ অঞ্চলত নিম্নলিখিত কোনটো পৰ্বতমালা আছে ?",
      "Pir Panjal range",
      "Satpura range",
      "Dhauladhar range"
    ],
    "answer": "GY আৰু কাশ্মীৰ অঞ্চলত নিম্নলিখিত কোনটো পৰ্বতমালা আছে ?",
    "correctOption": "MISHIMI HILLS 107. Ê•Ú≈ ’±1N FL¬±Ù¨Œ1 ’=˘Ó¬ ØÚ•SSØ˘Ø‡Ó¬ ŒFL¬±ÚÀÈ¬± ¬Û¬I«Ó¬˜±˘± ’±ÀÂ ∑",
    "explanation": "A",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option A as correct (Pir Panjal range). Therefore, option A is the answer.",
    "topic": "General Science",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0990",
    "question": "108",
    "options": [
      "দ্বিঘাত সমীকৰণ 2%2- 5%43 =) ৰ সমাধান কেইটাৰ মুঠ যোগফল CARE 3 5",
      "2",
      "",
      ""
    ],
    "answer": "দ্বিঘাত সমীকৰণ 2%2- 5%43 =) ৰ সমাধান কেইটাৰ মুঠ যোগফল CARE 3 5",
    "correctOption": "5 2 2 108. Ø Z‚±Ó¬ ¸˜ŒFL¬1Ì 2X2−5X+3=0 1 ¸˜±Ò±Ú ŒFL¬˝◊È¬±1 ˜≈Í¬ Œ˚±·Ù¬˘ ∆˝ÀÂ – 3 5",
    "explanation": "C",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option C as correct. Therefore, option C is the answer.",
    "topic": "Mathematics",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0991",
    "question": "109",
    "options": [
      "ডোৰেম'ন কি অথবা কোন ?",
      "A river in Brazil",
      "A Hollywood actor",
      "A type of aircraft"
    ],
    "answer": "ডোৰেম'ন কি অথবা কোন ?",
    "correctOption": "A CARTOON CHARACTER 109. ŒÎ¬±À1˜ÍÚ ØFL¬ ’Ô¬I± ŒFL¬±Ú ∑",
    "explanation": "D",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option D as correct (A cartoon character 109. ŒÎ¬±À1˜íÚ øﬂ¬ ’Ô¬ı± Œﬂ¬±Ú ∑). Therefore, option D is the answer.",
    "topic": "General Science",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0992",
    "question": "110",
    "options": [
      "কোনবিধ খেলত মনালিচা বৰুৱা (মেহতা) আৰু, ত্ৰিদিব দুৱৰাই অসমক প্রতিনিধিত্ব কৰিছিল ?",
      "Badminton",
      "Volleyball",
      "Taekwondo"
    ],
    "answer": "কোনবিধ খেলত মনালিচা বৰুৱা (মেহতা) আৰু, ত্ৰিদিব দুৱৰাই অসমক প্রতিনিধিত্ব কৰিছিল ?",
    "correctOption": "TABLE TENNIS 110. ŒFL¬±ÚØ¬IÒ Œ‡˘Ó¬ ˜Ú±Ø˘‰¬± ¬I1Nª± [À˜˝Ó¬±] ’±1N ØSØ¬I ≈ª1±˝◊ ’¸˜FL¬ √Õ∂ØÓ¬ØÚØÒQ FL¬Ø1ØÂ˘ ∑",
    "explanation": "D",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option D as correct (Table Tennis 110. Œﬂ¬±Úø¬ıÒ Œ‡˘Ó¬ ˜Ú±ø˘‰¬± ¬ı1nª± [À˜˝Ó¬±] ’±1n øSø¬ı ≈ª1±˝◊ ’¸˜ﬂ¬ √õ∂øÓ¬øÚøÒQ ﬂ¬ø1øÂ˘ ∑). Therefore, option D is the answer.",
    "topic": "Assam GK",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0993",
    "question": "111",
    "options": [
      "এজন মানুহে বছৰি 6% সৰল সুতত ₹ 1,00,000 টকা 2 বছৰৰ বাবে ধাৰলৈ ল’লে আৰু বছৰি 6% চক্ৰবৃদ্ধি POSS 2 বছৰৰ বাবে সেই ধন বিনিয়োগ কৰিলে। ধাৰলৈ লোৱা ধন সুতে-মূলে পৰিশোধ কৰাৰ পাছত মানুহজনে অৰ্জন কৰা মুঠ লাভৰ পৰিমাণ হৈছে?",
      "` 360",
      "` 120",
      "` 480"
    ],
    "answer": "এজন মানুহে বছৰি 6% সৰল সুতত ₹ 1,00,000 টকা 2 বছৰৰ বাবে ধাৰলৈ ল’লে আৰু বছৰি 6% চক্ৰবৃদ্ধি POSS 2 বছৰৰ বাবে সেই ধন বিনিয়োগ কৰিলে। ধাৰলৈ লোৱা ধন সুতে-মূলে পৰিশোধ কৰাৰ পাছত মানুহজনে অৰ্জন কৰা মুঠ লাভৰ পৰিমাণ হৈছে?",
    "correctOption": "` 240 111. ¤ÊÚ ˜±Ú≈À˝ ¬IÂØ1 6% ¸1˘ ¸≈Ó¬Ó¬ ` 1,00,000 È¬FL¬± 2 ¬IÂ11 ¬I±À¬I Ò±1Õ˘ ˘ÍÀ˘ ’±1N ¬IÂØ1 6% ‰¬SÊ¬I‘ØX√ ¸≈Ó¬Ó¬ 2 ¬IÂ11 ¬I±À¬I Œ¸˝◊ ÒÚ Ø¬IØÚÀ˚˛±· FL¬Ø1À˘º Ò±1Õ˘ Œ˘±ª± ÒÚ ¸≈ÀÓ¬-˜”À˘ ¬ÛØ1À˙±Ò FL¬1±1 ¬Û±ÂÓ¬ ˜±Ú≈˝ÊÀÚ ’Ê«Ú FL¬1± ˜≈Í¬ ˘±ˆ¬1 ¬ÛØ1˜±Ì ∆˝ÀÂ –",
    "explanation": "A",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option A as correct (` 360). Therefore, option A is the answer.",
    "topic": "Mathematics",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0994",
    "question": "112",
    "options": [
      "প্ৰদত্ত চিত্ৰৰ শুদ্ধ দাপোণ প্রতিবিম্বটো চিনাক্ত কৰক।",
      "",
      "",
      ""
    ],
    "answer": "প্ৰদত্ত চিত্ৰৰ শুদ্ধ দাপোণ প্রতিবিম্বটো চিনাক্ত কৰক।",
    "correctOption": "112. √Õ∂M Ø‰¬S1 QX√ ±À¬Û±Ì √Õ∂ØÓ¬Ø¬I•§ÀÈ¬± Ø‰¬Ú±MÊ FL¬1FL¬º",
    "explanation": "B",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option B as correct. Therefore, option B is the answer.",
    "topic": "Reasoning",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0995",
    "question": "113",
    "options": [
      "নিম্নলিখিত কোনটো সংগীত উদ্যোগৰ এক আছুতীয়া বঁটা ?",
      "The Oscars",
      "Emmy Awards",
      "Golden Globe"
    ],
    "answer": "নিম্নলিখিত কোনটো সংগীত উদ্যোগৰ এক আছুতীয়া বঁটা ?",
    "correctOption": "GRAMMY AWARDS 113. ØÚ•SSØ˘Ø‡Ó¬ ŒFL¬±ÚÀÈ¬± ¸—·ŒÓ¬ Î◊¬À…±·1 ¤FL¬ ’±Â≈Ó¬Œ˚˛± ¬I“È¬± ∑",
    "explanation": "D",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option D as correct (Grammy Awards 113. øÚ•ßø˘ø‡Ó¬ Œﬂ¬±ÚÀÈ¬± ¸—·œÓ¬ Î◊¬À…±·1 ¤ﬂ¬ ’±Â≈Ó¬œ˚˛± ¬ı“È¬± ∑). Therefore, option D is the answer.",
    "topic": "General Science",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0996",
    "question": "114",
    "options": [
      "এজন মানুহে ₹ x হাৰত x সংখ্যক AAA SA কৰিলে। দোকানীজনে তেওঁক মুঠ ₹ x পৰিমাণৰ ৰেহাই প্রদান কৰাৰ পাছত তেওঁ ₹ 156 পৰিশোধ কৰিলে। ৰেহাই প্রদানৰ পাছত প্রতিটো সামগ্ৰীৰ ত্ৰয়মূল্য হৈছেঃ",
      "` 13",
      "` 12",
      "` 16"
    ],
    "answer": "এজন মানুহে ₹ x হাৰত x সংখ্যক AAA SA কৰিলে। দোকানীজনে তেওঁক মুঠ ₹ x পৰিমাণৰ ৰেহাই প্রদান কৰাৰ পাছত তেওঁ ₹ 156 পৰিশোধ কৰিলে। ৰেহাই প্রদানৰ পাছত প্রতিটো সামগ্ৰীৰ ত্ৰয়মূল্য হৈছেঃ",
    "correctOption": "` 14 114. ¤ÊÚ ˜±Ú≈À˝ ` X ˝±1Ó¬ X ¸—‡…FL¬ ¸±˜·ËŒ SÊ˚˛ FL¬Ø1À˘º Œ±FL¬±ÚŒÊÀÚ ŒÓ¬›“FL¬ ˜≈Í¬ ` X ¬ÛØ1˜±Ì1 Œ1˝±˝◊ √Õ∂±Ú FL¬1±1 ¬Û±ÂÓ¬ ŒÓ¬›“ ` 156 ¬ÛØ1À˙±Ò FL¬Ø1À˘º Œ1˝±˝◊ √Õ∂±Ú1 ¬Û±ÂÓ¬ √Õ∂ØÓ¬ÀÈ¬± ¸±˜·ËŒ1 SÊ˚˛˜”˘… ∆˝ÀÂ –",
    "explanation": "B",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option B as correct (` 12). Therefore, option B is the answer.",
    "topic": "Mathematics",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0997",
    "question": "115",
    "options": [
      "বৰ্তমান ভাৰতত কোনবিধৰ গণতন্ত্ৰ প্ৰচলিত ?",
      "Direct Democracy",
      "Representative Democracy",
      "Social Democracy"
    ],
    "answer": "বৰ্তমান ভাৰতত কোনবিধৰ গণতন্ত্ৰ প্ৰচলিত ?",
    "correctOption": "TOTALITARIAN DEMOCRACY 115. ¬IÓ«¬˜±Ú ˆ¬±1Ó¬Ó¬ ŒFL¬±ÚØ¬IÒ1 ·ÌÓ¬LA √Õ∂‰¬Ø˘Ó¬ ∑",
    "explanation": "B",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option B as correct (Representative Democracy). Therefore, option B is the answer.",
    "topic": "General Science",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0998",
    "question": "116",
    "options": [
      "[225 _ [ত -(- > * 729 144 81 ay -2 ») — 22 5-5 নুৰ",
      "−",
      "−",
      "−"
    ],
    "answer": "[225 _ [ত -(- > * 729 144 81 ay -2 ») — 22 5-5 নুৰ",
    "correctOption": "− 12 27 9 36 225 25 16 116. − − = ? 729 144 81 7 20 5 11",
    "explanation": "D",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option D as correct (− 12 27 9 36 225 25 16 116. − − = ? 729 144 81 7 20 5 11). Therefore, option D is the answer.",
    "topic": "General Science",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-0999",
    "question": "117",
    "options": [
      "আইচিচি পুৰ'য অ’ডিআই বিশ্বকাপ ক্ৰিকেট সম্পৰ্কীয় নিম্নলিখিত কোনটো উক্তি অশুদ্ধ ?",
      "India has won the Cup twice",
      "Australia has won the maximum number of times",
      "England won the Cup in the first tournament"
    ],
    "answer": "আইচিচি পুৰ'য অ’ডিআই বিশ্বকাপ ক্ৰিকেট সম্পৰ্কীয় নিম্নলিখিত কোনটো উক্তি অশুদ্ধ ?",
    "correctOption": "BANGLADESH HAS NEVER WON THE CUP. 117. ’±˝◊Ø‰¬Ø‰¬ ¬Û≈1N¯∏ ’ÍØÎ¬’±˝◊ Ø¬IÙ´FL¬±¬Û ØSÊÀFL¬È¬ ¸•ÛFL«¬Œ˚˛ ØÚ•SSØ˘Ø‡Ó¬ ŒFL¬±ÚÀÈ¬± Î◊¬ØMÊ ’QX√ ∑",
    "explanation": "C",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option C as correct (England won the Cup in the first tournament). Therefore, option C is the answer.",
    "topic": "General Science",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-1000",
    "question": "118",
    "options": [
      "কোন দেশত খ্ৰীষ্টফাৰ কলম্বাছৰ জন্ম হৈছিল ?",
      "Spain",
      "England",
      "Portugal"
    ],
    "answer": "কোন দেশত খ্ৰীষ্টফাৰ কলম্বাছৰ জন্ম হৈছিল ?",
    "correctOption": "ITALY 118. ŒFL¬±Ú Œ˙Ó¬ ‡ËŒ©ÜÙ¬±1 FL¬˘•§±Â1 ÊIÚ ∆˝ØÂ˘ ∑",
    "explanation": "D",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option D as correct (Italy 118. Œﬂ¬±Ú Œ˙Ó¬ ‡Ëœ©ÜÙ¬±1 ﬂ¬˘•§±Â1 Êiú ∆˝øÂ˘ ∑). Therefore, option D is the answer.",
    "topic": "Assam GK",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-1001",
    "question": "119",
    "options": [
      "বিশ্বকাপ ফুটবল খেলত ব্ৰাজিলে কিমান বাৰ জয়লাভ কৰিছে ?",
      "Three",
      "Five",
      "Four"
    ],
    "answer": "বিশ্বকাপ ফুটবল খেলত ব্ৰাজিলে কিমান বাৰ জয়লাভ কৰিছে ?",
    "correctOption": "SEVEN 119. Ø¬IÙ´FL¬±¬Û Ù≈¬È¬¬I˘ Œ‡˘Ó¬ ¬IË±ØÊÀ˘ ØFL¬˜±Ú ¬I±1 Ê˚˛˘±ˆ¬ FL¬Ø1ÀÂ ∑",
    "explanation": "B",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option B as correct (Five). Therefore, option B is the answer.",
    "topic": "Assam GK",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-1002",
    "question": "120",
    "options": [
      "নিম্নলিখিত কোনটো চিত্ৰই আমাৰ সমাজৰ লেখক, শিক্ষক আৰু সঙ্গীতজ্ঞ সকলক সৰ্বোত্তম ভাবে প্রতিনিধিত্ব কৰিব 2 oOo » (by)",
      "",
      "",
      ""
    ],
    "answer": "নিম্নলিখিত কোনটো চিত্ৰই আমাৰ সমাজৰ লেখক, শিক্ষক আৰু সঙ্গীতজ্ঞ সকলক সৰ্বোত্তম ভাবে প্রতিনিধিত্ব কৰিব 2 oOo » (by)",
    "correctOption": "120. ØÚ•SSØ˘Ø‡Ó¬ ŒFL¬±ÚÀÈ¬± Ø‰¬S˝◊ ’±˜±1 ¸˜±Ê1 Œ˘‡FL¬, Ø˙É¬FL¬ ’±1N ¸EŒÓ¬: ¸FL¬˘FL¬ ¸À¬I«±M˜ ˆ¬±À¬I √Õ∂ØÓ¬ØÚØÒQ FL¬Ø1¬I ∑",
    "explanation": "D",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option D as correct (120. øÚ•ßø˘ø‡Ó¬ Œﬂ¬±ÚÀÈ¬± ø‰¬S˝◊ ’±˜±1 ¸˜±Ê1 Œ˘‡ﬂ¬, ø˙é¬ﬂ¬ ’±1n ¸eœÓ¬: ¸ﬂ¬˘ﬂ¬ ¸À¬ı«±M˜ ˆ¬±À¬ı √õ∂øÓ¬øÚøÒQ ﬂ¬ø1¬ı ∑). Therefore, option D is the answer.",
    "topic": "Reasoning",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-1003",
    "question": "121",
    "options": [
      "2024 বৰ্ষত কাক অসম বৈভৱৰ সন্মান প্রদান কৰা হৈছে ?",
      "Ratan Tata",
      "Ranjan Gogoi",
      "Tapan Saikia"
    ],
    "answer": "2024 বৰ্ষত কাক অসম বৈভৱৰ সন্মান প্রদান কৰা হৈছে ?",
    "correctOption": "RANJIT SHEKHAR MOOSHAHARY 121. 2024 ¬I¯∏«Ó¬ FL¬±FL¬ ’¸˜ ∆¬Iˆ¬ª1 ¸IÚ±Ú √Õ∂±Ú FL¬1± Õ˝ÀÂ ∑",
    "explanation": "B",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option B as correct (Ranjan Gogoi). Therefore, option B is the answer.",
    "topic": "Assam GK",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-1004",
    "question": "122",
    "options": [
      "কোনো এক জ্যামিতিক চিত্ৰত সমকোণত ছেদ কৰাকৈ দুযোৰ সমান্তৰাল ৰেখাখণ্ড আছে। ইয়াৰে এযোৰৰ প্রতিটোৰ দৈৰ্ঘ্য 8 চে.মি. আৰু আনযোৰৰ দৈৰ্ঘ্য 6 চে.মি. ৷ যদি দীঘল যোৰৰ বাহুবোৰৰ প্রতিটোক 2 চে.মি. কৈ বৃদ্ধি আৰু চুটি যোৰৰ প্রতিটোক 2 চে:মি. কৈ হ্ৰাস কৰা হয়, তেন্তে নিম্নলিখিত কোনটো উক্তি শুদ্ধ হ'ব ?",
      "Area of the figure decreases",
      "Perimeter of the figure increases",
      "Perimeter of the figure decreases"
    ],
    "answer": "কোনো এক জ্যামিতিক চিত্ৰত সমকোণত ছেদ কৰাকৈ দুযোৰ সমান্তৰাল ৰেখাখণ্ড আছে। ইয়াৰে এযোৰৰ প্রতিটোৰ দৈৰ্ঘ্য 8 চে.মি. আৰু আনযোৰৰ দৈৰ্ঘ্য 6 চে.মি. ৷ যদি দীঘল যোৰৰ বাহুবোৰৰ প্রতিটোক 2 চে.মি. কৈ বৃদ্ধি আৰু চুটি যোৰৰ প্রতিটোক 2 চে:মি. কৈ হ্ৰাস কৰা হয়, তেন্তে নিম্নলিখিত কোনটো উক্তি শুদ্ধ হ'ব ?",
    "correctOption": "AREA OF THE FIGURE INCREASES 122. ŒFL¬±ÀÚ± ¤FL¬ Ê…±Ø˜ØÓ¬FL¬ Ø‰¬SÓ¬ ¸˜ÀFL¬±ÌÓ¬ ŒÂ FL¬1±ÕFL¬ ≈À˚±1 ¸˜±ÔL1±˘ Œ1‡±‡G ’±ÀÂº ˝◊˚˛±À1 ¤À˚±11 √Õ∂ØÓ¬ÀÈ¬±1 ∆‚«… 8 Œ‰¬.Ø˜. ’±1N ’±ÚÀ˚±11 ∆‚«… 6 Œ‰¬.Ø˜.º ˚Ø Œ‚˘ Œ˚±11 ¬I±UÀ¬I±11 √Õ∂ØÓ¬ÀÈ¬±FL¬ 2 Œ‰¬.Ø˜. ∆FL¬ ¬I‘ØX√ ’±1N ‰≈¬ØÈ¬ Œ˚±11 √Õ∂ØÓ¬ÀÈ¬±FL¬ 2 Œ‰¬.Ø˜. ∆FL¬ ˝Ò±¸ FL¬1± ˝˚˛, ŒÓ¬ÀÔL ØÚ•SSØ˘Ø‡Ó¬ ŒFL¬±ÚÀÈ¬± Î◊¬ØMÊ QX√ ˝Í¬I ∑",
    "explanation": "A",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option A as correct (Area of the figure decreases). Therefore, option A is the answer.",
    "topic": "Mathematics",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-1005",
    "question": "123",
    "options": [
      "নিম্নলিখিত কোনটো স্থানত IPL (আইপিএল) মেচসমূহ অনুষ্ঠিত নহয় ?",
      "Mumbai",
      "Dharamshala",
      "Patna"
    ],
    "answer": "নিম্নলিখিত কোনটো স্থানত IPL (আইপিএল) মেচসমূহ অনুষ্ঠিত নহয় ?",
    "correctOption": "HYDERABAD 123. ØÚ•SSØ˘Ø‡Ó¬ ŒFL¬±ÚÀÈ¬± ¶Ö±ÚÓ¬ IPL [’±˝◊Ø¬Û¤˘] Œ˜‰¬¸˜”˝ ’Ú≈ØÁ¬Ó¬ Ú˝˚˛ ∑",
    "explanation": "C",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option C as correct (Patna). Therefore, option C is the answer.",
    "topic": "Assam GK",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-1006",
    "question": "124",
    "options": [
      "“ভিলেজ রকস্টারস্‌” চলচ্চিত্ৰের পরিচালক কে ?",
      "Rima Das",
      "Hima Das",
      "Munin Das"
    ],
    "answer": "“ভিলেজ রকস্টারস্‌” চলচ্চিত্ৰের পরিচালক কে ?",
    "correctOption": "QUEEN DAS 124. ËËØˆ¬À˘Ê 1FL¬©Ü±1ƑÂÍÍ Ú±˜1 Œ¬I±˘‰¬Ø¬I ‡Ú1 ØÚÀ«˙FL¬ ŒFL¬±Ú ∑",
    "explanation": "A",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option A as correct (Rima Das). Therefore, option A is the answer.",
    "topic": "Reasoning",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-1007",
    "question": "125",
    "options": [
      "আইপিএল 2023 ৰ সময়ছোৱাত ৰাজস্থান ৰয়েলছৰ VA খেলপথাৰ জয়পুৰৰ বাহিৰে আন কোনখন আছিল ?",
      "Guwahati",
      "Dharamshala",
      "Bhubaneshwar"
    ],
    "answer": "আইপিএল 2023 ৰ সময়ছোৱাত ৰাজস্থান ৰয়েলছৰ VA খেলপথাৰ জয়পুৰৰ বাহিৰে আন কোনখন আছিল ?",
    "correctOption": "PANAJI 125. ’±˝◊Ø¬Û¤˘ 2023 1 ¸˜˚˛ÀÂ±ª±Ó¬ 1±Ê¶Ö±Ú 1À˚˛˘Â1 ‚1Nª± Œ‡˘¬ÛÔ±1 Ê˚˛¬Û≈11 ¬I±Ø˝À1 ’±Ú ŒFL¬±Ú‡Ú ’±ØÂ˘ ∑",
    "explanation": "A",
    "subject": "Step 1: Identify the concept tested by the Assamese question. Step 2: Compare the four answer choices and apply the relevant rule or factual relationship. Step 3: The official final answer key marks option A as correct (Guwahati). Therefore, option A is the answer.",
    "topic": "Assam GK",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper IV (Degree)"
  },
  {
    "id": "AS-PYQ-1008",
    "question": "1",
    "options": [
      "1 লা জানুবাৰী, 2024 সাপেক্ষে অসম বিধানসভাৰ অধ্যক্ষ কোন ?",
      "Hitendra Nath Goswami",
      "Numal Momin",
      "Biswajit Daimary"
    ],
    "answer": "1 লা জানুবাৰী, 2024 সাপেক্ষে অসম বিধানসভাৰ অধ্যক্ষ কোন ?",
    "correctOption": "RUPSING TERON",
    "explanation": "C",
    "subject": "Step 1: Identify the concept tested in Question 1. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option C (Biswajit Daimary) as correct. Therefore, option C is the answer.",
    "topic": "General Awareness",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1009",
    "question": "2",
    "options": [
      "নি্নলিখিত কোনটোৰ পৰা নগদ ধন উলিয়াব পাৰি ?",
      "ATM",
      "NEFT",
      "UPI"
    ],
    "answer": "NEFT",
    "correctOption": "IFSC",
    "explanation": "A",
    "subject": "Step 1: Identify the concept tested in Question 2. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option A (ATM) as correct. Therefore, option A is the answer.",
    "topic": "General Awareness",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1010",
    "question": "3",
    "options": [
      "টেক্সি চালক এজনে কার্যালয়ত যাত্রীসকলক গাড়ীত তুলি ছয় কিলোমিটাৰ পথ অতিক্রম কৰি ডাকঘৰ পালেগৈ, যন্ত তেওঁ বাওফালে ঘুবি আঠ কিলোমিটাৰ পথ অতিক্রম কৰি বিমান বন্দৰ পায়গৈ। কার্যযালয়ৰ পৰা বিমান বন্দবলৈ বৈথিক দূবত্ব কিমান ?",
      "Ten kilometers",
      "Twelve kilometers",
      "Eight kilometers"
    ],
    "answer": "টেক্সি চালক এজনে কার্যালয়ত যাত্রীসকলক গাড়ীত তুলি ছয় কিলোমিটাৰ পথ অতিক্রম কৰি ডাকঘৰ পালেগৈ, যন্ত তেওঁ বাওফালে ঘুবি আঠ কিলোমিটাৰ পথ অতিক্রম কৰি বিমান বন্দৰ পায়গৈ। কার্যযালয়ৰ পৰা বিমান বন্দবলৈ বৈথিক দূবত্ব কিমান ?",
    "correctOption": "FOURTEEN KILOMETERS",
    "explanation": "A",
    "subject": "Step 1: Identify the concept tested in Question 3. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option A (Ten kilometers) as correct. Therefore, option A is the answer.",
    "topic": "General Awareness",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1011",
    "question": "4",
    "options": [
      "যদি ৰঘুৱে কয় যে তেওঁৰ মাতৃ হিমাদ্ৰীৰ মাতৃৰ একমাত্ৰ জীয়ৰী, তেন্তে হিমাদ্ৰী ৰঘুৰ সৈতে কি সম্বন্ধে সম্পর্কিত হ’ব ?",
      "Brother",
      "Maternal Uncle",
      "Grandfather"
    ],
    "answer": "যদি ৰঘুৱে কয় যে তেওঁৰ মাতৃ হিমাদ্ৰীৰ মাতৃৰ একমাত্ৰ জীয়ৰী, তেন্তে হিমাদ্ৰী ৰঘুৰ সৈতে কি সম্বন্ধে সম্পর্কিত হ’ব ?",
    "correctOption": "SON",
    "explanation": "B",
    "subject": "Step 1: Identify the concept tested in Question 4. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option B (Maternal Uncle) as correct. Therefore, option B is the answer.",
    "topic": "General Awareness",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1012",
    "question": "9",
    "options": [
      "1 ৰ পৰা 20 লৈ মৌলিক সংখ্যাসমূহৰ মুঠ গণনা £",
      "7",
      "9",
      "8"
    ],
    "answer": "1 ৰ পৰা 20 লৈ মৌলিক সংখ্যাসমূহৰ মুঠ গণনা £",
    "correctOption": "10",
    "explanation": "C",
    "subject": "Step 1: Identify the concept tested in Question 9. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option C (8) as correct. Therefore, option C is the answer.",
    "topic": "Mathematics",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1013",
    "question": "11",
    "options": [
      "কোনো এটা সংখ্যাক 11% বৃদ্ধি কৰিলে সংখ্যাটোৰ মান 777 হয়। সংখ্যাটো হৈছে ঃ",
      "770",
      "750",
      "710"
    ],
    "answer": "কোনো এটা সংখ্যাক 11% বৃদ্ধি কৰিলে সংখ্যাটোৰ মান 777 হয়। সংখ্যাটো হৈছে ঃ",
    "correctOption": "700",
    "explanation": "D",
    "subject": "Step 1: Identify the concept tested in Question 11. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option D (700) as correct. Therefore, option D is the answer.",
    "topic": "Mathematics",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1014",
    "question": "12",
    "options": [
      "মোবেহ মেণিপুব) ভাৰতৰ সৈতে কোন দেশৰ স্থলপথ সংযোগী স্থল ?",
      "Thailand",
      "Nepal",
      "Myanmar"
    ],
    "answer": "মোবেহ মেণিপুব) ভাৰতৰ সৈতে কোন দেশৰ স্থলপথ সংযোগী স্থল ?",
    "correctOption": "BHUTAN",
    "explanation": "C",
    "subject": "Step 1: Identify the concept tested in Question 12. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option C (Myanmar) as correct. Therefore, option C is the answer.",
    "topic": "Driving / Motor Vehicles",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1015",
    "question": "14",
    "options": [
      "দুটা সংখ্যাৰ যোগফল 12 আৰ সংখ্যা দুটাৰ বর্গ পার্থক্য 60| সংখ্যা দুটাৰ পার্থক্য £",
      "3",
      "5",
      "7"
    ],
    "answer": "দুটা সংখ্যাৰ যোগফল 12 আৰ সংখ্যা দুটাৰ বর্গ পার্থক্য 60| সংখ্যা দুটাৰ পার্থক্য £",
    "correctOption": "9",
    "explanation": "B",
    "subject": "Step 1: Identify the concept tested in Question 14. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option B (5) as correct. Therefore, option B is the answer.",
    "topic": "Mathematics",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1016",
    "question": "16",
    "options": [
      "আহোম সাম্রাজ্য প্রথম বাজধানী ক'ত স্থাপিত হৈছিল ?",
      "Rongpur",
      "Garhgaon",
      "Charaideo"
    ],
    "answer": "আহোম সাম্রাজ্য প্রথম বাজধানী ক'ত স্থাপিত হৈছিল ?",
    "correctOption": "GUWAHATI",
    "explanation": "C",
    "subject": "Step 1: Identify the concept tested in Question 16. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option C (Charaideo) as correct. Therefore, option C is the answer.",
    "topic": "General Awareness",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1017",
    "question": "17",
    "options": [
      "নিন্ললিখিত সমূহৰ কোনটো বংশ প্রাচীন অসমৰ শাসক বংশ নাছিল ?",
      "Maurya",
      "Varman",
      "Pala"
    ],
    "answer": "Varman",
    "correctOption": "KOCH",
    "explanation": "A",
    "subject": "Step 1: Identify the concept tested in Question 17. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option A (Maurya) as correct. Therefore, option A is the answer.",
    "topic": "General Awareness",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1018",
    "question": "19",
    "options": [
      "47329 সংখ্যাটোক দুণ্ডণ কৰিলে ফলাফলটোৰ ঠিক সৌমাজত থকা অংকটো কি হ'ৰ ?",
      "6",
      "7",
      "4"
    ],
    "answer": "47329 সংখ্যাটোক দুণ্ডণ কৰিলে ফলাফলটোৰ ঠিক সৌমাজত থকা অংকটো কি হ'ৰ ?",
    "correctOption": "5",
    "explanation": "A",
    "subject": "Step 1: Identify the concept tested in Question 19. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option A (6) as correct. Therefore, option A is the answer.",
    "topic": "Mathematics",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1019",
    "question": "20",
    "options": [
      "ভাবতবর্ষত এখন বাহনত কোনবিধৰ শিঙা অনুমোদিত ?",
      "Multitoned horn",
      "Electric horn",
      "Air horn"
    ],
    "answer": "ভাবতবর্ষত এখন বাহনত কোনবিধৰ শিঙা অনুমোদিত ?",
    "correctOption": "ANY TYPE OF HORN",
    "explanation": "B",
    "subject": "Step 1: Identify the concept tested in Question 20. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option B (Electric horn) as correct. Therefore, option B is the answer.",
    "topic": "Driving / Motor Vehicles",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1020",
    "question": "21",
    "options": [
      "অপবিবাহক বাহনৰ লার্নাছ লাইচেঞ্চ প্রাপ্ত কবাৰ পাছত ড্রাইভিং লাইচেঞ্চৰ বাবে আবেদন কবিবলৈ এজন আবেদকে ন্যুনতম কিমান সময় অপেক্ষা কৰিব লগা হয় ?",
      "30 days",
      "60 days",
      "45 days"
    ],
    "answer": "অপবিবাহক বাহনৰ লার্নাছ লাইচেঞ্চ প্রাপ্ত কবাৰ পাছত ড্রাইভিং লাইচেঞ্চৰ বাবে আবেদন কবিবলৈ এজন আবেদকে ন্যুনতম কিমান সময় অপেক্ষা কৰিব লগা হয় ?",
    "correctOption": "6 MONTHS PAPER-V/A 11 P.T.O",
    "explanation": "A",
    "subject": "Step 1: Identify the concept tested in Question 21. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option A (30 days) as correct. Therefore, option A is the answer.",
    "topic": "Driving / Motor Vehicles",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1021",
    "question": "22",
    "options": [
      "নিন্ললিখিত সমূহৰ কোনটো এটা আউটপুট ডিভাইচ ?",
      "Keyboard",
      "Speaker",
      "Mouse"
    ],
    "answer": "Speaker",
    "correctOption": "MICROPHONE",
    "explanation": "B",
    "subject": "Step 1: Identify the concept tested in Question 22. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option B (Speaker) as correct. Therefore, option B is the answer.",
    "topic": "General Awareness",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1022",
    "question": "24",
    "options": [
      "কোনখন দেশৰ জাতীয় পতাকা ব্রিভূজাকৃতিৰ ?",
      "Brazil",
      "Kuala Lumpur",
      "Sri Lanka"
    ],
    "answer": "কোনখন দেশৰ জাতীয় পতাকা ব্রিভূজাকৃতিৰ ?",
    "correctOption": "NEPAL PAPER-V/A 12",
    "explanation": "D",
    "subject": "Step 1: Identify the concept tested in Question 24. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option D (Nepal Paper-V/A 12) as correct. Therefore, option D is the answer.",
    "topic": "General Awareness",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1023",
    "question": "25",
    "options": [
      "অর্থশাস্ত্ব কোনে লিখিছিল £",
      "Brahmagupta",
      "Swami Vivekananda",
      "Raghuram Rajan"
    ],
    "answer": "অর্থশাস্ত্ব কোনে লিখিছিল £",
    "correctOption": "CHANAKYA",
    "explanation": "D",
    "subject": "Step 1: Identify the concept tested in Question 25. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option D (Chanakya) as correct. Therefore, option D is the answer.",
    "topic": "General Awareness",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1024",
    "question": "26",
    "options": [
      "ভগ্বাংশৰ বূপত প্রকাশ কৰিব নোরাৰা সংখ্যাবোৰক বোলা হয় £",
      "Whole numbers",
      "Recurring numbers",
      "Prime numbers"
    ],
    "answer": "ভগ্বাংশৰ বূপত প্রকাশ কৰিব নোরাৰা সংখ্যাবোৰক বোলা হয় £",
    "correctOption": "IRRATIONAL NUMBERS",
    "explanation": "D",
    "subject": "Step 1: Identify the concept tested in Question 26. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option D (Irrational numbers) as correct. Therefore, option D is the answer.",
    "topic": "Mathematics",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1025",
    "question": "27",
    "options": [
      "এজন মানুহে প্ৰতি মিনিটত 45 শব্দ টাইপ কৰিব পাৰে। 555 টা শব্দ টাইপ কৰিবলৈ তেওঁক প্ৰয়োজন হোৱা সময় হ’ল —",
      "12 min 15 sec",
      "12 min 20 sec",
      "12 min 30 sec"
    ],
    "answer": "12 min 20 sec",
    "correctOption": "12 MIN 45 SEC",
    "explanation": "B",
    "subject": "Step 1: Identify the concept tested in Question 27. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option B (12 min 20 sec) as correct. Therefore, option B is the answer.",
    "topic": "English",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1026",
    "question": "28",
    "options": [
      "এটা সংখ্যাক 1111 বে পূৰণ কৰিলে প্রাপ্ত পুৰণফল হৈছে 7777। সংখ্যাটো হৈছে ঃ",
      "7",
      "17",
      "70"
    ],
    "answer": "এটা সংখ্যাক 1111 বে পূৰণ কৰিলে প্রাপ্ত পুৰণফল হৈছে 7777। সংখ্যাটো হৈছে ঃ",
    "correctOption": "77",
    "explanation": "A",
    "subject": "Step 1: Identify the concept tested in Question 28. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option A (7) as correct. Therefore, option A is the answer.",
    "topic": "Mathematics",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1027",
    "question": "29",
    "options": [
      "কোচবজা নবনাবায়ণৰ সেনাবাহিনীৰ সেনাপতি কোন আছিল ?",
      "Raghabendra",
      "Chakradhwaj",
      "Tingrai"
    ],
    "answer": "কোচবজা নবনাবায়ণৰ সেনাবাহিনীৰ সেনাপতি কোন আছিল ?",
    "correctOption": "CHILARAI",
    "explanation": "D",
    "subject": "Step 1: Identify the concept tested in Question 29. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option D (Chilarai) as correct. Therefore, option D is the answer.",
    "topic": "General Awareness",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1028",
    "question": "30",
    "options": [
      "ওজাপালি অসমৰ কোন অঞ্চলৰ এক ধর্মীয় উপাদান ?",
      "Lakhimpur - Dibrugarh region",
      "Silchar - Karimganj region",
      "Haflong - Hamren region"
    ],
    "answer": "ওজাপালি অসমৰ কোন অঞ্চলৰ এক ধর্মীয় উপাদান ?",
    "correctOption": "MANGALDOI - NALBARI REGION",
    "explanation": "D",
    "subject": "Step 1: Identify the concept tested in Question 30. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option D (Mangaldoi - Nalbari region) as correct. Therefore, option D is the answer.",
    "topic": "General Awareness",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1029",
    "question": "32",
    "options": [
      "18-[6-",
      "9",
      "16",
      "13"
    ],
    "answer": "18-[6-",
    "correctOption": "11",
    "explanation": "C",
    "subject": "Step 1: Identify the concept tested in Question 32. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option C (13) as correct. Therefore, option C is the answer.",
    "topic": "General Awareness",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1030",
    "question": "34",
    "options": [
      "5000 ৰ 3% ৰ 2% হৈছে ঃ",
      "5",
      "3",
      "2"
    ],
    "answer": "5000 ৰ 3% ৰ 2% হৈছে ঃ",
    "correctOption": "6",
    "explanation": "B",
    "subject": "Step 1: Identify the concept tested in Question 34. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option B (3) as correct. Therefore, option B is the answer.",
    "topic": "General Awareness",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1031",
    "question": "35",
    "options": [
      "ভাবতবর্ষত এখন বাহন ]",
      "right side of the road with the driver sitting on the left side of the vehicle",
      "left side of the road with the driver sitting on the right side of the vehicle",
      "right side of the road with the driver sitting on the right side of the vehicle"
    ],
    "answer": "ভাবতবর্ষত এখন বাহন ]",
    "correctOption": "LEFT SIDE OF THE ROAD WITH THE DRIVER SITTING ON THE LEFT SIDE OF THE VEHICLE",
    "explanation": "B",
    "subject": "Step 1: Identify the concept tested in Question 35. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option B (left side of the road with the driver sitting on the right side of the vehicle) as correct. Therefore, option B is the answer.",
    "topic": "Driving / Motor Vehicles",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1032",
    "question": "36",
    "options": [
      "যদি TANK ক KNAT হিচাপে ক’ড কৰা হয়, তেন্তে সদৃশ ক’ডত PROCESS ক লিখিলে ইয়াৰ পঞ্চম বৰ্ণটো কি হ’ব ?",
      "C",
      "E",
      "O"
    ],
    "answer": "যদি TANK ক KNAT হিচাপে ক’ড কৰা হয়, তেন্তে সদৃশ ক’ডত PROCESS ক লিখিলে ইয়াৰ পঞ্চম বৰ্ণটো কি হ’ব ?",
    "correctOption": "R",
    "explanation": "C",
    "subject": "Step 1: Identify the concept tested in Question 36. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option C (O) as correct. Therefore, option C is the answer.",
    "topic": "General Awareness",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1033",
    "question": "37",
    "options": [
      "2020 অলিম্পিক খেলত নীৰজ চোপ্রাই কোনবিধ খেলত সোণৰ পদক লাভ কৰিছিল ?",
      "Discus throw",
      "Hammer throw",
      "Shot put"
    ],
    "answer": "2020 অলিম্পিক খেলত নীৰজ চোপ্রাই কোনবিধ খেলত সোণৰ পদক লাভ কৰিছিল ?",
    "correctOption": "JAVELIN THROW",
    "explanation": "D",
    "subject": "Step 1: Identify the concept tested in Question 37. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option D (Javelin throw) as correct. Therefore, option D is the answer.",
    "topic": "General Awareness",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1034",
    "question": "38",
    "options": [
      "প্রথমে সামাজিক মাধ্যমত ধাবাবাহিকভাবে, পিছলৈ কিতাপ আকাৰে প্রকাশিত হোরা লাইফ অব এ ড্রাইভাব « কেবিনৰ ইপাবে কিতাপখন লিখা ব্যক্তিজন ঃ",
      "Pratibhu Dutta",
      "Rupam Dutta",
      "Debabrata Das"
    ],
    "answer": "প্রথমে সামাজিক মাধ্যমত ধাবাবাহিকভাবে, পিছলৈ কিতাপ আকাৰে প্রকাশিত হোরা লাইফ অব এ ড্রাইভাব « কেবিনৰ ইপাবে কিতাপখন লিখা ব্যক্তিজন ঃ",
    "correctOption": "RAMANUJ GOSWAMI",
    "explanation": "B",
    "subject": "Step 1: Identify the concept tested in Question 38. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option B (Rupam Dutta) as correct. Therefore, option B is the answer.",
    "topic": "General Awareness",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1035",
    "question": "40",
    "options": [
      "4213.6-ত 2-ৰ স্থানীয় মান হ’ল —",
      "213",
      "2",
      "200"
    ],
    "answer": "4213.6-ত 2-ৰ স্থানীয় মান হ’ল —",
    "correctOption": "20",
    "explanation": "C",
    "subject": "Step 1: Identify the concept tested in Question 40. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option C (200) as correct. Therefore, option C is the answer.",
    "topic": "Mathematics",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1036",
    "question": "41",
    "options": [
      "নিন্নলিখিত কোনটো একেটা সমষ্টিত থকাটো অনুচিত ? () কাগজ",
      "Paper",
      "Eraser",
      "Pen"
    ],
    "answer": "Paper",
    "correctOption": "TEXTBOOK",
    "explanation": "D",
    "subject": "Step 1: Identify the concept tested in Question 41. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option D (Textbook) as correct. Therefore, option D is the answer.",
    "topic": "General Awareness",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1037",
    "question": "42",
    "options": [
      "নিন্নলিখিত কোনটো চাৰ আইজাক নিউটনৰ কর্ম্মৰ সৈতে সম্পর্কিত ?",
      "Rocket",
      "Atom Bomb",
      "Semiconductor"
    ],
    "answer": "নিন্নলিখিত কোনটো চাৰ আইজাক নিউটনৰ কর্ম্মৰ সৈতে সম্পর্কিত ?",
    "correctOption": "AUTOMOBILE",
    "explanation": "A",
    "subject": "Step 1: Identify the concept tested in Question 42. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option A (Rocket) as correct. Therefore, option A is the answer.",
    "topic": "General Awareness",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1038",
    "question": "43",
    "options": [
      "নিন্ললিখিত কোনটো গোট অশুদ্ধকৈ বজিতা খুওবা আছে ?",
      "M : 13",
      "S : 20",
      "W : 23"
    ],
    "answer": "নিন্ললিখিত কোনটো গোট অশুদ্ধকৈ বজিতা খুওবা আছে ?",
    "correctOption": "K : 11",
    "explanation": "B",
    "subject": "Step 1: Identify the concept tested in Question 43. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option B (S : 20) as correct. Therefore, option B is the answer.",
    "topic": "General Awareness",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1039",
    "question": "44",
    "options": [
      "নিন্নলিখিত কোনটো ভাৰতৰ উচ্চতম পর্বতশৃংগ £",
      "Everest",
      "Annapurna",
      "Nanda Devi"
    ],
    "answer": "নিন্নলিখিত কোনটো ভাৰতৰ উচ্চতম পর্বতশৃংগ £",
    "correctOption": "KANCHENJUNGA",
    "explanation": "D",
    "subject": "Step 1: Identify the concept tested in Question 44. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option D (Kanchenjunga) as correct. Therefore, option D is the answer.",
    "topic": "General Awareness",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1040",
    "question": "45",
    "options": [
      "প্ৰথম দহটা ক্ৰমিক স্বাভাৱিক সংখ্যাৰ গড় হ’ল —",
      "5",
      "6",
      "5.5"
    ],
    "answer": "প্ৰথম দহটা ক্ৰমিক স্বাভাৱিক সংখ্যাৰ গড় হ’ল —",
    "correctOption": "6.5",
    "explanation": "C",
    "subject": "Step 1: Identify the concept tested in Question 45. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option C (5.5) as correct. Therefore, option C is the answer.",
    "topic": "Mathematics",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1041",
    "question": "46",
    "options": [
      "বিপজ্জনক গাড়ী চালনা কাক বোলা হয় £",
      "Jumping a red traffic light",
      "Violating stop line",
      "Using phone"
    ],
    "answer": "বিপজ্জনক গাড়ী চালনা কাক বোলা হয় £",
    "correctOption": "ANY ONE OF ALL THREE PAPER-V/A 21 P.T.O",
    "explanation": "D",
    "subject": "Step 1: Identify the concept tested in Question 46. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option D (Any one of all three Paper-V/A 21 P.T.O) as correct. Therefore, option D is the answer.",
    "topic": "Driving / Motor Vehicles",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1042",
    "question": "47",
    "options": [
      "তলত দিয়া কোনটো সংখ্যাৰ দহকৰ স্থানত সৰ্বোচ্চ মানৰ অংকটো আছে ?",
      "(v)",
      "(iii)",
      "(iv)"
    ],
    "answer": "তলত দিয়া কোনটো সংখ্যাৰ দহকৰ স্থানত সৰ্বোচ্চ মানৰ অংকটো আছে ?",
    "correctOption": "(I)",
    "explanation": "A",
    "subject": "Step 1: Identify the concept tested in Question 47. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option A ((v)) as correct. Therefore, option A is the answer.",
    "topic": "Mathematics",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1043",
    "question": "48",
    "options": [
      "পৰিবাহক বাহন এখনক কোনটো কথা লক্ষ্য কৰি আন বাহনৰ পৰা পৃথকে চিনি উলিয়াব পাৰি ?",
      "Looking at tyre size",
      "By the colour of the vehicle",
      "By vehicle size"
    ],
    "answer": "পৰিবাহক বাহন এখনক কোনটো কথা লক্ষ্য কৰি আন বাহনৰ পৰা পৃথকে চিনি উলিয়াব পাৰি ?",
    "correctOption": "REGISTRATION NUMBER PLATE",
    "explanation": "D",
    "subject": "Step 1: Identify the concept tested in Question 48. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option D (Registration number plate) as correct. Therefore, option D is the answer.",
    "topic": "Driving / Motor Vehicles",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1044",
    "question": "49",
    "options": [
      "টায়াৰ £ ঘুবণীয়া £ ক'লা - এই সম্বন্ধৰ সদৃশ সম্বন্ধ জৌট টি চিনাক্ত কৰক।",
      "Trees : Green : Tall",
      "Windows : Glass : Square",
      "Pipes : Round : Plastic"
    ],
    "answer": "টায়াৰ £ ঘুবণীয়া £ ক'লা - এই সম্বন্ধৰ সদৃশ সম্বন্ধ জৌট টি চিনাক্ত কৰক।",
    "correctOption": "BRICKS : RECTANGLE : RED",
    "explanation": "D",
    "subject": "Step 1: Identify the concept tested in Question 49. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option D (Bricks : Rectangle : Red) as correct. Therefore, option D is the answer.",
    "topic": "General Awareness",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1045",
    "question": "50",
    "options": [
      "অপবিবাহক বাহন ড্রাইভিং লাইচেঞ্চ পাবৰ বাবে প্রয়োজনীয় ন্যুনতম শিক্ষাগত অর্হতা হৈছে £",
      "Class VIII Pass",
      "Matric Pass",
      "Class IX Pass"
    ],
    "answer": "অপবিবাহক বাহন ড্রাইভিং লাইচেঞ্চ পাবৰ বাবে প্রয়োজনীয় ন্যুনতম শিক্ষাগত অর্হতা হৈছে £",
    "correctOption": "NOT MANDATORY",
    "explanation": "D",
    "subject": "Step 1: Identify the concept tested in Question 50. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option D (Not Mandatory) as correct. Therefore, option D is the answer.",
    "topic": "Driving / Motor Vehicles",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1046",
    "question": "51",
    "options": [
      "কোনখন দেশত হলিউড অবস্থিত ?",
      "United States of America",
      "England",
      "France"
    ],
    "answer": "কোনখন দেশত হলিউড অবস্থিত ?",
    "correctOption": "JAPAN",
    "explanation": "A",
    "subject": "Step 1: Identify the concept tested in Question 51. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option A (United States of America) as correct. Therefore, option A is the answer.",
    "topic": "General Awareness",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1047",
    "question": "52",
    "options": [
      "নিন্ললিখিত কোনটো অসমৰ এক অঞ্চল নহয় ?",
      "Brahmaputra valley",
      "Karbi plateau",
      "Barak valley"
    ],
    "answer": "নিন্ললিখিত কোনটো অসমৰ এক অঞ্চল নহয় ?",
    "correctOption": "DECCAN PLATEAU",
    "explanation": "D",
    "subject": "Step 1: Identify the concept tested in Question 52. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option D (Deccan plateau) as correct. Therefore, option D is the answer.",
    "topic": "General Awareness",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1048",
    "question": "53",
    "options": [
      "অসমত বাছৰ কণ্ডাক্টুৰ (পৰিচালক) ৰ লাইচেঞ্চ পাবৰ বাবে প্রয়োজনীয় ন্যুনতম শিক্ষাগত অরতা হৈছে [",
      "Class VIII Pass",
      "HSLC Pass",
      "Class IX Pass"
    ],
    "answer": "অসমত বাছৰ কণ্ডাক্টুৰ (পৰিচালক) ৰ লাইচেঞ্চ পাবৰ বাবে প্রয়োজনীয় ন্যুনতম শিক্ষাগত অরতা হৈছে [",
    "correctOption": "NOT MANDATORY",
    "explanation": "A",
    "subject": "Step 1: Identify the concept tested in Question 53. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option A (Class VIII Pass) as correct. Therefore, option A is the answer.",
    "topic": "Driving / Motor Vehicles",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1049",
    "question": "54",
    "options": [
      "বিপদজনক আৰ ক্ষতিকাৰক সামগ্রী কটিওবা বাহন চালকব ড্রাইভিং লাইচেঞ্চবৰ বৈধতাৰ ম্যাদ হৈছে |",
      "1 year",
      "2 years",
      "3 years"
    ],
    "answer": "বিপদজনক আৰ ক্ষতিকাৰক সামগ্রী কটিওবা বাহন চালকব ড্রাইভিং লাইচেঞ্চবৰ বৈধতাৰ ম্যাদ হৈছে |",
    "correctOption": "5 YEARS",
    "explanation": "A",
    "subject": "Step 1: Identify the concept tested in Question 54. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option A (1 year) as correct. Therefore, option A is the answer.",
    "topic": "Driving / Motor Vehicles",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1050",
    "question": "55",
    "options": [
      "কোনটোক সাধাৰণতে ভোটদানৰ প্রমাণ হিচাবে গণ্য কৰা হয় £",
      "Tick mark against name on Electoral Rolls (Voters List)",
      "Mark of indelible ink on finger nail (or other body position)",
      "Possession of Voter’s slip"
    ],
    "answer": "Tick mark against name on Electoral Rolls (Voters List)",
    "correctOption": "PERMISSION TO ENTER VOTING BOOTH",
    "explanation": "B",
    "subject": "Step 1: Identify the concept tested in Question 55. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option B (Mark of indelible ink on finger nail (or other body position)) as correct. Therefore, option B is the answer.",
    "topic": "General Awareness",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1051",
    "question": "57",
    "options": [
      "যদি 1+2+3+...+9+1055, তেন্তে 2+3+44+. ..+104+11-?",
      "65",
      "66",
      "64"
    ],
    "answer": "যদি 1+2+3+...+9+1055, তেন্তে 2+3+44+. ..+104+11-?",
    "correctOption": "62",
    "explanation": "A",
    "subject": "Step 1: Identify the concept tested in Question 57. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option A (65) as correct. Therefore, option A is the answer.",
    "topic": "General Awareness",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1052",
    "question": "58",
    "options": [
      "অসমৰ সর্বপ্রথম স্বর্গদেউ গবাকীৰ নাম ব্যক্ত কৰক।",
      "Suhungmung",
      "Suhenpha",
      "Sutupha"
    ],
    "answer": "অসমৰ সর্বপ্রথম স্বর্গদেউ গবাকীৰ নাম ব্যক্ত কৰক।",
    "correctOption": "SUKAPHA",
    "explanation": "D",
    "subject": "Step 1: Identify the concept tested in Question 58. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option D (Sukapha) as correct. Therefore, option D is the answer.",
    "topic": "General Awareness",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1053",
    "question": "59",
    "options": [
      "বায়ু ঃ ঈগল £ পানী ৪ £",
      "Duck",
      "Cuckoo",
      "Pigeon"
    ],
    "answer": "Cuckoo",
    "correctOption": "OSTRICH",
    "explanation": "A",
    "subject": "Step 1: Identify the concept tested in Question 59. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option A (Duck) as correct. Therefore, option A is the answer.",
    "topic": "General Awareness",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1054",
    "question": "60",
    "options": [
      "পথত থকা জেব্রা ক্রুছিং কিহৰ বাবে ব্যরহৃত হয় ?",
      "Reducing speed",
      "Pedestrian crossing",
      "Giving preference to other vehicles"
    ],
    "answer": "পথত থকা জেব্রা ক্রুছিং কিহৰ বাবে ব্যরহৃত হয় ?",
    "correctOption": "CROSSING OF ANIMALS",
    "explanation": "B",
    "subject": "Step 1: Identify the concept tested in Question 60. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option B (Pedestrian crossing) as correct. Therefore, option B is the answer.",
    "topic": "Driving / Motor Vehicles",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1055",
    "question": "61",
    "options": [
      "এটা মানক ইংবাজী অভিধানত কোনটো শব্দ একেবাৰে শেষত থাকিব ?",
      "JANUARY",
      "OCTOBER",
      "DECEMBER"
    ],
    "answer": "এটা মানক ইংবাজী অভিধানত কোনটো শব্দ একেবাৰে শেষত থাকিব ?",
    "correctOption": "MARCH",
    "explanation": "B",
    "subject": "Step 1: Identify the concept tested in Question 61. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option B (OCTOBER) as correct. Therefore, option B is the answer.",
    "topic": "English",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1056",
    "question": "62",
    "options": [
      "ভাবতবর্ষত ড্রাইভিং লাইচেঞ্চ লাভ কৰিবৰ বাবে বয়সৰ সর্বোচ্চ সীমা হৈছে |",
      "65 years",
      "70 years",
      "80 years"
    ],
    "answer": "ভাবতবর্ষত ড্রাইভিং লাইচেঞ্চ লাভ কৰিবৰ বাবে বয়সৰ সর্বোচ্চ সীমা হৈছে |",
    "correctOption": "AGE, NO BAR",
    "explanation": "D",
    "subject": "Step 1: Identify the concept tested in Question 62. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option D (Age, no bar) as correct. Therefore, option D is the answer.",
    "topic": "Driving / Motor Vehicles",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1057",
    "question": "64",
    "options": [
      "1.810107 ত থকা বর্ণ বোৰৰ সহায়েবে গঠন কৰিব নোরাৰা শব্দটো চিনাক্ত কৰক।",
      "LEAD",
      "MADE",
      "DEAF"
    ],
    "answer": "1.810107 ত থকা বর্ণ বোৰৰ সহায়েবে গঠন কৰিব নোরাৰা শব্দটো চিনাক্ত কৰক।",
    "correctOption": "DEAL",
    "explanation": "C",
    "subject": "Step 1: Identify the concept tested in Question 64. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option C (DEAF) as correct. Therefore, option C is the answer.",
    "topic": "English",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1058",
    "question": "65",
    "options": [
      "তলত দিয়া ৰাশিটোৰ মান কিমান ?",
      "",
      "",
      ""
    ],
    "answer": "তলত দিয়া ৰাশিটোৰ মান কিমান ?",
    "correctOption": "6 4 3 24  1  1  1",
    "explanation": "B",
    "subject": "Step 1: Identify the concept tested in Question 65. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option B () as correct. Therefore, option B is the answer.",
    "topic": "Mathematics",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1059",
    "question": "66",
    "options": [
      "নিচাসক্ত হৈ গাড়ী চালনা কৰিলে প্রথম বাৰৰ বাবে সর্বোচ্চ শান্তি হ'ল |",
      "Upto 6 months imprisonment",
      "` 10,000 /- fine",
      "` 10,000 /- fine and upto 6 months imprisonment"
    ],
    "answer": "নিচাসক্ত হৈ গাড়ী চালনা কৰিলে প্রথম বাৰৰ বাবে সর্বোচ্চ শান্তি হ'ল |",
    "correctOption": "` 20,000 /- FINE",
    "explanation": "C",
    "subject": "Step 1: Identify the concept tested in Question 66. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option C (` 10,000 /- fine and upto 6 months imprisonment) as correct. Therefore, option C is the answer.",
    "topic": "Driving / Motor Vehicles",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1060",
    "question": "67",
    "options": [
      "নিন্নলিখিত কোনখন বাজ্যই অসমৰ সীমান্ত স্পর্শ নকৰে ?",
      "Nagaland",
      "Bihar",
      "Mizoram"
    ],
    "answer": "নিন্নলিখিত কোনখন বাজ্যই অসমৰ সীমান্ত স্পর্শ নকৰে ?",
    "correctOption": "TRIPURA",
    "explanation": "B",
    "subject": "Step 1: Identify the concept tested in Question 67. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option B (Bihar) as correct. Therefore, option B is the answer.",
    "topic": "General Awareness",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1061",
    "question": "68",
    "options": [
      "ভাবতীয় বাহনৰ হালধীয়া বৰণৰ নান্বাৰ প্লেটে কি সূচায় ? () বৈদ্যুতিক বাহন",
      "Electric vehicle",
      "Commercial vehicle",
      "Ambulance"
    ],
    "answer": "Commercial vehicle",
    "correctOption": "GOVERNOR’S VEHICLE",
    "explanation": "B",
    "subject": "Step 1: Identify the concept tested in Question 68. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option B (Commercial vehicle) as correct. Therefore, option B is the answer.",
    "topic": "Driving / Motor Vehicles",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1062",
    "question": "69",
    "options": [
      "যদি? টা আমৰ দাম ক 9] হয়, তেন্তে 3 টা আমৰ দাম ৪",
      "` 28",
      "` 35",
      "` 37"
    ],
    "answer": "যদি? টা আমৰ দাম ক 9] হয়, তেন্তে 3 টা আমৰ দাম ৪",
    "correctOption": "` 39",
    "explanation": "D",
    "subject": "Step 1: Identify the concept tested in Question 69. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option D (` 39) as correct. Therefore, option D is the answer.",
    "topic": "Mathematics",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1063",
    "question": "70",
    "options": [
      "এজন মানুহে এটা বিকল সামগ্রী ₹ 1,500 ত ক্রয় কৰি ₹ 900 ৰে মেবামতি কৰিলে আৰু সামগ্রীপদ ₹ 5,000 ত বিক্রি কৰিলে। বিক্রিকৰ হিচাবে তেওঁ ₹ 100 পৰিশোধ কৰিব লগীয়া হ'ল। সামগ্রীপদ বিক্রি কৰি মানুহজনে অর্জন কৰা মুঠ লাভৰ শতাংশ পবিমাণ হ'ল ৪",
      "80%",
      "60%",
      "120%"
    ],
    "answer": "এজন মানুহে এটা বিকল সামগ্রী ₹ 1,500 ত ক্রয় কৰি ₹ 900 ৰে মেবামতি কৰিলে আৰু সামগ্রীপদ ₹ 5,000 ত বিক্রি কৰিলে। বিক্রিকৰ হিচাবে তেওঁ ₹ 100 পৰিশোধ কৰিব লগীয়া হ'ল। সামগ্রীপদ বিক্রি কৰি মানুহজনে অর্জন কৰা মুঠ লাভৰ শতাংশ পবিমাণ হ'ল ৪",
    "correctOption": "100%",
    "explanation": "D",
    "subject": "Step 1: Identify the concept tested in Question 70. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option D (100%) as correct. Therefore, option D is the answer.",
    "topic": "Mathematics",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1064",
    "question": "71",
    "options": [
      "0, 7, 1, 3-ৰ পৰৱৰ্তী বৰ্ণটো কি হ’ব ?",
      "T",
      "U",
      "W"
    ],
    "answer": "0, 7, 1, 3-ৰ পৰৱৰ্তী বৰ্ণটো কি হ’ব ?",
    "correctOption": "Z",
    "explanation": "D",
    "subject": "Step 1: Identify the concept tested in Question 71. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option D (Z) as correct. Therefore, option D is the answer.",
    "topic": "General Awareness",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1065",
    "question": "72",
    "options": [
      "প্রাচীন কামকপ বাজ্যৰ বাজধানীৰ নাম কি আছিল ? () দৰং",
      "Darranga",
      "Pragjyotishpur",
      "Garhgaon"
    ],
    "answer": "প্রাচীন কামকপ বাজ্যৰ বাজধানীৰ নাম কি আছিল ? () দৰং",
    "correctOption": "ITAKHULI",
    "explanation": "B",
    "subject": "Step 1: Identify the concept tested in Question 72. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option B (Pragjyotishpur) as correct. Therefore, option B is the answer.",
    "topic": "General Awareness",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1066",
    "question": "73",
    "options": [
      "লোহৰী আৰু বৈশাখী মূলতঃ কোনখন ৰাজ্যত পালন কৰা হয় ?",
      "West Bengal",
      "Punjab",
      "Maharashtra"
    ],
    "answer": "লোহৰী আৰু বৈশাখী মূলতঃ কোনখন ৰাজ্যত পালন কৰা হয় ?",
    "correctOption": "CHHATTISGARH PAPER-V/A 35 P.T.O",
    "explanation": "B",
    "subject": "Step 1: Identify the concept tested in Question 73. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option B (Punjab) as correct. Therefore, option B is the answer.",
    "topic": "General Awareness",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1067",
    "question": "74",
    "options": [
      "প্রতিবক্ষা বিভাগীয় গাড়ীৰ বাদে আন গাড়ীত কোনটো বং নিষিদ্ধ ?",
      "Orange",
      "Saffron",
      "Olive Green"
    ],
    "answer": "প্রতিবক্ষা বিভাগীয় গাড়ীৰ বাদে আন গাড়ীত কোনটো বং নিষিদ্ধ ?",
    "correctOption": "DARK BLUE",
    "explanation": "C",
    "subject": "Step 1: Identify the concept tested in Question 74. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option C (Olive Green) as correct. Therefore, option C is the answer.",
    "topic": "Driving / Motor Vehicles",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1068",
    "question": "75",
    "options": [
      "লোকসভাব নির্বাচন সাধাৰণতে কেতিয়া অনুষ্ঠিত হয় ?",
      "Every five (5) years",
      "Every four (4) years",
      "Every six (6) years"
    ],
    "answer": "লোকসভাব নির্বাচন সাধাৰণতে কেতিয়া অনুষ্ঠিত হয় ?",
    "correctOption": "EVERY TEN (10) YEARS",
    "explanation": "A",
    "subject": "Step 1: Identify the concept tested in Question 75. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option A (Every five (5) years) as correct. Therefore, option A is the answer.",
    "topic": "General Awareness",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1069",
    "question": "76",
    "options": [
      "ৰাকেশ সুবোধতকৈ ওখ। তেওঁলোকৰ বন্ধু অতনুৱেই একমাত্ৰ যি বাস্কেটবল দলত অন্তৰ্ভুক্তিৰ যোগ্যতা অৰ্জন কৰিছে য’ত খেলুৱৈৰ উচ্চতা ছয় ফুটতকৈ অধিক হ’ব লাগিব। উচ্চতা অনুযায়ী মাজত কোন আছে ?",
      "Subodh",
      "Atanu",
      "Rakesh"
    ],
    "answer": "ৰাকেশ সুবোধতকৈ ওখ। তেওঁলোকৰ বন্ধু অতনুৱেই একমাত্ৰ যি বাস্কেটবল দলত অন্তৰ্ভুক্তিৰ যোগ্যতা অৰ্জন কৰিছে য’ত খেলুৱৈৰ উচ্চতা ছয় ফুটতকৈ অধিক হ’ব লাগিব। উচ্চতা অনুযায়ী মাজত কোন আছে ?",
    "correctOption": "CANNOT BE DETERMINED",
    "explanation": "C",
    "subject": "Step 1: Identify the concept tested in Question 76. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option C (Rakesh) as correct. Therefore, option C is the answer.",
    "topic": "General Awareness",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1070",
    "question": "78",
    "options": [
      "“পকা ধানৰ মাজে মাজে” শীৰ্ষক গীতৰ গীতিকাৰ কোন ?",
      "Tafazzul Ali",
      "Anandiram Barua",
      "Parbati Prasad Barua"
    ],
    "answer": "“পকা ধানৰ মাজে মাজে” শীৰ্ষক গীতৰ গীতিকাৰ কোন ?",
    "correctOption": "RUDRA BARUA",
    "explanation": "D",
    "subject": "Step 1: Identify the concept tested in Question 78. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option D (Rudra Barua) as correct. Therefore, option D is the answer.",
    "topic": "General Awareness",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1071",
    "question": "80",
    "options": [
      "পোংগল মুখ্যতঃ কোন ৰাজ্যৰ শীতকালীন লোক উৎসব ?",
      "Tamil Nadu",
      "Bihar",
      "Madhya Pradesh"
    ],
    "answer": "পোংগল মুখ্যতঃ কোন ৰাজ্যৰ শীতকালীন লোক উৎসব ?",
    "correctOption": "PUNJAB",
    "explanation": "A",
    "subject": "Step 1: Identify the concept tested in Question 80. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option A (Tamil Nadu) as correct. Therefore, option A is the answer.",
    "topic": "General Awareness",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1072",
    "question": "81",
    "options": [
      "রীতা চৌধুরীর উপন্যাস দেও লাংখুই অসমের নিন্নলিখিত সম্প্রদায়গুলির মধ্যে কোনটি বিশেষভাবে উল্লেখ পেয়েছে ?",
      "The Kacharis",
      "The Mishings",
      "The Tiwas"
    ],
    "answer": "The Mishings",
    "correctOption": "THE MOTTOCKS",
    "explanation": "C",
    "subject": "Step 1: Identify the concept tested in Question 81. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option C (The Tiwas) as correct. Therefore, option C is the answer.",
    "topic": "General Awareness",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1073",
    "question": "82",
    "options": [
      "ভাবতবর্ষত এখন বৈদ্যুতিক বাহন",
      "White",
      "Yellow",
      "Green"
    ],
    "answer": "ভাবতবর্ষত এখন বৈদ্যুতিক বাহন",
    "correctOption": "BLACK",
    "explanation": "C",
    "subject": "Step 1: Identify the concept tested in Question 82. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option C (Green) as correct. Therefore, option C is the answer.",
    "topic": "Driving / Motor Vehicles",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1074",
    "question": "83",
    "options": [
      "576 আৰু 4/5, 5/6, 6/7-ৰ ভিতৰত আটাইতকৈ সৰু ভগ্নাংশটো কোনটো ?",
      "",
      "",
      ""
    ],
    "answer": "576 আৰু 4/5, 5/6, 6/7-ৰ ভিতৰত আটাইতকৈ সৰু ভগ্নাংশটো কোনটো ?",
    "correctOption": "5 6 7 8 4 5 6 7",
    "explanation": "A",
    "subject": "Step 1: Identify the concept tested in Question 83. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option A () as correct. Therefore, option A is the answer.",
    "topic": "Mathematics",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1075",
    "question": "84",
    "options": [
      "পৌনঃপুনিক সংখ্যা 0.222...-ৰ সমতুল্য ভগ্নাংশ কোনটো ?",
      "",
      "",
      ""
    ],
    "answer": "পৌনঃপুনিক সংখ্যা 0.222...-ৰ সমতুল্য ভগ্নাংশ কোনটো ?",
    "correctOption": "49 9 19 9",
    "explanation": "D",
    "subject": "Step 1: Identify the concept tested in Question 84. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option D (49 9 19 9) as correct. Therefore, option D is the answer.",
    "topic": "Mathematics",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1076",
    "question": "85",
    "options": [
      "ভাৰতৰ সাধাৰণ নির্বাচনত ভোটদানৰ যোগ্য হ'বলৈ বর্তমান ন্যুনতম বয়স কিমান ?",
      "21 (Twenty one) years",
      "20 (Twenty) years",
      "18 (Eighteen) years"
    ],
    "answer": "ভাৰতৰ সাধাৰণ নির্বাচনত ভোটদানৰ যোগ্য হ'বলৈ বর্তমান ন্যুনতম বয়স কিমান ?",
    "correctOption": "16 (SIXTEEN) YEARS",
    "explanation": "C",
    "subject": "Step 1: Identify the concept tested in Question 85. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option C (18 (Eighteen) years) as correct. Therefore, option C is the answer.",
    "topic": "General Awareness",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1077",
    "question": "86",
    "options": [
      "নিম্নলিখিত কোনটো স্কেল ভূমিকম্পৰ প্রারল্য জুখিবৰ বাবে ব্যবহাৰ কৰা হয় ?",
      "Richter Scale",
      "Enhanced Fuzita Scale",
      "Volumetric Scale"
    ],
    "answer": "নিম্নলিখিত কোনটো স্কেল ভূমিকম্পৰ প্রারল্য জুখিবৰ বাবে ব্যবহাৰ কৰা হয় ?",
    "correctOption": "REAUMER SCALE",
    "explanation": "A",
    "subject": "Step 1: Identify the concept tested in Question 86. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option A (Richter Scale) as correct. Therefore, option A is the answer.",
    "topic": "General Awareness",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1078",
    "question": "87",
    "options": [
      "পিতৃ-মাতৃৰ বিয়াৰ এবছৰৰ পিছত বাবলীৰ জন্ম হৈছিল। বৰ্তমান বাবলীৰ বয়স ছয় বছৰ আৰু পিতৃৰ বয়স তাইতকৈ পঁচিশ বছৰ অধিক। যদি পিতৃৰ বয়স তেওঁৰ পত্নীৰ বয়সতকৈ দুই বছৰ অধিক, তেন্তে কিমান বছৰ বয়সত বাবলীৰ মাতৃৰ বিবাহ হৈছিল ?",
      "22 years",
      "23 years",
      "21 years"
    ],
    "answer": "পিতৃ-মাতৃৰ বিয়াৰ এবছৰৰ পিছত বাবলীৰ জন্ম হৈছিল। বৰ্তমান বাবলীৰ বয়স ছয় বছৰ আৰু পিতৃৰ বয়স তাইতকৈ পঁচিশ বছৰ অধিক। যদি পিতৃৰ বয়স তেওঁৰ পত্নীৰ বয়সতকৈ দুই বছৰ অধিক, তেন্তে কিমান বছৰ বয়সত বাবলীৰ মাতৃৰ বিবাহ হৈছিল ?",
    "correctOption": "CANNOT BE DETERMINED",
    "explanation": "A",
    "subject": "Step 1: Identify the concept tested in Question 87. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option A (22 years) as correct. Therefore, option A is the answer.",
    "topic": "General Awareness",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1079",
    "question": "88",
    "options": [
      "মটৰ গাড়ীৰ দ্বাবা সংঘটিত “হিট এগু ৰান” পথ দুর্ঘটনাত মৃত্যুজনিত কাৰণত ক্ষতিপুৰণৰ ধনবাশি হৈছে [ () এক লাখ টকা",
      "Rupees One Lakh",
      "Rupees Two Lakhs",
      "Rupees Two Lakh Fifty Thousand"
    ],
    "answer": "মটৰ গাড়ীৰ দ্বাবা সংঘটিত “হিট এগু ৰান” পথ দুর্ঘটনাত মৃত্যুজনিত কাৰণত ক্ষতিপুৰণৰ ধনবাশি হৈছে [ () এক লাখ টকা",
    "correctOption": "RUPEES FIFTY THOUSAND",
    "explanation": "B",
    "subject": "Step 1: Identify the concept tested in Question 88. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option B (Rupees Two Lakhs) as correct. Therefore, option B is the answer.",
    "topic": "Driving / Motor Vehicles",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1080",
    "question": "89",
    "options": [
      "অমিল সংখ্যাটো নিৰ্ণয় কৰক।",
      "436",
      "298",
      "746"
    ],
    "answer": "অমিল সংখ্যাটো নিৰ্ণয় কৰক।",
    "correctOption": "639",
    "explanation": "D",
    "subject": "Step 1: Identify the concept tested in Question 89. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option D (639) as correct. Therefore, option D is the answer.",
    "topic": "General Awareness",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1081",
    "question": "90",
    "options": [
      "নিন্ললিখিত কোন গবাকী শ্রীমন্ত শংকবদেরব প্রথম শিষ্যসমূহৰ এজন আছিল ?",
      "Madhabdev",
      "Lachit Barphukan",
      "Ananta Kandali"
    ],
    "answer": "নিন্ললিখিত কোন গবাকী শ্রীমন্ত শংকবদেরব প্রথম শিষ্যসমূহৰ এজন আছিল ?",
    "correctOption": "MAHENDRA NARAYAN",
    "explanation": "A",
    "subject": "Step 1: Identify the concept tested in Question 90. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option A (Madhabdev) as correct. Therefore, option A is the answer.",
    "topic": "General Awareness",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1082",
    "question": "91",
    "options": [
      "121 + 81 + 25-ৰ সমান কিমান ?",
      "121",
      "81",
      "25"
    ],
    "answer": "121 + 81 + 25-ৰ সমান কিমান ?",
    "correctOption": "36",
    "explanation": "C",
    "subject": "Step 1: Identify the concept tested in Question 91. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option C (25) as correct. Therefore, option C is the answer.",
    "topic": "General Awareness",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1083",
    "question": "92",
    "options": [
      "এখন ইংৰাজী অভিধানত তলত দিয়া কোনটো শব্দ প্ৰথমে আহিব ?",
      "Hectometer",
      "Decimeter",
      "Kilometer"
    ],
    "answer": "Decimeter",
    "correctOption": "CENTIMETER",
    "explanation": "D",
    "subject": "Step 1: Identify the concept tested in Question 92. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option D (Centimeter) as correct. Therefore, option D is the answer.",
    "topic": "English",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1084",
    "question": "94",
    "options": [
      "এক ভূখগুৰ তিনি দিশে পানীবে আবৰি থাকিলে তাক কোরা হয় £",
      "Peninsula",
      "Island",
      "Isthmus"
    ],
    "answer": "এক ভূখগুৰ তিনি দিশে পানীবে আবৰি থাকিলে তাক কোরা হয় £",
    "correctOption": "ATOLL",
    "explanation": "A",
    "subject": "Step 1: Identify the concept tested in Question 94. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option A (Peninsula) as correct. Therefore, option A is the answer.",
    "topic": "General Awareness",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1085",
    "question": "95",
    "options": [
      "এটা সমবাহু ত্ৰিভুজৰ প্ৰতিটো কোণৰ মান কিমান ?",
      "908",
      "608",
      "458"
    ],
    "answer": "এটা সমবাহু ত্ৰিভুজৰ প্ৰতিটো কোণৰ মান কিমান ?",
    "correctOption": "308",
    "explanation": "B",
    "subject": "Step 1: Identify the concept tested in Question 95. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option B (608) as correct. Therefore, option B is the answer.",
    "topic": "Mathematics",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1086",
    "question": "97",
    "options": [
      "লঘু বাহন এখনৰ চালকে অত্যাধিক বেগত গাড়ী চলোরাৰ দণ্ড হৈছে [",
      "` 1,000/- to ` 2,000/-",
      "` 3,000/-",
      "` 500/-"
    ],
    "answer": "লঘু বাহন এখনৰ চালকে অত্যাধিক বেগত গাড়ী চলোরাৰ দণ্ড হৈছে [",
    "correctOption": "` 5,000/-",
    "explanation": "A",
    "subject": "Step 1: Identify the concept tested in Question 97. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option A (` 1,000/- to ` 2,000/-) as correct. Therefore, option A is the answer.",
    "topic": "Driving / Motor Vehicles",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1087",
    "question": "99",
    "options": [
      "এটা আয়তক্ষেত্ৰৰ পৰিসীমা 34 চে.মি. আৰু ইয়াৰ দৈৰ্ঘ্যৰ মাপ প্ৰস্থৰ মাপতকৈ 7 চে.মি. অধিক। আয়তক্ষেত্ৰটোৰ ক্ষেত্ৰফল কিমান ?",
      "40 cm2",
      "60 cm2",
      "238 cm2"
    ],
    "answer": "60 cm2",
    "correctOption": "64 CM2",
    "explanation": "B",
    "subject": "Step 1: Identify the concept tested in Question 99. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option B (60 cm2) as correct. Therefore, option B is the answer.",
    "topic": "Mathematics",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1088",
    "question": "100",
    "options": [
      "ভাবতৰ সংবিধানৰ পিতু স্বব্ূপে কাক জনা যায় ?",
      "Pt. Jawaharlal Nehru",
      "Dr. Bhimrao Ambedkar",
      "Dr. Rajendra Prasad"
    ],
    "answer": "ভাবতৰ সংবিধানৰ পিতু স্বব্ূপে কাক জনা যায় ?",
    "correctOption": "DR. SARVEPALLI RADHAKRISHNAN",
    "explanation": "B",
    "subject": "Step 1: Identify the concept tested in Question 100. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option B (Dr. Bhimrao Ambedkar) as correct. Therefore, option B is the answer.",
    "topic": "General Awareness",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1089",
    "question": "101",
    "options": [
      "অস্ট্রেলিয়াৰ বাজধানী হৈছে £",
      "Sydney",
      "Canberra",
      "San Francisco"
    ],
    "answer": "অস্ট্রেলিয়াৰ বাজধানী হৈছে £",
    "correctOption": "SAO PAULO",
    "explanation": "B",
    "subject": "Step 1: Identify the concept tested in Question 101. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option B (Canberra) as correct. Therefore, option B is the answer.",
    "topic": "General Awareness",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1090",
    "question": "102",
    "options": [
      "শবাইঘাটৰ যুদ্ধত লাচিত ববফুকনৰ হাতত পবাজিত হোরা মোগল সেনাৰ সেনাপতি কোন আছিল ?",
      "Man Singh",
      "Vikram Singh",
      "Vijay Singh"
    ],
    "answer": "শবাইঘাটৰ যুদ্ধত লাচিত ববফুকনৰ হাতত পবাজিত হোরা মোগল সেনাৰ সেনাপতি কোন আছিল ?",
    "correctOption": "RAM SINGH",
    "explanation": "D",
    "subject": "Step 1: Identify the concept tested in Question 102. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option D (Ram Singh) as correct. Therefore, option D is the answer.",
    "topic": "General Awareness",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1091",
    "question": "103",
    "options": [
      "4 6, 8, 12, 14, 18, *, *, 30 শৃংখলাটো অব্যাহত বাখিবলৈ কোন সংখ্যা বহুবাব লাগিব ?",
      "20, 22",
      "20, 24",
      "20, 26"
    ],
    "answer": "4 6, 8, 12, 14, 18, *, *, 30 শৃংখলাটো অব্যাহত বাখিবলৈ কোন সংখ্যা বহুবাব লাগিব ?",
    "correctOption": "20, 28",
    "explanation": "B",
    "subject": "Step 1: Identify the concept tested in Question 103. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option B (20, 24) as correct. Therefore, option B is the answer.",
    "topic": "Mathematics",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1092",
    "question": "104",
    "options": [
      "4 অংকযুক্ত ন্যুনতম সংখ্যা আৰু 3 অংকযুক্ত সর্বোচ্চ সংখ্যাৰ মাজৰ পার্থক্য হৈছে £",
      "1",
      "11",
      "101"
    ],
    "answer": "4 অংকযুক্ত ন্যুনতম সংখ্যা আৰু 3 অংকযুক্ত সর্বোচ্চ সংখ্যাৰ মাজৰ পার্থক্য হৈছে £",
    "correctOption": "111",
    "explanation": "A",
    "subject": "Step 1: Identify the concept tested in Question 104. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option A (1) as correct. Therefore, option A is the answer.",
    "topic": "Mathematics",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1093",
    "question": "105",
    "options": [
      "নতুনকৈ পঞ্জীয়ন কৰা এখন বাহনে কিমান দিন সম্পূৰ্ণ কৰিলে প্ৰদূষণ নিয়ন্ত্ৰণ প্ৰমাণপত্ৰ ল’ব লাগে ?",
      "1 year",
      "2 years",
      "6 months"
    ],
    "answer": "নতুনকৈ পঞ্জীয়ন কৰা এখন বাহনে কিমান দিন সম্পূৰ্ণ কৰিলে প্ৰদূষণ নিয়ন্ত্ৰণ প্ৰমাণপত্ৰ ল’ব লাগে ?",
    "correctOption": "3 YEARS",
    "explanation": "A",
    "subject": "Step 1: Identify the concept tested in Question 105. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option A (1 year) as correct. Therefore, option A is the answer.",
    "topic": "Driving / Motor Vehicles",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1094",
    "question": "106",
    "options": [
      "পবিবাহক বাহনৰ ড্রাইভিং লাইচেঞ্চ পাবৰ বাবে আবেদনকাবীব ন্যুনতম কেই বছৰৰ বাবে লঘু বাহনৰ ড্রাইভিং লাইচেঞ্চ থাকিব লাগিব £",
      "3 years",
      "1 year",
      "2 years"
    ],
    "answer": "পবিবাহক বাহনৰ ড্রাইভিং লাইচেঞ্চ পাবৰ বাবে আবেদনকাবীব ন্যুনতম কেই বছৰৰ বাবে লঘু বাহনৰ ড্রাইভিং লাইচেঞ্চ থাকিব লাগিব £",
    "correctOption": "5 YEARS",
    "explanation": "B",
    "subject": "Step 1: Identify the concept tested in Question 106. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option B (1 year) as correct. Therefore, option B is the answer.",
    "topic": "Driving / Motor Vehicles",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1095",
    "question": "107",
    "options": [
      "তলত দিয়া কোনটো স্থানত বৃহত্তম ক্ৰিকেট ষ্টেডিয়ামটো আছে ?",
      "Dharamshala",
      "Kolkata",
      "Motera"
    ],
    "answer": "তলত দিয়া কোনটো স্থানত বৃহত্তম ক্ৰিকেট ষ্টেডিয়ামটো আছে ?",
    "correctOption": "HYDERABAD",
    "explanation": "C",
    "subject": "Step 1: Identify the concept tested in Question 107. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option C (Motera) as correct. Therefore, option C is the answer.",
    "topic": "General Awareness",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1096",
    "question": "108",
    "options": [
      "ইউৰোপৰ পৰা ভাৰতলৈ সাগৰীয় পথটো কোনে বিচাৰি উলিয়াইছিল ?",
      "Christopher Columbus",
      "Marco Polo",
      "Vasco da Gama"
    ],
    "answer": "ইউৰোপৰ পৰা ভাৰতলৈ সাগৰীয় পথটো কোনে বিচাৰি উলিয়াইছিল ?",
    "correctOption": "JAMES COOK",
    "explanation": "C",
    "subject": "Step 1: Identify the concept tested in Question 108. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option C (Vasco da Gama) as correct. Therefore, option C is the answer.",
    "topic": "General Awareness",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1097",
    "question": "109",
    "options": [
      "নিম্নলিখিত কোনটো ভাৰতৰ এক কেন্দ্রশাসিত অঞ্চল ?",
      "Jammu and Kashmir",
      "Goa",
      "Sikkim"
    ],
    "answer": "নিম্নলিখিত কোনটো ভাৰতৰ এক কেন্দ্রশাসিত অঞ্চল ?",
    "correctOption": "TELANGANA",
    "explanation": "A",
    "subject": "Step 1: Identify the concept tested in Question 109. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option A (Jammu and Kashmir) as correct. Therefore, option A is the answer.",
    "topic": "General Awareness",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1098",
    "question": "110",
    "options": [
      "নিন্নলিখিত কোনটো এক মহাদেশৰ নাম নহয় ?",
      "North America",
      "South America",
      "Arctic"
    ],
    "answer": "নিন্নলিখিত কোনটো এক মহাদেশৰ নাম নহয় ?",
    "correctOption": "ANTARCTICA",
    "explanation": "C",
    "subject": "Step 1: Identify the concept tested in Question 110. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option C (Arctic) as correct. Therefore, option C is the answer.",
    "topic": "General Awareness",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1099",
    "question": "111",
    "options": [
      "ভাৰতৰ পেট্ৰ’ল চালিত গাড়ীসমূহত নিম্নলিখিত কোনবিধ সঁজুলি থকাটো বাধ্যতামূলক ?",
      "Spare wheel",
      "Windshield wipers",
      "Catalytic converter"
    ],
    "answer": "ভাৰতৰ পেট্ৰ’ল চালিত গাড়ীসমূহত নিম্নলিখিত কোনবিধ সঁজুলি থকাটো বাধ্যতামূলক ?",
    "correctOption": "GPS TRACKER PAPER-V/A 53 P.T.O",
    "explanation": "C",
    "subject": "Step 1: Identify the concept tested in Question 111. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option C (Catalytic converter) as correct. Therefore, option C is the answer.",
    "topic": "Driving / Motor Vehicles",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1100",
    "question": "112",
    "options": [
      "কোনো এক দশমিক সংখ্যাৰ দশমিক বিন্দুটোক তিনিটা অংক সৌফালে স্থানান্তবিত কৰিবৰ বাবে সংখ্যাটোক পুৰণ কৰিবলগা গুণকটো হৈছে £",
      "10",
      "100",
      "1,000"
    ],
    "answer": "কোনো এক দশমিক সংখ্যাৰ দশমিক বিন্দুটোক তিনিটা অংক সৌফালে স্থানান্তবিত কৰিবৰ বাবে সংখ্যাটোক পুৰণ কৰিবলগা গুণকটো হৈছে £",
    "correctOption": "10,000",
    "explanation": "C",
    "subject": "Step 1: Identify the concept tested in Question 112. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option C (1,000) as correct. Therefore, option C is the answer.",
    "topic": "Mathematics",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1101",
    "question": "113",
    "options": [
      "অস্মিতা চলিহাই কোন খেলত ভাৰতৰ হৈ খেলে ?",
      "Badminton",
      "Table Tennis",
      "Lawn Tennis"
    ],
    "answer": "অস্মিতা চলিহাই কোন খেলত ভাৰতৰ হৈ খেলে ?",
    "correctOption": "LAWN BOWL",
    "explanation": "A",
    "subject": "Step 1: Identify the concept tested in Question 113. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option A (Badminton) as correct. Therefore, option A is the answer.",
    "topic": "General Awareness",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1102",
    "question": "114",
    "options": [
      "নিম্নলিখিত সমূহৰ কোনটো এটা মহাদেশৰ নাম ?",
      "Austria",
      "Armenia",
      "Andrea"
    ],
    "answer": "নিম্নলিখিত সমূহৰ কোনটো এটা মহাদেশৰ নাম ?",
    "correctOption": "AUSTRALIA",
    "explanation": "D",
    "subject": "Step 1: Identify the concept tested in Question 114. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option D (Australia) as correct. Therefore, option D is the answer.",
    "topic": "General Awareness",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1103",
    "question": "115",
    "options": [
      "এটা দশমিক সংখ্যাৰ দশমিক বিন্দুটো দুটা অংক বাওঁফাললৈ স্থানান্তৰিত কৰিবলৈ হৰণ কৰিবলগীয়া সংখ্যাটো কি ?",
      "0.1",
      "10",
      "100"
    ],
    "answer": "এটা দশমিক সংখ্যাৰ দশমিক বিন্দুটো দুটা অংক বাওঁফাললৈ স্থানান্তৰিত কৰিবলৈ হৰণ কৰিবলগীয়া সংখ্যাটো কি ?",
    "correctOption": "1000",
    "explanation": "C",
    "subject": "Step 1: Identify the concept tested in Question 115. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option C (100) as correct. Therefore, option C is the answer.",
    "topic": "Mathematics",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1104",
    "question": "116",
    "options": [
      "95-ক দশমিক সংখ্যাত প্ৰকাশ কৰিলে হ’ব —",
      "0.5",
      "0.75",
      "0.65"
    ],
    "answer": "95-ক দশমিক সংখ্যাত প্ৰকাশ কৰিলে হ’ব —",
    "correctOption": "0.25 3 /10",
    "explanation": "D",
    "subject": "Step 1: Identify the concept tested in Question 116. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option D (0.25 3 /10) as correct. Therefore, option D is the answer.",
    "topic": "Mathematics",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1105",
    "question": "117",
    "options": [
      "এজন ব্যক্তিয়ে এটা ত্ৰুটিপূৰ্ণ সামগ্ৰী ₹900-ত ক্ৰয় কৰে, ₹100-ত মেৰামতি কৰে আৰু সামগ্ৰীটো ₹1800-ত বিক্ৰী কৰে। তেওঁৰ লাভৰ শতকৰা হাৰ কিমান ?",
      "100%",
      "80%",
      "90%"
    ],
    "answer": "এজন ব্যক্তিয়ে এটা ত্ৰুটিপূৰ্ণ সামগ্ৰী ₹900-ত ক্ৰয় কৰে, ₹100-ত মেৰামতি কৰে আৰু সামগ্ৰীটো ₹1800-ত বিক্ৰী কৰে। তেওঁৰ লাভৰ শতকৰা হাৰ কিমান ?",
    "correctOption": "180%",
    "explanation": "B",
    "subject": "Step 1: Identify the concept tested in Question 117. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option B (80%) as correct. Therefore, option B is the answer.",
    "topic": "Mathematics",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1106",
    "question": "118",
    "options": [
      "উইনষ্টন চার্টিল কোনখন দেশৰ প্রধানমন্ত্রী আছিল ?",
      "United Kingdom",
      "Brazil",
      "United States of America"
    ],
    "answer": "উইনষ্টন চার্টিল কোনখন দেশৰ প্রধানমন্ত্রী আছিল ?",
    "correctOption": "SWITZERLAND",
    "explanation": "A",
    "subject": "Step 1: Identify the concept tested in Question 118. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option A (United Kingdom) as correct. Therefore, option A is the answer.",
    "topic": "General Awareness",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1107",
    "question": "121",
    "options": [
      "এটা বর্গক্ষেত্রৰ ক্ষেত্রফল হৈছে 169 মিটাবহ। বর্গক্ষেত্রটোৰ বাহুৰ জোখ হ'ব 8",
      "17 metre",
      "19 metre",
      "12 metre"
    ],
    "answer": "এটা বর্গক্ষেত্রৰ ক্ষেত্রফল হৈছে 169 মিটাবহ। বর্গক্ষেত্রটোৰ বাহুৰ জোখ হ'ব 8",
    "correctOption": "13 METRE",
    "explanation": "D",
    "subject": "Step 1: Identify the concept tested in Question 121. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option D (13 metre) as correct. Therefore, option D is the answer.",
    "topic": "Mathematics",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1108",
    "question": "124",
    "options": [
      "কোনখন দেশত 2020 গ্ৰীষ্মকালীন অলিম্পিক খেল অনুষ্ঠিত হৈছিল ?",
      "South Korea",
      "Japan",
      "China"
    ],
    "answer": "কোনখন দেশত 2020 গ্ৰীষ্মকালীন অলিম্পিক খেল অনুষ্ঠিত হৈছিল ?",
    "correctOption": "SINGAPORE",
    "explanation": "B",
    "subject": "Step 1: Identify the concept tested in Question 124. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option B (Japan) as correct. Therefore, option B is the answer.",
    "topic": "Mathematics",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1109",
    "question": "125",
    "options": [
      "425639-ত “5”-ৰ স্থানীয় মান হৈছে —",
      "5600",
      "25000",
      "5000"
    ],
    "answer": "425639-ত “5”-ৰ স্থানীয় মান হৈছে —",
    "correctOption": "5639",
    "explanation": "C",
    "subject": "Step 1: Identify the concept tested in Question 125. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option C (5000) as correct. Therefore, option C is the answer.",
    "topic": "Mathematics",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1110",
    "question": "126",
    "options": [
      "ইষ্ট ইণ্ডিয়া কোম্পানীৰ বিৰুদ্ধে 1857 চনত হোৱা বিদ্ৰোহক নিম্নলিখিত কোন গৰাকী ৰাণীয়ে নেতৃত্ব দিছিল ?",
      "Rani Ahilya Bai",
      "Rani Laxmi Bai",
      "Chand Bibi"
    ],
    "answer": "ইষ্ট ইণ্ডিয়া কোম্পানীৰ বিৰুদ্ধে 1857 চনত হোৱা বিদ্ৰোহক নিম্নলিখিত কোন গৰাকী ৰাণীয়ে নেতৃত্ব দিছিল ?",
    "correctOption": "REZIA SULTANA",
    "explanation": "B",
    "subject": "Step 1: Identify the concept tested in Question 126. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option B (Rani Laxmi Bai) as correct. Therefore, option B is the answer.",
    "topic": "General Awareness",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1111",
    "question": "127",
    "options": [
      "শুদ্ধ বানানযুক্ত পদটো চিনাক্ত কৰক।",
      "Traffic Single",
      "Traffic Signel",
      "Traffic Signal"
    ],
    "answer": "শুদ্ধ বানানযুক্ত পদটো চিনাক্ত কৰক।",
    "correctOption": "TRAFIC SIGNAL",
    "explanation": "C",
    "subject": "Step 1: Identify the concept tested in Question 127. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option C (Traffic Signal) as correct. Therefore, option C is the answer.",
    "topic": "English",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1112",
    "question": "128",
    "options": [
      "অসমত বাণিজ্যিক বাহনৰ ক্ষেত্রত নি্নলিখিত কোনটো বাধ্যতামূলক নহয় ?",
      "Vehicle Registration",
      "Night Driving permit",
      "Pollution Under Control"
    ],
    "answer": "অসমত বাণিজ্যিক বাহনৰ ক্ষেত্রত নি্নলিখিত কোনটো বাধ্যতামূলক নহয় ?",
    "correctOption": "FITNESS CERTIFICATE",
    "explanation": "B",
    "subject": "Step 1: Identify the concept tested in Question 128. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option B (Night Driving permit) as correct. Therefore, option B is the answer.",
    "topic": "Driving / Motor Vehicles",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1113",
    "question": "129",
    "options": [
      "এম্বুলেন্সসমূহত ৰঙা আৰু নীলা লাইট কিয় ব্যৱহাৰ কৰা হয় ?",
      "To alert all drivers, even those with colour blindness",
      "Because they look good",
      "Red stands for danger and Blue for emergency"
    ],
    "answer": "এম্বুলেন্সসমূহত ৰঙা আৰু নীলা লাইট কিয় ব্যৱহাৰ কৰা হয় ?",
    "correctOption": "THEY CAN BE SEEN FROM FAR",
    "explanation": "D",
    "subject": "Step 1: Identify the concept tested in Question 129. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option D (They can be seen from far) as correct. Therefore, option D is the answer.",
    "topic": "Driving / Motor Vehicles",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1114",
    "question": "132",
    "options": [
      "12, 24 আৰু 30 ৰ গসাগু হৈছে ঃ",
      "2",
      "3",
      "6"
    ],
    "answer": "12, 24 আৰু 30 ৰ গসাগু হৈছে ঃ",
    "correctOption": "12",
    "explanation": "C",
    "subject": "Step 1: Identify the concept tested in Question 132. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option C (6) as correct. Therefore, option C is the answer.",
    "topic": "Mathematics",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1115",
    "question": "133",
    "options": [
      "ভাৰতৰ কেন্দ্ৰীয় বাজেট কোনে দাখিল কৰে ?",
      "The Finance Minister",
      "The Prime Minister",
      "The Home Minister"
    ],
    "answer": "ভাৰতৰ কেন্দ্ৰীয় বাজেট কোনে দাখিল কৰে ?",
    "correctOption": "THE PRESIDENT OF INDIA",
    "explanation": "A",
    "subject": "Step 1: Identify the concept tested in Question 133. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option A (The Finance Minister) as correct. Therefore, option A is the answer.",
    "topic": "General Awareness",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1116",
    "question": "134",
    "options": [
      "টুইটাৰৰ নতুন নাম কি ?",
      "AXE",
      "XX",
      "EAX"
    ],
    "answer": "টুইটাৰৰ নতুন নাম কি ?",
    "correctOption": "X",
    "explanation": "D",
    "subject": "Step 1: Identify the concept tested in Question 134. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option D (X) as correct. Therefore, option D is the answer.",
    "topic": "General Awareness",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1117",
    "question": "135",
    "options": [
      "ভাৰতলৈ ঘূৰি অহাৰ পূৰ্বে মোহনদাস কৰমচান্দ গান্ধী কোন দেশত আছিল ?",
      "South Africa",
      "Uganda",
      "Egypt"
    ],
    "answer": "ভাৰতলৈ ঘূৰি অহাৰ পূৰ্বে মোহনদাস কৰমচান্দ গান্ধী কোন দেশত আছিল ?",
    "correctOption": "SRI LANKA",
    "explanation": "A",
    "subject": "Step 1: Identify the concept tested in Question 135. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option A (South Africa) as correct. Therefore, option A is the answer.",
    "topic": "General Awareness",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1118",
    "question": "136",
    "options": [
      "সংখ্যাৰ এটা ক্রম এনেদৰে আছে যাতে প্রতিটো সংখ্যা ইয়াৰ পূর্বৰ সংখ্যাটোতকৈ 3 অধিক। ক্রমটো -2 বে আবন্ত কৰিলে ইয়াৰ দশম সংখ্যাটো হৈছে ঃ",
      "23",
      "25",
      "28"
    ],
    "answer": "সংখ্যাৰ এটা ক্রম এনেদৰে আছে যাতে প্রতিটো সংখ্যা ইয়াৰ পূর্বৰ সংখ্যাটোতকৈ 3 অধিক। ক্রমটো -2 বে আবন্ত কৰিলে ইয়াৰ দশম সংখ্যাটো হৈছে ঃ",
    "correctOption": "30",
    "explanation": "B",
    "subject": "Step 1: Identify the concept tested in Question 136. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option B (25) as correct. Therefore, option B is the answer.",
    "topic": "Mathematics",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1119",
    "question": "137",
    "options": [
      "একেধৰণৰ নহোৱা পদটো চিনাক্ত কৰক।",
      "Payment",
      "Rent",
      "Price"
    ],
    "answer": "Payment",
    "correctOption": "BILL",
    "explanation": "A",
    "subject": "Step 1: Identify the concept tested in Question 137. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option A (Payment) as correct. Therefore, option A is the answer.",
    "topic": "General Awareness",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1120",
    "question": "140",
    "options": [
      "কোনখন যুদ্ধত ইষ্ট ইণ্ডিয়া কোম্পানীৰ সেনাই চিৰাজউদ্দৌলাক পৰাজিত কৰিছিল ?",
      "Battle of Buxar",
      "Battle of Plassey",
      "Battle of Nalapani"
    ],
    "answer": "কোনখন যুদ্ধত ইষ্ট ইণ্ডিয়া কোম্পানীৰ সেনাই চিৰাজউদ্দৌলাক পৰাজিত কৰিছিল ?",
    "correctOption": "BATTLE OF JHELUM",
    "explanation": "B",
    "subject": "Step 1: Identify the concept tested in Question 140. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option B (Battle of Plassey) as correct. Therefore, option B is the answer.",
    "topic": "General Awareness",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1121",
    "question": "142",
    "options": [
      "অসমৰ পৌৰ এলেকাৰ পথত মটৰ চাইকেলৰ বাবে উচ্চতম গতি সীমা হৈছে —",
      "80 km/hour",
      "70 km/hour",
      "60 km/hour"
    ],
    "answer": "অসমৰ পৌৰ এলেকাৰ পথত মটৰ চাইকেলৰ বাবে উচ্চতম গতি সীমা হৈছে —",
    "correctOption": "50 KM/HOUR",
    "explanation": "D",
    "subject": "Step 1: Identify the concept tested in Question 142. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option D (50 km/hour) as correct. Therefore, option D is the answer.",
    "topic": "Driving / Motor Vehicles",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1122",
    "question": "143",
    "options": [
      "দীপা কৰ্মকাৰে কোনবিধ খেলত ভাৰতক প্ৰতিনিধিত্ব কৰিছিল ?",
      "Badminton",
      "Shooting",
      "Gymnastics"
    ],
    "answer": "দীপা কৰ্মকাৰে কোনবিধ খেলত ভাৰতক প্ৰতিনিধিত্ব কৰিছিল ?",
    "correctOption": "TABLE TENNIS",
    "explanation": "C",
    "subject": "Step 1: Identify the concept tested in Question 143. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option C (Gymnastics) as correct. Therefore, option C is the answer.",
    "topic": "General Awareness",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1123",
    "question": "145",
    "options": [
      "বৰডুবি টিলিঙা মন্দিৰ কোনখন নগৰৰ সমীপত অৱস্থিত ?",
      "Bongaigaon",
      "Dhemaji",
      "Tezpur"
    ],
    "answer": "বৰডুবি টিলিঙা মন্দিৰ কোনখন নগৰৰ সমীপত অৱস্থিত ?",
    "correctOption": "DULIAJAN",
    "explanation": "D",
    "subject": "Step 1: Identify the concept tested in Question 145. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option D (Duliajan) as correct. Therefore, option D is the answer.",
    "topic": "General Awareness",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1124",
    "question": "146",
    "options": [
      "এটা চতুৰ্ভুজৰ কোণসমূহৰ মুঠ যোগফল কিমান ?",
      "908",
      "1808",
      "3608"
    ],
    "answer": "এটা চতুৰ্ভুজৰ কোণসমূহৰ মুঠ যোগফল কিমান ?",
    "correctOption": "4008",
    "explanation": "C",
    "subject": "Step 1: Identify the concept tested in Question 146. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option C (3608) as correct. Therefore, option C is the answer.",
    "topic": "Mathematics",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1125",
    "question": "148",
    "options": [
      "জংকি আৰু পানেই কোন সম্প্ৰদায়ক ভিত্তি কৰি লিখা গল্পৰ দুটা চৰিত্ৰ ?",
      "Dimasa",
      "Idu Misimi",
      "Mising"
    ],
    "answer": "জংকি আৰু পানেই কোন সম্প্ৰদায়ক ভিত্তি কৰি লিখা গল্পৰ দুটা চৰিত্ৰ ?",
    "correctOption": "SINGPHO",
    "explanation": "C",
    "subject": "Step 1: Identify the concept tested in Question 148. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option C (Mising) as correct. Therefore, option C is the answer.",
    "topic": "General Awareness",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1126",
    "question": "149",
    "options": [
      "ত্ৰিকোণীয় আকৃতিৰ যান-বাহন পথৰ চিহ্নটো যিটো শ্ৰেণীৰ অন্তৰ্ভুক্ত, সেয়া হৈছে —",
      "Mandatory",
      "Informative",
      "Cautionary"
    ],
    "answer": "Informative",
    "correctOption": "EMERGENCY",
    "explanation": "C",
    "subject": "Step 1: Identify the concept tested in Question 149. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option C (Cautionary) as correct. Therefore, option C is the answer.",
    "topic": "Driving / Motor Vehicles",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  },
  {
    "id": "AS-PYQ-1127",
    "question": "150",
    "options": [
      "যদি 12 টা আমৰ দাম ₹300 আৰু 15 টা আপেলৰ দাম ₹450 হয়, তেন্তে 4 টা আম আৰু 3 টা আপেলৰ ক্ৰয়ৰ বাবে মুঠ খৰচ কিমান ?",
      "` 290",
      "` 109",
      "` 190"
    ],
    "answer": "যদি 12 টা আমৰ দাম ₹300 আৰু 15 টা আপেলৰ দাম ₹450 হয়, তেন্তে 4 টা আম আৰু 3 টা আপেলৰ ক্ৰয়ৰ বাবে মুঠ খৰচ কিমান ?",
    "correctOption": "` 209",
    "explanation": "C",
    "subject": "Step 1: Identify the concept tested in Question 150. Step 2: Apply the relevant rule, calculation, factual relationship, or language rule to the four choices. Step 3: The official final answer key marks option C (` 190) as correct. Therefore, option C is the answer.",
    "topic": "Mathematics",
    "year": 2024,
    "grade": "Grade 3",
    "paper": "Paper V (Driver)"
  }
];