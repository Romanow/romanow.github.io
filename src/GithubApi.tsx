import {Octokit} from "@octokit/rest";
import {UserRepositoriesResponseType} from "./types";

const octokit = new Octokit();

export const GithubApi = {
    async loadUserRepositories(username: string): Promise<UserRepositoriesResponseType> {
        return await octokit.rest.repos.listForUser({username, per_page: 150})
            .then(value => value.data)
    }
}