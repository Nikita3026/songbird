import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './Navbar.scss';
import Header from '../Header';
import NavItem from './NavItem';
import {navlinksText} from './constants';

export class Navbar extends Component {
    static defaultProps = {

    }

    createNavlinks() {
        const navlinkItems = navlinksText.map((item, idx) => {
            return <NavItem
            key = {idx}
            value = {item}
            isLinkActive = {idx === 0? true:false}
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
                        {/* <a class="nav-item nav-link active" href="#"><span class="sr-only">(current)</span></a> */}
                       {/*  <a class="nav-item nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a> */}
                    </div>
                </div>
            </nav>
        )
    }
}

Navbar.propTypes = {

}

export default Navbar;
