import types from '../constants/';

export const todos = [];

export function todoReducer(state = todos, action) {
  switch (action.type) {
    case types.SUBMIT_TODO:
      return [
        ...state, {
          id: action.id,
          text: action.text,
          checked: false
        }
      ]
    case types.DELETE_TODO:
      return state.filter(todo => todo.id !== action.id)
    case types.CHECK_TODO:
      return state.map(todo => {
          if(todo.id === action.id) todo.checked = !todo.checked;
          return todo
      })
    default:
      return state;
  }
};
