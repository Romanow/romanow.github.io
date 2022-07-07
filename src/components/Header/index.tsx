import React, {FC} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faP} from "@fortawesome/free-solid-svg-icons";

import "./style.css";

const Header: FC = () => {
    return (
        <nav id="navbar" className="navbar navbar-expand-sm sticky-sm-top bg-light mb-3">
            <div className="container-fluid">
                <a className="navbar-brand icon-logo" href="#">
                    <FontAwesomeIcon icon={faP}/>
                </a>

                <button className="navbar-toggler" type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse px-sm-5" id="navbarNav">
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <a className="nav-link link-dark text-decoration-none fst-normal" href="#bmstu">BMSTU</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link-dark text-decoration-none fst-normal" href="#reports">Reports</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link link-dark text-decoration-none fst-normal" href="#work">Work</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link link-dark text-decoration-none fst-normal" href="#devops">DevOps</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;