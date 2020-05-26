import React from "react";

import '../styles/auth-style.css';
import crossImage from "../img/close-cross.svg";
import {BrowserRouter, Route, Switch} from "react-router-dom";

const styles = {
    afterClick:{display:'none'},
    beforeClick:{display:'block'}
}

class Authorisation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isClickedOutside: false
        }
        this.handleClickBackground = this.handleClickBackground.bind(this);
    }

    handleClickBackground = (e) => {
        if (e.target.className==='overlay' || e.target.className==='close authorisation') {
            this.setState( {isClickedOutside: !this.state.isClickedOutside})
        }
    }

    render() {
        return (
            <div className={'overlay'} onClick={this.handleClickBackground} style={this.state.isClickedOutside ? styles.afterClick : styles.beforeClick} >
                <div className="login-form">
                    <img alt={'close'} className='close authorisation' src={crossImage} />
                    <p className="enter">Вход</p>
                    <button className="vk">Вконтакте</button>
                    <div className="info-login">
                        <input required="required" type='email' placeholder="Почта"/>
                        <input required="required" type="password" placeholder="Пароль"/>
                        <a className="iForgotPassword" href="/#">забыли пароль?</a>
                    </div>
                    <button className="enter-button">Войти</button>
                    <div className="registration">Зарегистрироваться</div>
                </div>
            </div>
        );
    }
}

export default Authorisation;