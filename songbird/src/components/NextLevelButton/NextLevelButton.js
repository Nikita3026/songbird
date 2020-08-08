import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NextLevelButton.scss';

export class NextLevelButton extends Component {
    render() {
        let className = "next-level-button ";
        if(this.props.isButtonActive) className += "active-button";
        return (
            <button
            type = "button"
            className = {className}
            onClick = {() => this.props.handleClick()}
            disabled = {!this.props.isButtonActive}
            >Next Level</button>
        )
    }
}


NextLevelButton.propTypes = {
    handleClick:PropTypes.func.isRequired,
    isButtonActive:PropTypes.bool.isRequired
}

export default NextLevelButton;
