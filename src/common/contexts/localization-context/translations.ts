export enum Language {
  PT_BR = 'pt-br',
  EN_US = 'en-us',
}

export type TranslationsObject = Record<Language, Record<string, string>>

export const translations: TranslationsObject = {
  [Language.PT_BR]: {
    aboutMe: 'Sobre mim',
    education: 'Formação',
    skills: 'Conhecimentos',
    experience: 'Experiência',
    projects: 'Projetos',
    contact: 'Contato',

    jobTitle: 'Engenheiro de Software',

    aboutMeText:
      'Meu nome é Bruno Luvizotto. Sou programador, formado em engenharia elétrica pela UNICAMP e estou sempre em busca de aprimorar meus conhecimentos. Tenho  com programação em JavaScript / Typescript (React, React-Native e Node), Python, C e C++ (Qt). Também já trabalhei com desenvolvimento de aplicativos mobile.',
    profilePictureAlt: 'Foto do Bruno com um farol ao fundo, em uma praia de pedras com uma vista do mar',
    contactButton: 'Contato',

    unicampLogoAltText: 'Logotipo da Unicamp',
    inpgLogoAltText: 'Logotipo do INPG',
    teraLogoAltText: 'Logotipo da Tera',
    embeddedLabworksLogoAltText: 'Logotipo da Embedded Labworks',
    degree: 'Graduação: Engenharia Elétrica na UNICAMP',
    businessPostGratuation: 'Pós-graduação: Gestão Estratégica de Negócios no INPG',
    machineLearningBootcamp: 'Bootcamp de Machine Learning na Tera',
    linux: 'Curso de Linux Device Drivers na Embedded Labworks',

    programming: 'Programação',
    programmingSubtitle: 'JS/TS, Python, C e C++',
    programmingThumbnailAltText: 'Imagem da tela de um computador com código de programação',
    programmingDescription:
      'Tenho experiência em programação em Javascript / Typescript, Python, C e C++. Já desenvolvi software web - backend e frontend - utilizando ferramentas de computação em nuvem (GCP e AWS), firmware bare-metal e software para sistemas embarcados, além de scripts para automação de tarefas sempre que necessário.',
    projectsSubtitle: 'Metodologias Ágeis / Scrum',
    projectsThumbnailAltText: 'Imagem que representa o desenvolvimento ágil com Scrum',
    projectsDescription:
      'Após trabalhar por algum tempo com metodologias ágeis, passei a considerá-las muito importantes para o planejamento e gerenciamento dos times. Sistemas de tickets como Scrum e Kanban ajudam a manter o controle. Integração contínua (continuous integration - CI) também agiliza bastante a entrega de um excelente produto.',
    uiFrontend: 'UI / Frontend',
    uiFrontendSubtitle: 'React, Vue e Qt/Qml',
    uiFrontendThumbnailAltText: 'Imagem que mostra uma interface gráfica de front end',
    uiFrontendDescription:
      'Desenvolvimento de interfaces do usuário bonitas, responsivas e com boa usabilidade. Gosto bastante de front-end web (HTML, CSS, React e Vue - este site foi feito usando React para o front-end e Node.js para o back-end). Com Qt, quase sempre trabalho com Qml, que permite criar interfaces bonitas de maneira simples.',
    versioning: 'Versionamento',
    versioningSubtitle: 'Git, Mercurial e SVN',
    versioningThumbnailAltText: 'Imagem que representa sistemas de versionamento de código',
    versioningDescription:
      'Nos diversos projetos onde trabalhei, já utilizei estas três ferramentas de versionamento: Git (Github, Gitlab, BitBucket), Mercurial e SVN. As três cumprem seu papel de versionar, mas a minha preferência, pelas ferramentas que oferece, é o Git.',
    iot: 'Dispositivos IoT',
    iotSubtitle: 'Comunicação Celular',
    iotThumbnailAltText: 'Imagem semelhante a uma antena com diversos dispositivos conectados',
    iotDescription:
      'A internet das coisas é o futuro dos dispositivos inteligentes. Já trabalhei em projetos com dispositivos conectados via rede celular 2G (GSM), 3G (UMTS) e 4G (LTE) e via comunicação satelital (aplicações mais sensíveis) trocando mensagens com protocolos definidos para os servidores da aplicação.',
    personalSkills: 'Habilidades Pessoais',
    personalSkillsSubtitle: 'Comunicação / Trabalho em equipe',
    personalSkillsThumbnailAltText: 'Bandeira dos Estados Unidos em formato de balão de fala',
    personalSkillsDescription:
      'Além de saber e gostar de trabalhar em equipe, a boa comunicação é outra qualidade. Sou capaz de me expressar bem e me fazer entendido mesmo quando explico algo técnico a uma pessoa não-técnica. Além disso, após dois anos trabalhando nos EUA, também compreendo e me expresso com facilidade em inglês.',

    experiencesSectionTitle: 'Últimas Experiências Profissionais',
    leveregeCompanyName: 'Leverege (EUA)',
    leveregeJobTitle: 'Engenheiro de Software',
    leveregeJobDate: 'Desde 02/2022',
    leveregeSkill1: 'Software Fullstackyy (JS/TS)',
    leveregeSkill2: 'Computação em nuvem (GCP / AWS)',
    leveregeSkill3: 'Postgres, Firebase e ElasticSearch',
    livupJobTitle: 'Engenheiro de Software',
    livupJobDate: 'De 10/2019 a 02/2022',
    livupSkill1: 'Software (JS/TS, Python)',
    livupSkill2: 'Computação em nuvem (GCP / AWS)',
    livupSkill3: 'Dados: Mongo, Redis e Bigquery',
    omnilinkJobTitle: 'Dev. de Firmware Sr.',
    omnilinkJobDate: 'De 07/2018 a 08/2019',
    omnilinkSkill1: 'Firmware em C / C++',
    omnilinkSkill2: 'Scripts em Python',
    omnilinkSkill3: 'Software em JS / TS e C++ (Qt)',
    bnlCompanyName: 'BNL (EUA)',
    bnlJobTitle: 'Engenheiro de Controle',
    bnlJobDate: 'De 03/2016 a 02/2018',
    bnlSkill1: 'Drivers C / C++',
    bnlSkill2: 'Software em Python com GUI',
    bnlSkill3: 'Processamento distr. de dados',

    personalProjects: 'Projetos Pessoais',
    augustoNeto: 'Website do advogado Augusto Neto',
    augustoNetoDescription: 'Site profissional do advogado Augusto Neto',
    canaClipping: 'Cana Clipping',
    canaClippingDescription:
      'Website do projeto Cana Clipping - um clipping de notícias sobre o Setor Sucroenergético, Agronegócio, Inovação & Tecnologia e ESG',
    reactSlideFadeIn: 'react-slide-fade-in',
    reactSlideFadeInDescription:
      'Pacote publicado no npmjs que adiciona um efeito de slide e fade in em componentes React',
    gotOnFloppy: 'Game of Thrones nos Disquetes',
    gotOnFloppyDescription:
      'Abertura de Game of Thrones tocada com a vibração dos motores de passo dos drivers de disquete.',
    battleCity: 'Battle City 1985 em Qt (C++ / QML)',
    battleCityDescription: 'Implementação do jogo "Battle City 1985" em Qt (C++ / Qml).',
    priWebsite: 'Website da Priscilla Luvizotto',
    priWebsiteDescription: 'Site profissional da dermatologista Priscilla Luvizotto',
    luvimedical: 'Luvimedical',
    luvimedicalDescription: 'Sistema web de gerenciamento de clínicas médicas',

    linkedinUrl: 'https://www.linkedin.com/in/bruno-valdrighi-luvizotto/',

    allRightsReserved: 'Todos os direitos reservados',
  },
  [Language.EN_US]: {
    aboutMe: 'About me',
    education: 'Education',
    skills: 'Skills',
    experience: 'Experience',
    projects: 'Projects',
    contact: 'Contact',

    jobTitle: 'Software Engineer',

    aboutMeText:
      "My name is Bruno Luvizotto. I'm a software engineer - with a bachelor`s degree in electrical engineering from UNICAMP - who always tries to learn something new. I have experience in developing software in Javascript / Typescript (React, React-Native and Node), Python, C and C++ (Qt). I also have experience developing mobile apps.",
    profilePictureAlt: "Bruno's picture with a lighthouse in the back, in a rocky beach with a view of the sea",
    contactButton: 'Contact',

    unicampLogoAltText: 'State University of Campinas logo',
    inpgLogoAltText: 'INPG logo',
    teraLogoAltText: 'Tera logo',
    embeddedLabworksLogoAltText: 'Embedded Labworks logo',
    degree: 'Electrical Engineering degree at UNICAMP',
    businessPostGratuation: 'Strategic Business Management specialization at INPG',
    machineLearningBootcamp: 'Machine Learning Bootcamp at Tera',
    linux: 'Linux Device Drivers class at Embedded Labworks',

    programming: 'Programming',
    programmingSubtitle: 'JS/TS, Python, C and C++',
    programmingThumbnailAltText: 'Image of the screen of a computer displaying programming code',
    programmingDescription:
      "I have experience in developing software Javascript / Typescript, Python, C and C++. I've developed software for web systems - backend and frontend - using cloud computing tools (GCP and AWS), bare-metal firmware and software for embedded systems, in addition to scripts for automation.",
    projectsSubtitle: 'Agile Methodologies / Scrum',
    projectsThumbnailAltText: 'Image that represents the agile development with Scrum',
    projectsDescription:
      'After working for some time with agile methodologies, I started considering them very important to planning and managing development teams. Systems like Scrum and Kanban help to keep track of the project. Continuous Integration (CI) also makes the delivery of a great product faster.',
    uiFrontend: 'UI / Frontend',
    uiFrontendSubtitle: 'React, Vue and Qt/Qml',
    uiFrontendThumbnailAltText: 'Image that shows a front end graphical user interface',
    uiFrontendDescription:
      'Development of beautiful and responsive user interfaces. I really like web front end (HTML, CSS, React and Vue - this website uses React for the front end). With Qt, I almost always work with Qml, a powerful tool to create beautiful interfaces very easily.',
    versioning: 'Versioning',
    versioningSubtitle: 'Git, Mercurial and SVN',
    versioningThumbnailAltText: 'Image that represents code versioning systems',
    versioningDescription:
      'In many projects I used these three versioning tools: Git (Github, Gitlab, Bitbucket), Mercurial and SVN. All three handle the versioning, but my favorite one, for the tools it offers, is Git.',
    iot: 'IoT Devices',
    iotSubtitle: 'Mobile Communication',
    iotThumbnailAltText: 'Image that is similar to an antenna with multiple devices connected',
    iotDescription:
      "The internet of things is the future of smart devices. I've worked on projects to develop devices connected through 2G (GSM), 3G (UMTS), 4G (LTE) and satellite (for sensitive applications) to communicate with the servers using specific protocols.",
    personalSkills: 'Personal Skills',
    personalSkillsSubtitle: 'Communication / Team work',
    personalSkillsThumbnailAltText: 'Bandeira dos Estados Unidos em formato de balão de fala',
    personalSkillsDescription:
      "Besides enjoying to work in team, good communication is another positive skill. I'm able to express myself well and to explain something technical to someone non-technical. Also, after two years working in the USA, I can communicate very well in English.",

    experiencesSectionTitle: 'Most Recent Work Experiences',
    leveregeCompanyName: 'Leverege (USA)',
    leveregeJobTitle: 'Software Engineer',
    leveregeJobDate: 'Since 02/2022',
    leveregeSkill1: 'Fullstack Software (JS/TS)',
    leveregeSkill2: 'Cloud computing (GCP / AWS)',
    leveregeSkill3: 'Postgres, Firebase and ElasticSearch',
    livupJobTitle: 'Software Engineer',
    livupJobDate: 'From 10/2019 to 02/2022',
    livupSkill1: 'Software (JS/TS, Python)',
    livupSkill2: 'Cloud computing (GCP / AWS)',
    livupSkill3: 'Data: Mongo, Redis and Bigquery',
    omnilinkJobTitle: 'Sr. Firmware Developer',
    omnilinkJobDate: 'From 07/2018 to 08/2019',
    omnilinkSkill1: 'Bare-metal firmware in C / C++',
    omnilinkSkill2: 'Python scripts',
    omnilinkSkill3: 'Software in JS / TS and C++ (Qt)',
    bnlCompanyName: 'BNL (USA)',
    bnlJobTitle: 'Controls Engineer',
    bnlJobDate: 'From 03/2016 to 02/2018',
    bnlSkill1: 'Drivers in C / C++',
    bnlSkill2: 'Software in Python with a GUI',
    bnlSkill3: 'Distributed data processing',

    personalProjects: 'Personal Projects',
    augustoNeto: "Augusto Neto's Website",
    augustoNetoDescription: 'Professional website of the lawyer Augusto Neto',
    canaClipping: 'Cana Clipping',
    canaClippingDescription:
      'Website of the Cana Clipping project - a news clipping about Sugar Agriculture, Agribusiness, Innovation & Technology and ESG',
    reactSlideFadeIn: 'react-slide-fade-in',
    reactSlideFadeInDescription: 'Package published on npmjs that adds a slide fade in effect to React components',
    gotOnFloppy: 'Game of Thrones on Floppy',
    gotOnFloppyDescription:
      'Game of Thrones opening song played with the vibration of stepper motors in floppy drives.',
    battleCity: 'Battle City 1985 written in Qt (C++ / QML)',
    battleCityDescription: 'Implementation of the game "Battle City 1985" written in Qt (C++ / Qml).',
    priWebsite: "Priscilla Luvizotto's website",
    priWebsiteDescription: 'Professional website of the dermatologist Priscilla Luvizotto',
    luvimedical: 'Luvimedical',
    luvimedicalDescription: 'Medical clinic management software',

    linkedinUrl: 'https://www.linkedin.com/in/bruno-valdrighi-luvizotto/?locale=en_US',

    allRightsReserved: 'All rights reserved',
  },
}
