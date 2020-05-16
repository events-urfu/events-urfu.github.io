import React from "react";

const EventForm = props => {
        return (
            <div className='event-form'>
                <p className='title-form'>Здесь вы можете записаться на выбранное мероприятие</p>
                <h2>Инструкция по записи на мероприятие</h2>
                <ol>
                    <li>Введите существующую академическую группу</li>
                    <li>Введите свое имя и фамилию</li>
                    <li>Нажмите на кнопку <span>отправить</span></li>
                </ol>
                <div className='container-input'>
                    <input className='input-group' type='text' placeholder='Введите свою группу' />
                    <input className='input-name' type='text' placeholder='Теперь введите сюда свое имя и фамилию' />
                    <button className='send-form' onClick={props.handleClickSubmit}>
                        {!props.isSubmitted ? 'Отправить' : 'Отправлено'}
                    </button>

                </div>
            </div>
        )
}

export default EventForm;
