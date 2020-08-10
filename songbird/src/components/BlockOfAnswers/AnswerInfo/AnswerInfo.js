import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AnswerInfo.scss';
import BirdInfo from './BirdInfo/BirdInfo';
import InitialInfo from './InitialInfo/InitialInfo';

export class AnswerInfo extends Component {
    fillBlock() {
        if(this.props.didTheUserAnswer) {
            return <BirdInfo
                answerInfo = {this.props.answerInfo}
            />;
        }
        return <InitialInfo/>;
    }

    render() {
        return (
            <div className = "answer-info-container">
                {this.fillBlock()}
            </div>
        )
    }
}

AnswerInfo.propTypes = {
    didTheUserAnswer:PropTypes.bool,
    answerInfo: PropTypes.array.isRequired
}

export default AnswerInfo
