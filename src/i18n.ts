import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  ru: {
    translation: {
      logo: "RA",
      profession: "Software Архитектор",
      nav: {
        about: "О себе",
        strengths: "Сильные стороны",
        skills: "Навыки",
        projects: "Проекты",
        talks: "Выступления",
      },
      hero: {
        name: "Романов Алексей",
        role: "Распределенные системы · Kotlin · DevOps",
        tagline: "Создаю решения, ориентированные на масштабируемость и отказоустойчивость.",
      },
      about: {
        title: "О себе",
        text: "Создаю надёжные backend-системы и проектирую устойчивые распределённые архитектуры для реальных production-нагрузок. Занимаюсь обучением новых инженеров.",
      },
      strengths: {
        title: "Сильные профессиональные стороны",
        items: {
          ui: {
            title: "Распределённые системы",
            description:
              "Разработка масштабируемых и устойчивых микросервисных решений с использованием оркестрации, механизмов обеспечения согласованности и стратегий обработки отказов.",
          },
          quality: {
            title: "Разработка",
            description:
              "Разработка production-ready сервисов с чистой архитектурой, сильным доменным моделированием и высокой производительностью.",
          },
          product: {
            title: "Техническое руководство и менторство",
            description:
              "Руководство инженерными инициативами и развитие разработчиков через системную передачу знаний и архитектурную экспертизу.",
          },
          speaking: {
            title: "Публичные выступления",
            description: "Делюсь практикой на митапах и конференциях.",
          },
        },
      },
      skills: {
        title: "Навыки",
        groups: {
          architecture: "Архитектура",
          backend: "Разработка",
          devops: "DevOps",
        },
      },
      projects: {
        title: "Проекты",
        openRepo: "Открыть",
        stars: "Звезды",
        forks: "Forks",
        updated: "Обновлен",
        loading: "Загрузка репозиториев...",
        error: "Не удалось загрузить репозитории.",
        empty: "Подходящие репозитории не найдены.",
      },
      talks: {
        title: "Публичные выступления",
        items: {
          report1:
            "DevOops: Очумелые ручки: делаем свой Helm Chart Repository из подручных средств",
          report2: "Jug.ru: Деплой и откат приложения и миграций БД",
          report3:
            "JVM Day: gRPC vs RESTful: Битва протоколов — как выбрать идеальный API для вашей архитектуры",
          report4: "Analyst Days: Индексы на практике: как ускорить запросы и не наломать дров",
        },
      },
      footer: "Романов Алексей · Software Архитектор",
    },
  },
  en: {
    translation: {
      logo: "RA",
      profession: "Software Architect",
      nav: {
        about: "About",
        strengths: "Strengths",
        skills: "Skills",
        projects: "Projects",
        talks: "Talks",
      },
      hero: {
        name: "Romanov Alexey",
        role: "Distributed Systems · Kotlin · DevOps",
        tagline: "Build architecture focused on scalability and resilience.",
      },
      about: {
        title: "About",
        text: "Designing scalable backend systems and resilient distributed architectures. Building production-grade solutions and mentoring engineers.",
      },
      strengths: {
        title: "Strong Professional Sides",
        items: {
          ui: {
            title: "Distributed Systems",
            description:
              "Designing resilient, scalable microservice architectures with orchestration, fault tolerance, and consistency patterns.",
          },
          quality: {
            title: "Backend Engineering",
            description:
              "Building production-grade backend services with clean architecture, strong domain modeling, and high performance.",
          },
          product: {
            title: "Technical Leadership & Mentoring",
            description:
              "Leading engineering initiatives and helping developers grow through structured knowledge transfer and architectural guidance.",
          },
          speaking: {
            title: "Public Speaking",
            description: "I share practical experience at meetups and conferences.",
          },
        },
      },
      skills: {
        title: "Skills",
        groups: {
          architecture: "Architecture",
          backend: "Backend Engineering",
          devops: "DevOps",
        },
      },
      projects: {
        title: "Projects",
        openRepo: "Open",
        stars: "Stars",
        forks: "Forks",
        updated: "Updated",
        loading: "Loading repositories...",
        error: "Failed to load repositories.",
        empty: "No matching repositories found.",
      },
      talks: {
        title: "Public Talks",
        items: {
          report1:
            "DevOops: Очумелые ручки: делаем свой Helm Chart Repository из подручных средств",
          report2: "Jug.ru: Деплой и откат приложения и миграций БД",
          report3:
            "JVM Day: gRPC vs RESTful: Битва протоколов — как выбрать идеальный API для вашей архитектуры",
          report4: "Analyst Days: Индексы на практике: как ускорить запросы и не наломать дров",
        },
      },
      footer: "Romanov Alexey · Software Architect",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ru",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
