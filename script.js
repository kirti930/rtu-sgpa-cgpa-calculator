/* =========================================================
   RTU SGPA & CGPA CALCULATOR
   Sem 1–4 Integrated | Future-ready
   ========================================================= */

/* ---------- RTU NEW GRADE → GRADE POINT ---------- */
const gradePoints = {
  "A++": 10,
  "A+": 9,
  "A": 8.5,
  "B+": 8,
  "B": 7.5,
  "C+": 7,
  "C": 6.5,
  "D+": 6,
  "D": 5.5,
  "E+": 5,
  "E": 4,
  "F": 0
};

/* ---------- SUBJECT DATA ---------- */
const subjectsData = {
  year1: {
    common: {
      1: [
        { name: "Engineering Mathematics-I", credits: 4 },
        { name: "Engineering Physics / Engineering Chemistry", credits: 4 },
        { name: "Communication Skills", credits: 2 },
        { name: "Human Values", credits: 2 },
        { name: "Programming for Problem Solving / Basic Mechanical Engineering", credits: 2 },
        { name: "Basic Electrical Engineering / Basic Civil Engineering", credits: 2 },
        { name: "Engineering Physics Lab / Engineering Chemistry Lab", credits: 1 },
        { name: "Language Lab / Human Values Activities", credits: 1 },
        { name: "Computer Programming Lab / Manufacturing Practices Workshop", credits: 1.5 },
        { name: "Basic Electrical Engineering Lab / Basic Civil Engineering Lab", credits: 1 },
        { name: "Computer Aided Engineering Graphics / Computer Aided Machine Drawing", credits: 1.5 },
        { name: "NCC / NSS / Sports", credits: 0.5 }
      ],
      2: [
        { name: "Engineering Mathematics-II", credits: 4 },
        { name: "Engineering Chemistry / Engineering Physics", credits: 4 },
        { name: "Human Values / Communication Skills", credits: 2 },
        { name: "Basic Mechanical Engineering / Programming for Problem Solving", credits: 2 },
        { name: "Basic Civil Engineering / Basic Electrical Engineering", credits: 2 },
        { name: "Engineering Chemistry Lab / Engineering Physics Lab", credits: 1 },
        { name: "Human Values Activities / Language Lab", credits: 1 },
        { name: "Manufacturing Practices Workshop / Computer Programming Lab", credits: 1.5 },
        { name: "Basic Civil Engineering Lab / Basic Electrical Engineering Lab", credits: 1 },
        { name: "Computer Aided Machine Drawing / Computer Aided Engineering Graphics", credits: 1.5 },
        { name: "NCC / NSS / Sports", credits: 0.5 }
      ]
    }
  }
};

/* ---------- YEAR 2: SEM 3 & 4 (CSE / CS-AI / IT / AIDS) ---------- */
const sem3_Common_CS = [
  { name: "Advanced Engineering Mathematics", credits: 3 },
  { name: "Technical Communication / Managerial Economics & Financial Accounting", credits: 2 },
  { name: "Digital Electronics", credits: 3 },
  { name: "Data Structures & Algorithms", credits: 3 },
  { name: "Object Oriented Programming", credits: 3 },
  { name: "Software Engineering", credits: 3 },
  { name: "Data Structures & Algorithms Lab", credits: 1.5 },
  { name: "Object Oriented Programming Lab", credits: 1.5 },
  { name: "Software Engineering Lab", credits: 1.5 },
  { name: "Digital Electronics Lab", credits: 1.5 },
  { name: "Industrial Training", credits: 1 },
  { name: "Foundation Course", credits: 0.5 }
];

const sem4_Common_CS = [
  { name: "Discrete Mathematics Structure", credits: 3 },
  { name: "Managerial Economics & Financial Accounting / Technical Communication", credits: 2 },
  { name: "Microprocessor & Interfaces", credits: 3 },
  { name: "Database Management System", credits: 3 },
  { name: "Theory of Computation", credits: 3 },
  { name: "Data Communication & Computer Networks", credits: 3 },
  { name: "Microprocessor & Interfaces Lab", credits: 1 },
  { name: "Database Management System Lab", credits: 1.5 },
  { name: "Network Programming Lab", credits: 1.5 },
  { name: "Linux Shell Programming Lab", credits: 1 },
  { name: "Java Lab", credits: 1 },
  { name: "Foundation Course", credits: 0.5 }
];

