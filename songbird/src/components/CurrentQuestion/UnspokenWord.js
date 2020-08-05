import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CurrentQuestion';

export class UnspokenWord extends Component {
    static defaultProps = {

    }

    render() {
        return (
            <div className = "unspoken-word-container">
                <span className = "unspoken-word">******</span>
            </div>
        )
    }
}

UnspokenWord.propTypes = {

}

export default UnspokenWord;
