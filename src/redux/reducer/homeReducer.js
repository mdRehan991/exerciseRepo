const INITIAL_STATE = [];

const homeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SAVE_API':
      return [...action.payload];

    case 'UPDATE_API':
      const id = action.payload.idVal;
      const title = action.payload.titleVal.updatedTitle;
      const body = action.payload.titleVal.updatedBody;
      const arr = [...state];

      arr.splice(id - 1, 1, {id, title, body});

      return arr;

    //  if you want to use slice() use below method, otherwise splice() is a better way to do the job :)
    //  return [...state.slice(0, id-1), {id, title, body}, ...state.slice(id)]

    default:
      return state;
  }
};

export default homeReducer;
