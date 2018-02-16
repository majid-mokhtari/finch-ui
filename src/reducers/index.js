import { combineReducers } from 'redux';
import userReducer from './userReducer'

export default function getRootReducer() {
    return combineReducers({
        user: userReducer,
    })
}