import { combineReducers } from 'redux';
import user from './user';

//import all reducers


//combine them
const appReducer = combineReducers({
    user,
})

export default appReducer
