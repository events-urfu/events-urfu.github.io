import React from "react";
import NewButton from "./newbutton";
import * as axios from "axios";

const timing = {
    timeWeek:'28 мая — 4 июня',
    timeMonth:'28 мая — 25 июня'
};

const apiURL = 'https://urfu-events-project.herokuapp.com/api/events/';

class RangeTimeEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            card: []
        }
        this.takeDate = this.takeDate.bind(this);
    }

    componentDidMount() {
        axios.get(apiURL).then(response => {
            const card = response.data;
            this.setState({card});
        })
    }

    takeDate() {
        return this.state.card.map(index => {
            return (
                <div>1</div>
            );
        })
    }

    render() {
            return (
                <div className="in-time">
                    <NewButton/>
                    <div className="time block active tab-1"><p>{timing.timeWeek}</p></div>
                    <div className="time block tab-2"><p>{timing.timeMonth}</p></div>

                </div>
            )
        }
    }

export default RangeTimeEvent;