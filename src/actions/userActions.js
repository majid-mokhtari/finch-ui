import {FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_ERROR} from '../constants/';
import axios from 'axios';

export const loginUser = (genres) => {
    return (dispatch) => {
        dispatch(loading())
        axios.get('http://localhost:8000/users')
        .then(function ({data}) {
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
        type: FETCHING_DATA_SUCCESS,
        data
    }
}

export const getDataFailure = (err) => {
    return {
        type: FETCHING_DATA_ERROR,
        err
    }
}