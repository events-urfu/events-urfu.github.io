import Authorisation from "./auth";

import React from "react";

import '../styles/auth-style.css';
import '../styles/header-styles.css';
import {Route, BrowserRouter, NavLink} from "react-router-dom";


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
        let isShow = this.state.isShow;
        this.setState({isShow: !isShow});
    }

    render() {
        return (
            <div>
                <div>
                    <BrowserRouter>
                        <li onClick={this.showHidePopup} className="sign-in"><NavLink style={style} to='/sign_up'>Вход</NavLink></li>
                        <Route path='/sign_up'>
                            {this.state.isShow ? <Authorisation /> : null}
                        </Route>
                    </BrowserRouter>
                </div>
            </div>
        );
    }
}

export default App;