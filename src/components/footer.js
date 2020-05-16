import React from "react";
import FooterAbout from "./footer-about";

import '../styles/footer-styles.css';

const Footer = () => {
    return (
        <footer>
            <div className="wrapper">
            <FooterAbout />
            </div>
        </footer>
    )
}

export default Footer;