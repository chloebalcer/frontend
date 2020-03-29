import React, { Component } from 'react';
import ChallengeList from './ChallengeList';
import ChallengeCreate from './ChallengeCreate';

class Dashboard extends Component {
    render() {
        var left = {
            textAlign: "left",
            marginLeft: "50px"
          };
        return (
            <div className='ui-container'>
                <h1 style={left}>Challenges</h1>
                <ChallengeList />
                <form action="/createChallenge">
            <input type="submit" value="ADD CHALLENGE" />
        </form>
            </div>
            
            
        );
       
        
    }
}

export default Dashboard;