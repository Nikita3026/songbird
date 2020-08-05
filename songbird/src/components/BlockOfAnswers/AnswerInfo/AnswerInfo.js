import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AnswerInfo.scss';
import BirdInfo from './BirdInfo/BirdInfo';
import InitialInfo from './InitialInfo/InitialInfo';

export class AnswerInfo extends Component {
    static propTypes = {

    }

    constructor(props){
        super(props);
        this.state = {
            didTheUserAnswer:false
        }
    }

    fillBlock() {
        if(this.state.didTheUserAnswer) {
            return <BirdInfo/>;
        }
        return <InitialInfo/>;
    }

    render() {
        return (
            <div className = "answer-info-container">
                {this.fillBlock()}
            </div>
        )
    }
}

export default AnswerInfo