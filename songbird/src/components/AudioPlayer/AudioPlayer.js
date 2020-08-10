import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';
import './AudioPlayer.scss';


const Player = (src) => (
    <AudioPlayer
    src={src}
    customAdditionalControls={[]}
    customVolumeControls={[]}
    showJumpControls={false}
    layout="horizontal-reverse"
    />
);

export default Player;
