const en = {
  // Navbar
  nav: {
    search: "Search the site...",
    menu: "Menu",
  },

  // MobileMenu
  mobileMenu: {
    title: "Main Menu",
    mostVisited: "Most visited services",
    mainMenu: "Main menu",
    sections: "Sections",
  },

  // QuickAccess
  quickAccess: {
    label: "Most visited",
  },

  // HeroBanner
  hero: {
    slides: [
      {
        eyebrow: "National Elections 2026",
        title: "Meet our Governing Authorities",
        cta: "View information",
      },
      {
        eyebrow: "Civil Registry",
        title: "Request your identity document online",
        cta: "Start process",
      },
      {
        eyebrow: "Institutional Transparency",
        title: "Access the TSE accountability reports",
        cta: "View documents",
      },
    ],
    elections: "Elections",
    country: "Costa Rica",
    prev: "Previous slide",
    next: "Next slide",
    goTo: "Go to slide",
  },

  // MainCategories
  categories: {
    title: "Our services",
    seeMore: "See more",
  },

  // FeaturedSections
  featured: {
    title: "Featured sections",
    enter: "Enter",
    descriptions: {
      "/transparencia": "Consult information on budgets, procurement, and institutional management of the TSE.",
      "/revista": "Academic publication specialized in electoral and public law topics.",
      "/participacion-mujeres": "Resources and information on women's political participation in Costa Rica.",
    },
  },

  // NewsSection
  news: {
    title: "News",
    seeAll: "See all",
    readMore: "Read article",
    tags: {
      institucional: "Institutional notice",
      elecciones: "Elections 2026",
      civil: "Civil Registry",
    },
  },

  // Footer
  footer: {
    siteMap: "Site Map",
    schedules: "Schedules & Contacts",
    locations: "Office locations",
    social: "Social Media",
    privacy: "Privacy",
    terms: "Terms of use",
    description: "Supreme Electoral Tribunal of Costa Rica",
    basedOn: "Based on a work at",
    daily: "Daily updated site",
    copyright: "Supreme Electoral Tribunal — Costa Rica",
  },

  // Toast
  toast: {
    unavailable: "This section will be available soon.",
    search: "The site search will be available soon.",
    service: "This service will be available soon.",
    section: "This section will be available soon.",
    news: "This article is not available at this time.",
  },

  // navLinks labels
  links: {
    consultasCiviles: "Civil Queries",
    certificaciones: "Digital Certifications",
    documentoIdentidad: "Identity Document",
    sobreTSE: "About the TSE",
    sobreTSEDesc: "Mission, vision and institutional history",
    registroCivil: "Civil Registry Services",
    registroCivilDesc: "Births, marriages, deaths",
    elecciones: "Elections & Political Parties",
    eleccionesDesc: "Electoral information and parties",
    jurisprudencia: "Jurisprudence & Regulations",
    jurisprudenciaDesc: "Resolutions and legal framework",
    formacion: "Democracy Education",
    formacionDesc: "Educational resources and training",
    publicaciones: "Publications",
    publicacionesDesc: "Journals, reports and documents",
    transparencia: "Transparency & Accountability",
    revista: "Electoral Law Journal",
    participacion: "Women's Political Participation",
  },

// Civil Queries
consultas: {
  pageTitle: "Civil Queries and Certification Requests",
  breadcrumb: "Civil Queries",
  pageDesc: "Query information from the Civil Registry of the Supreme Electoral Tribunal. Select the type of query you wish to make.",
  nacionales: "National Persons",
  extranjeros: "Foreign Persons",
  disclaimer: "If you detect any inconsistency in the information reflected in this civil queries service, you may request clarification or correction via email at:",
  disclaimerForm: "for which you must complete the form",
  disclaimerAttach: "and attach it to the email.",
  formLabel: "Database Update",
  clickHere: "Click here",

  cedula: {
    title: "Query by ID number",
    desc: "Enter the Costa Rican national identity number.",
    placeholder: "0-0000-0000",
    btn: "Search",
    loading: "Searching...",
    clear: "Clear",
    apiConnected: "Connected to official API · apis.gometa.org",
    apiResult: "Data retrieved from official Hacienda API · gometa.org",
    apiOffline: "External API unavailable · showing demo data",
    demo: "Demo data",
    errorTitle: "Invalid format",
    errorDesc: "The ID number must have the correct format (e.g. 1-0847-0392).",
    notFoundTitle: "No results",
    notFoundDesc: "No person was found with ID number",
    offlineTitle: "Service unavailable",
    offlineDesc: "Could not connect to the external service. Please try again.",
  },

  nombre: {
    title: "Query by name and surnames",
    desc: "Enter the full or partial name. Minimum 4 characters, full words only.",
    placeholder: "E.g.: OSCAR ARIAS, RODRIGUEZ MORA...",
    btn: "Search",
    loading: "Searching...",
    clear: "Clear",
    apiConnected: "Connected to official API · apis.gometa.org",
    apiResult: "Results from official API · gometa.org",
    apiOffline: "API unavailable · showing demo data",
    demo: "Demo data",
    found: "Found",
    foundSuffix: "result(s) for",
    showingFirst: "Showing first 10.",
    notFoundTitle: "No results",
    notFoundDesc: "No persons found with name",
    notFoundHint: "Use full words of at least 4 characters.",
    back: "Back to results",
  },

  extranjero: {
    title: "Query by DIMEX number",
    desc: "Enter the Migratory Identity Document for Foreigners (DIMEX) number.",
    placeholder: "E.g.: 117200445632",
    btn: "Search",
    loading: "Searching...",
    clear: "Clear",
    errorTitle: "Invalid format",
    errorDesc: "The DIMEX must contain between 10 and 12 numeric digits.",
    notFoundTitle: "No results",
    notFoundDesc: "No person was found with DIMEX",
  },

  matrimonios: {
    title: "Marriage records query",
    desc: "Search by name of either spouse or ID number.",
    placeholder: "E.g.: Carlos Rodríguez, 1-0847-0392...",
    btn: "Search",
    loading: "Searching...",
    clear: "Clear",
    found: "Found",
    foundSuffix: "record(s).",
    notFoundTitle: "No results",
    notFoundDesc: "No records found for",
    cardTitle: "Marriage Registration",
    spouse1: "Spouse 1",
    spouse2: "Spouse 2",
    date: "Date",
    place: "Place",
    type: "Type",
    celebrant: "Officiated by",
  },

  defunciones: {
    title: "Death records query",
    desc: "Search by name of the deceased or ID number.",
    placeholder: "E.g.: Roberto Jiménez, 1-0654-2219...",
    btn: "Search",
    loading: "Searching...",
    clear: "Clear",
    found: "Found",
    foundSuffix: "record(s).",
    notFoundTitle: "No results",
    notFoundDesc: "No records found for",
    cardTitle: "Death Registration",
    deceased: "Deceased person",
    age: "years old",
    date: "Date",
    place: "Place",
    cause: "Cause",
  },

  card: {
    birthDate: "Date of birth",
    sex: "Sex",
    maritalStatus: "Marital status",
    canton: "Canton of residence",
    father: "Father's name",
    mother: "Mother's name",
    nationality: "Nationality",
    notRegistered: "Not registered",
    notPublic: "Information not publicly available",
    warning: "This information is of an official nature. Its misuse may constitute a violation of the Data Protection Law.",
    years: "years old",
  },
},
};

export default en;
