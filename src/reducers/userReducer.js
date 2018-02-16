import {FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_ERROR} from '../constants';

const initialState = {
    user: null,
    loggedIn: false,
    error: false
}

export default userReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCHING_DATA:
            return {
                ...state,
                data: [],
                isFetching: true
            }
        case FETCHING_DATA_SUCCESS: 
            return {
                ...state,
                data: action.data,
                isFetching: false
            }
        case FETCHING_DATA_ERROR:
            return {
                ...state,
                isFetching: false,
                error: true
            }
        default:
            return state
    }
}