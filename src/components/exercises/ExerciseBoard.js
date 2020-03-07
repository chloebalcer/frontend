import React, { Component } from 'react';
import ExerciseList from './ExerciseList';

class ExerciseBoard extends Component {
    render() {
        return (
            <div className='ui container'>
                <div>Exercise Create Form</div>
                <ExerciseList />
                <form action="/createExercise">
            <input type="submit" value="Creer un exercice" />
        </form>
            </div>
        );
    }
}

export default ExerciseBoard;