const INITIAL_STATE = {
  counter: 0,
};

const counterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return {...state, counter: state.counter + 1};
    case 'DECREMENT_COUNTER':
      return {...state, counter: state.counter - 1};
    default:
      return state;
  }
};

export default counterReducer;