import {INCREAMENT, DECREAMENT} from './action-types';

export const counterReducer = (state=0, action) => {
    switch (action.type) {
        case INCREAMENT:
            return state + action.data;
        case DECREAMENT:
            return state - action.data;
        default:
            return state;
    }
}