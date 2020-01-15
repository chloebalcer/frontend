import React, { Component } from 'react';
import LoginForm from '../auth/LoginForm';

class Homepage extends Component {
    render() {
        return (
            <div >
                <div>Homepage</div>
                <LoginForm />
            </div>
        );
    }
}
export default Homepage;

