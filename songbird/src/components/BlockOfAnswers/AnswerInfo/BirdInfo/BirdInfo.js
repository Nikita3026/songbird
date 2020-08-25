import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BirdInfo.scss';
import Player from '../../../AudioPlayer/AudioPlayer';

export class BirdInfo extends Component {
    render() {
        return (
            <div className = "bird-info-container">
                <div className = "bird-short-info">
                    <img className = "bird-info-image" alt = "bird-info" src= {this.props.answerInfo.image}/>
                    <div className = "short-text-info">
                        <span className = "bird-name">{this.props.answerInfo.cyrillicName}</span>
                        <hr color = "white"/>
                        <span className = "scientific-bird-name">{this.props.answerInfo.latineName}</span>
                        <hr color = "white"/>
                        {Player(this.props.answerInfo.audio)}
                    </div>
                </div>
                <p className = "bird-detailed-info">{this.props.answerInfo.description}</p>
            </div>
        )
    }
}

BirdInfo.propTypes = {
    answerInfo: PropTypes.object.isRequired
}

export default BirdInfo;
