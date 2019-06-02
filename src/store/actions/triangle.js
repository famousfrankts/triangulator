import * as types from '../types';

// Set full triangle
export const setTriangle = obj => ({ type: types.SET_TRIANGLE, payload: obj });

// Set individual sides
export const setA = num => ({ type: types.SET_A, payload: num });
export const setB = num => ({ type: types.SET_B, payload: num });
export const setC = num => ({ type: types.SET_C, payload: num });
