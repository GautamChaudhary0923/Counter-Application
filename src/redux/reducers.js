
import  counterReducer from './counterReducer'
import {combineReducers} from "redux"


const AllReducers = combineReducers({
    count:counterReducer
})
export default AllReducers;