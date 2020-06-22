import { combineReducers } from 'redux';

const cartReducer = (state=[],action)=>{
    switch(action.type){
        case 'CART':
            return [...action.payload]
        default:
            return state
    }
}

export default combineReducers({
    
    cart:cartReducer,
    
});