/* ---------- SEMESTER 3: ECE ---------- */
const sem3_ECE = [
  { name: "Advanced Engineering Mathematics-I", credits: 3 },
  { name: "Technical Communication / Managerial Economics & Financial Accounting", credits: 2 },
  { name: "Digital System Design", credits: 3 },
  { name: "Signals & Systems", credits: 3 },
  { name: "Network Theory", credits: 4 },
  { name: "Electronic Devices", credits: 4 },
  { name: "Electronics Devices Lab", credits: 1 },
  { name: "Digital System Design Lab", credits: 1 },
  { name: "Signal Processing Lab", credits: 1 },
  { name: "Computer Programming Lab-I", credits: 1 },
  { name: "Industrial Training", credits: 1 },
  { name: "Foundation Course", credits: 0.5 }
];

/* ---------- SEMESTER 4: ECE ---------- */
const sem4_ECE = [
  { name: "Advanced Engineering Mathematics-II", credits: 3 },
  { name: "Managerial Economics & Financial Accounting / Technical Communication", credits: 2 },
  { name: "Analog Circuits", credits: 3 },
  { name: "Microcontrollers", credits: 3 },
  { name: "Electronics Measurement & Instrumentation", credits: 3 },
  { name: "Analog and Digital Communication", credits: 3 },
  { name: "Analog and Digital Communication Lab", credits: 1.5 },
  { name: "Analog Circuits Lab", credits: 1.5 },
  { name: "Microcontrollers Lab", credits: 1.5 },
  { name: "Electronics Measurement & Instrumentation Lab", credits: 1.5 },
  { name: "Foundation Course", credits: 0.5 }
];

subjectsData.year2 = {
  CSE: { 3: sem3_Common_CS, 4: sem4_Common_CS },
  "CS-AI": { 3: sem3_Common_CS, 4: sem4_Common_CS },
  IT: { 3: sem3_Common_CS, 4: sem4_Common_CS },
  AIDS: { 3: sem3_Common_CS, 4: sem4_Common_CS },
 ECE: { 3: sem3_ECE, 4: sem4_ECE }

};

const sem3_CIVIL = [
  { name: "Advance Engineering Mathematics - I", credits: 3 },
  { name: "Technical Communication / Managerial Economics & Financial Accounting", credits: 2 },
  { name: "Engineering Mechanics", credits: 2 },
  { name: "Surveying", credits: 3 },
  { name: "Fluid Mechanics", credits: 2 },
  { name: "Building Materials and Construction", credits: 3 },
  { name: "Engineering Geology", credits: 2 },
  { name: "Surveying Lab", credits: 1.5 },
  { name: "Fluid Mechanics Lab", credits: 1 },
  { name: "Computer Aided Civil Engineering Drawing", credits: 1.5 },
  { name: "Civil Engineering Materials Lab", credits: 1 },
  { name: "Geology Lab", credits: 1 },
  { name: "Industrial Training", credits: 1 },
  { name: "SODECA", credits: 0.5 }
];

const sem4_CIVIL = [
  { name: "Advance Engineering Mathematics - II", credits: 2 },
  { name: "Managerial Economics & Financial Accounting / Technical Communication", credits: 2 },
  { name: "Basic Electronics for Civil Engineering Applications", credits: 2 },
  { name: "Strength of Materials", credits: 3 },
  { name: "Hydraulics Engineering", credits: 3 },
  { name: "Building Planning", credits: 2 },
  { name: "Concrete Technology", credits: 3 },
  { name: "Material Testing Lab", credits: 1 },
  { name: "Hydraulics Engineering Lab", credits: 1 },
  { name: "Building Drawing", credits: 1.5 },
  { name: "Advanced Surveying Lab", credits: 1 },
  { name: "Concrete Lab", credits: 1.5 },
  { name: "SODECA", credits: 0.5 }
];

subjectsData.year2.CIVIL = { 3: sem3_CIVIL, 4: sem4_CIVIL };

