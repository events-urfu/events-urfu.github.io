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
                        {this.props.isToggleOn && <div className='element' onClick={this.handleClickCard}/>}
                        <div className="event-name">NAME</div>
                        <div className="out-block">
                            <div className="event-time"><p>TIME</p></div>
                            <div className="event-place"><p>PLACE</p></div>
                        </div>
                    </section>
                    {!this.state.isToggleCard &&
                    <div className='content' >
                        <div onClick={this.handleClickCard}>
                            <img className='close' src={crossImage} />
                        </div>{this.props.children}</div>}
                </div>
            )
        }
    }

export default ShowCardDescription;
