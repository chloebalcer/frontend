import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getExercises } from '../../actions/exercises';
import Exercises from '../../visuals/exercises'

class ExerciseList extends Component {
    componentDidMount() {
        this.props.getExercises();
    }

    render() {
        return (
            <div>
            <Exercises data={this.props.exercises}/>
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