const sem3_ELECTRICAL = [
  { name: "Advance Mathematics", credits: 3 },
  { name: "Technical Communication / Managerial Economics and Financial Accounting", credits: 2 },
  { name: "Power Generation Process", credits: 2 },
  { name: "Electrical Circuit Analysis", credits: 3 },
  { name: "Analog Electronics", credits: 3 },
  { name: "Electrical Machine - I", credits: 3 },
  { name: "Electromagnetic Field", credits: 2 },
  { name: "Analog Electronics Lab", credits: 1 },
  { name: "Electrical Machine-I Lab", credits: 2 },
  { name: "Electrical Circuit Design Lab", credits: 2 },
  { name: "Industrial Training", credits: 1 },
  { name: "SODECA", credits: 0.5 }
];

const sem4_ELECTRICAL = [
  { name: "Biology", credits: 2 },
  { name: "Technical Communication / Managerial Economics & Financial Accounting", credits: 2 },
  { name: "Electronic Measurement & Instrumentation", credits: 2 },
  { name: "Electrical Machine II", credits: 3 },
  { name: "Power Electronics", credits: 3 },
  { name: "Signals & Systems", credits: 3 },
  { name: "Digital Electronics", credits: 2 },
  { name: "Electrical Machine - II Lab", credits: 2 },
  { name: "Power Electronics Lab", credits: 2 },
  { name: "Digital Electronics Lab", credits: 1 },
  { name: "Measurement Lab", credits: 1 },
  { name: "SODECA", credits: 0.5 }
];

subjectsData.year2.ELECTRICAL = { 3: sem3_ELECTRICAL, 4: sem4_ELECTRICAL };


const sem3_MECHANICAL = [
  { name: "Advance Engineering Mathematics-I", credits: 3 },
  { name: "Technical Communication / Managerial Economics and Financial Accounting", credits: 2 },
  { name: "Engineering Mechanics", credits: 2 },
  { name: "Engineering Thermodynamics", credits: 3 },
  { name: "Materials Science and Engineering", credits: 3 },
  { name: "Mechanics of Solids", credits: 4 },
  { name: "Machine Drawing Practice", credits: 1.5 },
  { name: "Materials Testing Lab", credits: 1.5 },
  { name: "Basic Mechanical Engineering Lab", credits: 1.5 },
  { name: "Programming using MATLAB", credits: 1.5 },
  { name: "Industrial Training", credits: 1 },
  { name: "SODECA", credits: 0.5 }
];

const sem4_MECHANICAL = [
  { name: "Data Analytics", credits: 2 },
  { name: "Managerial Economics and Financial Accounting / Technical Communications", credits: 2 },
  { name: "Digital Electronics", credits: 2 },
  { name: "Fluid Mechanics and Fluid Machines", credits: 4 },
  { name: "Manufacturing Processes", credits: 3 },
  { name: "Theory of Machines", credits: 4 },
  { name: "Digital Electronics Lab", credits: 1.5 },
  { name: "Fluid Mechanics Lab", credits: 1.5 },
  { name: "Production Practice Lab", credits: 1.5 },
  { name: "Theory of Machines Lab", credits: 1.5 },
  { name: "SODECA", credits: 0.5 }
];

subjectsData.year2.MECHANICAL = { 3: sem3_MECHANICAL, 4: sem4_MECHANICAL };


/* ---------- SEMESTER 5: ECE ---------- */
const sem5_ECE = [
  { name: "Computer Architecture", credits: 2 },
  { name: "Electromagnetic Waves", credits: 3 },
  { name: "Control System", credits: 3 },
  { name: "Digital Signal Processing", credits: 3 },
  { name: "Microwave Theory & Techniques", credits: 3 },
  {
    name: "Professional Elective-I (Bio-Medical Electronics / Embedded Systems / Probability Theory & Stochastic Process / Satellite Communication)",
    credits: 2
  },
  { name: "RF Simulation Lab", credits: 1.5 },
  { name: "Digital Signal Processing Lab", credits: 1.5 },
  { name: "Microwave Lab", credits: 1 },
  { name: "Industrial Training", credits: 2.5 },
  { name: "Foundation Course", credits: 0.5 }
];

