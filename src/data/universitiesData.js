// universitiesData.js — all university data used across the app

// university images
import oxford        from "../assets/unis/oxford.jpg";
import cambridge     from "../assets/unis/cambridge.jpg";
import imperial      from "../assets/unis/imperial.jpg";
import ucl           from "../assets/unis/ucl.jpg";
import kcl           from "../assets/unis/kcl.jpg";
import lse           from "../assets/unis/lse.jpg";
import edinburgh     from "../assets/unis/edinburgh.jpg";
import manchester    from "../assets/unis/manchester.jpg";
import bristol       from "../assets/unis/bristol.jpg";
import warwick       from "../assets/unis/warwick.jpg";
import birmingham    from "../assets/unis/birmingham.jpg";
import leeds         from "../assets/unis/leeds.jpg";
import sheffield     from "../assets/unis/sheffield.jpg";
import nottingham    from "../assets/unis/nottingham.jpg";
import southampton   from "../assets/unis/southampton.jpg";
import exeter        from "../assets/unis/exeter.jpg";
import york          from "../assets/unis/york.jpg";
import newcastle     from "../assets/unis/newcastle.jpg";
import liverpool     from "../assets/unis/liverpool.jpg";
import cardiff       from "../assets/unis/cardiff.jpg";
import glasgow       from "../assets/unis/glasgow.jpg";
import durham        from "../assets/unis/durham.jpg";
import greenwich     from "../assets/unis/greenwich.jpg";
import westminster   from "../assets/unis/westminster.jpg";
import citylondon    from "../assets/unis/citylondon.jpg";
import oxfordbrookes from "../assets/unis/oxfordbrookes.jpg";
import regents       from "../assets/unis/regents.jpg";

