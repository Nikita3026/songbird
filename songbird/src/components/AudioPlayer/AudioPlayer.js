import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';
import './AudioPlayer.scss';


const Player = (src, ...audioRef) =>
    (<AudioPlayer
    className = "audio"
    src={src}
    customAdditionalControls={[]}
    showJumpControls={false}
    layout="horizontal-reverse"
    autoPlayAfterSrcChange = {false}
    volumeJumpStep = {1}
    ref = {audioRef[0]}
    />)
;

export default Player;