/* ---------- SEMESTER 6: ECE (RTU OFFICIAL) ---------- */
const sem6_ECE = [
  { name: "Power Electronics", credits: 2 },
  { name: "Computer Network", credits: 3 },
  { name: "Fiber Optics Communications", credits: 3 },
  { name: "Antennas and Propagation", credits: 3 },
  { name: "5G Communication Technology", credits: 3 },
  {
    name: "Professional Elective II (Introduction to MEMS / Nano Electronics / Neural Network and Fuzzy Logic Control / High Speed Electronics)",
    credits: 3
  },
  { name: "Computer Network Lab", credits: 2 },
  { name: "Antenna and Wave Propagation Lab", credits: 1 },
  { name: "Electronics Design Lab", credits: 2 },
  { name: "Power Electronics Lab", credits: 1 },
  { name: "Foundation Course", credits: 0.5 }
];

/* ---------- SEMESTER 5: CSE / CS-AI / IT / AIDS ---------- */
const sem5_Common_CSE = [
  { name: "Information Theory & Coding", credits: 2 },
  { name: "Compiler Design", credits: 3 },
  { name: "Operating System", credits: 3 },
  { name: "Computer Graphics & Multimedia", credits: 3 },
  { name: "Analysis of Algorithms", credits: 3 },
  {
    name: "Professional Elective I (Wireless Communication / Human-Computer Interaction / Bioinformatics)",
    credits: 2
  },
  { name: "Computer Graphics & Multimedia Lab", credits: 1 },
  { name: "Compiler Design Lab", credits: 1 },
  { name: "Analysis of Algorithms Lab", credits: 1 },
  { name: "Advance Java Lab", credits: 1 },
  { name: "Industrial Training", credits: 2.5 },
  { name: "Foundation Course", credits: 0.5 }
];

/* ---------- SEMESTER 6: CSE / CS-AI / IT / AIDS ---------- */
const sem6_Common_CSE = [
  { name: "Digital Image Processing", credits: 2 },
  { name: "Machine Learning", credits: 3 },
  { name: "Information Security System", credits: 2 },
  { name: "Computer Architecture and Organization", credits: 3 },
  { name: "Artificial Intelligence", credits: 2 },
  { name: "Cloud Computing", credits: 3 },
  {
    name: "Professional Elective II (Distributed System / Software Defined Network / Ecommerce and ERP)",
    credits: 2
  },
  { name: "Digital Image Processing Lab", credits: 1.5 },
  { name: "Machine Learning Lab", credits: 1.5 },
  { name: "Python Lab", credits: 1.5 },
  { name: "Mobile Application Development Lab", credits: 1.5 },
  { name: "Foundation Course", credits: 0.5 }
];

subjectsData.year3 = subjectsData.year3 || {};

// CSE
subjectsData.year3.CSE = subjectsData.year3.CSE || {};
subjectsData.year3.CSE[5] = sem5_Common_CSE;
subjectsData.year3.CSE[6] = sem6_Common_CSE;

// CS-AI
subjectsData.year3["CS-AI"] = subjectsData.year3["CS-AI"] || {};
subjectsData.year3["CS-AI"][5] = sem5_Common_CSE;
subjectsData.year3["CS-AI"][6] = sem6_Common_CSE;

// IT
subjectsData.year3.IT = subjectsData.year3.IT || {};
subjectsData.year3.IT[5] = sem5_Common_CSE;
subjectsData.year3.IT[6] = sem6_Common_CSE;

// AIDS
subjectsData.year3.AIDS = subjectsData.year3.AIDS || {};
subjectsData.year3.AIDS[5] = sem5_Common_CSE;
subjectsData.year3.AIDS[6] = sem6_Common_CSE;

subjectsData.year3 = subjectsData.year3 || {};
subjectsData.year3.ECE = subjectsData.year3.ECE || {};
subjectsData.year3.ECE[5] = sem5_ECE;
subjectsData.year3.ECE[6] = sem6_ECE;


const sem5_CIVIL = [
  { name: "Construction Technology & Equipments", credits: 2 },
  { name: "Structural Analysis-I", credits: 2 },
  { name: "Design of Concrete Structures", credits: 3 },
  { name: "Geotechnical Engineering", credits: 3 },
  { name: "Water Resource Engineering", credits: 2 },
  { name: "Departmental Elective-I", credits: 2 },
  { name: "Departmental Elective-II", credits: 2 },
  { name: "Concrete Structures Design", credits: 1.5 },
  { name: "Geotechnical Engineering Lab", credits: 1.5 },
  { name: "Water Resource Engineering Design", credits: 1 },
  { name: "Industrial Training", credits: 2.5 },
  { name: "SODECA", credits: 0.5 }
];

