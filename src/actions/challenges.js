import { tokenConfig } from './auth';
import axios from 'axios';
import { GET_CHALLENGES, ADD_CHALLENGE, GET_CHALLENGE } from './types';
import { reset } from 'redux-form';


// GET challenges
export const getChallenges = () => async (dispatch, getState) => {
    const res = await axios.get('http://127.0.0.1:8000/api/challenges/', tokenConfig(getState));
    dispatch({
        type: GET_CHALLENGES,
        payload: res.data
    })
}

export const getChallenge = id => async (dispatch, getState) => {
    const res = await axios.get(`http://127.0.0.1:8000/api/challenges/${id}`, tokenConfig(getState));
    dispatch({
        type: GET_CHALLENGE,
        payload: res.data
    })
}

export const addChallenge = formValues => async (dispatch, getState) => {
    const res = await axios.post(
        'http://127.0.0.1:8000/api/challenges/',
        { ...formValues },
        tokenConfig(getState)
    );
    dispatch({
        type: ADD_CHALLENGE,
        payload: res.data
    });
    dispatch(reset('challengeForm'))
};

