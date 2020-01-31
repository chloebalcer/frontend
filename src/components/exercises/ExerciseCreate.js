import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addExercise } from '../../actions/exercises';
import ExerciseForm from './ExerciseForm';

class ExerciseCreate extends Component {
    onSubmit = formValues => {
        this.props.addExercise(formValues);
    };

    render() {
        return (
            <div style={{ marginTop: '2rem' }}>
                <ExerciseForm destroyOnUnmount={false} onSubmit={this.onSubmit} />
            </div>
        );
    }
}

export default connect(
    null,
    { addExercise }
)(ExerciseCreate);