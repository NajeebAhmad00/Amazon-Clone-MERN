import {
    loginStart,
    loginSuccess,
    loginFailure,
    logout,
    updateUserStart,
    updateUserFailure,
    updateUserSuccess,
    registerStart,
    registerFailure,
    registerSuccess
} from './userRedux'
import { publicRequest, userRequest } from '../requestMethods'
import { createOrder } from './orderRedux'

export const login = async (dispatch, user) => {
    dispatch(loginStart())

    try {
        const res = await publicRequest.post('/auth/login', user)
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFailure())
    }
}

export const logoutUser = async (dispatch) => {
    dispatch(logout())
}

export const registerUser = async (dispatch, user) => {
    dispatch(registerStart())

    try {
        const { data } = await publicRequest.post('/auth/register', user)
        dispatch(registerSuccess(data))
    } catch (err) {
        dispatch(registerFailure(err))
    }
}

export const updateUser = async (dispatch, id, user) => {
    dispatch(updateUserStart())

    try {
        const { data } = await userRequest.put(`/users/${id}`, user)
        await dispatch(updateUserSuccess(data))
    } catch (error) {
        dispatch(updateUserFailure())
    }
}

export const addOrder = async (dispatch, order) => {
    try {
        const { data } = await publicRequest.post('/orders', order)
        dispatch(createOrder(data))
    } catch (err) {
        console.log('Something went wrong')
    }
}