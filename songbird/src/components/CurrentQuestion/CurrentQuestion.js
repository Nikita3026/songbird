import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';
import './CurrentQuestion.scss';
import defaultBirdImage from '../../assets/img/defaultBirdImage.png';
import UnspokenWord from './UnspokenWord';
import Player from '../AudioPlayer/AudioPlayer';

export class CurrentQuestion extends Component {
constructor(props) {
    super(props);
    this.renderMainBody = this.renderMainBody.bind(this);
    this.renderImage = this.renderImage.bind(this);
}

    renderImage() {
        let imageSrc;
        if(this.props.isItNeedToOpenRightAnswerInfo){
            imageSrc = this.props.rightAnswer.image;
        } else imageSrc = defaultBirdImage;
        return <img className = "question-image" src = {imageSrc} alt = "question-image"/>;
    }

    renderMainBody() {
        if(this.props.rightAnswer !== null) {
            const audioSrc = this.props.rightAnswer.audio;
            return (<Fragment>
                 <div className = "current-question">
              {/*   <div className = "question-image-container"> */}
                    <this.renderImage/>
              {/*   </div> */}
                <div className = "current-question-inner">
                    <UnspokenWord
                        rightAnswer = {this.props.rightAnswer}
                        isItNeedToOpenRightAnswerInfo = {this.props.isItNeedToOpenRightAnswerInfo}
                    />
                    <hr color = "white"/>
                    {Player(audioSrc)}
                </div>
            </div>
            </Fragment>)
        }
        return null;
    }


    render() {
        return (
            <this.renderMainBody/>
        )
    }
}

CurrentQuestion.propTypes = {
    rightAnswer: PropTypes.object,
    isItNeedToOpenRightAnswerInfo: PropTypes.bool.isRequired
}


export default CurrentQuestion;
