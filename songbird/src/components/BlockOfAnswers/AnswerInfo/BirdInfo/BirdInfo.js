import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BirdInfo.scss';
import birdImage from '../../../../assets/img/defaultBirdImage.png';
import BirdSound from '../../../CurrentQuestion/BirdSound';
import Player from '../../../AudioPlayer/AudioPlayer';

export class BirdInfo extends Component {
    static defaultProps = {

    }

    render() {
        return (
            <div className = "bird-info-container">
                <div className = "bird-short-info">
                    <img className = "bird-info-image" alt = "bird-info-image" src= {birdImage}/>
                    <div className = "short-text-info">
                        <span className = "bird-name">Ласточка</span>
                        <hr color = "white"/>
                        <span className = "scientific-bird-name">Dellichon urbicum</span>
                        <hr color = "white"/>
                        {Player()}
                        {/* <BirdSound/> */}
                    </div>
                </div>
                <p className = "bird-detailed-info">Для ласточек характерно негромкое щебетание. Песни ласточек не смолкают на протяжении всего лета. Исследователи различают у птиц до 6 щебечущих звуков: «вит», «ви-вит», «чивит», «чиривит» и т.п. Ласточки любят петь дуэтом.</p>
            </div>
        )
    }
}

export default BirdInfo;
