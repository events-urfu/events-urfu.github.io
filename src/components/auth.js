import React from "react"

import '../styles/auth-style.css'
import crossImage from "../img/x.svg"

const styles = {
    w: {
        color: '#ff4444',
        fontWeight: 'bold'
    },
    m: {
        color: '#4285F4',
        fontWeight: 'bold'
    },
    s: {
        color: '#00C851',
        fontWeight: 'bold'
    }

}


class Authorisation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect:false,
            email:'',
            password:'',
            pwd: "неизвестно"
        }
        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleUserInput = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    handleChange(e){
        let password = e.target.value;
        let capitals = /[A-Z]/,
            smalls = /[a-z]/,
            nums  = /[0-9]/;
        if (password.length < 8) {
            return this.setState({ pwd: "низкая" });
        } else if(smalls.test(password) && nums.test(password) && capitals.test(password)){
            this.setState({
                pwd: "высокая"
            });
        } else if(smalls.test(password) && nums.test(password)){
            this.setState({
                pwd: "средняя"
            });
        } else if(capitals.test(password) && nums.test(password)){
            this.setState({
                pwd: "средняя"
            });
        } else if(capitals.test(password) && smalls.test(password)){
            this.setState({
                pwd: "средняя"
            });
        } else if(capitals.test(password)){
            this.setState({
                pwd: "низкая"
            });
        } else if(smalls.test(password)){
            this.setState({
                pwd: "низкая"
            });
        } else if(nums.test(password)){
            this.setState({
                pwd: "низкая"
            });
        }
    }

    render() {
        let strength = this.state.pwd;
        return (
            <div>
                <div className='overlay'>
                    <form>
                        <div className="login-form">
                            <div className='first-block' onClick={this.props.closePopup} />
                            <div className='second-block' onClick={this.props.closePopup}/>
                            <div className='top-block' onClick={this.props.closePopup} />
                            <div className='bottom-block' onClick={this.props.closePopup} />
                            {/*<img style={{padding:'7px'}} alt={'close'} className='close authorisation' src={crossImage} onClick={this.props.closePopup} />*/}
                            <p className="enter">Вход</p>
                            <a href='http://urfu-events-project.herokuapp.com/social/login/vk-oauth2' className="vk">ВКонтакте</a>
                            <div className="info-login">
                                <input required
                                       className='input-email'
                                       type='email' name='email'
                                       value={this.state.email}
                                       onChange={this.handleUserInput}
                                       placeholder='Почта'
                                />
                                <input required
                                       className='input-pass'
                                       type="password"
                                       name='password'
                                       maxLength='15'
                                       minLength='6'
                                       onChange={this.handleChange}
                                       placeholder='Пароль'
                                />
                                <p style={{textAlign:'center'}}>Надежность: <span style={strength?strength==='низкая'?styles.w:strength==='средняя'?styles.m:strength==='высокая'?styles.s:styles.m:styles.m
                                }>{strength}</span></p>
                                <a className="iForgotPassword" href="/#">забыли пароль?</a>
                            </div>
                            <button className="enter-button">Войти</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Authorisation;