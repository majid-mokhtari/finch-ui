import {FETCHING_DATA, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR} from '../constants/';
import axios from 'axios';

let userUrl = 'http://localhost:8000/users';

export const loginUser = (params) => {
    return (dispatch) => {
        dispatch(loading())
        axios.post(userUrl, params)
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