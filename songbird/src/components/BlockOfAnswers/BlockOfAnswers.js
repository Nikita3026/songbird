import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BlockOfAnswers.scss';
import PossibleAnswers from './PossibleAnswers/PossibleAnswers';
import AnswerInfo from './AnswerInfo/AnswerInfo';

export class BlockOfAnswers extends Component {
    static defaultProps = {

    }

    render() {
        return (
            <div className = "answer-block-container">
                <PossibleAnswers/>
                <AnswerInfo/>
            </div>
        )
    }
}

BlockOfAnswers.propTypes = {

}

export default BlockOfAnswers;
