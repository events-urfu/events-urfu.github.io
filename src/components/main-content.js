import React from "react";

import ShowCardDescription from "./card-show-onclick";
import Description from "./description";

class MainContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            isToggleOn: !this.state.isToggleOn
        });
    }

    render() {
        return (
            <div id="tabs-content">
                <div className="inside-container block active tab-1">
                    <div id='wrapp'>
                        <ShowCardDescription isToggleOn={this.state.isToggleOn} handleClick={this.handleClick}>
                            <Description name={'Дебют'} time={'08:30'} audience={'Р-100'} member={'3'}/>
                        </ShowCardDescription>
                        <ShowCardDescription isToggleOn={this.state.isToggleOn} handleClick={this.handleClick}>
                            <Description name={'Не дебют'} time={'08:30'} audience={'Р-100'} member={'3'}/>
                        </ShowCardDescription>
                        <ShowCardDescription isToggleOn={this.state.isToggleOn} handleClick={this.handleClick}>
                            <Description name={'Что-то'} time={'08:30'} audience={'Р-100, ГУК-404'} member={'3'} />
                        </ShowCardDescription>
                    </div>
                </div>

                <div className="inside-container block tab-2 ">
                    <div id='wrapp'>
                        <ShowCardDescription isToggleOn={this.state.isToggleOn} handleClick={this.handleClick}>
                            <Description name={'Дебют'} time={'08:30'} audience={'Р-100'} member={'3'} />
                        </ShowCardDescription>
                        <ShowCardDescription isToggleOn={this.state.isToggleOn} handleClick={this.handleClick}>
                            <Description name={'Дебют'} time={'08:30'} audience={'Р-100'} member={'3'}/>
                        </ShowCardDescription>
                        <ShowCardDescription isToggleOn={this.state.isToggleOn} handleClick={this.handleClick}>
                            <Description name={'Дебют'} time={'08:30'} audience={'Р-100'} member={'3'}/>
                        </ShowCardDescription>
                        <ShowCardDescription isToggleOn={this.state.isToggleOn} handleClick={this.handleClick}>
                            <Description name={'Дебют'} time={'08:30'} audience={'Р-100'} member={'3'}/>
                        </ShowCardDescription>
                    </div>

                </div>
            </div>
        )
    }
}

export default MainContent;

//содержимое карточки