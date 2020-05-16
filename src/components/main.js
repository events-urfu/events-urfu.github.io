import React from "react";

import '../styles/main-styles.css';

import MainContent from "./main-content";
import RangeTimeEvent from "./range-time-event";

const Main = () => {
    return (
        <div>
            <div className="main-block">
                <div className="wrapper">
                    <RangeTimeEvent />
                    <MainContent />
                </div>
            </div>
        </div>
    )
}

export default Main;

//обертка основого