// main data array
export const universitiesData = [
  {
    id: "oxford",
    name: "University of Oxford",
    city: "Oxford",
    tag: "Elite",
    img: oxford,
    tuition: 38000,
    subjectGroup: "Humanities & Social Science",
    focus: "Law, Medicine, Humanities, Research",
    lifestyle: "Historic city",
    desc: "World-leading academic reputation with strong long-term value.",
    overview:
      "Oxford is one of the most respected universities in the world and is known for academic excellence, historic prestige, and strong long-term outcomes.",
    bestFor:
      "Students aiming for a top-tier academic environment with high ambition and strong long-term career value.",
    highlights: [
      "Global prestige and recognition",
      "Strong academic and research culture",
      "Historic student environment",
      "Excellent long-term reputation",
    ],
    officialUrl: "https://www.ox.ac.uk/",
    internationalUrl: "https://www.ox.ac.uk/admissions/undergraduate/applying-to-oxford/for-international-students",
  },
  {
    id: "cambridge",
    name: "University of Cambridge",
    city: "Cambridge",
    tag: "Prestige",
    img: cambridge,
    tuition: 37000,
    subjectGroup: "Engineering & STEM",
    focus: "STEM, Humanities, Research",
    lifestyle: "Historic city",
    desc: "Deep academic culture with global prestige and recognition.",
    overview:
      "Cambridge is internationally respected for academic depth, tradition, and a serious study culture with strong global recognition.",
    bestFor:
      "Students who want a highly respected academic experience and thrive in a focused, demanding environment.",
    highlights: [
      "Elite global reputation",
      "Strong academic depth",
      "Historic and student-focused setting",
      "Excellent research strength",
    ],
    officialUrl: "https://www.cam.ac.uk/",
    internationalUrl: "https://www.undergraduate.study.cam.ac.uk/international-students",
  },
  {
    id: "imperial",
    name: "Imperial College London",
    city: "London",
    tag: "STEM",
    img: imperial,
    tuition: 35000,
    subjectGroup: "Engineering & STEM",
    focus: "Engineering, Science, Medicine, Computing",
    lifestyle: "Fast city life",
    desc: "A strong choice for science, technology, and career outcomes.",
    overview:
      "Imperial is a leading London university with major strength in science, engineering, medicine, and technical subjects.",
    bestFor:
      "Students focused on STEM, strong career outcomes, and the opportunities of studying in London.",
    highlights: [
      "Excellent STEM reputation",
      "Career-focused environment",
      "London opportunities",
      "Strong employability value",
    ],
    officialUrl: "https://www.imperial.ac.uk/",
    internationalUrl: "https://www.imperial.ac.uk/study/international-students/",
  },
  {
    id: "ucl",
    name: "University College London (UCL)",
    city: "London",
    tag: "Top Tier",
    img: ucl,
    tuition: 34000,
    subjectGroup: "Medicine & Health",
    focus: "Medicine, Architecture, Law, Computing",
    lifestyle: "Central London",
    desc: "A globally recognised university with broad academic strength.",
    overview:
      "UCL is one of the UK's leading universities and combines strong academic standing with a central London experience.",
    bestFor:
      "Students who want a highly respected university with wide subject choice and strong city opportunities.",
    highlights: [
      "Top global recognition",
      "Wide subject range",
      "Central London location",
      "Strong international student profile",
    ],
    officialUrl: "https://www.ucl.ac.uk/",
    internationalUrl: "https://www.ucl.ac.uk/prospective-students/international",
  },
  {
    id: "kcl",
    name: "King's College London",
    city: "London",
    tag: "London",
    img: kcl,
    tuition: 32000,
    subjectGroup: "Medicine & Health",
    focus: "Medicine, Law, Politics, Health",
    lifestyle: "Central London",
    desc: "Strong reputation in health, law, and social sciences.",
    overview:
      "King's is a respected London university with strong international recognition and major strengths in health-related and social science subjects.",
    bestFor:
      "Students who want a respected London university with strong links to health, law, and public-facing careers.",
    highlights: [
      "Well-known global name",
      "Strong health and law profile",
      "Central London life",
      "Good international reputation",
    ],
    officialUrl: "https://www.kcl.ac.uk/",
    internationalUrl: "https://www.kcl.ac.uk/study/international",
  },
  {
    id: "lse",
    name: "London School of Economics (LSE)",
    city: "London",
    tag: "Business",
    img: lse,
    tuition: 33000,
    subjectGroup: "Business & Finance",
    focus: "Economics, Politics, Finance, Social Sciences",
    lifestyle: "Central London",
    desc: "A globally respected choice for economics and social sciences.",
    overview:
      "LSE is known worldwide for economics, politics, social sciences, and strong international influence.",
    bestFor:
      "Students aiming for economics, finance, politics, or social science with high ambition and global outlook.",
    highlights: [
      "World-famous specialist reputation",
      "Strong economics and finance focus",
      "High international profile",
      "Excellent London connections",
    ],
    officialUrl: "https://www.lse.ac.uk/",
    internationalUrl: "https://www.lse.ac.uk/study-at-lse/international-students",
  },
  {
    id: "edinburgh",
    name: "University of Edinburgh",
    city: "Edinburgh",
    tag: "Russell Group",
    img: edinburgh,
    tuition: 31000,
    subjectGroup: "Humanities & Social Science",
    focus: "Medicine, AI, Humanities, Business",
    lifestyle: "Historic capital city",
    desc: "A strong global university with broad subject strength.",
    overview:
      "Edinburgh is highly respected internationally and combines academic quality with one of the UK's most attractive student cities.",
    bestFor:
      "Students wanting a major university with broad academic strength and a strong city experience outside London.",
    highlights: [
      "Strong international reputation",
      "Excellent student city",
      "Broad subject choice",
      "Good balance of prestige and lifestyle",
    ],
    officialUrl: "https://www.ed.ac.uk/",
    internationalUrl: "https://www.ed.ac.uk/studying/international",
  },
  {
    id: "manchester",
    name: "University of Manchester",
    city: "Manchester",
    tag: "Russell Group",
    img: manchester,
    tuition: 30000,
    subjectGroup: "Engineering & STEM",
    focus: "Engineering, Business, Science, Humanities",
    lifestyle: "Big city student life",
    desc: "A major UK university with strong city energy and broad options.",
    overview:
      "Manchester is one of the UK's biggest and most recognisable universities, offering strong academics and an active city environment.",
    bestFor:
      "Students who want a strong university name, wide subject choice, and lively city life.",
    highlights: [
      "Large and well-known university",
      "Broad academic strength",
      "Strong city energy",
      "Good student community",
    ],
    officialUrl: "https://www.manchester.ac.uk/",
    internationalUrl: "https://www.manchester.ac.uk/study/international/",
  },
  {
    id: "bristol",
    name: "University of Bristol",
    city: "Bristol",
    tag: "Russell Group",
    img: bristol,
    tuition: 29500,
    subjectGroup: "Engineering & STEM",
    focus: "Engineering, Law, Science, Business",
    lifestyle: "Creative student city",
    desc: "A strong academic choice in a vibrant and attractive city.",
    overview:
      "Bristol is respected for academic quality and offers a strong university experience in one of the UK's most popular student cities.",
    bestFor:
      "Students who want a respected university with good balance between academics and city lifestyle.",
    highlights: [
      "Strong academic profile",
      "Popular student city",
      "Balanced lifestyle",
      "Good reputation across subjects",
    ],
    officialUrl: "https://www.bristol.ac.uk/",
    internationalUrl: "https://www.bristol.ac.uk/international/",
  },
  {
    id: "warwick",
    name: "University of Warwick",
    city: "Coventry",
    tag: "High Value",
    img: warwick,
    tuition: 31000,
    subjectGroup: "Business & Finance",
    focus: "Business, Economics, Maths, Computer Science",
    lifestyle: "Campus-focused",
    desc: "A highly respected university with strong academic and career value.",
    overview:
      "Warwick is especially strong for business, economics, maths, and technical subjects, with a strong reputation for ambition and outcomes.",
    bestFor:
      "Students who want a high-value academic environment and a focused campus experience.",
    highlights: [
      "Strong business and maths profile",
      "Good employability value",
      "Focused campus atmosphere",
      "Highly respected name",
    ],
    officialUrl: "https://warwick.ac.uk/",
    internationalUrl: "https://warwick.ac.uk/study/international/",
  },
  {
    id: "birmingham",
    name: "University of Birmingham",
    city: "Birmingham",
    tag: "Russell Group",
    img: birmingham,
    tuition: 28500,
    subjectGroup: "Engineering & STEM",
    focus: "Engineering, Business, Medicine, Humanities",
    lifestyle: "Big city campus life",
    desc: "A strong traditional university with broad academic options.",
    overview:
      "Birmingham is a respected major university with a large campus, wide subject range, and strong city access.",
    bestFor:
      "Students wanting a solid all-round university with a major city nearby and strong subject choice.",
    highlights: [
      "Large campus university",
      "Broad subject choice",
      "Strong overall reputation",
      "Big city advantages",
    ],
    officialUrl: "https://www.birmingham.ac.uk/",
    internationalUrl: "https://www.birmingham.ac.uk/international/index.aspx",
  },
  {
    id: "leeds",
    name: "University of Leeds",
    city: "Leeds",
    tag: "Popular",
    img: leeds,
    tuition: 29000,
    subjectGroup: "Business & Finance",
    focus: "Business, Media, Engineering, Medicine",
    lifestyle: "Lively student city",
    desc: "A strong and popular university with excellent student life.",
    overview:
      "Leeds combines a strong academic reputation with one of the UK's most energetic student environments.",
    bestFor:
      "Students who want a respected university with lively student culture and strong all-round options.",
    highlights: [
      "Popular student city",
      "Strong broad reputation",
      "Good campus and social life",
      "Solid career value",
    ],
    officialUrl: "https://www.leeds.ac.uk/",
    internationalUrl: "https://students.leeds.ac.uk/info/10113/international_students",
  },
  {
    id: "sheffield",
    name: "University of Sheffield",
    city: "Sheffield",
    tag: "Russell Group",
    img: sheffield,
    tuition: 28500,
    subjectGroup: "Engineering & STEM",
    focus: "Engineering, Architecture, Science, Social Sciences",
    lifestyle: "Friendly student city",
    desc: "A respected university in a student-friendly and affordable city.",
    overview:
      "Sheffield is well regarded academically and is often appreciated for its balanced lifestyle, community feel, and value.",
    bestFor:
      "Students wanting a strong university in a more comfortable and student-friendly city setting.",
    highlights: [
      "Strong engineering reputation",
      "Friendly city feel",
      "Good student value",
      "Balanced lifestyle",
    ],
    officialUrl: "https://www.sheffield.ac.uk/",
    internationalUrl: "https://www.sheffield.ac.uk/international",
  },
  {
    id: "nottingham",
    name: "University of Nottingham",
    city: "Nottingham",
    tag: "Russell Group",
    img: nottingham,
    tuition: 29000,
    subjectGroup: "Medicine & Health",
    focus: "Pharmacy, Engineering, Business, Law",
    lifestyle: "Campus + city balance",
    desc: "A respected university with a strong campus identity and broad options.",
    overview:
      "Nottingham is a popular university with a strong campus feel and a good reputation across a range of academic areas.",
    bestFor:
      "Students who want a respected university with a strong campus environment and broad study choices.",
    highlights: [
      "Strong campus identity",
      "Good broad academic profile",
      "Popular student option",
      "Balanced city access",
    ],
    officialUrl: "https://www.nottingham.ac.uk/",
    internationalUrl: "https://www.nottingham.ac.uk/studywithus/international-applicants/index.aspx",
  },
  {
    id: "southampton",
    name: "University of Southampton",
    city: "Southampton",
    tag: "Engineering",
    img: southampton,
    tuition: 28500,
    subjectGroup: "Computing & Tech",
    focus: "Engineering, Computer Science, Maritime, Business",
    lifestyle: "Coastal city",
    desc: "A strong option for engineering, computing, and technical subjects.",
    overview:
      "Southampton is known for technical subjects, especially engineering and computing, and offers a practical student environment.",
    bestFor:
      "Students leaning towards engineering, technology, or strong technical career routes.",
    highlights: [
      "Strong engineering and computing",
      "Respected technical profile",
      "Practical student environment",
      "Good research strength",
    ],
    officialUrl: "https://www.southampton.ac.uk/",
    internationalUrl: "https://www.southampton.ac.uk/study/international.page",
  },
  {
    id: "exeter",
    name: "University of Exeter",
    city: "Exeter",
    tag: "Strong Overall",
    img: exeter,
    tuition: 28000,
    subjectGroup: "Humanities & Social Science",
    focus: "Business, Humanities, Environment, Politics",
    lifestyle: "Calm student city",
    desc: "A respected university with strong teaching and a calmer environment.",
    overview:
      "Exeter has a strong reputation and offers a more relaxed student setting while still being academically respected.",
    bestFor:
      "Students who want a respected university with a calmer lifestyle and a strong overall profile.",
    highlights: [
      "Strong reputation",
      "Good student quality of life",
      "Calmer environment",
      "Solid academic strength",
    ],
    officialUrl: "https://www.exeter.ac.uk/",
    internationalUrl: "https://www.exeter.ac.uk/study/international/",
  },
  {
    id: "york",
    name: "University of York",
    city: "York",
    tag: "Research",
    img: york,
    tuition: 28000,
    subjectGroup: "Humanities & Social Science",
    focus: "History, Politics, Psychology, Computer Science",
    lifestyle: "Historic city",
    desc: "A respected university with a strong research identity.",
    overview:
      "York is known for a good academic reputation, strong campus identity, and a historic, attractive city environment.",
    bestFor:
      "Students who want a solid research university in a more comfortable and historic city.",
    highlights: [
      "Good research profile",
      "Historic city setting",
      "Strong campus identity",
      "Balanced student life",
    ],
    officialUrl: "https://www.york.ac.uk/",
    internationalUrl: "https://www.york.ac.uk/study/international/",
  },
  {
    id: "newcastle",
    name: "Newcastle University",
    city: "Newcastle",
    tag: "Strong Choice",
    img: newcastle,
    tuition: 27500,
    subjectGroup: "Medicine & Health",
    focus: "Medicine, Business, Engineering, Architecture",
    lifestyle: "Lively city",
    desc: "A well-known university with good city energy and broad subject value.",
    overview:
      "Newcastle offers strong overall academics with a lively city environment and a good balance between reputation and student experience.",
    bestFor:
      "Students wanting a respected university with a fun city and strong all-round value.",
    highlights: [
      "Well-known university name",
      "Strong city life",
      "Good broad subject range",
      "Balanced value",
    ],
    officialUrl: "https://www.ncl.ac.uk/",
    internationalUrl: "https://www.ncl.ac.uk/study/international/",
  },
  {
    id: "liverpool",
    name: "University of Liverpool",
    city: "Liverpool",
    tag: "Russell Group",
    img: liverpool,
    tuition: 27500,
    subjectGroup: "Medicine & Health",
    focus: "Business, Engineering, Health, Science",
    lifestyle: "Lively city",
    desc: "A respected university in one of the UK's most vibrant cities.",
    overview:
      "Liverpool combines a strong city identity with a respected academic profile and a broad subject offering.",
    bestFor:
      "Students who want a good university in a lively and culturally rich city.",
    highlights: [
      "Strong city identity",
      "Good broad reputation",
      "Vibrant student life",
      "Respected university brand",
    ],
    officialUrl: "https://www.liverpool.ac.uk/",
    internationalUrl: "https://www.liverpool.ac.uk/study/international/",
  },
  {
    id: "cardiff",
    name: "Cardiff University",
    city: "Cardiff",
    tag: "Russell Group",
    img: cardiff,
    tuition: 27000,
    subjectGroup: "Media & Communication",
    focus: "Journalism, Architecture, Business, Science",
    lifestyle: "Capital city life",
    desc: "A respected university with strong value and a capital city experience.",
    overview:
      "Cardiff offers a good academic reputation, a manageable city, and solid value for many international students.",
    bestFor:
      "Students who want a respected university with good value and a balanced capital city experience.",
    highlights: [
      "Good overall reputation",
      "Strong city value",
      "Capital city benefits",
      "Solid student experience",
    ],
    officialUrl: "https://www.cardiff.ac.uk/",
    internationalUrl: "https://www.cardiff.ac.uk/study/international",
  },
  {
    id: "glasgow",
    name: "University of Glasgow",
    city: "Glasgow",
    tag: "Historic",
    img: glasgow,
    tuition: 30000,
    subjectGroup: "Medicine & Health",
    focus: "Medicine, Engineering, Humanities, Business",
    lifestyle: "Big Scottish city",
    desc: "A globally recognised university with strong tradition and broad strength.",
    overview:
      "Glasgow is a major historic university with international recognition and strong academic options across many areas.",
    bestFor:
      "Students who want a respected and traditional university with strong city character.",
    highlights: [
      "Historic global reputation",
      "Broad academic strength",
      "Strong student community",
      "Major city setting",
    ],
    officialUrl: "https://www.gla.ac.uk/",
    internationalUrl: "https://www.gla.ac.uk/international/",
  },
  {
    id: "durham",
    name: "Durham University",
    city: "Durham",
    tag: "Prestige",
    img: durham,
    tuition: 31000,
    subjectGroup: "Law & Politics",
    focus: "Law, Humanities, Business, Social Sciences",
    lifestyle: "Historic smaller city",
    desc: "A highly respected university with a strong traditional academic identity.",
    overview:
      "Durham has a prestigious reputation and is especially known for a serious academic atmosphere in a smaller, historic city.",
    bestFor:
      "Students who want a traditional, highly respected university with a focused environment.",
    highlights: [
      "Prestigious reputation",
      "Historic environment",
      "Strong academic identity",
      "Focused student atmosphere",
    ],
    officialUrl: "https://www.durham.ac.uk/",
    internationalUrl: "https://www.durham.ac.uk/study/international/",
  },
  {
    id: "greenwich",
    name: "University of Greenwich",
    city: "London",
    tag: "Popular",
    img: greenwich,
    tuition: 18500,
    subjectGroup: "Computing & Tech",
    focus: "Business, Engineering, Computing, Health",
    lifestyle: "London riverside",
    desc: "A practical London option with strong student appeal and accessible routes.",
    overview:
      "Greenwich is a popular option for international students looking for London study with a more practical and accessible feel.",
    bestFor:
      "Students who want a London university with more accessible entry and practical subject options.",
    highlights: [
      "Popular international option",
      "London location",
      "Practical course range",
      "Good student accessibility",
    ],
    officialUrl: "https://www.gre.ac.uk/",
    internationalUrl: "https://www.gre.ac.uk/international",
  },
  {
    id: "westminster",
    name: "University of Westminster",
    city: "London",
    tag: "City Focus",
    img: westminster,
    tuition: 18000,
    subjectGroup: "Media & Communication",
    focus: "Media, Fashion, Business, Architecture",
    lifestyle: "Central London",
    desc: "A well-known London university with strong city-facing subjects.",
    overview:
      "Westminster is especially attractive for students who want a central London experience and subjects linked to media, business, and creative industries.",
    bestFor:
      "Students looking for a practical London university with strong city and industry-facing energy.",
    highlights: [
      "Central London presence",
      "Creative and business subjects",
      "Practical city exposure",
      "Strong student appeal",
    ],
    officialUrl: "https://www.westminster.ac.uk/",
    internationalUrl: "https://www.westminster.ac.uk/study/international",
  },
  {
    id: "citylondon",
    name: "City, University of London",
    city: "London",
    tag: "Professional",
    img: citylondon,
    tuition: 21000,
    subjectGroup: "Law & Politics",
    focus: "Business, Law, Journalism, Health",
    lifestyle: "Central London",
    desc: "A practical London university with a strong professional direction.",
    overview:
      "City is known for strong professional orientation, especially in business, law, media, and career-linked study paths.",
    bestFor:
      "Students who want a professional, city-based university with practical career direction.",
    highlights: [
      "Professional orientation",
      "Central London location",
      "Business and law strength",
      "Good industry relevance",
    ],
    officialUrl: "https://www.city.ac.uk/",
    internationalUrl: "https://www.city.ac.uk/prospective-students/international",
  },
  {
    id: "oxfordbrookes",
    name: "Oxford Brookes University",
    city: "Oxford",
    tag: "Practical",
    img: oxfordbrookes,
    tuition: 17500,
    subjectGroup: "Business & Finance",
    focus: "Business, Architecture, Hospitality, Computing",
    lifestyle: "Oxford student city",
    desc: "A practical university option in Oxford with strong student appeal.",
    overview:
      "Oxford Brookes is known for being more accessible than Oxford while still benefiting from the city's reputation and student environment.",
    bestFor:
      "Students who want a more practical and accessible university experience in Oxford.",
    highlights: [
      "Oxford location",
      "Accessible compared with elite options",
      "Practical course appeal",
      "Strong student environment",
    ],
    officialUrl: "https://www.brookes.ac.uk/",
    internationalUrl: "https://www.brookes.ac.uk/studying-at-brookes/international-students/",
  },
  {
    id: "regents",
    name: "Regent's University London",
    city: "London",
    tag: "Private",
    img: regents,
    tuition: 22000,
    subjectGroup: "Business & Finance",
    focus: "Business, Fashion, Luxury, International Relations",
    lifestyle: "Central London",
    desc: "A private London university with a boutique and international feel.",
    overview:
      "Regent's offers a more private and smaller-scale London university experience, often attractive for business, fashion, and international-facing subjects.",
    bestFor:
      "Students who prefer a smaller private university experience in London with an international atmosphere.",
    highlights: [
      "Private university setting",
      "Smaller and more boutique feel",
      "Central London environment",
      "International student focus",
    ],
    officialUrl: "https://www.regents.ac.uk/",
    internationalUrl: "https://www.regents.ac.uk/study/international-students",
  },
];

// helper — find a single university by id
export const getUniversityById = (id) =>
  universitiesData.find((uni) => uni.id === id);