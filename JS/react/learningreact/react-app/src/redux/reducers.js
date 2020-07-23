import {ADD_NUMBER, SUB_NUMBER} from './action-types'

const initalState = [];

export default function reducer (state = initalState, action) {
    switch (action.type) {
        case ADD_NUMBER:
            return [...state, action.data]
        case SUB_NUMBER:
        default:
            return state;
    }
}