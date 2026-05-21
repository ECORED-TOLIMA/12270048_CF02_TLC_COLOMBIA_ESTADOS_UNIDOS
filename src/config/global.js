export default {
  global: {
    Name: 'Marco normativo y generalidades del TLC',
    Description:
      'El programa TLC Colombia con Estados Unidos fortalece competencias en comercio exterior mediante el análisis del acuerdo, sus normas y oportunidades. A través de una metodología práctica con TIC y simulaciones, el aprendiz desarrolla habilidades para aplicar procesos de importación, exportación y estrategias comerciales, logrando tomar decisiones efectivas y desempeñarse con éxito en entornos internacionales competitivos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
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
        titulo: 'Variables del comportamiento comercial y logístico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Defensa comercial: salvaguardias, antidumping y subvenciones',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Legislación laboral en el marco del TLC',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Compromisos sanitarios y fitosanitarios',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Medio ambiente y armonía de la actividad comercial',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Clasificación y estudio arancelario',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Zonas francas y zonas de promoción de exportaciones',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Conversión y manejo de divisas',
            hash: 't_1_7',
          },
          {
            numero: '1.8',
            titulo: 'Medios de pago en el comercio internacional',
            hash: 't_1_8',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Implementación de procesos de importación y exportación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Embalaje, envase, empaque y requisitos para el mercado de Estado Unidos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Documentos soporte de las operaciones de comercio exterior',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Régimen sancionatorio aduanero',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Derechos de propiedad intelectual en el comercio exterior',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Simulación integral de una operación de exportación bajo el TLC',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Pasos de la simulación',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Lista de chequeo para el despacho de exportación',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'Capacidades de respuesta frente a las exigencias del mercado',
            hash: 't_3_3',
          },
        ],
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA10_228144_DU.pdf',
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
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: '<em>Antidumping</em>',
      significado:
        'medida arancelaria aplicada cuando un exportador vende en el exterior a precios inferiores a su costo de producción o al precio en su mercado doméstico, con el fin de proteger a los productores del país importador.',
    },
    {
      termino: 'BL (Bill of Lading)',
      significado:
        'conocimiento de embarque marítimo. Documento que acredita el contrato de transporte y sirve como título de propiedad de la mercancía.',
    },
    {
      termino: 'CBP (Customs and Border Protection)',
      significado:
        'agencia federal de EE. UU. responsable del control aduanero de las mercancías que ingresan y salen del país.',
    },
    {
      termino: 'Cobertura cambiaria (<em>hedge</em>)',
      significado:
        'instrumento financiero que permite fijar anticipadamente el tipo de cambio de una operación, reduciendo el riesgo de pérdida por volatilidad del USD.',
    },
    {
      termino: 'DEX (Declaración de Exportación)',
      significado:
        'documento aduanero colombiano que autoriza la salida definitiva de mercancías del territorio nacional. Debe ser aprobado por la DIAN antes del embarque.',
    },
    {
      termino: '<em>Dumping</em>',
      significado:
        'práctica comercial desleal que consiste en exportar un producto a un precio inferior al que tiene en el mercado de origen o por debajo de su costo de producción.',
    },
    {
      termino: 'FDA (<em>Food and Drug Administration</em>)',
      significado:
        'agencia federal de EE. UU. que regula la seguridad de alimentos, medicamentos, cosméticos y otros productos para el consumo humano.',
    },
    {
      termino: 'Medida de salvaguardia',
      significado:
        'restricción temporal al comercio (arancel adicional o cuota) que aplica un país para proteger a un sector productivo afectado por un aumento imprevisto de importaciones.',
    },
    {
      termino: 'NIMF-15',
      significado:
        'Norma Internacional para Medidas Fitosanitarias N.° 15 de la CIPF. Exige que la madera usada en embalajes para comercio internacional sea tratada térmicamente y lleve el sello ISPM-15.',
    },
    {
      termino: '<em>Prior Notice</em>',
      significado:
        'aviso previo que debe presentarse ante la FDA con la información de alimentos que van a importarse en EE. UU., con mínimo 2 horas de anticipación para carga aérea.',
    },
    {
      termino: 'SA (Sistema Armonizado)',
      significado:
        'sistema internacional de codificación de mercancías de la OMA, con seis dígitos universales y dígitos adicionales por país (diez en Colombia).',
    },
    {
      termino: 'TRM (Tasa de Cambio Representativa del Mercado)',
      significado:
        'precio promedio ponderado del dólar en el mercado cambiario colombiano, publicado diariamente por el Banco de la República.',
    },
    {
      termino: 'Zona franca',
      significado:
        'área del territorio aduanero donde se aplican condiciones especiales de tributación y aduanas para atraer inversión y promover exportaciones.',
    },
  ],
  referencias: [
    {
      referencia:
        'Banco de la República de Colombia. (2024). <em>Resolución Externa DCIN-83: régimen cambiario de operaciones de cambio</em>. Banco de la República.',
      link: '',
    },
    {
      referencia:
        'Cámara de Comercio Internacional [CCI]. (2020). <em>Incoterms® 2020: reglas de la CCI para el uso de términos comerciales nacionales e internacionales</em>. ICC Publishing.',
      link: '',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales [DIAN]. (2019). <em>Decreto 1165 de 2019: régimen de aduanas de Colombia</em>. Ministerio de Hacienda y Crédito Público.',
      link: '',
    },
    {
      referencia:
        '<em>Food and Drug Administration</em> [FDA]. (2024). <em>Requisitos de etiquetado para alimentos importados a Estados Unidos</em>. U.S. Department of Health and Human Services. <u></u>',
      link: 'https://www.fda.gov',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario [ICA]. (2024). <em>Certificados sanitarios para la exportación de productos agropecuarios</em>. Ministerio de Agricultura y Desarrollo Rural.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo [MinCIT]. (2012). <em>Acuerdo de Promoción Comercial entre la República de Colombia y los Estados Unidos de América: texto oficial en español</em>. MinCIT. <u></u>',
      link: 'https://www.tlc.gov.co',
    },
    {
      referencia:
        'Organización Internacional del Trabajo [OIT]. (2012). <em>El Acuerdo de Promoción Comercial Colombia y los Estados Unidos: compromisos laborales y estándares internacionales</em>. OIT.',
      link: '',
    },
    {
      referencia:
        'ProColombia. (2024). <em>Guía para exportar a Estados Unidos: requisitos sanitarios, documentales y logísticos</em>. ProColombia.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez ',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz ',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Manuel Felipe Echavarria Orozco',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'María Fernanda Pineda Mora',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
}
