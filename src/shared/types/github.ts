export type GithubRepository = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  pushed_at: string;
  topics: string[];
};

export type RepositoryGroup = {
  key: string;
  title: string;
  repositories: GithubRepository[];
};
