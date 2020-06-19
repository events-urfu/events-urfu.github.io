import React from "react";
import YandexShare from "./share";

import '../styles/block-share.css'

class BlockShare extends React.Component {
    render() {
        return (
            <div>
                <div className='block-share'>
                    <div className='share-block'>
                        <p>Привет</p>
                        <p>Делись этим мероприятием и приводи друзей!</p>
                    </div>
                    <YandexShare />
                </div>
                <div className='overlay_share' onClick={this.props.closeShare} />
            </div>
        )
    }
}

export default BlockShare;