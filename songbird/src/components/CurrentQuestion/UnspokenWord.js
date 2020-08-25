import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CurrentQuestion';

export class UnspokenWord extends Component {
    constructor(props) {
        super(props);

        this.renderMain = this.renderMain.bind(this);
    }

    renderMain() {
        let starsInsteadOfWord = '';
        for(let i = 0; i < this.props.rightAnswer.cyrillicName.length; i ++) {
            starsInsteadOfWord += '*';
        }
        if(this.props.isItNeedToOpenRightAnswerInfo) {
            return <span className = "unspoken-word">{this.props.rightAnswer.cyrillicName}</span>;
        }
        return <span className = "unspoken-word">{starsInsteadOfWord}</span>;
    }

    render() {
        return (
            <div className = "unspoken-word-container">
                <this.renderMain/>
            </div>
        )
    }
}

UnspokenWord.propTypes = {
    rightAnswer: PropTypes.object,
    isItNeedToOpenRightAnswerInfo: PropTypes.bool.isRequired
}

export default UnspokenWord;
