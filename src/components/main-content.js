import React from "react";
import Cards from "./cards";

const MainContent = () => {
    return (
        <div id="tabs-content">
            <div className="inside-container block active tab-1">
                <Cards name='empty' time='emtpy' place='empty, empty'/>
                <Cards name='empty' time='emtpy' place='empty, empty'/>
                <Cards name='empty' time='emtpy' place='empty, empty'/>
            </div>

            <div className="inside-container block tab-2 ">
            <Cards name='empty' time='emtpy' place='empty, empty' />
            <Cards name='empty' time='emtpy' place='empty, empty' />
            </div>

            {/*<div className="hider-content"></div>*/}
        </div>
    )
}

export default MainContent;

//содержимое карточки