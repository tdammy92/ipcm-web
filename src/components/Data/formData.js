export const accordionData = [
  {
    id: 1,
    name: "DIRECT MEMBERSHIP ADMISSION",
    description: `Direct Membership Admission is membership based on your years of work experience and academic qualification. Here, you are not require to undergo through our Executive Training Course or academic Program but your years of work experience
    and academic standing qualifies you into Various
    Membership Cadres available.`,
    List: [],
    isSelected: false,
  },
  {
    id: 2,
    name: "EXECUTIVE PROFESSIONAL PGD TRAINING COURSE",
    description: `This is a maximum of 10-12 weeks training course
        that empowers the working Professionals to gain
        new skills, diversify knowledge and improve
        performance. This PGD training is to help you
        secure employment, gain promotion, provide
        consultancy services and achieve professionalism.
        It's open to graduates from all fields from NCE or
        Diploma and above. Candidates will be admitted
        into Various Membership Cadres according to their
        working experiences after passing the Professional
        Examination and paying the Induction and
        Certification fees. (9 PGDs are available).`,
    List: [
      { name: "PGD in Peace and Conflict Management", isChecked: false },
      {
        name: "PGD in Peace, Security Studies and Criminology",
        isChecked: false,
      },
      {
        name: "PGD in Peace, Security and Strategic Leadership",
        isChecked: false,
      },
      { name: "PGD in Global Peace-Keeping and Diplomacy", isChecked: false },
      { name: "PGD in Peace Education", isChecked: false },
      { name: "PGD in Peace and Conflict Journalism", isChecked: false },
      {
        name: "PGD in Peace-building and Environmental Sustainability",
        isChecked: false,
      },
      { name: "PGD in Workplace Conflict Management", isChecked: false },
      {
        name: "PGD in Sports Conflict Management and Mediation",
        isChecked: false,
      },
    ],
    isSelected: false,
  },
  {
    id: 3,
    name: "ACADEMIC PROGRAMS",
    description: `We offer academic programs that runs for a minimum period of 9 months to 4 years. We have undergraduate and Postgraduate courses available.
		The Academic Programs are done in partnership with the Protestant University of West Africa, Port-Novo Benin Republic and Institut Universitaire Du Benin Cotonou. We have 4 courses available under the Academic Programs. Choose and apply for your course of interest.`,
    List: [
      {
        name: `Diploma`,
        isChecked: false,
      },
      {
        name: `Bsc`,
        isChecked: false,
      },
      // {
      // 	name: `International Diploma`,
      // 	isChecked: false,
      // },
      // {
      // 	name: `Higher National Diploma`,
      // 	isChecked: false,
      // },
      // {
      // 	name: `Postgraduate Diploma`,
      // 	isChecked: false,
      // },
      {
        name: `Msc`,
        isChecked: false,
      },
      {
        name: `Ph.D`,
        isChecked: false,
      },
      { name: "Peace Resolution and Conflict Management", isChecked: false },
      { name: "International Relations and Diplomacy", isChecked: false },
      { name: "Intelligence and Security Studies", isChecked: false },
      { name: "Criminology", isChecked: false },
    ],
    isSelected: false,
  },

  {
    id: 4,
    name: "NYSC SCHEME",
    description: `This is a one-year short PGD training, both
        Professional and academic, that afford the serving
        Youth Corps Members the opportunity to earn a PGD
        during their service year to enable them gain
        employment or proceed for master programs after
        service.`,
    List: [],
    isSelected: false,
  },
];

export const titleArray = [
  "",
  "Mr",
  "Mrs",
  "Miss",
  "Dr",
  "Chief",
  "Pst",
  "Prof",
  "Engr",
  "Amb",
];

export const genderArray = ["", "Male", "Female", "other"];

export const qualificationArray = [
  "",
  "SSCE",
  "NCE",
  "ND",
  "HND",
  "Bsc",
  "PGD",
  "MSC",
  "PHD",
];

export const yearsExperienceArray = [
  "0-1 yr",
  "1-2 yrs",
  "2-4 yrs",
  "4-10 yrs",
  "10-15 yrs",
  "15-20 yrs",
  "25 yrs - above",
];
export const membershipArray = [
  "Student Member",
  "Affiliate Member",
  "Associate Member",
  "Full Member",
  "Senior Member",
  "Research Fellow",
  "Doctoral Fellow",
  "Distinguished Fellow",
  "Fellow Member",
];

export const AcademicProgramsArray = [
  "Peace Resolution and Conflict Management",
  "International Relations and Diplomacy",
  "Intelligence and Security Studies",
  "Criminology",
];

export const applicationFeeArray = [
  "Nil",
  "Direct Membership (N5000, $15)",
  "Professional PGD course (N5000, $15)",
  "Academic Programs (N15000)",
  "Academic Programs (N10000)",
  "Academic Programs (N8000)",
  "Academic Programs (N5000)",
  "NYSC Scheme (N1000)",
];
export const paymentArray = [
  "Nil",
  "Direct Bank Deposit",
  "Western Union",
  "PayPal",
  "USSD",
  "Others",
];
export const memberShipRouteArray = [
  "Nil",
  "Direct Membership Admission",
  "Executive Professional PGD course",
  "Academic Programs",
  "NYSC Scheme",
];
