import React from "react";

import crossImage from '../img/close-cross.svg';

class ShowCardDescription extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleCard: true};
        this.handleClickCard = this.handleClickCard.bind(this);
    }


    handleClickCard() {
        this.setState({
            isToggleCard: !this.state.isToggleCard
        });
        this.props.handleClick()
    }


    render() {
        return (
            <div>
                <section>
                {this.props.isToggleOn && (<div className='element' onClick={this.handleClickCard}>
                </div>)}
                <div className="event-name">{this.props.name}</div>
                <div className="out-block">
                    <div className="event-time"><p>{this.props.time}</p></div>
                    <div className="event-place"><p>{this.props.place}</p></div>
                </div>
                </section>
                {!this.state.isToggleCard &&
                <div className='content'>
                    <div onClick={this.handleClickCard}>
                        <img alt={'close'} className='close' src={crossImage}/>
                    </div>
                    {this.props.children}</div>}</div>
        )
    }
}

export default ShowCardDescription;
