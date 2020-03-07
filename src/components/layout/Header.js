import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // added
import { connect } from 'react-redux'; 
import { logout } from '../../actions/auth'; 
import '../../css/header.css';

let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

class Header extends Component {
    render() {
        const { user, isAuthenticated } = this.props.auth; 

        // added
        const userLinks = (
<div className="Header">
                <p className="brandName">ALTOSCHOLARSHIP</p>              
                <ul className="menu-ul">
                    <li><Link className="link" to='/challenges' >CHALLENGES</Link></li>
                    <li><Link  className="link" to='/exercises'>EXERCISES</Link></li>
                    <li><Link  className="link" onClick={this.props.logout} to='/'>LOGOUT</Link></li>
            </ul>      
            </div>         
        );

        // added
        const guestLinks = (
            <nav class="navbar">
        <span class="navbar-toggle" id="js-navbar-toggle">
            <i class="fas fa-bars"></i>
        </span>
        <a href="#" class="logo">ALTOSCHOLARSHIP</a>
        <ul class="main-nav" id="js-menu">
            <li>
                <Link to='/login' class="nav-links">SIGN IN</Link>
            </li>
            <li>
                <Link to='/register' class="nav-links">SIGN UP</Link>
            </li>
        </ul>
    </nav>
            // <div className="Header">
            //     <p className="brandName">ALTOSCHOLARSHIP</p>              
            //     <ul className="menu-ul">
            //         <li><Link className="link" to='/login' >SIGN IN</Link></li>
            //         <li><Link  className="link" to='/register'>SIGN UP</Link></li>
            // </ul>      
            // </div>
        );     
        // updated
        return (
            
            <div className='ui inverted menu' style={{ borderRadius: '0' }}>
                {isAuthenticated ? userLinks : guestLinks}
            </div>
            
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});


// updated
export default connect(
    mapStateToProps,
    { logout }
)(Header);