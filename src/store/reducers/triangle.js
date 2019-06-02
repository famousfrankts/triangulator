import * as types from '../types';

// Define initial loading state
const INITIAL_STATE = {
  a: 10,
  b: 10,
  c: 10,
  type: 'equilateral',
  invalid: false,
};

const triangle = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_TRIANGLE:
      // const { a, b, c } = action.payload;
      const a = parseInt(action.payload.a, 10);
      const b = parseInt(action.payload.b, 10);
      const c = parseInt(action.payload.c, 10);

      const equilateral = (a === b && b === c);
      const isosceles   = (a === b || a === c || b === c);
      const type = equilateral ? 'equilateral' : (isosceles ? 'isosceles' : 'scalene');

      // Rule: Longest line must be shorter than the two other sides
      const invalid = (a >= c + b) || (b >= a + c) || (c >= a + b);

      return { ...state, a, b, c, type, invalid };

    default:
      return state;
  }
};

export { triangle };
