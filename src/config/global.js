export default {
  global: {
    componenteFormativo:
      'Proceso integral de siembra, cosecha y comercialización',
    descripcionCurso:
      'La siembra e incubación de los hongos orellana es fundamental para su cultivo. Abarca desde la inoculación hasta la fructificación, garantizando las condiciones óptimas de temperatura, humedad y ventilación. La incubación es clave, pues marca la transición hacia la fase productiva, en la cual se controla la presencia de plagas y enfermedades, asegurando un producto saludable y de alta calidad.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Siembra o inoculación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Incubación.',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Fructificación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Cosecha',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Manejo postcosecha',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Proceso de deshidratación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: ' Canales de comercialización',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Siembra o inoculación.',
      referencia:
        'Así lo hacemos: cultivo de orellanas. (2012). Ecosistema de Recursos Educativos Digitales. SENA [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=40OnlyXX1yc',
    },
    {
      tema: 'Manejo postcosecha.',
      referencia:
        'Catalina Carvajal, (2020). Manejo de Cosecha y Postcosecha de Frutas y Hortalizas. (Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=E2JoC5tLvLU',
    },
  ],
  glosario: [
    {
      termino: 'Cosecha',
      significado:
        'momento en el que se recolectan los cuerpos fructíferos del hongo una vez alcanzan el tamaño y madurez adecuados.',
    },
    {
      termino: 'Control de plagas',
      significado:
        'técnicas utilizadas para prevenir y combatir organismos que pueden dañar el cultivo durante las distintas fases de producción.',
    },
    {
      termino: 'Desinfección',
      significado:
        'proceso de limpieza profunda de herramientas y superficies para eliminar microorganismos que puedan contaminar el cultivo.',
    },
    {
      termino: 'Deshidratado',
      significado:
        'técnica aplicada a ciertas especies agrícolas para eliminar el exceso de agua, prolongando su vida útil sin perder sus propiedades.',
    },
    {
      termino: 'Fructificación',
      significado:
        'proceso en el que el hongo pasa de la etapa de crecimiento vegetativo a la producción de cuerpos fructíferos, es decir, los hongos comestibles.',
    },
    {
      termino: 'Inoculación',
      significado:
        'introducción de esporas o micelio en el sustrato para que el hongo comience a desarrollarse.',
    },
    {
      termino: 'Incubación',
      significado:
        'etapa donde las esporas se desarrollan en el sustrato hasta formar micelio, y ocurre la transición de la fase vegetativa a la productiva.',
    },
    {
      termino: 'Pasteurización',
      significado:
        'método utilizado para tratar el sustrato y eliminar patógenos sin afectar los nutrientes necesarios para el desarrollo del hongo.',
    },
    {
      termino: 'Postcosecha',
      significado:
        'conjunto de técnicas para conservar y preparar los hongos orellana una vez recolectados, asegurando su calidad hasta llegar al consumidor final.',
    },
    {
      termino: 'Siembra',
      significado:
        'proceso de inoculación de la semilla del hongo en el sustrato adecuado para iniciar su crecimiento.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cisterna, C. (2002). Cultivo del champiñón ostra en chile. Mycotec, Ltda. Editores. Concepción, Chile.',
      link: '',
    },
    {
      referencia:
        'Fernández, F. (2004). Guía práctica de producción de Setas (Pleurotus spp.). Fungitec Asesorías. Guadalajara, Jalisco. México, 54.',
      link: '',
    },
    {
      referencia:
        'Flores, A., y Contreras, M. (2012). Manual de cultivo de hongo seta SETA (Pleorotus ostreatus) de forma artesana.',
      link:
        'http://huertofenologico.filos.unam.mx/-%20files/2017/05/Cultivo_de_hongo_seta.pdf/',
    },
    {
      referencia:
        'Gaitán, R., Salmones, D., Pérez, R., y Mata, G. (2006). Manual práctico del cultivo de setas aislamiento, siembra y producción. Veracruz-México. Instituto de ecología A.C.',
      link: 'https://setascultivadas.com/manualescultivo.html',
    },
    {
      referencia:
        'Guzmán, G., Mata, G., Salmones, D., Soto, C., y Guzmán, L. (2010). El cultivo de los hongos comestibles. Instituto Politécnico Nacional.',
      link: '',
    },
    {
      referencia:
        'Herrera Ramírez, J., & Ancona González, M. A. (2006). Proyecto de inversión de una unidad productora de setas en el municipio de las Vigas, Veracruz.',
      link:
        'https://cdigital.uv.mx/server/api/core/bitstreams/c35c07a6-ce62-4342-80af-aa4742abbb78/content',
    },
    {
      referencia:
        'Michelis, A., y Rajchenberg, M. (2006). Hongos Comestibles: Teoría y práctica para la recolección, elaboración y conservación.',
      link: 'https://www.argentina.gob.ar/buscar/Hongos%20comestibles',
    },
    {
      referencia:
        'Rodríguez, N., & Jaramillo, C. (2003). Cultivo de hongos comestibles del género Pleurotus sobre residuos agrícolas de la zona cafetera. Caldas-Colombia: Federación Nacional de Cafeteros de Colombia.',
      link: 'https://biblioteca.cenicafe.org/bitstream/10778/582/1/027.pdf',
    },
    {
      referencia:
        'Rodríguez, N., & Jaramillo, C. (2003). Cultivo de hongos comestibles del Sanmartín, J. y Buj, J. (2017). Diseño de un equipo para deshidratación de tomates, a escala de laboratorio, mediante aprovechamiento de energía solar y energía eléctrica. Cartagena-Colombia. Universidad de San Buenaventura seccional Cartagena.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro para el desarrollo agroecológico Y agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Andrea PatiñoVillarraga ',
          cargo: 'Experta temática',
          centro: 'SENA - Regional Risaralda.',
        },
        {
          nombre: 'Gilberto Herrera Delgans',
          cargo: 'Evaluador instruccional',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Hernando Junior Strusberg Perez',
          cargo: 'Diseñador <em>web</em>',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Rafael Bladimir Pérez Meriño',
          cargo: 'Desarrollador <em>fullstack</em>',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Juan Carlos Cardona Acosta',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
