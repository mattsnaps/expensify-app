import { createStore } from "@reduxjs/toolkit";


const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy: incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy: decrementBy
});

const setCount = ({ count }) => ({
    type: 'SET',
    count: count
});

const resetCount = () => ({
   type: 'RESET'
});

//Reducers
//1. Reducers are pure functions. Not dependent on some outside global variable.
//2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {count: state.count + action.incrementBy};
        case "DECREMENT":
            return {count: state.count - action.decrementBy};
        case "SET":
            return {count: action.count};
        case "RESET":
            return {count: 0};
        default:
            return state;
    }
};

const store = createStore(countReducer);

//This listens and will fire everytime the state changes.
//calling unsubscribe method will turn off the listener.
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

//Must always have the type.
//first one has custom data.
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

//second one just has default data.
store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount( { count: 11 }));


