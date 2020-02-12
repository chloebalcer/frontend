import React, { Component } from 'react';
import ExerciseList from './ExerciseList';
import ExerciseCreate from './ExerciseCreate';

class ExerciseBoard extends Component {
    render() {
        return (
            <div className='ui container'>
                <div>Exercise Create Form</div>
                <ExerciseCreate />

            </div>
        );
    }
}

export default ExerciseBoard;