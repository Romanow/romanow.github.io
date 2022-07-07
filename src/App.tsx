import React from "react";
import About from "./components/About";
import Header from "./components/Header";

import "./App.css";
import MainContent from "./components/MainContent";

const App = () => {
    return (
        <div className="content container-fluid">
            <div className="row">
                <Header/>

                <div className="col-md-4 col-lg-3">
                    <About/>
                </div>  

                <div className="col-md-8 col-lg-9">
                    <MainContent/>
                </div>
            </div>
        </div>
    );
}

export default App;
