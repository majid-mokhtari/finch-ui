import {FETCHING_DATA, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR} from '../constants';

const initialState = {
    data: null,
    error_message: ""
}

export function userReducer(state = initialState, action){
    switch(action.type){
        case FETCHING_DATA:
            return {
                ...state,
                isFetching: true,
                viewState: FETCHING_DATA
            }
        case LOGIN_USER_SUCCESS: 
            return {
                ...state,
                data: action.data,
                viewState: LOGIN_USER_SUCCESS,
                isFetching: false,
                error_message: ""
            }
        case LOGIN_USER_ERROR:
            return {
                ...state,
                isFetching: false,
                viewState: LOGIN_USER_ERROR,
                error_message: action.err
            }
        default:
            return state
    }
}