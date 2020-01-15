import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // added
import { connect } from 'react-redux'; // added
import { logout } from '../../actions/auth'; // added

class Header extends Component {
    render() {
        const { user, isAuthenticated } = this.props.auth; // added

        // added
        const userLinks = (
            <div className='right menu'>
                <div className='ui simple dropdown item'>
                    {user ? user.username : ''}
                    <i className='dropdown icon' />
                    <div className='menu'>
                        <a onClick={this.props.logout} className='item'>
                            Logout
              </a>
                    </div>
                </div>
            </div>
        );

        // added
        const guestLinks = (
            <div className='right menu'>
                <Link to='/login' className='item'>
                    Login
          </Link>
            </div>
        );

        // updated
        return (
            <div className='ui inverted menu' style={{ borderRadius: '0' }}>
                {isAuthenticated ? userLinks : guestLinks}
            </div>
        );
    }
}

// added
const mapStateToProps = state => ({
    auth: state.auth
});

// updated
export default connect(
    mapStateToProps,
    { logout }
)(Header);