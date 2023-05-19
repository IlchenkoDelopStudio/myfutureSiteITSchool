
var arrLang = {
    'en': {
      'course': 'course',
      'teachers': 'teachers',
      'contancts': 'contancts',
      'contact_us': 'contact us',
      'infoFist': 'Academy of Computer Science. this is a place where students learn the specialties of the future by conducting our classes absolutely free of charge',
      'aboutInfoSchool': 'learn more about the school',
      'moreInfoSchool': 'our school is only open and we would like to tell you our goals and what is our benefit Goals:Grow up young professionals and bring even more young professionals to the marketmain directions: preparation for development, analytics, finding contacts among other childrenour services are absolutely free and we want to come to the conclusion that you need us, you can easily give your child to study in our schoolfor the poor, we provide assistance in admission to universities and employment, we also prepare forexams in computer science and algebra and English',
      'back':'back',
      'theme':'theme',
      'hearth1':' Now we are in Yekaterinburg!!',
      'paragraph1':'Our new center is opened in the city of Yekaterinburg, Anton Valek street, 2 we are waiting for you',
      'hearth2':' Summer camp applications open',
      'paragraph2':'Applications for the summer camp are open,Realist includes outdoor activities and programming',
      'hearth3':'Schedule change',
      'paragraph3':'OThe change will affect many groups, please talk to the teachers',
      'right':'All rights reserved site author Ilchenko.E.A',
      'author':'Ilchenko E.A',
      'descriptionReact':'React is a free and open source external JavaScript library for building user interfaces.based on UI components.',
      'descriptionPHP':'PHP is a general purpose scripting language for web development. Initially hewas created by Rasmus Lerdorf in 1993 and released in 1995.',
      'descriptionSQL':'Structured Query Language, SQL for short, is a domain-specific languagefor data management,',
      'descriptionDjango':'Django is a free web framework with possible source code based on python,which follows the model-template-view architectural pattern.',
      'descriptionJS':'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, along with HTML and CSS.',
      'descriptionEng':'English is the most widely spoken language in the world,considered the official language in 67 countries is the basic and most important skill at work',
      'more':'more',
      'oclock':'The course is designed for 3000 hours',
      'motto':'Be ready to fight for your future',
      'fio':'Ilchenko Evgeny',
      'formname':'You Name',
      'formText':'Entering you message',
      'submit':'Send',
      'contactus':'сontact us',

   
    },
    'ru': {
      'course': 'курсы',
      'teachers': 'преподователи',
      'contancts': 'контакты',
      'contact_us': 'связаться с нами',
      'infoFist': 'Академия компьютерных наук. это место где студенты осваивают специальности будующего проводя наши занятия абсолютно бесплатно',
      'aboutInfoSchool': 'узнать больше о школе',
      'moreInfoSchool': 'наша школа работает только открыта и мы хотели бы рассказать наши цели и в чем наша выгода цели:Вырастить молодых специалистов и выдать рынку еще больше молодых специалистов основные направления:подготовка к разработке,аналитика,нахождение контактов среди других детей наши услуги абсолютно бесплатны и мы хотим прийти к выводу что мы вам нужны вы спокойно сможете отдать своего ребенка на обучение в нашу школу  для малоимущих мы оказывыем помощь в поступление в вузы и устройством на работы так же мы готовим кэкзаменам по информатике и алгебре и англискому',
      'back':'назад',
      'theme':'тема',
      'hearth1':' Теперь мы в Екатеринбурге!!',
      'paragraph1':'Открыт наш новый центр в городе Екатеринбург улица Антона Валека, 2 ждем вас',
      'hearth2':' Открыт прием заявок на летний лагерь',
      'paragraph2':'Заявки на летний лагерь открыты,Реалист включает в себя активный отдых и программирование',
      'hearth3':'Изменение в расписании',
      'paragraph3':'O Изменение коснется многих групп, пожалуйста, поговорите с учителями',
      'right':'все права защищены автор сайта Ильченко Е.А.',
      'author':'Ильченко Е.A',
      'descriptionReact':'React — это бесплатная внешняя библиотека JavaScript с открытым исходным кодом для создания пользовательских интерфейсов на основе компонентов пользовательского интерфейса.',
      'descriptionPHP':'PHP — это язык сценариев общего назначения для веб-разработки. Изначально он был создан Расмусом Лердорфом в 1993 году и выпущен в 1995 году.',
      'descriptionSQL':'Язык структурированных запросов, сокращенно SQL, представляет собой предметно-ориентированный язык для управления данными,',
      'descriptionDjango':'Django — это бесплатный веб-фреймворк с возможным исходным кодом на основе Python, который следует архитектурному шаблону модель-шаблон-представление.',
      'descriptionJS':'JavaScript, часто сокращенно JS, — это язык программирования, который является одной из основных технологий Всемирной паутины, наряду с HTML и CSS.',
      'descriptionEng':'Английский язык является самым распространенным языком в мире, он считается официальным языком в 67 странах и является основным и наиболее важным навыком в работе.',
      'more':'подробнее',
      'oclock':'3000 часов',
      'motto':'Будьте готовы сражаться за свое будующее',
      'fio':'Ильченко Евгений',
      'formname':'Ваше имя',
      'formText':'Введите ваше сообщение',
      'submit':'отправить',
      'contactus':'cвязаться с нами',


    }
  }
  $(function() {
    $('.translate').click(function() {
      var lang = $(this).attr('id');

      $('.lang').each(function(index, item) {
        $(this).text(arrLang[lang][$(this).attr('key')]);
      });
    });
  });