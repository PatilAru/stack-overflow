import { combineReducers } from "redux";
import authReducer from "./auth";
import currentUserReduser from './currentUser'
import questionsReducer from './questions'
import usersReducer from './users'



export default combineReducers({
    authReducer, currentUserReduser, questionsReducer, usersReducer
})