import React, { Component } from 'react'
import PropTypes from 'prop-types';
import logo from '../../assets/logo.png';
import './Header.scss';
import Navbar from './Navbar/Navbar';

export class Header extends Component {
    static defaultProps = {
        score: 0
    }

    render() {
        return (
            <div className = "header">
                <div class = "header-top">
                    <img className = "logo" alt = "logo" src = {logo}/>
                    <span className = "score">Score: {this.props.score}</span>
                </div>
                <Navbar/>
            </div>
        )
    }
}

Header.propTypes = {
    score: PropTypes.number.isRequired
}


export default Header;
