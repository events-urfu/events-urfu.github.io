import React from "react";

import * as axios from 'axios';

import gradient from '../img/gradient.jpg';
import ShowCardDescription from "./card-show-onclick";
import Description from "./description";
import {Link, Route, BrowserRouter, Switch} from "react-router-dom";

const styles = {
    color:'#000'
}

const apiURL = 'https://urfu-events-project.herokuapp.com/api/events/';
const API2 = 'https://urfu-events-project.herokuapp.com/api/events/1';

class MainContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
            card:[]
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            isToggleOn: !this.state.isToggleOn
        });
    }

    componentDidMount() {
        // axios.get(`${axios.defaults.apiURL}`).then(response => {
        //     const card = response.data;
        //     this.setState({card});
        // });
        axios.get(apiURL).then(response => {
            const card = response.data;
            this.setState({card});
        })
    }

    render() {
            return (
                <BrowserRouter>
                    <div id="tabs-content">
                        <div className="inside-container block active tab-1">
                            <div id='wrapp'>
                                {
                                    this.state.card.map(event_id => {
                                        return (
                                            <Link style={styles} to={"/api/events/" + event_id.pk}>
                                                <ShowCardDescription
                                                    idx={event_id}
                                                    isToggleOn={this.state.isToggleOn}
                                                    handleClick={this.handleClick}
                                                    name={event_id.title}
                                                    time={event_id.date}
                                                    place={event_id.place}
                                                >
                                                    <Switch>
                                                        <Route path='/' exact render={() => <MainContent /> } />
                                                        <Route
                                                            path="/api/events/:event_id"
                                                            render={props => {
                                                                return <Description
                                                                    name={event_id.title}
                                                                    date={event_id.date}
                                                                    place={event_id.place}
                                                                    member={event_id.member}
                                                                    description={event_id.description}
                                                                    image={event_id.image}
                                                                />
                                                            }}
                                                        />
                                                    </Switch>
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
                                    this.state.card.map(event_id => {
                                        return (
                                            <Link style={styles} to={"/api/events/" + event_id.pk}>
                                                <ShowCardDescription
                                                    idx={event_id}
                                                    isToggleOn={this.state.isToggleOn}
                                                    handleClick={this.handleClick}
                                                    name={event_id.title}
                                                    time={event_id.date}
                                                    place={event_id.place}
                                                >
                                                    <Switch>
                                                        <Route path='/' exact render={() => <MainContent /> } />
                                                        <Route
                                                            path="/api/events/:event_id"
                                                            render={props => {
                                                                return <Description
                                                                    name={event_id.title}
                                                                    date={event_id.date}
                                                                    place={event_id.place}
                                                                    member={event_id.member}
                                                                    description={event_id.description}
                                                                    image={event_id.image}
                                                                />
                                                            }}
                                                        />
                                                    </Switch>
                                                </ShowCardDescription>
                                            </Link>
                                        );
                                    })
                                }
                                {/*{*/}
                                {/*    [*/}
                                {/*        {event_id:1, title:"Мероприятие 1", date:'18:00', location:"Р-301", description:'Описание 1'},*/}
                                {/*        {event_id:2, title:"Мероприятие 2", date:'18:01', location:"Р-302", description:'Описание 2'},*/}
                                {/*        {event_id:3, title:"Мероприятие 3", date:'18:02', location:"Р-303", description:'Описание 3'}*/}
                                {/*    ].map(event_id => {*/}
                                {/*        return (*/}
                                {/*            <Link style={styles} to={"/api/events/" + event_id.event_id}>*/}
                                {/*                <ShowCardDescription*/}
                                {/*                    idx={event_id.event_id}*/}
                                {/*                    isToggleOn={this.state.isToggleOn}*/}
                                {/*                    handleClick={this.handleClick}*/}
                                {/*                    name={event_id.title}*/}
                                {/*                    time={event_id.date}*/}
                                {/*                    place={event_id.location}*/}
                                {/*                >*/}
                                {/*                    <Route*/}
                                {/*                        path="/api/events/:event_id"*/}
                                {/*                        render={props => {*/}
                                {/*                            return <Description*/}
                                {/*                                name={event_id.title}*/}
                                {/*                                date={event_id.date}*/}
                                {/*                                place={event_id.location}*/}
                                {/*                                member={event_id.member}*/}
                                {/*                                description={event_id.description}*/}
                                {/*                            />*/}
                                {/*                        }}*/}
                                {/*                    />*/}
                                {/*                </ShowCardDescription>*/}
                                {/*            </Link>*/}
                                {/*        );*/}
                                {/*    })*/}
                                {/*}*/}
                            </div>
                        </div>
                    </div>
                </BrowserRouter>
            )
    }
}

export default MainContent;

//содержимое карточки