import React, { Component } from 'react';

import '../styles/block-share.css';

class YandexShare extends Component {
    componentDidMount() {
        window.Ya.share2('ya', {
            theme: { services: 'vkontakte,facebook,telegram' },
            content: {
                url: 'https://loozmax.github.io/event-urfu/'
            }
        });
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return <div data-size='m' id="ya" data-title="Я иду на мероприятие УрФУ! А ты?" data-url='https://loozmax.github.io/event-urfu/'/>;
    }
}

export default YandexShare;