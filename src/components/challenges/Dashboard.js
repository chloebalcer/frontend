import React, { Component } from 'react';
import ChallengeList from './ChallengeList';
import ChallengeCreate from './ChallengeCreate';

class Dashboard extends Component {
    render() {
        return (
            <div className='ui container'>
                <div>Challenge Create Form</div>
                <ChallengeCreate />
                <ChallengeList />
            </div>
        );
    }
}

export default Dashboard;