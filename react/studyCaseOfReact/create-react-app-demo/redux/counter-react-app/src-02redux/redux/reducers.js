import { INCREAMENT, DECREAMENT} from './action-types';

export const counter = ( state = 0, action) => {
    console.log('state = ', state);
    switch(action.type) {
        case INCREAMENT:
            return state + action.data;
        case DECREAMENT:
            return state - action.data;
        default:
            return state;
    }
}