import React, { Component } from 'react'
import PropTypes from 'prop-types';
import logo from '../../assets/img/logo.png';
import './Header.scss';
import Navbar from './Navbar/Navbar';

export class Header extends Component {
    static defaultProps = {
        score: 0
    }

    render() {
        return (
            <div className = "header">
                <div className = "header-top">
                    <img className = "logo" alt = "logo" src = {logo}/>
                    <span className = "score">Score: {this.props.score}</span>
                </div>
                <Navbar
                    currentPageNumber = {this.props.currentPageNumber}
                />
            </div>
        )
    }
}

Header.propTypes = {
    score: PropTypes.number.isRequired,
    currentPageNumber: PropTypes.number.isRequired
}


export default Header;
