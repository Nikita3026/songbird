import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PossibleAnswers.scss';

export class Answer extends Component {
    render() {
        return (
            <div className = "answer-option" data-key = {this.props.id}>
                <div className = "answer-indicator"></div>
                <span className = "answer-option-text">{this.props.value}</span>
            </div>
        )
    }
}

Answer.propTypes = {
    value: PropTypes.string.isRequired,
    id:PropTypes.string.isRequired
}

export default Answer;
