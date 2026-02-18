import { GithubRepository } from "../types/github";

const USERNAME = "Romanow";
const BASE_HEADERS = {
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
};

type SearchRepository = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  pushed_at: string;
  topics?: string[];
  owner?: { login?: string };
};

type SearchResponse = {
  items: SearchRepository[];
};

async function requestJson<T>(url: string): Promise<T> {
  const response = await fetch(url, { headers: BASE_HEADERS });

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`);
  }

  return (await response.json()) as T;
}

async function loadRepositoryTopics(owner: string, repository: string): Promise<string[]> {
  try {
    const result = await requestJson<{ names: string[] }>(
      `https://api.github.com/repos/${owner}/${repository}/topics`,
    );

    return result.names;
  } catch {
    return [];
  }
}

export async function loadPortfolioRepositories(): Promise<GithubRepository[]> {
  const query = encodeURIComponent(`user:${USERNAME} topic:portfolio`);
  const searchResult = await requestJson<SearchResponse>(
    `https://api.github.com/search/repositories?q=${query}&sort=updated&order=desc&per_page=100`,
  );

  return Promise.all(
    searchResult.items.map(async (repo) => {
      const topics =
        repo.topics && repo.topics.length > 0
          ? repo.topics
          : await loadRepositoryTopics(repo.owner?.login || USERNAME, repo.name);

      return {
        id: repo.id,
        name: repo.name,
        html_url: repo.html_url,
        description: repo.description,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        pushed_at: repo.pushed_at,
        topics,
      };
    }),
  );
}
