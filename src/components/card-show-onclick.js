import React from "react";

import crossImage from '../img/x.svg';
import Description from "./description";

class ShowCardDescription extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {isToggleCard: true};
    //     this.handleClickCard = this.handleClickCard.bind(this);
    // }
    //
    //
    // handleClickCard() {
    //     this.setState({
    //         isToggleCard: !this.state.isToggleCard
    //     });
    //     this.props.handleClick()
    // }

    render() {
        return (

            <div>
                <section>
                    <img style={{width:'369px', height:'197px'}}
                        src={this.props.image}
                        className='element'
                        // onClick={this.handleClickCard}
                    />
                <div className="event-name">{this.props.name}</div>
                <div className="out-block">
                    <div>{this.props.number}</div>
                    <div className="event-time"><p>{this.props.time}</p></div>
                    <div className="event-place"><p>{this.props.place}</p></div>
                </div>
                </section>

             {/*{!this.state.isToggleCard &&*/}
             {/*    <div className='content'>*/}
             {/*        {this.props.children}*/}
             {/*    </div>}*/}

             </div>
        )
    }
}

export default ShowCardDescription;
