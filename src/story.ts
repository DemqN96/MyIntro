export type Lang = 'ua' | 'en'

export const UI: Record<
  Lang,
  {
    kicker: string
    heading: string
    lead: string
    journey: string
    fullStory: string
    back: string
    langLabel: string
  }
> = {
  ua: {
    kicker: 'DevOps Engineer · Ветеран · Наставник',
    heading: 'Історія',
    lead: 'Від Станції юних техніків у Зінькові — через дев’ять років військової служби, оборону Маріуполя та полон — до нового життя в ІТ.',
    journey: 'Шлях',
    fullStory: 'Повна автобіографія',
    back: 'На головну',
    langLabel: 'Мова',
  },
  en: {
    kicker: 'DevOps Engineer · Veteran · Mentor',
    heading: 'Story',
    lead: 'From the Young Technicians Station in Zinkiv — through nine years of military service, the defense of Mariupol and captivity — to a new life in IT.',
    journey: 'Journey',
    fullStory: 'Full autobiography',
    back: 'Back home',
    langLabel: 'Language',
  },
}

export type Milestone = {
  year: string
  title: Record<Lang, string>
  desc: Record<Lang, string>
}

export const TIMELINE: Milestone[] = [
  {
    year: '1996',
    title: { ua: 'Народження', en: 'Born' },
    desc: {
      ua: 'Зіньків, Полтавська область. З дитинства — захоплення технікою та конструюванням.',
      en: 'Zinkiv, Poltava Oblast. Fascinated by technology and building things from an early age.',
    },
  },
  {
    year: '2002–2013',
    title: { ua: 'Школа та Станція юних техніків', en: 'School & Young Technicians Station' },
    desc: {
      ua: 'Паперопластика, картинг, авіа- та судномоделювання, різьблення, комп’ютерні гуртки — терпіння, увага до деталей і робота руками.',
      en: 'Paper modeling, karting, aircraft & ship modeling, wood carving, computer clubs — patience, attention to detail, hands-on skills.',
    },
  },
  {
    year: '2013',
    title: { ua: 'ХНУБА ім. О. М. Бекетова', en: 'Beketov University, Kharkiv' },
    desc: {
      ua: 'Будівельні технології. Аналітичне мислення й робота з технічною документацією.',
      en: 'Construction Technologies. Analytical thinking and work with technical documentation.',
    },
  },
  {
    year: '2016',
    title: { ua: 'Контракт зі ЗСУ', en: 'Contract with the Armed Forces of Ukraine' },
    desc: {
      ua: 'Усвідомлений вибір: заочна форма навчання та професійна військова служба.',
      en: 'A conscious choice: part-time studies and professional military service.',
    },
  },
  {
    year: '2016',
    title: { ua: 'Курсант, ВЧ В0813', en: 'Cadet, Military Unit V0813' },
    desc: {
      ua: 'Військовий зв’язківець: кабелі П-274/П-274М, комутатори П-193М, Ethernet, IP, маршрутизація.',
      en: 'Communications specialist: P-274/P-274M cables, P-193M switches, Ethernet, IP, routing.',
    },
  },
  {
    year: '—',
    title: { ua: 'Телефоніст-лінійний наглядач, ВЧ А2802', en: 'Telephone Line Technician, Unit A2802' },
    desc: {
      ua: 'Польові кабельні лінії, мережі на кручений парі, обслуговування обладнання та усунення пошкоджень.',
      en: 'Field communication lines, twisted-pair networks, equipment maintenance and troubleshooting.',
    },
  },
  {
    year: '—',
    title: { ua: 'Радіотелефоніст', en: 'Radio Telephone Operator' },
    desc: {
      ua: 'HARRIS Falcon II/III, Motorola, Aselsan: налаштування радіомереж, програмування, контроль якості зв’язку.',
      en: 'HARRIS Falcon II/III, Motorola, Aselsan: configuring radio networks, programming, signal quality control.',
    },
  },
  {
    year: '2019',
    title: { ua: 'Начальник апаратної засекреченого зв’язку', en: 'Head of Classified Communications' },
    desc: {
      ua: 'Захищені канали, LAN/WAN, VPN, VoIP; Cisco, MikroTik, супутникові Tooway/iDirect, радіорелейні Р-402.',
      en: 'Secure channels, LAN/WAN, VPN, VoIP; Cisco, MikroTik, Tooway/iDirect satellite, R-402 relay stations.',
    },
  },
  {
    year: '—',
    title: { ua: 'Cisco CCNA та кіберзахист', en: 'Cisco CCNA & Cybersecurity' },
    desc: {
      ua: 'Спеціальна підготовка. Сертифікати втрачені під час бойових дій — знання залишились.',
      en: 'Specialized training. Certificates were lost in combat — the knowledge remained.',
    },
  },
  {
    year: '9 років',
    title: { ua: 'Від курсанта до старшого сержанта', en: 'Cadet → Senior Sergeant' },
    desc: {
      ua: 'Команда, відповідальність за людей, швидкі рішення в умовах високого ризику.',
      en: 'Teamwork, responsibility for people, fast decisions in high-risk environments.',
    },
  },
  {
    year: '24.02.2022',
    title: { ua: 'Оборона Маріуполя', en: 'Defense of Mariupol' },
    desc: {
      ua: '46 днів оборони міста разом із побратимами.',
      en: '46 days defending the city alongside fellow soldiers.',
    },
  },
  {
    year: '2022',
    title: { ua: 'Російський полон', en: 'Russian Captivity' },
    desc: {
      ua: 'Найважче випробування, що загартувало характер і навчило цінувати життя та свободу.',
      en: 'The hardest trial — it strengthened character and taught the value of life and freedom.',
    },
  },
  {
    year: '15.01.2025',
    title: { ua: 'Повернення з полону', en: 'Return Home' },
    desc: {
      ua: 'Обмін військовополоненими. Обіцянка собі — використати другий шанс сповна.',
      en: 'Prisoner exchange. A promise to make the most of a second chance.',
    },
  },
  {
    year: '06.2025',
    title: { ua: 'The Game Education — DevOps', en: 'The Game Education — DevOps' },
    desc: {
      ua: 'AWS, Docker, Terraform, ECS, Kubernetes, CloudFront, Route 53, CloudWatch, GitOps, IaC — з реальними проєктами.',
      en: 'AWS, Docker, Terraform, ECS, Kubernetes, CloudFront, Route 53, CloudWatch, GitOps, IaC — with real projects.',
    },
  },
  {
    year: '2025',
    title: { ua: 'Mate Academy', en: 'Mate Academy' },
    desc: {
      ua: 'Linux, Python, Git, SQL, Docker, Kubernetes, Terraform, AWS, Azure, CI/CD, моніторинг.',
      en: 'Linux, Python, Git, SQL, Docker, Kubernetes, Terraform, AWS, Azure, CI/CD, monitoring.',
    },
  },
  {
    year: '12.2025',
    title: { ua: 'Держстат України — Azure DevOps Engineer', en: 'State Statistics Service — Azure DevOps Engineer' },
    desc: {
      ua: 'Перша робота в ІТ: Azure, Azure DevOps, Terraform, Docker, Kubernetes, Helm, CI/CD, автоматизація.',
      en: 'First IT role: Azure, Azure DevOps, Terraform, Docker, Kubernetes, Helm, CI/CD, automation.',
    },
  },
  {
    year: 'Зараз / Now',
    title: { ua: 'Наставництво ветеранів', en: 'Mentoring Veterans' },
    desc: {
      ua: 'Допомога побратимам увійти в ІТ: напрям розвитку, курси, план розвитку та пошук першої роботи.',
      en: 'Helping fellow veterans enter IT: direction, courses, development plans and the first job.',
    },
  },
]

