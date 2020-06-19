import React from "react";

import '../styles/description-style.css';

import EventForm from "./event-form";
import liked from "../img/isLiked.svg";
import notLiked from "../img/like.svg";
import shared from "../img/isShared.svg";
import notShared from "../img/share.svg";
import BlockShare from "./block-with-sharing";
import crossImage from "../img/x.svg";


import first from '../img/first.jpg'
import second from '../img/second.jpg'
import third from '../img/third.jpg'

import * as axios from "axios";
import {withRouter} from "react-router-dom";

class Description extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            isClicked: true,
            isLiked: false,
            isShared: false,
            isSubmitted: false,
            clicked:false,
            card:[],

            user: null
        };
    }

    changeTitle = (e) => {
        console.log(this.state.clicked);
        if (e.target.className==='check') {
            this.setState({clicked: !this.state.clicked});
        }
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

    async componentDidMount() {
        const { id } = this.props.match.params;
        console.log(id);
        if (id) {
            const res = await axios.get(
                `https://urfu-events-project.herokuapp.com/api/events/${id}/`
            );
            this.setState({ user: res.data });
        }
    }


    render() {
        const { user } = this.state;
        return (
            <div className="content">
                <a href='/event-urfu/'>
                    <img alt='close' src={crossImage} className='close' onClick={this.props.handler} />
                </a>
                <img className='description-pic'
                     src={
                         (user && user.pk === 5 && second)
                         || (user && user.pk === 8 && third)
                         || (user && user.pk === 2 && first)
                     }
                />
                <div className='data'>
                    <p className='data-name'>{user && `${user.title}`}</p>
                    <p className='data-time'>{user && `${user.datetime}`}</p>
                    <p className='data-cab'>{user && `${user.place}`}</p>
                    <p className='data-member'>{user && `${user.members_count}`}</p>
                    <div className='checkbox-container'>
                        <input onClick={this.changeTitle} className='check' id='checkboxTest' type='checkbox' checked={this.state.clicked} />
                        <label htmlFor='checkboxTest' className='checkbox-text'>
                            {!this.state.clicked ? 'напомнить мне' : 'вам на почту будет доставлено письмо' }
                        </label>
                    </div>
                    <div className='data-button'>
                        <div className='container-button'>
                            <button className='submit' onClick={this.handleClickShow}>{this.state.isSubmitted ? 'вы записаны' : 'записаться'}</button>
                            {!this.state.isClicked && <EventForm isSubmitted={this.state.isSubmitted} handleClickSubmit={this.handleClickSubmit}>{this.props.children}</EventForm>}
                            <div className='like' onClick={this.handleLike}><img alt={'like'} src={this.state.isLiked ? liked  : notLiked}/></div>
                            <div className='share' onClick={this.handleShare}><img alt='share' src={this.state.isShared ? shared : notShared}/></div>
                            {this.state.isShared ? <BlockShare closeShare={this.handleShare} /> : null}
                        </div>
                    </div>
                </div>
                <div className={this.state.isClicked ? 'about' : 'about clicked'}>
                    <h1 className='about-event'>О событии</h1>
                    <div className='about-block'>
                        <p>
                            {user && `${user.description}`}
                        </p>
                    </div>
                </div>
                </div>
        )
    }
}

export default withRouter(Description);