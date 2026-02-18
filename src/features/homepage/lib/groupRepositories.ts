import { RepositoryGroup, GithubRepository } from "../../../shared/types/github";

function titleFromKey(value: string): string {
  return value
    .split("-")
    .filter(Boolean)
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

export function groupByProjectTopics(repositories: GithubRepository[]): RepositoryGroup[] {
  const grouped = new Map<string, GithubRepository[]>();

  repositories.forEach((repository) => {
    if (!repository.topics.includes("portfolio")) {
      return;
    }

    const projectTopics = repository.topics.filter((topic) => topic.endsWith("-project"));
    const topicList = projectTopics.length > 0 ? projectTopics : ["other-project"];

    topicList.forEach((topic) => {
      const key = topic.replace(/-project$/, "") || "other";
      const list = grouped.get(key) || [];
      list.push(repository);
      grouped.set(key, list);
    });
  });

  return Array.from(grouped.entries())
    .map(([key, repos]) => ({
      key,
      title: titleFromKey(key),
      repositories: repos.sort((a, b) => {
        if (b.stargazers_count !== a.stargazers_count) {
          return b.stargazers_count - a.stargazers_count;
        }

        return a.name.localeCompare(b.name);
      }),
    }))
    .sort((a, b) => a.title.localeCompare(b.title));
}
