import types from '../constants/';

export const todos = [];

export function todoReducer(state = todos, action) {
  switch (action.type) {
    case types.SUBMIT_TODO:
      return [
        ...state, {
          id: action.id,
          text: action.text,
        }
      ]
    case types.DELETE_TODO:
      return state.filter(todo => todo.id !== action.id)
    default:
      return state;
  }
};
