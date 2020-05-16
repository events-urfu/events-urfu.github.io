import React from "react";
import App from "./auth-modal";

import '../styles/header-styles.css';

import logo from '../img/logo_1.png';
import search from '../img/search.svg';

function Header(){
    return (
        <header>
            <div className="wrapper">
                <div className="container-signin">
                    <ul>
                        <li className="logo"><a href="main.html"><img alt="#" className="pic-logo" src={logo}/></a></li>
                        <li><img alt='#' className='pic-search' src={search}/><input className="search" placeholder="Поиск по мероприятиям и датам (dd:mm:yyyy)"/></li>
                        <App />
                    </ul>
                </div>
            </div>
        </header>
    )
}



export default Header;