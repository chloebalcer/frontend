import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getExercises } from '../../actions/exercises';

class ExerciseList extends Component {
    componentDidMount() {
        this.props.getExercises();
    }

    render() {
        return (
            <div className='ui relaxed divided list' style={{ marginTop: '2rem' }}>
                {this.props.exercises.map(exercise => (
                    <div className='item' key={exercise.id}>
                        <i className='large calendar outline middle aligned icon' />
                        <div className='content'>
                            <a className='header'>{exercise.title}</a>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    exercises: Object.values(state.exercises)
});

// function that connects this component to the store
export default connect(
    mapStateToProps,
    { getExercises }
)(ExerciseList);