import React from "react";

import '../styles/footer-styles.css';
import '../styles/common-styles.css'

const FooterAbout = () => {
    return (
        <div>
            <div className="find-us">
                <p>Союз Студентов</p>
                <p>ул. Мира, 19, ауд. ГУК-309</p>
                <p>пр. Ленина, 51, ауд. ГУК-119</p>
            </div>
            <div className="community"><p><a href='https://vk.com/posnews' target='_blank' rel="noopener noreferrer">Сообщество Вконтакте</a></p></div>
            <div className="website"><p>Страница на сайте</p></div>
        </div>
    )
}

export default FooterAbout;