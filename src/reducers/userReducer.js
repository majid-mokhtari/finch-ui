import * as types from '../constants';

const initialState = {
    data: [],
    error_message: null
}

export function userReducer(state = initialState, action){
    switch(action.type){
        case types.FETCHING_DATA:
            return {
                ...state,
                isFetching: true,
                viewState: types.FETCHING_DATA,
                error_message: null
            }
        case types.LOGIN_USER_SUCCESS: 
            return {
                ...state,
                data: action.data,
                viewState: types.LOGIN_USER_SUCCESS,
                isFetching: false,
                error_message: null
            }
        case types.LOGIN_USER_ERROR:
            return {
                ...state,
                isFetching: false,
                viewState: types.LOGIN_USER_ERROR,
                error_message: action.err
            }
        case types.RESET_DATA:
            return {
                ...state,
                data: [],
                isFetching: false,
                viewState: types.RESET_DATA,
                error_message: null
            }
        default:
            return state
    }
}