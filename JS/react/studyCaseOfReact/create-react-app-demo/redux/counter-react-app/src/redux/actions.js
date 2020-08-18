import {INCREAMENT, DECREAMENT} from './action-types';

export const increase = (value) => ({type: INCREAMENT, data: value});
export const decrease = (value) => ({type: DECREAMENT, data: value});