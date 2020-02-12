import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addChallenge } from '../../actions/challenges';
import ChallengeForm from './ChallengeForm';


class ChallengeCreate extends Component {
    onSubmit = formValues => {
        this.props.addChallenge(formValues);
    };

    render() {
        return (
            <div style={{ marginTop: '2rem' }}>
                <ChallengeForm destroyOnUnmount={false} onSubmit={this.onSubmit} />
            </div>
        );
    }
}
export default connect(
    null,
    { addChallenge }
)(ChallengeCreate);