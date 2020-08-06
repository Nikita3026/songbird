import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PossibleAnswers.scss';
import axios from 'axios';

export class Answer extends Component {
    static defaultProps = {

    }

    constructor(props) {
        super(props);
        this.state = {

        }
    }

  /*   async componentDidMount() {
        const res = await axios.get('');
        const data = res.data;
        this.setState({

        });
    }
 */

    render() {
        return (
            <div className = "answer-option">
                <div className = "answer-indicator"></div>
                <span className = "answer-option-text">{this.props.value}</span>
            </div>
        )
    }
}

Answer.propTypes = {
    value: PropTypes.string.isRequired
}

export default Answer;
