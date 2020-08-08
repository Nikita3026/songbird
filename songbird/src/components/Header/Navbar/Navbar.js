import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './Navbar.scss';
import NavItem from './NavItem';
import {navlinksText} from './constants';

export class Navbar extends Component {
    createNavlinks() {
        const navlinkItems = navlinksText.map((item, idx) => {
            return <NavItem
            key = {idx}
            value = {item}
            isLinkActive = {idx === this.props.currentPageNumber ? true:false}
            />
        });
        return navlinkItems;
    }

    render() {
        return (
                <nav className="navbar navbar-expand-lg">
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {this.createNavlinks()}
                    </div>
                </div>
            </nav>
        )
    }
}


Navbar.propTypes = {
    currentPageNumber:PropTypes.number.isRequired
}

export default Navbar;
