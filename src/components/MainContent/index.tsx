import React, {FC, useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import {filter, find, includes} from "lodash";

import {GithubApi} from "../../GithubApi";
import {UserRepositoriesResponseType} from "../../types";
import Repositories from "../Repositories";

const devops = [
  "terraform-do-k8s",
  "terraform-aws-k8s",
  "ansible-box-packer",
  "project-operator",
  "ansible-kafka",
  "ansible-consul",
  "ansible-elastic",
  "ansible-elastic-role",
  "ansible-mongodb-role",
  "ansible-graylog"
];

const bmstu = [
  "lectures",
  "micro-services-v2",
  "simple-backend",
  "simple-frontend",
  "databases",
  "person-service",
  "serialization-protocols",
  "web-protocols",
  "restful",
  "rsocket"
];

const work = [
  "state-machine",
  "password-encryptor",
  "artemis-jms",
  "skip-method"
];

const reports = [
  "docker-in-development",
  "gateway-lecture",
  "jpa-example",
  "molecule-lecture",
  "analystdays-microservices",
  "merge-github-autograder",
  "app-deploy",
  "scc-contracts",
  "scc-warehouse",
  "scc-delivery",
  "scc-orders",
  "lecture-spring-boot-example"
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
        <div id="bmstu">
          <h2 className="h2">Bauman Moscow State Technical University</h2>
          {loading ? <Loader/> :
              <Repositories repos={bmstu.flatMap(name => find(repos, r => r.name === name) || [])}/>}
        </div>

        <div id="reports">
          <h2 className="h2">Lectures and Public Reports</h2>
          {loading ? <Loader/> : <Repositories repos={reports.flatMap(name => find(repos, r => r.name === name) || [])}/>}
        </div>

        <div id="work">
          <h2 className="h2">Work</h2>
          {loading ? <Loader/> : <Repositories repos={work.flatMap(name => find(repos, r => r.name === name) || [])}/>}
        </div>

        <div id="devops">
          <h2 className="h2">DevOps</h2>
          {loading ? <Loader/> : <Repositories repos={devops.flatMap(name => find(repos, r => r.name === name) || [])}/>}
        </div>
      </div>
  )
}

export default MainContent;