import React from "react";

import axios from 'axios';
import {Spring} from "react-spring/renderprops";
const url = `https://urfu-events-project.herokuapp.com/test/`;


class EventForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            group:''
        }
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUserInputGroup = this.handleUserInputGroup.bind(this);
    }

    handleUserInputGroup = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    // handleSubmit(event) {
    //     event.preventDefault();
    //     const isValid = this.validate();
    //     if (isValid) {
    //         console.log(this.state);
    //     }
    // }

    // submit() {
    //     fetch(url,{
    //         method:'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({group:15})
    //     })
    //         .then(res => {
    //             return res.json()
    //     })
    //         .then(data => console.log(data))
    //         .catch(error => console.log('error'))
    // }

    submitHandler = e => {
        e.preventDefault();
        console.log(this.state);
        axios.post(`https://urfu-events-project.herokuapp.com/test/`, this.state)
            .then(response => {
                console.log(response)
            })
            .catch (error => {
                console.log(error)
            })
    }

    render() {
        const {name, group} = this.state;
        return (
            <Spring
                from={{marginBottom:'200px'}}
                to = {{marginBottom:'-500px'}}
            >
                {props => (
                    <div style={props}>
                        <div className='event-form'>
                            <form onSubmit={this.submitHandler}>
                                <div className='container-input'>
                                        <input required onChange={this.handleUserInputGroup}
                                               className='input-group'
                                               placeholder='Введите свою группу'
                                               name='group'
                                               value={group}
                                        />
                                        <div>{this.state.groupError}</div>
                                        <span className='asteriks1'>*</span>
                                        <input required
                                               onChange={this.handleUserInputGroup}
                                               className='input-name'
                                               placeholder='Введите свое имя'
                                               name='name'
                                               value={name}
                                        />
                                        <span className='asteriks2'>*</span>
                                        <button type='submit'
                                                className='send-form'
                                                onClick={() => {this.props.handleClickSubmit()}}
                                        >{!this.props.isSubmitted ? 'Отправить' : 'Отправлено'}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </Spring>
        )
    }
}

export default EventForm;


