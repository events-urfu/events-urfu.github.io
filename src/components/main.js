import React from "react";

import '../styles/main-styles.css';
import MainContent from "./main-content";
import RangeTimeEvent from "./range-time-event";
import EventForm from "./event-form";

const Main = () => {
    return (
        <div className="main-block">
            <div className="wrapper">
                <RangeTimeEvent />
                <MainContent />
                {/*<EventForm isSubmitted={this.state.isSubmitted} handleClickSubmit={this.handleClickSubmit}></EventForm>*/}
            </div>
        </div>
    )
}

export default Main;
