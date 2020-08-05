import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PossibleAnswers.scss';
import Answer from './Answer';

export class PossibleAnswers extends Component {
    static deafultProps = {

    }

    createAnswerOptions() {
        const answerOptions = Array(6).fill(null);
        return answerOptions.map((_, idx) => {
            return <Answer key = {idx} value = "Ворон"/>
        });
    }

    render() {
        return (
            <div className = "possible-answers-container">
            {this.createAnswerOptions()}
            </div>
        )
    }
}

PossibleAnswers.propTypes = {

}

export default PossibleAnswers
