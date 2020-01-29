import _ from 'lodash';
import { GET_CHALLENGES, ADD_CHALLENGE, GET_CHALLENGE } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case GET_CHALLENGE:
        case ADD_CHALLENGE:
            return {
                ...state,
                [action.payload.id]: action.payload

            };
        case GET_CHALLENGES:
            return {
                ...state,
                ..._.mapKeys(action.payload, 'id')
            };
        default:
            return state;
    }
};