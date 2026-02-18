import { useTranslation } from "react-i18next";
import type { CSSProperties } from "react";
import {
  FaChalkboardTeacher,
  FaCodeBranch,
  FaGithub,
  FaLinkedin,
  FaRegClock,
  FaStar,
  FaTelegramPlane,
} from "react-icons/fa";
import type { IconType } from "react-icons";
import {
  MdAutorenew,
  MdHub,
  MdInsights,
  MdRocketLaunch,
  MdSecurity,
  MdSyncAlt,
} from "react-icons/md";
import {
  SiAnsible,
  SiApachekafka,
  SiKotlin,
  SiKubernetes,
  SiOpenjdk,
  SiPostgresql,
  SiSpringboot,
  SiTerraform,
} from "react-icons/si";

import { formatIsoDate } from "../../../shared/lib/date";
import { links, navItems, profile, skillGroups, strengths, talks } from "../model/content";
import { usePortfolioRepositories } from "../model/usePortfolioRepositories";

import "./HomePage.css";

const skillIconMap: Record<string, IconType> = {
  "Distributed Systems": MdHub,
  SAGA: MdSyncAlt,
  "Fault Tolerance": MdSecurity,
  "Resilience Patterns": MdAutorenew,
  Java: SiOpenjdk,
  Kotlin: SiKotlin,
  "Spring Boot": SiSpringboot,
  Postgres: SiPostgresql,
  Kafka: SiApachekafka,
  Kubernetes: SiKubernetes,
  Terraform: SiTerraform,
  Ansible: SiAnsible,
  "CI/CD": MdRocketLaunch,
  Observability: MdInsights,
};

const skillIconColorMap: Record<string, string> = {
  "Distributed Systems": "#3b82f6",
  SAGA: "#7c3aed",
  "Fault Tolerance": "#ef4444",
  "Resilience Patterns": "#0ea5e9",
  Java: "#ea2d2e",
  Kotlin: "#7f52ff",
  "Spring Boot": "#6db33f",
  Postgres: "#336791",
  Kafka: "#231f20",
  Kubernetes: "#326ce5",
  Terraform: "#7b42bc",
  Ansible: "#000000",
  "CI/CD": "#2563eb",
  Observability: "#06b6d4",
};

