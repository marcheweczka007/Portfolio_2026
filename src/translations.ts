export type Language = "en" | "pl";

export const translations = {
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      processes: "Processes",
      about: "About",
    },
    home: {
      availability: "Available for freelance projects",
      heroTitle1: "Product",
      heroTitle2: "designer",
      heroTitle3: "crafting experiences",
      name: "Zuza Marchewka",
      heroDescription:
        "Specializing in digital products that bridge user needs with business goals through thoughtful design and research-driven solutions.",
      viewProjects: "View Projects",
      getInTouch: "Get in Touch",
      processesTitle: "Processes",
      processesDescription:
        "My design process is rooted in empathy and iteration. I believe in understanding the problem deeply before jumping to solutions.",
      processStep1: "Research & Discovery",
      processStep2: "Ideation & Prototyping",
      processStep3: "Testing & Refinement",
      processStep4: "Implementation Support",
      projectsTitle: "Projects",
      projectsDescription:
        "I've worked with startups and established companies to create meaningful digital experiences that solve real problems.",
      projectStat1: "Mobile Product Design",
      projectStat2: "Web Platforms",
      projectStat3: "Design Systems & UI Libraries",
      projectStat4: "Data-Heavy Dashboards",
      featuredWorkLabel: "Portfolio",
      featuredWorkTitle: "Featured Work",
      featuredWorkDescription: "A selection of recent projects",
      viewAll: "View All",
      philosophyTitle: "Work Philosophy",
      philosophyQuote:
        "Great design is invisible. It doesn't draw attention to itself—it enhances the user's experience and helps them achieve their goals effortlessly.",
      philosophyDescription:
        "I strive to create interfaces that are not only beautiful but also functional, accessible, and delightful to use. Every pixel serves a purpose, every interaction feels natural, and every decision is backed by research and empathy.",
      ctaTitle: "Let's Create Something Amazing",
      ctaDescription:
        "I'm always interested in hearing about new projects and opportunities.",
      copyright: "© 2025 Zuza Marchewka. All rights reserved.",
    },
    about: {
      backToHome: "Back to Home",
      pageTitle: "Hey, I'm Zuza",
      bioP1:
        "I'm a product designer with nearly 3 years of experience crafting intuitive experiences for SaaS products. I'm the kind of designer who's happy to wear multiple hats—whether that's designing an e-book for a marketing campaign or diving deep into design system contributions.",
      bioP2:
        "I love collaborating with developers (they're my favorite people to grab coffee with), and lately, I've been learning to code myself. With some help from AI tools, I'm able to rapidly prototype and test ideas, which has been a game-changer for turning concepts into tangible solutions faster.",
      bioP3:
        "I've worked both solo and as part of cross-functional teams, and I've found that the best work happens when everyone's sharing ideas and building together. Whether it's establishing design patterns or solving complex user problems, I bring curiosity, adaptability, and a genuine enthusiasm for making things that work well and look great.",
      bioP4:
        "Currently open to new opportunities where I can contribute, learn, and make an impact.",
      expertiseTitle: "Areas of Expertise",
      leanUx: "Lean UX",
      leanUxContent1:
        "I practice Lean UX to minimize waste and maximize learning through rapid experimentation. This approach focuses on getting ideas in front of users quickly, gathering feedback, and iterating based on real-world insights rather than assumptions.",
      leanUxContent2: "Key principles I apply include:",
      leanUxPoint1:
        "Cross-functional collaboration from day one",
      leanUxPoint2: "Building MVPs and testable hypotheses",
      leanUxPoint3:
        "Continuous user validation throughout the design process",
      leanUxPoint4: "Prioritizing outcomes over outputs",
      leanUxPoint5:
        "Embracing uncertainty and learning from failure",
      research: "Research",
      researchContent1:
        "Research is the foundation of all my design decisions. I employ both qualitative and quantitative methods to deeply understand user behaviors, motivations, and pain points.",
      researchContent2: "My research toolkit includes:",
      researchPoint1: "User interviews and contextual inquiry",
      researchPoint2:
        "Usability testing (moderated and unmoderated)",
      researchPoint3: "Survey design and analysis",
      researchPoint4:
        "Analytics interpretation and behavioral data analysis",
      researchPoint5:
        "Competitive analysis and market research",
      researchPoint6:
        "Journey mapping and service design blueprints",
      researchPoint7:
        "Card sorting and tree testing for information architecture",
      ooux: "OOUX",
      oouxContent1:
        "Object-Oriented UX (OOUX) is a methodology that helps me design scalable, coherent digital systems by thinking in terms of objects rather than pages or screens.",
      oouxContent2: "How I apply OOUX:",
      oouxPoint1:
        "Identifying core objects and their relationships early in the design process",
      oouxPoint2:
        "Creating object maps to visualize system architecture",
      oouxPoint3:
        "Defining object attributes and actions to ensure consistency",
      oouxPoint4:
        "Building flexible, modular designs that adapt to different contexts",
      oouxPoint5:
        "Collaborating with developers using a shared mental model",
      oouxPoint6:
        "Reducing technical debt through thoughtful object-based design decisions",
      aiPrototyping: "AI + Rapid Prototyping",
      aiPrototypingContent1:
        "I leverage cutting-edge AI tools to accelerate the design process and explore more possibilities in less time. AI enhances rather than replaces the creative process, allowing me to focus on strategic thinking and user empathy.",
      aiPrototypingContent2:
        "My AI-enhanced workflow includes:",
      aiPrototypingPoint1:
        "Using AI for rapid ideation and concept generation",
      aiPrototypingPoint2:
        "Generating realistic copy and content for prototypes",
      aiPrototypingPoint3:
        "Creating multiple design variations to test different approaches",
      aiPrototypingPoint4:
        "Automating repetitive tasks to focus on high-impact work",
      aiPrototypingPoint5:
        "Synthesizing research findings and identifying patterns",
      aiPrototypingPoint6:
        "Building interactive, high-fidelity prototypes faster",
      aiPrototypingPoint7:
        "Exploring AI-powered personalization and adaptive interfaces",
      designSystem: "Design Systems",
      designSystemContent1:
        "I believe in the power of design systems to create consistency, accelerate product development, and improve collaboration between design and engineering teams.",
      designSystemContent2: "My design system philosophy:",
      designSystemPoint1:
        "Start small with foundational elements (colors, typography, spacing)",
      designSystemPoint2:
        "Build component libraries that are flexible yet opinionated",
      designSystemPoint3:
        "Document patterns and usage guidelines for the entire team",
      designSystemPoint4:
        "Establish design token architecture for scalability",
      designSystemPoint5:
        "Create governance processes that balance consistency with innovation",
      designSystemPoint6:
        "Prioritize accessibility and inclusive design from the start",
      designSystemPoint7:
        "Leverage existing systems (Material, Ant Design, shadcn/ui) when appropriate",
      coding: "Coding",
      codingContent1:
        "My coding skills enable me to communicate more effectively with engineering teams, prototype interactions that would be difficult to convey in static designs, and understand technical constraints early in the design process.",
      codingContent2: "Technical capabilities:",
      codingPoint1: "HTML, CSS, and modern JavaScript (ES6+)",
      codingPoint2: "React and component-based architecture",
      codingPoint3:
        "CSS frameworks (Tailwind CSS, styled-components)",
      codingPoint4:
        "Building functional prototypes with real data",
      codingPoint5:
        "Version control with Git and collaborative workflows",
      codingPoint6:
        "Understanding of responsive design implementation",
      codingPoint7:
        "Basic knowledge of APIs and data structures",
      codingPoint8:
        "Performance optimization and accessibility best practices",
    },
    processes: {
      backToHome: "Back to Home",
      title: "Processes",
      subtitle:
        "Why start-ups should not build their own design systems.",
    },
    projects: {
      backToHome: "Back to Home",
      backToProjects: "Back to Projects",
      projects: "Projects",
      pageTitle: "Projects",
      pageDescription:
        "A collection of my work across different platforms and industries",
      grandBank: {
        title: "Grand Bank",
        tags: ["Mobile app", "Banking", "SaaS"],
      },
      productCard: {
        title: "Product card",
        tags: ["Re-design", "Loan application", "SaaS"],
      },
      oneView: {
        title: "One view",
        tags: ["Dashboard", "SaaS"],
      },
      promoEbook: {
        title: "Promo E-Book",
        tags: ["FinOps", "Marketing", "Freelance"],
      },
      kiosk: {
        title: "Kiosk",
        tags: ["SaaS", "Large screen"],
      },
      funProjects: {
        title: "Fun projects",
        tags: ["UI experimentations", "Personal project"],
      },
    },
  },
  pl: {
    nav: {
      home: "Strona główna",
      projects: "Projekty",
      processes: "Procesy",
      about: "O mnie",
    },
    home: {
      availability: "Dostępna do projektów freelance",
      heroTitle1: "Projektantka",
      heroTitle2: "produktowa",
      heroTitle3: "tworzę doświadczenia",
      name: "Zuza Marchewka",
      heroDescription:
        "Specjalizuję się w produktach cyfrowych, które łączą potrzeby użytkowników z celami biznesowymi poprzez przemyślane projektowanie i rozwiązania oparte na badaniach.",
      viewProjects: "Zobacz projekty",
      getInTouch: "Skontaktuj się",
      processesTitle: "Procesy",
      processesDescription:
        "Mój proces projektowania opiera się na empatii i iteracji. Wierzę w głębokie zrozumienie problemu zanim przejdę do rozwiązań.",
      processStep1: "Badania i odkrywanie",
      processStep2: "Ideacja i prototypowanie",
      processStep3: "Testowanie i dopracowanie",
      processStep4: "Wsparcie wdrożenia",
      projectsTitle: "Projekty",
      projectsDescription:
        "Pracowałam ze startupami i uznanymi firmami, aby tworzyć znaczące doświadczenia cyfrowe rozwiązujące prawdziwe problemy.",
      projectStat1: "Aplikacje mobilne",
      projectStat2: "Platformy webowe",
      projectStat3: "Systemy projektowe",
      featuredWorkLabel: "Portfolio",
      featuredWorkTitle: "Wybrane prace",
      featuredWorkDescription: "Wybór najnowszych projektów",
      viewAll: "Zobacz wszystko",
      philosophyTitle: "Filozofia pracy",
      philosophyQuote:
        "Świetny design jest niewidoczny. Nie przyciąga uwagi do siebie—wzbogaca doświadczenie użytkownika i pomaga osiągnąć cele bez wysiłku.",
      philosophyDescription:
        "Dążę do tworzenia interfejsów, które są nie tylko piękne, ale także funkcjonalne, dostępne i przyjemne w użyciu. Każdy piksel ma cel, każda interakcja jest naturalna, a każda decyzja oparta jest na badaniach i empatii.",
      ctaTitle: "Stwórzmy coś niesamowitego",
      ctaDescription:
        "Zawsze chętnie wysłucham propozycji nowych projektów i możliwości współpracy.",
      copyright:
        "© 2025 Zuza Marchewka. Wszelkie prawa zastrzeżone.",
    },
    about: {
      backToHome: "Wróć do strony głównej",
      pageTitle: "Cześć, jestem Zuza",
      bioP1:
        "Jestem projektantką produktową z prawie 3-letnim doświadczeniem w tworzeniu intuicyjnych doświadczeń dla produktów SaaS. Jestem projektantką, która chętnie nosi wiele kapeluszy—czy to projektowanie e-booka do kampanii marketingowej, czy też głębokie zaangażowanie w rozwój systemów projektowych.",
      bioP2:
        "Uwielbiam współpracować z deweloperami (to moi ulubieni ludzie do wspólnej kawy), a ostatnio sama uczę się kodować. Z pomocą narzędzi AI jestem w stanie szybko prototypować i testować pomysły, co znacząco przyspiesza przekształcanie koncepcji w namacalne rozwiązania.",
      bioP3:
        "Pracowałam zarówno solo, jak i w zespołach międzyfunkcyjnych i odkryłam, że najlepsza praca powstaje, gdy wszyscy dzielą się pomysłami i budują razem. Bez względu na to, czy chodzi o ustanawianie wzorców projektowych, czy rozwiązywanie złożonych problemów użytkowników, wnoszę ciekawość, elastyczność i prawdziwy entuzjazm do tworzenia rzeczy, które dobrze działają i świetnie wyglądają.",
      bioP4:
        "Obecnie jestem otwarta na nowe możliwości, gdzie mogę wnieść wkład, uczyć się i mieć realny wpływ.",
      expertiseTitle: "Obszary ekspertyzy",
      leanUx: "Lean UX",
      leanUxContent1:
        "Praktykuję Lean UX, aby zminimalizować straty i maksymalizować uczenie się poprzez szybkie eksperymentowanie. To podejście skupia się na szybkim przedstawianiu pomysłów użytkownikom, zbieraniu opinii i iterowaniu na podstawie rzeczywistych spostrzeżeń, a nie założeń.",
      leanUxContent2: "Kluczowe zasady, które stosuję:",
      leanUxPoint1:
        "Współpraca międzyfunkcyjna od pierwszego dnia",
      leanUxPoint2: "Budowanie MVP i testowalnych hipotez",
      leanUxPoint3:
        "Ciągła walidacja z użytkownikami w całym procesie projektowania",
      leanUxPoint4: "Priorytetyzacja wyników nad wynikami",
      leanUxPoint5:
        "Akceptacja niepewności i uczenie się na błędach",
      research: "Badania",
      researchContent1:
        "Badania są fundamentem wszystkich moich decyzji projektowych. Stosuję zarówno metody jakościowe, jak i ilościowe, aby głęboko zrozumieć zachowania, motywacje i bolączki użytkowników.",
      researchContent2: "Moje narzędzia badawcze obejmują:",
      researchPoint1:
        "Wywiady z użytkownikami i badania kontekstowe",
      researchPoint2:
        "Testy użyteczności (moderowane i niemoderowane)",
      researchPoint3: "Projektowanie i analiza ankiet",
      researchPoint4:
        "Interpretacja analityki i analiza danych behawioralnych",
      researchPoint5: "Analiza konkurencji i badania rynku",
      researchPoint6:
        "Mapowanie podróży użytkownika i blueprinty usług",
      researchPoint7:
        "Card sorting i tree testing dla architektury informacji",
      ooux: "OOUX",
      oouxContent1:
        "Object-Oriented UX (OOUX) to metodologia, która pomaga mi projektować skalowalne, spójne systemy cyfrowe, myśląc w kategoriach obiektów, a nie stron czy ekranów.",
      oouxContent2: "Jak stosuję OOUX:",
      oouxPoint1:
        "Identyfikowanie kluczowych obiektów i ich relacji na wczesnym etapie procesu projektowania",
      oouxPoint2:
        "Tworzenie map obiektów do wizualizacji architektury systemu",
      oouxPoint3:
        "Definiowanie atrybutów i akcji obiektów dla zapewnienia spójności",
      oouxPoint4:
        "Budowanie elastycznych, modułowych projektów adaptujących się do różnych kontekstów",
      oouxPoint5:
        "Współpraca z deweloperami przy użyciu wspólnego modelu myślowego",
      oouxPoint6:
        "Redukcja długu technicznego poprzez przemyślane decyzje projektowe oparte na obiektach",
      aiPrototyping: "AI + szybkie prototypowanie",
      aiPrototypingContent1:
        "Wykorzystuję najnowocześniejsze narzędzia AI, aby przyspieszyć proces projektowania i eksplorować więcej możliwości w krótszym czasie. AI wzbogaca, a nie zastępuje proces kreatywny, pozwalając mi skupić się na myśleniu strategicznym i empatii użytkownika.",
      aiPrototypingContent2:
        "Mój workflow wzbogacony o AI obejmuje:",
      aiPrototypingPoint1:
        "Używanie AI do szybkiej ideacji i generowania koncepcji",
      aiPrototypingPoint2:
        "Generowanie realistycznych tekstów i treści dla prototypów",
      aiPrototypingPoint3:
        "Tworzenie wielu wariantów projektowych do testowania różnych podejść",
      aiPrototypingPoint4:
        "Automatyzacja powtarzalnych zadań, aby skupić się na pracy o wysokim wpływie",
      aiPrototypingPoint5:
        "Synteza wyników badań i identyfikacja wzorców",
      aiPrototypingPoint6:
        "Szybsze budowanie interaktywnych prototypów wysokiej wierności",
      aiPrototypingPoint7:
        "Eksploracja personalizacji i adaptacyjnych interfejsów opartych na AI",
      designSystem: "Systemy projektowe",
      designSystemContent1:
        "Wierzę w moc systemów projektowych do tworzenia spójności, przyspieszania rozwoju produktu i poprawy współpracy między zespołami projektowymi a inżynieryjnymi.",
      designSystemContent2:
        "Moja filozofia systemów projektowych:",
      designSystemPoint1:
        "Rozpoczynanie od małych elementów fundamentalnych (kolory, typografia, odstępy)",
      designSystemPoint2:
        "Budowanie bibliotek komponentów elastycznych, ale z opinią",
      designSystemPoint3:
        "Dokumentowanie wzorców i wytycznych użycia dla całego zespołu",
      designSystemPoint4:
        "Ustanawianie architektury tokenów projektowych dla skalowalności",
      designSystemPoint5:
        "Tworzenie procesów zarządzania równoważących spójność z innowacją",
      designSystemPoint6:
        "Priorytetyzacja dostępności i inkluzywnego projektowania od początku",
      designSystemPoint7:
        "Wykorzystywanie istniejących systemów (Material, Ant Design, shadcn/ui) gdy jest to odpowiednie",
      coding: "Kodowanie",
      codingContent1:
        "Moje umiejętności kodowania pozwalają mi skuteczniej komunikować się z zespołami inżynieryjnymi, prototypować interakcje trudne do przekazania w statycznych projektach i rozumieć ograniczenia techniczne na wczesnym etapie procesu projektowania.",
      codingContent2: "Możliwości techniczne:",
      codingPoint1: "HTML, CSS i nowoczesny JavaScript (ES6+)",
      codingPoint2:
        "React i architektura oparta na komponentach",
      codingPoint3:
        "Frameworki CSS (Tailwind CSS, styled-components)",
      codingPoint4:
        "Budowanie funkcjonalnych prototypów z prawdziwymi danymi",
      codingPoint5:
        "Kontrola wersji z Git i współpraca w zespole",
      codingPoint6:
        "Zrozumienie implementacji responsywnego designu",
      codingPoint7:
        "Podstawowa wiedza o API i strukturach danych",
      codingPoint8:
        "Optymalizacja wydajności i najlepsze praktyki dostępności",
    },
    processes: {
      backToHome: "Wróć do strony głównej",
      title: "Procesy",
      subtitle:
        "Dlaczego startupy nie powinny budować własnych systemów projektowych.",
    },
    projects: {
      backToHome: "Wróć do strony głównej",
      backToProjects: "Wróć do projektów",
      projects: "Projekty",
      pageTitle: "Projekty",
      pageDescription:
        "Kolekcja moich prac na różnych platformach i w różnych branżach",
      grandBank: {
        title: "Grand Bank",
        tags: ["Aplikacja mobilna", "Bankowość", "SaaS"],
      },
      productCard: {
        title: "Karta produktu",
        tags: [
          "Przeprojektowanie",
          "Wniosek kredytowy",
          "SaaS",
        ],
      },
      oneView: {
        title: "One view",
        tags: ["Panel", "SaaS"],
      },
      promoEbook: {
        title: "Promo E-Book",
        tags: ["FinOps", "Marketing", "Freelance"],
      },
      kiosk: {
        title: "Kiosk",
        tags: ["SaaS", "Duży ekran"],
      },
      funProjects: {
        title: "Zabawne projekty",
        tags: ["Eksperymenty UI", "Projekt osobisty"],
      },
    },
  },
};