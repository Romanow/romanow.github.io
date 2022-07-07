import React, {FC, useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import {filter, includes} from "lodash";

import {GithubApi} from "../../GithubApi";
import {UserRepositoriesResponseType} from "../../types";
import Repositories from "../Repositories";

const devops = [
    "ansible-kafka", "ansible-kubernetes", "ansible-box-packer", "ansible-consul",
    "ansible-elastic", "ansible-elastic-role", "ansible-mongodb-role", "ansible-graylog"
];

const bmstu = ["lectures", "micro-services-v2", "serialization-protocols", "web-protocols", "restful"];

const work = ["jpa-example", "state-machine", "rsocket", "skip-method"];

const reports = [
    "docker-in-development", "merge-github-autograder", "app-deploy",
    "scc-warehouse", "scc-delivery", "scc-orders", "lecture-spring-boot-example"
];

const Loader: FC = () => {
    return (
        <div className="text-center my-5">
            <FontAwesomeIcon icon={faSpinner} pulse={true} size="2x"/>
        </div>
    );
}

const MainContent: FC = () => {
    const [repos, setRepos] = useState<UserRepositoriesResponseType>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        GithubApi.loadUserRepositories("Romanow")
            .then(data => {
                setLoading(false);
                setRepos(data);
            })
    }, []);

    return (
        <div>
            <div>
                <h2 className="h2">Bauman Moscow State Technical University</h2>
                {loading ? <Loader/> : <Repositories repos={filter(repos, r => includes(bmstu, r.name))}/>}
            </div>

            <div>
                <h2 className="h2">Lectures and Public Reports</h2>
                {loading ? <Loader/> : <Repositories repos={filter(repos, r => includes(reports, r.name))}/>}
            </div>

            <div>
                <h2 className="h2">Work</h2>
                {loading ? <Loader/> : <Repositories repos={filter(repos, r => includes(work, r.name))}/>}
            </div>

            <div>
                <h2 className="h2">DevOps</h2>
                {loading ? <Loader/> : <Repositories repos={filter(repos, r => includes(devops, r.name))}/>}
            </div>
        </div>
    )
}

export default MainContent;