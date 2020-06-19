import React from "react";

import first from '../img/first.jpg'
import second from '../img/second.jpg'
import third from '../img/third.jpg'

import * as axios from 'axios';

import ShowCardDescription from "./card-show-onclick";
import Description from "./description";
import {Link, Route, BrowserRouter, Switch} from "react-router-dom";

const styles = {
    color:'#000'
}

const apiURL = `https://urfu-events-project.herokuapp.com/api/events/`;

class MainContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // isToggleOn: true,
            users: []
        };
        // this.handleClick = this.handleClick.bind(this);
    }

    // handleClick() {
    //     console.log(this.state.isToggleOn);
    //     this.setState({
    //         isToggleOn: !this.state.isToggleOn
    //     });
    // }

    // componentDidMount() {
    //     axios.get(apiURL).then(response => {
    //         const card = response.data;
    //         this.setState({card});
    //     })
    // }

    async componentDidMount() {
        const res = await axios.get(
            "https://urfu-events-project.herokuapp.com/api/events/"
        );
        this.setState({ users: res.data });
    }


    render() {
            return (
                <BrowserRouter>
                    <div id="tabs-content">
                        <div className="inside-container block active tab-1">
                            <Switch>
                                <Route exact path="/event-urfu/">
                                    {this.state.users.map(user => {
                                        return (
                                            <Link
                                                style={styles}
                                                to={'/api/events/' + user.pk}
                                            >
                                                <ShowCardDescription
                                                    name={user.title}
                                                    time={user.datetime}
                                                    place={user.place}
                                                    image={(user.pk === 5 && second)
                                                    || (user.pk === 8 && third)
                                                    || (user.pk === 2 && first)}
                                                />
                                            </Link>
                                        );
                                    })}
                                </Route>
                                <Route path="/api/events/:id">
                                    <Description />
                                </Route>
                            </Switch>

                        </div>

                        <div className="inside-container block tab-2 ">
                            <Switch>
                                <Route exact path="/event-urfu/">
                                    {this.state.users.map(user => {
                                        return (
                                            <Link
                                                style={styles}
                                                to={'/api/events/' + user.pk}
                                            >
                                                <ShowCardDescription
                                                    name={user.title}
                                                    time={user.datetime}
                                                    place={user.place}
                                                    image={(user.pk === 5 && second)
                                                    || (user.pk === 8 && third)
                                                    || (user.pk === 2 && first)}
                                                />
                                            </Link>
                                        );
                                    })}
                                </Route>
                                <Route path="/api/events/:id">
                                    <Description />
                                </Route>
                            </Switch>
                            </div>
                    </div>
                </BrowserRouter>
            )
    }
}

export default MainContent;