import React from "react";
import '../styles/table-style.css';

import first from '../img/first.jpg'
import second from '../img/second.jpg'
import third from '../img/third.jpg'

class Tabled extends React.Component {


    render() {
        return(
            <table>
                <td className='td'>
                    <img className='brainFight' src={third} />
                    <p>Мозгобитва</p>
                </td>
                <td className='td'>
                    <img className='brainFight' src={second} />
                    <p>Встреча языкового клуба</p>
                </td>
                <td className='td'>
                    <img className='brainFight' src={first} />
                    <p>Запуск сайта УрФУ.События!</p>
                </td>
            </table>
        )
    }
}

export default Tabled;