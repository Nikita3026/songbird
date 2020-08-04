import React from 'react'
import PropTypes from 'prop-types';
import './Navbar.scss';

function NavItem(props) {
    let className = 'nav-item nav-link ';
    if(props.isLinkActive) {
        className += 'active';
    }
    return (
       <a className={className} href="#">{props.value}</a>
    )
}

NavItem.propTypes = {
    value: PropTypes.string.isRequired,
    isLinkActive:PropTypes.bool.isRequired
}

export default NavItem;
