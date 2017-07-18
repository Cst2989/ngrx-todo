import types from '../constants/';
import { todoReducer } from './';

describe('Reducers', () => {
  const todoText = 'A todo';

  it('Should return the default state', () => {
    expect(todoReducer(undefined, {})).toEqual([]);
  });

  it('Should return new state after action was dispached', () => {
    const action = {
      type: types.SUBMIT_TODO,
      id: 1,
      text: todoText
    };

    const expectedState =
      [
        {
          id: 1,
          text: todoText,
        }
      ]


    expect(todoReducer(undefined, action)).toEqual(expectedState);
  })
});
