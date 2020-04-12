import React from "react";
import Time from './time';

import MainContent from "./main-content";

const Main = () => {
    return (
        <main className="main-block">
            <div className="wrapper">
                <Time />
                <MainContent />
            </div>
        </main>
    )
}

export default Main;

//обертка основого контента