export type Language = "ru" | "en";

type NavItem = {
  id: string;
  labelKey: string;
};

type Strength = {
  titleKey: string;
  descriptionKey: string;
};

type SkillGroup = {
  titleKey: string;
  skills: string[];
};

type Talk = {
  titleKey: string;
  url: string;
};

export const navItems: NavItem[] = [
  { id: "about", labelKey: "nav.about" },
  { id: "strengths", labelKey: "nav.strengths" },
  { id: "skills", labelKey: "nav.skills" },
  { id: "projects", labelKey: "nav.projects" },
  { id: "talks", labelKey: "nav.talks" },
];

export const profile = {
  name: "hero.name",
  roleKey: "hero.role",
  taglineKey: "hero.tagline",
};

export const strengths: Strength[] = [
  { titleKey: "strengths.items.ui.title", descriptionKey: "strengths.items.ui.description" },
  {
    titleKey: "strengths.items.quality.title",
    descriptionKey: "strengths.items.quality.description",
  },
  {
    titleKey: "strengths.items.product.title",
    descriptionKey: "strengths.items.product.description",
  },
  {
    titleKey: "strengths.items.speaking.title",
    descriptionKey: "strengths.items.speaking.description",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    titleKey: "skills.groups.architecture",
    skills: ["Distributed Systems", "SAGA", "Fault Tolerance", "Resilience Patterns"],
  },
  {
    titleKey: "skills.groups.backend",
    skills: ["Java", "Kotlin", "Spring Boot", "Postgres", "Kafka"],
  },
  {
    titleKey: "skills.groups.devops",
    skills: ["Kubernetes", "Terraform", "Ansible", "CI/CD", "Observability"],
  },
];

export const talks: Talk[] = [
  { titleKey: "talks.items.report1", url: "https://www.youtube.com/watch?v=xgSjfEWjQuQ" },
  { titleKey: "talks.items.report2", url: "https://vkvideo.ru/video-218245488_456239035" },
  { titleKey: "talks.items.report3", url: "https://www.youtube.com/watch?v=IOx28DVkfbU" },
  { titleKey: "talks.items.report4", url: "https://www.youtube.com/watch?v=aVyBNIn69EM" },
];

export const links = {
  github: "https://github.com/Romanow",
  linkedin: "https://www.linkedin.com/in/romanowalex/",
  speakerDeck: "https://speakerdeck.com/romanowalex",
  telegram: "https://t.me/romanowalex",
};
