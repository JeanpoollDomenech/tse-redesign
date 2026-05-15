const es = {
  // Navbar
  nav: {
    search: "Buscar en el sitio...",
    menu: "Menú",
  },

  // MobileMenu
  mobileMenu: {
    title: "Menú principal",
    mostVisited: "Servicios más visitados",
    mainMenu: "Menú principal",
    sections: "Secciones",
  },

  // QuickAccess
  quickAccess: {
    label: "Más visitados",
  },

  // HeroBanner
  hero: {
    slides: [
      {
        eyebrow: "Elecciones Nacionales 2026",
        title: "Conozca a nuestras Autoridades Gobernantes",
        cta: "Ver información",
      },
      {
        eyebrow: "Registro Civil",
        title: "Solicite su documento de identidad en línea",
        cta: "Iniciar trámite",
      },
      {
        eyebrow: "Transparencia Institucional",
        title: "Acceda a la rendición de cuentas del TSE",
        cta: "Ver documentos",
      },
    ],
    elections: "Elecciones",
    country: "Costa Rica",
    prev: "Diapositiva anterior",
    next: "Siguiente diapositiva",
    goTo: "Ir a diapositiva",
  },

  // MainCategories
  categories: {
    title: "Nuestros servicios",
    seeMore: "Ver más",
  },

  // FeaturedSections
  featured: {
    title: "Secciones destacadas",
    enter: "Ingresar",
    descriptions: {
      "/transparencia": "Consulte información sobre presupuestos, contrataciones y gestión institucional del TSE.",
      "/revista": "Publicación académica especializada en temas electorales y de derecho público.",
      "/participacion-mujeres": "Recursos e información sobre la participación política femenina en Costa Rica.",
    },
  },

  // NewsSection
  news: {
    title: "Noticias",
    seeAll: "Ver todas",
    readMore: "Ver noticia",
    tags: {
      institucional: "Aviso institucional",
      elecciones: "Elecciones 2026",
      civil: "Registro Civil",
    },
  },

  // Footer
  footer: {
    siteMap: "Mapa del Sitio",
    schedules: "Horarios y Contactos",
    locations: "Ubicación de sedes",
    social: "Redes Sociales",
    privacy: "Privacidad",
    terms: "Términos de uso",
    description: "Tribunal Supremo de Elecciones de Costa Rica",
    basedOn: "Basada en una obra en",
    daily: "Sitio de actualización diaria",
    copyright: "Tribunal Supremo de Elecciones — Costa Rica",
  },

  // Toast
  toast: {
    unavailable: "Este apartado estará disponible próximamente.",
    search: "El buscador del sitio estará disponible próximamente.",
    service: "Este servicio estará disponible próximamente.",
    section: "Esta sección estará disponible próximamente.",
    news: "Esta noticia no está disponible en este momento.",
  },

  // navLinks labels
  links: {
    consultasCiviles: "Consultas Civiles",
    certificaciones: "Certificaciones Digitales",
    documentoIdentidad: "Documento de Identidad",
    sobreTSE: "Sobre el TSE",
    sobreTSEDesc: "Misión, visión e historia institucional",
    registroCivil: "Servicios de Registro Civil",
    registroCivilDesc: "Nacimientos, matrimonios, defunciones",
    elecciones: "Elecciones y Partidos Políticos",
    eleccionesDesc: "Información electoral y partidos",
    jurisprudencia: "Jurisprudencia y Normativa",
    jurisprudenciaDesc: "Resoluciones y marco legal",
    formacion: "Formación en Democracia",
    formacionDesc: "Recursos educativos y capacitaciones",
    publicaciones: "Publicaciones",
    publicacionesDesc: "Revistas, informes y documentos",
    transparencia: "Transparencia y Rendición de Cuentas",
    revista: "Revista de Derecho Electoral",
    participacion: "Participación Política de las Mujeres",
  },

  // Consultas Civiles
consultas: {
  pageTitle: "Consultas Civiles y Solicitud de Certificaciones",
  breadcrumb: "Consultas Civiles",
  pageDesc: "Consulte información del Registro Civil del Tribunal Supremo de Elecciones. Seleccione el tipo de consulta que desea realizar.",
  nacionales: "Personas Nacionales",
  extranjeros: "Personas Extranjeras",
  disclaimer: "En caso de detectar alguna inconsistencia en la información que se refleja en este servicio de consultas civiles, podrá solicitar su aclaración o corrección, mediante correo electrónico a la siguiente dirección:",
  disclaimerForm: "para lo cual se deberá completar el formulario",
  disclaimerAttach: "y adjuntarlo al correo.",
  formLabel: "Actualización a la Base de Datos",
  clickHere: "Haga clic aquí",

  cedula: {
    title: "Consulta por número de cédula",
    desc: "Ingrese el número de cédula de identidad costarricense.",
    placeholder: "0-0000-0000",
    btn: "Consultar",
    loading: "Consultando...",
    clear: "Limpiar",
    apiConnected: "Conectado a API oficial · apis.gometa.org",
    apiResult: "Datos obtenidos desde API oficial de Hacienda · gometa.org",
    apiOffline: "API externa no disponible · mostrando datos de demostración",
    demo: "Datos de demostración",
    errorTitle: "Formato inválido",
    errorDesc: "El número de cédula debe tener el formato correcto (ej: 1-0847-0392).",
    notFoundTitle: "Sin resultados",
    notFoundDesc: "No se encontró ninguna persona con la cédula",
    offlineTitle: "Servicio no disponible",
    offlineDesc: "No se pudo conectar al servicio externo. Intente nuevamente.",
  },

  nombre: {
    title: "Consulta por nombre y apellidos",
    desc: "Ingrese el nombre completo o apellidos. Mínimo 4 caracteres, solo palabras completas.",
    placeholder: "Ej: OSCAR ARIAS, RODRIGUEZ MORA...",
    btn: "Consultar",
    loading: "Consultando...",
    clear: "Limpiar",
    apiConnected: "Conectado a API oficial · apis.gometa.org",
    apiResult: "Resultados desde API oficial · gometa.org",
    apiOffline: "API no disponible · mostrando datos de demostración",
    demo: "Datos de demostración",
    found: "Se encontraron",
    foundSuffix: "resultado(s) para",
    showingFirst: "Mostrando los primeros 10.",
    notFoundTitle: "Sin resultados",
    notFoundDesc: "No se encontraron personas con el nombre",
    notFoundHint: "Use palabras completas de al menos 4 caracteres.",
    back: "Volver a resultados",
  },

  extranjero: {
    title: "Consulta por número de DIMEX",
    desc: "Ingrese el número de Documento de Identidad Migratoria para Extranjeros (DIMEX).",
    placeholder: "Ej: 117200445632",
    btn: "Consultar",
    loading: "Consultando...",
    clear: "Limpiar",
    errorTitle: "Formato inválido",
    errorDesc: "El DIMEX debe contener entre 10 y 12 dígitos numéricos.",
    notFoundTitle: "Sin resultados",
    notFoundDesc: "No se encontró ninguna persona con el DIMEX",
  },

  matrimonios: {
    title: "Consulta de matrimonios",
    desc: "Busque por nombre de uno de los cónyuges o número de cédula.",
    placeholder: "Ej: Carlos Rodríguez, 1-0847-0392...",
    btn: "Consultar",
    loading: "Consultando...",
    clear: "Limpiar",
    found: "Se encontraron",
    foundSuffix: "registro(s).",
    notFoundTitle: "Sin resultados",
    notFoundDesc: "No se encontraron registros para",
    cardTitle: "Inscripción de Matrimonio",
    spouse1: "Cónyuge 1",
    spouse2: "Cónyuge 2",
    date: "Fecha",
    place: "Lugar",
    type: "Tipo",
    celebrant: "Celebrado por",
  },

  defunciones: {
    title: "Consulta de defunciones",
    desc: "Busque por nombre del fallecido o número de cédula.",
    placeholder: "Ej: Roberto Jiménez, 1-0654-2219...",
    btn: "Consultar",
    loading: "Consultando...",
    clear: "Limpiar",
    found: "Se encontraron",
    foundSuffix: "registro(s).",
    notFoundTitle: "Sin resultados",
    notFoundDesc: "No se encontraron registros para",
    cardTitle: "Inscripción de Defunción",
    deceased: "Persona fallecida",
    age: "años",
    date: "Fecha",
    place: "Lugar",
    cause: "Causa",
  },

  card: {
    birthDate: "Fecha de nacimiento",
    sex: "Sexo",
    maritalStatus: "Estado civil",
    canton: "Cantón de residencia",
    father: "Nombre del padre",
    mother: "Nombre de la madre",
    nationality: "Nacionalidad",
    notRegistered: "No registrado",
    notPublic: "Información no disponible públicamente",
    warning: "Esta información es de carácter oficial. Su uso indebido puede constituir una infracción a la Ley de Protección de Datos.",
    years: "años",
  },
},
};

export default es;
