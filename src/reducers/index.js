import auth from './auth';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { LOGOUT_SUCCESS } from '../actions/types';
import challenges from './challenges';

const appReducer = combineReducers({
    form: formReducer,
    challenges,
    auth
});

const rootReducer = (state, action) => {
    if (action.type === LOGOUT_SUCCESS) {
        state = undefined;
    }
    return appReducer(state, action);
};

export default rootReducer;



