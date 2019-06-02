import configureStore from 'redux-mock-store';
import * as actions from '../../src/store/actions';
import * as types from '../../src/store/types';

const mockStore = configureStore();
const store = mockStore();

describe('setTriangle', () => {
  beforeEach(() => {
    store.clearActions();
  });

  test('Dispatches the correct action and payload', () => {
    store.dispatch(actions.setTriangle({
      a: 10,
      b: 10,
      c: 10,
    }));

    expect(store.getActions()).toEqual([{
      type: types.SET_TRIANGLE,
      payload: { a: 10, b: 10, c: 10 }
    }]);
  })
})
