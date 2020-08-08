import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './CurrentQuestion.scss';
import defaultBirdImage from '../../assets/img/defaultBirdImage.png';
import UnspokenWord from './UnspokenWord';
import BirdSound from './BirdSound';
import Player from '../AudioPlayer/AudioPlayer';

export class CurrentQuestion extends Component {
    static defaultProps = {

    }

    render() {
        return (
            <div className = "current-question">
                <div className = "question-image-container">
                    <img className = "question-image" src = {defaultBirdImage} alt = "question-image" />
                </div>
                <div className = "current-question-inner">
                    <UnspokenWord/>
                    <hr color = "white"/>
                    {Player()}
                 {/*    <BirdSound/> */}
                </div>
            </div>
        )
    }
}

CurrentQuestion.propTypes = {

}


export default CurrentQuestion;
