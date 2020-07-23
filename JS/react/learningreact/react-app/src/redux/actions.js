import {ADD_NUMBER, SUB_NUMBER} from './action-types'

export const addNumber = (data) => {
    return {type: ADD_NUMBER, data}
};
export const subNumber = (data) => {
    return {type: SUB_NUMBER, data}
};