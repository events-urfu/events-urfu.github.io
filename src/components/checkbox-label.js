import React from "react";

class Title extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked:false
        };
        this.changeTitle = this.changeTitle.bind(this);
    }

    changeTitle = () => {
        this.setState({clicked: !this.state.clicked});
    }

    render() {
        return(
            <div className='checkbox-container'>
                <label className='checkbox-text'>
                    <input onClick={this.changeTitle} type='checkbox' />
                    {!this.state.clicked ? 'напомнить мне' : 'вам на почту будет доставлено письмо'}
                </label>
            </div>
        )
    }
}

export default Title;