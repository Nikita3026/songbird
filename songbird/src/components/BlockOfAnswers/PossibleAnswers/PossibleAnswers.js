import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PossibleAnswers.scss';
import Answer from './Answer';
import BirdArray from '../../BirdArray';

export class PossibleAnswers extends Component {
    static deafultProps = {

    }

    shuffleAnswers(arrayOfAnswers) {
        const shuffledArr = arrayOfAnswers.sort(function(){
            return Math.random() - 0.5;
        });
        return shuffledArr;
    }

    createAnswerOptions() {
        const answerOptions = BirdArray[this.props.currentPageNumber];
        const shuffledArray = this.shuffleAnswers(answerOptions);
        return shuffledArray.map((item) => {
            return <Answer key = {item.id} value = {item.cyrillicName}/>
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
