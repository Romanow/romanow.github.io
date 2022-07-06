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

                <div className="col-4">
                    <About/>
                </div>  

                <div className="col-8">
                    <MainContent/>
                </div>
            </div>
        </div>
    );
}

export default App;
