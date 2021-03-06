import { ADD_TODO, TOGGLE_TODO } from "../actionTypes";

const initialState = {
  allIds: [],
  byIds: {},
};

const todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      // const id = action.payload.id
      // const content = action.payload.content
      /*Using destructuring */
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: { content, completed: false },
        },
      };
    }

    case TOGGLE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds[id],
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed,
          },
        },
      };
    }
    default:
      return state;
  }
};

export default todoReducers;
