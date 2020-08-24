import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import './EndNotification.scss';
import NextLevelButton from '../NextLevelButton/NextLevelButton';

export class EndNotification extends Component {
    constructor(props) {
        super(props);
        this.renderButton = this.renderButton.bind(this);
    }

    renderButton() {
        if(this.props.score === 30) {
            return(
                <Fragment>
                    <p className = "small-notification-text">Вы прошли викторину и набрали максимально возможный балл! Теперь вы знаете, что петь умеет не только соловей!</p>
                </Fragment>
            )
        }
        return(
            <Fragment>
                <p className = "small-notification-text">Вы прошли викторину и набрали {this.props.score} из 30 возможных баллов</p>
            </Fragment>
        )
    }

    render() {
        return (
            <div className = "result-notification">
                <p className = "big-notification-text">Поздравляем!</p>
                <this.renderButton/>
                <NextLevelButton
                isButtonActive = {true}
                value = "Попробовать еще раз!"
                dataKey = {1}
                handleClick = {this.props.handleClick}
                />
            </div>
        )
    }
}

EndNotification.propTypes = {
    score: PropTypes.number.isRequired,
    handleClick: PropTypes.func.isRequired
}

export default EndNotification;
