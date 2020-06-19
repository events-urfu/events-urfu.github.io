import React from 'react';
import ReactDOM from 'react-dom';
import Favicon from 'react-favicon';
import './styles/index.css';
import './styles/common-styles.css';


import Header from "./components/header";
import Main from './components/main';
import Footer from "./components/footer";
import Preloader from "./components/preloader";
import Authorisation from "./components/auth";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Description from "./components/description";
import second from "./img/second.jpg";
import first from "./img/first.jpg";
import third from "./img/third.jpg";
import * as axios from "axios";
import MainContent from "./components/main-content";
import NotFound from "./components/404NotFound";


class SiteView extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Favicon url='http://faviconka.ru/ico/faviconka_ru_1373.gif' />
                {/*<Preloader />*/}
                <Header />
                <Main />
                <Footer/>
                <BrowserRouter>
                    <Switch>
                        {/*<Route path='/api/events/5'>*/}
                        {/*    <Description name='fdsfffff'/>*/}
                        {/*</Route>*/}
                        {/*<Route path='/api/events/2'>*/}
                        {/*    <Description name='suka rabotai' />*/}
                        {/*</Route>*/}
                        {/*<Route exact path='/' component={MainContent} />*/}
                        {/*<Route path='*' component={NotFound} />*/}
                    </Switch>
                </BrowserRouter>
            </React.Fragment>
        )
    }
}

// ========================================

ReactDOM.render(
    <SiteView />,
    document.getElementById('root')
);
