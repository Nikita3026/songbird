import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';
import './AudioPlayer.scss';
import test from '../../assets/audio/success.mp3';


const Player = () => (
    <AudioPlayer
    src={test}
    customAdditionalControls={[]}
    customVolumeControls={[]}
    showJumpControls={false}
    layout="horizontal-reverse"
    />
);

export default Player;