const sem6_CIVIL = [
  { name: "Wind & Seismic Analysis", credits: 2 },
  { name: "Structural Analysis-II", credits: 3 },
  { name: "Environmental Engineering", credits: 3 },
  { name: "Design of Steel Structures", credits: 3 },
  { name: "Estimating & Costing", credits: 2 },
  { name: "Departmental Elective-III", credits: 2 },
  { name: "Departmental Elective-IV", credits: 2 },
  { name: "Environmental Engineering Design and Lab", credits: 1.5 },
  { name: "Steel Structure Design", credits: 1.5 },
  { name: "Quantity Surveying and Valuation", credits: 1 },
  { name: "Water and Earth Retaining Structures Design", credits: 1 },
  { name: "Foundation Design", credits: 1 },
  { name: "SODECA", credits: 0.5 }
];

subjectsData.year3.CIVIL = { 5: sem5_CIVIL, 6: sem6_CIVIL };


const sem5_ELECTRICAL = [
  { name: "Electrical Materials", credits: 2 },
  { name: "Power System - I", credits: 3 },
  { name: "Control System", credits: 3 },
  { name: "Microprocessor", credits: 3 },
  { name: "Electrical Machine Design", credits: 3 },
  { name: "Professional Elective - I", credits: 2 },
  { name: "Power System - I Lab", credits: 1 },
  { name: "Control System Lab", credits: 1 },
  { name: "Microprocessor Lab", credits: 1 },
  { name: "System Programming Lab", credits: 1 },
  { name: "Industrial Training", credits: 2.5 },
  { name: "SODECA", credits: 0.5 }
];

const sem6_ELECTRICAL = [
  { name: "Computer Architecture", credits: 2 },
  { name: "Power System - II", credits: 3 },
  { name: "Power System Protection", credits: 3 },
  { name: "Electrical Energy Conversion and Auditing", credits: 3 },
  { name: "Electric Drives", credits: 3 },
  { name: "Professional Elective - II", credits: 3 },
  { name: "Power System - II Lab", credits: 2 },
  { name: "Electric Drives Lab", credits: 2 },
  { name: "Power System Protection Lab", credits: 1 },
  { name: "Modelling and Simulation Lab", credits: 1 },
  { name: "SODECA", credits: 0.5 }
];

subjectsData.year3.ELECTRICAL = { 5: sem5_ELECTRICAL, 6: sem6_ELECTRICAL };

const sem5_MECHANICAL = [
  { name: "Mechatronic Systems", credits: 2 },
  { name: "Heat Transfer", credits: 3 },
  { name: "Manufacturing Technology", credits: 3 },
  { name: "Design of Machine Elements I", credits: 3 },
  { name: "Principles of Management", credits: 2 },
  { name: "Professional Elective I", credits: 3 },
  { name: "Mechatronic Lab", credits: 1 },
  { name: "Heat Transfer Lab", credits: 1 },
  { name: "Production Engineering Lab", credits: 1 },
  { name: "Machine Design Practice I", credits: 1 },
  { name: "Industrial Training", credits: 2.5 },
  { name: "SODECA", credits: 0.5 }
];

const sem6_MECHANICAL = [
  { name: "Measurement and Metrology", credits: 2 },
  { name: "CIMS", credits: 3 },
  { name: "Mechanical Vibrations", credits: 3 },
  { name: "Design of Machine Elements II", credits: 3 },
  { name: "Quality Management", credits: 3 },
  { name: "Professional Elective II", credits: 3 },
  { name: "CIMS Lab", credits: 1.5 },
  { name: "Vibration Lab", credits: 1.5 },
  { name: "Machine Design Practice II", credits: 1.5 },
  { name: "Thermal Engineering Lab I", credits: 1.5 },
  { name: "SODECA", credits: 0.5 }
];

subjectsData.year3.MECHANICAL = { 5: sem5_MECHANICAL, 6: sem6_MECHANICAL };


