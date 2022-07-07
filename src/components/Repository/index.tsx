import React, {FC} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faCodeFork, faStar} from "@fortawesome/free-solid-svg-icons";
import {UserRepositoryResponseType} from "../../types";
import moment from "moment";

import "./style.css";

type Props = {
    repo: UserRepositoryResponseType
}

const Repository: FC<Props> = ({repo}) => {
    return (
        <div className="repository-box container">
            <div className="row">
                <h3 className="my-1 container">
                    <div className="row justify-content-between">
                        <span className="col-auto text-lowercase text-decoration-none text-dark">{repo.name}</span>

                        <a href={repo.html_url} className="col-auto btn btn-outline-dark me-2">
                            <FontAwesomeIcon icon={faGithub}/> &nbsp; Go to repo
                        </a>
                    </div>
                </h3>

                {repo.description && <span className="my-1">{repo.description}</span>}

                {/*languages <-- line*/}

                <div className="my-1 container">
                    <div className="row justify-content-start">
                        <div className="col-auto">
                            <FontAwesomeIcon icon={faStar}/>
                            <a href={repo.stargazers_url} className="text-dark text-decoration-none fst-normal">
                                &nbsp;Stars <span className="invert">{repo.stargazers_count}</span>
                            </a>
                        </div>

                        <div className="col-auto">
                            <FontAwesomeIcon icon={faCodeFork}/>
                            <a href={repo.forks_url} className="text-dark text-decoration-none fst-normal">
                                &nbsp;Stars <span className="invert">{repo.forks_count}</span>
                            </a>
                        </div>

                        <div className="col-auto">
                            <span className="text-dark fw-lighter">Updated {moment(repo.updated_at).format('DD-MM-YYYY hh:mm')}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Repository;