import React from "react";

import '../styles/preloader-style.css'

class Preloader extends React.Component {
    render() {
        return (
            <div className="visible" id="preloader">
                <div className="preloader__image_animate" />
            </div>
        )
    }
}

export default Preloader;