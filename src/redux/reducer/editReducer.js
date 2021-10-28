const INITIAL_STATE = {};

const editReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SAVE_ITEM':
      return {...state, ...action.payload};
    default:
      return state;
  }
};

export default editReducer;
