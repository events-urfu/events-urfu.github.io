import React from "react";

import '../styles/description-style.css';

import Title from "./checkbox-label";
import ButtonOnDescription from "./button-on-description";

const Description = (props) => {
    return (
        <div className='description-block'>
            <img className='description-pic' src='/#' />
            <div className='data'>
                <p className='data-name'>{props.name}</p>
                <p className='data-time'>{props.time}</p>
                <p className='data-cab'>{props.audience}</p>
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
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt <br/> ut laoreet dolore mag
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore mag
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Description;