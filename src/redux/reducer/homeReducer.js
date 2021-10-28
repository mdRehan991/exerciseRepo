const INITIAL_STATE = [];

const homeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SAVE_API':
      return [...state, ...action.payload];
    case 'UPDATE_API':
      const arr = state.map(item => {
        if (item.id == action.payload.idVal) {
          item = {
            ...item,
            title: action.payload.titleVal.updatedTitle,
            body: action.payload.titleVal.updatedBody,
          };
        }
        return item;
      });
      return arr;
    default:
      return state;
  }
};

export default homeReducer;
