import React, { Component } from 'react';
import ChallengeList from './ChallengeList';
import ChallengeCreate from './ChallengeCreate';

class Dashboard extends Component {
    render() {
        return (
            <div className='ui-container'>
                <ChallengeList />
                <form action="/createChallenge">
            <input type="submit" value="Creer un challenge" />
        </form>
            </div>
            
            
        );
       
        
    }
}

export default Dashboard;