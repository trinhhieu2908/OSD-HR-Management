import { createSlice } from '@reduxjs/toolkit';
import { AuthenticationState } from '../../../models/authenticate';
import { User } from '../../../models/user';

const initialUser : User = {
    userId: '',
    fullName: '',
    avatar: '',
    role: 'Employee',
    isActive: false,
    jobTitle: '',
    email: '',
    phoneNumber: '',
    skype: '',

}

export const initialState: AuthenticationState = {
    isLoading: false,
    user: initialUser,
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