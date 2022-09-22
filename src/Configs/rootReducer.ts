import { combineReducers } from '@reduxjs/toolkit';
import { reducer as authenticateReducer } from '../Components/Authentication/redux/slice';

const createReducer = (injectedReducers = {}): any => {
    const appReducer = combineReducers({
        authentication: authenticateReducer,
        ...injectedReducers,
    });

    return appReducer;
};

export default createReducer;