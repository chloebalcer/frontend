import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getChallenges } from '../../actions/challenges';
import Challenges from '../../visuals/challenges'


class ChallengeList extends Component {
    componentDidMount() {
        this.props.getChallenges();
    }

    render() {
        return (
            <div>
            <Challenges data={this.props.challenges}/>
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