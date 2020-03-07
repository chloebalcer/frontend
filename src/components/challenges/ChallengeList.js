import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getChallenges } from '../../actions/challenges';

class ChallengeList extends Component {
    componentDidMount() {
        this.props.getChallenges();
    }

    render() {
        return (
            <div className='ui-container' style={{ marginTop: '2rem' }}>
                {this.props.challenges.map(challenge => (
                    <div className='item' key={challenge.id}>
                        <i className='large calendar outline middle aligned icon' />
                        <div className='content'>
                            <a className='header'>{challenge.title}</a>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    challenges: Object.values(state.challenges)
});

// function that connects this component to the store
export default connect(
    mapStateToProps,
    { getChallenges }
)(ChallengeList);