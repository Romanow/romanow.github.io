import React, {FC} from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin, faTelegram} from "@fortawesome/free-brands-svg-icons";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";

import "./style.css";

const About: FC = () => {
    const iconPath = process.env.PUBLIC_URL + "/assets/";
    return (
        <div className="about">
            <div className="container">
                <div className="offset-3">
                    <div>
                        <img src={iconPath + "/profile.png"} className="rounded profile-picture" alt="profile"/>
                    </div>

                    <h2 className="h2 pt-2 pb-2">Romanov Alex</h2>

                    <div className="pt-1 pb-1 fs-5">
                        <FontAwesomeIcon icon={faGithub}/>
                        <a href="https://github.com/Romanow"
                           className="link-dark text-decoration-none fst-normal"> &nbsp; Romanow</a>
                    </div>

                    <div className="pt-1 pb-1 fs-5 text-info">
                        <FontAwesomeIcon icon={faTelegram}/>
                        <a href="https://t.me/romanowalex"
                           className="link-dark text-decoration-none fst-normal"> &nbsp; romanowalex</a>
                    </div>

                    <div className="pt-1 pb-1 fs-5 text-primary">
                        <FontAwesomeIcon icon={faLinkedin}/>
                        <a href="https://www.linkedin.com/in/romanowalex/"
                           className="link-dark text-decoration-none fst-normal"> &nbsp; Linkedin</a>
                    </div>

                    <div className="pt-1 pb-1 fs-5 text-danger">
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <span className="fst-normal text-dark"> &nbsp; Yerevan</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;