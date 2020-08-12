import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BlockOfAnswers.scss';
import PossibleAnswers from './PossibleAnswers/PossibleAnswers';
import AnswerInfo from './AnswerInfo/AnswerInfo';
import birdArray from '../BirdArray';
import successAudio from '../../assets/audio/success.mp3';
import errorAudio from '../../assets/audio/error.mp3';

export class BlockOfAnswers extends Component {
    constructor(props) {
        super(props);
        this.counterOfClicks = 0;
        this.pointsForCurrentRound = 5;
        this.successAudio = new Audio();
        this.successAudio.src = successAudio;
        this.errorAudio = new Audio();
        this.errorAudio.src = errorAudio;

        this.handleClick = this.handleClick.bind(this);
        this.changeState = this.changeState.bind(this);
        this.changeAnswerInfo = this.changeAnswerInfo.bind(this);

        this.state = {
            arrayOfAnswersSound:[],
            arrayOfAnswersImages:[],
            answerInfo:{}
        }
    }



    handleClick({target}) {
        const realTarget = target.closest('.answer-option');
        const currentBirdArray = birdArray[this.props.currentPageNumber];
        const peopleAnswer = currentBirdArray.find((item) => item.id === realTarget.dataset.key.toString());
        const indicator = realTarget.firstChild;
        let classForIndicator;

        if(!this.props.isItNeedToDisableAnswers) {
            this.counterOfClicks++;
            if(peopleAnswer.cyrillicName === this.props.rightAnswer.cyrillicName) {
                this.props.changeOpenRightAnswerStatus();
                this.props.changeDisabledStatusOfAnswers();
                classForIndicator = 'right-answer';
                this.props.changeScore(this.pointsForCurrentRound);
                this.pointsForCurrentRound = 5;
                this.props.changeButtonActivity();
                this.successAudio.play();
            } else  {
                classForIndicator = 'wrong-answer';
                this.pointsForCurrentRound--;
                this.errorAudio.play();
            }
            this.changeAnswerInfo(peopleAnswer);
            indicator.classList.add(classForIndicator);
            if(this.counterOfClicks === 1) {
                this.props.changeUserAnswerStatus();

            }
        }
    }

    changeAnswerInfo(newAnswerInfo) {
        this.setState({
            answerInfo:newAnswerInfo
        })
    }

    changeState(newSoundsArray, newImagesArray) {
        this.setState({
            arrayOfAnswersSound: newSoundsArray,
            arrayOfAnswersImages: newImagesArray
        })
    }

    componentWillReceiveProps(newProps) {
        if(newProps.didTheUserAnswer !== this.props.didTheUserAnswer
            && newProps.didTheUserAnswer === false) {
            this.counterOfClicks = 0;
        }
    }

    render() {
        return (
            <div className = "answer-block-container">
                <PossibleAnswers
                currentPageNumber = {this.props.currentPageNumber}
                rightAnswer = {this.props.rightAnswer}
                setRightAnswer = {this.props.setRightAnswer}
                handleClick = {this.handleClick}
                changeState = {this.changeState}
                />
                <AnswerInfo
                    didTheUserAnswer = {this.props.didTheUserAnswer}
                    answerInfo = {this.state.answerInfo}
                />
            </div>
        )
    }
}

BlockOfAnswers.propTypes = {
    currentPageNumber:PropTypes.number.isRequired,
    rightAnswer:PropTypes.object,
    setRightAnswer:PropTypes.func.isRequired,
    changeButtonActivity:PropTypes.func.isRequired,
    didTheUserAnswer: PropTypes.bool.isRequired,
    changeUserAnswerStatus: PropTypes.func.isRequired,
    changeScore:PropTypes.func.isRequired,
    isItNeedToDisableAnswers: PropTypes.bool.isRequired,
    changeDisabledStatusOfAnswers: PropTypes.func.isRequired,
    changeOpenRightAnswerStatus: PropTypes.func.isRequired
}

export default BlockOfAnswers;
