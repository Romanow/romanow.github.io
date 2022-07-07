import React, {FC} from "react";
import {UserRepositoriesResponseType} from "../../types";
import Repository from "../Repository";

type Props = {
    repos: UserRepositoriesResponseType
}

const Repositories: FC<Props> = ({repos}) => {
    return (
        <div className="container-fluid">
            <div className="row">
                {repos.map(r => (
                    <div key={r.name} className="col-sm-6">
                        <Repository repo={r}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Repositories;