export const STORY: Record<Lang, string[]> = {
  ua: [
    'Я народився 14 червня 1996 року в місті Зіньків Полтавської області. Моє дитинство пройшло в невеликому українському місті, де я зростав у звичайній родині та з раннього віку цікавився технікою, конструюванням і всім, що було пов’язано зі створенням чогось нового.',
    'У 2002 році я пішов до Зіньківської спеціалізованої школи I–III ступенів, яку закінчив у 2013 році. Шкільне життя для мене не обмежувалося лише уроками. Найбільше часу я проводив на Станції юних техніків, яка стала місцем, де розкрилися мої технічні здібності. Я відвідував майже всі гуртки, що там діяли: паперопластику, картинг, авіамоделювання, судномоделювання, різьблення по дереву, комп’ютерні гуртки та малювання. Кожен із цих напрямів навчив мене терпінню, уважності до деталей, творчому мисленню та роботі руками.',
    'Після закінчення школи у 2013 році вступив до Харківського національного університету будівництва та архітектури імені О. М. Бекетова, де навчався за спеціальністю у сфері будівельних технологій. Навчання в університеті допомогло розвинути аналітичне мислення та навички роботи з технічною документацією.',
    'У 2016 році я прийняв рішення перевестися на заочну форму навчання та підписати контракт із Збройними Силами України. Для мене це був усвідомлений вибір. Я не хотів проходити строкову службу, тому вирішив підписати контракт.',
    'Свій військовий шлях я розпочав курсантом у військовій частині В0813, де навчався за спеціальністю військового зв’язківця. Під час навчання опановував роботу з польовими кабелями П-274 і П-274М, комутаторами П-193М, вивчав принципи побудови локальних мереж Ethernet, IP-протоколів, маршрутизації та організації військового зв’язку.',
    'Після завершення навчання був призначений телефоністом-лінійним наглядачем у військовій частині А2802. До моїх обов’язків входило прокладання польових кабельних ліній зв’язку, монтаж мереж на базі крученої пари, обслуговування комутаційного обладнання та усунення пошкоджень мереж. Це був важливий етап, під час якого я отримав свій перший практичний досвід роботи зі складною інфраструктурою зв’язку.',
    'Невдовзі мене перевели на посаду радіотелефоніста. Я працював із сучасними цифровими радіостанціями HARRIS Falcon II, Falcon III, Motorola, Aselsan та іншими засобами зв’язку. До моїх обов’язків входило налаштування радіомереж, програмування обладнання, контроль якості зв’язку та технічне обслуговування передавальних комплексів.',
    'Завдяки наполегливій праці менш ніж за рік після початку служби отримав звання молодшого сержанта. Я завжди прагнув брати на себе більше відповідальності, не залишався осторонь складних завдань і намагався зробити більше, ніж вимагали посадові обов’язки.',
    'У 2019 році був призначений начальником апаратної засекреченого зв’язку. На цій посаді відповідав за організацію роботи захищених каналів зв’язку, адміністрування мережевої інфраструктури, підтримку LAN/WAN, VPN та VoIP, конфігурування мережевого обладнання Cisco, MikroTik, Dell, Zyxel, TP-Link, D-Link, Grandstream та інших виробників. Також працював із супутниковими системами Tooway, iDirect, радіорелейними станціями Р-402 і спеціальним обладнанням, інформація про яке не підлягає розголошенню.',
    'Під час служби пройшов спеціальну підготовку з кіберзахисту та навчання за програмою Cisco CCNA. Сертифікати були втрачені під час бойових дій, однак отримані знання стали міцною основою моєї подальшої професійної діяльності.',
    'За дев’ять років служби я пройшов шлях від курсанта до старшого сержанта. Цей період навчив мене працювати в команді, швидко приймати рішення, відповідати за людей, виконувати завдання в умовах високого ризику та постійно вдосконалювати свої професійні навички.',
    '24 лютого 2022 року повномасштабне вторгнення Росії я зустрів у Маріуполі. Разом із побратимами протягом сорока шести днів брав участь в обороні міста. Це був один із найважчих періодів мого життя, який назавжди змінив моє світосприйняття.',
    'Після завершення оборони Маріуполя я потрапив у російський полон. Цей етап став надзвичайно важким випробуванням, однак він ще більше загартував мій характер і навчив цінувати життя, свободу та людей поруч.',
    '15 січня 2025 року я повернувся додому в результаті обміну військовополоненими. Саме тоді я пообіцяв собі, що використаю другий шанс максимально ефективно, побудую нове життя та назавжди кину шкідливі звички.',
    'Вже через декілька місяців після повернення я почав активно навчатися. Моєю новою професією став DevOps Engineer. Цей вибір був цілком логічним, адже протягом багатьох років я працював із мережами, системами зв’язку, серверним обладнанням та інформаційною безпекою.',
    'У червні 2025 року я розпочав навчання в The Game Education за напрямом DevOps. За час навчання успішно завершив модулі з AWS, Docker, Docker Compose, Terraform, ECS, Kubernetes, CloudFront, Route 53, CloudWatch, GitOps, інфраструктури як коду та автоматизації розгортання застосунків. Практично кожен модуль завершувався виконанням реального проєкту, що дозволило отримати не лише теоретичні знання, а й практичний досвід.',
    'Паралельно проходив навчання в Mate Academy, де поглиблено вивчав Linux, Python, Git, SQL, Docker, Kubernetes, Terraform, AWS, Microsoft Azure, CI/CD, моніторинг, адміністрування операційних систем та сучасні DevOps-практики. Майже весь свій вільний час я присвячував навчанню. Для мене це була не просто зміна професії, а можливість побудувати нове життя після повернення з полону.',
    'У грудні 2025 року отримав свою першу роботу в ІТ та приєднався до Державної служби статистики України на посаді Azure DevOps Engineer. На цій посаді займаюся підтримкою та розвитком хмарної інфраструктури Microsoft Azure, працюю з Azure DevOps, Terraform, Docker, Kubernetes, Helm, Linux, Bash, Python, автоматизую процеси розгортання застосунків, підтримую CI/CD-процеси, адмініструю хмарні сервіси та допомагаю забезпечувати стабільність і безпеку інфраструктури.',
    'Окремим напрямом моєї діяльності стала допомога ветеранам. Я добре знаю, наскільки складно після військової служби знайти новий шлях у цивільному житті. Саме тому допомагаю своїм побратимам визначитися з напрямом розвитку в ІТ, ділюся власним досвідом, консультую щодо навчання, проходження курсів, складання плану розвитку та пошуку першої роботи. Я переконаний, що знання мають найбільшу цінність тоді, коли ними діляться.',
    'Озираючись назад, я розумію, що кожен етап мого життя був важливим. Дитинство навчило мене цікавитися технікою, школа та Станція юних техніків — постійно навчатися, університет — мислити системно, військова служба — відповідальності та дисципліні, оборона Маріуполя і полон — цінувати життя, а ІТ стало новим етапом розвитку, який відкрив переді мною нові можливості.',
    'Сьогодні я продовжую професійно розвиватися як DevOps Engineer, навчаюся сучасним технологіям, підтримую своїх побратимів, працюю над власними проєктами та вірю, що попереду ще багато можливостей для розвитку, служіння суспільству та реалізації нових ідей.',
  ],
  en: [
    'I was born on June 14, 1996, in the town of Zinkiv, Poltava Oblast, Ukraine. I spent my childhood in a small Ukrainian town, growing up in an ordinary family. From an early age, I was fascinated by technology, engineering, and everything related to creating and building new things.',
    'In 2002, I enrolled at Zinkiv Specialized School I–III Grades, where I studied until graduating in 2013. My school life extended far beyond the classroom. I spent most of my free time at the Young Technicians Station, where my technical abilities truly began to develop. I participated in nearly every club available, including paper modeling, kart racing, aircraft modeling, ship modeling, wood carving, computer science, and drawing. Each activity taught me patience, attention to detail, creativity, and practical problem-solving.',
    'After graduating from school in 2013, I enrolled at the Kharkiv National University of Civil Engineering and Architecture named after O. M. Beketov, where I studied Construction Technologies. My university education strengthened my analytical thinking and taught me how to work with technical documentation and engineering concepts.',
    'In 2016, I made one of the most important decisions of my life. I transferred to part-time studies and signed a professional contract with the Armed Forces of Ukraine. This was a conscious choice. Rather than completing mandatory military service, I wanted to become a professional soldier and dedicate myself to serving my country.',
    'My military career began as a cadet in Military Unit V0813, where I trained as a military communications specialist. During my training, I learned to work with P-274 and P-274M field communication cables, P-193M switching equipment, Ethernet networking, IP protocols, routing, and military communication systems.',
    'After completing my training, I was assigned as a Telephone Line Technician in Military Unit A2802. My responsibilities included deploying field communication lines, installing twisted-pair networks, maintaining communication equipment, and troubleshooting network failures. This position gave me my first practical experience working with complex communication infrastructure.',
    'Shortly afterward, I was promoted to Radio Telephone Operator, where I worked with modern communication systems, including HARRIS Falcon II, Falcon III, Motorola, Aselsan, and other military radio platforms. My responsibilities included configuring radio networks, programming communication equipment, monitoring signal quality, and maintaining radio transmission systems.',
    'Less than a year after beginning my service, I was promoted to the rank of Junior Sergeant. Throughout my career, I consistently sought greater responsibility, volunteered for challenging assignments, and always tried to contribute beyond the minimum required by my position.',
    'In 2019, I was appointed Head of the Classified Communications Systems Department. In this role, I was responsible for organizing and maintaining secure communication channels, administering network infrastructure, supporting LAN/WAN, VPN, and VoIP systems, and configuring networking equipment from Cisco, MikroTik, Dell, Zyxel, TP-Link, D-Link, Grandstream, and other vendors. I also worked with satellite communication systems such as Tooway and iDirect, R-402 microwave relay stations, and other classified equipment whose technical details cannot be disclosed.',
    'During my military service, I completed specialized cybersecurity training and the Cisco CCNA program. Although my certificates were lost during combat operations, the knowledge and practical experience I gained became a strong foundation for my future career.',
    'Over nine years of military service, I progressed from Cadet to Senior Sergeant. This period taught me leadership, discipline, teamwork, decision-making under pressure, responsibility for personnel, and the ability to accomplish complex tasks in high-risk environments.',
    'On February 24, 2022, I was stationed in Mariupol when Russia launched its full-scale invasion of Ukraine. Together with my fellow soldiers, I participated in the defense of the city for 46 days. It was one of the most difficult periods of my life and permanently changed my perspective on the world.',
    'After the defense of Mariupol ended, I was taken into Russian captivity. This became one of the greatest challenges I have ever faced. Despite the hardships, the experience strengthened my character and taught me to value life, freedom, and the people around me.',
    'On January 15, 2025, I returned home as part of a prisoner exchange. From that day forward, I promised myself that I would make the most of the second chance I had been given and permanently leave behind all harmful habits.',
    'Only a few months after returning, I began studying intensively. I chose to become a DevOps Engineer, as it felt like a natural continuation of my previous experience working with networking, communications infrastructure, servers, and information security.',
    'In June 2025, I enrolled in the The Game Education DevOps Program. During the program, I completed projects involving AWS, Docker, Docker Compose, Terraform, Amazon ECS, Kubernetes, CloudFront, Route 53, CloudWatch, GitOps, Infrastructure as Code, and deployment automation. Nearly every module included a real-world project, allowing me to gain valuable practical experience alongside theoretical knowledge.',
    'At the same time, I studied at Mate Academy, where I expanded my knowledge of Linux, Python, Git, SQL, Docker, Kubernetes, Terraform, AWS, Microsoft Azure, CI/CD, monitoring, operating systems, and modern DevOps practices. I dedicated nearly all of my free time to learning. For me, this was not simply a career change — it was an opportunity to build an entirely new life after returning from captivity.',
    'In December 2025, I received my first position in the IT industry and joined the State Statistics Service of Ukraine as an Azure DevOps Engineer. In my current role, I support and develop Microsoft Azure cloud infrastructure, work with Azure DevOps, Terraform, Docker, Kubernetes, Helm, Linux, Bash, and Python, automate application deployment processes, maintain CI/CD pipelines, administer cloud services, and help ensure infrastructure stability, security, and reliability.',
    'An important part of my life is helping fellow veterans transition into the IT industry. Having experienced the challenges of returning to civilian life myself, I actively support other veterans by sharing my experience, advising them on learning paths, helping them choose suitable courses, creating development plans, and preparing them for their first IT positions. I firmly believe that knowledge becomes truly valuable only when it is shared.',
    'Looking back, I realize that every stage of my life has shaped who I am today. My childhood inspired my passion for technology. School and the Young Technicians Station taught me curiosity and continuous learning. University developed my analytical thinking. Military service instilled discipline, responsibility, and leadership. The defense of Mariupol and my time in captivity taught me to value life and freedom. Finally, my transition into IT opened a completely new chapter filled with opportunities for professional growth.',
    'Today, I continue developing as a DevOps Engineer, constantly learning new technologies, supporting fellow veterans, working on personal projects, and believing that there are still many opportunities ahead to contribute to society, grow professionally, and turn new ideas into reality.',
  ],
}
