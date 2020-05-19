import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.css';
import './styles/common-styles.css';

import Header from "./components/header";
import Main from './components/main';
import Footer from "./components/footer";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Authorisation from "./components/auth";
import Home from "./components/home";
import MainContent from "./components/main-content";
import Cards from "./components/cards";

class SiteView extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                <Header />
                <Main />
                <Footer/>
                </React.Fragment>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/sign_up' component={Authorisation}/>
                    <Route path='/api/events/:event_id' component={MainContent} />
                </Switch>
            </BrowserRouter>
        )
    }
}

// ========================================

ReactDOM.render(
    <SiteView />,
    document.getElementById('root')
);
