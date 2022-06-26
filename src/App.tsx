import React from 'react';
import './App.css';

const iconPath = process.env.PUBLIC_URL + '/assets/';

function App() {
    return (
        <div className="content container-fluid">
            <div className="header"/>

            <div className="col-4">
                <div className="about">
                    <div className="container">
                        <div className="offset-3">
                            <div>
                                <img src={iconPath + "/profile.png"} className="rounded profile-picture" alt="profile"/>
                            </div>

                            <h2 className="h2 pt-2 pb-2">Romanov Alex</h2>

                            <div className="pt-1 pb-1">
                                <i className="bi bi-github fs-5" role="img" aria-label="GitHub">
                                    <a href="https://github.com/Romanow" className="link-dark text-decoration-none fst-normal"> &nbsp; Romanow</a>
                                </i>
                            </div>

                            <div className="pt-1 pb-1">
                                <i className="bi bi-telegram fs-5 text-info" role="img" aria-label="Telegram">
                                    <a href="https://t.me/romanowalex" className="link-dark text-decoration-none fst-normal"> &nbsp; romanowalex</a>
                                </i>
                            </div>

                            <div className="pt-1 pb-1">
                                <i className="bi bi-linkedin fs-5 text-primary" role="img" aria-label="Linkedin">
                                    <a href="https://www.linkedin.com/in/romanowalex/" className="link-dark text-decoration-none fst-normal"> &nbsp; Linkedin</a>
                                </i>
                            </div>

                            <div className="pt-1 pb-1">
                                <i className="bi bi-geo-alt-fill fs-5 text-danger" role="img" aria-label="Location">
                                    <span className="fst-normal text-dark">&nbsp; Yerevan</span>
                                </i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-8">
                <div className="main-content">

                </div>
            </div>

            <div className="footer"/>
        </div>
    );
}

export default App;
