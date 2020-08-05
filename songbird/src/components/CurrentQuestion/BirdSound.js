import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CurrentQuestion';

export class BirdSound extends Component {
    static deafultProps = {

    }

    render() {
        return (
            <audio className = "bird-voice" controls></audio>
        )
    }
}

BirdSound.propTypes = {

}

export default BirdSound;