/* ---------- SEMESTER 7: CSE / CS-AI / IT / AIDS ---------- */
const sem7_Common_CSE = [
  { name: "Internet of Things", credits: 3 },
  { name: "Open Elective - I", credits: 3 },
  { name: "Internet of Things Lab", credits: 2 },
  { name: "Cyber Security Lab", credits: 2 },
  { name: "Industrial Training", credits: 2.5 },
  { name: "Seminar", credits: 2 },
  { name: "Social Outreach, Discipline & Extra Curricular Activities", credits: 0.5 }
];


/* ---------- SEMESTER 8: CSE / CS-AI / IT / AIDS ---------- */
const sem8_Common_CSE = [
  { name: "Big Data Analytics", credits: 3 },
  { name: "Open Elective - II", credits: 3 },
  { name: "Big Data Analytics Lab", credits: 1 },
  { name: "Software Testing and Validation Lab", credits: 1 },
  { name: "Project", credits: 7 },
  { name: "Social Outreach, Discipline & Extra Curricular Activities", credits: 0.5 }
];

/* ---------- SEMESTER 7: ECE ---------- */
const sem7_ECE = [
  {
    name: "Program Elective III (VLSI Design / Mixed Signal Design / CMOS Design)",
    credits: 3
  },
  { name: "Open Elective - I", credits: 3 },
  { name: "VLSI Design Lab", credits: 2 },
  { name: "5G Communication Lab", credits: 1 },
  { name: "Optical Communication Lab", credits: 1 },
  { name: "Industrial Training", credits: 2.5 },
  { name: "Seminar", credits: 2 },
  { name: "Social Outreach, Discipline & Extra Curricular Activities", credits: 0.5 }
];

/* ---------- SEMESTER 8: ECE ---------- */
const sem8_ECE = [
  {
    name: "Program Elective IV (AI & Expert Systems / Digital Image & Video Processing / Adaptive Signal Processing)",
    credits: 3
  },
  { name: "Open Elective - II", credits: 3 },
  { name: "Internet of Things (IoT) Lab", credits: 1 },
  { name: "Skill Development Lab", credits: 1 },
  { name: "Project", credits: 7 },
  { name: "Social Outreach, Discipline & Extra Curricular Activities", credits: 0.5 }
];


subjectsData.year4 = subjectsData.year4 || {};

// CSE
subjectsData.year4.CSE = subjectsData.year4.CSE || {};
subjectsData.year4.CSE[7] = sem7_Common_CSE;
subjectsData.year4.CSE[8] = sem8_Common_CSE;

// CS-AI
subjectsData.year4["CS-AI"] = subjectsData.year4["CS-AI"] || {};
subjectsData.year4["CS-AI"][7] = sem7_Common_CSE;
subjectsData.year4["CS-AI"][8] = sem8_Common_CSE;

// IT
subjectsData.year4.IT = subjectsData.year4.IT || {};
subjectsData.year4.IT[7] = sem7_Common_CSE;
subjectsData.year4.IT[8] = sem8_Common_CSE;

// AIDS
subjectsData.year4.AIDS = subjectsData.year4.AIDS || {};
subjectsData.year4.AIDS[7] = sem7_Common_CSE;
subjectsData.year4.AIDS[8] = sem8_Common_CSE;

// subjectsData.year4 = subjectsData.year4 || {};
subjectsData.year4.ECE = subjectsData.year4.ECE || {};
subjectsData.year4.ECE[7] = sem7_ECE;
subjectsData.year4.ECE[8] = sem8_ECE;


const sem7_CIVIL = [
  { name: "Transportation Engineering", credits: 3 },
  { name: "Open Elective-I", credits: 3 },
  { name: "Road Material Testing Lab", credits: 1 },
  { name: "Professional Practices & Field Engineering Lab", credits: 1 },
  { name: "Soft Skills Lab", credits: 1 },
  { name: "Environmental Monitoring and Design Lab", credits: 1 },
  { name: "Practical Training", credits: 2.5 },
  { name: "Seminar", credits: 2 },
  { name: "SODECA", credits: 0.5 }
];

