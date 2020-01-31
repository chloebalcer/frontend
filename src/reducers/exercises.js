import _ from 'lodash';
import { GET_EXERCISES, ADD_EXERCISE, GET_EXERCISE } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case GET_EXERCISE:
        case ADD_EXERCISE:
            return {
                ...state,
                [action.payload.id]: action.payload

            };
        case GET_EXERCISES:
            return {
                ...state,
                ..._.mapKeys(action.payload, 'id')
            };
        default:
            return state;
    }
};

