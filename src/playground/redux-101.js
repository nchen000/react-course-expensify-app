import {createStore} from 'redux';

//Action generators
//use of inline ES6 object destructuring
const incrementCount = ({incrementBy = 1} = {}) => ({
  type: 'INCREMENT',
  //dispatch dynamic actions 
  incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({ count }) => ({
  type: 'SET',
  count
});

const resetCount = () => ({
  type: 'RESET'
});

//Reducers
const countReducer = (state = {count: 0}, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'SET':
      return {
        count: action.count
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
};

const store = createStore(countReducer);

//watch for changes
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

//increment count
// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5}));

store.dispatch(incrementCount());

//reset
store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10}));

//force those who use SET to use value of 101
store.dispatch(setCount({count: 101}));