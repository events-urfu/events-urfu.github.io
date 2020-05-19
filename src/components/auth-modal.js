import Authorisation from "./auth";

import React from "react";

import '../styles/auth-style.css';
import '../styles/header-styles.css';
import {Route, BrowserRouter, Switch} from "react-router-dom";

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {isShow: false};
        this.showHidePopup = this.showHidePopup.bind(this);
    }

    showHidePopup(){
        let isShow = this.state.isShow;
        this.setState({isShow: !isShow});
    }

    render() {
        return (
            <div>
                <div>
                    <li className="sign-in"><a href='/sign_up' onClick={this.showHidePopup}>Вход</a></li>
                    {this.state.isShow ? <Authorisation /> : null}
                </div>
            </div>
        );
    }
}

export default App;