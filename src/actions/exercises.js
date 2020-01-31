import { tokenConfig } from './auth';
import axios from 'axios';
import { GET_EXERCISES, ADD_EXERCISE, GET_EXERCISE } from './types';
import { reset } from 'redux-form';


// GET challenges
export const getExercises = () => async (dispatch, getState) => {
    const res = await axios.get('http://127.0.0.1:8000/api/ex/exercises', tokenConfig(getState));
    dispatch({
        type: GET_EXERCISES,
        payload: res.data
    })
}

export const getExercise = id => async (dispatch, getState) => {
    const res = await axios.get(`http://127.0.0.1:8000/api/ex/exercises/${id}`, tokenConfig(getState));
    dispatch({
        type: GET_EXERCISE,
        payload: res.data
    })
}

export const addExercise = formValues => async (dispatch, getState) => {
    const res = await axios.post('http://127.0.0.1:8000/api/ex/exercises/',
        { ...formValues },
        tokenConfig(getState)
    );
    dispatch({
        type: ADD_EXERCISE,
        payload: res.data
    });
    dispatch(reset('exerciseForm'))
};
