import React from "react";

import '../styles/auth-style.css';

class Authorisation extends React.Component {
    render() {
        return (
            <div>
                <div className="login-form">
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