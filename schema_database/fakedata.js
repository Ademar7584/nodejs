'use strict';
/*eslint max-len: ["error", { "code": 350 }]*/
module.exports = {
  Role: [
    {
      'name': 'admin',
    }, {
      'name': 'normal',
    }, {
      'name': 'premium',
    },
  ],
  AccessToken: [],
  ACL: [],
  RoleMapping: [
    {
      principalType: 'USER',
      principalId: 1,
      roleId: 1,
    },
  ],
  coin: [
    {
      'name': 'Bitcoin',
      'symbol': 'BTC',
      'totalSupply': 17089700.0,
    }, {
      'name': 'Ethereum',
      'symbol': 'ETH',
      'totalSupply': 100035260.0,
    }, {
      'name': 'Ripple',
      'symbol': 'XRP',
      'totalSupply': 99991958570.0,
    }, {
      'name': 'Bitcoin Cash',
      'symbol': 'BCH',
      'totalSupply': 17180038.0,
    }, {
      'name': 'EOS',
      'symbol': 'EOS',
      'totalSupply': 900000000.0,
    }, {
      'name': 'Litecoin',
      'symbol': 'LTC',
      'totalSupply': 56952723.0,
    }, {
      'name': 'Stellar',
      'symbol': 'XLM',
      'totalSupply': 104025824192.0,
    }, {
      'name': 'Cardano',
      'symbol': 'ADA',
      'totalSupply': 31112483745.0,
    }, {
      'name': 'IOTA',
      'symbol': 'IOTA',
      'totalSupply': 2779530283.0,
    }, {
      'name': 'TRON',
      'symbol': 'TRX',
      'totalSupply': 100000000000.0,
    },
  ],
  advisory: [],
  // 'disputa': [],
  // instruccion: [],
  offer: [],
  comment: [
    {
      content: 'Hola, hay alguien',
      modelName: 'signal',
      modelId: 1,
      status: true,
      userId: 1,
    }, {
      content: 'hay alguien',
      modelName: 'signal',
      modelId: 1,
      status: true,
      userId: 1,
    }, {
      content: 'en serio, hay alguien!!! X(',
      modelName: 'signal',
      modelId: 1,
      status: true,
      userId: 1,
    }, {
      content: 'Hola, hay alguien',
      modelName: 'news',
      modelId: 2,
      status: true,
      userId: 2,
    },
  ],
  answer: [
    {
      content: 'yo te estoy respondiendo',
      modelName: 'signal',
      modelId: 2,
      commentId: 1,
      status: true,
      userId: 3,
    }, {
      content: 'pero no me escuchas',
      modelName: 'signal',
      modelId: 2,
      commentId: 1,
      status: true,
      userId: 3,
    }, {
      content: 'yo te estoy respondiendo',
      modelName: 'signal',
      modelId: 2,
      commentId: 2,
      status: true,
      userId: 4,
    }, {
      content: 'pero no me escuchas',
      modelName: 'news',
      modelId: 2,
      commentId: 1,
      status: true,
      userId: 3,
    },
  ],
  market: [{
    name: 'Intercambio',
    decription: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor',
    userId: 1,
  }, {
    name: 'Contratos Inteligentes',
    decription: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor',
    userId: 1,
  }, {
    name: 'Redes Sociales',
    decription: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor',
    userId: 1,
  }, {
    name: 'Monedas Anonimas',
    decription: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor',
    userId: 1,
  }, {
    name: 'Juegos',
    decription: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor',
    userId: 1,
  }, {
    name: 'Propiedades de Inmuebles',
    decription: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor',
    userId: 1,
  }, {
    name: 'Exchange Decentralizado',
    decription: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor',
    userId: 1,
  }],
  project: [
    {
      name: 'ICOS',
      userId: 1,
      marketId: 1,
      coinId: 5,
    },
  ],
  title: [
    {
      'name': 'Detalle del proyecto ',
    }, {
      'name': 'Introducción',
      'correspondence': 1,
      'link': 'introduccion.html',
    }, {
      'name': 'Detalles de la tecnología',
      'correspondence': 1,
      'link': 'detallestecnologia.html',
    }, {
      'name': 'Road-map y producto mínimo viable',
      'correspondence': 1,
      'link': 'road-mapproductominimoviable.html',
    }, {
      'name': 'Contrapartes en la tecnología centralizada',
      'correspondence': 1,
      'link': 'contrapartestecnologiacentralizada.html',
    }, {
      'name': 'Necesidad de ser descentralizado',
      'correspondence': 1,
      'link': 'necesidadserdescentralizado.html',
    }, {
      'name': 'Necesidad',
      'correspondence': 1,
      'link': 'necesidad.html',
    }, {
      'name': 'Nicho de mercado',
      'correspondence': 1,
      'link': 'nichomercado.html',
    }, {
      'name': 'Diferencia competitiva',
      'correspondence': 1,
      'link': 'diferenciacompetitiva.html',
    }, {
      'name': 'Consideraciones',
      'correspondence': 1,
      'link': 'consideraciones1.html',
    }, {
      'name': 'Marketing',
    }, {
      'name': 'Calidad del equipo encargado',
      'correspondence': 11,
      'link': 'calidadequipoencargado.html',
    }, {
      'name': 'Medios de prensa',
      'correspondence': 11,
      'link': 'mediosprensa.html',
    }, {
      'name': 'Asociaciones',
      'correspondence': 11,
      'link': 'asociaciones.html',
    }, {
      'name': 'Calidad de imagen',
      'correspondence': 11,
      'link': 'calidadimagen.html',
    }, {
      'name': 'Consideraciones',
      'correspondence': 11,
      'link': 'consideraciones11.html',
    }, {
      'name': 'Redes sociales',
    }, {
      'name': 'Crecimiento',
      'correspondence': 17,
      'link': 'crecimiento.html',
    }, {
      'name': 'Reacción de seguidores',
      'correspondence': 17,
      'link': 'reaccionseguidores.html',
    }, {
      'name': 'Implicación',
      'correspondence': 17,
      'link': 'implicacion.html',
    }, {
      'name': 'Consideraciones',
      'correspondence': 17,
      'link': 'consideraciones17.html',
    }, {
      'name': 'Oferta Vs Demanda',
    }, {
      'name': 'Minería de datos',
      'correspondence': 22,
      'link': 'mineriadatos.html',
    }, {
      'name': 'Política inflacionaria',
      'correspondence': 22,
      'link': 'politicainflacionaria.html',
    }, {
      'name': 'Uso de tokens e indicador NVT',
      'correspondence': 22,
      'link': 'usotokensindicadornvt.html',
    }, {
      'name': 'Estimación del tamaño de mercado',
      'correspondence': 22,
      'link': 'estimaciontamanomercado.html',
    }, {
      'name': 'Comparación entre oferta y demanda',
      'correspondence': 22,
      'link': 'comparacionofertademanda.html',
    }, {
      'name': 'Consideraciones',
      'correspondence': 22,
      'link': 'consideraciones22.html',
    }, {
      'name': 'Equipo',
    }, {
      'name': 'Directivos',
      'correspondence': 29,
      'link': 'directivos.html',
    }, {
      'name': 'Asesores',
      'correspondence': 29,
      'link': 'asesores.html',
    }, {
      'name': 'Frecuencia de actualizaciones en Github',
      'correspondence': 29,
      'link': 'recuenciaactualizacionesgithub.html',
    }, {
      'name': 'Consideraciones',
      'correspondence': 29,
      'link': 'consideraciones29.html',
    }, {
      'name': 'Conclusiones',
    }, {
      'name': 'Conclusion',
      'correspondence': 34,
      'link': 'conclusion.html',
    },
  ],
  idea: [
    {
      'content': 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno ' +
        'estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una ' +
        'galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ' +
        'ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado',
      'qualidication': 3,
      'titleId': 35,
      'coinId': 2,
      'userId': 1,
    }, {
      'content': 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno ' +
        'estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una ' +
        'galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ' +
        'ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado',
      'qualidication': 2,
      'titleId': 35,
      'coinId': 3,
      'userId': 2,
    }, {
      'content': 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno ' +
        'estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una ' +
        'galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ' +
        'ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado',
      'qualidication': 1,
      'titleId': 35,
      'coinId': 1,
      'userId': 3,
    }, {
      titleId: 2,
      coinId: 5,
      projectId: 1,
      userId: 1,
      qualidication: 3,
      content: 'La idea comenzó el año 2014 con un estudio del mercado de crowdsourcing global en Rusia. A partir de ahí nació Kickico, una ' +
        'plataforma cuyo objetivo es facilitar y hacer más automáticas las campañas de recaudación de fondos, incluyendo Pre-ICOs, ICOs, y ' +
        'permitir que cualquier organización pueda crear su propia campaña de recaudación de fondos en unos cuantos pasos eliminando cualquier ' +
        'tipo de intermediario',
    }, {
      titleId: 3,
      coinId: 5,
      projectId: 1,
      userId: 1,
      qualidication: 3,
      content: 'La plataforma de Kickico tiene el soporte suficiente para realizar campañas de crowdfunding y crowdinvestig,  además de las ' +
        'campañas conocidas como ICOs. La versatilidad es uno de los componentes principales para abarcar un mercado más amplio dentro del ' +
        'mercado. Además de la versatilidad, se debe mencionar el factor que en el caso de compra de tokens, se recibe además el token creado ' +
        'por Kickico, recibiendo de esta manera dos monedas a la vez, otorgando un doble beneficio, también respaldan campañas de crowdfunding ' +
        'otorgándolas Kickcoins como una especie de seguro contra el fracaso. El costo o cargo para cualquier proyecto y/o startup que desee ' +
        'recaudar fondos dentro de la plataforma de Kickico es del 4%, este cargo es cobrado cuando se haya recaudado exitosamente los fondos ' +
        'necesarios para le empresa. En el caso de ICOS que crean nuevas monedas, Kickico toma un 4% adicional 	 de los tokens producidos dentro ' +
        'de esa campaña. Estos tokens son transferidos a un fondo de reserva perteneciente a Kicico. A comparación de otras plataformas que ' +
        'cobran entre el 10 o 15% de la campaña de recaudación, es una clara ventaja para atraer nuevos proyectos o startups. En el caso de los ' +
        'crowdfundings regulares surge un problema normal, entre los inversores, relacionado con la seguridad de sus inversiones porque en estas ' +
        'campañas se basan en la confianza a las empresas y lo que se comprometen a cumplir. En este caso Kickico asegura la inversión de los ' +
        'participantes otorgándoles Kickcoins valuados en el 20% del monto que invirtieron. Por otro lado, gracias a la versatilidad de Kickico, ' +
        'se puede realizar campañas de crowdinvesting, que a diferencias de campañas de crowdfunding comunes, permite al inversor poder ser partícipe ' +
        'de las ganancias o beneficios que genere la empresa. Pero el tema de regulación es la traba para tener distintos tipos de inversores ' +
        'pertenecientes a diferentes países. Kickico permite realziar campañas de recaudación no únicamente para residentes de un determinado ' +
        'país, sino para residentes de cualquier país del planeta. ',
    }, {
      titleId: 4,
      coinId: 5,
      projectId: 1,
      userId: 1,
      qualidication: 3,
      content: 'Los hechos más destacables y futuros proyectos se describen a continuación:' +
        'Año 2015, desarrollo de arquitectura de proyectos' +
        'Año 2015, creación de prototipos' +
        'Año 2016 lanzamiento de la versión Alpha' +
        'Año 2017; lanzamiento de la versión Beta' +
        'Año 2018; lanzamiento de sistemas de recompensas' +
        'Año 2018; Kit visual de contratos inteligentes' +
        'Año 2018; lanzamiento de academia de crowdfunding' +
        'Año 2019; desarrollo de comunidades locales de creadores y patrocinadores' +
        'Año 2019, desarrollo de herramientas de plataforma: Consultorías, marketing, etc.' +
        'Año 2020; creación de API para campañas de crowdfunding independientes' +
        'Actualmente la plataforma se encuentra en su versión beta, se puede mencionar campañas exitosas como la de Storiqa que alcanzó su ' +
        'softcap de 1.209 ETH, o INS Ecosystem que recaudó 60.00 ETH. En su página muestran más de 20 campañas exitosas de recaudación, este ' +
        'factor demuestra que la rentabilidad del proyecto y lo atractivo que resulta tanto para startups e inversores.',
    }, {
      titleId: 5,
      coinId: 5,
      projectId: 1,
      userId: 1,
      qualidication: 3,
      content: 'Existen varias plataformas del tipo de Kickico que ofrecen facilidades para realizar campañas de recaudación, pero entre las ' +
        'primeras está Indiegogo, organización fundada el año 2008, cobran una comisión del 5% sobre las contribuciones, además de cargos por ' +
        'procesamiento de tarjetas de crédito del 3%  + $us 0.30 por transacciones realizadas. Alrededor de 15 millones de personas visitan su ' +
        'sitio web cada mes. Entre las campañas que resaltaron se puede mencionar la campaña realizada por el proyecto “Colmena de flujo” que ' +
        'recaudò alrededor de $us 12 millones el año 2015, o el proyecto “Sondors Electric Bike” que el año 2015 recaudó más de $us 5 millones ' +
        'con un total de 14.646 socios.',
    }, {
      titleId: 6,
      coinId: 5,
      projectId: 1,
      userId: 1,
      qualidication: 3,
      content: 'Las campañas de recaudación  necesitan de distintos tipo de intermediarios como ser: bancos, sistemas de pago o algún otro tipo ' +
        'de reguladores para llevar con más confianza su propuesta. Kickico hace que el proceso sea menos moroso, con pasos sencillos, y accedas ' +
        'a una mayor cantidad de personas debido a que elimina los intermediarios para facilitar el proceso.',
    }, {
      titleId: 7,
      coinId: 5,
      projectId: 1,
      userId: 1,
      qualidication: 3,
      content: 'Una de las principales barreras para realizar crowdfunding es el excesivo costo que conlleva, sin mencionar que existen barreras ' +
        'legales que hacen que tu proyecto sea conocido solo en algunas regiones, hecho que reduce la probabilidad de éxito de este tipo de ' +
        'campañas. Otro factor, dentro del mundo Blockchain, es que las ICOs o proyectos no están respaldados o, a pesar de lo atractivo pueda ' +
        'sonar cada proyecto, el inversor corre el riesgo de perder sus fondos debido a que se trata de una estafa. A la vez al momento de ' +
        'intentar a llevar a cabo una campaña ICO, la empresa está expuesta a términos o factores que le puede resultar difícil de entender, ' +
        'este problema lleva a la necesidad de tener una especie de guía o tener un espacio donde sea más fácil llevar a cabo las ICOs.',
    }, {
      titleId: 8,
      coinId: 5,
      projectId: 1,
      userId: 1,
      qualidication: 3,
      content: 'Startups: Aquellas empresas o instituciones que deseen recaudar fondos para llevar a cabo mejoras o la implementación de un negocio cuyas preocupaciones se centren en costo de llevar a cabo el crowdfunding y cuyo público objetivo no se vea limitado por barreras legales' +
        'Inversores: Personas que deseen ser parte de alguna startup o proyecto interesante pero que presenten un mayor grado de seguridad en comparación del riesgo asumido al momento de participar de ICOs',
    }, {
      titleId: 9,
      coinId: 5,
      projectId: 1,
      userId: 1,
      qualidication: 3,
      content: 'La principal diferencia competitiva es el costo por llevar a cabo el crowdfunding, es bastante barato en comparación con otras plataformas centralizadas lo que permite que obtenga la atención de una mayor cantidad de proyectos' +
        'Por otro lado, la “garantía” que le brinda al inversor al otorgarle sus propios tokens por su participación hace que el riesgo de participar en dichas campañas se reduzca.' +
        'Por último, una de las más grandes ventajas que presenta la plataforma de Kickico es la versatilidad, debido a que no solamente acoje ICOs o Pre-ICOs, sino que abre la posibilidad de participar en distintos tipos de campañas como ser el crowdfunding o crowdinvesting.',
    }, {
      titleId: 10,
      coinId: 5,
      projectId: 1,
      userId: 1,
      qualidication: 3,
      content: 'Tomando en cuenta que ya existen plataformas dedicadas a ayudar a startups y empresas a recaudar dinero por sus ideas o proyectos, ' +
        'no existen muchos que te ofrezcan la versatilidad de Kickico, que a su vez te da su respaldo a través de sus propios tokens respaldando ' +
        'los proyectos, y dando garantía que fueron previamente analizados y calificados por Kickico',
    }, {
      titleId: 12,
      coinId: 5,
      projectId: 1,
      userId: 1,
      qualidication: 3,
      content: 'Cabe destacar que las principales funciones, relaciones públicas o jefe de manejo de comunidad y redes sociales, estos factores ' +
        'son una muestra de lo relevante dentro de Kickico el sector dedicado al marketing y asociaciones. Nicolay Syusko (Jefe de marketing): ' +
        'Es el jefe de transformación digital de Apla Blockhain desde 2017 los últimos 6 meses, se trata de una empresa que ayuda a gobiernos y ' +
        'empresas para descubrir el potencial del Blockchain. Además fue director de negocios por dos años en la empresa JAMI, donde fue ' +
        'responsable de negocios en Rusia, consiguió importantes socios y clientes como L`Oreal, Unilever o Google y desarrolló un programa de ' +
        'lealtad de marcas importantes como: Coca Cola, Skoda o SCA, logrando aumentar las ventas en más de 100 millones de RUB. Tiene un master ' +
        'en economía del Instituto Estatal Transcarpathian.',
    }, {
      titleId: 13,
      coinId: 5,
      projectId: 1,
      userId: 1,
      qualidication: 3,
      content: 'Entre los medios que publicaron noticias o siguen al proyecto Kickico sobresalen Cointelegraph, NEWSBTC, BlockchainNews o Hackernoon, ' +
        'este aspecto revela que la idea y desarrollo de la plataforma propuesta por Kickico parece interesarle a medios conocidos dentro del ' +
        'mundo del Blockchain. También se tienen medios ajenos a la economía de las criptomonedas o que no son tan especializadas como: Forber, ' +
        'WIRED, Rusbase, Iris Tech News, Profit Gid, estas menciones demuestran que el proyecto es tan llamativo que captó la atención de medios ' +
        'con una audiencia o lectores mayores como lo es Forbes, o que están especializados en tecnología como Irish Tech News.',
    }, {
      titleId: 14,
      coinId: 5,
      projectId: 1,
      userId: 1,
      qualidication: 3,
      content: 'Una de las asociaciones más sonadas dentro del proyecto Kickico se encuentra la unión de fuerza con la Fundación Metaverse de ' +
        'China en septiembre del 2017, creando una de las asociaciones más prominentes entre dos empresas pertenecientes a países potencias como ' +
        'los son Rusia y China. Entre los propósitos de dicha alianza resalta la construcción de una criptocomunidad rusa-china, consultoría de ' +
        'startups de Blockchain, Listados de intercambio, etc. Uno de los principales pasos fue la creación de fondos entre ambas empresas.' +
        'Otra asociación importante que ayudó al desarrollo del mercado y ampliación de la misma a la región de Korea es la colaboración entre ' +
        'Coinhills y Kickico. Coinhills es un popular servicio de criptomonedas de Corea que proporciona todo tipo de información sobre precios ' +
        'e índices. Coinhills se esfuerza por popularizar Bitcoin y la red de criptomonedas. A su vez, Kickico ayudará a Coinhills a ampliar sus ' +
        'servicios hasta los residentes de Rusia.',
    }, {
      titleId: 15,
      coinId: 5,
      projectId: 1,
      userId: 1,
      qualidication: 3,
      content: 'La página web se encuentra ordenada, resaltando tanto los futuros proyectos como las recaudaciones más recientes, resaltan el ' +
        'hecho que ya está disponible la versión beta. Existen enlaces directo al equipo y recaudaciones exitosas pasadas. Se trata de una página ' +
        'dinámica que no dista mucho de la presentación de páginas como Kickstarter, hecho que es conveniente en especial para las startups debido ' +
        'a que el diseño lo encuentran familiar. El único factor que no estuvo a la altura es que las particularidades y beneficios del proyecto ' +
        'se presentan en un pequeño enlace que es difícil de diferenciar o encontrar, este factor limita las posibilidades que nuevas startups ' +
        'conozcan o se informen acerca de los beneficios que presenta Kickico.',
    }, {
      titleId: 16,
      coinId: 5,
      projectId: 1,
      userId: 1,
      qualidication: 3,
      content: 'E términos generales tienen un equipo imponente en el área de marketing y relaciones públicas, cuyo trabajo se ve reflejado en ' +
        'los medios sociales interesados en el proyecto y asociaciones relacionadas con el crecimiento de mercado a nuevos países.',
    }, {
      titleId: 18,
      coinId: 5,
      projectId: 1,
      userId: 1,
      qualidication: 3,
      content: 'En el siguiente recuadro se mostrará el desempeño en redes sociales, en específico el crecimiento mensual en subscriptores de ' +
        'Reddit y Twitter además de likes en Facebook y número de subscriptores en Telegram' +
        'Reddit' +
        'Twitter' +
        'Facebook' +
        'Telegram' +
        'Seguidores' +
        '726' +
        '10.9 mil' +
        '21.872' +
        '5.842' +
        'Crecimiento' +
        '17,43%' +
        '11,19%' +
        '1,5%' +
        'El crecimiento promedio mensual en redes sociales es aproximadamente del 10%. Resaltando el crecimiento en Reddit, pero cabe mencionar ' +
        'que el número de subscriptores en esta red social es pequeña. En cambio la cantidad de likes y subscriptores en Facebook es impresionante ' +
        'desde sus inicios, esa puede ser la razón que en porcentaje de crecimiento no sea tan impresionante. Por eso la cantidad de subscriptores ' +
        'en Telegram y el crecimiento que tuvo en Twitter pueden ser los indicadores más cercanos a su realidad para observar el impacto del marketing ' +
        'y promociones en redes sociales. Por otra parte, es necesario mencionar que la cantidad de seguidores “reales” según Twitter.audit.com ' +
        'es del 71%, que significa que gran parte de sus seguidores son cuentas reales que están a pendiente de alguna novedad acerca del proyecto.',
    }, {
      titleId: 19,
      coinId: 5,
      projectId: 1,
      userId: 1,
      qualidication: 3,
      content: 'Por lo general el tema central de conversación son las ICOs que saldrán en su plataforma, ' +
        'a su vez es una fuente de interés las futuras reuniones en Argentina. Debido a la pequeña cantidad de subscriptores en Reddit, ' +
        'no hay tanta actividad dentro esta red, en cambio se observa bastantes hilos de conversación en Bitcointalk hablando del precio ' +
        'futuro y algunas características de Kickico. En cuanto a twitter sentiment y el sentimiento de mercado acerca de las novedades la ' +
        'gran mayoría les agrada el rumbo que está tomando Kickico, pero existen unos cuantos comentarios en contra pero son muy pocos en ' +
        'comparación con el interés general demostrado en Twitter.',
    }, {
      titleId: 20,
      coinId: 5,
      projectId: 1,
      userId: 1,
      qualidication: 3,
      content: 'La relación entre comentarios y volumen es de 0,00073%, pero al ver los números reales se tiene que el 13% de usuarios que está ' +
        'en línea o en redes oficiales de la página comenta los hot-posts. Además, el volumen de transacciones de las últimas horas alcanza los ' +
        '$us 684.167, cerca del 1,63% de la capitalización total del mercado. En base a los números presentado se puede afirmar que una parte de ' +
        'su comunidad está realmente implicada en el proyecto o sus avances, destacando que el 13% de sus usuario comentan y dan su opinión, y ' +
        'que una porción de su capitalización se mueve diariamente, cerca al 1,63%, dato bastante interesante debido a su capitalización y lo reciente que es',
    }, {
      titleId: 21,
      coinId: 5,
      projectId: 1,
      userId: 1,
      qualidication: 3,
      content: 'Un factor que se debe resaltar es que existen redes específicas como ser: Telegram, Twitter e inclusive Facebook, que muestran ' +
        'números interesantes tanto en cantidad como en crecimiento. Si bien los temas de conversación no son muy variados su comunidad sigue ' +
        'atenta a cualquier novedad de Kikcico, en especial si se habla de Bitcointalk cuyo sitio es donde más comentan. En cuanto a la implicación, ' +
        'se debe mencionar que un buen porcentaje de los que están en línea comentan en redes sociales, pero el número de comentarios sigue siendo ' +
        'una cantidad muy baja en comparación con  el volumen que movieron las últimas 24 horas.',
    }, {
      titleId: 23,
      coinId: 5,
      projectId: 1,
      userId: 1,
      qualidication: 3,
      content: 'Hasta el 10% de tokens fueron entregados al equipo, esta cantidad de tokens estarán congeladas durante 1 año. Con un total de ' +
        'tokens de 800.000.000 KC, y estando en circulación 452.421.595 KC todavía queda tiempo para que el total de tokens sean liberados.',
    }, {
      titleId: 24,
      coinId: 5,
      projectId: 1,
      userId: 1,
      qualidication: 3,
      content: 'La forma de liberación es la siguiente: cada mes se darán tokens KC mensualmente a los holders, durante los siguientes dos ' +
        'años: 0.5%, 1%, 2%, 3%, 5%, 6%. Tendiendo una media de liberación mensual promedio del 3% durante dos años1.',
    }, {
      titleId: 25,
      coinId: 5,
      projectId: 1,
      userId: 1,
      qualidication: 3,
      content: 'Los contribuyentes a proyectos bajo la plataforma KICKICO recibirían un cierto porcentaje de sus contribuciones en KK token ' +
        'como recompensa. A continuación hay algunos casos de uso de muestra para el token de KC. Los proyectos KICKICO tienen la opción de ' +
        'aceptar tokens de KC como forma de pago. Pago por una revisión: los proyectos que planean recaudar fondos en KICKICO pueden gastar ' +
        'tokens KC para obtener servicios de revisión de la comunidad KICKICO para garantizar que el proyecto se vea profesional y esté listo ' +
        'para funcionar. Moderación antes del lanzamiento: antes y durante el período de recaudación de fondos, los tokens de KC se pueden usar ' +
        'para servicios de moderación. Visibilidad: los tokens de KC se pueden utilizar para acceder a las publicaciones de KICKICO a fin de ' +
        'aumentar la visibilidad de los proyectos. Pago por servicios de traducción y revisión. El indicador NVT del proyecto es un reflejo del ' +
        'reducido volumen de tokens que se comercian diariamente. La relación capitalizacion-volúmen supera los 70 que muestra que el volumen ' +
        'no refleja el precio o el valor del proyecto, el volumen es mínimo en comparación con su capitalización. La brecha confirma la suposición ' +
        'que el token está sobrevaluado, debido a que hay una diferencia negativa entre la media del NVT y su valor actual, lo que quiere decir ' +
        'que el valor del token está por encima del precio tope de los últimos tres meses, clara muestra que está sobrevaluado.',
    }, {
      titleId: 26,
      coinId: 5,
      projectId: 1,
      userId: 1,
      qualidication: 3,
      content: 'Una de las características que más beneficia a Kickico es que no se encuadra en una sola forma de recaudación, de hecho, permite ' +
        'varias formas de recaudar dinero de acuerdo a las necesidades del proyecto. Pero se tiene que recalcar que el proyecto se centra en las ' +
        'ICOs por sobre las demás formas de recaudación de dinero. Por una parte, se puede tomar el ejemplo de Kickstarter, que tiene un crecimiento ' +
        'impresionante desde el momento que empezó a realizar sus funciones. A pesar que en los últimos años la cantidad de proyectos disminuyó, ' +
        'continua con un crecimiento impresionante del 41% anual (sin tomar el primer año cuando pasó de tener 874 proyectos a 8.500 proyectos, ' +
        'creciendo más de 8 veces), traduciéndose a un crecimiento mensual del 3,14% La cantidad de proyectos el año 2017 fue de 52.741 que representa ' +
        'un gran número para cualquier plataforma dedicada a recaudar fondos2. Por otro lado, se tiene a las ICOs, cuya popularidad aumentó a ' +
        'partir del año 2017 (año que sobrepasó la cantidad recaudado mediante Venture Capital). Posee una tasa de crecimiento importante, se ' +
        'hace más impresionante ante los intentos de prohibir o regular las ICOs, resaltando meses como octubre o diciembre que sobrepasaron las ' +
        '80 ICOs por mes. El crecimiento mensual de cantidad de ICOs es cercano al 38%.',
    }, {
      titleId: 27,
      coinId: 5,
      projectId: 1,
      userId: 1,
      qualidication: 3,
      content: 'El principal exchange es Kucoin que tiene el 24, 45% de tokens, que extrapolando al 100% se tiene que solo el 0,75% se utiliza ' +
        'para trading. En cuanto a google trends, se tiene una temporada baja de búsquedas estando lejos de su pico. Tomando en cuenta la media ' +
        'de liberación de tokens que es del 3%, y el porcentaje de crecimiento de ICOs, 41% mensual, y el de Kickstarter que es mayor al 3% hacen ' +
        'que sea posible creer que Kickico tenga posibilidades de crecer.',
    }, {
      titleId: 28,
      coinId: 5,
      projectId: 1,
      userId: 1,
      qualidication: 3,
      content: 'Calculando el promedio de crecimiento en cantidad de proyectos resulta un total de crecimiento del 22%, porcentaje superior al ' +
        'promedio de liberación. Estos factores, en conjunto con el continuo crecimiento del mercado de crowdfunding, hace posible afirmar que el ' +
        'modo de enfocar el mercado repercute en el futuro del proyecto.',
    }, {
      titleId: 30,
      coinId: 5,
      projectId: 1,
      userId: 1,
      qualidication: 3,
      content: 'Anti Danilevski (CEO): Productor de Fainfusion Games por 4 años, se trata de una empresa rusa dedicada a los video juegos cuyo ' +
        'producto estrella, Roya Flash Poker 3D, logró obtener alrededor de 2000.000 usuarios. Es licenciado en cinematografía y video producción ' +
        'de “Saint-Petersburg University of Cinema and Television” Kirill Khromov (COO): Fundador hasta la actualidad de VIVAster.com, que ofrece ' +
        'una plataforma para reservas en línea. Se encargó de lanzaruna empresa eCommerce de viajes en línea desde cero, llegando a obtener más ' +
        'de 3.000 agentes con 15.000 ofertas de 106 países. Tiene un máster en Finanzas Internacionales de “Unviersity of Buckingham” Anzor ' +
        'Daurov (Jefe del departamento de proyectos): Trabaja como SAP BI especialista en AmberLabs por 5 años, lugar donde pudo gestionar ' +
        'proyectos de desarrollo de software, gestión de proyectos de migración a gran escala. Tiene un máster en Informática de Negocios en ' +
        '“Higher School of Economics”',
    }, {
      titleId: 31,
      coinId: 5,
      projectId: 1,
      userId: 1,
      qualidication: 3,
      content: 'Jonathan Millet: Es presidente, desde febrero del 2018, de NEWSBTC, anteriormente fue CEO de la misma compañía por 3 años. ' +
        'Jefe Editor de ForexMinute Consulting por 3 años. Estudió en “UCL” licenciatura en Política.',
    }, {
      titleId: 32,
      coinId: 5,
      projectId: 1,
      userId: 1,
      qualidication: 3,
      content: 'Su mayor actividad se centra en agosto del 2017, a pesar de ese factor el 100% de su issues la completaron, con un total de ' +
        'new commits de 14. La cantidad de watchers llega a 10 y la categoría stars solamente 21. En definitiva, no es un equipo de desarrolladores ' +
        'que estén en constantes actualizaciones de la plataforma, esto se ve en la cantidad de commits por semana y la cantidad de seguidores del proyecto',
    }, {
      titleId: 33,
      coinId: 5,
      projectId: 1,
      userId: 1,
      qualidication: 3,
      content: 'Este aspecto puede ser uno de los puntos más débiles que presenta el proyecto, la trayectoria del equipo en general no es muy ' +
        'destacable, a excepción del COO. Este aspecto se ve reflejado tanto en el tema de asesores como en el desenvolvimiento del equipo de ' +
        'desarrolladores',
    }, {
      titleId: 35,
      coinId: 5,
      projectId: 1,
      userId: 1,
      qualidication: 3,
      content: 'Este aspecto puede ser uno de los puntos más débiles que presenta el proyecto, la trayectoria del equipo en general no es muy ' +
        'destacable, a excepción del COO. Este aspecto se ve reflejado tanto en el tema de asesores como en el desenvolvimiento del equipo de ' +
        'desarrolladores',
    },
  ],
  chatroom: [],
  chat: [],
  news: [
    {
      title: 'El servicio gratuito de Google traduce instantáneamente palabras',
      content: '<p><span class=\"st\">El servicio gratuito de Google traduce instantáneamente palabras, frases y páginas web del español a más de 100 idiomas y viceversa.</span></p>',
      coinType: 'BTC',
      country: 'Bolivia',
      region: 'Departamento de La Paz',
      guessCoin: '<p><span class=\"st\">El servicio gratuito de Google traduce instantáneamente palabras <img src="dropbox:1-1532253786453.jpeg:" alt="" width="480" height="494" /></span></p>',
      guessPrice: '<p><span class=\"st\">El servicio gratuito de Google traduce instantáneamente palabras, <img src="dropbox:1-1532253786453.jpeg:" alt="" width="480" height="494" /></span></p>',
      userId: 1,
      coinId: 1,
      image: '1-perfil-1.png',
      perfilLink: 'https://drive.google.com/uc?id=14WIEs_WSFQ6xrUfLyLxzeLA-Et-oPTwm&export=download',
      entryType: 'stop',
    }, {
      title: '¿Qué es Lorem Ipsum?',
      content: '<h2>¿Qué es Lorem Ipsum?</h2>\n<p></p>\n<p><strong>Lorem Ipsum</strong> es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)</p>',
      coinType: 'ETH',
      country: 'Peru',
      region: 'Arequipa',
      guessCoin: '<h2>¿Qué es Lorem Ipsum?</h2>\n<p></p>\n<p><strong>Lorem Ipsum</strong> es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)</p>',
      guessPrice: '<h2>¿Qué es Lorem Ipsum?</h2>\n<p></p>\n<p><strong>Lorem Ipsum</strong> es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)</p>',
      userId: 2,
      coinId: 2,
      image: '2-perfil-2.jpeg',
      perfilLink: 'https://drive.google.com/uc?id=1Eaw661Ip4DucD-QsP25XNPbHGPfKx0-o&export=download',
      entryType: 'stop',
    }, {
      title: '¿Qué es Lorem Ipsum?',
      content: '<h2>¿Qué es Lorem Ipsum?</h2>\n<p></p>\n<p><strong>Lorem Ipsum</strong> es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)</p>',
      coinType: 'ETH',
      country: 'Bolivia',
      region: 'Departamento de La Paz',
      guessCoin: '<h2>¿Qué es Lorem Ipsum?</h2>\n<p></p>\n<p><strong>Lorem Ipsum</strong> es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)</p>',
      guessPrice: '<h2>¿Qué es Lorem Ipsum?</h2>\n<p></p>\n<p><strong>Lorem Ipsum</strong> es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)</p>',
      userId: 3,
      coinId: 2,
      image: '3-perfil-3.jpeg',
      perfilLink: 'https://drive.google.com/uc?id=1XTw0rRWiXT4nxRSZ5J2pbHwTXFqlea1Z&export=download',
      entryType: 'stop',
    }, {
      title: 'El servicio gratuito de Google traduce instantáneamente palabras',
      content: '<p><span class=\"st\">El servicio gratuito de Google traduce instantáneamente palabras, frases y páginas web del español a más de 100 idiomas y viceversa.</span></p>',
      coinType: 'BTC',
      country: 'Bolivia',
      region: 'Departamento de La Paz',
      guessCoin: '<p><span class=\"st\">El servicio gratuito de Google traduce instantáneamente palabras <img src="dropbox:1-1532253786453.jpeg:" alt="" width="480" height="494" /></span></p>',
      guessPrice: '<p><span class=\"st\">El servicio gratuito de Google traduce instantáneamente palabras <img src="dropbox:1-1532253786453.jpeg:" alt="" width="480" height="494" /></span></p>',
      userId: 1,
      coinId: 1,
      image: '1-perfil-4.jpg',
      perfilLink: 'https://drive.google.com/uc?id=1KCTPy7IDefHYfz3o8YoBjQCELPgxjmyW&export=download',
      entryType: 'stop',
    }, {
      title: '¿Qué es Lorem Ipsum?',
      content: '<h2>¿Qué es Lorem Ipsum?</h2>\n<p></p>\n<p><strong>Lorem Ipsum</strong> es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)</p>',
      coinType: 'ETH',
      country: 'Peru',
      region: 'Arequipa',
      guessCoin: '<h2>¿Qué es Lorem Ipsum?</h2>\n<p></p>\n<p><strong>Lorem Ipsum</strong> es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)</p>',
      guessPrice: '<h2>¿Qué es Lorem Ipsum?</h2>\n<p></p>\n<p><strong>Lorem Ipsum</strong> es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)</p>',
      userId: 2,
      coinId: 2,
      image: '2-perfil-5.jpg',
      perfilLink: 'https://drive.google.com/uc?id=1TtKrKzk9cBfjgncFlLuKIm72wMYBDEVa&export=download',
      entryType: 'stop',
    }, {
      title: '¿Qué es Lorem Ipsum?',
      content: '<h2>¿Qué es Lorem Ipsum?</h2>\n<p></p>\n<p><strong>Lorem Ipsum</strong> es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)</p>',
      coinType: 'ETH',
      country: 'Bolivia',
      region: 'Departamento de La Paz',
      guessCoin: '<h2>¿Qué es Lorem Ipsum?</h2>\n<p></p>\n<p><strong>Lorem Ipsum</strong> es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)</p>',
      guessPrice: '<h2>¿Qué es Lorem Ipsum?</h2>\n<p></p>\n<p><strong>Lorem Ipsum</strong> es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)</p>',
      userId: 3,
      coinId: 2,
      image: '3-perfil-6.jpg',
      perfilLink: 'https://drive.google.com/uc?id=1Q41bbmkCQVSHrau6lnzA1Bd7TzgtnkPA&export=download',
      entryType: 'stop',
    }, {
      title: 'El servicio gratuito de Google traduce instantáneamente palabras',
      content: '<p><span class=\"st\">El servicio gratuito de Google traduce instantáneamente palabras, frases y páginas web del español a más de 100 idiomas y viceversa.</span></p>',
      coinType: 'BTC',
      country: 'Bolivia',
      region: 'Departamento de La Paz',
      guessCoin: '<p><span class=\"st\">El servicio gratuito de Google traduce instantáneamente palabras <img src="dropbox:1-1532253786453.jpeg:" alt="" width="480" height="494" /></span></p>',
      guessPrice: '<p><span class=\"st\">El servicio gratuito de Google traduce instantáneamente palabras <img src="dropbox:1-1532253786453.jpeg:" alt="" width="480" height="494" /></span></p>',
      userId: 1,
      coinId: 1,
      image: '1-perfil-7.jpg',
      perfilLink: 'https://drive.google.com/uc?id=1Ey0xcIRbLS5MarWzIB7WqGtADEFzBJmJ&export=download',
      entryType: 'stop',
    }, {
      title: '¿Qué es Lorem Ipsum?',
      content: '<h2>¿Qué es Lorem Ipsum?</h2>\n<p></p>\n<p><strong>Lorem Ipsum</strong> es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)</p>',
      coinType: 'ETH',
      country: 'Peru',
      region: 'Arequipa',
      guessCoin: '<h2>¿Qué es Lorem Ipsum?</h2>\n<p></p>\n<p><strong>Lorem Ipsum</strong> es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)</p>',
      guessPrice: '<h2>¿Qué es Lorem Ipsum?</h2>\n<p></p>\n<p><strong>Lorem Ipsum</strong> es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)</p>',
      userId: 2,
      coinId: 2,
      image: '2-perfil-8.jpg',
      perfilLink: 'https://drive.google.com/uc?id=1s94vvL1QmaYkbxvoyeKC9cmPtXERD60o&export=download',
      entryType: 'stop',
    }, {
      title: '¿Qué es Lorem Ipsum?',
      content: '<h2>¿Qué es Lorem Ipsum?</h2>\n<p></p>\n<p><strong>Lorem Ipsum</strong> es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)</p>',
      coinType: 'ETH',
      country: 'Bolivia',
      region: 'Departamento de La Paz',
      guessCoin: '<h2>¿Qué es Lorem Ipsum?</h2>\n<p></p>\n<p><strong>Lorem Ipsum</strong> es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)</p>',
      guessPrice: '<h2>¿Qué es Lorem Ipsum?</h2>\n<p></p>\n<p><strong>Lorem Ipsum</strong> es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)</p>',
      userId: 3,
      coinId: 2,
      image: '3-perfil-9.jpg',
      perfilLink: 'https://drive.google.com/uc?id=17vz0FFvkzEfPmHr0B-1WxPtYlrq7vLpR&export=download',
      entryType: 'stop',
    }, {
      title: 'El servicio gratuito de Google traduce instantáneamente palabras',
      content: '<p><span class=\"st\">El servicio gratuito de Google traduce instantáneamente palabras, frases y páginas web del español a más de 100 idiomas y viceversa.</span></p>',
      coinType: 'BTC',
      country: 'Bolivia',
      region: 'Departamento de La Paz',
      guessCoin: '<p><span class=\"st\">El servicio gratuito de Google traduce instantáneamente palabras, frases y páginas web del español a más de 100 idiomas y viceversa.</span></p>',
      guessPrice: '<p><span class=\"st\">El servicio gratuito de Google traduce instantáneamente palabras, frases y páginas web del español a más de 100 idiomas y viceversa.</span></p>',
      userId: 1,
      coinId: 1,
      image: '1-perfil-10.jpeg',
      perfilLink: 'https://drive.google.com/uc?id=163Obpg7xxjv58EJn-InCcdTRZCVm9T2Q&export=download',
      entryType: 'stop',
    }, {
      title: '¿Qué es Lorem Ipsum?',
      content: '<h2>¿Qué es Lorem Ipsum?</h2>\n<p></p>\n<p><strong>Lorem Ipsum</strong> es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)</p>',
      coinType: 'ETH',
      country: 'Peru',
      region: 'Arequipa',
      guessCoin: '<h2>¿Qué es Lorem Ipsum?</h2>\n<p></p>\n<p><strong>Lorem Ipsum</strong> es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)</p>',
      guessPrice: '<h2>¿Qué es Lorem Ipsum?</h2>\n<p></p>\n<p><strong>Lorem Ipsum</strong> es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)</p>',
      userId: 2,
      coinId: 2,
      image: '2-perfil-11.jpeg',
      perfilLink: 'https://drive.google.com/uc?id=1ZqaWOoUyHIj8RpDu7XkkVcqFAtX11fhJ&export=download',
      entryType: 'stop',
    }, {
      title: '¿Qué es Lorem Ipsum?',
      content: '<h2>¿Qué es Lorem Ipsum?</h2>\n<p></p>\n<p><strong>Lorem Ipsum</strong> es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)</p>',
      coinType: 'ETH',
      country: 'Bolivia',
      region: 'Departamento de La Paz',
      guessCoin: '<h2>¿Qué es Lorem Ipsum?</h2>\n<p></p>\n<p><strong>Lorem Ipsum</strong> es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)</p>',
      guessPrice: '<h2>¿Qué es Lorem Ipsum?</h2>\n<p></p>\n<p><strong>Lorem Ipsum</strong> es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)</p>',
      userId: 3,
      coinId: 2,
      image: '3-perfil-12.jpg',
      perfilLink: 'https://drive.google.com/uc?id=1c4NWOIf3bhR7jbNj3lxmOgmTFbCUE3qc&export=download',
      entryType: 'stop',
    }, {
      title: 'El servicio gratuito de Google traduce instantáneamente palabras',
      content: '<p><span class=\"st\">El servicio gratuito de Google traduce instantáneamente palabras, frases y páginas web del español a más de 100 idiomas y viceversa.</span></p>',
      coinType: 'BTC',
      country: 'Bolivia',
      region: 'Departamento de La Paz',
      guessCoin: '<p><span class=\"st\">El servicio gratuito de Google traduce instantáneamente palabras, frases y páginas web del español a más de 100 idiomas y viceversa.</span></p>',
      guessPrice: '<p><span class=\"st\">El servicio gratuito de Google traduce instantáneamente palabras, frases y páginas web del español a más de 100 idiomas y viceversa.</span></p>',
      userId: 1,
      coinId: 1,
      image: '1-perfil-13.jpg',
      perfilLink: 'https://drive.google.com/uc?id=1LGsWwryUIJqHy9ET0PRUPkEM9sP-0PND&export=download',
      entryType: 'stop',
    }, {
      title: '¿Qué es Lorem Ipsum?',
      content: '<h2>¿Qué es Lorem Ipsum?</h2>\n<p></p>\n<p><strong>Lorem Ipsum</strong> es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)</p>',
      coinType: 'ETH',
      country: 'Peru',
      region: 'Arequipa',
      guessCoin: '<h2>¿Qué es Lorem Ipsum?</h2>\n<p></p>\n<p><strong>Lorem Ipsum</strong> es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)</p>',
      guessPrice: '<h2>¿Qué es Lorem Ipsum?</h2>\n<p></p>\n<p><strong>Lorem Ipsum</strong> es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)</p>',
      userId: 2,
      coinId: 2,
      image: '2-perfil-14.jpg',
      perfilLink: 'https://drive.google.com/uc?id=1zYfgNdQae9KMv1ESHTmDkvlxZJO5Sk-V&export=download',
      entryType: 'stop',
    }, {
      title: '¿Qué es Lorem Ipsum?',
      content: '<h2>¿Qué es Lorem Ipsum?</h2>\n<p></p>\n<p><strong>Lorem Ipsum</strong> es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)</p>',
      coinType: 'ETH',
      country: 'Bolivia',
      region: 'Departamento de La Paz',
      guessCoin: '<h2>¿Qué es Lorem Ipsum?</h2>\n<p></p>\n<p><strong>Lorem Ipsum</strong> es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)</p>',
      guessPrice: '<h2>¿Qué es Lorem Ipsum?</h2>\n<p></p>\n<p><strong>Lorem Ipsum</strong> es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)</p>',
      userId: 3,
      coinId: 2,
      image: '3-perfil-15.jpg',
      perfilLink: 'https://drive.google.com/uc?id=1vCyTjSbZ5xi8Kmmsruehaml2GelzoRgi&export=download',
      entryType: 'stop',
    },
  ],
  follow: [
    {
      'userId': 1,
      'followerId': 2,
    }, {
      'userId': 1,
      'followerId': 3,
    }, {
      'userId': 1,
      'followerId': 4,
    }, {
      'userId': 2,
      'followerId': 1,
    }, {
      'userId': 2,
      'followerId': 3,
    },
  ],
  signal: [
    {
      offer: true,
      titleSignal: 'Lorem Ipsum es simplemente',
      country: 'Bolivia',
      region: 'Departamento de La Paz',
      investmentType: 'POW',
      fundamentalAnalysis: '<p>Considero, que al ser una inclusion de imagenes e iconografia tradicional, este tipo de noticias impulsa y ayuda a el interes de los usuarios, estimo un analisis tecnico de este tipo:</p>\n<p><img src=\"dropbox:7-1528146678779.png:\" alt=\"\" /></p>\n<p>Asi que esperamos una subida poderosa</p>',
      technicalAnalysis: '<p>Considero, que al ser una inclusion de imagenes e iconografia tradicional, este tipo de noticias impulsa y ayuda a el interes de los usuarios, estimo un analisis tecnico de este tipo:</p>\n<p><img src=\"dropbox:7-1528146678779.png:\" alt=\"\" /></p>\n<p>Asi que esperamos una subida poderosa</p>',
      coinType: 'BTC',
      currencyExchange: 'USDT',
      userId: 1,
      expiration: '2018-12-24',
      coinId: 1,
      image: '1-perfil-1.png',
      perfilLink: 'https://drive.google.com/uc?id=10GdSHz2D0vK-hTb_T9J9z3oU4BYg5GzZ&export=download',
      precision: 0.034,
      entryType: 'limit',
      tags: 'exito',
      created: '2018-09-15',
      lastUpdated: '2018-09-16',
    }, {
      offer: false,
      titleSignal: 'Lorem Ipsum es simplemente',
      country: 'Bolivia',
      region: 'Departamento de La Paz',
      investmentType: 'POW',
      fundamentalAnalysis: '<p>Considero, que al ser una inclusion de imagenes e iconografia tradicional, este tipo de noticias impulsa y ayuda a el interes de los usuarios, estimo un analisis tecnico de este tipo:</p>\n<p><img src=\"dropbox:7-1528146678779.png:\" alt=\"\" /></p>\n<p>Asi que esperamos una subida poderosa</p>',
      technicalAnalysis: '<p>Considero, que al ser una inclusion de imagenes e iconografia tradicional, este tipo de noticias impulsa y ayuda a el interes de los usuarios, estimo un analisis tecnico de este tipo:</p>\n<p><img src=\"dropbox:7-1528146678779.png:\" alt=\"\" /></p>\n<p>Asi que esperamos una subida poderosa</p>',
      coinType: 'ETH',
      currencyExchange: 'USDT',
      userId: 2,
      expiration: '2018-12-31',
      coinId: 2,
      image: '2-perfil-2.jpeg',
      perfilLink: 'https://drive.google.com/uc?id=1DlacPq0_h4o1RXy1AQCBe4yrHq-f1waJ&export=download',
      precision: 0.034,
      entryType: 'limit',
      tags: 'exito',
      created: '2018-09-15',
      lastUpdated: '2018-09-16',
    },
    {
      offer: false,
      titleSignal: 'Lorem Ipsum es simplemente',
      country: 'Bolivia',
      region: 'Departamento de La Paz',
      investmentType: 'POW',
      fundamentalAnalysis: '<p>Considero, que al ser una inclusion de imagenes e iconografia tradicional, este tipo de noticias impulsa y ayuda a el interes de los usuarios, estimo un analisis tecnico de este tipo:</p>\n<p><img src=\"dropbox:7-1528146678779.png:\" alt=\"\" /></p>\n<p>Asi que esperamos una subida poderosa</p>',
      technicalAnalysis: '<p>Considero, que al ser una inclusion de imagenes e iconografia tradicional, este tipo de noticias impulsa y ayuda a el interes de los usuarios, estimo un analisis tecnico de este tipo:</p>\n<p><img src=\"dropbox:7-1528146678779.png:\" alt=\"\" /></p>\n<p>Asi que esperamos una subida poderosa</p>',
      coinType: 'ETH',
      currencyExchange: 'USDT',
      userId: 3,
      expiration: '2018-12-31',
      coinId: 2,
      image: '3-perfil-3.jpeg',
      perfilLink: 'https://drive.google.com/uc?id=1POAQ5j-zVuN_4c8IUpcG4R3LYbFuPqhq&export=download',
      precision: 0.034,
      entryType: 'limit',
      tags: 'exito',
      created: '2018-09-15',
      lastUpdated: '2018-09-16',
    }, {
      offer: true,
      titleSignal: 'Lorem Ipsum es simplemente',
      country: 'Bolivia',
      region: 'Departamento de La Paz',
      investmentType: 'POW',
      fundamentalAnalysis: '<p>Considero, que al ser una inclusion de imagenes e iconografia tradicional, este tipo de noticias impulsa y ayuda a el interes de los usuarios, estimo un analisis tecnico de este tipo:</p>\n<p><img src=\"dropbox:7-1528146678779.png:\" alt=\"\" /></p>\n<p>Asi que esperamos una subida poderosa</p>',
      technicalAnalysis: '<p>Considero, que al ser una inclusion de imagenes e iconografia tradicional, este tipo de noticias impulsa y ayuda a el interes de los usuarios, estimo un analisis tecnico de este tipo:</p>\n<p><img src=\"dropbox:7-1528146678779.png:\" alt=\"\" /></p>\n<p>Asi que esperamos una subida poderosa</p>',
      coinType: 'BTC',
      currencyExchange: 'USDT',
      userId: 1,
      expiration: '2018-12-24',
      coinId: 1,
      image: '1-perfil-4.jpg',
      perfilLink: 'https://drive.google.com/uc?id=1jce3-peMZYG1jhzEUih_0YhvjqIJYVB0&export=download',
      precision: 0.034,
      entryType: 'limit',
      tags: 'exito',
      created: '2018-09-15',
      lastUpdated: '2018-09-16',
    }, {
      offer: false,
      titleSignal: 'Lorem Ipsum es simplemente',
      country: 'Bolivia',
      region: 'Departamento de La Paz',
      investmentType: 'POW',
      fundamentalAnalysis: '<p>Considero, que al ser una inclusion de imagenes e iconografia tradicional, este tipo de noticias impulsa y ayuda a el interes de los usuarios, estimo un analisis tecnico de este tipo:</p>\n<p><img src=\"dropbox:7-1528146678779.png:\" alt=\"\" /></p>\n<p>Asi que esperamos una subida poderosa</p>',
      technicalAnalysis: '<p>Considero, que al ser una inclusion de imagenes e iconografia tradicional, este tipo de noticias impulsa y ayuda a el interes de los usuarios, estimo un analisis tecnico de este tipo:</p>\n<p><img src=\"dropbox:7-1528146678779.png:\" alt=\"\" /></p>\n<p>Asi que esperamos una subida poderosa</p>',
      coinType: 'ETH',
      currencyExchange: 'USDT',
      userId: 2,
      expiration: '2018-12-31',
      coinId: 2,
      image: '2-perfil-5.jpg',
      perfilLink: 'https://drive.google.com/uc?id=1rI3VqTG5EbOOjujVe6MiBiyNrTAPHSbJ&export=download',
      precision: 0.034,
      entryType: 'limit',
      tags: 'exito',
      created: '2018-09-15',
      lastUpdated: '2018-09-16',
    },
    {
      offer: false,
      titleSignal: 'Lorem Ipsum es simplemente',
      country: 'Bolivia',
      region: 'Departamento de La Paz',
      investmentType: 'POW',
      fundamentalAnalysis: '<p>Considero, que al ser una inclusion de imagenes e iconografia tradicional, este tipo de noticias impulsa y ayuda a el interes de los usuarios, estimo un analisis tecnico de este tipo:</p>\n<p><img src=\"dropbox:7-1528146678779.png:\" alt=\"\" /></p>\n<p>Asi que esperamos una subida poderosa</p>',
      technicalAnalysis: '<p>Considero, que al ser una inclusion de imagenes e iconografia tradicional, este tipo de noticias impulsa y ayuda a el interes de los usuarios, estimo un analisis tecnico de este tipo:</p>\n<p><img src=\"dropbox:7-1528146678779.png:\" alt=\"\" /></p>\n<p>Asi que esperamos una subida poderosa</p>',
      coinType: 'ETH',
      currencyExchange: 'USDT',
      userId: 3,
      expiration: '2018-12-31',
      coinId: 2,
      image: '3-perfil-6.jpg',
      perfilLink: 'https://drive.google.com/uc?id=12KBuCBeenz7HuVAaZ2M7wJqRQX_DmaG_&export=download',
      precision: 0.034,
      entryType: 'limit',
      tags: 'exito',
      created: '2018-09-15',
      lastUpdated: '2018-09-16',
    }, {
      offer: true,
      titleSignal: 'Lorem Ipsum es simplemente',
      country: 'Bolivia',
      region: 'Departamento de La Paz',
      investmentType: 'POW',
      fundamentalAnalysis: '<p>Considero, que al ser una inclusion de imagenes e iconografia tradicional, este tipo de noticias impulsa y ayuda a el interes de los usuarios, estimo un analisis tecnico de este tipo:</p>\n<p><img src=\"dropbox:7-1528146678779.png:\" alt=\"\" /></p>\n<p>Asi que esperamos una subida poderosa</p>',
      technicalAnalysis: '<p>Considero, que al ser una inclusion de imagenes e iconografia tradicional, este tipo de noticias impulsa y ayuda a el interes de los usuarios, estimo un analisis tecnico de este tipo:</p>\n<p><img src=\"dropbox:7-1528146678779.png:\" alt=\"\" /></p>\n<p>Asi que esperamos una subida poderosa</p>',
      coinType: 'BTC',
      currencyExchange: 'USDT',
      userId: 1,
      expiration: '2018-12-24',
      coinId: 1,
      image: '1-perfil-7.jpg',
      perfilLink: 'https://drive.google.com/uc?id=1qQKJvCFapwSnFNVPqjn7OYDW3k3Sk9QG&export=download',
      precision: 0.034,
      entryType: 'limit',
      tags: 'exito',
      created: '2018-09-15',
      lastUpdated: '2018-09-16',
    }, {
      offer: false,
      titleSignal: 'Lorem Ipsum es simplemente',
      country: 'Bolivia',
      region: 'Departamento de La Paz',
      investmentType: 'POW',
      fundamentalAnalysis: '<p>Considero, que al ser una inclusion de imagenes e iconografia tradicional, este tipo de noticias impulsa y ayuda a el interes de los usuarios, estimo un analisis tecnico de este tipo:</p>\n<p><img src=\"dropbox:7-1528146678779.png:\" alt=\"\" /></p>\n<p>Asi que esperamos una subida poderosa</p>',
      technicalAnalysis: '<p>Considero, que al ser una inclusion de imagenes e iconografia tradicional, este tipo de noticias impulsa y ayuda a el interes de los usuarios, estimo un analisis tecnico de este tipo:</p>\n<p><img src=\"dropbox:7-1528146678779.png:\" alt=\"\" /></p>\n<p>Asi que esperamos una subida poderosa</p>',
      coinType: 'ETH',
      currencyExchange: 'USDT',
      userId: 2,
      expiration: '2018-12-31',
      coinId: 2,
      image: '2-perfil-8.jpg',
      perfilLink: 'https://drive.google.com/uc?id=1Tj0U1w1Hpb2-KBfu-EfGif9M8Z45vu3Y&export=download',
      precision: 0.034,
      entryType: 'limit',
      tags: 'exito',
      created: '2018-09-15',
      lastUpdated: '2018-09-16',
    },
    {
      offer: false,
      titleSignal: 'Lorem Ipsum es simplemente',
      country: 'Bolivia',
      region: 'Departamento de La Paz',
      investmentType: 'POW',
      fundamentalAnalysis: '<p>Considero, que al ser una inclusion de imagenes e iconografia tradicional, este tipo de noticias impulsa y ayuda a el interes de los usuarios, estimo un analisis tecnico de este tipo:</p>\n<p><img src=\"dropbox:7-1528146678779.png:\" alt=\"\" /></p>\n<p>Asi que esperamos una subida poderosa</p>',
      technicalAnalysis: '<p>Considero, que al ser una inclusion de imagenes e iconografia tradicional, este tipo de noticias impulsa y ayuda a el interes de los usuarios, estimo un analisis tecnico de este tipo:</p>\n<p><img src=\"dropbox:7-1528146678779.png:\" alt=\"\" /></p>\n<p>Asi que esperamos una subida poderosa</p>',
      coinType: 'ETH',
      currencyExchange: 'USDT',
      userId: 3,
      expiration: '2018-12-31',
      coinId: 2,
      image: '3-perfil-9.jpg',
      perfilLink: 'https://drive.google.com/uc?id=1zQo5akaSNpxRGMZZheiB20dLrpdhU4MS&export=download',
      precision: 0.034,
      entryType: 'limit',
      tags: 'exito',
      created: '2018-09-15',
      lastUpdated: '2018-09-16',
    }, {
      offer: true,
      titleSignal: 'Lorem Ipsum es simplemente',
      country: 'Bolivia',
      region: 'Departamento de La Paz',
      investmentType: 'POW',
      fundamentalAnalysis: '<p>Considero, que al ser una inclusion de imagenes e iconografia tradicional, este tipo de noticias impulsa y ayuda a el interes de los usuarios, estimo un analisis tecnico de este tipo:</p>\n<p><img src=\"dropbox:7-1528146678779.png:\" alt=\"\" /></p>\n<p>Asi que esperamos una subida poderosa</p>',
      technicalAnalysis: '<p>Considero, que al ser una inclusion de imagenes e iconografia tradicional, este tipo de noticias impulsa y ayuda a el interes de los usuarios, estimo un analisis tecnico de este tipo:</p>\n<p><img src=\"dropbox:7-1528146678779.png:\" alt=\"\" /></p>\n<p>Asi que esperamos una subida poderosa</p>',
      coinType: 'BTC',
      currencyExchange: 'USDT',
      userId: 1,
      expiration: '2018-12-24',
      coinId: 1,
      image: '1-perfil-10.jpeg',
      perfilLink: 'https://drive.google.com/uc?id=1BvV-EWS5DjwcTd6l02yqXncZxxRWIUTb&export=download',
      precision: 0.034,
      entryType: 'limit',
      tags: 'exito',
      created: '2018-09-15',
      lastUpdated: '2018-09-16',
    }, {
      offer: false,
      titleSignal: 'Lorem Ipsum es simplemente',
      country: 'Bolivia',
      region: 'Departamento de La Paz',
      investmentType: 'POW',
      fundamentalAnalysis: '<p>Considero, que al ser una inclusion de imagenes e iconografia tradicional, este tipo de noticias impulsa y ayuda a el interes de los usuarios, estimo un analisis tecnico de este tipo:</p>\n<p><img src=\"dropbox:7-1528146678779.png:\" alt=\"\" /></p>\n<p>Asi que esperamos una subida poderosa</p>',
      technicalAnalysis: '<p>Considero, que al ser una inclusion de imagenes e iconografia tradicional, este tipo de noticias impulsa y ayuda a el interes de los usuarios, estimo un analisis tecnico de este tipo:</p>\n<p><img src=\"dropbox:7-1528146678779.png:\" alt=\"\" /></p>\n<p>Asi que esperamos una subida poderosa</p>',
      coinType: 'ETH',
      currencyExchange: 'USDT',
      userId: 2,
      expiration: '2018-12-31',
      coinId: 2,
      image: '2-perfil-11.jpeg',
      perfilLink: 'https://drive.google.com/uc?id=19OZyL5ZX9RB-fIHCPbSBt_Kg9pW1BVZW&export=download',
      precision: 0.034,
      entryType: 'limit',
      tags: 'exito',
      created: '2018-09-15',
      lastUpdated: '2018-09-16',
    },
    {
      offer: false,
      titleSignal: 'Lorem Ipsum es simplemente',
      country: 'Bolivia',
      region: 'Departamento de La Paz',
      investmentType: 'POW',
      fundamentalAnalysis: '<p>Considero, que al ser una inclusion de imagenes e iconografia tradicional, este tipo de noticias impulsa y ayuda a el interes de los usuarios, estimo un analisis tecnico de este tipo:</p>\n<p><img src=\"dropbox:7-1528146678779.png:\" alt=\"\" /></p>\n<p>Asi que esperamos una subida poderosa</p>',
      technicalAnalysis: '<p>Considero, que al ser una inclusion de imagenes e iconografia tradicional, este tipo de noticias impulsa y ayuda a el interes de los usuarios, estimo un analisis tecnico de este tipo:</p>\n<p><img src=\"dropbox:7-1528146678779.png:\" alt=\"\" /></p>\n<p>Asi que esperamos una subida poderosa</p>',
      coinType: 'ETH',
      currencyExchange: 'USDT',
      userId: 3,
      expiration: '2018-12-31',
      coinId: 2,
      image: '3-perfil-12.jpg',
      perfilLink: 'https://drive.google.com/uc?id=1na2Gcv0acVQrMk7QpCbRgAQONcP_fOCd&export=download',
      precision: 0.034,
      entryType: 'limit',
      tags: 'exito',
      created: '2018-09-15',
      lastUpdated: '2018-09-16',
    }, {
      offer: true,
      titleSignal: 'Lorem Ipsum es simplemente',
      country: 'Bolivia',
      region: 'Departamento de La Paz',
      investmentType: 'POW',
      fundamentalAnalysis: '<p>Considero, que al ser una inclusion de imagenes e iconografia tradicional, este tipo de noticias impulsa y ayuda a el interes de los usuarios, estimo un analisis tecnico de este tipo:</p>\n<p><img src=\"dropbox:7-1528146678779.png:\" alt=\"\" /></p>\n<p>Asi que esperamos una subida poderosa</p>',
      technicalAnalysis: '<p>Considero, que al ser una inclusion de imagenes e iconografia tradicional, este tipo de noticias impulsa y ayuda a el interes de los usuarios, estimo un analisis tecnico de este tipo:</p>\n<p><img src=\"dropbox:7-1528146678779.png:\" alt=\"\" /></p>\n<p>Asi que esperamos una subida poderosa</p>',
      coinType: 'BTC',
      currencyExchange: 'USDT',
      userId: 1,
      expiration: '2018-12-24',
      coinId: 1,
      image: '1-perfil-13.jpg',
      perfilLink: 'https://drive.google.com/uc?id=1UU8gkTR0Ek9QoN7QRBesxd6JkP0vp4Hr&export=download',
      precision: 0.034,
      entryType: 'limit',
      tags: 'exito',
      created: '2018-09-15',
      lastUpdated: '2018-09-16',
    }, {
      offer: false,
      titleSignal: 'Lorem Ipsum es simplemente',
      country: 'Bolivia',
      region: 'Departamento de La Paz',
      investmentType: 'POW',
      fundamentalAnalysis: '<p>Considero, que al ser una inclusion de imagenes e iconografia tradicional, este tipo de noticias impulsa y ayuda a el interes de los usuarios, estimo un analisis tecnico de este tipo:</p>\n<p><img src=\"dropbox:7-1528146678779.png:\" alt=\"\" /></p>\n<p>Asi que esperamos una subida poderosa</p>',
      technicalAnalysis: '<p>Considero, que al ser una inclusion de imagenes e iconografia tradicional, este tipo de noticias impulsa y ayuda a el interes de los usuarios, estimo un analisis tecnico de este tipo:</p>\n<p><img src=\"dropbox:7-1528146678779.png:\" alt=\"\" /></p>\n<p>Asi que esperamos una subida poderosa</p>',
      coinType: 'ETH',
      currencyExchange: 'USDT',
      userId: 2,
      expiration: '2018-12-31',
      coinId: 2,
      image: '2-perfil-14.jpg',
      perfilLink: 'https://drive.google.com/uc?id=11WMnyrTSwNIQD2MYpsLkuvsxCMb6GUlS&export=download',
      precision: 0.034,
      entryType: 'limit',
      tags: 'exito',
      created: '2018-09-15',
      lastUpdated: '2018-09-16',
    },
    {
      offer: false,
      titleSignal: 'Lorem Ipsum es simplemente',
      country: 'Bolivia',
      region: 'Departamento de La Paz',
      investmentType: 'POW',
      fundamentalAnalysis: '<p>Considero, que al ser una inclusion de imagenes e iconografia tradicional, este tipo de noticias impulsa y ayuda a el interes de los usuarios, estimo un analisis tecnico de este tipo:</p>\n<p><img src=\"dropbox:7-1528146678779.png:\" alt=\"\" /></p>\n<p>Asi que esperamos una subida poderosa</p>',
      technicalAnalysis: '<p>Considero, que al ser una inclusion de imagenes e iconografia tradicional, este tipo de noticias impulsa y ayuda a el interes de los usuarios, estimo un analisis tecnico de este tipo:</p>\n<p><img src=\"dropbox:7-1528146678779.png:\" alt=\"\" /></p>\n<p>Asi que esperamos una subida poderosa</p>',
      coinType: 'ETH',
      currencyExchange: 'USDT',
      userId: 3,
      expiration: '2018-12-31',
      coinId: 2,
      image: '3-perfil-15.jpg',
      perfilLink: 'https://drive.google.com/uc?id=1oxBcQAqilmUflPHU8pzkIX0qqOXKziqx&export=download',
      precision: 0.034,
      entryType: 'limit',
      tags: 'exito',
      created: '2018-09-15',
      lastUpdated: '2018-09-16',
    },
  ],
  point: [
    {
      'name': 'entrada',
    }, {
      'name': 'salida',
    }, {
      'name': 'stoploss',
    },
  ],
  transaction: [],
  payment: [],
  request: [],
  complaint: [{
    'type': 'el contenido es falso',
    'comment': '\n\nLorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la i',
    'modelId': 5,
    'modelName': 'news',
    'created': '2018-07-23T22:37:45.000Z',
    'userId': 1,
    'denouncedId': 2,
  },
  {
    'type': 'el contenido es inapropiado',
    'comment': 'ste tipo de noticias impulsa y ayuda a el interes de los usuarios, estimo un analisis tecnico de este tipo:',
    'modelId': 4,
    'modelName': 'signal',
    'created': '2018-07-26T21:16:46.000Z',
    'userId': 2,
    'denouncedId': 1,
  }],
  UserIdentity: [],
  UserCredential: [],
  notification: [],
  exchange: [{
    name: 'Binance',
    description: 'Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño ',
  }, {
    name: 'Bitfinex',
    description: 'Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño ',
  }, {
    name: 'Okex',
    description: 'Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño ',
  }, {
    name: 'Bittrex',
    description: 'Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño ',
  }, {
    name: 'Poloniex',
    description: 'Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño ',
  }, {
    name: 'Hitbtc',
    description: 'Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño ',
  }],
  position: [
    {
      value: 8830.2500000000,
      capitalPercentage: 15,
      signalId: 1,
      pointId: 1,
    }, {
      value: 8324.50,
      capitalPercentage: 40,
      signalId: 1,
      pointId: 2,
    }, {
      value: 8322.55,
      capitalPercentage: 20,
      signalId: 1,
      pointId: 3,
    }, {
      value: 8830.25,
      capitalPercentage: 15,
      signalId: 2,
      pointId: 1,
    }, {
      value: 8324.50,
      capitalPercentage: 40,
      signalId: 2,
      pointId: 2,
    }, {
      value: 8322.55,
      capitalPercentage: 20,
      signalId: 2,
      pointId: 3,
    }, {
      value: 8830.25,
      capitalPercentage: 15,
      signalId: 3,
      pointId: 1,
    }, {
      value: 8324.50,
      capitalPercentage: 40,
      signalId: 3,
      pointId: 2,
    }, {
      value: 8322.55,
      capitalPercentage: 20,
      signalId: 3,
      pointId: 3,
    }, {
      value: 8830.25,
      capitalPercentage: 15,
      signalId: 4,
      pointId: 1,
    }, {
      value: 8324.50,
      capitalPercentage: 40,
      signalId: 4,
      pointId: 2,
    }, {
      value: 8322.55,
      capitalPercentage: 20,
      signalId: 4,
      pointId: 3,
    }, {
      value: 8830.25,
      capitalPercentage: 15,
      signalId: 5,
      pointId: 1,
    }, {
      value: 8324.50,
      capitalPercentage: 40,
      signalId: 5,
      pointId: 2,
    }, {
      value: 8322.55,
      capitalPercentage: 20,
      signalId: 5,
      pointId: 3,
    }, {
      value: 8830.25,
      capitalPercentage: 15,
      signalId: 6,
      pointId: 1,
    }, {
      value: 8324.50,
      capitalPercentage: 40,
      signalId: 6,
      pointId: 2,
    }, {
      value: 8322.55,
      capitalPercentage: 20,
      signalId: 6,
      pointId: 3,
    }, {
      'value': 8830.25,
      'capitalPercentage': 15,
      'signalId': 7,
      'pointId': 1,
    }, {
      'value': 8324.50,
      'capitalPercentage': 40,
      'signalId': 7,
      'pointId': 2,
    }, {
      'value': 8322.55,
      'capitalPercentage': 20,
      'signalId': 7,
      'pointId': 3,
    }, {
      'value': 8830.25,
      'capitalPercentage': 15,
      'signalId': 8,
      'pointId': 1,
    }, {
      'value': 8324.50,
      'capitalPercentage': 40,
      'signalId': 8,
      'pointId': 2,
    }, {
      'value': 8322.55,
      'capitalPercentage': 20,
      'signalId': 8,
      'pointId': 3,
    }, {
      'value': 8830.25,
      'capitalPercentage': 15,
      'signalId': 9,
      'pointId': 1,
    }, {
      'value': 8324.50,
      'capitalPercentage': 40,
      'signalId': 9,
      'pointId': 2,
    }, {
      'value': 8322.55,
      'capitalPercentage': 20,
      'signalId': 9,
      'pointId': 3,
    }, {
      'value': 8830.25,
      'capitalPercentage': 15,
      'signalId': 10,
      'pointId': 1,
    }, {
      'value': 8324.50,
      'capitalPercentage': 40,
      'signalId': 10,
      'pointId': 2,
    }, {
      'value': 8322.55,
      'capitalPercentage': 20,
      'signalId': 10,
      'pointId': 3,
    }, {
      'value': 8830.25,
      'capitalPercentage': 15,
      'signalId': 11,
      'pointId': 1,
    }, {
      'value': 8324.50,
      'capitalPercentage': 40,
      'signalId': 11,
      'pointId': 2,
    }, {
      'value': 8322.55,
      'capitalPercentage': 20,
      'signalId': 11,
      'pointId': 3,
    }, {
      'value': 8830.25,
      'capitalPercentage': 15,
      'signalId': 12,
      'pointId': 1,
    }, {
      'value': 8324.50,
      'capitalPercentage': 40,
      'signalId': 12,
      'pointId': 2,
    }, {
      'value': 8322.55,
      'capitalPercentage': 20,
      'signalId': 12,
      'pointId': 3,
    }, {
      'value': 8830.25,
      'capitalPercentage': 15,
      'signalId': 13,
      'pointId': 1,
    }, {
      'value': 8324.50,
      'capitalPercentage': 40,
      'signalId': 13,
      'pointId': 2,
    }, {
      'value': 8322.55,
      'capitalPercentage': 20,
      'signalId': 13,
      'pointId': 3,
    }, {
      'value': 8830.25,
      'capitalPercentage': 15,
      'signalId': 14,
      'pointId': 1,
    }, {
      'value': 8324.50,
      'capitalPercentage': 40,
      'signalId': 14,
      'pointId': 2,
    }, {
      'value': 8322.55,
      'capitalPercentage': 20,
      'signalId': 14,
      'pointId': 3,
    }, {
      'value': 8830.25,
      'capitalPercentage': 15,
      'signalId': 15,
      'pointId': 1,
    }, {
      'value': 8324.50,
      'capitalPercentage': 40,
      'signalId': 15,
      'pointId': 2,
    }, {
      'value': 8322.55,
      'capitalPercentage': 20,
      'signalId': 15,
      'pointId': 3,
    },
  ],
  transaction: [],
  request: [],
  complaint: [{
    'type': '1',
    'comment': '\n\nLorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la i',
    'modelId': 5,
    'modelName': 'news',
    'created': '2018-07-23T22:37:45.000Z',
    'userId': 1,
    'denouncedId': 2,
  },
  {
    'type': '0',
    'comment': 'ste tipo de noticias impulsa y ayuda a el interes de los usuarios, estimo un analisis tecnico de este tipo:',
    'modelId': 4,
    'modelName': 'signal',
    'created': '2018-07-26T21:16:46.000Z',
    'userId': 2,
    'denouncedId': 1,
  }],
  UserIdentity: [],
  UserCredential: [],
  notification: [],
  exchange: [{
    name: 'Binance',
    description: 'Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño ',
  }, {
    name: 'Bitfinex',
    description: 'Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño ',
  }, {
    name: 'Okex',
    description: 'Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño ',
  }, {
    name: 'Bittrex',
    description: 'Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño ',
  }, {
    name: 'Poloniex',
    description: 'Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño ',
  }, {
    name: 'Hitbtc',
    description: 'Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño ',
  }],
  user: [
    {
      'firstName': 'Tony',
      'lastName': 'Stark',
      'username': 'ironman',
      'password': 'ironman',
      'emailVerified': true,
      'email': 'ironman@test.com',
      'fame': [{
        'value': 84,
        'symbol': 'BTC',
      }],
      'precision': [{
        valor: 30,
        nropost: 5,
      }],
      'image': 'ironman.jpg',
      'perfilLink': 'https://drive.google.com/uc?id=18lxxWQjZ34qEfGG5G_48-bGjSwRkIyQs&export=download',
      'country': 'Bolivia',
      'region': 'Departamento de La Paz',
      'realm': 'admin',
    }, {
      'firstName': 'Peter',
      'lastName': 'Parker',
      'username': 'spiderman',
      'password': 'spiderman',
      'emailVerified': true,
      'email': 'spiderman@test.com',
      'fame': [{
        'value': 100,
        'symbol': 'XRP',
      }],
      'precision': [{
        valor: 50,
        nropost: 4,
      }],
      'image': 'spiderman.jpg',
      'perfilLink': 'https://drive.google.com/uc?id=1C0lchu6d7jsxybFk9AaYU6LWwtzbK2PH&export=download',
      'country': 'Bolivia',
      'region': 'Departamento de La Paz',
    }, {
      'firstName': 'Bruce',
      'lastName': 'Banner',
      'username': 'hulk',
      'password': 'hulk',
      'emailVerified': true,
      'email': 'hulk@test.com',
      'fame': [{
        'value': 2,
        'symbol': 'ETH',
      }],
      'precision': [{
        valor: 50,
        nropost: 6,
      }],
      'image': 'hulk.jpg',
      'perfilLink': 'https://drive.google.com/uc?id=1uZ-kPW22-JvIyjMowI4Lm21vBWoq7s9q&export=download',
      'country': 'Peru',
      'region': 'Lima',
    }, {
      'firstName': 'Thor',
      'lastName': 'Skgar',
      'username': 'thor',
      'password': 'thor',
      'emailVerified': true,
      'email': 'thor@test.com',
      'fame': [{
        'value': 100,
        'symbol': 'BCH',
      }],
      'precision': [{
        valor: 25,
        nropost: 2,
      }],
      'image': 'thor.png',
      'perfilLink': 'https://drive.google.com/uc?id=1zU58FDSn_-n5URiiaXVuKlQ6hMMrmTg7&export=download',
      'country': 'Argentina',
      'region': 'Buenos Asnos',
    },
  ],
  certification: [],
  certificate: [],
  award: [],
  UserMeta: [],
};
