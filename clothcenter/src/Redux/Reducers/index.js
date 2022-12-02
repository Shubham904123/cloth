
import { combineReducers } from 'redux'
import productReducer from '../Reducers/productReducer'

let reducers = combineReducers({ productReducer })
// const rootReducer=(state,action)=>{
//    return reducers(state,action)
// }

export default reducers