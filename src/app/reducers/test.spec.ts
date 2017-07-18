import types from '../constants/';
import { todoReducer } from './';

describe('Reducers', () => {
  const todoText = 'A todo';

  it('Should return the default state', () => {
    expect(todoReducer(undefined, {})).toEqual([]);
  });

  it('Should return new state after submit action was dispached', () => {
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
          checked: false
        }
      ]


    expect(todoReducer(undefined, action)).toEqual(expectedState);
  });

  it('Should return new state after delete action was dispached', () => {
      const action = {
          type: types.DELETE_TODO,
          id: 1
      };
      const state = [{
          id: 1,
          text: 'A todo',
          checked: false
      }];

      const expectedState = [];

      expect(todoReducer(state, action)).toEqual(expectedState)
  });

  it('Should return new state after check action was dispached', () => {
      const action = {
          type: types.CHECK_TODO,
          id:1
      };
      const state = [{
          id: 1,
          text: 'A todo',
          checked: false
      }];

      const expectedState = [{
          id:1,
          text: 'A todo',
          checked: true
      }];

      expect(todoReducer(state, action)).toEqual(expectedState);
  })


});
