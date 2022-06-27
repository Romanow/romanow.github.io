import React from "react";
import About from "./components/About";
import Header from "./components/Header";

import "./App.css";

const App = () => {
    return (
        <div className="content container-fluid">
            <Header/>

            <div className="col-4">
              <About/>
            </div>

            <div className="col-8">

            </div>
        </div>
    );
}

export default App;
