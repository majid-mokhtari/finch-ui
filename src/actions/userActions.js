import {
    FETCHING_DATA, 
    LOGIN_USER_SUCCESS, 
    LOGIN_USER_ERROR,
    RESET_DATA
} from '../constants/';
import axios from 'axios';

let userUrl = 'http://localhost:8000/user/';

export const loginUser = (params) => {
    return (dispatch) => {
        dispatch(loading())
        axios.post(`${userUrl}login`, params)
        .then((res) => {
            const { data } = res;
            const { err } = data;
            return err ? 
            dispatch(getDataFailure(err)) :
            dispatch(getDataSuccess(data))
        })
        .catch((err) => {
            dispatch(getDataFailure(err))
        })
    }
}

export const signupUser = (params) => {
    var date_arr = params.birthdate.split(" ");
    params.birthdate = date_arr[0] + "T" + date_arr[1] + "-00:00";
    params.status = "Registered";
    return (dispatch) => {
        dispatch(loading())
        axios.post(`${userUrl}signup`, params)
        .then((res) => {
            const { data } = res;
            const { err } = data;
            return err ? 
            dispatch(getDataFailure(err)) :
            dispatch(getDataSuccess(data))
        })
        .catch((err) => dispatch(getDataFailure(err)))
    }
}

export const loading = () => {
    return {
        type: FETCHING_DATA
    }
}

export const resetData = () => {
    return {
        type: RESET_DATA
    }
}

export const getDataSuccess = data => {
    return {
        type: LOGIN_USER_SUCCESS,
        data
    }
}

export const getDataFailure = (err) => {
    return {
        type: LOGIN_USER_ERROR,
        err
    }
}