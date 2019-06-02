import { triangle as triangleReducer } from '../../src/store/reducers/triangle';
import * as types from '../../src/store/types';

describe('triangleReducer', () => {
  test('initial state', () => {
    const action = { type: 'lorem' };
    const initialState = {
      a: 10,
      b: 10,
      c: 10,
      invalid: false,
      type: 'equilateral',
    };

    expect(triangleReducer(undefined, action)).toEqual(initialState);
  });

  test('invalid if a > b + c', () => {
    const action = { type: types.SET_TRIANGLE, payload: { a: 20,  b: 10, c: 10, } };
    const response = triangleReducer(undefined, action);
    expect(response.invalid).toBeTruthy();
  });

  test('invalid if b > a + c', () => {
    const action = { type: types.SET_TRIANGLE, payload: { a: 10,  b: 20, c: 10, } };
    const response = triangleReducer(undefined, action);
    expect(response.invalid).toBeTruthy();
  });

  test('invalid if c > a + b', () => {
    const action = { type: types.SET_TRIANGLE, payload: { a: 10,  b: 10, c: 20, } };
    const response = triangleReducer(undefined, action);
    expect(response.invalid).toBeTruthy();
  });

  test('equilateral if all sides are equal', () => {
    const action = { type: types.SET_TRIANGLE, payload: { a: 10,  b: 10, c: 10, } };
    const response = triangleReducer(undefined, action);
    expect(response.type).toBe('equilateral');
  });

  test('isosceles if two sides are equal', () => {
    const action = { type: types.SET_TRIANGLE, payload: { a: 10,  b: 10, c: 11, } };
    const response = triangleReducer(undefined, action);
    expect(response.type).toBe('isosceles');
  });

  test('scalene if no sides are equal', () => {
    const action = { type: types.SET_TRIANGLE, payload: { a: 10,  b: 11, c: 12, } };
    const response = triangleReducer(undefined, action);
    expect(response.type).toBe('scalene');
  });
})
