import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false,
        success: false
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true
            state.error = false
            state.success = false
        },
        loginSuccess: (state, action) => {
            state.isFetching = false
            state.currentUser = action.payload
        },
        loginFailure: (state) => {
            state.isFetching = false
            state.error = true
        },
        logout: (state) => {
            state.isFetching = false
            state.currentUser = null
            state.error = false
            state.success = false
        },
        updateUserStart: (state) => {
            state.isFetching = true
            state.error = false
            state.success = false
        },
        updateUserSuccess: (state, action) => {
            state.isFetching = false
            state.currentUser = action.payload
            state.success = true
        },
        updateUserFailure: (state) => {
            state.isFetching = false
            state.error = true

        },
        registerStart: (state) => {
            state.isFetching = true
            state.error = false
            state.success = false
        },
        registerSuccess: (state, action) => {
            state.isFetching = false
            state.currentUser = action.payload
        },
        registerFailure: (state, action) => {
            state.isFetching = false
            state.error = action.payload
        }
    }
})

export const {
    loginStart,
    loginSuccess,
    loginFailure,
    logout,
    registerStart,
    registerSuccess,
    registerFailure,
    updateUserStart,
    updateUserSuccess,
    updateUserFailure
} = userSlice.actions
export default userSlice.reducer