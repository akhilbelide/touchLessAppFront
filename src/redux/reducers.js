import { combineReducers } from 'redux';

const cartReducer = (state=[],action)=>{
    switch(action.type){
        case 'CART':
            return [...action.payload]
        default:
            return state
    }
}
const orderReducer = (state={id:-1},action)=>{
    switch(action.type){
        case 'ORDERID':
            return {id:action.id}
        default:
            return state
    }
}
export default combineReducers({
    
    cart:cartReducer,
    order:orderReducer
});