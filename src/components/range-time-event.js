import React from "react";
import NewButton from "./newbutton";

const timing = {
    timeWeek:'from empty — until empty',
    timeMonth:'from empty — until new empty'
};

const RangeTimeEvent = () => {
    return (
        <div className="in-time">
            <NewButton/>
            <div className="time block active tab-1"><p>{timing.timeWeek}</p></div>
            <div className="time block tab-2"><p>{timing.timeMonth}</p></div>
        </div>
    )
}

export default RangeTimeEvent;