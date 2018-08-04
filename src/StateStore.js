import { createStore } from 'redux'

let counter = function(state = 0, action) {
    try{
        switch (action.type) {
            case 'INCREMENT':
              return state + 1;
            case 'DECREMENT':
              return state - 1;
            default:
              return state;
        }
    }catch(err){
        throw err;
    }
}

let store = createStore(counter);
export default store;