import React from "react";

import ShowCardDescription from "./card-show-onclick";
import Description from "./description";
import {Link, Route, BrowserRouter} from "react-router-dom";

const styles = {
    color:'#000'
}

class MainContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            isToggleOn: !this.state.isToggleOn
        });
    }

    render() {
            return (
                <BrowserRouter>
                    <div id="tabs-content">
                        <div className="inside-container block active tab-1">
                            <div id='wrapp'>
                                {
                                    [
                                        {key:1, title:"Мероприятие 1", date:'18:00', location:"Р-301", member:"1", description:'Описание 1'},
                                        {key:2, title:"Мероприятие 2", date:'18:01', location:"Р-302", member:"11", description:'Описание 2'},
                                        {key:3, title:"Мероприятие 3", date:'18:02', location:"Р-303", member:"111", description:'Описание 3'},
                                        {key:4, title:"Мероприятие 4", date:'18:04', location:"Р-304", member:"1111", description:'Описание 4'}
                                        ].map(index => {
                                        return (
                                            <Link style={styles} to={"/event/" + index + 1}>
                                                <ShowCardDescription
                                                    idx={index}
                                                    isToggleOn={this.state.isToggleOn}
                                                    handleClick={this.handleClick}
                                                    name={index.title}
                                                    time={index.date}
                                                    place={index.location}
                                                >
                                                    <Route
                                                        path="/event/:index"
                                                        render={props => {
                                                            return <Description
                                                                name={index.title}
                                                                date={index.date}
                                                                place={index.location}
                                                                member={index.member}
                                                                description={index.description}
                                                            />
                                                        }}
                                                    />
                                                </ShowCardDescription>
                                            </Link>
                                        );
                                    })
                                }
                            </div>
                        </div>

                        <div className="inside-container block tab-2 ">
                            <div id='wrapp'>
                                {
                                    [
                                        {key:1, title:"Мероприятие 1", date:'18:00', location:"Р-301", member:"1", description:'Описание 1'},
                                        {key:2, title:"Мероприятие 2", date:'18:01', location:"Р-302", member:"11", description:'Описание 2'},
                                        {key:3, title:"Мероприятие 3", date:'18:02', location:"Р-303", member:"111", description:'Описание 3'}
                                    ].map(index => {
                                        return (
                                            <Link style={styles} to={"/event/" + index + 1}>
                                                <ShowCardDescription
                                                    idx={index}
                                                    isToggleOn={this.state.isToggleOn}
                                                    handleClick={this.handleClick}
                                                    name={index.title}
                                                    time={index.date}
                                                    place={index.location}
                                                >
                                                    <Route
                                                        path="/event/:index"
                                                        render={props => {
                                                            return <Description
                                                                name={index.title}
                                                                date={index.date}
                                                                place={index.location}
                                                                member={index.member}
                                                                description={index.description}
                                                            />
                                                        }}
                                                    />
                                                </ShowCardDescription>
                                            </Link>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </BrowserRouter>
            )
    }
}

export default MainContent;

//содержимое карточки