const sem8_CIVIL = [
  { name: "Project Planning and Construction Management", credits: 3 },
  { name: "Open Elective-II", credits: 3 },
  { name: "Project Planning & Construction Management Lab", credits: 1 },
  { name: "Pavement Design", credits: 1 },
  { name: "Project", credits: 7 },
  { name: "SODECA", credits: 0.5 }
];

subjectsData.year4.CIVIL = { 7: sem7_CIVIL, 8: sem8_CIVIL };

const sem7_ELECTRICAL = [
  { name: "Wind and Solar Energy Systems", credits: 3 },
  { name: "Power Quality and FACTS", credits: 3 },
  { name: "Control System Design", credits: 3 },
  { name: "Open Elective-I", credits: 3 },
  { name: "Embedded Systems Lab", credits: 2 },
  { name: "Advance Control System Lab", credits: 2 },
  { name: "Industrial Training", credits: 2.5 },
  { name: "Seminar", credits: 2 },
  { name: "SODECA", credits: 0.5 }
];

const sem8_ELECTRICAL = [
  { name: "HVDC Transmission System / Professional Elective", credits: 3 },
  { name: "Line-Commutated and Active PWM Rectifiers / Professional Elective", credits: 3 },
  { name: "Advanced Electric Drives / Professional Elective", credits: 3 },
  { name: "Open Elective-II", credits: 3 },
  { name: "Energy Systems Lab", credits: 2 },
  { name: "Project", credits: 7 },
  { name: "SODECA", credits: 0.5 }
];

subjectsData.year4.ELECTRICAL = { 7: sem7_ELECTRICAL, 8: sem8_ELECTRICAL };


const sem7_MECHANICAL = [
 { name: "I.C. Engines", credits: 3 },
{ name: "Operations Research", credits: 3 },
{ name: "Turbomachines", credits: 3 },
{ name: "Open Elective-I", credits: 3 },
{ name: "FEA Lab", credits: 1.5 },
{ name: "Thermal Engineering Lab II", credits: 1.5 },
{ name: "Quality Control Lab", credits: 1 },
{ name: "Industrial Training", credits: 2.5 },
{ name: "Seminar", credits: 2 },
{ name: "SODECA", credits: 0.5 }
];

const sem8_MECHANICAL = [
  { name: "Hybrid and Electric Vehicles", credits: 3 },
{ name: "Supply and Operations Management", credits: 3 },
{ name: "Additive Manufacturing", credits: 3 },
{ name: "Open Elective - II", credits: 3 },
{ name: "Industrial Engineering Lab", credits: 1 },
{ name: "Metrology Lab", credits: 1 },
{ name: "Project", credits: 7 },
{ name: "SODECA", credits: 0.5 }
];

subjectsData.year4.MECHANICAL = { 7: sem7_MECHANICAL, 8: sem8_MECHANICAL };


/* ---------- DOM REFERENCES ---------- */
const semesterSelect = document.getElementById("semester");
const branchSelect = document.getElementById("branch");
const subjectsDiv = document.getElementById("subjects");
const sgpaResult = document.getElementById("sgpaResult");

/* ---------- EVENT ---------- */
semesterSelect.addEventListener("change", loadSubjects);
branchSelect.addEventListener("change", loadSubjects);

/* ---------- LOAD SUBJECTS ---------- */
function loadSubjects() {
  const semester = semesterSelect.value;
  const branch = branchSelect.value;
  subjectsDiv.innerHTML = "";

 if (!semester) {
  sgpaResult.innerText = "⚠️ Select semester";
  return;
}

  let subjects = [];

  // Sem 1 & 2 → common
  if (semester === "1" || semester === "2") {
    subjects = subjectsData.year1.common[semester];
  }

  // Sem 3 & 4 → year2 (branch-wise)
  else if (semester === "3" || semester === "4") {
   if (!branch) {
  sgpaResult.innerText = "⚠️ Please select branch";
  return;
}
    subjects = subjectsData.year2[branch]?.[semester];
  }

  // Sem 5 & 6 → year3 (branch-wise)
  else if (semester === "5" || semester === "6") {
   if (!branch) {
  sgpaResult.innerText = "⚠️ Please select branch";
  return;
}
    subjects = subjectsData.year3[branch]?.[semester];
  }

  else if (semester === "7" || semester === "8") {
  if (!branch) {
  sgpaResult.innerText = "⚠️ Please select branch";
  return;
}
  subjects = subjectsData.year4[branch]?.[semester];
}

 if (!subjects) {
  sgpaResult.innerText = "⚠️ Subjects not available";
  return;
}

  subjects.forEach((subject, index) => {
    const row = document.createElement("div");
    row.innerHTML = `
      <span>${subject.name} (${subject.credits} Cr)</span>
      <select id="grade-${index}">
        ${Object.keys(gradePoints)
          .map(
            g =>
              `<option value="${g}" ${g === "A++" ? "selected" : ""}>${g}</option>`
          )
          .join("")}
      </select>
    `;
    subjectsDiv.appendChild(row);
  });
}

