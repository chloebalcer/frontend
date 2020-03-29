import React, { Component } from 'react';
import ExerciseList from './ExerciseList';

class ExerciseBoard extends Component {
    
    render() {
        var left = {
            textAlign: "left",
            marginLeft: "50px"
          };
          
        return (
            <div className='ui-container'>
                <h1 style={left}>Exercises</h1>
                <ExerciseList />
                <form action="/createExercise">
            <input  type="submit" value="ADD EXERCISE" />
        </form>
            </div>
        );
    }
}

export default ExerciseBoard;