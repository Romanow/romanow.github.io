import React, {FC} from "react";

import "./style.css";

const MainContent: FC = () => {
    return (
        <div className="main-content">
            <div className="container">
                <div>
                    <h2 className="h2">Education</h2>
                </div>

                <div>
                    <h2 className="h2">Bauman Moscow State Technical University</h2>
                </div>

                <div>
                    <h2 className="h2">Lectures and Public Reports</h2>
                </div>

                <div>
                    <h2 className="h2">Work</h2>
                </div>
            </div>
        </div>
    )
}

export default MainContent;