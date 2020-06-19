import Authorisation from "./auth";

import React from "react";

import '../styles/auth-style.css';
import '../styles/header-styles.css';
import {Route, BrowserRouter, NavLink, Switch} from "react-router-dom";


const style = {
    color:'#000'
}

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {isShow: false};
        this.showHidePopup = this.showHidePopup.bind(this);
    }

    showHidePopup(){
        console.log(this.state.isShow);
        this.setState({isShow: !this.state.isShow});
    }

    render() {
        return (
            <div>
                <div>
                    <BrowserRouter>
                        <button onClick={this.showHidePopup} className="sign-in"><NavLink style={style} to='/sign_up'>Вход</NavLink></button>
                        <Switch>
                            <Route path='/sign_up'>
                                {this.state.isShow ? <Authorisation closePopup={this.showHidePopup} /> : null}
                            </Route>
                        </Switch>
                    </BrowserRouter>
                </div>
            </div>
        );
    }
}

export default App;