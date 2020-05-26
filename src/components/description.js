import React from "react";

import '../styles/description-style.css';

import testPic from '../img/gradient.jpg';
import Title from "./checkbox-label";
import ButtonOnDescription from "./button-on-description";

const Description = (props) => {
    return (
        <div className='description-block'>
            <img className='description-pic' src={testPic} alt={'pic'} />
            <div className='data'>
                <p className='data-name'>{props.name}</p>
                <p className='data-time'>{props.date}</p>
                <p className='data-cab'>{props.place}</p>
                <p className='data-member'>{props.member}</p>
                <div className='data-checkbox'>
                    <Title />
                </div>
                <div className='data-button'>
                    <ButtonOnDescription />
                </div>
            </div>
            <div className='about'>
                <h1 className='about-event'>О событии</h1>
                <div className='about-block'>
                    <p>
                        {props.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Description;