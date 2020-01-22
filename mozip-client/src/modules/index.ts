import { combineReducers } from "redux"
import { all } from 'redux-saga/effects'


const rootReducer = combineReducers({

})

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>