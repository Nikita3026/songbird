import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PossibleAnswers.scss';
import Answer from './Answer';
import BirdArray from '../../BirdArray';

export class PossibleAnswers extends Component {
    state = {
        currentAnswers:null
    }

    shuffleAnswers(arrayOfAnswers) {
        const shuffledArr = arrayOfAnswers.sort(function(){
            return Math.random() - 0.5;
        });
        return shuffledArr;
    }

    setRightAnswer(arrayOfAnswers) {
        const maxIndex = arrayOfAnswers.length - 1;
        const randomAnswerNumber = Math.round(Math.random()* maxIndex);
        const rightAnswer = arrayOfAnswers[randomAnswerNumber];
        this.props.setRightAnswer(rightAnswer);
    }

    changePossibleAnswers(pageNumber) {
        this.setState({
            currentAnswers:this.createAnswerOptions(pageNumber)
        })
    }

    componentDidMount() {
       this.changePossibleAnswers(this.props.currentPageNumber);
       this.setRightAnswer(this.answersArray);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.currentPageNumber !== this.props.currentPageNumber) {
            this.changePossibleAnswers(nextProps.currentPageNumber);
            this.setRightAnswer(this.answersArray);
        }
    }

    createAnswerOptions(pageNumber) {
        const answerOptions = BirdArray[pageNumber];
        const shuffledArray = this.shuffleAnswers(answerOptions);
        this.answersArray = shuffledArray;
        return shuffledArray.map((item) => {
            return <Answer
            key = {item.id}
            id = {item.id}
            value = {item.cyrillicName}
            />
        });
    }

    render() {
        return (
            <div className = "possible-answers-container" onClick = {this.props.handleClick}>
                {this.state.currentAnswers}
            </div>
        )
    }
}

PossibleAnswers.propTypes = {
    currentPageNumber:PropTypes.number.isRequired,
    rightAnswer:PropTypes.object,
    setRightAnswer:PropTypes.func.isRequired,
    handleClick:PropTypes.func.isRequired,
    changeState: PropTypes.func.isRequired
}

export default PossibleAnswers
