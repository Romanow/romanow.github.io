import {Octokit} from "@octokit/rest";
import {GetResponseDataTypeFromEndpointMethod} from "@octokit/types";

const octokit = new Octokit();

export type UserRepositoriesResponseType = GetResponseDataTypeFromEndpointMethod<typeof octokit.repos.listForUser>;
export type UserRepositoryResponseType = UserRepositoriesResponseType[0];
