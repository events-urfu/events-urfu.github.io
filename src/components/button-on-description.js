import React from "react";
import EventForm from "./event-form";

import notLiked from '../img/like.svg';
import liked from '../img/isLiked.svg';
import notShared from '../img/share.svg';
import shared from '../img/isShared.svg';

class ButtonOnDescription extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isClicked: true,
            isLiked: false,
            isShared: false,
            isSubmitted: false
        };
        this.handleClickShow = this.handleClickShow.bind(this);
    }

    handleClickShow = () => {
        this.setState({
            isClicked: !this.state.isClicked,
        });
    }


    handleClickSubmit = () => {
        this.setState({
            isSubmitted: !this.state.isSubmitted,
        });
    }

    handleLike = () => {
        this.setState({
            isLiked : !this.state.isLiked
        });
    }

    handleShare = () => {
        this.setState({
            isShared: !this.state.isShared
        });
    }

    render() {
        return (
            <div className='container-button'>
                <button className='submit' onClick={this.handleClickShow}>{this.state.isSubmitted ? 'вы записаны' : 'записаться'}</button>
                {!this.state.isClicked && <EventForm isSubmitted={this.state.isSubmitted} handleClickSubmit={this.handleClickSubmit}>{this.props.children}</EventForm>}
                <div className='like' onClick={this.handleLike}><img alt={'like'} src={this.state.isLiked ? liked  : notLiked}/></div>
                <div className='share' onClick={this.handleShare}><img alt='share' src={this.state.isShared ? shared : notShared}/></div>
            </div>
        )
    }
}

export default ButtonOnDescription;