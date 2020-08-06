import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NextLevelButton.scss';

export class NextLevelButton extends Component {
    render() {
        return (
            <button
            type = "button"
            className = "next-level-button"
            onClick = {() => this.props.handleClick()}
            >Next Level</button>
        )
    }
}

export default NextLevelButton;
