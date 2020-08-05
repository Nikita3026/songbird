import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PossibleAnswers.scss';

export class Answer extends Component {
    static defaultProps = {

    }

    render() {
        return (
            <div className = "answer-option">
                <div className = "answer-indicator"></div>
                <span className = "answer-option-text">{this.props.value}</span>
            </div>
        )
    }
}

Answer.propTypes = {
    value: PropTypes.string.isRequired
}

export default Answer;