/* ---------- CALCULATE SGPA ---------- */
function calculateSGPA() {
  const semester = semesterSelect.value;
  const branch = branchSelect.value;

 if (!semester) {
  sgpaResult.innerText = "⚠️ Select semester";
  return;
}

  let subjects;

  // Sem 1 & 2
  if (semester === "1" || semester === "2") {
    subjects = subjectsData.year1.common[semester];
  }
  // Sem 3 & 4
  else if (semester === "3" || semester === "4") {
   if (!branch) {
  sgpaResult.innerText = "⚠️ Please select branch";
  return;
}
    subjects = subjectsData.year2[branch]?.[semester];
  }
  // Sem 5 & 6
  else if (semester === "5" || semester === "6") {
   if (!branch) {
  sgpaResult.innerText = "⚠️ Please select branch";
  return;
}
    subjects = subjectsData.year3[branch]?.[semester];
  }
  // Sem 7 & 8
  else if (semester === "7" || semester === "8") {
    if (!branch) {
  sgpaResult.innerText = "⚠️ Please select branch";
  return;
}
    subjects = subjectsData.year4[branch]?.[semester];
  }

 if (!subjects) {
  sgpaResult.innerText = "⚠️ Subjects not available";
  return;
}

  let totalCredits = 0;
  let totalPoints = 0;

  subjects.forEach((sub, i) => {
    const grade = document.getElementById(`grade-${i}`).value;
    totalCredits += sub.credits;
    totalPoints += sub.credits * gradePoints[grade];
  });

  sgpaResult.innerText =
    `SGPA (Semester ${semester}): ${(totalPoints / totalCredits).toFixed(2)}`;
}


/* ---------- CGPA CALCULATOR ---------- */
const semesterCredits = {
  1: 20.5,
  2: 20.5,
  3: 24.5,
  4: 23.5,
  5: 23,
  6:23.5,
  7:15,
  8:15.5,
};

function addCgpaRow() {
  const row = document.createElement("div");
  row.className = "row";
  row.innerHTML = `
    <select class="semester">
      <option value="">Select Semester</option>
      <option value="1">Semester 1</option>
      <option value="2">Semester 2</option>
      <option value="3">Semester 3</option>
      <option value="4">Semester 4</option>
      <option value="5">Semester 5</option>
<option value="6">Semester 6</option>
        <option value="7">Semester 7</option>
<option value="8">Semester 8</option>
    </select>
    <input type="number" class="sgpa" step="0.01" placeholder="SGPA">
  `;
  document.getElementById("cgpaInputs").appendChild(row);
}

function calculateCGPA() {
  const sems = document.querySelectorAll(".semester");
  const sgpas = document.querySelectorAll(".sgpa");

  let totalCredits = 0;
  let totalPoints = 0;
  const used = new Set();

  for (let i = 0; i < sems.length; i++) {
    const sem = sems[i].value;
    const sgpa = parseFloat(sgpas[i].value);

    if (!sem || isNaN(sgpa)) {
  document.getElementById("cgpaResult").innerText = "⚠️ Fill all fields";
  return;
}
   if (used.has(sem)) {
  document.getElementById("cgpaResult").innerText = "⚠️ Duplicate semester";
  return;
}

    used.add(sem);
    totalCredits += semesterCredits[sem];
    totalPoints += semesterCredits[sem] * sgpa;
  }

  document.getElementById("cgpaResult").innerText =
    `CGPA: ${(totalPoints / totalCredits).toFixed(2)}`;
}