function HomePage() {
  const { t, i18n } = useTranslation();
  const { loading, error, groups } = usePortfolioRepositories();
  const language = i18n.language.startsWith("ru") ? "ru" : "en";

  return (
    <div className="portfolio-page">
      <header className="portfolio-header sticky-top">
        <div className="container-xl">
          <nav className="navbar py-3 px-0 d-flex flex-wrap gap-2 align-items-center">
            <a href="#top" className="logo" aria-label="Home">
              <img src="/assets/logo.svg" alt="AR" className="logo-image" />
            </a>

            <div className="nav-links">
              {navItems.map((item) => (
                <a key={item.id} href={`#${item.id}`} className="nav-link-item">
                  {t(item.labelKey)}
                </a>
              ))}
            </div>

            <div className="language-switch ms-lg-auto">
              <button
                className={`btn btn-sm ${language === "ru" ? "btn-primary" : "btn-outline-primary"}`}
                type="button"
                onClick={() => i18n.changeLanguage("ru")}
              >
                RU
              </button>
              <button
                className={`btn btn-sm ${language === "en" ? "btn-primary" : "btn-outline-primary"}`}
                type="button"
                onClick={() => i18n.changeLanguage("en")}
              >
                EN
              </button>
            </div>
          </nav>
        </div>
      </header>

      <main id="top" className="container-xl pb-5">
        <section className="surface hero mt-4">
          <div className="row g-4 align-items-center">
            <div className="col-md-4 col-lg-3">
              <img src="/assets/profile.png" alt="Romanov Alexey" className="profile-image" />
            </div>

            <div className="col-md-8 col-lg-9">
              <p className="profession">{t("profession")}</p>
              <h1 className="mb-1">{t(profile.name)}</h1>
              <p className="lead mb-2">{t(profile.roleKey)}</p>
              <p className="text-muted mb-4">{t(profile.taglineKey)}</p>

              <div className="d-flex flex-wrap gap-2">
                <a
                  className="btn icon-btn btn-github"
                  href={links.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  className="btn icon-btn btn-linkedin"
                  href={links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin /> LinkedIn
                </a>
                <a
                  className="btn icon-btn btn-speakerdeck"
                  href={links.speakerDeck}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaChalkboardTeacher /> SpeakerDeck
                </a>
                <a
                  className="btn icon-btn btn-telegram"
                  href={links.telegram}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTelegramPlane /> Telegram
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="surface section-gap">
          <h2>{t("about.title")}</h2>
          <p className="text-muted mb-0">{t("about.text")}</p>
        </section>

        <section id="strengths" className="surface section-gap">
          <h2>{t("strengths.title")}</h2>
          <div className="row g-3 mt-1">
            {strengths.map((strength) => (
              <div key={strength.titleKey} className="col-sm-6 col-lg-3">
                <article className="strength-card h-100">
                  <h3>{t(strength.titleKey)}</h3>
                  <p>{t(strength.descriptionKey)}</p>
                </article>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="surface section-gap">
          <h2>{t("skills.title")}</h2>
          <div className="row g-3 mt-1">
            {skillGroups.map((group) => (
              <div key={group.titleKey} className="col-lg-4">
                <div className="skill-group h-100">
                  <h3>{t(group.titleKey)}</h3>
                  <div className="d-flex flex-wrap gap-2">
                    {group.skills.map((skill) => {
                      const SkillIcon = skillIconMap[skill];
                      const iconStyle: CSSProperties | undefined = skillIconColorMap[skill]
                        ? { color: skillIconColorMap[skill] }
                        : undefined;

                      return (
                        <span key={skill} className="skill-badge">
                          {SkillIcon && (
                            <span className="skill-badge-icon" style={iconStyle} aria-hidden="true">
                              <SkillIcon />
                            </span>
                          )}
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="surface section-gap">
          <h2>{t("projects.title")}</h2>

          {loading && <div className="state-box">{t("projects.loading")}</div>}
          {error && <div className="state-box state-error">{t("projects.error")}</div>}
          {!loading && !error && groups.length === 0 && (
            <div className="state-box">{t("projects.empty")}</div>
          )}

          {!loading &&
            !error &&
            groups.map((group) => (
              <div key={group.key} className="project-group">
                <h3 className="project-group-title">{group.title}</h3>
                <div className="row g-3">
                  {group.repositories.map((repository) => {
                    const previewTopics = repository.topics
                      .filter((topic) => topic !== "portfolio" && !topic.endsWith("-project"))
                      .slice(0, 3);

                    return (
                      <div key={repository.id} className="col-md-6 col-xl-4">
                        <article className="repo-card h-100 compact-card">
                          <div className="repo-header mb-2">
                            <h4>{repository.name}</h4>
                            <a
                              className="btn btn-sm icon-btn btn-github-open"
                              href={repository.html_url}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <FaGithub /> {t("projects.openRepo")}
                            </a>
                          </div>

                          {repository.description && (
                            <p className="repo-description">{repository.description}</p>
                          )}

                          <div className="d-flex flex-wrap gap-2 mb-3">
                            {previewTopics.map((topic) => (
                              <span className="topic-badge" key={topic}>
                                {topic}
                              </span>
                            ))}
                          </div>

                          <div className="repo-stats-row">
                            <span>
                              <FaStar /> {repository.stargazers_count}
                            </span>
                            <span>
                              <FaCodeBranch /> {repository.forks_count}
                            </span>
                            <span>
                              <FaRegClock /> {t("projects.updated")}:{" "}
                              {formatIsoDate(
                                repository.pushed_at,
                                language === "ru" ? "ru-RU" : "en-US",
                              )}
                            </span>
                          </div>
                        </article>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
        </section>

        <section id="talks" className="surface section-gap">
          <h2>{t("talks.title")}</h2>
          <ul className="talks-list mb-0">
            {talks.map((talk) => (
              <li key={talk.url}>
                <a href={talk.url} target="_blank" rel="noreferrer">
                  {t(talk.titleKey)}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="portfolio-footer py-4">
        <div className="container-xl">
          <p className="mb-0 text-muted">{t("footer")}</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
