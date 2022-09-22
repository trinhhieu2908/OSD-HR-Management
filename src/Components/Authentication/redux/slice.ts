import { createSlice } from '@reduxjs/toolkit';
import { AuthenticationState } from '../../../models/authenticate';

export const initialState: AuthenticationState = {
    isLoading: false,
    user: undefined,
    isAuthenticated: false,
};

export const authenticationSlice = createSlice({
    name: 'authenticate',
    initialState,
    reducers: {
        setIsLoading: (state, { payload }) => {
            state.isLoading = payload;
        },
        setUser: (state, { payload }) => {
            state.user = payload;
        },
        setAuthenticated: (state, { payload }) => {
            state.isAuthenticated = payload;
        }
    },
});

export const { name, actions, reducer } = authenticationSlice;