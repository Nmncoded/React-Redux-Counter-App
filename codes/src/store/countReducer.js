import { createStore } from 'redux';
let store = createStore(Reducer);

function Reducer(state = {
    count: 0,
    maxValue:Infinity,
    step:1,
},action){
    switch(action.type){
        case 'increment': 
        return {...state, count: state.count + state.step <= state.maxValue ? state.count + state.step : state.count};
        case 'decrement': 
        return {...state, count: state.count - state.step >= 0 ? state.count - state.step : state.count};
        case 'reset': 
        return {...state, count  : 0, maxValue: Infinity, step : 1};
        case 'updatemaxvalue' : 
        return {...state, maxValue : action.payload};
        case 'updatestep' : 
        return {...state, step : action.payload};
        default: return {...state}; 
    }
}

export default store;